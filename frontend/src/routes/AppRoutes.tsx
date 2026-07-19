import { useEffect, useState } from "react";

import Home from "../pages/Home/Home";
import Portofolio from "../pages/Portofolio/Portofolio";
import Studio from "../pages/Mahreen-Studio/Studio";
import DetailProduk from "../pages/Mahreen-Studio/ProdukDetail/Produk_Detail";
import Internship from "../pages/Internship/Internship";
import PeduliMahreen from "../pages/PeduliMahreen/PeduliMahreen";
import FormInternship from "../pages/Internship/FormInternship";
import Daftar from "../pages/Daftar/Daftar";
import Login from "../pages/Login/Login";
import CSR from "../pages/CSR/CSR";
import ProgramObjective from "../pages/ProgramObjective/ProgramObjective";

const getCurrentRoute = () => {
  const hash = window.location.hash;

  if (!hash || hash === "#") {
    return "/";
  }

  return hash.replace("#", "");
};

const AppRoutes = () => {
  const [currentRoute, setCurrentRoute] = useState(() => getCurrentRoute());

  useEffect(() => {
    if (!window.location.hash || window.location.hash === "#") {
      window.history.replaceState(null, "", "#/");
    }

    const handleHashChange = () => {
      setCurrentRoute(getCurrentRoute());

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const renderPage = () => {
    if (
      currentRoute.startsWith("/mahreen-studio/product/") ||
      currentRoute.startsWith("/product/")
    ) {
      return <DetailProduk />;
    }

    switch (currentRoute) {
      case "/mahreen-studio":
        return <Studio />;

      case "/internship":
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

      case "/profil-sejarah":
      case "/visi-misi":
      case "/legalitas":
      case "/tanya-mahreen":
      case "/mahreen-csr":
        return <CSR />;

      case "/kebijakan-privasi":
      case "/syarat-ketentuan":
        return <Home />;

      case "/program-objective":
        return <ProgramObjective />;

      case "/":
      default:
        return <Home />;
    }
  };

  return <div className="app-route">{renderPage()}</div>;
};

export default AppRoutes;