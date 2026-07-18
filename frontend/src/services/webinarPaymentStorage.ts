import type { WebinarData } from "../data/webinars";
import type { StoredWebinarRegistration } from "./webinarRegistrationStorage";

export const WEBINAR_PAYMENT_METHOD_KEY = "mahreen-webinar-payment-method";
export const WEBINAR_PAYMENT_KEY = "mahreen-webinar-payment";

export type WebinarPaymentMethod = "qris" | "bank-transfer" | "e-wallet";

export type WebinarPaymentBreakdown = {
  registrationFee: number;
  platformFee: number;
  discount: number;
  total: number;
};

export type StoredWebinarPayment = {
  id: string;
  registrationId: string | null;
  webinarSlug: string;
  webinarTitle: string;
  participantName: string | null;
  participantEmail: string | null;
  method: WebinarPaymentMethod;
  breakdown: WebinarPaymentBreakdown;
  status: "simulated-paid";
  paidAt: string;
};

const isBrowser = () => typeof window !== "undefined";

const getMethodKey = (webinarSlug: string) =>
  `${WEBINAR_PAYMENT_METHOD_KEY}:${webinarSlug}`;

const getPaymentKey = (webinarSlug: string) =>
  `${WEBINAR_PAYMENT_KEY}:${webinarSlug}`;

export const calculateWebinarPayment = (
  webinar: WebinarData,
): WebinarPaymentBreakdown => {
  const platformFee = 5000;
  const discount = Math.max(0, webinar.originalPrice - webinar.price);

  return {
    registrationFee: webinar.originalPrice,
    platformFee,
    discount,
    total: webinar.price + platformFee,
  };
};

export const readWebinarPaymentMethod = (
  webinarSlug: string,
): WebinarPaymentMethod => {
  if (!isBrowser()) return "qris";

  const storedMethod = window.localStorage.getItem(getMethodKey(webinarSlug));

  if (
    storedMethod === "qris" ||
    storedMethod === "bank-transfer" ||
    storedMethod === "e-wallet"
  ) {
    return storedMethod;
  }

  return "qris";
};

export const saveWebinarPaymentMethod = (
  webinarSlug: string,
  method: WebinarPaymentMethod,
) => {
  if (!isBrowser()) return;

  try {
    window.localStorage.setItem(getMethodKey(webinarSlug), method);
  } catch {
    // The interface remains usable when localStorage is unavailable.
  }
};

export const saveWebinarPayment = (
  webinar: WebinarData,
  method: WebinarPaymentMethod,
  registration: StoredWebinarRegistration | null,
): StoredWebinarPayment => {
  const payment: StoredWebinarPayment = {
    id: `PAY-${Date.now()}`,
    registrationId: registration?.id ?? null,
    webinarSlug: webinar.slug,
    webinarTitle: webinar.title,
    participantName: registration?.fullName ?? null,
    participantEmail: registration?.email ?? null,
    method,
    breakdown: calculateWebinarPayment(webinar),
    status: "simulated-paid",
    paidAt: new Date().toISOString(),
  };

  if (isBrowser()) {
    try {
      const serializedPayment = JSON.stringify(payment);

      window.localStorage.setItem(
        getPaymentKey(webinar.slug),
        serializedPayment,
      );
      window.localStorage.setItem(WEBINAR_PAYMENT_KEY, serializedPayment);
    } catch {
      // The simulated payment still succeeds in memory.
    }
  }

  return payment;
};

const parseStoredPayment = (
  value: string | null,
): StoredWebinarPayment | null => {
  if (!value) return null;

  try {
    const parsed = JSON.parse(value) as Partial<StoredWebinarPayment>;

    if (
      typeof parsed.id !== "string" ||
      typeof parsed.webinarSlug !== "string" ||
      typeof parsed.webinarTitle !== "string" ||
      typeof parsed.method !== "string" ||
      typeof parsed.paidAt !== "string" ||
      !parsed.breakdown
    ) {
      return null;
    }

    return parsed as StoredWebinarPayment;
  } catch {
    return null;
  }
};

export const readWebinarPayment = (webinarSlug: string) => {
  if (!isBrowser()) return null;

  return parseStoredPayment(
    window.localStorage.getItem(getPaymentKey(webinarSlug)),
  );
};

export const getWebinarPaymentMethodLabel = (
  method: WebinarPaymentMethod,
) => {
  if (method === "bank-transfer") return "Bank Transfer";
  if (method === "e-wallet") return "E-Wallet Direct";
  return "QRIS";
};
