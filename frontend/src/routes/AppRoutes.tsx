import { useEffect, useState, type ReactNode } from "react";

import Home from "../pages/Home/Home";
import Tentang from "../pages/Tentang/Tentang";
import Portofolio from "../pages/Portofolio/Portofolio";
import Studio from "../pages/Mahreen-Studio/Studio";
import LatestCollections from "../pages/Mahreen-Studio/LatestCollection/LatestCollection";
import DetailProduk from "../pages/Mahreen-Studio/ProdukDetail/Produk_Detail";
import TanyaMahreen from "../pages/TanyaMahreen/TanyaMahreen";
import Konsultasi from "../pages/TanyaMahreen/FreeKonsultasi/Konsultasi";
import CekData from "../pages/TanyaMahreen/CekData/CekData";
import KonsultasiSelesai from "../pages/TanyaMahreen/PermintaanSelesai/KonsultasiSelesai";
import Paket from "../pages/TanyaMahreen/KonfigurasiPaket/Paket";
import Internship from "../pages/Internship/Internship";
import FormInternship from "../pages/Internship/FormInternship";
import PeduliMahreen from "../pages/PeduliMahreen/PeduliMahreen";
import NewsroomHome from "../pages/Newsroom/Home/Home";
import NewsroomBerita from "../pages/Newsroom/Berita/Berita";
import DetailBerita from "../pages/Newsroom/ArticleDetail/DetailBerita";
import WebinarDetail from "../pages/Newsroom/WebinarDetail/WebinarDetail";
import WebinarRegistration from "../pages/Newsroom/WebinarRegistration/WebinarRegistration";
import WebinarPayment from "../pages/Newsroom/WebinarPayment/WebinarPayment";
import RegistrationSuccess from "../pages/Newsroom/RegistrationSuccess/RegistrationSuccess";
import Daftar from "../pages/Daftar/Daftar";
import Login from "../pages/Login/Login";
import ComingSoon from "../pages/ComingSoon/ComingSoon";
import { getWebinarBySlug } from "../data/webinars";

type RouteLocation = {
  path: string;
  searchParams: URLSearchParams;
};

type RouteRenderer = () => ReactNode;

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
  "/mahreen-studio": () => <Studio />,
  "/mahreen-studio/latest-collection": () => <LatestCollections />,
  "/tanya-mahreen": () => <TanyaMahreen />,
  "/tanya-mahreen/konsultasi": () => <Konsultasi />,
  "/tanya-mahreen/konsultasi/cek-data": () => <CekData />,
  "/tanya-mahreen/konsultasi/selesai": () => <KonsultasiSelesai />,
  "/tanya-mahreen/paket": () => <Paket />,
  "/internship": () => <Internship />,
  "/internship/form": () => <FormInternship />,
  "/peduli-mahreen": () => <PeduliMahreen />,
  "/daftar": () => <Daftar />,
  "/newsroom": () => <NewsroomHome />,
  "/mahreen-csr": () => (
    <ComingSoon
      eyebrow="Mahreen CSR"
      title="Platform kolaborasi CSR sedang disiapkan"
      description="Informasi program, kemitraan, dan laporan dampak Mahreen CSR akan tersedia di halaman ini."
    />
  ),
  "/tanya-mahreen/pembayaran": () => (
    <ComingSoon
      eyebrow="Pembayaran"
      title="Halaman pembayaran sedang disiapkan"
      description="Konfigurasi paket Anda sudah tersimpan. Integrasi pembayaran akan tersedia setelah modul transaksi diaktifkan."
    />
  ),
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
    const [webinarSlug, webinarAction] = webinarSegments;
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
      return <WebinarPayment webinar={webinar} />;
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
    return <Login redirectTo={getSafeRedirectTarget(searchParams.get("redirect"))} />;
  }

  const routeRenderer = staticRoutes[path];

  if (routeRenderer) {
    return routeRenderer();
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
