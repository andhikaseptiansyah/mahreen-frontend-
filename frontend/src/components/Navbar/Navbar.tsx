import { useEffect, useRef, useState } from "react";
import mahreenLogo from "../../assets/Navbar/mahreen-logo.png";
import NavbarAccountControl from "./NavbarAccountControl";
import { useAuth } from "../../hooks/useAuth";

type NavigationItem = {
  label: string;
  href: string;
};

type NavbarProps = Readonly<{
  homeHref?: string;
  homeLabel?: string;
}>;

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
    max-width: 100% !important;
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
  body.mobile-nav-open {
    overflow: hidden !important;
    touch-action: none;
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
    max-width: 100% !important;
    min-width: 0 !important;
  }

  .site-header {
    position: fixed;
    inset: 0 0 auto 0;
    width: 100% !important;
    max-width: 100% !important;
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
    background: rgba(0, 0, 0, 0.96);
    border-bottom-color: rgba(216, 184, 106, 0.28);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.34);
  }

  .navbar {
    position: relative;
    width: 100% !important;
    max-width: 100% !important;
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
    gap: 34px;
  }

  .navbar__right {
    justify-content: flex-end;
    gap: 26px;
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
    width: 225px;
    height: 62px;
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

  body.mahreen-authenticated .navbar__right {
    gap: 0;
  }

  body.mahreen-authenticated .navbar__right > .navbar__link {
    display: none;
  }

  @media (max-width: 1200px) {
    .navbar {
      padding: 0 22px;
    }

    .navbar__left {
      gap: 24px;
    }

    .navbar__right {
      gap: 18px;
    }

    .navbar__auth {
      gap: 13px;
    }

    .navbar__logo {
      width: 180px;
      height: 56px;
    }
  }

  @media (max-width: 1024px) {
    :root {
      --navbar-height: 74px;
    }

    .site-header {
      height: var(--navbar-height);
      background: rgba(0, 0, 0, 0.98);
      border-bottom: 1px solid rgba(255, 255, 255, 0.055);
    }

    .navbar {
      position: relative;
      z-index: 1002;
      display: flex;
      width: 100%;
      height: var(--navbar-height);
      padding: 0 18px;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    /* Desktop navigation must disappear completely on tablet/mobile. */
    .navbar__left,
    .navbar__right {
      display: none !important;
    }

    .navbar__logo-link {
      position: relative;
      z-index: 1003;
      display: inline-flex;
      flex: 0 1 auto;
      min-width: 0;
      margin-right: auto;
      justify-content: flex-start;
    }

    .navbar__logo {
      width: clamp(170px, 30vw, 235px);
      max-width: calc(100vw - 92px);
      height: 58px;
      object-fit: contain;
      object-position: left center;
    }

    .navbar__menu-button {
      position: relative;
      z-index: 1005;
      display: flex;
      flex: 0 0 38px;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      width: 36px;
      height: 36px;
      padding: 0;
      border: 0;
      outline: 0;
      background: transparent;
      border-radius: 0;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
    }

    .navbar__menu-button:focus,
    .navbar__menu-button:active,
    .navbar__menu-button:focus-visible {
      background: transparent;
      border: 0;
      outline: none;
      box-shadow: none;
    }

    .navbar__menu-button span {
      display: block;
      height: 3px;
      margin: 3px 0;
      border-radius: 999px;
      background: #ffffff;
      box-shadow: 0 0 6px rgba(255, 255, 255, 0.1);
      transform-origin: center;
      transition:
        width 320ms cubic-bezier(0.16, 1, 0.3, 1),
        transform 320ms cubic-bezier(0.16, 1, 0.3, 1),
        opacity 220ms ease,
        background-color 220ms ease;
    }

    .navbar__menu-button span:nth-child(1) {
      width: 27px;
    }

    .navbar__menu-button span:nth-child(2) {
      width: 27px;
    }

    .navbar__menu-button span:nth-child(3) {
      width: 14px;
    }

    .navbar__menu-button.is-open span:nth-child(1) {
      width: 25px;
      transform: translateY(9px) rotate(45deg);
    }

    .navbar__menu-button.is-open span:nth-child(2) {
      opacity: 0;
      transform: scaleX(0);
    }

    .navbar__menu-button.is-open span:nth-child(3) {
      width: 25px;
      transform: translateY(-9px) rotate(-45deg);
    }

    .navbar__mobile-menu {
      position: fixed;
      top: var(--navbar-height);
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1001;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 100%;
      height: calc(100dvh - var(--navbar-height));
      padding:
        clamp(40px, 6vh, 64px)
        20px
        max(30px, env(safe-area-inset-bottom));
      overflow-y: auto;
      overscroll-behavior: contain;
      border: 0;
      border-radius: 0;
      background:
        radial-gradient(
          circle at 68% 30%,
          rgba(153, 118, 76, 0.08),
          transparent 30%
        ),
        radial-gradient(
          circle at 20% 12%,
          rgba(255, 255, 255, 0.025),
          transparent 28%
        ),
        linear-gradient(
          145deg,
          rgba(27, 29, 28, 0.998),
          rgba(12, 11, 10, 1) 55%,
          rgba(6, 6, 6, 1)
        );
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      visibility: hidden;
      opacity: 0;
      transform: translateY(-14px);
      pointer-events: none;
      transition:
        opacity 380ms cubic-bezier(0.16, 1, 0.3, 1),
        transform 380ms cubic-bezier(0.16, 1, 0.3, 1),
        visibility 380ms ease;
    }

    .navbar__mobile-menu.is-open {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }

    .navbar__mobile-navigation {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 420px;
      margin: auto 0;
    }

    .navbar__mobile-link,
    .navbar__mobile-ecosystem-button {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: min(100%, 330px);
      min-height: 52px;
      margin: 3px 0;
      padding: 10px 24px;
      border: 0;
      border-radius: 12px;
      background: transparent;
      color: rgba(255, 255, 255, 0.95);
      font-family: "Playfair Display", Georgia, serif;
      font-size: clamp(23px, 6.4vw, 29px);
      font-weight: 400;
      line-height: 1.25;
      letter-spacing: -0.5px;
      text-transform: none;
      text-decoration: none;
      cursor: pointer;
      transition:
        color 260ms ease,
        background-color 260ms ease,
        box-shadow 260ms ease,
        transform 260ms cubic-bezier(0.16, 1, 0.3, 1);
    }

    .navbar__mobile-link.is-active {
      color: #d7b982;
    }

    .navbar__mobile-link:hover,
    .navbar__mobile-link:focus-visible,
    .navbar__mobile-ecosystem-button:hover,
    .navbar__mobile-ecosystem-button:focus-visible {
      color: var(--navbar-gold);
      background: transparent !important;
      transform: translateY(-1px);
      text-shadow:
        0 0 8px rgba(215, 185, 130, 0.95),
        0 0 18px rgba(215, 185, 130, 0.58),
        0 0 30px rgba(215, 185, 130, 0.28);
      box-shadow:
        0 0 14px rgba(215, 185, 130, 0.16),
        0 0 26px rgba(215, 185, 130, 0.08);
    }

    .navbar__mobile-ecosystem {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .navbar__mobile-ecosystem-button {
      gap: 12px;
    }

    .navbar__mobile-ecosystem-chevron {
      width: 15px;
      height: 9px;
      flex: 0 0 auto;
      color: rgba(255, 255, 255, 0.92);
      transform: translateY(2px);
      transition:
        transform 360ms cubic-bezier(0.16, 1, 0.3, 1),
        color 260ms ease;
    }

    .navbar__mobile-ecosystem-chevron.is-open {
      color: #d7b982;
      transform: translateY(2px) rotate(180deg);
    }

    .navbar__mobile-ecosystem-list {
      display: grid;
      grid-template-rows: 0fr;
      width: 100%;
      opacity: 0;
      transition:
        grid-template-rows 420ms cubic-bezier(0.16, 1, 0.3, 1),
        opacity 280ms ease;
    }

    .navbar__mobile-ecosystem-list.is-open {
      grid-template-rows: 1fr;
      opacity: 1;
    }

    .navbar__mobile-ecosystem-inner {
      min-height: 0;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .navbar__mobile-ecosystem-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 5px 0 14px;
    }

    .navbar__mobile-ecosystem-link {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: min(100%, 290px);
      min-height: 42px;
      margin: 2px 0;
      padding: 10px 18px;
      border-radius: 10px;
      color: rgba(255, 255, 255, 0.7);
      font-family: "Inter", Arial, sans-serif;
      font-size: 11px;
      font-weight: 500;
      line-height: 1.4;
      letter-spacing: 1.3px;
      text-transform: uppercase;
      text-align: center;
      text-decoration: none;
      transition:
        color 240ms ease,
        background-color 240ms ease,
        box-shadow 240ms ease,
        transform 240ms ease;
    }

    /* Ini mengatasi efek glow saat hover di dropdown mobile */
    .navbar__mobile-ecosystem-link:hover,
    .navbar__mobile-ecosystem-link:focus-visible {
      color: var(--navbar-gold) !important;
      background: transparent !important;
      transform: translateY(-1px);
      text-shadow:
        0 0 8px rgba(215, 185, 130, 0.8),
        0 0 16px rgba(215, 185, 130, 0.4);
      box-shadow: none !important;
    }

    /* Ini mengatasi background yg nempel pada menu aktif di dropdown mobile */
    .navbar__mobile-ecosystem-link.is-active {
      color: var(--navbar-gold) !important;
      background: transparent !important;
      text-shadow:
        0 0 8px rgba(215, 185, 130, 0.8),
        0 0 16px rgba(215, 185, 130, 0.4);
      box-shadow: none !important;
    }

    .navbar__mobile-actions {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 274px;
      gap: 15px;
      margin-top: 30px;
    }

    .navbar__mobile-register,
    .navbar__mobile-login {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      min-height: 49px;
      padding: 0 24px;
      border-radius: 999px;
      font-family: "Inter", Arial, sans-serif;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0;
      text-transform: uppercase;
      text-decoration: none;
      transition:
        transform 280ms cubic-bezier(0.16, 1, 0.3, 1),
        border-color 280ms ease,
        background 280ms ease,
        color 280ms ease,
        box-shadow 280ms ease;
    }

    .navbar__mobile-register {
      border: 1px solid rgba(255, 255, 255, 0.88);
      background: transparent;
      color: #ffffff;
    }

    .navbar__mobile-login {
      border: 1px solid #d7b982;
      background: #d7b982;
      color: #111111;
    }

    .navbar__mobile-register:hover,
    .navbar__mobile-register:focus-visible {
      color: var(--navbar-gold);
      border-color: rgba(215, 185, 130, 0.82);
      background: rgba(215, 185, 130, 0.055);
      transform: translateY(-1px);
      text-shadow:
        0 0 8px rgba(215, 185, 130, 0.9),
        0 0 18px rgba(215, 185, 130, 0.45);
      box-shadow:
        0 0 12px rgba(215, 185, 130, 0.22),
        0 0 26px rgba(215, 185, 130, 0.12);
    }

    .navbar__mobile-login:hover,
    .navbar__mobile-login:focus-visible {
      transform: translateY(-1px);
      box-shadow:
        0 0 14px rgba(215, 185, 130, 0.52),
        0 0 30px rgba(215, 185, 130, 0.24);
    }
  }

  @media (max-width: 520px) {
    :root {
      --navbar-height: 72px;
    }

    .navbar {
      padding: 0 15px;
    }

    .navbar__logo {
      width: min(250px, 70vw);
      height: 64px;
    }

    .navbar__menu-button {
      width: 34px;
      height: 34px;
    }

    .navbar__menu-button span:nth-child(1),
    .navbar__menu-button span:nth-child(2) {
      width: 25px;
    }

    .navbar__menu-button span:nth-child(3) {
      width: 13px;
    }

    .navbar__menu-button.is-open span:nth-child(1) {
      width: 24px;
    }

    .navbar__menu-button.is-open span:nth-child(3) {
      width: 24px;
    }

    .navbar__mobile-menu {
      padding:
        clamp(34px, 5.5vh, 50px)
        18px
        max(28px, env(safe-area-inset-bottom));
    }

    .navbar__mobile-link,
    .navbar__mobile-ecosystem-button {
      width: min(100%, 310px);
      min-height: 50px;
      padding: 9px 20px;
      font-size: clamp(22px, 6.5vw, 27px);
    }

    .navbar__mobile-actions {
      margin-top: 25px;
    }
  }

  @media (max-width: 360px) {
    .navbar__logo {
      width: min(220px, 68vw);
      height: 58px;
    }

    .navbar__mobile-link,
    .navbar__mobile-ecosystem-button {
      font-size: 21px;
    }

    .navbar__mobile-menu {
      padding-top: 28px;
    }

    .navbar__mobile-actions {
      margin-top: 20px;
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

const Navbar = ({ homeHref = "#/", homeLabel = "Home" }: NavbarProps) => {
  const [ecosystemOpen, setEcosystemOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileEcosystemOpen, setMobileEcosystemOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated } = useAuth();
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
      setMobileOpen(false);
      setMobileEcosystemOpen(false);
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
      if (window.innerWidth > 1024) {
        setMobileOpen(false);
        setMobileEcosystemOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("mobile-nav-open");
    } else {
      document.body.classList.remove("mobile-nav-open");
    }

    return () => {
      document.body.classList.remove("mobile-nav-open");
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setMobileEcosystemOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileEcosystemOpen(false);
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
            {isAuthenticated && (
              <a
                className={`navbar__link${
                  isActiveRoute(currentPath, homeHref) ? " is-active" : ""
                }`}
                href={homeHref}
                aria-current={
                  isActiveRoute(currentPath, homeHref) ? "page" : undefined
                }
              >
                {homeLabel}
              </a>
            )}

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
            href={homeHref}
            aria-label={`Kembali ke ${homeLabel}`}
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

            <a
              className={`navbar__link${
                isActiveRoute(currentPath, "#/contact") ? " is-active" : ""
              }`}
              href="#/contact"
              aria-current={
                isActiveRoute(currentPath, "#/contact") ? "page" : undefined
              }
            >
              Hubungi Kami
            </a>

            <NavbarAccountControl />
          </div>

          <button
            className={`navbar__menu-button${mobileOpen ? " is-open" : ""}`}
            type="button"
            aria-label={mobileOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => {
              setMobileOpen((currentValue) => {
                const nextValue = !currentValue;

                if (!nextValue) {
                  setMobileEcosystemOpen(false);
                }

                return nextValue;
              });
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
            <div className="navbar__mobile-navigation">
              {isAuthenticated && (
                <a
                  className={`navbar__mobile-link${
                    isActiveRoute(currentPath, homeHref) ? " is-active" : ""
                  }`}
                  href={homeHref}
                  aria-current={
                    isActiveRoute(currentPath, homeHref) ? "page" : undefined
                  }
                  onClick={closeMobileMenu}
                >
                  {homeLabel}
                </a>
              )}

              <a
                className={`navbar__mobile-link${
                  isActiveRoute(currentPath, "#/tentang") ? " is-active" : ""
                }`}
                href="#/tentang"
                aria-current={
                  isActiveRoute(currentPath, "#/tentang") ? "page" : undefined
                }
                onClick={closeMobileMenu}
              >
                Tentang
              </a>

              <div className="navbar__mobile-ecosystem">
                <button
                  className={`navbar__mobile-ecosystem-button${
                    isEcosystemActive ? " is-active" : ""
                  }`}
                  type="button"
                  aria-expanded={mobileEcosystemOpen}
                  aria-controls="mobile-ecosystem-menu"
                  onClick={() => {
                    setMobileEcosystemOpen(
                      (currentValue) => !currentValue
                    );
                  }}
                >
                  <span>Our Ecosystem</span>

                  <svg
                    className={`navbar__mobile-ecosystem-chevron${
                      mobileEcosystemOpen ? " is-open" : ""
                    }`}
                    viewBox="0 0 14 9"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1.5 1.5L7 7L12.5 1.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div
                  id="mobile-ecosystem-menu"
                  className={`navbar__mobile-ecosystem-list${
                    mobileEcosystemOpen ? " is-open" : ""
                  }`}
                >
                  <div className="navbar__mobile-ecosystem-inner">
                    <div className="navbar__mobile-ecosystem-content">
                      {ecosystemItems.map((item) => (
                        <a
                          key={item.label}
                          className={`navbar__mobile-ecosystem-link${
                            isActiveRoute(currentPath, item.href)
                              ? " is-active"
                              : ""
                          }`}
                          href={item.href}
                          aria-current={
                            isActiveRoute(currentPath, item.href)
                              ? "page"
                              : undefined
                          }
                          onClick={closeMobileMenu}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <a
                className={`navbar__mobile-link${
                  isActiveRoute(currentPath, "#/portofolio")
                    ? " is-active"
                    : ""
                }`}
                href="#/portofolio"
                aria-current={
                  isActiveRoute(currentPath, "#/portofolio")
                    ? "page"
                    : undefined
                }
                onClick={closeMobileMenu}
              >
                Portofolio
              </a>

              <a
                className={`navbar__mobile-link${
                  isActiveRoute(currentPath, "#/newsroom")
                    ? " is-active"
                    : ""
                }`}
                href="#/newsroom"
                aria-current={
                  isActiveRoute(currentPath, "#/newsroom")
                    ? "page"
                    : undefined
                }
                onClick={closeMobileMenu}
              >
                Newsroom
              </a>

              <a
                className={`navbar__mobile-link${
                  isActiveRoute(currentPath, "#/contact")
                    ? " is-active"
                    : ""
                }`}
                href="#/contact"
                aria-current={
                  isActiveRoute(currentPath, "#/contact")
                    ? "page"
                    : undefined
                }
                onClick={closeMobileMenu}
              >
                Hubungi Kami
              </a>

              <NavbarAccountControl variant="mobile" onNavigate={closeMobileMenu} />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
