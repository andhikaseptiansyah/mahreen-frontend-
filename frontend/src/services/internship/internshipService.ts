import { apiClient } from "../../api/apiClient";
import { API_ENDPOINTS } from "../../api/endpoints";
import type {
  InternshipApplicationInput,
  InternshipApplicationResult,
} from "../../types/internship";
import { readJson, writeJson } from "../storage/browserStorage";
import { runWithDataSource } from "../serviceMode";
import { uploadFileToApi } from "../upload/uploadService";

const LOCAL_APPLICATIONS_KEY = "mahreen:internship:applications";

const submitToApi = async (input: InternshipApplicationInput) => {
  const [cv, portfolio, motivationLetter] = await Promise.all([
    uploadFileToApi(input.cv),
    input.portfolio ? uploadFileToApi(input.portfolio) : Promise.resolve(null),
    uploadFileToApi(input.motivationLetter),
  ]);

  return apiClient<InternshipApplicationResult>(API_ENDPOINTS.internships.create, {
    method: "POST",
    body: {
      fullName: input.fullName,
      email: input.email,
      whatsapp: input.whatsapp,
      linkedin: input.linkedin,
      university: input.university,
      major: input.major,
      semester: input.semester,
      cvFileId: cv.fileId,
      portfolioFileId: portfolio?.fileId,
      motivationLetterFileId: motivationLetter.fileId,
    },
  });
};

const submitLocally = async (
  input: InternshipApplicationInput,
): Promise<InternshipApplicationResult> => {
  const result: InternshipApplicationResult = {
    applicationId: `INT-${Date.now().toString(36).toUpperCase()}`,
    submittedAt: new Date().toISOString(),
    status: "received",
  };
  const applications = readJson<unknown[]>(
    "local",
    LOCAL_APPLICATIONS_KEY,
    [],
  );
  writeJson("local", LOCAL_APPLICATIONS_KEY, [
    ...applications,
    {
      ...result,
      fullName: input.fullName,
      email: input.email,
      whatsapp: input.whatsapp,
      linkedin: input.linkedin,
      university: input.university,
      major: input.major,
      semester: input.semester,
      files: {
        cv: input.cv.name,
        portfolio: input.portfolio?.name ?? null,
        motivationLetter: input.motivationLetter.name,
      },
    },
  ]);
  return result;
};

export const internshipService = {
  submit(input: InternshipApplicationInput) {
    return runWithDataSource(
      () => submitToApi(input),
      () => submitLocally(input),
    );
  },
};
