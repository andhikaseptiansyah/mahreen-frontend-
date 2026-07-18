export type WebinarData = {
  slug: string;
  title: string;
  titleLead: string;
  titleHighlight: string;
  category: string;
  durationMinutes: number;
  description: string;
  price: number;
  originalPrice: number;
  scheduleDate: string;
  scheduleTime: string;
};

const webinars: ReadonlyArray<WebinarData> = [
  {
    slug: "digital-marketing-strategy",
    title: "Digital Marketing Masterclass 2024",
    titleLead: "Digital Marketing",
    titleHighlight: "Masterclass 2024",
    category: "Premium Masterclass",
    durationMinutes: 120,
    description:
      "Kuasai strategi pemasaran digital terkini, mulai dari optimasi konten hingga manajemen kampanye iklan berbayar untuk meningkatkan performa bisnis Anda secara signifikan.",
    price: 149000,
    originalPrice: 499000,
    scheduleDate: "Dec 15, 2024",
    scheduleTime: "19:00 WIB",
  },
];

export const getWebinarBySlug = (slug: string) =>
  webinars.find((webinar) => webinar.slug === slug) ?? null;

export const getWebinarDetailPath = (slug: string) =>
  `/newsroom/webinar/${encodeURIComponent(slug)}`;

export const getWebinarRegistrationPath = (slug: string) =>
  `${getWebinarDetailPath(slug)}/daftar`;

export const getWebinarPaymentPath = (slug: string) =>
  `${getWebinarDetailPath(slug)}/pembayaran`;

export const getWebinarSuccessPath = (slug: string) =>
  `${getWebinarDetailPath(slug)}/sukses`;

export const formatRupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
