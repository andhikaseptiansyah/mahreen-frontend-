import type {
  AuthResult,
  AuthSession,
  AuthUser,
  LoginCredentials,
  RegistrationDraft,
  StoredAccount,
} from "../../types/auth";
import { readJson, removeStoredValue, writeJson } from "../storage/browserStorage";
import { AUTH_STATE_EVENT, AUTH_STORAGE_KEYS, emptyRegistrationDraft } from "./authConstants";
import { registrationDraftService } from "./registrationDraftService";

const dispatchAuthStateChange = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(AUTH_STATE_EVENT));
  }
};

const toAuthUser = ({ password, ...user }: StoredAccount): AuthUser => {
  void password;
  return user;
};

const getAccounts = () =>
  readJson<StoredAccount[]>("local", AUTH_STORAGE_KEYS.accounts, []);

const createDemoAccount = (): StoredAccount => ({
  ...emptyRegistrationDraft,
  id: "MHR-DEMO",
  accountType: "individual",
  fullName: "Mahreen Demo User",
  nickname: "Mahreen",
  email: "demo@mahreen.id",
  whatsapp: "+62 812 0000 2026",
  password: "Mahreen123!",
  jobTitle: "Creative Professional",
  institution: "Mahreen Indonesia",
  interests: ["Tanya Mahreen", "Mahreen Studio", "Exclusive Events"],
  createdAt: new Date().toISOString(),
});

const findAccount = (email: string, password: string) => {
  const normalizedEmail = email.trim().toLowerCase();
  const account = getAccounts().find(
    (item) =>
      item.email.trim().toLowerCase() === normalizedEmail &&
      item.password === password,
  );

  if (account) return account;
  if (normalizedEmail === "demo@mahreen.id" && password === "Mahreen123!") {
    return createDemoAccount();
  }
  return null;
};

const buildSession = (account: StoredAccount): AuthSession => ({
  accountId: account.id,
  email: account.email,
  fullName: account.fullName,
  accountType: account.accountType,
  loggedInAt: new Date().toISOString(),
});

const storeAuthResult = (result: AuthResult, remember: boolean) => {
  const target = remember ? "local" : "session";
  const other = remember ? "session" : "local";

  removeStoredValue(other, AUTH_STORAGE_KEYS.session);
  removeStoredValue(other, AUTH_STORAGE_KEYS.user);
  writeJson(target, AUTH_STORAGE_KEYS.session, result.session);
  writeJson(target, AUTH_STORAGE_KEYS.user, result.user);
  dispatchAuthStateChange();
};

export const localAuthAdapter = {
  async register(draft: RegistrationDraft): Promise<AuthUser> {
    const accounts = getAccounts();
    const normalizedEmail = draft.email.trim().toLowerCase();

    if (!draft.accountType) throw new Error("Tipe akun belum dipilih.");
    if (
      accounts.some(
        (account) => account.email.trim().toLowerCase() === normalizedEmail,
      )
    ) {
      throw new Error("Email tersebut sudah terdaftar. Silakan masuk ke akun Anda.");
    }

    const account: StoredAccount = {
      ...draft,
      accountType: draft.accountType,
      email: normalizedEmail,
      id: `MHR-${Date.now().toString(36).toUpperCase()}`,
      createdAt: new Date().toISOString(),
    };

    writeJson("local", AUTH_STORAGE_KEYS.accounts, [...accounts, account]);
    registrationDraftService.clear();
    return toAuthUser(account);
  },

  async login(credentials: LoginCredentials): Promise<AuthResult> {
    const account = findAccount(credentials.email, credentials.password);
    if (!account) {
      throw new Error("Email atau kata sandi tidak sesuai. Gunakan akun yang telah didaftarkan.");
    }

    const result = {
      user: toAuthUser(account),
      session: buildSession(account),
    };
    storeAuthResult(result, credentials.remember);
    return result;
  },

  async logout() {
    removeStoredValue("local", AUTH_STORAGE_KEYS.session);
    removeStoredValue("session", AUTH_STORAGE_KEYS.session);
    removeStoredValue("local", AUTH_STORAGE_KEYS.user);
    removeStoredValue("session", AUTH_STORAGE_KEYS.user);
    dispatchAuthStateChange();
  },

  async getCurrent(): Promise<AuthResult | null> {
    const cached = this.getCached();
    if (!cached) return null;

    if (cached.user.id === "MHR-DEMO") return cached;
    const account = getAccounts().find(
      (item) => item.id === cached.session.accountId,
    );
    if (!account) {
      await this.logout();
      return null;
    }

    return { session: cached.session, user: toAuthUser(account) };
  },

  getCached(): AuthResult | null {
    const session =
      readJson<AuthSession | null>("session", AUTH_STORAGE_KEYS.session, null) ??
      readJson<AuthSession | null>("local", AUTH_STORAGE_KEYS.session, null);
    const user =
      readJson<AuthUser | null>("session", AUTH_STORAGE_KEYS.user, null) ??
      readJson<AuthUser | null>("local", AUTH_STORAGE_KEYS.user, null);

    return session && user ? { session, user } : null;
  },
};
