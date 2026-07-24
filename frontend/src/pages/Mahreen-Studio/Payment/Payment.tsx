import React, { useEffect, useState } from "react";
import StudioNavbar from "../../../components/Navbar/StudioNavbar";
import ClosingSection from "../../../components/Cloasing-section/cloasing-section";
import Footer from "../../../components/Footer/Footer";
import signatureHoodieImg from "../../../assets/Mahreen-Studio/GambarProduk/Signature-noir-hoodie.png";
import { navigateToHashRoute } from "../../../utils/hashNavigation";
import { useAuth } from "../../../hooks/useAuth";

const paymentStyles = `
  @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,400&display=swap");

  .payment-page {
    min-height: 100vh;
    background-color: #050505;
    color: #ffffff;
    font-family: "Plus Jakarta Sans", sans-serif;
  }

  .payment-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 120px 24px 80px 24px;
  }

  /* ===== STEPS INDICATOR ===== */
  .payment-steps {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 640px;
    margin: 0 auto 56px auto;
    position: relative;
  }

  .payment-steps__track {
    position: absolute;
    top: 20px;
    left: 40px;
    right: 40px;
    height: 2px;
    background: rgba(255, 255, 255, 0.08);
    z-index: 1;
  }

  .payment-steps__fill {
    height: 100%;
    width: 50%;
    background: #e5c483;
    box-shadow: 0 0 10px rgba(229, 196, 131, 0.5);
  }

  .payment-steps__items {
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: relative;
    z-index: 2;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .step-node {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .step-node__icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    transition: all 250ms ease;
  }

  .step-node--completed .step-node__icon {
    background: #c8a96a;
    color: #050505;
    border: 1px solid rgba(229, 196, 131, 0.2);
  }

  .step-node--active .step-node__icon {
    background: #e5c483;
    color: #050505;
    box-shadow: 0 0 16px rgba(229, 196, 131, 0.4);
  }

  .step-node--inactive .step-node__icon {
    background: #2a2a2a;
    color: #d0c5b5;
  }

  .step-node__label {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.6px;
  }

  .step-node--completed .step-node__label {
    color: #d0c5b5;
  }

  .step-node--active .step-node__label {
    color: #e5c483;
  }

  .step-node--inactive .step-node__label {
    color: #d0c5b5;
    opacity: 0.6;
  }

  /* ===== MAIN GRID ===== */
  .payment-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    align-items: start;
  }

  @media (min-width: 992px) {
    .payment-grid {
      grid-template-columns: 1.35fr 1fr;
      gap: 48px;
    }
  }

  /* ===== LEFT COLUMN ===== */
  .payment-methods-col {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .timer-banner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(229, 196, 131, 0.05);
    border: 1px solid rgba(229, 196, 131, 0.2);
    border-radius: 16px;
    padding: 20px 24px;
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }

  .timer-banner__left {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .timer-banner__icon {
    color: #e5c483;
    flex-shrink: 0;
  }

  .timer-banner__eyebrow {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.2px;
    color: #e5c483;
    margin: 0 0 2px 0;
    text-transform: uppercase;
  }

  .timer-banner__clock {
    font-size: 24px;
    font-weight: 700;
    color: #e5c483;
    margin: 0;
    letter-spacing: 1px;
  }

  .timer-banner__badge {
    background: rgba(229, 196, 131, 0.1);
    border: 1px solid rgba(229, 196, 131, 0.2);
    color: #e5c483;
    padding: 8px 16px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  .payment-heading__title {
    font-size: 24px;
    font-weight: 600;
    color: #e5e2e1;
    margin: 0 0 8px 0;
  }

  .payment-heading__desc {
    font-size: 14px;
    color: #d0c5b5;
    margin: 0;
  }

  /* METHOD CARDS */
  .method-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .method-card {
    background: #111111;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 24px;
    cursor: pointer;
    transition: all 250ms ease;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
  }

  .method-card:hover {
    border-color: rgba(229, 196, 131, 0.4);
    background: rgba(255, 255, 255, 0.02);
  }

  .method-card--selected {
    background: rgba(255, 255, 255, 0.03);
    border-color: #e5c483;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }

  .method-card__left {
    display: flex;
    align-items: flex-start;
    gap: 20px;
  }

  .method-card__logo-box {
    width: 64px;
    height: 40px;
    background: #ffffff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    flex-shrink: 0;
  }

  .method-card__bank-logo {
    font-weight: 800;
    font-size: 14px;
    color: #00529c;
    letter-spacing: -0.5px;
  }

  .method-card__bank-logo--mandiri {
    color: #002d62;
  }

  .method-card__bank-logo--bri {
    color: #00529c;
  }

  .method-card__info {
    display: flex;
    flex-direction: column;
  }

  .method-card__name {
    font-size: 16px;
    font-weight: 600;
    color: #e5e2e1;
    margin: 0 0 4px 0;
  }

  .method-card__type {
    font-size: 13px;
    color: #d0c5b5;
    margin: 0;
  }

  .va-details {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .va-number-row {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  .va-number {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 2px;
    color: #e5c483;
    font-family: monospace;
  }

  .btn-copy {
    background: transparent;
    border: none;
    color: #e5c483;
    cursor: pointer;
    font-size: 13px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border-radius: 6px;
    transition: background 200ms ease;
  }

  .btn-copy:hover {
    background: rgba(229, 196, 131, 0.1);
  }

  .va-account-name {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.6px;
    color: rgba(208, 197, 181, 0.6);
    margin-top: 4px;
    text-transform: uppercase;
  }

  .radio-indicator {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 200ms ease;
  }

  .method-card--selected .radio-indicator {
    border-color: #e5c483;
  }

  .radio-indicator__dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #e5c483;
  }

  /* ===== RIGHT COLUMN SUMMARY ===== */
  .order-summary-col {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .summary-card {
    background: #111111;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 28px;
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }

  .summary-card__title {
    font-size: 20px;
    font-weight: 600;
    color: #e5e2e1;
    margin: 0 0 20px 0;
  }

  .cart-item-preview {
    display: flex;
    align-items: center;
    gap: 16px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .cart-item-preview__thumb {
    width: 72px;
    height: 84px;
    border-radius: 10px;
    background: #201f1f;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cart-item-preview__thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .cart-item-preview__info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex-grow: 1;
  }

  .cart-item-preview__name {
    font-size: 14px;
    font-weight: 600;
    color: #e5e2e1;
    margin: 0;
  }

  .cart-item-preview__variant {
    font-size: 12px;
    color: #d0c5b5;
    margin: 0;
  }

  .cart-item-preview__price {
    font-size: 14px;
    font-weight: 600;
    color: #e5c483;
    margin: 4px 0 0 0;
  }

  .summary-breakdown {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px 0;
  }

  .summary-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
  }

  .summary-row__label {
    color: #d0c5b5;
  }

  .summary-row__value {
    color: #e5e2e1;
    font-weight: 500;
  }

  .summary-total {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  .summary-total__label {
    font-size: 16px;
    color: #e5e2e1;
    font-weight: 500;
  }

  .summary-total__amount {
    font-size: 26px;
    font-weight: 700;
    color: #e5c483;
    margin: 0;
    line-height: 1;
  }

  .summary-total__sub {
    font-size: 10px;
    letter-spacing: 0.5px;
    color: #d0c5b5;
    text-align: right;
    margin-top: 4px;
  }

  .btn-confirm-payment {
    width: 100%;
    background: #e5c483;
    color: #050505;
    border: none;
    border-radius: 12px;
    padding: 16px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    cursor: pointer;
    margin-top: 24px;
    box-shadow: 0 4px 20px rgba(229, 196, 131, 0.3);
    transition: all 250ms ease;
  }

  .btn-confirm-payment:hover {
    background: #f0d59e;
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(229, 196, 131, 0.45);
  }

  .security-text {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 11px;
    color: #d0c5b5;
    margin-top: 16px;
  }

  .promo-card {
    background: #111111;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 16px;
    display: flex;
    gap: 12px;
  }

  .promo-input {
    flex-grow: 1;
    background: #0e0e0e;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    padding: 10px 16px;
    color: #e5e2e1;
    font-size: 14px;
    outline: none;
  }

  .promo-input:focus {
    border-color: #e5c483;
  }

  .btn-promo-apply {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: #e5e2e1;
    border-radius: 8px;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 200ms ease;
  }

  .btn-promo-apply:hover {
    border-color: #e5c483;
    color: #e5c483;
  }

  /* MODAL STYLES */
  .payment-modal-backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(12px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 24px;
  }

  .payment-modal-card {
    background-color: #111111;
    border: 1px solid #e5c483;
    border-radius: 20px;
    padding: 40px 32px;
    max-width: 480px;
    width: 100%;
    text-align: center;
    box-shadow: 0 20px 50px rgba(0,0,0,0.8);
  }

  .payment-modal-icon {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: rgba(229, 196, 131, 0.15);
    border: 1px solid #e5c483;
    color: #e5c483;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px auto;
    font-size: 28px;
    font-weight: 700;
  }

  .payment-modal-title {
    font-size: 22px;
    font-weight: 700;
    color: #e5e2e1;
    margin: 0 0 12px 0;
  }

  .payment-modal-desc {
    font-size: 14px;
    color: #d0c5b5;
    line-height: 1.6;
    margin: 0 0 28px 0;
  }

  .payment-modal-btn {
    width: 100%;
    background-color: #e5c483;
    color: #050505;
    font-weight: 700;
    font-size: 14px;
    padding: 16px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    letter-spacing: 1px;
  }

  /* ===== MOBILE RESPONSIVE UX ===== */
  @media (max-width: 991px) {
    .payment-container {
      padding: 100px 20px 60px 20px;
    }

    .payment-grid {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px;
      width: 100%;
    }

    .payment-methods-col {
      width: min(100%, 680px);
      margin: 0 auto;
    }

    .order-summary-col {
      order: 2;
      width: min(100%, 680px);
      margin: 0 auto;
    }
  }

  @media (max-width: 640px) {
    .timer-banner {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }

    .va-number-row {
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
    }

    .summary-card {
      padding: 20px;
    }
  }
`;

const PaymentPage: React.FC = () => {
  const { user } = useAuth();
  const [selectedMethod, setSelectedMethod] = useState<string>("bca");
  const [copied, setCopied] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(86400); // 24 hours in seconds
  const [promoCode, setPromoCode] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);

  // Cart Data
  const subtotal = 2450000;
  const shippingFee = 45000;
  const adminFee = 2500;
  const rawTotal = subtotal + shippingFee + adminFee;
  const grandTotal = Math.max(0, rawTotal - discount);

  const formatRupiah = (val: number) =>
    "Rp " + val.toLocaleString("id-ID");

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleCopyVa = (vaNumber: string) => {
    try {
      navigator.clipboard.writeText(vaNumber.replace(/\s/g, ""));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "MAHREEN10") {
      setDiscount(245000);
      alert("Kode promo 'MAHREEN10' berhasil digunakan! Diskon Rp 245.000 terpasang.");
    } else if (promoCode.trim() !== "") {
      alert("Kode promo tidak valid atau telah kadaluarsa.");
    }
  };

  const handleConfirmPayment = () => {
    setIsSuccessModalOpen(true);
  };

  return (
    <div className="payment-page">
      <style data-component="mahreen-payment">{paymentStyles}</style>
      <StudioNavbar />

      <main className="payment-container">
        {/* PROGRESS STEPS */}
        <div className="payment-steps" aria-label="Checkout Progress">
          <div className="payment-steps__track">
            <div className="payment-steps__fill"></div>
          </div>
          <ul className="payment-steps__items">
            <li className="step-node step-node--completed">
              <div className="step-node__icon">✓</div>
              <span className="step-node__label">Shipping</span>
            </li>
            <li className="step-node step-node--active">
              <div className="step-node__icon">2</div>
              <span className="step-node__label">Payment</span>
            </li>
            <li className="step-node step-node--inactive">
              <div className="step-node__icon">3</div>
              <span className="step-node__label">Review</span>
            </li>
          </ul>
        </div>

        {/* MAIN CHECKOUT GRID */}
        <div className="payment-grid">
          {/* LEFT COLUMN: PAYMENT METHODS */}
          <div className="payment-methods-col">
            {/* TIMER BANNER */}
            <div className="timer-banner">
              <div className="timer-banner__left">
                <svg className="timer-banner__icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                  <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <div>
                  <p className="timer-banner__eyebrow">COMPLETE WITHIN</p>
                  <p className="timer-banner__clock">
                    <time>{formatTime(timeLeft)}</time>
                  </p>
                </div>
              </div>
              <span className="timer-banner__badge">Verifikasi Otomatis</span>
            </div>

            <div className="payment-heading">
              <h1 className="payment-heading__title">Payment Method</h1>
              <p className="payment-heading__desc">
                Select your preferred bank transfer method for Mahreen Studio checkout.
              </p>
            </div>

            {/* METHOD SELECTION LIST */}
            <div className="method-list">
              {/* BCA VA */}
              <div
                className={`method-card ${selectedMethod === "bca" ? "method-card--selected" : ""}`}
                onClick={() => setSelectedMethod("bca")}
              >
                <div className="method-card__left">
                  <div className="method-card__logo-box">
                    <span className="method-card__bank-logo">BCA</span>
                  </div>
                  <div className="method-card__info">
                    <span className="method-card__name">BCA Virtual Account</span>
                    <span className="method-card__type">Manual / Automated Transfer</span>

                    {selectedMethod === "bca" && (
                      <div className="va-details">
                        <div className="va-number-row">
                          <span className="va-number">8092 0122 3445 990</span>
                          <button
                            type="button"
                            className="btn-copy"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCopyVa("8092 0122 3445 990");
                            }}
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                              <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
                              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" strokeWidth="2" />
                            </svg>
                            {copied ? "Tersalin!" : "Salin"}
                          </button>
                        </div>
                        <span className="va-account-name">
                          ACCOUNT NAME: MAHREEN TECH INDONESIA
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="radio-indicator">
                  {selectedMethod === "bca" && <div className="radio-indicator__dot"></div>}
                </div>
              </div>

              {/* MANDIRI VA */}
              <div
                className={`method-card ${selectedMethod === "mandiri" ? "method-card--selected" : ""}`}
                onClick={() => setSelectedMethod("mandiri")}
              >
                <div className="method-card__left">
                  <div className="method-card__logo-box">
                    <span className="method-card__bank-logo method-card__bank-logo--mandiri">MANDIRI</span>
                  </div>
                  <div className="method-card__info">
                    <span className="method-card__name">Mandiri Virtual Account</span>
                    <span className="method-card__type">Direct Bank Transfer</span>

                    {selectedMethod === "mandiri" && (
                      <div className="va-details">
                        <div className="va-number-row">
                          <span className="va-number">8830 8912 0041 882</span>
                          <button
                            type="button"
                            className="btn-copy"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCopyVa("8830 8912 0041 882");
                            }}
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                              <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
                              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" strokeWidth="2" />
                            </svg>
                            {copied ? "Tersalin!" : "Salin"}
                          </button>
                        </div>
                        <span className="va-account-name">
                          ACCOUNT NAME: MAHREEN TECH INDONESIA
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="radio-indicator">
                  {selectedMethod === "mandiri" && <div className="radio-indicator__dot"></div>}
                </div>
              </div>

              {/* BRI VA */}
              <div
                className={`method-card ${selectedMethod === "bri" ? "method-card--selected" : ""}`}
                onClick={() => setSelectedMethod("bri")}
              >
                <div className="method-card__left">
                  <div className="method-card__logo-box">
                    <span className="method-card__bank-logo method-card__bank-logo--bri">BRI</span>
                  </div>
                  <div className="method-card__info">
                    <span className="method-card__name">BRI Virtual Account</span>
                    <span className="method-card__type">BRIVA Automated Verification</span>

                    {selectedMethod === "bri" && (
                      <div className="va-details">
                        <div className="va-number-row">
                          <span className="va-number">1294 0018 7654 321</span>
                          <button
                            type="button"
                            className="btn-copy"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCopyVa("1294 0018 7654 321");
                            }}
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                              <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
                              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" strokeWidth="2" />
                            </svg>
                            {copied ? "Tersalin!" : "Salin"}
                          </button>
                        </div>
                        <span className="va-account-name">
                          ACCOUNT NAME: MAHREEN TECH INDONESIA
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="radio-indicator">
                  {selectedMethod === "bri" && <div className="radio-indicator__dot"></div>}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: ORDER SUMMARY */}
          <div className="order-summary-col">
            <div className="summary-card">
              <h2 className="summary-card__title">Order Summary</h2>

              {/* ITEM */}
              <div className="cart-item-preview">
                <div className="cart-item-preview__thumb">
                  <img src={signatureHoodieImg} alt="Signature Hoodie" />
                </div>
                <div className="cart-item-preview__info">
                  <p className="cart-item-preview__name">Signature Hoodie</p>
                  <p className="cart-item-preview__variant">Charcoal Noir • L</p>
                  <p className="cart-item-preview__price">{formatRupiah(subtotal)}</p>
                </div>
              </div>

              {/* BREAKDOWN */}
              <div className="summary-breakdown">
                <div className="summary-row">
                  <span className="summary-row__label">Subtotal</span>
                  <span className="summary-row__value">{formatRupiah(subtotal)}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-row__label">Shipping</span>
                  <span className="summary-row__value">{formatRupiah(shippingFee)}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-row__label">Admin Fee</span>
                  <span className="summary-row__value">{formatRupiah(adminFee)}</span>
                </div>
                {discount > 0 && (
                  <div className="summary-row">
                    <span className="summary-row__label" style={{ color: "#4ade80" }}>Diskon Promo</span>
                    <span className="summary-row__value" style={{ color: "#4ade80" }}>-{formatRupiah(discount)}</span>
                  </div>
                )}
              </div>

              {/* TOTAL */}
              <div className="summary-total">
                <span className="summary-total__label">Total</span>
                <div>
                  <p className="summary-total__amount">{formatRupiah(grandTotal)}</p>
                  <p className="summary-total__sub">TAX INCLUDED</p>
                </div>
              </div>

              <button
                type="button"
                className="btn-confirm-payment"
                onClick={handleConfirmPayment}
              >
                KONFIRMASI PEMBAYARAN
              </button>

              <div className="security-text">
                <svg width="14" height="16" viewBox="0 0 16 20" fill="none">
                  <path d="M8 1l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V4l7-3z" stroke="currentColor" strokeWidth="1.3" />
                </svg>
                <span>Secure encrypted payment gateway</span>
              </div>
            </div>

            {/* PROMO CODE CARD */}
            <form className="promo-card" onSubmit={handleApplyPromo}>
              <input
                type="text"
                className="promo-input"
                placeholder="Promo Code (coba: MAHREEN10)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button type="submit" className="btn-promo-apply">
                Apply
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* SUCCESS MODAL */}
      {isSuccessModalOpen && (
        <div className="payment-modal-backdrop">
          <div className="payment-modal-card">
            <div className="payment-modal-icon">✓</div>
            <h2 className="payment-modal-title">Pembayaran Dikonfirmasi!</h2>
            <p className="payment-modal-desc">
              Terima kasih, {user?.fullName || "Pelanggan Mahreen"}. Transaksi Anda sedang diverifikasi secara otomatis oleh sistem kami.
            </p>
            <button
              className="payment-modal-btn"
              onClick={() => navigateToHashRoute("/mahreen-studio/review")}
            >
              LIHAT STATUS &amp; RINGKASAN PESANAN
            </button>
          </div>
        </div>
      )}

      <ClosingSection />
      <Footer />
    </div>
  );
};

export default PaymentPage;
