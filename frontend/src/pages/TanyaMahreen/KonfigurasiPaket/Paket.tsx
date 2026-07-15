import { useState } from "react";
import FeatureComparison from "./sections/FeatureComparison";
import LayananTambahan from "./sections/LayananTambahan";
import Footer from '../../../components/Footer/Footer';
import ClosingSection from '../../../components/Cloasing-section/cloasing-section';
import Navbar from "../../../components/Navbar/Navbar";

type TierId = "professional" | "business" | "enterprise";

type Tier = {
  id: TierId;
  tier: string;
  name: string;
  price: string;
  priceNum: number;
  features: string[];
  recommended?: boolean;
};

const tiers: Tier[] = [
  {
    id: "professional",
    tier: "Tier 01",
    name: "Professional",
    price: "Rp750k",
    priceNum: 750000,
    features: [
      "Basic landing page",
      "3 sections",
      "1 revision",
    ],
  },
  {
    id: "business",
    tier: "Tier 02",
    name: "Business",
    price: "Rp1.5m",
    priceNum: 1500000,
    features: [
      "Full company profile",
      "5 sections",
      "3 revisions",
      "SEO basic",
    ],
    recommended: true,
  },
  {
    id: "enterprise",
    tier: "Tier 03",
    name: "Enterprise",
    price: "Rp3m+",
    priceNum: 3000000,
    features: [
      "Custom web app",
      "Unlimited sections",
      "Priority support",
      "Full SEO",
    ],
  },
];

const paketStyles = `
  @import url("https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap");

  .paket-page {
    width: 100%;
    min-height: 100vh;
    background: #0a0a0a;
    color: #ffffff;
    font-family: "Inter", sans-serif;
  }

  .paket-page *,
  .paket-page *::before,
  .paket-page *::after {
    box-sizing: border-box;
  }

  .paket-container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 100px 22px 80px;
  }

  /* ── Header ── */
  .paket-header {
    text-align: center;
    margin-bottom: 56px;
  }

  .paket-header__eyebrow {
    font-family: "DM Mono", monospace;
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #d6a35c;
    margin: 0 0 16px;
  }

  .paket-header__title {
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(36px, 5vw, 60px);
    font-weight: 600;
    color: #ffffff;
    margin: 0 0 16px;
    letter-spacing: -0.03em;
    line-height: 1.05;
  }

  .paket-header__subtitle {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: rgba(255,255,255,0.55);
    margin: 0 auto;
    max-width: 520px;
    line-height: 1.7;
  }

  /* ── Grid Layout ── */
  .paket-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 320px;
    gap: 20px;
    align-items: start;
  }

  /* ── Tier Card ── */
  .paket-card {
    background: #111111;
    border: 1px solid #222222;
    padding: 28px 24px 24px;
    position: relative;
    cursor: pointer;
    transition: border-color 0.2s ease;
  }

  .paket-card:hover {
    border-color: rgba(214,163,92,0.4);
  }

  .paket-card.is-selected {
    border-color: #d6a35c;
  }

  .paket-card.is-recommended {
    border-color: #d6a35c;
  }

  .paket-card__recommended {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: #d6a35c;
    color: #000000;
    font-family: "DM Mono", monospace;
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 4px 12px;
    white-space: nowrap;
  }

  .paket-card__tier {
    font-family: "DM Mono", monospace;
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.4);
    margin: 0 0 8px;
  }

  .paket-card__name {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 22px;
    font-weight: 500;
    color: #ffffff;
    margin: 0 0 4px;
  }

  .paket-card__price {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 32px;
    font-weight: 600;
    color: #d6a35c;
    margin: 0 0 24px;
    letter-spacing: -0.02em;
  }

  .paket-card__features {
    list-style: none;
    margin: 0 0 28px;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .paket-card__feature {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 13px;
    color: rgba(255,255,255,0.75);
    line-height: 1.4;
  }

  .paket-card__feature-icon {
    color: #d6a35c;
    font-size: 14px;
    flex-shrink: 0;
    margin-top: 1px;
  }

  .paket-card__btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    font-family: "DM Mono", monospace;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.5);
    transition: color 0.2s ease;
  }

  .paket-card.is-selected .paket-card__btn {
    color: #d6a35c;
  }

  .paket-card__btn:hover {
    color: #ffffff;
  }

  /* ── Ringkasan Pesanan ── */
  .ringkasan {
    background: #111111;
    border: 1px solid #222222;
    padding: 28px 24px;
    position: sticky;
    top: 88px;
  }

  .ringkasan__title {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    margin: 0 0 24px;
  }

  .ringkasan__row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 12px;
  }

  .ringkasan__label {
    font-family: "Inter", sans-serif;
    font-size: 13px;
    color: rgba(255,255,255,0.55);
  }

  .ringkasan__value {
    font-family: "Inter", sans-serif;
    font-size: 13px;
    color: #ffffff;
    text-align: right;
  }

  .ringkasan__divider {
    border: none;
    border-top: 1px solid #222222;
    margin: 20px 0;
  }

  .ringkasan__total-label {
    font-family: "DM Mono", monospace;
    font-size: 9px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.4);
    margin: 0 0 8px;
  }

  .ringkasan__total-value {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 28px;
    font-weight: 600;
    color: #d6a35c;
    margin: 0 0 4px;
  }

  .ringkasan__total-note {
    font-family: "Inter", sans-serif;
    font-size: 10px;
    color: rgba(255,255,255,0.35);
    margin: 0 0 20px;
  }

  .ringkasan__cta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    height: 52px;
    background: #d6a35c;
    color: #000000;
    border: none;
    font-family: "DM Mono", monospace;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.2s ease;
    margin-bottom: 14px;
  }

  .ringkasan__cta:hover {
    background: #c4923f;
  }

  .ringkasan__secure {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-family: "Inter", sans-serif;
    font-size: 11px;
    color: rgba(255,255,255,0.35);
  }

  /* ── Responsive ── */
  @media (max-width: 1024px) {
    .paket-grid {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .ringkasan {
      grid-column: 1 / -1;
      position: static;
    }
  }

  @media (max-width: 720px) {
    .paket-grid {
      grid-template-columns: 1fr;
    }
  }
`;

const Paket = () => {
  const [selectedTier, setSelectedTier] = useState<TierId>("business");
  const selectedTierObj = tiers.find((t) => t.id === selectedTier)!;

  return (
    <div className="paket-page">
      <style data-component="paket">{paketStyles}</style>

      <div className="paket-container">
        {/* ── Header ── */}
        <div className="paket-header">
          <p className="paket-header__eyebrow">Website Solutions</p>
          <h1 className="paket-header__title">Konfigurasi Paket Anda</h1>
          <p className="paket-header__subtitle">
            Tailor-made digital experiences meticulously crafted to elevate
            your brand's digital presence with obsidian precision and gilt
            excellence.
          </p>
        </div>

        {/* ── Grid: Tier Cards + Ringkasan ── */}
        <div className="paket-grid">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`paket-card ${selectedTier === tier.id ? "is-selected" : ""} ${tier.recommended ? "is-recommended" : ""}`}
              onClick={() => setSelectedTier(tier.id)}
            >
              {tier.recommended && (
                <span className="paket-card__recommended">Recommended</span>
              )}
              <p className="paket-card__tier">{tier.tier}</p>
              <h2 className="paket-card__name">{tier.name}</h2>
              <p className="paket-card__price">{tier.price}</p>

              <ul className="paket-card__features">
                {tier.features.map((f) => (
                  <li key={f} className="paket-card__feature">
                    <span className="paket-card__feature-icon">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="paket-card__btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedTier(tier.id);
                }}
              >
                {selectedTier === tier.id ? (
                  <>
                    <span>Selected</span>
                    <span>✓</span>
                  </>
                ) : (
                  <>
                    <span>Select</span>
                    <span>→</span>
                  </>
                )}
              </button>
            </div>
          ))}

          {/* ── Ringkasan Pesanan ── */}
          <div className="ringkasan">
            <h3 className="ringkasan__title">Ringkasan Pesanan</h3>

            <div className="ringkasan__row">
              <span className="ringkasan__label">
                Tier: {selectedTierObj.name}
              </span>
              <span className="ringkasan__value">
                Rp{selectedTierObj.priceNum.toLocaleString("id-ID")}
              </span>
            </div>

            <hr className="ringkasan__divider" />

            <p className="ringkasan__total-label">Total Estimation</p>
            <p className="ringkasan__total-value">
              Rp{selectedTierObj.priceNum.toLocaleString("id-ID")}
            </p>
            <p className="ringkasan__total-note">*Exclude VAT 11%</p>

            <button
              type="button"
              className="ringkasan__cta"
              onClick={() => {
                window.location.hash = "/tanya-mahreen/pembayaran";
              }}
            >
              Lanjut ke Pembayaran 🔒
            </button>

            <div className="ringkasan__secure">
              <span>⊙</span>
              <span>Secure Transaction via Midtrans</span>
            </div>
          </div>
        </div>

        {/* ── Sub Sections ── */}
        <Navbar />
        <FeatureComparison selectedTier={selectedTier} />
        <LayananTambahan />
        <ClosingSection />
        <Footer />
      </div>
    </div>
  );
};

export default Paket;