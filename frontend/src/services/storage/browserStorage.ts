type StorageKind = "local" | "session";

const getStorage = (kind: StorageKind): Storage | null => {
  if (typeof window === "undefined") return null;

  try {
    return kind === "local" ? window.localStorage : window.sessionStorage;
  } catch {
    return null;
  }
};

export const readJson = <T,>(kind: StorageKind, key: string, fallback: T): T => {
  const storage = getStorage(kind);
  if (!storage) return fallback;

  try {
    const raw = storage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
};

export const writeJson = <T,>(kind: StorageKind, key: string, value: T) => {
  const storage = getStorage(kind);
  if (!storage) return false;

  try {
    storage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
};

export const removeStoredValue = (kind: StorageKind, key: string) => {
  const storage = getStorage(kind);
  if (!storage) return;

  try {
    storage.removeItem(key);
  } catch {
    // Browser storage may be unavailable in privacy-restricted environments.
  }
};
