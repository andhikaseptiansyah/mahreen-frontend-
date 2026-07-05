import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import Portofolio from "./pages/Portofolio/Portofolio";
import Studio from "./pages/Mahreen-Studio/Studio";

const getCurrentRoute = () => {
  const hash = window.location.hash;

  if (!hash || hash === "#") {
    return "/";
  }

  return hash.replace("#", "");
};

function App() {
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

      case "/portofolio":
        return <Portofolio />;

      case "/":
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-shell">
      <div className="app-route">{renderPage()}</div>
    </div>
  );
}

export default App;
