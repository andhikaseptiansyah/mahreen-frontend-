import { apiClient } from "../../api/apiClient";
import { API_ENDPOINTS } from "../../api/endpoints";
import type { CSRRegistrationData } from "../../types/csrRegistration";
import { readJson, writeJson } from "../storage/browserStorage";
import { runWithDataSource } from "../serviceMode";
import { uploadFileToApi } from "../upload/uploadService";

const LOCAL_APPLICATIONS_KEY = "mahreen:csr:applications";

export type CSRApplicationResult = {
  applicationId: string;
  submittedAt: string;
  status: "received";
};

type CSRApplicationRequest = {
  role: CSRRegistrationData["role"];
  fullName: string;
  focusArea: string;
  email: string;
  whatsapp: string;
  province: string;
  city: string;
  vision: string;
  motivation: string;
  acceptedTerms: boolean;
  documentFileId?: string;
};

const createApplicationId = () =>
  `CSR-${new Date().getFullYear()}-${Date.now().toString(36).toUpperCase()}`;

const toRequest = (
  data: CSRRegistrationData,
  documentFileId?: string,
): CSRApplicationRequest => ({
  role: data.role,
  fullName: data.fullName,
  focusArea: data.focusArea,
  email: data.email,
  whatsapp: data.whatsapp,
  province: data.province,
  city: data.city,
  vision: data.vision,
  motivation: data.motivation,
  acceptedTerms: data.acceptedTerms,
  documentFileId,
});

const submitToApi = async (
  data: CSRRegistrationData,
  file?: File,
): Promise<CSRApplicationResult> => {
  const uploaded = file ? await uploadFileToApi(file) : null;
  return apiClient<CSRApplicationResult>(API_ENDPOINTS.csr.applications, {
    method: "POST",
    body: toRequest(data, uploaded?.fileId),
  });
};

const submitLocally = async (
  data: CSRRegistrationData,
  file?: File,
): Promise<CSRApplicationResult> => {
  const result: CSRApplicationResult = {
    applicationId: data.applicationId || createApplicationId(),
    submittedAt: new Date().toISOString(),
    status: "received",
  };
  const applications = readJson<Array<CSRRegistrationData & CSRApplicationResult>>(
    "local",
    LOCAL_APPLICATIONS_KEY,
    [],
  );
  writeJson("local", LOCAL_APPLICATIONS_KEY, [
    ...applications,
    {
      ...data,
      ...result,
      document: file
        ? { name: file.name, size: file.size, type: file.type }
        : data.document,
    },
  ]);
  return result;
};

export const csrApplicationService = {
  submit(data: CSRRegistrationData, file?: File) {
    return runWithDataSource(
      () => submitToApi(data, file),
      () => submitLocally(data, file),
    );
  },
};
