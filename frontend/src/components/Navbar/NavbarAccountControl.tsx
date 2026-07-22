import { useEffect, useRef, useState } from "react";
import {
  Bell,
  LogOut,
  ShoppingCart,
  UserRound,
  X,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import { navigateToHashRoute } from "../../utils/hashNavigation";

type NavbarAccountControlProps = Readonly<{
  variant?: "desktop" | "mobile";
  onNavigate?: () => void;
}>;

type ActivePanel = "notifications" | "cart" | null;

type CartItem = {
  productSlug?: string;
  productTitle?: string;
  color?: string;
  size?: string;
  quantity?: number;
};

const CART_STORAGE_KEY = "mahreen-studio-cart";

const readCart = (): CartItem[] => {
  if (typeof window === "undefined") return [];

  try {
    const parsed: unknown = JSON.parse(
      window.localStorage.getItem(CART_STORAGE_KEY) ?? "[]",
    );

    return Array.isArray(parsed) ? (parsed as CartItem[]) : [];
  } catch {
    return [];
  }
};

const styles = `
  .mh-account-control,
  .mh-account-control * {
    box-sizing: border-box;
  }

  .mh-account-control {
    position: relative;
    display: inline-flex;
    min-width: 0;
    align-items: center;
    color: #ffffff;
    font-family: Inter, Arial, sans-serif;
  }

  .mh-account-guest {
    display: inline-flex;
    align-items: center;
    gap: 16px;
  }

  .mh-account-guest a {
    color: #ffffff;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.6px;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 180ms ease, text-shadow 180ms ease;
  }

  .mh-account-guest a:hover,
  .mh-account-guest a:focus-visible {
    color: #d8b86a;
    text-shadow: 0 0 14px rgba(216, 184, 106, 0.38);
  }

  .mh-account-separator {
    color: rgba(255, 255, 255, 0.42);
  }

  .mh-account-authenticated {
    position: relative;
    display: inline-flex;
    min-width: 0;
    height: 54px;
    align-items: center;
  }

  .mh-account-utility {
    display: inline-flex;
    height: 100%;
    margin-right: 24px;
    align-items: center;
    gap: 16px;
    transform: translateX(-10px);
  }

  .mh-account-icon-button {
    position: relative;
    display: inline-grid;
    width: 38px;
    height: 42px;
    padding: 0;
    place-items: center;
    border: 0;
    border-radius: 50%;
    background: transparent;
    color: rgba(235, 228, 213, 0.82);
    cursor: pointer;
    transition:
      color 180ms ease,
      background-color 180ms ease,
      box-shadow 180ms ease,
      transform 180ms ease;
  }

  .mh-account-icon-button:hover,
  .mh-account-icon-button:focus-visible,
  .mh-account-icon-button.is-active {
    color: #d8b86a;
    background: rgba(216, 184, 106, 0.075);
    box-shadow: 0 0 18px rgba(216, 184, 106, 0.14);
    transform: translateY(-1px);
  }

  .mh-account-icon-button svg {
    width: 17px;
    height: 17px;
    stroke-width: 1.6;
  }

  .mh-account-cart-count {
    position: absolute;
    top: 5px;
    right: 4px;
    display: grid;
    min-width: 15px;
    height: 15px;
    padding: 0 4px;
    place-items: center;
    border: 1px solid #050505;
    border-radius: 999px;
    background: #d8b86a;
    color: #0b0a08;
    font-family: Inter, Arial, sans-serif;
    font-size: 8px;
    font-weight: 800;
    line-height: 1;
  }

  .mh-account-profile-button {
    display: inline-flex;
    min-width: 0;
    max-width: 272px;
    min-height: 48px;
    padding: 3px 0;
    align-items: center;
    gap: 12px;
    border: 0;
    background: transparent;
    color: #ffffff;
    cursor: pointer;
    transition: opacity 180ms ease, transform 180ms ease;
  }

  .mh-account-profile-button:hover,
  .mh-account-profile-button:focus-visible {
    opacity: 0.92;
    transform: translateY(-1px);
  }

  .mh-account-copy {
    display: flex;
    min-width: 0;
    max-width: 198px;
    flex-direction: column;
    align-items: flex-start;
    gap: 3px;
    text-align: left;
  }

  .mh-account-copy strong,
  .mh-account-copy span {
    display: block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .mh-account-copy strong {
    color: rgba(255, 255, 255, 0.96);
    font-size: 16px;
    font-weight: 700;
    line-height: 1.12;
    letter-spacing: -0.01em;
  }

  .mh-account-copy span {
    color: rgba(255, 255, 255, 0.88);
    font-family: "DM Mono", Consolas, monospace;
    font-size: 11px;
    line-height: 1.2;
    letter-spacing: 0.025em;
    text-transform: uppercase;
  }

  .mh-account-avatar {
    display: grid;
    width: 40px;
    height: 40px;
    flex: 0 0 auto;
    overflow: hidden;
    place-items: center;
    border: 1px solid rgba(216, 184, 106, 0.48);
    border-radius: 50%;
    background: #191611;
    color: #d8b86a;
    box-shadow: 0 0 14px rgba(216, 184, 106, 0.1);
    font-size: 11px;
    font-weight: 700;
  }

  .mh-account-avatar img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .mh-account-popover {
    position: absolute;
    top: calc(100% + 11px);
    right: 0;
    z-index: 70;
    width: min(318px, calc(100vw - 28px));
    padding: 13px;
    border: 1px solid rgba(216, 184, 106, 0.23);
    border-radius: 16px;
    background: rgba(10, 10, 9, 0.985);
    box-shadow:
      0 24px 58px rgba(0, 0, 0, 0.6),
      0 0 24px rgba(216, 184, 106, 0.08);
    backdrop-filter: blur(18px);
    visibility: hidden;
    opacity: 0;
    transform: translateY(-7px) scale(0.985);
    transform-origin: top right;
    pointer-events: none;
    transition:
      opacity 190ms ease,
      transform 190ms ease,
      visibility 190ms ease;
  }

  .mh-account-popover.is-open {
    visibility: visible;
    opacity: 1;
    transform: translateY(0) scale(1);
    pointer-events: auto;
  }

  .mh-account-popover-header {
    display: flex;
    min-height: 38px;
    padding: 2px 4px 10px;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.075);
  }

  .mh-account-popover-header strong {
    color: #f2ede4;
    font-size: 12px;
    font-weight: 650;
  }

  .mh-account-popover-close {
    display: inline-grid;
    width: 28px;
    height: 28px;
    padding: 0;
    place-items: center;
    border: 0;
    border-radius: 50%;
    background: transparent;
    color: rgba(255, 255, 255, 0.54);
    cursor: pointer;
  }

  .mh-account-popover-close:hover {
    color: #d8b86a;
    background: rgba(216, 184, 106, 0.08);
  }

  .mh-account-notification-list,
  .mh-account-cart-list {
    display: flex;
    max-height: 280px;
    padding: 8px 0 0;
    flex-direction: column;
    gap: 5px;
    overflow-y: auto;
  }

  .mh-account-notification-item,
  .mh-account-cart-item {
    display: flex;
    min-width: 0;
    padding: 10px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 11px;
    background: rgba(255, 255, 255, 0.026);
  }

  .mh-account-notification-dot {
    width: 7px;
    height: 7px;
    margin-top: 5px;
    flex: 0 0 auto;
    border-radius: 50%;
    background: #d8b86a;
    box-shadow: 0 0 10px rgba(216, 184, 106, 0.48);
  }

  .mh-account-notification-copy,
  .mh-account-cart-copy {
    display: flex;
    min-width: 0;
    flex: 1;
    flex-direction: column;
    gap: 4px;
  }

  .mh-account-notification-copy strong,
  .mh-account-cart-copy strong {
    color: rgba(255, 255, 255, 0.88);
    font-size: 10.5px;
    line-height: 1.35;
  }

  .mh-account-notification-copy span,
  .mh-account-cart-copy span,
  .mh-account-empty {
    color: rgba(255, 255, 255, 0.47);
    font-size: 9px;
    line-height: 1.55;
  }

  .mh-account-cart-number {
    display: grid;
    width: 24px;
    height: 24px;
    flex: 0 0 auto;
    place-items: center;
    border: 1px solid rgba(216, 184, 106, 0.28);
    border-radius: 8px;
    color: #d8b86a;
    font-size: 9px;
  }

  .mh-account-empty {
    margin: 0;
    padding: 18px 10px;
    text-align: center;
  }

  .mh-account-popover-cta {
    display: flex;
    min-height: 42px;
    margin-top: 9px;
    padding: 0 14px;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(216, 184, 106, 0.58);
    border-radius: 10px;
    background: rgba(216, 184, 106, 0.09);
    color: #d8b86a;
    font-size: 10px;
    font-weight: 650;
    text-decoration: none;
    transition: background-color 180ms ease, box-shadow 180ms ease;
  }

  .mh-account-popover-cta:hover,
  .mh-account-popover-cta:focus-visible {
    background: rgba(216, 184, 106, 0.16);
    box-shadow: 0 0 18px rgba(216, 184, 106, 0.13);
  }

  .mh-account-summary {
    padding: 10px 8px 13px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .mh-account-summary strong,
  .mh-account-summary span {
    display: block;
    overflow-wrap: anywhere;
  }

  .mh-account-summary strong {
    color: #ffffff;
    font-size: 13px;
  }

  .mh-account-summary span {
    margin-top: 5px;
    color: rgba(255, 255, 255, 0.52);
    font-family: Consolas, monospace;
    font-size: 9px;
  }

  .mh-account-action {
    display: flex;
    width: 100%;
    min-height: 42px;
    margin-top: 6px;
    padding: 0 11px;
    align-items: center;
    gap: 9px;
    border: 0;
    border-radius: 10px;
    background: transparent;
    color: rgba(255, 255, 255, 0.82);
    font-size: 11px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
  }

  .mh-account-action:hover,
  .mh-account-action:focus-visible {
    color: #d8b86a;
    background: rgba(216, 184, 106, 0.08);
  }

  .mh-account-action.is-logout {
    color: rgba(255, 183, 173, 0.88);
  }

  .mh-account-control.is-mobile {
    display: flex;
    width: min(100%, 340px);
    margin-top: 24px;
    padding: 17px;
    flex-direction: column;
    align-items: stretch;
    gap: 14px;
    border: 1px solid rgba(216, 184, 106, 0.25);
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.033);
  }

  .mh-account-mobile-utility {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .mh-account-mobile-utility button {
    display: inline-flex;
    min-height: 42px;
    padding: 0 13px;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.025);
    color: rgba(255, 255, 255, 0.78);
    font-size: 10px;
    cursor: pointer;
  }

  .mh-account-mobile-main {
    display: flex;
    min-width: 0;
    align-items: center;
    gap: 13px;
  }

  .mh-account-control.is-mobile .mh-account-avatar {
    width: 52px;
    height: 52px;
    font-size: 15px;
  }

  .mh-account-mobile-main .mh-account-copy {
    max-width: none;
  }

  .mh-account-mobile-main .mh-account-copy strong {
    font-size: 17px;
  }

  .mh-account-mobile-main .mh-account-copy span {
    color: rgba(255, 255, 255, 0.88);
    font-size: 11px;
  }

  .mh-account-mobile-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .mh-account-mobile-actions a,
  .mh-account-mobile-actions button {
    display: inline-flex;
    min-height: 44px;
    padding: 0 13px;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
  }

  .mh-account-mobile-account {
    border: 1px solid #d7b982;
    background: #d7b982;
    color: #111111;
  }

  .mh-account-mobile-logout {
    border: 1px solid rgba(255, 255, 255, 0.18);
    background: transparent;
    color: rgba(255, 255, 255, 0.82);
  }

  .mh-account-mobile-guest {
    display: flex;
    width: min(100%, 274px);
    margin-top: 26px;
    flex-direction: column;
    gap: 14px;
  }

  .mh-account-mobile-guest a {
    display: flex;
    min-height: 48px;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
  }

  .mh-account-mobile-register {
    border: 1px solid rgba(255, 255, 255, 0.84);
    color: #ffffff;
  }

  .mh-account-mobile-login {
    border: 1px solid #d7b982;
    background: #d7b982;
    color: #111111;
  }

  @media (max-width: 1160px) and (min-width: 1025px) {
    .mh-account-utility {
      margin-right: 14px;
      gap: 10px;
      transform: translateX(-4px);
    }

    .mh-account-copy {
      max-width: 150px;
    }

    .mh-account-copy strong {
      font-size: 15px;
    }

    .mh-account-copy span {
      font-size: 10px;
    }

    .mh-account-profile-button {
      gap: 9px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .mh-account-icon-button,
    .mh-account-profile-button,
    .mh-account-popover {
      transition: none;
    }
  }
`;

const NavbarAccountControl = ({
  variant = "desktop",
  onNavigate,
}: NavbarAccountControlProps) => {
  const { user: account, logout: endSession } = useAuth();
  const [activePanel, setActivePanel] = useState<ActivePanel>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>(() => readCart());
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      setCartItems(readCart());
      setActivePanel(null);
    };

    window.addEventListener("storage", update);
    window.addEventListener("hashchange", update);

    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener("hashchange", update);
    };
  }, []);

  useEffect(() => {
    if (account) {
      document.body.classList.add("mahreen-authenticated");
    } else {
      document.body.classList.remove("mahreen-authenticated");
    }

    return () => {
      document.body.classList.remove("mahreen-authenticated");
    };
  }, [account]);

  useEffect(() => {
    const handleOutside = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setActivePanel(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActivePanel(null);
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const close = () => {
    setActivePanel(null);
    onNavigate?.();
  };

  const logout = async () => {
    await endSession();
    close();
    navigateToHashRoute("/");
  };

  const togglePanel = (panel: Exclude<ActivePanel, null>) => {
    if (panel === "cart") setCartItems(readCart());
    setActivePanel((current) => (current === panel ? null : panel));
  };

  if (!account) {
    if (variant === "mobile") {
      return (
        <>
          <style data-component="navbar-account-control">{styles}</style>
          <div className="mh-account-mobile-guest">
            <a className="mh-account-mobile-register" href="#/daftar" onClick={close}>
              Daftar
            </a>
            <a className="mh-account-mobile-login" href="#/login" onClick={close}>
              Login
            </a>
          </div>
        </>
      );
    }

    return (
      <>
        <style data-component="navbar-account-control">{styles}</style>
        <div className="mh-account-guest">
          <a href="#/daftar">Daftar</a>
          <span className="mh-account-separator">|</span>
          <a href="#/login">Login</a>
        </div>
      </>
    );
  }

  const name = account.nickname || account.fullName;
  const initials = account.fullName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  const avatar = (
    <span className="mh-account-avatar" aria-hidden="true">
      {account.profilePhoto ? (
        <img src={account.profilePhoto} alt="" />
      ) : (
        initials || <UserRound size={18} />
      )}
    </span>
  );

  if (variant === "mobile") {
    return (
      <>
        <style data-component="navbar-account-control">{styles}</style>
        <div className="mh-account-control is-mobile">
          <div className="mh-account-mobile-utility">
            <button type="button" onClick={() => navigateToHashRoute("/akun")}>
              <Bell size={15} /> Notifikasi
            </button>
            <button
              type="button"
              onClick={() => navigateToHashRoute("/mahreen-studio/latest-collection")}
            >
              <ShoppingCart size={15} /> Keranjang ({cartItems.length})
            </button>
          </div>

          <div className="mh-account-mobile-main">
            {avatar}
            <span className="mh-account-copy">
              <strong>{name}</strong>
              <span>ID:{account.id}</span>
            </span>
          </div>

          <div className="mh-account-mobile-actions">
            <a className="mh-account-mobile-account" href="#/akun" onClick={close}>
              <UserRound size={15} /> Akun
            </a>
            <button className="mh-account-mobile-logout" type="button" onClick={logout}>
              <LogOut size={15} /> Keluar
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style data-component="navbar-account-control">{styles}</style>
      <div className="mh-account-control" ref={rootRef}>
        <div className="mh-account-authenticated">
          <div className="mh-account-utility" aria-label="Utilitas akun">
            <button
              className={`mh-account-icon-button${
                activePanel === "notifications" ? " is-active" : ""
              }`}
              type="button"
              aria-label="Buka notifikasi"
              aria-expanded={activePanel === "notifications"}
              onClick={() => togglePanel("notifications")}
            >
              <Bell aria-hidden="true" />
            </button>

            <button
              className={`mh-account-icon-button${
                activePanel === "cart" ? " is-active" : ""
              }`}
              type="button"
              aria-label="Buka keranjang"
              aria-expanded={activePanel === "cart"}
              onClick={() => togglePanel("cart")}
            >
              <ShoppingCart aria-hidden="true" />
              {cartItems.length > 0 && (
                <span className="mh-account-cart-count">
                  {Math.min(cartItems.length, 99)}
                </span>
              )}
            </button>
          </div>

          <button
            className="mh-account-profile-button"
            type="button"
            aria-label="Buka dashboard client"
            onClick={() => {
              close();
              navigateToHashRoute("/akun");
            }}
          >
            <span className="mh-account-copy">
              <strong>{name}</strong>
              <span>ID:{account.id}</span>
            </span>
            {avatar}
          </button>
        </div>

        <div
          className={`mh-account-popover${
            activePanel === "notifications" ? " is-open" : ""
          }`}
          aria-hidden={activePanel !== "notifications"}
        >
          <div className="mh-account-popover-header">
            <strong>Notifikasi</strong>
            <button
              className="mh-account-popover-close"
              type="button"
              aria-label="Tutup notifikasi"
              onClick={() => setActivePanel(null)}
            >
              <X size={15} />
            </button>
          </div>
          <div className="mh-account-notification-list">
            <div className="mh-account-notification-item">
              <span className="mh-account-notification-dot" />
              <span className="mh-account-notification-copy">
                <strong>Selamat datang, {name}</strong>
                <span>Akun Mahreen Anda sudah aktif dan siap digunakan.</span>
              </span>
            </div>
            <div className="mh-account-notification-item">
              <span className="mh-account-notification-dot" />
              <span className="mh-account-notification-copy">
                <strong>Lengkapi pengalaman Anda</strong>
                <span>Jelajahi layanan dan program dari seluruh ekosistem Mahreen.</span>
              </span>
            </div>
          </div>
        </div>

        <div
          className={`mh-account-popover${activePanel === "cart" ? " is-open" : ""}`}
          aria-hidden={activePanel !== "cart"}
        >
          <div className="mh-account-popover-header">
            <strong>Keranjang</strong>
            <button
              className="mh-account-popover-close"
              type="button"
              aria-label="Tutup keranjang"
              onClick={() => setActivePanel(null)}
            >
              <X size={15} />
            </button>
          </div>
          {cartItems.length > 0 ? (
            <div className="mh-account-cart-list">
              {cartItems.slice(-4).reverse().map((item, index) => (
                <div
                  className="mh-account-cart-item"
                  key={`${item.productSlug ?? "item"}-${index}`}
                >
                  <span className="mh-account-cart-number">{index + 1}</span>
                  <span className="mh-account-cart-copy">
                    <strong>{item.productTitle || "Produk Mahreen Studio"}</strong>
                    <span>
                      {[item.color, item.size].filter(Boolean).join(" · ") ||
                        "Produk tersimpan"}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="mh-account-empty">Keranjang Anda masih kosong.</p>
          )}
          <a
            className="mh-account-popover-cta"
            href="#/mahreen-studio/latest-collection"
            onClick={close}
          >
            Lihat Koleksi Mahreen Studio
          </a>
        </div>

      </div>
    </>
  );
};

export default NavbarAccountControl;