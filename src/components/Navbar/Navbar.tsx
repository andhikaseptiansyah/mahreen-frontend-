import { useEffect, useRef, useState } from "react";
import mahreenLogo from "../../assets/Navbar/mahreen-logo.png";

const brandItems = [
  { label: "Brand 1", href: "#brand-1" },
  { label: "Brand 2", href: "#brand-2" },
  { label: "Brand 3", href: "#brand-3" },
];

const navbarStyles = `
  .site-header {
    position: absolute;
    top: 0;
    left: 50%;
    width: 100vw;
    width: 100dvw;
    transform: translateX(-50%);
    background: transparent;
    border: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    z-index: 1000;
  }

  .navbar {
    position: relative;
    width: 100%;
    min-height: 76px;
    margin: 0;
    padding: 0 38px;
    box-sizing: border-box;

    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;

    background: transparent;
    color: #ffffff;
  }

  .navbar *,
  .navbar *::before,
  .navbar *::after {
    box-sizing: border-box;
  }

  .navbar a {
    color: inherit;
    text-decoration: none;
  }

  .navbar button {
    font: inherit;
  }

  .navbar__left,
  .navbar__right {
    display: flex;
    align-items: center;
  }

  .navbar__left {
    justify-content: flex-start;
    gap: 24px; /* Gap sedikit dikurangi karena sekarang ada padding di link */
  }

  .navbar__right {
    justify-content: flex-end;
    gap: 16px; /* Gap sedikit dikurangi untuk mengkompensasi padding baru */
  }

  .navbar__link {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;

    /* --- Penambahan padding & radius untuk efek hover background --- */
    padding: 8px 14px;
    border-radius: 8px;

    color: rgba(255, 255, 255, 0.72);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: 1.7px;
    text-transform: uppercase;

    transition:
      color 180ms ease,
      background-color 180ms ease, /* Animasi untuk background */
      opacity 180ms ease;
  }

  .navbar__link:hover {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.1); /* Background transparan elegan */
  }

  .navbar__brands {
    position: relative;
  }

  .navbar__brands-button {
    gap: 7px;
    /* padding: 0; dihapus agar menggunakan padding dari .navbar__link */
    border: 0;
    outline: 0;
    background: transparent;
    cursor: pointer;
    
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.72);
  }

  .navbar__brands-button:hover {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.1); /* Menyamakan efek hover */
  }

  .navbar__chevron {
    flex: 0 0 auto;
    opacity: 0.72;
    transition: transform 180ms ease;
  }

  .navbar__chevron.is-open {
    transform: rotate(180deg);
  }

  .navbar__dropdown {
    position: absolute;
    top: calc(100% + 15px); /* Disesuaikan sedikit posisinya */
    left: -2px; /* Disesuaikan karena ada padding baru */

    width: 174px;
    padding: 7px;

    display: flex;
    flex-direction: column;

    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 14px;
    background: rgba(0, 0, 0, 0.56);
    backdrop-filter: blur(16px);
    box-shadow: 0 18px 36px rgba(0, 0, 0, 0.28);

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

  .navbar__dropdown a {
    padding: 11px 12px;
    border-radius: 10px;
    color: rgba(255, 255, 255, 0.82);

    font-family: Arial, Helvetica, sans-serif;
    font-size: 11px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: 0.7px;
    text-transform: uppercase;

    transition:
      background 160ms ease,
      color 160ms ease;
  }

  .navbar__dropdown a:hover {
    background: rgba(255, 255, 255, 0.08);
    color: #ffffff;
  }

  .navbar__logo-link {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: center;
    line-height: 0;
  }

  .navbar__logo {
    display: block;
    width: 200px; 
    height: 80px; 
    object-fit: contain;
  }

  .navbar__button {
    width: 105px;
    height: 36px;
    padding: 0; /* Mengembalikan padding 0 khusus untuk button sign in & kontak */
    border-radius: 999px;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    text-align: center;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 10px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 1.7px;
    text-transform: uppercase;

    transition:
      transform 250ms ease,
      box-shadow 250ms ease,
      opacity 250ms ease,
      border-color 250ms ease,
      background 250ms ease;
  }

  .navbar__button--ghost {
    color: rgba(255, 255, 255, 0.86);
    border: 1px solid rgba(255, 255, 255, 0.18);
    background: transparent;
  }

  .navbar__button--ghost:hover {
    border-color: rgba(255, 255, 255, 0.34);
    background: rgba(255, 255, 255, 0.04);
    transform: translateY(-2px);
  }

  .navbar__button--solid {
    color: #000000 !important;
    border: 1px solid #ffffff;
    background: #ffffff;
  }

  .navbar__button--solid:hover {
    background: #e6e6e6;
    border-color: #e6e6e6;
    color: #000000 !important;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(255, 255, 255, 0.25);
  }

  .navbar__menu-button {
    display: none;
  }

  .navbar__mobile-menu {
    display: none;
  }

  @media (max-width: 1100px) {
    .navbar {
      padding: 0 28px;
    }

    .navbar__left {
      gap: 16px;
    }

    .navbar__right {
      gap: 12px;
    }

    .navbar__link,
    .navbar__button,
    .navbar__brands-button {
      font-size: 9px;
      letter-spacing: 1.35px;
    }

    .navbar__button {
      width: 95px;
      height: 32px;
    }
  }

  @media (max-width: 860px) {
    .navbar {
      min-height: 72px;
      padding: 0 20px;
      grid-template-columns: 1fr auto 1fr;
    }

    .navbar__left,
    .navbar__right {
      display: none;
    }

    .navbar__logo-link {
      grid-column: 2;
    }

    .navbar__logo {
      width: 150px; 
      height: 60px;
    }

    .navbar__menu-button {
      grid-column: 3;
      justify-self: end;

      width: 40px;
      height: 40px;
      padding: 11px;

      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: center;
      gap: 7px;

      border: 1px solid rgba(255, 255, 255, 0.18);
      border-radius: 999px;
      outline: none;
      background: transparent;
      cursor: pointer;
    }

    .navbar__menu-button span {
      display: block;
      width: 100%;
      height: 1px;
      background: #ffffff;

      transition:
        transform 180ms ease,
        opacity 180ms ease;
    }

    .navbar__menu-button.is-open span:first-child {
      transform: translateY(4px) rotate(45deg);
    }

    .navbar__menu-button.is-open span:last-child {
      transform: translateY(-4px) rotate(-45deg);
    }

    .navbar__mobile-menu {
      position: absolute;
      top: 72px;
      left: 0;

      width: 100%;
      padding: 14px 20px 22px;

      flex-direction: column;
      gap: 4px;

      border-top: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(0, 0, 0, 0.68);
      backdrop-filter: blur(18px);

      visibility: hidden;
      opacity: 0;
      transform: translateY(-10px);
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
      transform: translateY(0);
      pointer-events: auto;
    }

    .navbar__mobile-menu > a,
    .navbar__mobile-menu > button {
      width: 100%;
      min-height: 44px;
      padding: 0 8px;
      border: 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      outline: none;
      background: transparent;
      color: rgba(255, 255, 255, 0.82);
      text-align: left;

      display: flex;
      align-items: center;
      justify-content: space-between;

      font-family: Arial, Helvetica, sans-serif;
      font-size: 11px;
      font-weight: 600;
      line-height: 1.2;
      letter-spacing: 1.35px;
      text-transform: uppercase;
      border-radius: 0; /* Reset border radius di mobile */
    }

    .navbar__mobile-menu > a:hover,
    .navbar__mobile-menu > button:hover {
      color: #ffffff;
      background-color: transparent; /* Reset background hover di mobile */
    }

    .navbar__mobile-brands {
      display: grid;
      grid-template-rows: 0fr;
      overflow: hidden;
      transition: grid-template-rows 180ms ease;
    }

    .navbar__mobile-brands.is-open {
      grid-template-rows: 1fr;
    }

    .navbar__mobile-brands-inner {
      min-height: 0;
      display: flex;
      flex-direction: column;
      padding: 4px 0 8px 14px;
    }

    .navbar__mobile-brands-inner a {
      padding: 10px 8px;
      color: rgba(255, 255, 255, 0.68);
      font-family: Arial, Helvetica, sans-serif;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 1.2px;
      text-transform: uppercase;
      border-radius: 6px;
    }
    
    .navbar__mobile-brands-inner a:hover {
      background-color: rgba(255, 255, 255, 0.08); /* Highlight dropdown mobile */
    }

    .navbar__mobile-actions {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-top: 14px;
    }

    .navbar__mobile-actions .navbar__button {
      width: 100%;
      height: 40px;
      transform: none;
      border-radius: 999px; /* Kembalikan radius untuk tombol khusus ini */
    }
    
    .navbar__mobile-actions .navbar__button:hover {
      transform: none;
      box-shadow: none;
    }
  }

  @media (max-width: 480px) {
    .navbar {
      min-height: 68px;
      padding: 0 16px;
    }

    .navbar__logo {
      width: 130px; 
      height: 52px;
    }

    .navbar__mobile-menu {
      top: 68px;
      padding: 12px 16px 20px;
    }
  }
`;

function Navbar() {
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeDropdown = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setBrandsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeDropdown);

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  useEffect(() => {
    const closeMobileMenu = () => {
      if (window.innerWidth > 860) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", closeMobileMenu);

    return () => {
      window.removeEventListener("resize", closeMobileMenu);
    };
  }, []);

  return (
    <>
      <style data-component="navbar">{navbarStyles}</style>

      <header className="site-header">
        <nav className="navbar" aria-label="Navigasi utama">
          <div className="navbar__left">
            <a className="navbar__link" href="#home">
              Home
            </a>

            <a className="navbar__link" href="#about">
              Tentang
            </a>

            <div className="navbar__brands" ref={dropdownRef}>
              <button
                className="navbar__link navbar__brands-button"
                type="button"
                aria-expanded={brandsOpen}
                aria-controls="brands-menu"
                onClick={() => {
                  setBrandsOpen((currentValue) => !currentValue);
                }}
              >
                <span>Our Brands</span>

                <svg
                  className={`navbar__chevron${brandsOpen ? " is-open" : ""}`}
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 1L4 4L7 1"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div
                id="brands-menu"
                className={`navbar__dropdown${brandsOpen ? " is-open" : ""}`}
              >
                {brandItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setBrandsOpen(false);
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
            href="#home"
            aria-label="Mahreen Indonesia Home"
          >
            <img
              className="navbar__logo"
              src={mahreenLogo}
              alt="Mahreen Indonesia"
            />
          </a>

          <div className="navbar__right">
            <a className="navbar__link" href="#portfolio">
              Portofolio
            </a>

            <a
              className="navbar__button navbar__button--ghost"
              href="#sign-in"
            >
              Sign In
            </a>

            <a className="navbar__button navbar__button--solid" href="#contact">
              Kontak
            </a>
          </div>

          <button
            className={`navbar__menu-button${mobileOpen ? " is-open" : ""}`}
            type="button"
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={mobileOpen}
            onClick={() => {
              setMobileOpen((currentValue) => !currentValue);
            }}
          >
            <span />
            <span />
          </button>

          <div className={`navbar__mobile-menu${mobileOpen ? " is-open" : ""}`}>
            <a
              href="#home"
              onClick={() => {
                setMobileOpen(false);
              }}
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => {
                setMobileOpen(false);
              }}
            >
              Tentang
            </a>

            <button
              type="button"
              aria-expanded={brandsOpen}
              onClick={() => {
                setBrandsOpen((currentValue) => !currentValue);
              }}
            >
              <span>Our Brands</span>

              <svg
                className={`navbar__chevron${brandsOpen ? " is-open" : ""}`}
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 1L4 4L7 1"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className={`navbar__mobile-brands${brandsOpen ? " is-open" : ""}`}>
              <div className="navbar__mobile-brands-inner">
                {brandItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setBrandsOpen(false);
                      setMobileOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="#portfolio"
              onClick={() => {
                setMobileOpen(false);
              }}
            >
              Portofolio
            </a>

            <div className="navbar__mobile-actions">
              <a
                className="navbar__button navbar__button--ghost"
                href="#sign-in"
                onClick={() => {
                  setMobileOpen(false);
                }}
              >
                Sign In
              </a>

              <a
                className="navbar__button navbar__button--solid"
                href="#contact"
                onClick={() => {
                  setMobileOpen(false);
                }}
              >
                Kontak
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;