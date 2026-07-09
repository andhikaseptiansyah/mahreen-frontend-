import loginVisual from "../../assets/Daftar/login-visual.png";
import mahreenIcon from "../../assets/icon.png";

const loginStyles = `
  @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap");

  @keyframes loginShellReveal {
    from {
      opacity: 0;
      transform: translateY(24px) scale(0.985);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes loginFloatReveal {
    from {
      opacity: 0;
      transform: translateY(18px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .client-login-page {
    height: 100dvh;
    min-height: 100vh;
    padding: clamp(10px, 2vh, 18px);
    display: flex;
    align-items: center;
    justify-content: center;
    background: #050505;
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
    width: min(100%, 1250px);
    height: calc(100dvh - clamp(20px, 4vh, 36px));
    min-height: 0;
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
    gap: clamp(24px, 3vw, 42px);
    padding: clamp(18px, 3vh, 28px);
    border-radius: 38px;
    background: #111111;
    box-shadow: 0 32px 100px rgba(0, 0, 0, 0.55);
    overflow: hidden;
    opacity: 0;
    animation: loginShellReveal 700ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  .client-login-panel {
    min-width: 0;
    min-height: 0;
    padding: clamp(22px, 4vh, 46px) clamp(26px, 3.2vw, 40px) clamp(18px, 3vh, 36px);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .client-login-topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: clamp(18px, 4vh, 46px);
    flex-shrink: 0;
  }

  .client-login-back {
    min-height: 38px;
    padding: 0 18px;
    display: inline-flex;
    align-items: center;
    gap: 9px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.7);
    font-family: "Inter", Arial, sans-serif;
    font-size: 12px;
    font-weight: 600;
    text-decoration: none;
    cursor: default;
  }

  .client-login-back-icon {
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
    color: rgba(255, 255, 255, 0.46);
    font-size: 18px;
    line-height: 1;
    cursor: pointer;
  }

  .client-login-heading-row {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 24px;
    align-items: end;
    margin-bottom: clamp(16px, 3vh, 28px);
    flex-shrink: 0;
  }

  .client-login-title {
    margin: 0;
    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: clamp(36px, 4vw, 48px);
    font-weight: 700;
    line-height: 1;
    color: #ffffff;
  }

  .client-login-subtitle {
    margin: 8px 0 0;
    color: rgba(255, 255, 255, 0.58);
    font-family: "Inter", Arial, sans-serif;
    font-size: 13px;
    font-weight: 500;
  }

  .client-login-step {
    margin-bottom: 6px;
    color: #d8b66f;
    font-family: "Inter", Arial, sans-serif;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 2.2px;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .client-login-progress {
    position: relative;
    width: 100%;
    height: 3px;
    margin-bottom: clamp(18px, 3vh, 34px);
    background: rgba(255, 255, 255, 0.11);
    flex-shrink: 0;
  }

  .client-login-progress::before {
    content: "";
    position: absolute;
    inset: 0 auto 0 0;
    width: 49%;
    background: #d8b66f;
  }

  .client-login-section-label {
    margin: 0 0 clamp(12px, 2vh, 20px);
    color: rgba(255, 255, 255, 0.52);
    font-family: "Inter", Arial, sans-serif;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    flex-shrink: 0;
  }

  .client-login-form {
    min-height: 0;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
  }

  .client-login-field {
    display: flex;
    flex-direction: column;
    gap: clamp(6px, 1.1vh, 10px);
    margin-bottom: clamp(12px, 2vh, 20px);
  }

  .client-login-label {
    color: rgba(255, 255, 255, 0.54);
    font-family: "Inter", Arial, sans-serif;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  .client-login-input {
    width: 100%;
    height: clamp(46px, 6vh, 56px);
    padding: 0 22px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.045);
    color: #ffffff;
    font-family: "Inter", Arial, sans-serif;
    font-size: 13px;
    outline: none;
    transition: border-color 180ms ease, background-color 180ms ease, box-shadow 180ms ease;
  }

  .client-login-input::placeholder {
    color: rgba(255, 255, 255, 0.28);
  }

  .client-login-input:focus {
    border-color: rgba(216, 182, 111, 0.78);
    background: rgba(255, 255, 255, 0.065);
    box-shadow: 0 0 0 4px rgba(216, 182, 111, 0.1);
  }

  .client-login-submit {
    width: 100%;
    height: clamp(46px, 6vh, 56px);
    margin-top: 2px;
    border: 0;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.07);
    color: rgba(255, 255, 255, 0.55);
    font-family: "Inter", Arial, sans-serif;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 180ms ease, background-color 180ms ease, color 180ms ease;
  }

  .client-login-submit:hover,
  .client-login-submit:focus-visible {
    transform: translateY(-2px);
    background: #d8b66f;
    color: #101010;
  }

  .client-login-bottom-bar {
    width: 100%;
    margin: 10px 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    color: rgba(255, 255, 255, 0.44);
    font-family: "Inter", Arial, sans-serif;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.35;
    flex-shrink: 0;
  }

  .client-login-copyright {
    color: rgba(255, 255, 255, 0.42);
    white-space: nowrap;
    transition: color 180ms ease, text-shadow 180ms ease;
  }

  .client-login-copyright:hover {
    color: #d8b66f;
    text-shadow:
      0 0 8px rgba(216, 182, 111, 0.34),
      0 0 18px rgba(216, 182, 111, 0.22),
      0 0 28px rgba(216, 182, 111, 0.14);
  }


  .client-login-bottom-actions {
    display: inline-flex;
    align-items: center;
    gap: 24px;
    flex-shrink: 0;
  }

  .client-login-bottom-button {
    padding: 0;
    border: 0;
    background: transparent;
    color: rgba(255, 255, 255, 0.42);
    font-family: "Inter", Arial, sans-serif;
    font-size: 11px;
    font-weight: 600;
    text-decoration: none;
    transition: color 180ms ease, text-shadow 180ms ease;
  }

  .client-login-bottom-button:hover,
  .client-login-bottom-button:focus-visible {
    color: #d8b66f;
    text-shadow:
      0 0 8px rgba(216, 182, 111, 0.34),
      0 0 18px rgba(216, 182, 111, 0.22),
      0 0 28px rgba(216, 182, 111, 0.14);
  }


  .client-login-footer {
    margin-top: auto;
    padding-top: clamp(14px, 3vh, 54px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    color: rgba(255, 255, 255, 0.42);
    font-family: "Inter", Arial, sans-serif;
    font-size: 10px;
    font-weight: 600;
    flex-shrink: 0;
  }

  .client-login-links {
    display: inline-flex;
    gap: 20px;
  }

  .client-login-links a {
    color: inherit;
    text-decoration: none;
  }

  .client-login-visual {
    position: relative;
    height: 100%;
    min-height: 0;
    border-radius: 28px;
    overflow: hidden;
    isolation: isolate;
    background:
      linear-gradient(180deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.74)),
      linear-gradient(90deg, rgba(0, 0, 0, 0.16), transparent 48%, rgba(0, 0, 0, 0.3)),
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
      radial-gradient(circle at 35% 22%, rgba(216, 182, 111, 0.18), transparent 22%),
      radial-gradient(circle at 75% 55%, rgba(255, 255, 255, 0.08), transparent 24%);
    filter: blur(4px);
  }

  .client-login-card {
    position: absolute;
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 16px;
    background: rgba(16, 16, 16, 0.78);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.28);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    opacity: 0;
    animation: loginFloatReveal 650ms ease forwards;
  }

  .client-login-project {
    top: 34px;
    left: 38px;
    width: 200px;
    padding: 18px;
    animation-delay: 250ms;
  }

  .client-login-project-title,
  .client-login-service-title,
  .client-login-invoice-title {
    margin: 0;
    color: #ffffff;
    font-family: "Inter", Arial, sans-serif;
    font-size: 11px;
    font-weight: 800;
  }

  .client-login-project-meta {
    margin: 13px 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgba(255, 255, 255, 0.52);
    font-family: "Inter", Arial, sans-serif;
    font-size: 10px;
    font-weight: 700;
  }

  .client-login-project-bar {
    position: relative;
    height: 5px;
    overflow: hidden;
    border-radius: 99px;
    background: rgba(255, 255, 255, 0.12);
  }

  .client-login-project-bar::before {
    content: "";
    position: absolute;
    inset: 0 auto 0 0;
    width: 75%;
    background: #d8b66f;
  }

  .client-login-invoice {
    right: 34px;
    top: 292px;
    width: 174px;
    padding: 19px 18px;
    background: #d8b66f;
    color: #16120a;
    animation-delay: 380ms;
  }

  .client-login-invoice-title {
    color: rgba(22, 18, 10, 0.7);
    font-size: 10px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .client-login-invoice-value {
    margin: 9px 0 2px;
    color: #100d08;
    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: 28px;
    font-weight: 700;
    line-height: 1;
  }

  .client-login-invoice-note {
    margin: 0;
    color: rgba(22, 18, 10, 0.6);
    font-family: "Inter", Arial, sans-serif;
    font-size: 9px;
    font-weight: 800;
  }

  .client-login-service {
    left: 38px;
    bottom: 38px;
    width: 232px;
    padding: 18px;
    animation-delay: 500ms;
  }

  .client-login-service-inner {
    display: grid;
    grid-template-columns: 34px 1fr;
    gap: 12px;
    align-items: center;
  }

  .client-login-service-icon {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #d8b66f;
    color: #0f0f0f;
    font-size: 14px;
    font-weight: 900;
  }

  .client-login-service-label {
    margin: 0 0 6px;
    color: rgba(255, 255, 255, 0.58);
    font-family: "Inter", Arial, sans-serif;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .client-login-service-title {
    font-size: 12px;
  }

  .client-login-service-subtitle {
    margin: 3px 0 0;
    color: rgba(255, 255, 255, 0.48);
    font-family: "Inter", Arial, sans-serif;
    font-size: 10px;
    font-weight: 700;
  }

  .client-login-mini-stack {
    position: absolute;
    left: 36px;
    top: 295px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .client-login-mini {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.28);
    background:
      radial-gradient(circle at 35% 24%, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.05) 42%, transparent 70%),
      rgba(17, 17, 17, 0.58);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.2),
      0 14px 30px rgba(0, 0, 0, 0.28);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  .client-login-mini svg {
    width: 21px;
    height: 21px;
    display: block;
    filter: drop-shadow(0 3px 7px rgba(0, 0, 0, 0.35));
  }


  @media (min-width: 981px) and (max-height: 760px) {
    .client-login-title {
      font-size: 36px;
    }

    .client-login-panel {
      padding-top: 18px;
      padding-bottom: 16px;
    }

    .client-login-topbar {
      margin-bottom: 14px;
    }

    .client-login-heading-row {
      margin-bottom: 12px;
    }

    .client-login-progress {
      margin-bottom: 14px;
    }

    .client-login-section-label {
      margin-bottom: 10px;
      font-size: 10px;
    }

    .client-login-field {
      gap: 5px;
      margin-bottom: 10px;
    }

    .client-login-input,
    .client-login-submit {
      height: 42px;
    }

    .client-login-label {
      font-size: 9px;
    }

    .client-login-footer {
      display: none;
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
    }

    .client-login-shell {
      width: 100%;
      min-height: 100vh;
      min-height: 100svh;
      min-height: 100dvh;
      height: auto;
      max-height: none;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr;
      gap: 0;
      padding: 0;
      border-radius: 0;
      overflow: visible;
      background: #111111;
    }

    .client-login-visual {
      order: -1;
      display: block;
      width: 100%;
      height: clamp(260px, 38vh, 380px);
      min-height: 240px;
      border-radius: 0 0 30px 30px;
      background-position: center 42%;
    }

    .client-login-panel {
      width: 100%;
      height: auto;
      min-height: 0;
      padding: clamp(24px, 4.4vh, 42px) clamp(28px, 7vw, 64px) clamp(22px, 4vh, 38px);
      overflow: visible;
    }

    .client-login-topbar {
      margin-bottom: clamp(18px, 3vh, 28px);
      flex-shrink: 0;
    }

    .client-login-back {
      min-height: 36px;
      padding: 0 17px;
      font-size: 11px;
    }

    .client-login-close {
      width: 34px;
      height: 34px;
      font-size: 16px;
    }

    .client-login-heading-row {
      gap: 16px;
      margin-bottom: clamp(14px, 2.2vh, 22px);
      flex-shrink: 0;
    }

    .client-login-title {
      font-size: clamp(34px, 6vw, 46px);
      line-height: 0.98;
    }

    .client-login-subtitle {
      margin-top: 7px;
      font-size: 12px;
      line-height: 1.35;
    }

    .client-login-step {
      margin-bottom: 4px;
      font-size: 9px;
      letter-spacing: 2px;
    }

    .client-login-progress {
      height: 3px;
      margin-bottom: clamp(18px, 2.8vh, 28px);
      flex-shrink: 0;
    }

    .client-login-section-label {
      margin-bottom: clamp(12px, 2vh, 18px);
      font-size: 10px;
      letter-spacing: 1.35px;
      line-height: 1.25;
      flex-shrink: 0;
    }

    .client-login-form {
      min-height: 0;
      flex: 0 0 auto;
      overflow: visible;
    }

    .client-login-field {
      gap: 7px;
      margin-bottom: 14px;
      flex-shrink: 0;
    }

    .client-login-label {
      font-size: 9px;
      line-height: 1.15;
      letter-spacing: 1.2px;
    }

    .client-login-input {
      height: 46px;
      padding: 0 18px;
      font-size: 12px;
    }

    .client-login-submit {
      height: 46px;
      margin-top: 2px;
      margin-bottom: 0;
      font-size: 10px;
      letter-spacing: 1.4px;
      flex-shrink: 0;
    }

    .client-login-bottom-bar {
      margin-top: 16px;
      padding-top: 14px;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      font-size: 10px;
    }

    .client-login-footer {
      display: none;
    }

    .client-login-project,
    .client-login-invoice,
    .client-login-service {
      display: none;
    }

    .client-login-mini-stack {
      left: clamp(22px, 7vw, 54px);
      top: 50%;
      transform: translateY(-50%);
      gap: 11px;
    }

    .client-login-mini {
      width: 48px;
      height: 48px;
    }

    .client-login-mini svg {
      width: 21px;
      height: 21px;
    }
  }

  @media (min-width: 641px) and (max-width: 980px) {
    .client-login-panel {
      max-width: 720px;
      margin: 0 auto;
    }
  }

  @media (max-width: 640px) {
    .client-login-visual {
      height: clamp(210px, 34vh, 285px);
      min-height: 205px;
      border-radius: 0 0 24px 24px;
      background-position: center top;
    }

    .client-login-panel {
      padding: 22px 16px 20px;
    }

    .client-login-heading-row {
      grid-template-columns: 1fr;
      gap: 8px;
      align-items: start;
    }

    .client-login-title {
      font-size: clamp(30px, 9vw, 38px);
    }

    .client-login-step {
      justify-self: start;
    }

    .client-login-field {
      margin-bottom: 12px;
    }

    .client-login-input,
    .client-login-submit {
      height: 44px;
    }

    .client-login-bottom-bar {
      align-items: flex-start;
      gap: 10px;
      flex-wrap: wrap;
      font-size: 10px;
    }

    .client-login-bottom-actions {
      gap: 18px;
      margin-left: auto;
    }

    .client-login-mini-stack {
      left: 18px;
      gap: 9px;
    }

    .client-login-mini {
      width: 44px;
      height: 44px;
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
  return (
    <main className="client-login-page">
      <style data-component="client-login">{loginStyles}</style>

      <section className="client-login-shell" aria-labelledby="client-login-title">
        <div className="client-login-panel">
          <div className="client-login-topbar">
            <button className="client-login-back" type="button" aria-label="Klien Mahreen">
              <img className="client-login-back-icon" src={mahreenIcon} alt="" aria-hidden="true" />
              Klien Mahreen
            </button>
            <a className="client-login-close" href="#/" aria-label="Tutup halaman login">
              x
            </a>
          </div>

          <div className="client-login-heading-row">
            <div>
              <h1 className="client-login-title" id="client-login-title">
                Daftar Akun Klien
              </h1>
              <p className="client-login-subtitle">Sudah terdaftar? Masuk Portal</p>
            </div>
            <p className="client-login-step">Langkah 1 dari 2</p>
          </div>

          <div className="client-login-progress" aria-hidden="true" />

          <p className="client-login-section-label">Data Diri &amp; Bisnis Anda</p>

          <form className="client-login-form">
            <label className="client-login-field">
              <span className="client-login-label">Nama Lengkap *</span>
              <input
                className="client-login-input"
                type="text"
                name="fullName"
                placeholder="Nama lengkap Anda (sesuai identitas)"
              />
            </label>

            <label className="client-login-field">
              <span className="client-login-label">Alamat Email Bisnis *</span>
              <input
                className="client-login-input"
                type="email"
                name="businessEmail"
                placeholder="email@perusahaan.com"
              />
            </label>

            <label className="client-login-field">
              <span className="client-login-label">Nomor Whatsapp Aktif *</span>
              <input
                className="client-login-input"
                type="tel"
                name="whatsapp"
                placeholder="08xxxxxxxxxx"
              />
            </label>

            <label className="client-login-field">
              <span className="client-login-label">Nama Perusahaan / Bisnis *</span>
              <input
                className="client-login-input"
                type="text"
                name="businessName"
                placeholder="Nama brand / perusahaan Anda"
              />
            </label>

            <button className="client-login-submit" type="submit">
              Lanjut ke Login -&gt;
            </button>

            <div className="client-login-bottom-bar">
              <span className="client-login-copyright">© 2026 PT Mahreen Indonesia</span>
              <span className="client-login-bottom-actions">
                <a className="client-login-bottom-button" href="#/bantuan">Bantuan</a>
                <a className="client-login-bottom-button" href="#/privasi">Privasi</a>
              </span>
            </div>
          </form>
        </div>

        <aside className="client-login-visual" aria-label="Ilustrasi layanan klien Mahreen">
          <div className="client-login-card client-login-project">
            <p className="client-login-project-title">Redesign Web Project</p>
            <div className="client-login-project-meta">
              <span>Milestone 4/5</span>
              <span>75%</span>
            </div>
            <div className="client-login-project-bar" />
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

          <div className="client-login-card client-login-invoice">
            <p className="client-login-invoice-title">Invoice Terbayar</p>
            <p className="client-login-invoice-value">Rp 7.500.000</p>
            <p className="client-login-invoice-note">+ Terverifikasi Otomatis</p>
          </div>

          <div className="client-login-card client-login-service">
            <div className="client-login-service-inner">
              <span className="client-login-service-icon">M</span>
              <div>
                <p className="client-login-service-label">Layanan Dipesan</p>
                <p className="client-login-service-title">Branding &amp; Identity</p>
                <p className="client-login-service-subtitle">Paket Profesional</p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default Login;
