import { useState } from "react";
import loginVisual from "../../assets/Daftar/login-visual.png";
import mahreenIcon from "../../assets/icon.png";

const loginStyles = `
  @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700;800&display=swap");

  @keyframes loginShellReveal {
    from {
      opacity: 0;
      transform: translateY(18px) scale(0.99);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes loginFloatReveal {
    from {
      opacity: 0;
      transform: translateY(16px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .client-login-page {
    width: 100%;
    min-height: 100vh;
    min-height: 100dvh;
    padding: clamp(12px, 2vw, 26px);
    display: flex;
    align-items: center;
    justify-content: center;
    background: #060606;
    color: #ffffff;
    overflow: hidden;
  }

  .client-login-page,
  .client-login-page *,
  .client-login-page *::before,
  .client-login-page *::after {
    box-sizing: border-box;
  }

  .client-login-shell {
    width: min(100%, 1188px);
    height: min(100%, 748px);
    min-height: 680px;
    display: grid;
    grid-template-columns: 1fr 1.04fr;
    gap: clamp(26px, 3vw, 44px);
    padding: clamp(22px, 2.25vw, 28px);
    border: 1px solid rgba(255, 255, 255, 0.045);
    border-radius: 36px;
    background: #111111;
    box-shadow: 0 34px 95px rgba(0, 0, 0, 0.48);
    overflow: hidden;
    opacity: 0;
    animation: loginShellReveal 650ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  .client-login-panel {
    min-width: 0;
    height: 100%;
    padding: clamp(34px, 4.4vw, 52px) clamp(30px, 3.4vw, 42px) clamp(22px, 2.5vw, 32px);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .client-login-topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    margin-bottom: clamp(36px, 6vh, 58px);
    flex-shrink: 0;
  }

  .client-login-brand {
    min-height: 34px;
    padding: 0 15px 0 14px;
    display: inline-flex;
    align-items: center;
    gap: 9px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.045);
    color: rgba(255, 255, 255, 0.67);
    font-family: "Inter", Arial, sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.45px;
    white-space: nowrap;
    cursor: default;
  }

  .client-login-brand-icon {
    width: 16px;
    height: 16px;
    display: block;
    object-fit: contain;
    border-radius: 4px;
    flex-shrink: 0;
  }

  .client-login-close {
    width: 34px;
    height: 34px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: transparent;
    color: rgba(255, 255, 255, 0.42);
    font-family: "Inter", Arial, sans-serif;
    font-size: 18px;
    line-height: 1;
    cursor: pointer;
    transition: color 180ms ease, border-color 180ms ease, background-color 180ms ease, transform 180ms ease;
  }

  .client-login-close:hover,
  .client-login-close:focus-visible {
    color: rgba(255, 255, 255, 0.78);
    border-color: rgba(255, 255, 255, 0.16);
    background: rgba(255, 255, 255, 0.055);
    transform: scale(1.03);
    outline: none;
  }

  .client-login-title {
    margin: 0;
    color: #ffffff;
    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: clamp(36px, 4.2vw, 46px);
    font-weight: 700;
    line-height: 0.98;
    letter-spacing: -0.7px;
  }

  .client-login-subtitle {
    margin: 9px 0 0;
    color: rgba(255, 255, 255, 0.48);
    font-family: "Inter", Arial, sans-serif;
    font-size: 12px;
    font-weight: 500;
  }

  .client-login-subtitle-link {
    color: #d5b681;
    font-weight: 700;
    text-decoration: none;
  }

  .client-login-form {
    width: 100%;
    max-width: 456px;
    margin-top: clamp(30px, 4vh, 42px);
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
  }

  .client-login-field {
    display: flex;
    flex-direction: column;
    gap: 11px;
    margin-bottom: 22px;
  }

  .client-login-field-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
  }

  .client-login-label {
    color: rgba(255, 255, 255, 0.5);
    font-family: "Inter", Arial, sans-serif;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 1.9px;
    text-transform: uppercase;
  }

  .client-login-forgot {
    color: #c9ab78;
    font-family: "Inter", Arial, sans-serif;
    font-size: 9px;
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
  }

  .client-login-input-wrap {
    position: relative;
  }

  .client-login-input {
    width: 100%;
    height: 52px;
    padding: 0 22px;
    border: 1px solid rgba(255, 255, 255, 0.075);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.045);
    color: #ffffff;
    font-family: "Inter", Arial, sans-serif;
    font-size: 13px;
    font-weight: 500;
    outline: none;
    transition: border-color 180ms ease, background-color 180ms ease, box-shadow 180ms ease;
  }

  .client-login-input--password {
    padding-right: 54px;
  }

  .client-login-input::placeholder {
    color: rgba(255, 255, 255, 0.27);
  }

  .client-login-input:focus {
    border-color: rgba(211, 179, 127, 0.72);
    background: rgba(255, 255, 255, 0.065);
    box-shadow: 0 0 0 4px rgba(211, 179, 127, 0.09);
  }

  .client-login-eye {
    position: absolute;
    right: 17px;
    top: 50%;
    width: 24px;
    height: 24px;
    padding: 0;
    display: grid;
    place-items: center;
    border: 0;
    background: transparent;
    color: rgba(255, 255, 255, 0.44);
    transform: translateY(-50%);
    cursor: pointer;
    transition: color 180ms ease, transform 180ms ease;
  }

  .client-login-eye:hover,
  .client-login-eye:focus-visible {
    color: rgba(255, 255, 255, 0.75);
    transform: translateY(-50%) scale(1.05);
    outline: none;
  }

  .client-login-eye svg {
    width: 17px;
    height: 17px;
    display: block;
  }

  .client-login-remember {
    margin: -2px 0 26px;
    padding-left: 30px;
    display: inline-flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.43);
    font-family: "Inter", Arial, sans-serif;
    font-size: 11px;
    font-weight: 500;
  }

  .client-login-submit {
    width: 100%;
    height: 52px;
    border: 0;
    border-radius: 999px;
    background: #d2b486;
    color: #090909;
    box-shadow: 0 16px 30px rgba(210, 180, 134, 0.22);
    font-family: "Inter", Arial, sans-serif;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 180ms ease, box-shadow 180ms ease, filter 180ms ease;
  }

  .client-login-submit:hover,
  .client-login-submit:focus-visible {
    transform: translateY(-2px);
    filter: brightness(1.04);
    box-shadow: 0 19px 34px rgba(210, 180, 134, 0.28);
  }

  .client-login-divider {
    width: 100%;
    max-width: 456px;
    height: 1px;
    margin: clamp(34px, 5vh, 42px) 0 0;
    background: rgba(255, 255, 255, 0.055);
    flex-shrink: 0;
  }

  .client-login-bottom-bar {
    width: 100%;
    max-width: 456px;
    margin-top: auto;
    padding-top: clamp(30px, 9vh, 96px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    border-top: 1px solid rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.42);
    font-family: "Inter", Arial, sans-serif;
    font-size: 10px;
    font-weight: 600;
    line-height: 1.35;
  }

  .client-login-copyright {
    color: rgba(255, 255, 255, 0.42);
    white-space: nowrap;
  }

  .client-login-bottom-actions {
    display: inline-flex;
    align-items: center;
    gap: 20px;
    flex-shrink: 0;
  }

  .client-login-bottom-button {
    padding: 0;
    border: 0;
    background: transparent;
    color: rgba(255, 255, 255, 0.42);
    font-family: "Inter", Arial, sans-serif;
    font-size: 10px;
    font-weight: 600;
    text-decoration: none;
    white-space: nowrap;
    transition: color 180ms ease, text-shadow 180ms ease;
  }

  .client-login-bottom-button:hover,
  .client-login-bottom-button:focus-visible,
  .client-login-subtitle-link:hover,
  .client-login-forgot:hover {
    color: #d7b982;
    text-shadow: 0 0 14px rgba(215, 185, 130, 0.23);
  }

  .client-login-visual {
    position: relative;
    height: 100%;
    min-height: 0;
    border-radius: 28px;
    overflow: hidden;
    isolation: isolate;
    background:
      linear-gradient(180deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.76)),
      linear-gradient(90deg, rgba(0, 0, 0, 0.18), transparent 44%, rgba(0, 0, 0, 0.26)),
      url("${loginVisual}"),
      linear-gradient(135deg, #29241d 0%, #121212 48%, #050505 100%);
    background-size: cover;
    background-position: center;
  }

  .client-login-visual::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background:
      radial-gradient(circle at 35% 16%, rgba(215, 185, 130, 0.16), transparent 20%),
      radial-gradient(circle at 78% 54%, rgba(255, 255, 255, 0.06), transparent 25%);
    filter: blur(5px);
  }

  .client-login-visual::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background: linear-gradient(180deg, transparent 46%, rgba(0, 0, 0, 0.42) 100%);
  }

  .client-login-card {
    position: absolute;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 18px;
    background: rgba(18, 18, 18, 0.62);
    box-shadow: 0 24px 45px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    opacity: 0;
    animation: loginFloatReveal 650ms ease forwards;
  }

  .client-login-meeting {
    top: 22px;
    left: 34px;
    width: 184px;
    padding: 18px 19px 17px;
    border-color: rgba(215, 185, 130, 0.38);
    background: #d2b486;
    color: #120f09;
    animation-delay: 220ms;
  }

  .client-login-meeting-label {
    margin: 0 0 8px;
    color: rgba(18, 15, 9, 0.64);
    font-family: "Inter", Arial, sans-serif;
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .client-login-meeting-title {
    margin: 0;
    color: #12100b;
    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: 17px;
    font-weight: 700;
    line-height: 0.98;
  }

  .client-login-meeting-time {
    margin: 8px 0 0;
    color: rgba(18, 15, 9, 0.72);
    font-family: "Inter", Arial, sans-serif;
    font-size: 10px;
    font-weight: 800;
  }

  .client-login-calendar {
    right: 36px;
    top: 218px;
    width: 254px;
    padding: 18px 20px 17px;
    animation-delay: 350ms;
  }

  .client-login-calendar-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
  }

  .client-login-calendar-month,
  .client-login-calendar-type {
    margin: 0;
    font-family: "Inter", Arial, sans-serif;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.7px;
  }

  .client-login-calendar-month {
    color: #d5b681;
    text-transform: uppercase;
  }

  .client-login-calendar-type {
    color: rgba(255, 255, 255, 0.64);
  }

  .client-login-calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 9px 11px;
    align-items: center;
    text-align: center;
    color: rgba(255, 255, 255, 0.42);
    font-family: "Inter", Arial, sans-serif;
    font-size: 10px;
    font-weight: 700;
  }

  .client-login-calendar-day {
    color: rgba(255, 255, 255, 0.52);
    font-size: 8px;
    text-transform: uppercase;
  }

  .client-login-calendar-muted {
    opacity: 0.34;
  }

  .client-login-calendar-active {
    width: 25px;
    height: 25px;
    margin: -6px auto;
    display: inline-grid;
    place-items: center;
    border-radius: 50%;
    background: rgba(210, 180, 134, 0.52);
    color: #ffffff;
  }

  .client-login-standup {
    left: 34px;
    bottom: 36px;
    width: 246px;
    padding: 18px 19px;
    animation-delay: 480ms;
  }

  .client-login-standup-title {
    margin: 0 0 8px;
    color: #ffffff;
    font-family: "Inter", Arial, sans-serif;
    font-size: 13px;
    font-weight: 800;
  }

  .client-login-standup-time {
    margin: 0 0 14px;
    color: rgba(255, 255, 255, 0.46);
    font-family: "Inter", Arial, sans-serif;
    font-size: 10px;
    font-weight: 600;
  }

  .client-login-avatar-row {
    display: flex;
    align-items: center;
  }

  .client-login-avatar {
    width: 25px;
    height: 25px;
    margin-right: -7px;
    display: inline-grid;
    place-items: center;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 50%;
    color: #15100a;
    font-family: "Inter", Arial, sans-serif;
    font-size: 8px;
    font-weight: 900;
  }

  .client-login-avatar:nth-child(1) { background: #d2b486; }
  .client-login-avatar:nth-child(2) { background: #3466ba; color: #fff; }
  .client-login-avatar:nth-child(3) { background: #7b35a4; color: #fff; }
  .client-login-avatar:nth-child(4) { background: rgba(255,255,255,.14); color: rgba(255,255,255,.76); }

  .client-login-mini-stack {
    position: absolute;
    left: 34px;
    top: 252px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    z-index: 2;
  }

  .client-login-mini {
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.27);
    background:
      radial-gradient(circle at 35% 24%, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.05) 44%, transparent 72%),
      rgba(17, 17, 17, 0.58);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.18),
      0 14px 28px rgba(0, 0, 0, 0.28);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  .client-login-mini svg {
    width: 18px;
    height: 18px;
    display: block;
    filter: drop-shadow(0 3px 7px rgba(0, 0, 0, 0.34));
  }

  @media (min-width: 981px) and (max-height: 760px) {
    .client-login-shell {
      min-height: 590px;
      height: calc(100dvh - 24px);
    }

    .client-login-panel {
      padding-top: 32px;
      padding-bottom: 22px;
    }

    .client-login-topbar {
      margin-bottom: 34px;
    }

    .client-login-form {
      margin-top: 26px;
    }

    .client-login-field {
      gap: 8px;
      margin-bottom: 16px;
    }

    .client-login-input,
    .client-login-submit {
      height: 46px;
    }

    .client-login-divider {
      margin-top: 28px;
    }

    .client-login-bottom-bar {
      padding-top: 26px;
    }
  }

  @media (max-width: 980px) {
    .client-login-page {
      height: auto;
      min-height: 100vh;
      min-height: 100svh;
      min-height: 100dvh;
      padding: 0;
      align-items: stretch;
      overflow-x: hidden;
      overflow-y: auto;
      background: #111111;
    }

    .client-login-shell {
      width: 100%;
      height: auto;
      min-height: 100vh;
      min-height: 100svh;
      min-height: 100dvh;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr;
      gap: 0;
      padding: 0;
      border: 0;
      border-radius: 0;
      background: #111111;
      overflow: visible;
    }

    .client-login-visual {
      order: -1;
      width: 100%;
      height: clamp(300px, 42vh, 420px);
      min-height: 280px;
      border-radius: 0 0 32px 32px;
      background-position: center 42%;
    }

    .client-login-panel {
      width: 100%;
      height: auto;
      min-height: 0;
      padding: clamp(24px, 4.4vh, 42px) clamp(28px, 7vw, 64px) clamp(24px, 4vh, 40px);
      overflow: visible;
    }

    .client-login-topbar {
      margin-bottom: clamp(24px, 4vh, 34px);
    }

    .client-login-form,
    .client-login-divider,
    .client-login-bottom-bar {
      max-width: 100%;
    }

    .client-login-form {
      margin-top: 28px;
    }

    .client-login-bottom-bar {
      margin-top: 28px;
      padding-top: 18px;
    }

    .client-login-calendar {
      right: clamp(24px, 6vw, 60px);
      top: 132px;
      width: min(254px, 52vw);
    }

    .client-login-meeting {
      left: clamp(24px, 6vw, 58px);
      top: 26px;
    }

    .client-login-standup {
      left: clamp(24px, 6vw, 58px);
      bottom: 28px;
    }

    .client-login-mini-stack {
      left: clamp(24px, 6vw, 58px);
      top: 50%;
      transform: translateY(-50%);
    }
  }

  @media (min-width: 641px) and (max-width: 980px) {
    .client-login-panel {
      max-width: 740px;
      margin: 0 auto;
    }
  }

  @media (max-width: 640px) {
    .client-login-visual {
      height: clamp(245px, 35vh, 320px);
      min-height: 230px;
      border-radius: 0 0 26px 26px;
      background-position: center top;
    }

    .client-login-meeting,
    .client-login-calendar,
    .client-login-standup {
      display: none;
    }

    .client-login-mini-stack {
      left: 18px;
      gap: 9px;
    }

    .client-login-mini {
      width: 42px;
      height: 42px;
    }

    .client-login-mini svg {
      width: 20px;
      height: 20px;
    }

    .client-login-panel {
      padding: 22px 16px 20px;
    }

    .client-login-brand {
      min-height: 34px;
      max-width: calc(100vw - 86px);
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .client-login-title {
      font-size: clamp(34px, 10vw, 42px);
    }

    .client-login-subtitle {
      font-size: 12px;
    }

    .client-login-form {
      margin-top: 26px;
    }

    .client-login-field {
      gap: 9px;
      margin-bottom: 18px;
    }

    .client-login-input,
    .client-login-submit {
      height: 48px;
    }

    .client-login-remember {
      margin-bottom: 22px;
      padding-left: 22px;
    }

    .client-login-divider {
      margin-top: 30px;
    }

    .client-login-bottom-bar {
      align-items: flex-start;
      gap: 10px;
      flex-wrap: wrap;
      font-size: 10px;
    }

    .client-login-bottom-actions {
      gap: 16px;
      margin-left: auto;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .client-login-shell,
    .client-login-card {
      opacity: 1;
      animation: none;
      transform: none;
    }
  }
`;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    window.location.hash = "/";
  };

  return (
    <main className="client-login-page">
      <style data-component="client-login">{loginStyles}</style>

      <section className="client-login-shell" aria-labelledby="client-login-title">
        <div className="client-login-panel">
          <div className="client-login-topbar">
            <button className="client-login-brand" type="button" aria-label="Mahreen Indonesia">
              <img className="client-login-brand-icon" src={mahreenIcon} alt="" aria-hidden="true" />
              Mahreen Indonesia
            </button>
            <button
              className="client-login-close"
              type="button"
              aria-label="Kembali ke halaman sebelumnya"
              onClick={handleBack}
            >
              ×
            </button>
          </div>

          <div>
            <h1 className="client-login-title" id="client-login-title">
              Masuk ke Akun
            </h1>
            <p className="client-login-subtitle">
              Belum terdaftar? <a className="client-login-subtitle-link" href="#/daftar">Daftar sekarang</a>
            </p>
          </div>

          <form className="client-login-form">
            <label className="client-login-field">
              <span className="client-login-label">Alamat Email</span>
              <input
                className="client-login-input"
                type="email"
                name="email"
                placeholder="Masukkan email Anda"
                autoComplete="email"
              />
            </label>

            <label className="client-login-field">
              <span className="client-login-field-head">
                <span className="client-login-label">Kata Sandi</span>
                <a className="client-login-forgot" href="#/lupa-sandi">Lupa Sandi?</a>
              </span>
              <span className="client-login-input-wrap">
                <input
                  className="client-login-input client-login-input--password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••••••"
                  autoComplete="current-password"
                />
                <button
                  className="client-login-eye"
                  type="button"
                  aria-label={showPassword ? "Sembunyikan kata sandi" : "Lihat kata sandi"}
                  aria-pressed={showPassword}
                  onClick={() => setShowPassword((current) => !current)}
                >
                  {showPassword ? (
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M3.25 3.25l17.5 17.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      <path d="M9.2 6.95A9.7 9.7 0 0 1 12 6.55c6 0 9.25 5.45 9.25 5.45a16 16 0 0 1-3.05 3.42" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M14.05 14.32A2.65 2.65 0 0 1 9.68 9.95" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.56 8.2C4.06 9.75 2.75 12 2.75 12s3.25 5.45 9.25 5.45c1.15 0 2.2-.2 3.15-.52" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M2.75 12s3.25-5.25 9.25-5.25S21.25 12 21.25 12 18 17.25 12 17.25 2.75 12 2.75 12Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 14.65a2.65 2.65 0 1 0 0-5.3 2.65 2.65 0 0 0 0 5.3Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </span>
            </label>

            <span className="client-login-remember">Tetap masuk selama 30 hari</span>

            <button className="client-login-submit" type="submit">
              Masuk
            </button>
          </form>

          <div className="client-login-divider" aria-hidden="true" />

          <div className="client-login-bottom-bar">
            <span className="client-login-copyright">© 2026 PT Mahreen Indonesia</span>
            <span className="client-login-bottom-actions">
              <a className="client-login-bottom-button" href="#/syarat-ketentuan">Syarat &amp; Ketentuan</a>
              <a className="client-login-bottom-button" href="#/privasi">Privasi</a>
            </span>
          </div>
        </div>

        <aside className="client-login-visual" aria-label="Ilustrasi aktivitas klien Mahreen">
          <div className="client-login-card client-login-meeting">
            <p className="client-login-meeting-label">Progress Meeting</p>
            <p className="client-login-meeting-title">Review Landing Page</p>
            <p className="client-login-meeting-time">09:30 AM - 10:00 AM</p>
          </div>

          <div className="client-login-mini-stack" aria-hidden="true">
            <span className="client-login-mini">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="4" y="8" width="16" height="11" rx="2.2" fill="#9a6a43" />
                <path d="M8.2 8V6.9C8.2 5.85 9.05 5 10.1 5h3.8c1.05 0 1.9.85 1.9 1.9V8" stroke="#d2b07b" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M4 11.2h16" stroke="#d8b66f" strokeWidth="1.25" opacity=".72" />
                <rect x="10.3" y="10.2" width="3.4" height="2.4" rx=".6" fill="#e6c27c" />
              </svg>
            </span>
            <span className="client-login-mini">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 19V5" stroke="rgba(255,255,255,.78)" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M5 19h14" stroke="rgba(255,255,255,.78)" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M7 15.5l3.2-4.1 3.1 2.3L18.5 7" stroke="#ff5a64" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.2 7h1.3v1.3" stroke="#ff5a64" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="client-login-mini">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 3.8l2.35 4.78 5.28.77-3.82 3.72.9 5.26L12 15.85l-4.72 2.48.9-5.26-3.82-3.72 5.28-.77L12 3.8z" fill="#f6c63e" />
                <path d="M12 3.8l2.35 4.78 5.28.77-3.82 3.72.9 5.26L12 15.85l-4.72 2.48.9-5.26-3.82-3.72 5.28-.77L12 3.8z" stroke="#ffe28a" strokeWidth=".65" strokeLinejoin="round" />
              </svg>
            </span>
          </div>

          <div className="client-login-card client-login-calendar">
            <div className="client-login-calendar-head">
              <p className="client-login-calendar-month">Juli 2026</p>
              <p className="client-login-calendar-type">Weekly</p>
            </div>
            <div className="client-login-calendar-grid" aria-hidden="true">
              <span className="client-login-calendar-day">M</span>
              <span className="client-login-calendar-day">S</span>
              <span className="client-login-calendar-day">S</span>
              <span className="client-login-calendar-day">R</span>
              <span className="client-login-calendar-day">K</span>
              <span className="client-login-calendar-day">J</span>
              <span className="client-login-calendar-day">S</span>
              <span className="client-login-calendar-muted">21</span>
              <span className="client-login-calendar-muted">22</span>
              <span>23</span>
              <span className="client-login-calendar-active">24</span>
              <span>25</span>
              <span>26</span>
              <span>27</span>
            </div>
          </div>

          <div className="client-login-card client-login-standup">
            <p className="client-login-standup-title">Daily Standup Meeting</p>
            <p className="client-login-standup-time">10:00 AM - 10:15 AM</p>
            <div className="client-login-avatar-row" aria-hidden="true">
              <span className="client-login-avatar">AR</span>
              <span className="client-login-avatar">RK</span>
              <span className="client-login-avatar">MA</span>
              <span className="client-login-avatar">+5</span>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default Login;
