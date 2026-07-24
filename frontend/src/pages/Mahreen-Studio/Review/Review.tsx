import React from "react";
import StudioNavbar from "../../../components/Navbar/StudioNavbar";
import ClosingSection from "../../../components/Cloasing-section/cloasing-section";
import Footer from "../../../components/Footer/Footer";
import { navigateToHashRoute } from "../../../utils/hashNavigation";
import { useAuth } from "../../../hooks/useAuth";

const reviewStyles = `
  @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,400&display=swap");

  .review-page {
    min-height: 100vh;
    background-color: #050505;
    color: #ffffff;
    font-family: "Plus Jakarta Sans", sans-serif;
  }

  .review-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 120px 24px 80px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* ===== STEPS INDICATOR ===== */
  .review-steps {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 640px;
    margin: 0 auto 48px auto;
    position: relative;
  }

  .review-steps__track {
    position: absolute;
    top: 20px;
    left: 40px;
    right: 40px;
    height: 2px;
    background: rgba(255, 255, 255, 0.08);
    z-index: 1;
  }

  .review-steps__fill {
    height: 100%;
    width: 100%;
    background: #e5c483;
    box-shadow: 0 0 10px rgba(229, 196, 131, 0.5);
  }

  .review-steps__items {
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

  .step-node__label {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.6px;
    color: #e5c483;
  }

  /* ===== MAIN CONFIRMATION CARD ===== */
  .confirmation-card {
    background: #111111;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 24px;
    padding: 56px 40px;
    max-width: 680px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
  }

  .icon-wrapper {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgba(229, 196, 131, 0.1);
    border: 1px solid rgba(229, 196, 131, 0.3);
    box-shadow: 0 0 25px rgba(227, 194, 129, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #e5c483;
    margin-bottom: 24px;
  }

  .confirmation-title {
    font-size: 24px;
    font-weight: 700;
    color: #e5e2e1;
    margin: 0 0 12px 0;
  }

  .confirmation-desc {
    font-size: 15px;
    color: #d0c5b5;
    line-height: 1.6;
    margin: 0 0 36px 0;
    max-width: 460px;
  }

  /* SUMMARY INNER BOX */
  .summary-box {
    width: 100%;
    background: #1c1b1b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 28px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: left;
    margin-bottom: 36px;
  }

  .summary-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .summary-header__label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.8px;
    color: #d0c5b5;
    text-transform: uppercase;
  }

  .summary-header__val {
    font-size: 15px;
    font-weight: 700;
    color: #e5c483;
  }

  .status-badge {
    background: rgba(229, 196, 131, 0.1);
    color: #e5c483;
    border: 1px solid rgba(229, 196, 131, 0.2);
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 13px;
    font-weight: 600;
  }

  .item-lines {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .item-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
  }

  .item-line__name {
    color: #b8b8b8;
  }

  .item-line__price {
    color: #e5e2e1;
    font-weight: 500;
  }

  .item-line--total {
    padding-top: 8px;
    font-size: 16px;
    font-weight: 700;
  }

  .item-line--total .item-line__name {
    color: #e5e2e1;
  }

  .item-line--total .item-line__price {
    color: #e5c483;
    font-size: 18px;
  }

  /* ADDRESS BOX */
  .address-box {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    background: #201f1f;
    border-radius: 12px;
    padding: 16px;
  }

  .address-box__icon {
    color: #e5c483;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .address-box__title {
    font-size: 13px;
    font-weight: 600;
    color: #e5e2e1;
    margin: 0 0 2px 0;
  }

  .address-box__text {
    font-size: 13px;
    color: #d0c5b5;
    margin: 0;
    line-height: 1.4;
  }

  /* ACTION BUTTONS */
  .action-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    width: 100%;
    flex-wrap: wrap;
  }

  .btn-primary-action {
    flex: 1;
    min-width: 200px;
    background: #e5c483;
    color: #261a00;
    border: none;
    border-radius: 12px;
    padding: 16px 24px;
    font-size: 14px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(229, 196, 131, 0.3);
    transition: all 250ms ease;
  }

  .btn-primary-action:hover {
    background: #f0d59e;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(229, 196, 131, 0.45);
  }

  .btn-secondary-action {
    flex: 1;
    min-width: 200px;
    background: transparent;
    color: #e5e2e1;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    padding: 16px 24px;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    transition: all 250ms ease;
    text-decoration: none;
  }

  .btn-secondary-action:hover {
    border-color: #e5c483;
    color: #e5c483;
    background: rgba(229, 196, 131, 0.05);
  }

  /* RESPONSIVE */
  @media (max-width: 640px) {
    .review-container {
      padding: 100px 16px 60px 16px;
    }

    .confirmation-card {
      padding: 36px 20px;
    }

    .action-buttons {
      flex-direction: column;
    }

    .btn-primary-action, .btn-secondary-action {
      width: 100%;
    }
  }
`;

const ReviewPage: React.FC = () => {
  const { user } = useAuth();

  const orderNumber = "MS-2024-8892";
  const itemTitle = "Signature Minimalist Hoodie (Charcoal)";
  const itemPrice = 2450000;
  const tax = 269500;
  const total = itemPrice + tax;

  const formatRupiah = (val: number) =>
    "Rp " + val.toLocaleString("id-ID");

  const handleCheckStatus = () => {
    navigateToHashRoute("/mahreen-studio/lacak-pesanan");
  };

  return (
    <div className="review-page">
      <style data-component="mahreen-review">{reviewStyles}</style>
      <StudioNavbar />

      <main className="review-container">
        {/* STEPS INDICATOR */}
        <div className="review-steps" aria-label="Checkout Progress">
          <div className="review-steps__track">
            <div className="review-steps__fill"></div>
          </div>
          <ul className="review-steps__items">
            <li className="step-node step-node--completed">
              <div className="step-node__icon">✓</div>
              <span className="step-node__label">Shipping</span>
            </li>
            <li className="step-node step-node--completed">
              <div className="step-node__icon">✓</div>
              <span className="step-node__label">Payment</span>
            </li>
            <li className="step-node step-node--active">
              <div className="step-node__icon">3</div>
              <span className="step-node__label">Review</span>
            </li>
          </ul>
        </div>

        {/* CONFIRMATION CARD */}
        <article className="confirmation-card">
          <div className="icon-wrapper">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 6L9 17l-5-5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h1 className="confirmation-title">Pendaftaran &amp; Pembayaran Berhasil</h1>
          <p className="confirmation-desc">
            Terima kasih atas kepercayaan Anda, {user?.fullName || "Pelanggan Mahreen"}. Pesanan Anda sedang kami proses dan tim kami akan segera menghubungi Anda.
          </p>

          {/* SUMMARY BOX */}
          <section className="summary-box" aria-label="Ringkasan Pesanan">
            <div className="summary-header">
              <div>
                <span className="summary-header__label">NOMOR PESANAN</span>
                <div className="summary-header__val">{orderNumber}</div>
              </div>
              <div>
                <span className="summary-header__label" style={{ display: "block", textAlign: "right" }}>
                  STATUS
                </span>
                <span className="status-badge">Confirmed</span>
              </div>
            </div>

            <dl className="item-lines">
              <div className="item-line">
                <dt className="item-line__name">{itemTitle}</dt>
                <dd className="item-line__price">{formatRupiah(itemPrice)}</dd>
              </div>
              <div className="item-line">
                <dt className="item-line__name">Pajak (PPN 11%)</dt>
                <dd className="item-line__price">{formatRupiah(tax)}</dd>
              </div>
              <div className="item-line item-line--total">
                <dt className="item-line__name">Total</dt>
                <dd className="item-line__price">{formatRupiah(total)}</dd>
              </div>
            </dl>

            <address className="address-box">
              <svg className="address-box__icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 21s-7-6.5-7-12a7 7 0 1114 0c0 5.5-7 12-7 12z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <div>
                <p className="address-box__title">Alamat Pengiriman</p>
                <p className="address-box__text">
                  Jalan Senopati No. 42, Jakarta Selatan, 12190
                </p>
              </div>
            </address>
          </section>

          {/* ACTION BUTTONS */}
          <div className="action-buttons">
            <button
              type="button"
              className="btn-primary-action"
              onClick={handleCheckStatus}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="1" y="3" width="15" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <polygon points="16 8 20 8 23 11 23 16 16 16" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span>Cek Status Pengiriman</span>
            </button>
            <button
              type="button"
              className="btn-secondary-action"
              onClick={() => navigateToHashRoute("/mahreen-studio")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="1.5" />
                <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span>Kembali ke Beranda</span>
            </button>
          </div>
        </article>
      </main>

      <ClosingSection />
      <Footer />
    </div>
  );
};

export default ReviewPage;
