export const API_ENDPOINTS = Object.freeze({
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    logout: "/auth/logout",
    me: "/auth/me",
  },
  uploads: {
    create: "/uploads",
  },
  csr: {
    applications: "/csr/applications",
    application: (applicationId: string) => `/csr/applications/${encodeURIComponent(applicationId)}`,
  },
  donations: {
    create: "/donations",
    detail: (transactionId: string) => `/donations/${encodeURIComponent(transactionId)}`,
    payment: (transactionId: string) => `/donations/${encodeURIComponent(transactionId)}/payment`,
  },
  serviceOrders: {
    create: "/service-orders",
    detail: (transactionId: string) => `/service-orders/${encodeURIComponent(transactionId)}`,
    payment: (transactionId: string) => `/service-orders/${encodeURIComponent(transactionId)}/payment`,
  },
  consultations: {
    create: "/consultations",
  },
  internships: {
    create: "/internships/applications",
  },
  webinars: {
    register: (slug: string) => `/webinars/${encodeURIComponent(slug)}/registrations`,
    payment: (slug: string) => `/webinars/${encodeURIComponent(slug)}/payments`,
  },
});
