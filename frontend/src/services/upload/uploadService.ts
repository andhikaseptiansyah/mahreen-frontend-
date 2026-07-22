import { apiClient } from "../../api/apiClient";
import { API_ENDPOINTS } from "../../api/endpoints";
import { runWithDataSource } from "../serviceMode";

export type UploadedFileResult = {
  fileId: string;
  fileName: string;
  fileUrl?: string;
};

export const uploadFileToApi = async (file: File) => {
  const body = new FormData();
  body.append("file", file);
  return apiClient<UploadedFileResult>(API_ENDPOINTS.uploads.create, {
    method: "POST",
    body,
  });
};

export const createLocalUpload = async (file: File): Promise<UploadedFileResult> => ({
  fileId: `LOCAL-FILE-${Date.now().toString(36).toUpperCase()}`,
  fileName: file.name,
});

export const uploadService = {
  upload(file: File) {
    return runWithDataSource(
      () => uploadFileToApi(file),
      () => createLocalUpload(file),
    );
  },
};
