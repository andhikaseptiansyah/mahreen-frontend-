import digitalMarketingImage from "../assets/Newsroom/webinar-digital.png";
import uiUxImage from "../assets/Newsroom/webinar-uiux.png";
import digitalMentorImage from "../assets/Internship/raka-pratama.jpg";
import uiUxMentorImage from "../assets/Internship/siti-mahreen.jpg";

export type WebinarTimelineItem = {
  title: string;
  description: string;
  date: string;
};

export type WebinarMentor = {
  name: string;
  image: string;
  imageAlt: string;
  quote: string;
  bio: string;
  profileHref: string;
};

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
  isFree: boolean;
  scheduleDate: string;
  scheduleTime: string;
  heroImage: string;
  heroImageAlt: string;
  topics: readonly string[];
  mentor: WebinarMentor;
  timeline: readonly WebinarTimelineItem[];
  benefits: readonly string[];
  bundleTitle: string;
  bundleDescription: string;
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
    isFree: false,
    scheduleDate: "15 Dec 2024",
    scheduleTime: "19:00 WIB",
    heroImage: digitalMarketingImage,
    heroImageAlt: "Dashboard analitik digital marketing",
    topics: [
      "Fundamental & Ecosystem Digital Marketing",
      "Targeting & Buyer Persona Profiling",
      "Organic Content Growth Strategies",
      "Paid Advertising: FB, IG & Google Ads",
      "Conversion Rate Optimization (CRO)",
      "Marketing Analytics & KPI Tracking",
    ],
    mentor: {
      name: "Ahmad Sulaiman",
      image: digitalMentorImage,
      imageAlt: "Ahmad Sulaiman, mentor Digital Marketing Masterclass",
      quote:
        "Membangun bisnis bukan hanya tentang menjual produk, tetapi tentang bagaimana Anda bercerita dan membangun koneksi di dunia digital.",
      bio:
        "Berpengalaman lebih dari 12 tahun sebagai Head of Digital Marketing di berbagai startup. Telah membantu lebih dari 50 brand nasional melakukan transformasi digital dan pertumbuhan terukur.",
      profileHref: "#/newsroom",
    },
    timeline: [
      {
        title: "Pendaftaran Dibuka",
        description:
          "Periode early bird dengan potongan harga khusus premium member.",
        date: "15 Mei - 20 Mei 2024",
      },
      {
        title: "Onboarding & Prep Task",
        description: "Persiapan teknis dan akses ke portal belajar Mahreen.",
        date: "21 Mei 2024",
      },
      {
        title: "Webinar Masterclass",
        description:
          "Sesi live interaktif bersama mentor dan studi kasus nyata.",
        date: "22 Mei 2024, 19:00 WIB",
      },
      {
        title: "Penyerahan Sertifikat",
        description:
          "E-Certificate akan dikirimkan ke dashboard peserta masing-masing.",
        date: "23 Mei 2024",
      },
      {
        title: "Akses Rekaman",
        description:
          "Peserta mendapatkan rekaman penuh untuk dipelajari kembali kapan saja.",
        date: "Unlimited Access",
      },
    ],
    benefits: [
      "E-Certificate Resmi",
      "Recording & Modul",
      "Private Community Access",
      "Premium Dashboard Access",
      "Practical Workbook",
      "Resource Library",
    ],
    bundleTitle: "Promo Bundling",
    bundleDescription:
      "Dapatkan akses ke 5 webinar marketing lainnya dengan diskon hingga 60%.",
  },
  {
    slug: "ui-ux-design-masterclass",
    title: "UI/UX Design Masterclass",
    titleLead: "UI/UX Design",
    titleHighlight: "Masterclass",
    category: "Free Masterclass",
    durationMinutes: 140,
    description:
      "Pelajari proses merancang pengalaman digital yang mudah digunakan, mulai dari memahami kebutuhan pengguna, menyusun user flow, membuat wireframe, hingga membangun prototipe interaktif.",
    price: 0,
    originalPrice: 0,
    isFree: true,
    scheduleDate: "28 Oct 2024",
    scheduleTime: "19:00 WIB",
    heroImage: uiUxImage,
    heroImageAlt: "Proses perancangan antarmuka dan pengalaman pengguna UI UX",
    topics: [
      "Fundamental UI, UX, dan Human-Centered Design",
      "User Research & Problem Definition",
      "User Persona, Journey Map, dan User Flow",
      "Wireframing untuk Web dan Mobile",
      "Visual Hierarchy, Typography, dan Design System",
      "Interactive Prototyping & Usability Testing",
    ],
    mentor: {
      name: "Siti Aminah",
      image: uiUxMentorImage,
      imageAlt: "Siti Aminah, mentor UI UX Design Masterclass",
      quote:
        "Desain yang baik bukan sekadar terlihat menarik. Desain harus membantu pengguna mencapai tujuan dengan jelas, nyaman, dan tanpa kebingungan yang tidak perlu.",
      bio:
        "Senior Product Designer dengan pengalaman merancang produk digital untuk startup dan perusahaan teknologi. Berfokus pada user research, design system, prototyping, dan peningkatan pengalaman pengguna berbasis data.",
      profileHref: "#/newsroom",
    },
    timeline: [
      {
        title: "Pendaftaran Gratis Dibuka",
        description:
          "Peserta dapat mengamankan kursi tanpa biaya selama kuota masih tersedia.",
        date: "15 - 27 Oct 2024",
      },
      {
        title: "Konfirmasi Peserta",
        description:
          "Tautan webinar dan panduan teknis dikirim melalui email serta WhatsApp.",
        date: "28 Oct 2024, 17:00 WIB",
      },
      {
        title: "UI/UX Design Masterclass",
        description:
          "Sesi live interaktif, demonstrasi wireframe, dan praktik prototyping bersama mentor.",
        date: "28 Oct 2024, 19:00 WIB",
      },
      {
        title: "Penyerahan Sertifikat",
        description:
          "E-Certificate dikirimkan setelah peserta menyelesaikan sesi webinar.",
        date: "29 Oct 2024",
      },
      {
        title: "Akses Rekaman",
        description:
          "Rekaman dan materi pendukung tersedia untuk dipelajari kembali.",
        date: "30 Hari Akses",
      },
    ],
    benefits: [
      "E-Certificate Resmi",
      "Recording & Modul UI/UX",
      "Private Community Access",
      "Dashboard Peserta",
      "UI/UX Practical Workbook",
      "Design Resource Library",
    ],
    bundleTitle: "Kelas Lanjutan UI/UX",
    bundleDescription:
      "Lanjutkan pembelajaran melalui kelas wireframing, design system, dan prototyping tingkat berikutnya.",
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

export const getWebinarPaymentInstructionPath = (
  slug: string,
  method: "qris" | "bank-transfer" | "e-wallet",
) =>
  `${getWebinarPaymentPath(slug)}/${
    method === "bank-transfer" ? "transfer-bank" : "qris"
  }`;

export const getWebinarSuccessPath = (slug: string) =>
  `${getWebinarDetailPath(slug)}/sukses`;

export const formatRupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
