import { apiClient } from "../../api/apiClient";
import { API_ENDPOINTS } from "../../api/endpoints";
import type { DonationDraft } from "../../pages/PeduliMahreen/Donasi/donationTypes";
import {
  getDonationDraft,
  markDonationPaid,
  saveDonationDraft,
} from "../../pages/PeduliMahreen/Donasi/donationStorage";
import { runWithDataSource } from "../serviceMode";

type DonationApiResult = Partial<DonationDraft> & {
  transactionId: string;
  status: "draft" | "paid";
};

const processThroughApi = async (draft: DonationDraft): Promise<DonationDraft> => {
  const result = await apiClient<DonationApiResult>(API_ENDPOINTS.donations.create, {
    method: "POST",
    body: {
      amount: draft.amount,
      donor: draft.donor,
      paymentMethod: draft.paymentMethod,
      clientTransactionId: draft.transactionId,
    },
  });

  return saveDonationDraft({
    ...draft,
    ...result,
    status: result.status,
    transactionId: result.transactionId,
  });
};

const processLocally = async () => markDonationPaid();

export const donationService = {
  processPayment(draft = getDonationDraft()) {
    return runWithDataSource(
      () => processThroughApi(draft),
      () => processLocally(),
    );
  },
};
