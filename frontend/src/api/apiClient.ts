import { env } from "../config/env";
import type { ApiEnvelope } from "../types/api";
import { ApiError, type ApiErrorDetails } from "./apiError";

type RequestBody = BodyInit | Record<string, unknown> | null;

type ApiRequestOptions = Omit<RequestInit, "body"> & {
  body?: RequestBody;
  timeoutMs?: number;
};

type ErrorPayload = {
  message?: string;
  code?: string;
  errors?: ApiErrorDetails;
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const isBodyInit = (value: unknown): value is BodyInit =>
  typeof value === "string" ||
  value instanceof Blob ||
  value instanceof FormData ||
  value instanceof URLSearchParams ||
  value instanceof ArrayBuffer ||
  ArrayBuffer.isView(value);

const buildRequestBody = (
  body: RequestBody | undefined,
): BodyInit | null | undefined => {
  if (body === undefined) return undefined;
  if (body === null) return null;
  if (isBodyInit(body)) return body;
  return JSON.stringify(body);
};

const parseResponseBody = async (response: Response): Promise<unknown> => {
  if (response.status === 204) return null;

  const contentType = response.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    return response.json().catch(() => null);
  }

  return response.text().catch(() => "");
};

const unwrapResponse = <T,>(payload: unknown): T => {
  if (isRecord(payload) && "data" in payload) {
    return (payload as ApiEnvelope<T>).data;
  }

  return payload as T;
};

export const apiClient = async <T,>(
  endpoint: string,
  options: ApiRequestOptions = {},
): Promise<T> => {
  const controller = new AbortController();
  const timeout = window.setTimeout(
    () => controller.abort(),
    options.timeoutMs ?? env.apiTimeoutMs,
  );

  const requestBody = buildRequestBody(options.body);
  const isFormData = requestBody instanceof FormData;
  const headers = new Headers(options.headers);

  if (requestBody && !isFormData && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }
  if (!headers.has("Accept")) headers.set("Accept", "application/json");

  try {
    const response = await fetch(`${env.apiBaseUrl}${endpoint}`, {
      ...options,
      body: requestBody,
      headers,
      credentials: env.useCredentials ? "include" : options.credentials,
      signal: controller.signal,
    });

    const payload = await parseResponseBody(response);

    if (!response.ok) {
      const errorPayload = isRecord(payload) ? (payload as ErrorPayload) : {};
      throw new ApiError({
        message: errorPayload.message ?? `Permintaan gagal dengan status ${response.status}.`,
        status: response.status,
        code: errorPayload.code,
        details: errorPayload.errors,
      });
    }

    return unwrapResponse<T>(payload);
  } catch (error) {
    if (error instanceof ApiError) throw error;

    const isAbort = error instanceof DOMException && error.name === "AbortError";
    throw new ApiError({
      message: isAbort
        ? "Permintaan ke server melewati batas waktu."
        : "Server tidak dapat dihubungi. Periksa koneksi atau konfigurasi API.",
      isNetworkError: true,
    });
  } finally {
    window.clearTimeout(timeout);
  }
};
