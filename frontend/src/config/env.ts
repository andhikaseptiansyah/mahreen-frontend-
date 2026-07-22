export type DataSourceMode = "local" | "api" | "auto";

const readString = (value: string | undefined, fallback: string) => {
  const normalized = value?.trim();
  return normalized ? normalized : fallback;
};

const readBoolean = (value: string | undefined, fallback: boolean) => {
  if (value === undefined) return fallback;
  return value.toLowerCase() === "true";
};

const readPositiveNumber = (value: string | undefined, fallback: number) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
};

const readDataSourceMode = (value: string | undefined): DataSourceMode => {
  if (value === "api" || value === "auto") return value;
  return "local";
};

const apiBaseUrl = readString(import.meta.env.VITE_API_BASE_URL, "/api").replace(/\/$/, "");
const dataSourceMode = readDataSourceMode(import.meta.env.VITE_DATA_SOURCE);

export const env = Object.freeze({
  apiBaseUrl,
  dataSourceMode,
  apiTimeoutMs: readPositiveNumber(import.meta.env.VITE_API_TIMEOUT_MS, 15_000),
  useCredentials: readBoolean(import.meta.env.VITE_API_USE_CREDENTIALS, true),
  enableLocalFallback:
    dataSourceMode === "auto" &&
    readBoolean(import.meta.env.VITE_ENABLE_LOCAL_FALLBACK, true),
});

export const isLocalDataSource = () => env.dataSourceMode === "local";
export const isApiDataSource = () => env.dataSourceMode === "api";
export const isAutoDataSource = () => env.dataSourceMode === "auto";
