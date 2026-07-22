import { isApiUnavailableError } from "../api/apiError";
import { env } from "../config/env";

export const runWithDataSource = async <T,>(
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
