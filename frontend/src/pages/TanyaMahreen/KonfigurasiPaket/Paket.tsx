import { useState } from "react";
import FeatureComparison from "./sections/FeatureComparison";
import LayananTambahan from "./sections/LayananTambahan";
import Footer from "../../../components/Footer/Footer";
import ClosingSection from "../../../components/Cloasing-section/cloasing-section";
import Navbar from "../../../components/Navbar/Navbar";

type TabId =
  | "website"
  | "branding"
  | "sosmed"
  | "digital"
  | "advertising"
  | "content"
  | "consultation";

type TierId = "better" | "good" | "best";

type Tier = {
  id: TierId;
  tier: string;
  name: string;
  price: string;
  priceNum: number;
  features: string[];
  recommended?: boolean;
};

type TabData = {
  id: TabId;
  label: string;
  eyebrow: string;
  tiers: Tier[];
};

const tabsData: TabData[] = [
  {
    id: "website",
    label: "Website Solutions",
    eyebrow: "Website Solutions",
    tiers: [
      {
        id: "better",
        tier: "Tier 01",
        name: "Better Package",
        price: "Rp 1.500.000",
        priceNum: 1500000,
        features: [
          "Company Profile (max 5 pages)",
          "Logo Design",
          "Integrasi WhatsApp",
          "Google Business Profile Setup",
          "Basic SEO",
          "Domain & Hosting Setup",
          "Support 30 hari",
        ],
      },
      {
        id: "good",
        tier: "Tier 02",
        name: "Good Package",
        price: "Rp 2.500.000",
        priceNum: 2500000,
        recommended: true,
        features: [
          "Company Profile Website",
          "Landing Page",
          "Logo Design",
          "Basic SEO",
          "Google Analytics & Console",
          "Integrasi WhatsApp",
          "Form Lead",
          "Pelatihan Admin",
          "Support 60 hari",
          "Free Banner & Speed Optimization",
        ],
      },
      {
        id: "best",
        tier: "Tier 03",
        name: "Best Package",
        price: "Rp 4.500.000",
        priceNum: 4500000,
        features: [
          "Website Development",
          "Dashboard Admin",
          "Database Integration",
          "Multi User Support",
          "Landing Page",
          "Logo Design",
          "SEO Basic",
          "Performance Optimization",
          "UI/UX Design",
          "Dokumentasi Sistem",
          "Support 90 hari",
        ],
      },
    ],
  },
  {
    id: "branding",
    label: "Branding & Design",
    eyebrow: "Branding & Design",
    tiers: [
      {
        id: "better",
        tier: "Tier 01",
        name: "Better Package",
        price: "Rp 499.000",
        priceNum: 499000,
        features: [
          "Logo Design (2 Alternatif Konsep)",
          "Revisi Max 2 Kali",
          "Color Palette",
          "File PNG, JPG, PDF",
          "Logo Mockup",
          "Gratis konsultasi 30 menit",
          "Social Media Ready Files",
        ],
      },
      {
        id: "good",
        tier: "Tier 02",
        name: "Good Package",
        price: "Rp 1.499.000",
        priceNum: 1499000,
        recommended: true,
        features: [
          "Logo Design",
          "Brand Identity",
          "Brand Guideline",
          "Typography & Color Palette",
          "Social Media Identity",
          "Stationery Mockup",
          "5 Template Feed Instagram",
          "File Lengkap (PNG, JPG, PDF, SVG)",
          "Gratis konsultasi 1 jam + Support 7 hari",
        ],
      },
      {
        id: "best",
        tier: "Tier 03",
        name: "Best Package",
        price: "Rp 1.999.000",
        priceNum: 1999000,
        features: [
          "Logo Design & Brand Identity",
          "Brand Guideline",
          "Company Profile Design",
          "Presentation Design",
          "Packaging Design",
          "Marketing Materials (2 pilihan)",
          "Social Media Identity",
          "Stationery Design",
          "Prioritas Pengerjaan & Support 14 hari",
        ],
      },
    ],
  },
  {
    id: "sosmed",
    label: "Social Media Management",
    eyebrow: "Social Media Management",
    tiers: [
      {
        id: "better",
        tier: "Tier 01",
        name: "Better Package",
        price: "Rp 699.000",
        priceNum: 699000,
        features: [
          "Content Planning & Calendar",
          "8 Desain Feed Instagram",
          "8 Copywriting Post",
          "1 Revisi per desain",
          "Monthly Report",
        ],
      },
      {
        id: "good",
        tier: "Tier 02",
        name: "Good Package",
        price: "Rp 999.000",
        priceNum: 999000,
        recommended: true,
        features: [
          "Content Planning & Calendar",
          "12 Feed Instagram",
          "8 Story Design",
          "Copywriting & Hashtags",
          "Community Management",
          "Monthly Report & Insight",
          "Konsultasi Bulanan",
        ],
      },
      {
        id: "best",
        tier: "Tier 03",
        name: "Best Package",
        price: "Rp 1.999.000",
        priceNum: 1999000,
        features: [
          "Content Planning & Calendar",
          "16 Feed & 12 Story",
          "4 Carousel Design",
          "Copywriting & Community Mgmt",
          "Monthly Report & Insight",
          "Strategy Meeting",
          "Priority Support & Revision",
        ],
      },
    ],
  },
  {
    id: "digital",
    label: "Digital Marketing",
    eyebrow: "Digital Marketing",
    tiers: [
      {
        id: "better",
        tier: "Tier 01",
        name: "Better Package",
        price: "Rp 799.000",
        priceNum: 799000,
        features: [
          "Digital Marketing Strategy",
          "Basic SEO & Keyword Research",
          "Google Business Profile Optimization",
          "Monthly Consultation (1x)",
        ],
      },
      {
        id: "good",
        tier: "Tier 02",
        name: "Good Package",
        price: "Rp 999.000",
        priceNum: 999000,
        recommended: true,
        features: [
          "Digital Marketing Strategy",
          "SEO Optimization",
          "Lead Generation Strategy",
          "Email Marketing Setup",
          "Monthly Performance Report",
          "Konsultasi Bulanan",
          "Bonus: Audit Digital Marketing",
        ],
      },
      {
        id: "best",
        tier: "Tier 03",
        name: "Best Package",
        price: "Rp 1.999.000",
        priceNum: 1999000,
        features: [
          "Digital Marketing Strategy",
          "SEO Optimization",
          "Lead Generation & Funnel Strategy",
          "Marketing Automation",
          "Monthly Report & Strategy Meeting",
          "Priority Support",
          "Bonus: Audit Web & Scored",
        ],
      },
    ],
  },
  {
    id: "advertising",
    label: "Advertising Campaign",
    eyebrow: "Advertising Campaign",
    tiers: [
      {
        id: "better",
        tier: "Tier 01",
        name: "Better Package",
        price: "Rp 1.999.000",
        priceNum: 1999000,
        features: [
          "1 Platform Ads (Meta/TikTok/Google)",
          "Campaign Setup & Targeting",
          "Ad Copywriting",
          "Monitoring Campaign",
          "Optimasi Mingguan",
          "Monthly Report",
        ],
      },
      {
        id: "good",
        tier: "Tier 02",
        name: "Good Package",
        price: "Rp 2.499.000",
        priceNum: 2499000,
        recommended: true,
        features: [
          "Maksimal 2 Platform Ads",
          "Campaign Strategy & Setup",
          "Audience Research",
          "Ad Copywriting",
          "Campaign Optimization",
          "Monthly Performance Report",
          "Gratis Audit Campaign & Konsultasi",
        ],
      },
      {
        id: "best",
        tier: "Tier 03",
        name: "Best Package",
        price: "Rp 2.999.000",
        priceNum: 2999000,
        features: [
          "4 Platform Ads (Meta, TikTok, Google, LinkedIn)",
          "Campaign Strategy & Funnel Review",
          "Conversion Tracking",
          "Budget Optimization",
          "Performance Dashboard",
          "Weekly Monitoring & Monthly Meeting",
          "Priority Support",
        ],
      },
    ],
  },
  {
    id: "content",
    label: "Content Production",
    eyebrow: "Content Production",
    tiers: [
      {
        id: "better",
        tier: "Tier 01",
        name: "Better Package",
        price: "Rp 1.250.000",
        priceNum: 1250000,
        features: [
          "Photography Session",
          "10 Foto Produk",
          "2 Reels/TikTok",
          "Basic Editing",
        ],
      },
      {
        id: "good",
        tier: "Tier 02",
        name: "Good Package",
        price: "Rp 1.499.000",
        priceNum: 1499000,
        recommended: true,
        features: [
          "Photography Session",
          "15 Foto Pilihan",
          "4 Reels/TikTok",
          "Basic Copy Caption",
          "Editing Seluruh Konten",
        ],
      },
      {
        id: "best",
        tier: "Tier 03",
        name: "Best Package",
        price: "Rp 2.999.000",
        priceNum: 2999000,
        features: [
          "Photography & Videography",
          "Company Profile Video",
          "30 Foto Pilihan",
          "8 Reels/TikTok",
          "Editing Lengkap & Prioritas Revisi",
        ],
      },
    ],
  },
  {
    id: "consultation",
    label: "Business Consultation",
    eyebrow: "Business Consultation",
    tiers: [
      {
        id: "better",
        tier: "Tier 01",
        name: "Better Package",
        price: "Rp 749.000",
        priceNum: 749000,
        features: [
          "2 sesi Business Consultation",
          "1 sesi Marketing Strategy",
          "Ringkasan Hasil Konsultasi",
          "Action Plan 30 Hari",
        ],
      },
      {
        id: "good",
        tier: "Tier 02",
        name: "Good Package",
        price: "Rp 1.499.000",
        priceNum: 1499000,
        recommended: true,
        features: [
          "2 sesi Business Consultation",
          "1 sesi Branding Consultation",
          "1 sesi Digital Strategy",
          "2 sesi Marketing Strategy",
          "Roadmap Pengembangan Bisnis (90 Hari)",
        ],
      },
      {
        id: "best",
        tier: "Tier 03",
        name: "Best Package",
        price: "Rp 1.999.000",
        priceNum: 1999000,
        features: [
          "3 sesi Business Consultation",
          "Branding Consultation",
          "Digital Strategy",
          "Business Development & Marketing Strategy",
          "Personal Branding Consultation (Owner)",
          "Roadmap Bisnis 6 Bulan",
          "Prioritas Sesi",
        ],
      },
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

  .paket-header {
    text-align: center;
    margin-bottom: 40px;
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

  /* ── Category Tabs ── */
  .paket-category-tabs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    margin-bottom: 48px;
    list-style: none;
    padding: 0;
    margin-top: 0;
  }

  .paket-category-tab {
    appearance: none;
    background: transparent;
    border: 1px solid transparent;
    color: rgba(255,255,255,0.45);
    font-family: "DM Mono", monospace;
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    padding: 8px 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
  }

  .paket-category-tab:hover {
    color: rgba(255,255,255,0.8);
    border-color: rgba(255,255,255,0.2);
  }

  .paket-category-tab.is-active {
    color: #000000;
    background: #d6a35c;
    border-color: #d6a35c;
  }

  /* ── Grid Layout ── */
  .paket-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 300px;
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
    min-height: 320px;
    display: flex;
    flex-direction: column;
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
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    margin: 0 0 4px;
  }

  .paket-card__price {
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(22px, 2.5vw, 30px);
    font-weight: 600;
    color: #d6a35c;
    margin: 0 0 20px;
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  .paket-card__features {
    list-style: none;
    margin: 0 0 24px;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
  }

  .paket-card__feature {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 12px;
    color: rgba(255,255,255,0.7);
    line-height: 1.45;
  }

  .paket-card__feature-icon {
    color: #d6a35c;
    font-size: 12px;
    flex-shrink: 0;
    margin-top: 2px;
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
    margin-top: auto;
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
    font-size: 26px;
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
  @media (max-width: 1100px) {
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
    .paket-category-tabs {
      gap: 6px;
    }
    .paket-category-tab {
      font-size: 8px;
      padding: 6px 12px;
    }
  }
`;

const Paket = () => {
  const [activeTab, setActiveTab] = useState<TabId>("website");
  const [selectedTier, setSelectedTier] = useState<TierId>("good");

  const currentTab = tabsData.find((t) => t.id === activeTab)!;
  const selectedTierObj = currentTab.tiers.find((t) => t.id === selectedTier)!;

  const handleTabChange = (tabId: TabId) => {
    setActiveTab(tabId);
    setSelectedTier("good");
  };

  return (
    <div className="paket-page">
      <style data-component="paket">{paketStyles}</style>
      <Navbar />

      <div className="paket-container">
        {/* ── Header ── */}
        <div className="paket-header">
          <p className="paket-header__eyebrow">{currentTab.eyebrow}</p>
          <h1 className="paket-header__title">Konfigurasi Paket Anda</h1>
          <p className="paket-header__subtitle">
            Tailor-made digital experiences meticulously crafted to elevate
            your brand's digital presence with obsidian precision and gilt
            excellence.
          </p>
        </div>

        {/* ── Category Tabs ── */}
        <ul className="paket-category-tabs">
          {tabsData.map((tab) => (
            <li key={tab.id}>
              <button
                type="button"
                className={`paket-category-tab ${activeTab === tab.id ? "is-active" : ""}`}
                onClick={() => handleTabChange(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        {/* ── Grid: Tier Cards + Ringkasan ── */}
        <div className="paket-grid">
          {currentTab.tiers.map((tier) => (
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
                  <><span>Selected</span><span>✓</span></>
                ) : (
                  <><span>Select</span><span>→</span></>
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
                {selectedTierObj.price}
              </span>
            </div>
            <hr className="ringkasan__divider" />
            <p className="ringkasan__total-label">Total Estimation</p>
            <p className="ringkasan__total-value">{selectedTierObj.price}</p>
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
        <FeatureComparison selectedTier={selectedTier} />
        <LayananTambahan />
      </div>

      <ClosingSection />
      <Footer />
    </div>
  );
};

export default Paket;