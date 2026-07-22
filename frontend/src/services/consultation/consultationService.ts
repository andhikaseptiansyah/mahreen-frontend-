import { apiClient } from "../../api/apiClient";
import { API_ENDPOINTS } from "../../api/endpoints";
import type { KonsultasiDraft } from "../konsultasiDraft";
import { readJson, writeJson } from "../storage/browserStorage";
import { runWithDataSource } from "../serviceMode";
import { uploadFileToApi } from "../upload/uploadService";

const LOCAL_REQUESTS_KEY = "mahreen:consultation:requests";

export type ConsultationResult = {
  requestId: string;
  submittedAt: string;
  status: "received";
};

const submitToApi = async (draft: KonsultasiDraft, files: File[]) => {
  const uploadedFiles = await Promise.all(files.map(uploadFileToApi));
  return apiClient<ConsultationResult>(API_ENDPOINTS.consultations.create, {
    method: "POST",
    body: {
      ...draft,
      fileIds: uploadedFiles.map((file) => file.fileId),
    },
  });
};

const submitLocally = async (
  draft: KonsultasiDraft,
): Promise<ConsultationResult> => {
  const result: ConsultationResult = {
    requestId: `KSL-${Date.now().toString(36).toUpperCase()}`,
    submittedAt: new Date().toISOString(),
    status: "received",
  };
  const requests = readJson<Array<KonsultasiDraft & ConsultationResult>>(
    "local",
    LOCAL_REQUESTS_KEY,
    [],
  );
  writeJson("local", LOCAL_REQUESTS_KEY, [...requests, { ...draft, ...result }]);
  return result;
};

export const consultationService = {
  submit(draft: KonsultasiDraft, files: File[]) {
    return runWithDataSource(
      () => submitToApi(draft, files),
      () => submitLocally(draft),
    );
  },
};
