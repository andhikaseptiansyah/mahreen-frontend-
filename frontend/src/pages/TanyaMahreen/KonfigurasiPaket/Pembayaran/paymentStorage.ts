import type {
  BillingInformationValue,
  PaymentDetailsValue,
  PaymentMethodId,
  ServicePaymentDraft,
  WebsitePackageSelection,
} from "./paymentTypes";

export const PAYMENT_DRAFT_KEY = "mahreen:service-payment-draft";
export const PAYMENT_MEETING_KEY = "mahreen:service-payment-meeting";

export const createTransactionId = () => {
  const now = new Date();
  const year = now.getFullYear();
  const sequence = `${now.getMonth() + 1}${now.getDate()}${now.getHours()}${now.getMinutes()}${now.getSeconds()}`
    .padStart(10, "0")
    .slice(-10);

  return `INV/${year}/${sequence}`;
};

export const savePaymentDraft = (draft: ServicePaymentDraft) => {
  window.localStorage.setItem(PAYMENT_DRAFT_KEY, JSON.stringify(draft));
};

export const createAndSavePaymentDraft = (value: {
  selection: WebsitePackageSelection;
  billingInformation: BillingInformationValue;
  selectedMethod: PaymentMethodId;
  paymentDetails: PaymentDetailsValue;
  total: number;
}) => {
  const draft: ServicePaymentDraft = {
    ...value,
    transactionId: createTransactionId(),
    status: "pending",
    updatedAt: new Date().toISOString(),
  };

  savePaymentDraft(draft);
  return draft;
};

export const getPaymentDraft = (): ServicePaymentDraft | null => {
  if (typeof window === "undefined") return null;

  try {
    const rawDraft = window.localStorage.getItem(PAYMENT_DRAFT_KEY);
    if (!rawDraft) return null;

    const parsed = JSON.parse(rawDraft) as ServicePaymentDraft;

    if (
      !parsed ||
      typeof parsed.total !== "number" ||
      typeof parsed.transactionId !== "string" ||
      typeof parsed.selectedMethod !== "string" ||
      !parsed.paymentDetails ||
      !parsed.selection ||
      !parsed.billingInformation
    ) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
};

export const markPaymentPaid = () => {
  const draft = getPaymentDraft();
  if (!draft) return null;

  const paidDraft: ServicePaymentDraft = {
    ...draft,
    status: "paid",
    updatedAt: new Date().toISOString(),
  };

  savePaymentDraft(paidDraft);
  return paidDraft;
};

export const getClientEmail = (fullName: string) => {
  const slug = fullName
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ".")
    .replace(/^\.|\.$/g, "") || "client";

  return `${slug}@client.mahreen.id`;
};
