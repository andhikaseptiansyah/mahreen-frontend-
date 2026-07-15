import { useEffect, useRef, useState } from "react";
import iconStudio from "../../assets/Navbar/icon-studio.png";

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
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,600;1,700&display=swap");

  :root {
    --navbar-height: 78px;
    --navbar-bg: #000000;
    --navbar-text: rgba(255, 255, 255, 0.94);
    --navbar-muted: rgba(255, 255, 255, 0.68);
    --navbar-gold: #d7b982;
    --navbar-border: rgba(255, 255, 255, 0.08);
    --navbar-font-size: 10px;
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
    background: rgba(0, 0, 0, 0.94);
    border-bottom: 1px solid var(--navbar-border);
    z-index: 1000;
    transition:
      background-color 200ms ease,
      border-color 200ms ease,
      box-shadow 200ms ease,
      backdrop-filter 200ms ease;
  }

  .site-header.is-scrolled {
    background: rgba(0, 0, 0, 0.86);
    border-bottom-color: rgba(215, 185, 130, 0.22);
    backdrop-filter: blur(16px);
    box-shadow:
      0 12px 34px rgba(0, 0, 0, 0.42),
      0 0 18px rgba(215, 185, 130, 0.08);
  }

  .navbar {
    position: relative;
    width: 100% !important;
    max-width: none !important;
    min-width: 0 !important;
    height: var(--navbar-height);
    margin: 0;
    padding: 0 28px 0 20px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
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

  .navbar__brand {
    display: inline-flex;
    align-items: center;
    justify-self: start;
    width: fit-content;
    min-width: 0;
    line-height: 0;
    color: #ffffff;
  }

  .navbar__brand:hover,
  .navbar__brand:focus-visible {
    background: transparent;
    box-shadow: none;
    text-shadow: none;
    transform: none;
  }

  .navbar__brand:focus-visible {
    outline: 1px solid rgba(215, 185, 130, 0.68);
    outline-offset: 7px;
  }

  .navbar__brand-logo {
    display: block;
    width: 290px;
    height: 74px;
    object-fit: contain;
    object-position: left center;
    flex: 0 0 auto;
    filter:
      drop-shadow(0 0 8px rgba(255, 255, 255, 0.08))
      drop-shadow(0 0 14px rgba(215, 185, 130, 0.08));
  }

  .navbar__center {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    min-width: 0;
    gap: clamp(34px, 4.4vw, 64px);
    padding-left: clamp(36px, 4.2vw, 58px);
  }

  .navbar__right {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    gap: 11px;
    min-width: 0;
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
    font-family: "Inter", Arial, Helvetica, sans-serif;
    font-size: var(--navbar-font-size) !important;
    font-weight: 500;
    line-height: 1;
    letter-spacing: var(--navbar-letter-spacing) !important;
    text-transform: uppercase;
    transition:
      color 170ms ease,
      opacity 170ms ease,
      text-shadow 170ms ease,
      transform 170ms ease;
  }

  .navbar__auth-link {
    font-size: 11.5px !important;
    letter-spacing: 1.65px !important;
  }

  .navbar__separator {
    display: inline-block;
    color: rgba(255, 255, 255, 0.62);
    font-family: "Inter", Arial, Helvetica, sans-serif;
    font-size: 12.5px;
    line-height: 1;
    transform: translateY(-1px);
  }

  .navbar__link.is-active,
  .navbar__auth-link.is-active,
  .navbar__mobile-menu a.is-active {
    color: var(--navbar-gold);
    text-shadow:
      0 0 7px rgba(215, 185, 130, 0.72),
      0 0 18px rgba(215, 185, 130, 0.34);
  }

  .navbar__link.is-active::after,
  .navbar__auth-link.is-active::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 3px;
    height: 1px;
    background: var(--navbar-gold);
    opacity: 0.9;
    box-shadow: 0 0 10px rgba(215, 185, 130, 0.7);
  }

  .navbar__link:hover,
  .navbar__link:focus-visible,
  .navbar__auth-link:hover,
  .navbar__auth-link:focus-visible,
  .navbar__ecosystem-button:hover,
  .navbar__ecosystem-button:focus-visible {
    color: #ffffff;
    background: transparent;
    transform: translateY(-1px);
    text-shadow:
      0 0 7px rgba(255, 255, 255, 0.72),
      0 0 18px rgba(215, 185, 130, 0.24);
  }

  .navbar__link:focus-visible,
  .navbar__auth-link:focus-visible,
  .navbar__ecosystem-button:focus-visible {
    outline: 1px solid rgba(215, 185, 130, 0.64);
    outline-offset: 7px;
  }

  .navbar__ecosystem {
    position: relative;
    display: inline-flex;
    align-items: center;
  }

  .navbar__ecosystem-button {
    gap: 14px;
    color: var(--navbar-text) !important;
  }

  .navbar__ecosystem-button.is-active,
  .navbar__ecosystem-button.is-active span,
  .navbar__ecosystem-button.is-active svg {
    color: #ffffff !important;
    text-shadow: none !important;
  }

  .navbar__ecosystem-button.is-active::after {
    content: none !important;
    display: none !important;
  }

  .navbar__chevron {
    width: 13px;
    height: 8px;
    flex: 0 0 auto;
    color: currentColor;
    transform: translateY(1px);
    transition: transform 170ms ease;
  }

  .navbar__chevron.is-open {
    transform: translateY(1px) rotate(180deg);
  }

  .navbar__dropdown {
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    width: 190px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    border: 1px solid rgba(215, 185, 130, 0.22);
    border-radius: 14px;
    background: rgba(4, 4, 4, 0.88);
    backdrop-filter: blur(18px);
    box-shadow:
      0 20px 44px rgba(0, 0, 0, 0.46),
      0 0 20px rgba(215, 185, 130, 0.1);
    visibility: hidden;
    opacity: 0;
    transform: translate(-50%, -8px);
    pointer-events: none;
    transition:
      opacity 170ms ease,
      transform 170ms ease,
      visibility 170ms ease;
  }

  .navbar__dropdown.is-open {
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, 0);
    pointer-events: auto;
  }

  .navbar__dropdown-link {
    display: block;
    border-radius: 10px;
    padding: 10px 11px;
    color: rgba(255, 255, 255, 0.76);
    font-family: "Inter", Arial, Helvetica, sans-serif;
    font-size: 9.5px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: 1.35px;
    text-transform: uppercase;
    transition:
      color 170ms ease,
      background-color 170ms ease,
      text-shadow 170ms ease,
      transform 170ms ease;
  }

  .navbar__dropdown-link.is-active,
  .navbar__dropdown-link:hover,
  .navbar__dropdown-link:focus-visible {
    color: var(--navbar-gold);
    background: rgba(215, 185, 130, 0.08);
    transform: translateX(2px);
    text-shadow: 0 0 14px rgba(215, 185, 130, 0.42);
  }

  .navbar__menu-button,
  .navbar__mobile-menu {
    display: none;
  }

  @media (max-width: 1120px) {
    .navbar {
      padding-right: 22px;
    }

    .navbar__center {
      gap: clamp(28px, 3.5vw, 48px);
      padding-left: clamp(28px, 3.4vw, 42px);
    }

    .navbar__brand-logo {
      width: 250px;
      height: 64px;
    }
  }

  @media (max-width: 920px) {
    :root {
      --navbar-height: 74px;
    }

    .navbar {
      grid-template-columns: auto minmax(0, 1fr) auto;
      padding: 0 18px;
    }

    .navbar__center,
    .navbar__right {
      display: none;
    }

    .navbar__brand-logo {
      width: 225px;
      height: 58px;
    }

    .navbar__menu-button {
      grid-column: 3;
      justify-self: end;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      width: 27px;
      height: 19px;
      padding: 0;
      border: 0;
      background: transparent;
      cursor: pointer;
    }

    .navbar__menu-button span {
      display: block;
      height: 1.5px;
      background: #ffffff;
      box-shadow: 0 0 8px rgba(255, 255, 255, 0.46);
      transition:
        transform 170ms ease,
        width 170ms ease,
        opacity 170ms ease,
        background-color 170ms ease;
    }

    .navbar__menu-button span:nth-child(1) {
      width: 100%;
    }

    .navbar__menu-button span:nth-child(2) {
      width: 68%;
    }

    .navbar__menu-button span:nth-child(3) {
      width: 86%;
    }

    .navbar__menu-button:hover span,
    .navbar__menu-button:focus-visible span {
      background: var(--navbar-gold);
      box-shadow: 0 0 12px rgba(215, 185, 130, 0.62);
    }

    .navbar__menu-button.is-open span:nth-child(1) {
      transform: translateY(8.75px) rotate(45deg);
      width: 100%;
    }

    .navbar__menu-button.is-open span:nth-child(2) {
      opacity: 0;
      width: 0;
    }

    .navbar__menu-button.is-open span:nth-child(3) {
      transform: translateY(-8.75px) rotate(-45deg);
      width: 100%;
    }

    .navbar__mobile-menu {
      position: fixed;
      top: calc(var(--navbar-height) + 8px);
      left: 12px;
      right: 12px;
      width: auto !important;
      max-width: none !important;
      padding: 10px;
      flex-direction: column;
      gap: 2px;
      border: 1px solid rgba(215, 185, 130, 0.2);
      border-radius: 18px;
      background: rgba(2, 2, 2, 0.9);
      backdrop-filter: blur(20px);
      box-shadow:
        0 22px 44px rgba(0, 0, 0, 0.48),
        0 0 22px rgba(215, 185, 130, 0.08);
      visibility: hidden;
      opacity: 0;
      transform: translateY(-10px);
      pointer-events: none;
      transition:
        opacity 170ms ease,
        transform 170ms ease,
        visibility 170ms ease;
    }

    .navbar__mobile-menu.is-open {
      display: flex;
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }

    .navbar__mobile-menu a,
    .navbar__mobile-menu button {
      width: 100%;
      min-height: 38px;
      padding: 0 10px;
      border: 0;
      border-radius: 11px;
      background: transparent;
      color: rgba(255, 255, 255, 0.9);
      text-align: left;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: "Inter", Arial, Helvetica, sans-serif;
      font-size: 10px;
      font-weight: 500;
      line-height: 1.2;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      transition:
        color 170ms ease,
        background-color 170ms ease,
        text-shadow 170ms ease;
    }

    .navbar__mobile-menu a:hover,
    .navbar__mobile-menu button:hover,
    .navbar__mobile-menu a.is-active,
    .navbar__mobile-menu button.is-active {
      color: var(--navbar-gold) !important;
      background: rgba(215, 185, 130, 0.08);
      text-shadow: 0 0 14px rgba(215, 185, 130, 0.42);
    }

    .navbar__mobile-ecosystem-list {
      display: grid;
      grid-template-rows: 0fr;
      overflow: hidden;
      transition: grid-template-rows 170ms ease;
    }

    .navbar__mobile-ecosystem-list.is-open {
      grid-template-rows: 1fr;
    }

    .navbar__mobile-ecosystem-inner {
      min-height: 0;
      display: flex;
      flex-direction: column;
      gap: 1px;
      padding: 3px 0 6px 10px;
    }

    .navbar__mobile-ecosystem-inner a {
      min-height: 32px;
      color: rgba(255, 255, 255, 0.68);
      font-size: 9.5px;
      letter-spacing: 1.35px;
    }
  }

  @media (max-width: 520px) {
    :root {
      --navbar-height: 72px;
    }

    .navbar {
      padding: 0 15px;
    }

    .navbar__brand-logo {
      width: 205px;
      height: 54px;
    }
  }

  @media (max-width: 360px) {
    .navbar__brand-logo {
      width: 180px;
      height: 48px;
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
    .navbar__mobile-menu,
    .navbar__mobile-ecosystem-list {
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
        <nav className="navbar" aria-label="Navigasi utama Mahreen Studio">
          <a
            className="navbar__brand"
            href="#/mahreen-studio"
            aria-label="Mahreen Studio Beranda"
            onClick={closeMobileMenu}
          >
            <img
              className="navbar__brand-logo"
              src={iconStudio}
              alt="Mahreen Studio"
              width="290"
              height="74"
              decoding="async"
            />
          </a>

          <div className="navbar__center">
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
          </div>

          <div className="navbar__right" aria-label="Aksi akun">
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
              className={isEcosystemActive ? "is-active" : undefined}
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
