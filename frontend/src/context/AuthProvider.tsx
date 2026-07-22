import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { env } from "../config/env";
import { AUTH_STATE_EVENT } from "../services/auth/authConstants";
import { authService } from "../services/auth/authService";
import type {
  AuthSession,
  AuthUser,
  LoginCredentials,
  RegistrationDraft,
} from "../types/auth";
import { AuthContext, type AuthContextValue } from "./authContextValue";

export const AuthProvider = ({ children }: Readonly<{ children: ReactNode }>) => {
  const cached = authService.getCached();
  const [user, setUser] = useState<AuthUser | null>(cached?.user ?? null);
  const [session, setSession] = useState<AuthSession | null>(cached?.session ?? null);
  const [isLoading, setIsLoading] = useState(env.dataSourceMode !== "local");

  const syncCachedState = useCallback(() => {
    const next = authService.getCached();
    setUser(next?.user ?? null);
    setSession(next?.session ?? null);
  }, []);

  const refresh = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await authService.getCurrent();
      setUser(result?.user ?? null);
      setSession(result?.session ?? null);
    } catch {
      setUser(null);
      setSession(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    let active = true;

    authService
      .getCurrent()
      .then((result) => {
        if (!active) return;
        setUser(result?.user ?? null);
        setSession(result?.session ?? null);
      })
      .catch(() => {
        if (!active) return;
        setUser(null);
        setSession(null);
      })
      .finally(() => {
        if (active) setIsLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    window.addEventListener(AUTH_STATE_EVENT, syncCachedState);
    window.addEventListener("storage", syncCachedState);
    return () => {
      window.removeEventListener(AUTH_STATE_EVENT, syncCachedState);
      window.removeEventListener("storage", syncCachedState);
    };
  }, [syncCachedState]);

  const login = useCallback(async (credentials: LoginCredentials) => {
    const result = await authService.login(credentials);
    setUser(result.user);
    setSession(result.session);
  }, []);

  const register = useCallback(
    (draft: RegistrationDraft) => authService.register(draft),
    [],
  );

  const logout = useCallback(async () => {
    await authService.logout();
    setUser(null);
    setSession(null);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      session,
      isAuthenticated: Boolean(user && session),
      isLoading,
      dataSourceMode: env.dataSourceMode,
      login,
      register,
      logout,
      refresh,
    }),
    [isLoading, login, logout, refresh, register, session, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
