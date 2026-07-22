import { createContext } from "react";
import { env } from "../config/env";
import type {
  AuthSession,
  AuthUser,
  LoginCredentials,
  RegistrationDraft,
} from "../types/auth";

export type AuthContextValue = {
  user: AuthUser | null;
  session: AuthSession | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  dataSourceMode: typeof env.dataSourceMode;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (draft: RegistrationDraft) => Promise<AuthUser>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextValue | null>(null);
