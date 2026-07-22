import { isApiUnavailableError } from "../../api/apiError";
import { env } from "../../config/env";
import type { LoginCredentials, RegistrationDraft } from "../../types/auth";
import { apiAuthAdapter } from "./apiAuthAdapter";
import { localAuthAdapter } from "./localAuthAdapter";

const withConfiguredAdapter = async <T,>(
  apiOperation: () => Promise<T>,
  localOperation: () => Promise<T>,
): Promise<T> => {
  if (env.dataSourceMode === "local") return localOperation();
  if (env.dataSourceMode === "api") return apiOperation();

  try {
    return await apiOperation();
  } catch (error) {
    if (!env.enableLocalFallback || !isApiUnavailableError(error)) throw error;
    return localOperation();
  }
};

export const authService = {
  register(draft: RegistrationDraft) {
    return withConfiguredAdapter(
      () => apiAuthAdapter.register(draft),
      () => localAuthAdapter.register(draft),
    );
  },

  login(credentials: LoginCredentials) {
    return withConfiguredAdapter(
      () => apiAuthAdapter.login(credentials),
      () => localAuthAdapter.login(credentials),
    );
  },

  logout() {
    return withConfiguredAdapter(
      () => apiAuthAdapter.logout(),
      () => localAuthAdapter.logout(),
    );
  },

  getCurrent() {
    return withConfiguredAdapter(
      () => apiAuthAdapter.getCurrent(),
      () => localAuthAdapter.getCurrent(),
    );
  },

  getCached() {
    return env.dataSourceMode === "local"
      ? localAuthAdapter.getCached()
      : apiAuthAdapter.getCached() ??
          (env.dataSourceMode === "auto" ? localAuthAdapter.getCached() : null);
  },
};
