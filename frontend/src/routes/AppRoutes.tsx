import { useEffect, useState, type ReactNode } from "react";
import ProtectedRoute from "../components/Auth/ProtectedRoute";
import Home from "../pages/Home/Home";
import Tentang from "../pages/Tentang/Tentang";
import Portofolio from "../pages/Portofolio/Portofolio";
import Studio from "../pages/Mahreen-Studio/Studio";
import LatestCollections from "../pages/Mahreen-Studio/LatestCollection/LatestCollection";
import DetailProduk from "../pages/Mahreen-Studio/ProdukDetail/Produk_Detail";
import OrderSummary from "../pages/Mahreen-Studio/OrderSummary/OrderSummary";
import PaymentPage from "../pages/Mahreen-Studio/Payment/Payment";
import ReviewPage from "../pages/Mahreen-Studio/Review/Review";
import LacakPesananPage from "../pages/Mahreen-Studio/LacakPesanan/LacakPesanan";
import TanyaMahreen from "../pages/TanyaMahreen/TanyaMahreen";
import Konsultasi from "../pages/TanyaMahreen/Konsultasi/FreeKonsultasi/Konsultasi";
import CekData from "../pages/TanyaMahreen/Konsultasi/CekData/CekData";
import KonsultasiSelesai from "../pages/TanyaMahreen/Konsultasi/PermintaanSelesai/KonsultasiSelesai";
import HubungiPM from "../pages/TanyaMahreen/Konsultasi/HubungiPM/HubungiPM";
import KonfigurasiPaketWeb from "../pages/TanyaMahreen/KonfigurasiPaket/KonfigurasiPaketWeb/KonfigurasiPaketWeb";
import KonfigurasiPaketBranding from "../pages/TanyaMahreen/KonfigurasiPaket/KonfigurasiPaketBranding/KonfigurasiPaketBranding";
import KonfigurasiPaketSocialMedia from "../pages/TanyaMahreen/KonfigurasiPaket/KonfigurasiPaketSocialMedia/KonfigurasiPaketSocialMedia";
import KonfigurasiPaketDigitalMarketing from "../pages/TanyaMahreen/KonfigurasiPaket/KonfigurasiPaketDigitalMarketing/KonfigurasiPaketDigitalMarketing";
import KonfigurasiPaketAdvertising from "../pages/TanyaMahreen/KonfigurasiPaket/KonfigurasiPaketAdvertising/KonfigurasiPaketAdvertising";
import KonfigurasiPaketContent from "../pages/TanyaMahreen/KonfigurasiPaket/KonfigurasiPaketContent/KonfigurasiPaketContent";
import KonfigurasiPaketConsultation from "../pages/TanyaMahreen/KonfigurasiPaket/KonfigurasiPaketConsultation/KonfigurasiPaketConsultation";
import Pembayaran from "../pages/TanyaMahreen/KonfigurasiPaket/Pembayaran/Pembayaran";
import KonfirmasiPembayaran from "../pages/TanyaMahreen/KonfigurasiPaket/Pembayaran/KonfirmasiPembayaran";
import PembayaranBerhasil from "../pages/TanyaMahreen/KonfigurasiPaket/Pembayaran/PembayaranBerhasil";
import AksesClientPortal from "../pages/TanyaMahreen/KonfigurasiPaket/Pembayaran/AksesClientPortal";
import KickoffMeeting from "../pages/TanyaMahreen/KonfigurasiPaket/Pembayaran/KickoffMeeting";
import Internship from "../pages/Internship/Internship";
import FormInternship from "../pages/Internship/FormInternship";
import PeduliMahreen from "../pages/PeduliMahreen/PeduliMahreen";
import MahreenCSR from "../pages/CSR/CSR";
import ProgramObjective from "../pages/CSR/ProgramObjective/ProgramObjective";
import {
  CSRDetailsPage,
  CSRMotivationPage,
  CSRRolePage,
  CSRSuccessPage,
} from "../pages/CSR/Registration";
import PilihNominal from "../pages/PeduliMahreen/Donasi/PilihNominal";
import DataDonatur from "../pages/PeduliMahreen/Donasi/DataDonatur";
import MetodePembayaranDonasi from "../pages/PeduliMahreen/Donasi/MetodePembayaran";
import DonasiBerhasil from "../pages/PeduliMahreen/Donasi/DonasiBerhasil";
import NewsroomHome from "../pages/Newsroom/Home/Home";
import NewsroomBerita from "../pages/Newsroom/Berita/Berita";
import DetailBerita from "../pages/Newsroom/ArticleDetail/DetailBerita";
import WebinarDetail from "../pages/Newsroom/WebinarDetail/WebinarDetail";
import WebinarRegistration from "../pages/Newsroom/WebinarRegistration/WebinarRegistration";
import WebinarPayment from "../pages/Newsroom/WebinarPayment/WebinarPayment";
import WebinarPaymentQris from "../pages/Newsroom/WebinarPaymentQris/WebinarPaymentQris";
import WebinarBankTransfer from "../pages/Newsroom/WebinarBankTransfer/WebinarBankTransfer";
import RegistrationSuccess from "../pages/Newsroom/RegistrationSuccess/RegistrationSuccess";
import Daftar from "../pages/Daftar/Daftar";
import InformasiDasar from "../pages/Daftar/InformasiDasar";
import ProfilPreferensi from "../pages/Daftar/ProfilPreferensi";
import RingkasanPendaftaran from "../pages/Daftar/RingkasanPendaftaran";
import Login from "../pages/Login/Login";
import DashboardClient from "../pages/DashboardClient/DashboardClient";
import Contact from "../pages/Contact/Contact";
import ComingSoon from "../pages/ComingSoon/ComingSoon";
import { getWebinarBySlug } from "../data/webinars";
import { packageCatalog } from "../pages/TanyaMahreen/KonfigurasiPaket/packageCatalog";

type RouteLocation = {
  path: string;
  searchParams: URLSearchParams;
};

type RouteRenderer = () => ReactNode;

const protectedRoutePrefixes = [
  "/akun",
  "/peduli-mahreen/donasi",
  "/tanya-mahreen/pembayaran",
  "/mahreen-studio/order-summary",
  "/mahreen-studio/checkout",
  "/mahreen-studio/payment",
  "/mahreen-studio/review",
  "/mahreen-studio/lacak-pesanan",
  "/mahreen-studio/tracking",
] as const;

const requiresAuthentication = (path: string) =>
  protectedRoutePrefixes.some(
    (prefix) => path === prefix || path.startsWith(`${prefix}/`),
  );

const normalizePath = (path: string) => {
  const pathWithLeadingSlash = path.startsWith("/") ? path : `/${path}`;
  const normalizedPath = pathWithLeadingSlash.replace(/\/{2,}/g, "/");

  if (normalizedPath.length > 1 && normalizedPath.endsWith("/")) {
    return normalizedPath.slice(0, -1);
  }

  return normalizedPath || "/";
};

const getCurrentLocation = (): RouteLocation => {
  const rawHash = window.location.hash.replace(/^#/, "") || "/";
  const queryIndex = rawHash.indexOf("?");
  const rawPath = queryIndex >= 0 ? rawHash.slice(0, queryIndex) : rawHash;
  const rawQuery = queryIndex >= 0 ? rawHash.slice(queryIndex + 1) : "";

  return {
    path: normalizePath(rawPath || "/"),
    searchParams: new URLSearchParams(rawQuery),
  };
};

const getSafeRedirectTarget = (value: string | null) => {
  if (
    !value ||
    !value.startsWith("/") ||
    value.startsWith("//") ||
    value.includes("\\") ||
    value.includes("#")
  ) {
    return null;
  }

  const queryIndex = value.indexOf("?");
  const rawPath = queryIndex >= 0 ? value.slice(0, queryIndex) : value;
  const rawQuery = queryIndex >= 0 ? value.slice(queryIndex + 1) : "";

  if (rawPath.includes(":") || normalizePath(rawPath) === "/login") {
    return null;
  }

  const targetPath = normalizePath(rawPath);
  return rawQuery ? `${targetPath}?${rawQuery}` : targetPath;
};

const getRouteTarget = ({ path, searchParams }: RouteLocation) => {
  const query = searchParams.toString();
  return query ? `${path}?${query}` : path;
};

const getTargetSection = ({ path, searchParams }: RouteLocation) => {
  const explicitSection = searchParams.get("section");

  if (explicitSection) return explicitSection;
  if (path === "/internship" && searchParams.has("program")) return "jalur-program";
  if (path === "/tanya-mahreen" && searchParams.has("service")) return "solutions";

  return null;
};

const staticRoutes: Readonly<Record<string, RouteRenderer>> = {
  "/": () => <Home />,
  "/tentang": () => <Tentang />,
  "/portofolio": () => <Portofolio />,
  "/contact": () => <Contact />,
  "/kontak": () => <Contact />,
  "/hubungi-kami": () => <Contact />,
  "/mahreen-studio": () => <Studio />,
  "/mahreen-studio/latest-collection": () => <LatestCollections />,
  "/mahreen-studio/order-summary": () => <OrderSummary />,
  "/mahreen-studio/checkout": () => <OrderSummary />,
  "/mahreen-studio/payment": () => <PaymentPage />,
  "/mahreen-studio/checkout/payment": () => <PaymentPage />,
  "/mahreen-studio/review": () => <ReviewPage />,
  "/mahreen-studio/checkout/review": () => <ReviewPage />,
  "/mahreen-studio/lacak-pesanan": () => <LacakPesananPage />,
  "/mahreen-studio/tracking": () => <LacakPesananPage />,
  "/tanya-mahreen": () => <TanyaMahreen />,
  "/tanya-mahreen/konsultasi": () => <Konsultasi />,
  "/tanya-mahreen/konsultasi/cek-data": () => <CekData />,
  "/tanya-mahreen/konsultasi/selesai": () => <KonsultasiSelesai />,
  "/tanya-mahreen/konsultasi/hubungi-pm": () => <HubungiPM />,
  // Alias lama dipertahankan agar tautan lama tidak rusak.
  "/tanya-mahreen/paket": () => <KonfigurasiPaketWeb />,
  [packageCatalog.website.route]: () => <KonfigurasiPaketWeb />,
  [packageCatalog.branding.route]: () => <KonfigurasiPaketBranding />,
  [packageCatalog["social-media"].route]: () => <KonfigurasiPaketSocialMedia />,
  [packageCatalog["digital-marketing"].route]: () => <KonfigurasiPaketDigitalMarketing />,
  [packageCatalog.advertising.route]: () => <KonfigurasiPaketAdvertising />,
  [packageCatalog["content-production"].route]: () => <KonfigurasiPaketContent />,
  [packageCatalog.consultation.route]: () => <KonfigurasiPaketConsultation />,
  "/internship": () => <Internship />,
  "/internship/form": () => <FormInternship />,
  "/peduli-mahreen": () => <PeduliMahreen />,
  "/peduli-mahreen/donasi": () => <PilihNominal />,
  "/peduli-mahreen/donasi/data-diri": () => <DataDonatur />,
  "/peduli-mahreen/donasi/pembayaran": () => <MetodePembayaranDonasi />,
  "/peduli-mahreen/donasi/berhasil": () => <DonasiBerhasil />,
  "/daftar": () => <Daftar />,
  "/daftar/informasi-dasar": () => <InformasiDasar />,
  "/daftar/profil-preferensi": () => <ProfilPreferensi />,
  "/daftar/ringkasan": () => <RingkasanPendaftaran />,
  "/akun": () => <DashboardClient />,
  "/akun/edit": () => (
    <ComingSoon
      eyebrow="Client Dashboard"
      title="Edit profile sedang disiapkan"
      description="Form pembaruan identitas, perusahaan, alamat resmi, dan integrasi LinkedIn akan tersedia pada tahap berikutnya."
    />
  ),
  "/newsroom": () => <NewsroomHome />,
  "/mahreen-csr": () => <MahreenCSR />,
  "/mahreen-csr/program-objective": () => <ProgramObjective />,
  "/mahreen-csr/pendaftaran": () => <CSRRolePage />,
  "/mahreen-csr/pendaftaran/detail": () => <CSRDetailsPage />,
  "/mahreen-csr/pendaftaran/motivasi": () => <CSRMotivationPage />,
  "/mahreen-csr/pendaftaran/sukses": () => <CSRSuccessPage />,
  // Alias lama dipertahankan agar tautan yang sudah tersebar tetap berfungsi.
  "/program-objective": () => <ProgramObjective />,
  "/tanya-mahreen/pembayaran": () => <Pembayaran />,
  "/tanya-mahreen/pembayaran/konfirmasi": () => <KonfirmasiPembayaran />,
  "/tanya-mahreen/pembayaran/berhasil": () => <PembayaranBerhasil />,
  "/tanya-mahreen/pembayaran/client-portal": () => <AksesClientPortal />,
  "/tanya-mahreen/pembayaran/kick-off": () => <KickoffMeeting />,
  "/lupa-sandi": () => (
    <ComingSoon
      eyebrow="Akun"
      title="Pemulihan kata sandi sedang disiapkan"
      description="Fitur pemulihan akun akan tersedia setelah layanan autentikasi terhubung dengan backend."
    />
  ),
  "/kebijakan-privasi": () => (
    <ComingSoon
      eyebrow="Legal"
      title="Kebijakan Privasi sedang disiapkan"
      description="Dokumen kebijakan privasi Mahreen Indonesia sedang dalam proses finalisasi."
    />
  ),
  "/syarat-ketentuan": () => (
    <ComingSoon
      eyebrow="Legal"
      title="Syarat dan Ketentuan sedang disiapkan"
      description="Dokumen syarat dan ketentuan penggunaan platform sedang dalam proses finalisasi."
    />
  ),
  "/dokumen/haki": () => (
    <ComingSoon
      eyebrow="Dokumen Legal"
      title="Dokumen HAKI sedang disiapkan"
      description="Salinan dokumen HAKI akan tersedia setelah berkas publik selesai diverifikasi."
    />
  ),
  "/dokumen/keputusan-menteri": () => (
    <ComingSoon
      eyebrow="Dokumen Legal"
      title="Keputusan Menteri sedang disiapkan"
      description="Salinan keputusan Menteri Hukum akan tersedia setelah berkas publik selesai diverifikasi."
    />
  ),
};

const renderRoute = (location: RouteLocation) => {
  const { path, searchParams } = location;

  if (path.startsWith("/mahreen-studio/product/")) {
    return <DetailProduk />;
  }

  if (path.startsWith("/portofolio/")) {
    return (
      <ComingSoon
        eyebrow="Portofolio"
        title="Detail portofolio sedang disiapkan"
        description="Studi kasus lengkap untuk karya ini belum dipublikasikan. Silakan kembali ke halaman portofolio untuk melihat karya lainnya."
      />
    );
  }

  if (path === "/newsroom/berita") {
    return <NewsroomBerita />;
  }

  if (path.startsWith("/newsroom/berita/")) {
    const slug = decodeURIComponent(path.slice("/newsroom/berita/".length));
    return <DetailBerita slug={slug} />;
  }

  if (path.startsWith("/newsroom/webinar/")) {
    const webinarPath = decodeURIComponent(
      path.slice("/newsroom/webinar/".length),
    );
    const webinarSegments = webinarPath.split("/").filter(Boolean);
    const [webinarSlug, webinarAction, webinarPaymentAction] = webinarSegments;
    const webinar = webinarSlug ? getWebinarBySlug(webinarSlug) : null;

    if (!webinar) {
      return (
        <ComingSoon
          eyebrow="Newsroom Webinar"
          title="Detail webinar sedang disiapkan"
          description="Informasi lengkap webinar ini akan tersedia pada tahap berikutnya."
        />
      );
    }

    if (webinarSegments.length === 1) {
      return <WebinarDetail webinar={webinar} />;
    }

    if (webinarSegments.length === 2 && webinarAction === "daftar") {
      return <WebinarRegistration webinar={webinar} />;
    }

    if (webinarSegments.length === 2 && webinarAction === "pembayaran") {
      return webinar.isFree ? (
        <WebinarRegistration webinar={webinar} />
      ) : (
        <WebinarPayment webinar={webinar} />
      );
    }

    if (
      webinarSegments.length === 3 &&
      webinarAction === "pembayaran" &&
      webinarPaymentAction === "qris"
    ) {
      return webinar.isFree ? (
        <WebinarRegistration webinar={webinar} />
      ) : (
        <WebinarPaymentQris webinar={webinar} />
      );
    }

    if (
      webinarSegments.length === 3 &&
      webinarAction === "pembayaran" &&
      webinarPaymentAction === "transfer-bank"
    ) {
      return webinar.isFree ? (
        <WebinarRegistration webinar={webinar} />
      ) : (
        <WebinarBankTransfer webinar={webinar} />
      );
    }

    if (webinarSegments.length === 2 && webinarAction === "sukses") {
      return <RegistrationSuccess webinar={webinar} />;
    }

    return (
      <ComingSoon
        eyebrow="Newsroom Webinar"
        title="Tahapan webinar belum tersedia"
        description="Alamat tahapan webinar yang Anda buka belum terdaftar."
      />
    );
  }

  if (path.startsWith("/newsroom/")) {
    return (
      <ComingSoon
        eyebrow="Newsroom"
        title="Detail artikel sedang disiapkan"
        description="Halaman artikel lengkap akan tersedia setelah modul detail Newsroom selesai dikembangkan."
      />
    );
  }

  if (path === "/login") {
    return (
      <Login
        redirectTo={getSafeRedirectTarget(searchParams.get("redirect"))}
        registered={searchParams.get("registered") === "1"}
        initialEmail={searchParams.get("email")}
        authRequired={searchParams.get("required") === "1"}
      />
    );
  }

  const routeRenderer = staticRoutes[path];

  if (routeRenderer) {
    const page = routeRenderer();
    return requiresAuthentication(path) ? (
      <ProtectedRoute targetPath={getRouteTarget(location)}>{page}</ProtectedRoute>
    ) : page;
  }

  return (
    <ComingSoon
      eyebrow="404"
      title="Halaman tidak ditemukan"
      description="Alamat yang Anda buka tidak terdaftar atau sudah tidak digunakan."
    />
  );
};

const AppRoutes = () => {
  const [currentLocation, setCurrentLocation] = useState<RouteLocation>(() =>
    getCurrentLocation()
  );

  useEffect(() => {
    if (!window.location.hash || window.location.hash === "#") {
      window.history.replaceState(null, "", "#/");
    }

    const handleHashChange = () => {
      setCurrentLocation(getCurrentLocation());
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    const targetSection = getTargetSection(currentLocation);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const useInstantScroll =
      reduceMotion || currentLocation.path.startsWith("/newsroom");
    let secondFrame = 0;

    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        if (targetSection) {
          const targetElement = document.getElementById(targetSection);

          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: useInstantScroll ? "auto" : "smooth",
              block: "start",
            });
            return;
          }
        }

        window.scrollTo({
          top: 0,
          behavior: useInstantScroll ? "auto" : "smooth",
        });
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);

      if (secondFrame) {
        window.cancelAnimationFrame(secondFrame);
      }
    };
  }, [currentLocation]);

  return <div className="app-route">{renderRoute(currentLocation)}</div>;
};

export default AppRoutes;
