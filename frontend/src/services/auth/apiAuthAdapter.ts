import { apiClient } from "../../api/apiClient";
import { ApiError } from "../../api/apiError";
import { API_ENDPOINTS } from "../../api/endpoints";
import type {
  AuthResult,
  AuthSession,
  AuthUser,
  LoginCredentials,
  RegistrationDraft,
} from "../../types/auth";
import { readJson, removeStoredValue, writeJson } from "../storage/browserStorage";
import { AUTH_STATE_EVENT, AUTH_STORAGE_KEYS } from "./authConstants";
import { registrationDraftService } from "./registrationDraftService";

type ApiAuthResponse = AuthResult | { user: AuthUser; session?: AuthSession } | AuthUser;

const dispatchAuthStateChange = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(AUTH_STATE_EVENT));
  }
};

const createSessionFromUser = (user: AuthUser): AuthSession => ({
  accountId: user.id,
  email: user.email,
  fullName: user.fullName,
  accountType: user.accountType,
  loggedInAt: new Date().toISOString(),
});

const normalizeAuthResult = (response: ApiAuthResponse): AuthResult => {
  if ("user" in response) {
    return {
      user: response.user,
      session: response.session ?? createSessionFromUser(response.user),
    };
  }

  return { user: response, session: createSessionFromUser(response) };
};

const storeCache = (result: AuthResult, remember: boolean) => {
  const target = remember ? "local" : "session";
  const other = remember ? "session" : "local";

  removeStoredValue(other, AUTH_STORAGE_KEYS.session);
  removeStoredValue(other, AUTH_STORAGE_KEYS.user);
  writeJson(target, AUTH_STORAGE_KEYS.session, result.session);
  writeJson(target, AUTH_STORAGE_KEYS.user, result.user);
  dispatchAuthStateChange();
};

const clearCache = () => {
  removeStoredValue("local", AUTH_STORAGE_KEYS.session);
  removeStoredValue("session", AUTH_STORAGE_KEYS.session);
  removeStoredValue("local", AUTH_STORAGE_KEYS.user);
  removeStoredValue("session", AUTH_STORAGE_KEYS.user);
  dispatchAuthStateChange();
};

export const apiAuthAdapter = {
  async register(draft: RegistrationDraft): Promise<AuthUser> {
    const response = await apiClient<ApiAuthResponse>(API_ENDPOINTS.auth.register, {
      method: "POST",
      body: draft,
    });
    const result = normalizeAuthResult(response);
    registrationDraftService.clear();
    return result.user;
  },

  async login(credentials: LoginCredentials): Promise<AuthResult> {
    const response = await apiClient<ApiAuthResponse>(API_ENDPOINTS.auth.login, {
      method: "POST",
      body: {
        email: credentials.email,
        password: credentials.password,
        remember: credentials.remember,
      },
    });
    const result = normalizeAuthResult(response);
    storeCache(result, credentials.remember);
    return result;
  },

  async logout() {
    try {
      await apiClient<unknown>(API_ENDPOINTS.auth.logout, { method: "POST" });
    } finally {
      clearCache();
    }
  },

  async getCurrent(): Promise<AuthResult | null> {
    try {
      const response = await apiClient<ApiAuthResponse>(API_ENDPOINTS.auth.me);
      const result = normalizeAuthResult(response);
      const cachedInLocal = Boolean(
        readJson<AuthSession | null>("local", AUTH_STORAGE_KEYS.session, null),
      );
      storeCache(result, cachedInLocal);
      return result;
    } catch (error) {
      if (error instanceof ApiError && (error.status === 401 || error.status === 403)) {
        clearCache();
      }
      throw error;
    }
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
