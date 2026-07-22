export type AccountType = "individual" | "company" | "community";

export type RegistrationDraft = {
  accountType: AccountType | "";
  profilePhoto: string;
  fullName: string;
  nickname: string;
  email: string;
  whatsapp: string;
  password: string;
  birthDate: string;
  gender: string;
  jobTitle: string;
  institution: string;
  linkedin: string;
  portfolio: string;
  instagram: string;
  interests: string[];
  newsletter: boolean;
};

export type StoredAccount = Omit<RegistrationDraft, "accountType"> & {
  accountType: AccountType;
  id: string;
  createdAt: string;
};

export type AuthUser = Omit<StoredAccount, "password">;

export type AuthSession = {
  accountId: string;
  email: string;
  fullName: string;
  accountType: AccountType;
  loggedInAt: string;
};

export type LoginCredentials = {
  email: string;
  password: string;
  remember: boolean;
};

export type AuthResult = {
  user: AuthUser;
  session: AuthSession;
};
