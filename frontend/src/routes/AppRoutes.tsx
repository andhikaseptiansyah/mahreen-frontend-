import { useEffect, useState } from "react";

import Home from "../pages/Home/Home";
import Portofolio from "../pages/Portofolio/Portofolio";
import Studio from "../pages/Mahreen-Studio/Studio";
import LastestColections from "../pages/Mahreen-Studio/LatestCollection/LatestCollection";
import DetailProduk from "../pages/Mahreen-Studio/ProdukDetail/Produk_Detail";
import Internship from "../pages/Internship/Internship";
import PeduliMahreen from "../pages/PeduliMahreen/PeduliMahreen";
import FormInternship from "../pages/Internship/FormInternship";
import Daftar from "../pages/Daftar/Daftar";
import Login from "../pages/Login/Login";
import Tentang from "../pages/Tentang/Tentang";
import TanyaMahreen from "../pages/TanyaMahreen/TanyaMahreen";
import ComingSoon from "../pages/ComingSoon/ComingSoon";

type RouteLocation = {
  path: string;
  section: string | null;
};

const normalizePath = (path: string) => {
  if (!path) return "/";

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (normalizedPath.length > 1 && normalizedPath.endsWith("/")) {
    return normalizedPath.slice(0, -1);
  }

  return normalizedPath;
};

const getCurrentLocation = (): RouteLocation => {
  const rawHash = window.location.hash.replace(/^#/, "") || "/";
  const [rawPath, rawQuery = ""] = rawHash.split("?");
  const searchParams = new URLSearchParams(rawQuery);

  return {
    path: normalizePath(rawPath),
    section: searchParams.get("section"),
  };
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
    const targetSection =
      currentLocation.section ??
      (currentLocation.path === "/kontak" ? "contact" : null);

    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        if (targetSection) {
          const targetElement = document.getElementById(targetSection);

          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            return;
          }
        }

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);

      if (secondFrame) {
        window.cancelAnimationFrame(secondFrame);
      }
    };
  }, [currentLocation.path, currentLocation.section]);

  const renderPage = () => {
    const { path } = currentLocation;

    if (
      path.startsWith("/mahreen-studio/product/") ||
      path.startsWith("/product/")
    ) {
      return <DetailProduk />;
    }

    if (path.startsWith("/learning/")) {
      return <Internship />;
    }

    switch (path) {
      case "/mahreen-studio":
        return <Studio />;

      case "/mahreen-studio/latest-collection":
      case "/mahreen-studio/collections":
        return <LastestColections />;

      case "/internship":
      case "/programs":
      case "/kelas":
        return <Internship />;

      case "/internship/form":
        return <FormInternship />;

      case "/peduli-mahreen":
        return <PeduliMahreen />;

      case "/portofolio":
        return <Portofolio />;

      case "/daftar":
        return <Daftar />;

      case "/login":
        return <Login />;

      case "/tentang":
      case "/about":
      case "/profil-sejarah":
      case "/visi-misi":
      case "/legalitas":
      case "/tentang/profil-sejarah":
      case "/tentang/visi-misi":
      case "/tentang/legalitas":
        return <Tentang />;

      case "/tanya-mahreen":
        return <TanyaMahreen />;

      case "/kontak":
        return <Home />;

      case "/newsroom":
        return (
          <ComingSoon
            eyebrow="Newsroom"
            title="Newsroom Mahreen sedang disiapkan"
            description="Artikel, kabar program, dan agenda terbaru Mahreen Indonesia akan tersedia di halaman ini."
          />
        );

      case "/mahreen-csr":
        return (
          <ComingSoon
            eyebrow="Mahreen CSR"
            title="Platform kolaborasi CSR sedang disiapkan"
            description="Informasi program, kemitraan, dan laporan dampak Mahreen CSR akan tersedia di halaman ini."
          />
        );

      case "/kebijakan-privasi":
        return (
          <ComingSoon
            eyebrow="Legal"
            title="Kebijakan Privasi sedang disiapkan"
            description="Dokumen kebijakan privasi Mahreen Indonesia sedang dalam proses finalisasi."
          />
        );

      case "/syarat-ketentuan":
        return (
          <ComingSoon
            eyebrow="Legal"
            title="Syarat dan Ketentuan sedang disiapkan"
            description="Dokumen syarat dan ketentuan penggunaan platform sedang dalam proses finalisasi."
          />
        );

      case "/":
      default:
        return <Home />;
    }
  };

  return <div className="app-route">{renderPage()}</div>;
};

export default AppRoutes;