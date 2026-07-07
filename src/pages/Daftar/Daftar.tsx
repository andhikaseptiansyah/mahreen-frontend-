import loginVisual from "../../assets/Daftar/login-visual.png";

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
    min-height: 100vh;
    padding: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #050505;
    color: #ffffff;
    overflow-x: hidden;
  }

  .client-login-page,
  .client-login-page *,
  .client-login-page *::before,
  .client-login-page *::after {
    box-sizing: border-box;
  }

  .client-login-shell {
    width: min(100%, 1250px);
    min-height: 860px;
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
    gap: 42px;
    padding: 28px;
    border-radius: 38px;
    background: #111111;
    box-shadow: 0 32px 100px rgba(0, 0, 0, 0.55);
    opacity: 0;
    animation: loginShellReveal 700ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  .client-login-panel {
    min-width: 0;
    padding: 46px 40px 36px;
    display: flex;
    flex-direction: column;
  }

  .client-login-topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 46px;
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
    margin-bottom: 28px;
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
    margin-bottom: 34px;
    background: rgba(255, 255, 255, 0.11);
  }

  .client-login-progress::before {
    content: "";
    position: absolute;
    inset: 0 auto 0 0;
    width: 49%;
    background: #d8b66f;
  }

  .client-login-section-label {
    margin: 0 0 20px;
    color: rgba(255, 255, 255, 0.52);
    font-family: "Inter", Arial, sans-serif;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 1.6px;
    text-transform: uppercase;
  }

  .client-login-form {
    display: flex;
    flex-direction: column;
  }

  .client-login-field {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
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
    height: 56px;
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
    height: 56px;
    margin-top: 4px;
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

  .client-login-footer {
    margin-top: auto;
    padding-top: 54px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    color: rgba(255, 255, 255, 0.42);
    font-family: "Inter", Arial, sans-serif;
    font-size: 10px;
    font-weight: 600;
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
    min-height: 804px;
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
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(17, 17, 17, 0.72);
    color: #d8b66f;
    font-family: "Inter", Arial, sans-serif;
    font-size: 12px;
    font-weight: 900;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  @media (max-width: 980px) {
    .client-login-shell {
      grid-template-columns: 1fr;
      min-height: 0;
      gap: 24px;
    }

    .client-login-visual {
      min-height: 520px;
      order: -1;
    }
  }

  @media (max-width: 640px) {
    .client-login-page {
      padding: 10px;
      align-items: flex-start;
    }

    .client-login-shell {
      padding: 14px;
      border-radius: 26px;
    }

    .client-login-panel {
      padding: 28px 18px 24px;
    }

    .client-login-heading-row {
      grid-template-columns: 1fr;
      gap: 16px;
    }

    .client-login-visual {
      min-height: 420px;
      border-radius: 20px;
    }

    .client-login-project,
    .client-login-service {
      left: 18px;
    }

    .client-login-invoice {
      right: 18px;
      top: 216px;
    }

    .client-login-mini-stack {
      left: 18px;
      top: 220px;
    }

    .client-login-footer {
      flex-direction: column;
      align-items: flex-start;
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
            <a className="client-login-back" href="#/">
              <span aria-hidden="true">&lt;</span>
              Klien Mahreen
            </a>
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
          </form>

          <footer className="client-login-footer">
            <span>(c) 2026 PT Mahreen Indonesia</span>
            <span className="client-login-links">
              <a href="#/bantuan">Bantuan</a>
              <a href="#/privasi">Privasi</a>
            </span>
          </footer>
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
            <span className="client-login-mini">+</span>
            <span className="client-login-mini">v</span>
            <span className="client-login-mini">*</span>
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
