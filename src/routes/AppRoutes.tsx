import { useEffect, useState } from "react";

import Home from "../pages/Home/Home";
import Portofolio from "../pages/Portofolio/Portofolio";
import Studio from "../pages/Mahreen-Studio/Studio";
import Internship from "../pages/Internship/Internship";
import FormInternship from "../pages/Internship/FormInternship";
import Daftar from "../pages/Daftar/Daftar";

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
    switch (currentRoute) {
      case "/mahreen-studio":
        return <Studio />;

      case "/internship":
        return <Internship />;

      case "/internship/form":
        return <FormInternship />;

      case "/portofolio":
        return <Portofolio />;

      case "/daftar":
      case "/login":
        return <Daftar />;

      case "/":
      default:
        return <Home />;
    }
  };

  return <div className="app-route">{renderPage()}</div>;
};

export default AppRoutes;
