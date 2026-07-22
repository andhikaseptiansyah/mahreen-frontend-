import type {
  DonationDonorInformation,
  DonationDraft,
  DonationPaymentMethodId,
} from "./donationTypes";

export const DONATION_STORAGE_KEY = "mahreen:peduli-donation-draft";

const emptyDonor: DonationDonorInformation = {
  fullName: "",
  email: "",
  whatsapp: "",
  anonymous: false,
  message: "",
};

const createTransactionId = () => {
  const now = new Date();
  const token = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(
    now.getDate(),
  ).padStart(2, "0")}${String(now.getHours()).padStart(2, "0")}${String(
    now.getMinutes(),
  ).padStart(2, "0")}${String(now.getSeconds()).padStart(2, "0")}`;

  return `PMH-${token.slice(-10)}`;
};

export const createDonationDraft = (amount = 100_000): DonationDraft => {
  const now = new Date().toISOString();

  return {
    amount,
    donor: emptyDonor,
    paymentMethod: null,
    transactionId: createTransactionId(),
    status: "draft",
    createdAt: now,
    updatedAt: now,
  };
};

export const getDonationDraft = (): DonationDraft => {
  if (typeof window === "undefined") return createDonationDraft();

  try {
    const raw = window.localStorage.getItem(DONATION_STORAGE_KEY);
    if (!raw) return createDonationDraft();

    const parsed = JSON.parse(raw) as Partial<DonationDraft>;

    if (!parsed || typeof parsed.amount !== "number" || parsed.amount <= 0) {
      return createDonationDraft();
    }

    return {
      amount: parsed.amount,
      donor: {
        ...emptyDonor,
        ...(parsed.donor ?? {}),
      },
      paymentMethod: parsed.paymentMethod ?? null,
      transactionId:
        typeof parsed.transactionId === "string" && parsed.transactionId
          ? parsed.transactionId
          : createTransactionId(),
      status: parsed.status === "paid" ? "paid" : "draft",
      createdAt: parsed.createdAt ?? new Date().toISOString(),
      updatedAt: parsed.updatedAt ?? new Date().toISOString(),
    };
  } catch {
    return createDonationDraft();
  }
};

export const saveDonationDraft = (draft: DonationDraft) => {
  if (typeof window === "undefined") return draft;

  const nextDraft: DonationDraft = {
    ...draft,
    updatedAt: new Date().toISOString(),
  };

  window.localStorage.setItem(DONATION_STORAGE_KEY, JSON.stringify(nextDraft));
  return nextDraft;
};

export const saveDonationAmount = (amount: number) => {
  const draft = getDonationDraft();
  return saveDonationDraft({
    ...draft,
    amount,
    status: "draft",
  });
};

export const saveDonorInformation = (donor: DonationDonorInformation) => {
  const draft = getDonationDraft();
  return saveDonationDraft({
    ...draft,
    donor,
    status: "draft",
  });
};

export const saveDonationPaymentMethod = (paymentMethod: DonationPaymentMethodId) => {
  const draft = getDonationDraft();
  return saveDonationDraft({
    ...draft,
    paymentMethod,
    status: "draft",
  });
};

export const markDonationPaid = () => {
  const draft = getDonationDraft();
  return saveDonationDraft({
    ...draft,
    status: "paid",
  });
};
