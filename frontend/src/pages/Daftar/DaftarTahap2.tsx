import { useState } from "react";
import loginVisual from "../../assets/Daftar/login-visual.png";
import mahreenIcon from "../../assets/icon.png";

const tahap2Styles = `
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
    /* TINGGI DIUBAH KE AUTO AGAR MENYUSUT MENGIKUTI FORM */
    height: auto; 
    max-height: calc(100dvh - clamp(20px, 4vh, 36px));
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
    transition: background-color 180ms ease, border-color 180ms ease;
  }

  .client-login-close:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.12);
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

  .client-login-subtitle a {
    color: #d8b66f;
    text-decoration: none;
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
    width: 100%;
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
    /* Flex 1 dihapus agar tinggi mengikuti konten secara natural */
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

  .client-login-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .client-login-input {
    width: 100%;
    height: clamp(46px, 6vh, 56px);
    padding: 0 46px 0 22px;
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

  .client-login-input.has-error {
    border-color: #e57373;
    background: rgba(229, 115, 115, 0.05);
  }

  .client-login-input.has-error:focus {
    border-color: #ff8a8a;
    background: rgba(255, 255, 255, 0.065);
    box-shadow: 0 0 0 4px rgba(255, 138, 138, 0.2);
  }

  .client-login-field-error {
    margin: 4px 0 0 18px;
    color: #ff9a9a;
    font-size: 11px;
    font-weight: 500;
    line-height: 1.3;
    animation: loginFloatReveal 300ms ease forwards;
  }

  .client-login-checkbox.has-error {
    border-color: #e57373;
  }

  /* Success View Animation */
  .client-login-success-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 40px 20px;
    flex-grow: 1;
    min-height: 350px;
    animation: loginFloatReveal 500ms 100ms ease both;
  }

  .client-login-success-icon {
    width: 80px;
    height: 80px;
  }

  .client-login-success-icon .circle {
    stroke-dasharray: 227;
    stroke-dashoffset: 227;
    animation: success-circle 600ms 300ms ease-out forwards;
  }

  .client-login-success-icon .check {
    stroke-dasharray: 34;
    stroke-dashoffset: 34;
    animation: success-check 400ms 800ms ease-out forwards;
  }

  @keyframes success-circle { to { stroke-dashoffset: 0; } }
  @keyframes success-check { to { stroke-dashoffset: 0; } }

  .client-login-success-title {
    margin: 24px 0 0;
    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: 28px;
    color: #d8b66f;
    animation: loginFloatReveal 500ms 1100ms ease both;
    opacity: 0;
  }

  .client-login-success-message {
    margin: 8px 0 0;
    color: rgba(255, 255, 255, 0.6);
    font-size: 13px;
    line-height: 1.6;
    max-width: 300px;
    animation: loginFloatReveal 500ms 1250ms ease both;
    opacity: 0;
  }

  .client-login-eye-btn {
    position: absolute;
    right: 20px;
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.4);
    cursor: pointer;
    display: grid;
    place-items: center;
    padding: 0;
    transition: color 180ms ease;
  }

  .client-login-eye-btn:hover {
    color: rgba(255, 255, 255, 0.7);
  }

  .client-login-checkbox-field {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: clamp(18px, 3vh, 28px);
    margin-top: clamp(12px, 2vh, 20px);
  }

  .client-login-checkbox {
    width: 18px;
    height: 18px;
    min-width: 18px;
    margin-top: 3px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.045);
    cursor: pointer;
    accent-color: #d8b66f;
  }

  .client-login-checkbox-label {
    flex: 1;
    color: rgba(255, 255, 255, 0.58);
    font-family: "Inter", Arial, sans-serif;
    font-size: 11px;
    font-weight: 500;
    line-height: 1.5;
    cursor: pointer;
  }

  .client-login-button-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(12px, 2vw, 20px);
    margin-top: clamp(12px, 2vh, 20px);
  }

  .client-login-submit,
  .client-login-button-group a {
    width: 100%;
    height: clamp(46px, 6vh, 56px);
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
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  .client-login-submit:hover:not(:disabled),
  .client-login-submit:focus-visible:not(:disabled),
  .client-login-button-group a:hover,
  .client-login-button-group a:focus-visible {
    transform: translateY(-2px);
    background: #d8b66f;
    color: #101010;
  }

  .client-login-submit:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .client-login-submit-secondary {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: rgba(255, 255, 255, 0.7);
  }

  .client-login-submit-secondary:hover,
  .client-login-submit-secondary:focus-visible {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 0.8);
  }

  .client-login-bottom-bar {
    width: 100%;
    /* MARGIN DIUBAH KE NATURAL BUKAN AUTO, AGAR LAYOUT BERHENTI DI SINI */
    margin: clamp(28px, 4vh, 46px) 0 0;
    padding-top: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    color: rgba(255, 255, 255, 0.44);
    font-family: "Inter", Arial, sans-serif;
    font-size: 11px;
    font-weight: 600;
    flex-shrink: 0;
  }

  .client-login-copyright {
    color: rgba(255, 255, 255, 0.42);
    white-space: nowrap;
    transition: color 180ms ease, text-shadow 180ms ease;
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
    top: 45%; 
    width: 184px;
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
    margin: 0px 0 2px;
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
    font-size: 12px;
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
    background: transparent;
    font-size: 20px;
  }

  .client-login-service-label {
    color: rgba(255, 255, 255, 0.58);
    font-family: "Inter", Arial, sans-serif;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .client-login-service-title {
    font-size: 14px;
  }

  .client-login-service-subtitle {
    color: rgba(255, 255, 255, 0.48);
    font-family: "Inter", Arial, sans-serif;
    font-size: 10px;
    font-weight: 700;
  }

  
  .client-login-mini-stack {
    position: absolute;
    left: 36px;
    top: 45%;
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

  /* Responsive Styling (Sisanya Tetap) */
  @media (max-width: 980px) {
    .client-login-page {
      height: auto;
      min-height: 100vh;
      padding: 0;
      align-items: stretch;
      overflow-x: hidden;
      overflow-y: auto;
    }
    .client-login-shell {
      width: 100%;
      height: auto;
      max-height: none;
      display: grid;
      grid-template-columns: 1fr;
      gap: 0;
      padding: 0;
      border-radius: 0;
      overflow: visible;
      background: #111111;
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
      padding: 0 46px 0 18px;
      font-size: 12px;
    }
    .client-login-button-group {
      grid-template-columns: 1fr 1fr;
      gap: 14px;
      margin-top: 18px;
    }
    .client-login-submit,
    .client-login-button-group a {
      height: 46px;
      font-size: 10px;
      letter-spacing: 1.4px;
      flex-shrink: 0;
    }
    .client-login-bottom-bar {
      margin-top: 14px;
      padding-top: 12px;
      font-size: 10px;
    }
  }

  @media (min-width: 641px) and (max-width: 980px) {
    .client-login-panel {
      max-width: 720px;
      margin: 0 auto;
    }
  }

  @media (max-width: 640px) {
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
    .client-login-input {
      height: 44px;
    }
    .client-login-button-group {
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-top: 16px;
    }
    .client-login-submit,
    .client-login-button-group a {
      height: 44px;
      font-size: 10px;
    }
    .client-login-bottom-bar {
      margin-top: 12px;
      padding-top: 10px;
      font-size: 9px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .client-login-shell {
      opacity: 1;
      animation: none;
      transform: none;
    }
  }
`;

const SuccessView = () => (
  <div className="client-login-success-view">
    <svg className="client-login-success-icon" viewBox="0 0 80 80" fill="none">
      <circle className="circle" cx="40" cy="40" r="36" stroke="#d8b66f" strokeWidth="3" />
      <path className="check" d="M25 41.5L35.5 52L56 31.5" stroke="#d8b66f" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <h2 className="client-login-success-title">Pendaftaran Berhasil!</h2>
    <p className="client-login-success-message">
      Akun Anda telah dibuat. Anda akan dialihkan ke halaman login secara otomatis.
    </p>
  </div>
);

const DaftarTahap2 = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ password?: string; confirmPassword?: string; terms?: string }>({});

  const handleClose = () => {
    window.location.hash = "#/";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { password?: string; confirmPassword?: string; terms?: string } = {};

    if (!password) {
      newErrors.password = "Kata sandi wajib diisi.";
    } else if (password.length < 8) {
      newErrors.password = "Kata sandi harus terdiri dari minimal 8 karakter.";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Konfirmasi kata sandi wajib diisi.";
    } else if (password && password !== confirmPassword) {
      newErrors.confirmPassword = "Konfirmasi kata sandi tidak cocok.";
    }

    if (!termsAccepted) {
      newErrors.terms = "Anda harus menyetujui syarat dan ketentuan untuk melanjutkan.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Menampilkan animasi sukses dan mengalihkan halaman setelah 4 detik
    setIsSuccess(true);
    setTimeout(() => {
      window.location.hash = "#/login";
    }, 4000);
  };

  return (
    <main className="client-login-page">
      <style data-component="client-login-tahap2">{tahap2Styles}</style>

      <section className="client-login-shell" aria-labelledby="client-login-tahap2-title">
        <div className="client-login-panel">
          <div className="client-login-topbar">
            <a className="client-login-back" href="#/daftar" aria-label="Klien Mahreen">
              <img className="client-login-back-icon" src={mahreenIcon} alt="" aria-hidden="true" />
              Klien Mahreen
            </a>
            <button className="client-login-close" type="button" onClick={handleClose} aria-label="Tutup halaman pendaftaran">x</button>
          </div>

          <div className="client-login-heading-row">
            <div>
              <h1 className="client-login-title" id="client-login-tahap2-title">Daftar Akun Klien</h1>
              <p className="client-login-subtitle">Sudah terdaftar? <a href="#/login">Masuk Portal</a></p>
            </div>
            <p className="client-login-step">Langkah 2 dari 2</p>
          </div>

          <div className="client-login-progress" aria-hidden="true" />

          {isSuccess ? (
            <SuccessView />
          ) : (
            <>
              <p className="client-login-section-label">ATUR KREDENSIAL KATA SANDI</p>
              <form className="client-login-form" onSubmit={handleSubmit} noValidate>
                <label className="client-login-field">
                  <span className="client-login-label">BUAT KATA SANDI *</span>
                  <div className="client-login-input-wrapper">
                    <input
                      className={`client-login-input ${errors.password ? 'has-error' : ''}`}
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Minimal 8 karakter"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (errors.password) {
                          setErrors(prev => ({ ...prev, password: undefined }));
                        }
                      }}
                      required
                    />
                    <button type="button" className="client-login-eye-btn" onClick={() => setShowPassword(!showPassword)}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {showPassword ? (
                          <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></>
                        ) : (
                          <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></>
                        )}
                      </svg>
                    </button>
                  </div>
                  {errors.password && <p className="client-login-field-error">{errors.password}</p>}
                </label>

                <label className="client-login-field">
                  <span className="client-login-label">KONFIRMASI SANDI *</span>
                  <div className="client-login-input-wrapper">
                    <input
                      className={`client-login-input ${errors.confirmPassword ? 'has-error' : ''}`}
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Ulangi kata sandi"
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        if (errors.confirmPassword) {
                          setErrors(prev => ({ ...prev, confirmPassword: undefined }));
                        }
                      }}
                      required
                    />
                    <button type="button" className="client-login-eye-btn" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {showConfirmPassword ? (
                          <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></>
                        ) : (
                          <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></>
                        )}
                      </svg>
                    </button>
                  </div>
                  {errors.confirmPassword && <p className="client-login-field-error">{errors.confirmPassword}</p>}
                </label>

                <div className="client-login-field">
                  <label className="client-login-checkbox-field" style={{marginBottom: 0}}>
                    <input
                      className={`client-login-checkbox ${errors.terms ? 'has-error' : ''}`}
                      type="checkbox"
                      name="terms"
                      checked={termsAccepted}
                      onChange={(e) => {
                        setTermsAccepted(e.target.checked);
                        if (errors.terms) setErrors(p => ({ ...p, terms: undefined }));
                      }}
                      required
                    />
                    <span className="client-login-checkbox-label" onClick={() => {
                      const newChecked = !termsAccepted;
                      setTermsAccepted(newChecked);
                      if (errors.terms) setErrors(p => ({ ...p, terms: undefined }));
                    }}>
                      Saya menyetujui Syarat & Ketentuan dan Kebijakan Privasi Portal Klien Mahreen Indonesia.
                    </span>
                  </label>
                  {errors.terms && <p className="client-login-field-error" style={{margin: '8px 0 0 4px'}}>{errors.terms}</p>}
                </div>

                <div className="client-login-button-group">
                  <a className="client-login-submit client-login-submit-secondary" href="#/daftar">KEMBALI</a>
                  <button className="client-login-submit" type="submit" disabled={!password || !confirmPassword || !termsAccepted}>
                    BUAT AKUN KLIEN
                  </button>
                </div>

                <div className="client-login-bottom-bar">
                  <span className="client-login-copyright">© 2026 PT Mahreen Indonesia</span>
                  <span className="client-login-bottom-actions">
                    <a className="client-login-bottom-button" href="#/bantuan">Bantuan</a>
                    <a className="client-login-bottom-button" href="#/privasi">Privasi</a>
                  </span>
                </div>
              </form>
            </>
          )}
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
              <span className="client-login-service-icon">🎨</span>
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

export default DaftarTahap2;