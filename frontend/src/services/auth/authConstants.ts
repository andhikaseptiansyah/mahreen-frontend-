import type { RegistrationDraft } from "../../types/auth";

export const AUTH_STORAGE_KEYS = Object.freeze({
  registrationDraft: "mahreen:auth:registration-draft",
  accounts: "mahreen:auth:accounts",
  session: "mahreen:auth:session",
  user: "mahreen:auth:user",
});

export const AUTH_STATE_EVENT = "mahreen:auth-state-change";

export const emptyRegistrationDraft: RegistrationDraft = {
  accountType: "",
  profilePhoto: "",
  fullName: "",
  nickname: "",
  email: "",
  whatsapp: "",
  password: "",
  birthDate: "",
  gender: "",
  jobTitle: "",
  institution: "",
  linkedin: "",
  portfolio: "",
  instagram: "",
  interests: [],
  newsletter: false,
};
