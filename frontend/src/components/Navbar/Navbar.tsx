import { useEffect, useRef, useState } from "react";
import mahreenLogo from "../../assets/Navbar/mahreen-logo.png";

type NavigationItem = {
  label: string;
  href: string;
};

const ecosystemItems: readonly NavigationItem[] = [
  { label: "Mahreen Studio", href: "#/mahreen-studio" },
  { label: "Tanya Mahreen", href: "#/tanya-mahreen" },
  { label: "Peduli Mahreen", href: "#/peduli-mahreen" },
  { label: "Mahreen CSR", href: "#/mahreen-csr" },
  { label: "Internship", href: "#/internship" },
];

const getCurrentRoute = () => {
  if (typeof window === "undefined") return "/";

  const hash = window.location.hash;

  if (!hash || hash === "#" || hash === "#/") {
    return "/";
  }

  return hash.replace(/^#/, "");
};

const normalizePath = (path: string) => {
  if (!path) return "/";

  const pathWithoutHashPrefix = path.startsWith("#") ? path.slice(1) : path;
  const cleanPath = pathWithoutHashPrefix.split("?")[0].split("#")[0] || "/";

  if (cleanPath.length > 1 && cleanPath.endsWith("/")) {
    return cleanPath.slice(0, -1);
  }

  return cleanPath;
};

const isActiveRoute = (currentPath: string, href: string) => {
  const normalizedCurrentPath = normalizePath(currentPath);
  const normalizedHref = normalizePath(href);

  if (normalizedHref === "/") {
    return normalizedCurrentPath === "/";
  }

  return (
    normalizedCurrentPath === normalizedHref ||
    normalizedCurrentPath.startsWith(`${normalizedHref}/`)
  );
};

const navbarStyles = `
  :root {
    --navbar-height: 74px;
    --navbar-bg: #000000;
    --navbar-text: #ffffff;
    --navbar-muted: rgba(255, 255, 255, 0.9);
    --navbar-gold: #d8b86a;
    --navbar-border: rgba(255, 255, 255, 0.14);
    --navbar-font-size: 11px;
    --navbar-letter-spacing: 1.85px;
  }

  html,
  body,
  #root {
    width: 100% !important;
    max-width: none !important;
    min-width: 0 !important;
    min-height: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow-x: hidden !important;
    background: #000000 !important;
  }

  body {
    display: block !important;
    place-items: initial !important;
    color: #ffffff !important;
  }

  #root {
    display: block !important;
    min-height: 100svh !important;
    text-align: initial !important;
  }

  .home-content,
  .home-page,
  .partnership-section,
  .purpose,
  .ekosistem,
  footer {
    width: 100% !important;
    max-width: none !important;
    min-width: 0 !important;
  }

  .site-header {
    position: fixed;
    inset: 0 0 auto 0;
    width: 100% !important;
    max-width: none !important;
    height: var(--navbar-height);
    transform: none !important;
    background: var(--navbar-bg);
    border-bottom: 1px solid var(--navbar-border);
    z-index: 1000;
    transition:
      background-color 220ms ease,
      border-color 220ms ease,
      box-shadow 220ms ease,
      backdrop-filter 220ms ease;
  }

  .site-header.is-scrolled {
    background: rgba(0, 0, 0, 0.84);
    border-bottom-color: rgba(216, 184, 106, 0.34);
    backdrop-filter: blur(18px);
    box-shadow:
      0 12px 36px rgba(0, 0, 0, 0.38),
      0 0 22px rgba(216, 184, 106, 0.1);
  }

  .navbar {
    position: relative;
    width: 100% !important;
    max-width: none !important;
    min-width: 0 !important;
    height: var(--navbar-height);
    margin: 0;
    padding: 0 28px;
    box-sizing: border-box;

    display: grid;
    grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
    align-items: center;

    color: var(--navbar-text);
  }

  .navbar *,
  .navbar *::before,
  .navbar *::after {
    box-sizing: border-box;
  }

  .navbar a,
  .navbar button {
    color: inherit;
    font: inherit;
    text-decoration: none;
  }

  .navbar__left,
  .navbar__right {
    display: flex;
    align-items: center;
    min-width: 0;
  }

  .navbar__left {
    justify-content: flex-start;
    gap: 52px;
  }

  .navbar__right {
    justify-content: flex-end;
    gap: 46px;
  }

  .navbar__link,
  .navbar__auth-link,
  .navbar__ecosystem-button {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 34px;
    padding: 0;
    border: 0;
    outline: 0;
    background: transparent;
    border-radius: 0;
    white-space: nowrap;
    cursor: pointer;

    color: var(--navbar-text);
    font-family: Arial, Helvetica, sans-serif;
    font-size: var(--navbar-font-size) !important;
    font-weight: 700;
    line-height: 1;
    letter-spacing: var(--navbar-letter-spacing) !important;
    text-transform: uppercase;

    transition:
      color 180ms ease,
      opacity 180ms ease,
      text-shadow 180ms ease,
      transform 180ms ease;
  }

  .navbar__link.is-active,
  .navbar__auth-link.is-active,
  .navbar__mobile-menu a.is-active {
    color: var(--navbar-gold);
    text-shadow:
      0 0 7px rgba(216, 184, 106, 1),
      0 0 16px rgba(216, 184, 106, 0.92),
      0 0 30px rgba(216, 184, 106, 0.62),
      0 0 44px rgba(216, 184, 106, 0.36);
  }

  .navbar__link.is-active::after,
  .navbar__auth-link.is-active::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -6px;
    height: 1px;
    background: var(--navbar-gold);
    box-shadow:
      0 0 8px rgba(216, 184, 106, 1),
      0 0 20px rgba(216, 184, 106, 0.65);
  }

  .navbar__ecosystem-button.is-active {
    text-shadow:
      0 0 7px rgba(216, 184, 106, 1),
      0 0 16px rgba(216, 184, 106, 0.92),
      0 0 30px rgba(216, 184, 106, 0.62),
      0 0 44px rgba(216, 184, 106, 0.36);
  }

  .navbar__link:hover,
  .navbar__link:focus-visible,
  .navbar__auth-link:hover,
  .navbar__auth-link:focus-visible {
    color: #ffffff;
    background: transparent;
    transform: translateY(-1px);
    text-shadow:
      0 0 6px rgba(255, 255, 255, 1),
      0 0 14px rgba(255, 255, 255, 0.88),
      0 0 24px rgba(216, 184, 106, 0.62),
      0 0 36px rgba(216, 184, 106, 0.34);
  }

  .navbar__link:focus-visible,
  .navbar__auth-link:focus-visible,
  .navbar__ecosystem-button:focus-visible {
    outline: 1px solid var(--navbar-gold);
    outline-offset: 7px;
  }

  .navbar__ecosystem {
    position: relative;
    display: inline-flex;
    align-items: center;
  }

  .navbar__ecosystem-button {
    gap: 12px;
    color: var(--navbar-gold) !important;
    padding-bottom: 10px;
  }

  .navbar__ecosystem-button span,
  .navbar__ecosystem-button svg {
    color: var(--navbar-gold) !important;
  }

  .navbar__ecosystem-button path {
    stroke: var(--navbar-gold) !important;
  }

  .navbar__ecosystem-button::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: var(--navbar-gold);
    box-shadow: 0 0 9px rgba(216, 184, 106, 0.72);
  }

  .navbar__ecosystem-button:hover,
  .navbar__ecosystem-button:focus-visible {
    color: var(--navbar-gold) !important;
    background: transparent;
    transform: translateY(-1px);
    text-shadow:
      0 0 7px rgba(216, 184, 106, 1),
      0 0 16px rgba(216, 184, 106, 0.95),
      0 0 30px rgba(216, 184, 106, 0.68),
      0 0 44px rgba(216, 184, 106, 0.42);
  }

  .navbar__chevron {
    width: 14px;
    height: 9px;
    flex: 0 0 auto;
    color: currentColor;
    transform: translateY(1px);
    transition: transform 180ms ease;
  }

  .navbar__chevron.is-open {
    transform: translateY(1px) rotate(180deg);
  }

  .navbar__dropdown {
    position: absolute;
    top: calc(100% + 12px);
    left: 0;
    width: 220px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    border: 1px solid rgba(216, 184, 106, 0.24);
    background: rgba(0, 0, 0, 0.86);
    backdrop-filter: blur(18px);
    box-shadow:
      0 20px 44px rgba(0, 0, 0, 0.42),
      0 0 22px rgba(216, 184, 106, 0.12);
    visibility: hidden;
    opacity: 0;
    transform: translateY(-8px);
    pointer-events: none;
    transition:
      opacity 180ms ease,
      transform 180ms ease,
      visibility 180ms ease;
  }

  .navbar__dropdown.is-open {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  .navbar__dropdown-link {
    display: block;
    padding: 12px 10px;
    color: rgba(255, 255, 255, 0.86);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    transition:
      color 180ms ease,
      text-shadow 180ms ease,
      transform 180ms ease;
  }

  .navbar__dropdown-link.is-active {
    color: var(--navbar-gold);
    text-shadow:
      0 0 7px rgba(216, 184, 106, 1),
      0 0 18px rgba(216, 184, 106, 0.72);
  }

  .navbar__dropdown-link:hover,
  .navbar__dropdown-link:focus-visible {
    color: var(--navbar-gold);
    background: transparent;
    transform: translateX(3px);
    text-shadow:
      0 0 7px rgba(216, 184, 106, 1),
      0 0 18px rgba(216, 184, 106, 0.72);
  }

  .navbar__logo-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    justify-self: center;
    line-height: 0;
    pointer-events: auto;
  }

  .navbar__logo-link:hover,
  .navbar__logo-link:focus-visible {
    background: transparent;
    box-shadow: none;
    text-shadow: none;
    transform: none;
  }

  .navbar__logo-link:focus-visible {
    outline: 1px solid rgba(216, 184, 106, 0.7);
    outline-offset: 6px;
  }

  .navbar__logo {
    display: block;
    width: 330px;
    height: 70px;
    object-fit: contain;
  }

  .navbar__auth {
    display: inline-flex;
    align-items: center;
    gap: 18px;
  }

  .navbar__separator {
    display: inline-block;
    color: rgba(255, 255, 255, 0.72);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: 1;
    transform: translateY(-1px);
  }

  .navbar__menu-button,
  .navbar__mobile-menu {
    display: none;
  }

  @media (max-width: 1200px) {
    .navbar {
      padding: 0 22px;
    }

    .navbar__left {
      gap: 34px;
    }

    .navbar__right {
      gap: 30px;
    }

    .navbar__logo {
      width: 280px;
      height: 64px;
    }
  }

  @media (max-width: 920px) {
    :root {
      --navbar-height: 70px;
    }

    .navbar {
      grid-template-columns: auto minmax(0, 1fr) auto;
      padding: 0 20px;
    }

    .navbar__left,
    .navbar__right {
      display: none;
    }

    .navbar__logo-link {
      grid-column: 1;
      justify-self: start;
    }

    .navbar__logo {
      width: 188px;
      height: 56px;
    }

    .navbar__menu-button {
      grid-column: 3;
      justify-self: end;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      width: 30px;
      height: 22px;
      padding: 0;
      border: 0;
      background: transparent;
      cursor: pointer;
    }

    .navbar__menu-button span {
      display: block;
      height: 2px;
      background: #ffffff;
      box-shadow: 0 0 8px rgba(255, 255, 255, 0.72);
      transition:
        transform 180ms ease,
        width 180ms ease,
        opacity 180ms ease,
        background-color 180ms ease;
    }

    .navbar__menu-button span:nth-child(1) {
      width: 100%;
    }

    .navbar__menu-button span:nth-child(2) {
      width: 66%;
    }

    .navbar__menu-button span:nth-child(3) {
      width: 86%;
    }

    .navbar__menu-button:hover span,
    .navbar__menu-button:focus-visible span {
      background: var(--navbar-gold);
      box-shadow:
        0 0 8px rgba(216, 184, 106, 1),
        0 0 20px rgba(216, 184, 106, 0.65);
    }

    .navbar__menu-button.is-open span:nth-child(1) {
      transform: translateY(10px) rotate(45deg);
      width: 100%;
    }

    .navbar__menu-button.is-open span:nth-child(2) {
      opacity: 0;
      width: 0;
    }

    .navbar__menu-button.is-open span:nth-child(3) {
      transform: translateY(-10px) rotate(-45deg);
      width: 100%;
    }

    .navbar__mobile-menu {
      position: fixed;
      top: calc(var(--navbar-height) + 10px);
      left: 12px;
      right: 12px;
      width: auto !important;
      max-width: none !important;
      max-height: calc(100svh - var(--navbar-height) - 22px);
      overflow-y: auto;
      padding: 10px 12px 12px;
      flex-direction: column;
      gap: 2px;
      background:
        linear-gradient(180deg, rgba(18, 18, 18, 0.96) 0%, rgba(5, 5, 5, 0.94) 100%);
      border: 1px solid rgba(216, 184, 106, 0.2);
      border-radius: 18px;
      backdrop-filter: blur(18px);
      box-shadow:
        0 18px 42px rgba(0, 0, 0, 0.52),
        inset 0 1px 0 rgba(255, 255, 255, 0.06);
      visibility: hidden;
      opacity: 0;
      transform: translateY(-8px) scale(0.985);
      transform-origin: top center;
      pointer-events: none;
      transition:
        opacity 180ms ease,
        transform 180ms ease,
        visibility 180ms ease;
    }

    .navbar__mobile-menu.is-open {
      display: flex;
      visibility: visible;
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: auto;
    }

    .navbar__mobile-menu a,
    .navbar__mobile-menu button {
      width: 100%;
      min-height: 38px;
      padding: 0 10px;
      border: 0;
      border-radius: 12px;
      background: transparent;
      color: rgba(255, 255, 255, 0.9);
      text-align: left;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 10px;
      font-weight: 700;
      line-height: 1.2;
      letter-spacing: 1.25px;
      text-transform: uppercase;
      transition:
        background-color 180ms ease,
        color 180ms ease,
        text-shadow 180ms ease;
    }

    .navbar__mobile-menu a + a,
    .navbar__mobile-menu button + a,
    .navbar__mobile-ecosystem-list + a {
      margin-top: 2px;
    }

    .navbar__mobile-menu a:hover,
    .navbar__mobile-menu button:hover {
      color: #ffffff;
      background: rgba(255, 255, 255, 0.045);
      text-shadow:
        0 0 6px rgba(255, 255, 255, 0.72),
        0 0 14px rgba(216, 184, 106, 0.32);
    }

    .navbar__mobile-menu a.is-active {
      background: rgba(216, 184, 106, 0.09);
    }

    .navbar__mobile-ecosystem-button,
    .navbar__mobile-ecosystem-button span,
    .navbar__mobile-ecosystem-button svg {
      color: var(--navbar-gold) !important;
    }

    .navbar__mobile-ecosystem-button path {
      stroke: var(--navbar-gold) !important;
    }

    .navbar__mobile-ecosystem-button:hover {
      text-shadow:
        0 0 6px rgba(216, 184, 106, 0.92),
        0 0 16px rgba(216, 184, 106, 0.42) !important;
    }

    .navbar__mobile-ecosystem-button.is-active,
    .navbar__mobile-ecosystem-list a.is-active {
      color: var(--navbar-gold) !important;
      text-shadow:
        0 0 6px rgba(216, 184, 106, 0.86),
        0 0 16px rgba(216, 184, 106, 0.42);
    }

    .navbar__mobile-ecosystem-list {
      display: grid;
      grid-template-rows: 0fr;
      overflow: hidden;
      transition: grid-template-rows 180ms ease;
    }

    .navbar__mobile-ecosystem-list.is-open {
      grid-template-rows: 1fr;
    }

    .navbar__mobile-ecosystem-inner {
      min-height: 0;
      display: flex;
      flex-direction: column;
      gap: 1px;
      margin: 4px 0 6px;
      padding: 6px 0 6px 10px;
      border-left: 1px solid rgba(216, 184, 106, 0.22);
    }

    .navbar__mobile-ecosystem-inner a {
      min-height: 30px;
      padding: 0 10px;
      color: rgba(255, 255, 255, 0.68);
      font-size: 9px;
      letter-spacing: 1.1px;
      border-bottom: 0;
    }
  }

  @media (max-width: 520px) {
    :root {
      --navbar-height: 66px;
    }

    .navbar {
      padding: 0 16px;
    }

    .navbar__logo {
      width: 165px;
      height: 50px;
    }
  }

  @media (max-width: 360px) {
    .navbar {
      padding: 0 14px;
    }

    .navbar__logo {
      width: 145px;
      height: 46px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .site-header,
    .navbar__link,
    .navbar__auth-link,
    .navbar__ecosystem-button,
    .navbar__dropdown,
    .navbar__dropdown-link,
    .navbar__menu-button span,
    .navbar__mobile-menu {
      transition: none;
    }
  }
`;

const Navbar = () => {
  const [ecosystemOpen, setEcosystemOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState(() => getCurrentRoute());

  const ecosystemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ecosystemRef.current &&
        !ecosystemRef.current.contains(event.target as Node)
      ) {
        setEcosystemOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateCurrentPath = () => {
      setCurrentPath(getCurrentRoute());
    };

    if (!window.location.hash || window.location.hash === "#") {
      window.history.replaceState(null, "", "#/");
    }

    updateCurrentPath();

    window.addEventListener("hashchange", updateCurrentPath);

    return () => {
      window.removeEventListener("hashchange", updateCurrentPath);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 920) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setEcosystemOpen(false);
  };

  const isEcosystemActive = ecosystemItems.some((item) =>
    isActiveRoute(currentPath, item.href)
  );

  return (
    <>
      <style data-component="navbar">{navbarStyles}</style>

      <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
        <nav className="navbar" aria-label="Navigasi utama Mahreen Indonesia">
          <div className="navbar__left">
            <a
              className={`navbar__link${
                isActiveRoute(currentPath, "#/newsroom") ? " is-active" : ""
              }`}
              href="#/newsroom"
              aria-current={
                isActiveRoute(currentPath, "#/newsroom") ? "page" : undefined
              }
            >
              Newsroom
            </a>

            <div className="navbar__ecosystem" ref={ecosystemRef}>
              <button
                className={`navbar__ecosystem-button${
                  isEcosystemActive ? " is-active" : ""
                }`}
                type="button"
                aria-expanded={ecosystemOpen}
                aria-controls="ecosystem-menu"
                onClick={() => {
                  setEcosystemOpen((currentValue) => !currentValue);
                }}
              >
                <span>Our Ecosystem</span>

                <svg
                  className={`navbar__chevron${ecosystemOpen ? " is-open" : ""}`}
                  viewBox="0 0 14 9"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1.5 1.5L7 7L12.5 1.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div
                id="ecosystem-menu"
                className={`navbar__dropdown${ecosystemOpen ? " is-open" : ""}`}
              >
                {ecosystemItems.map((item) => (
                  <a
                    className={`navbar__dropdown-link${
                      isActiveRoute(currentPath, item.href) ? " is-active" : ""
                    }`}
                    key={item.label}
                    href={item.href}
                    aria-current={
                      isActiveRoute(currentPath, item.href) ? "page" : undefined
                    }
                    onClick={() => {
                      setEcosystemOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a
            className="navbar__logo-link"
            href="#/"
            aria-label="Mahreen Indonesia Beranda"
            onClick={closeMobileMenu}
          >
            <img
              className="navbar__logo"
              src={mahreenLogo}
              alt="Mahreen Indonesia"
              width="330"
              height="70"
              decoding="async"
            />
          </a>

          <div className="navbar__right">
            <a
              className={`navbar__link${
                isActiveRoute(currentPath, "#/portofolio") ? " is-active" : ""
              }`}
              href="#/portofolio"
              aria-current={
                isActiveRoute(currentPath, "#/portofolio") ? "page" : undefined
              }
            >
              Portofolio
            </a>

            <a
              className={`navbar__link${
                isActiveRoute(currentPath, "#/tentang") ? " is-active" : ""
              }`}
              href="#/tentang"
              aria-current={
                isActiveRoute(currentPath, "#/tentang") ? "page" : undefined
              }
            >
              Tentang
            </a>

            <div className="navbar__auth" aria-label="Aksi akun">
              <a
                className={`navbar__auth-link${
                  isActiveRoute(currentPath, "#/daftar") ? " is-active" : ""
                }`}
                href="#/daftar"
                aria-current={
                  isActiveRoute(currentPath, "#/daftar") ? "page" : undefined
                }
              >
                Daftar
              </a>
              <span className="navbar__separator" aria-hidden="true">
                |
              </span>
              <a
                className={`navbar__auth-link${
                  isActiveRoute(currentPath, "#/login") ? " is-active" : ""
                }`}
                href="#/login"
                aria-current={
                  isActiveRoute(currentPath, "#/login") ? "page" : undefined
                }
              >
                Login
              </a>
            </div>
          </div>

          <button
            className={`navbar__menu-button${mobileOpen ? " is-open" : ""}`}
            type="button"
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => {
              setMobileOpen((currentValue) => !currentValue);
            }}
          >
            <span />
            <span />
            <span />
          </button>

          <div
            id="mobile-menu"
            className={`navbar__mobile-menu${mobileOpen ? " is-open" : ""}`}
          >
            <a
              className={
                isActiveRoute(currentPath, "#/newsroom") ? "is-active" : undefined
              }
              href="#/newsroom"
              aria-current={
                isActiveRoute(currentPath, "#/newsroom") ? "page" : undefined
              }
              onClick={closeMobileMenu}
            >
              Newsroom
            </a>

            <button
              className={`navbar__mobile-ecosystem-button${
                isEcosystemActive ? " is-active" : ""
              }`}
              type="button"
              aria-expanded={ecosystemOpen}
              aria-controls="mobile-ecosystem-menu"
              onClick={() => {
                setEcosystemOpen((currentValue) => !currentValue);
              }}
            >
              <span>Our Ecosystem</span>

              <svg
                className={`navbar__chevron${ecosystemOpen ? " is-open" : ""}`}
                viewBox="0 0 14 9"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1.5 1.5L7 7L12.5 1.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div
              id="mobile-ecosystem-menu"
              className={`navbar__mobile-ecosystem-list${
                ecosystemOpen ? " is-open" : ""
              }`}
            >
              <div className="navbar__mobile-ecosystem-inner">
                {ecosystemItems.map((item) => (
                  <a
                    key={item.label}
                    className={
                      isActiveRoute(currentPath, item.href) ? "is-active" : undefined
                    }
                    href={item.href}
                    aria-current={
                      isActiveRoute(currentPath, item.href) ? "page" : undefined
                    }
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <a
              className={
                isActiveRoute(currentPath, "#/portofolio")
                  ? "is-active"
                  : undefined
              }
              href="#/portofolio"
              aria-current={
                isActiveRoute(currentPath, "#/portofolio") ? "page" : undefined
              }
              onClick={closeMobileMenu}
            >
              Portofolio
            </a>

            <a
              className={
                isActiveRoute(currentPath, "#/tentang") ? "is-active" : undefined
              }
              href="#/tentang"
              aria-current={
                isActiveRoute(currentPath, "#/tentang") ? "page" : undefined
              }
              onClick={closeMobileMenu}
            >
              Tentang
            </a>

            <a
              className={
                isActiveRoute(currentPath, "#/daftar") ? "is-active" : undefined
              }
              href="#/daftar"
              aria-current={
                isActiveRoute(currentPath, "#/daftar") ? "page" : undefined
              }
              onClick={closeMobileMenu}
            >
              Daftar
            </a>

            <a
              className={
                isActiveRoute(currentPath, "#/login") ? "is-active" : undefined
              }
              href="#/login"
              aria-current={
                isActiveRoute(currentPath, "#/login") ? "page" : undefined
              }
              onClick={closeMobileMenu}
            >
              Login
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
