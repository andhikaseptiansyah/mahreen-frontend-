import React, { useState } from "react";
import StudioNavbar from "../../../components/Navbar/StudioNavbar";
import ClosingSection from "../../../components/Cloasing-section/cloasing-section";
import Footer from "../../../components/Footer/Footer";
import { useAuth } from "../../../hooks/useAuth";

const lacakStyles = `
  @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap");

  .lacak-page {
    min-height: 100vh;
    background-color: #050505;
    color: #ffffff;
    font-family: "Plus Jakarta Sans", sans-serif;
  }

  .lacak-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 120px 24px 80px 24px;
  }

  /* HEADER SECTION */
  .lacak-header {
    margin-bottom: 40px;
  }

  .lacak-header__title {
    font-size: clamp(36px, 5vw, 56px);
    font-weight: 700;
    letter-spacing: -1.2px;
    color: #e5e2e1;
    margin: 0 0 16px 0;
  }

  .lacak-header__desc {
    font-size: 16px;
    color: #d0c5b5;
    max-width: 680px;
    margin: 0;
    line-height: 1.6;
  }

  /* GRID CONTAINER */
  .lacak-main-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
    align-items: start;
  }

  @media (min-width: 992px) {
    .lacak-main-grid {
      grid-template-columns: 1fr 340px;
      gap: 40px;
    }
  }

  .lacak-content-col {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  /* SEARCH FORM */
  .search-card {
    background: #111111;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    padding: 24px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
  }

  .search-form {
    display: flex;
    gap: 16px;
    align-items: center;
    flex-wrap: wrap;
  }

  .search-input-wrap {
    position: relative;
    flex-grow: 1;
    min-width: 260px;
  }

  .search-input-wrap svg {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.4);
  }

  .search-input {
    width: 100%;
    background: #1c1b1b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 16px 16px 16px 48px;
    color: #e5e2e1;
    font-size: 15px;
    outline: none;
    transition: border-color 200ms ease;
  }

  .search-input:focus {
    border-color: #e5c483;
  }

  .btn-lacak {
    background: #e5c483;
    color: #402d00;
    border: none;
    border-radius: 12px;
    padding: 16px 36px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
    transition: all 250ms ease;
    box-shadow: 0 4px 15px rgba(229, 196, 131, 0.25);
  }

  .btn-lacak:hover {
    background: #f0d59e;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(229, 196, 131, 0.4);
  }

  /* SHIPMENT ARTICLE CARD */
  .shipment-card {
    background: #111111;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
  }

  .shipment-card__header {
    background: rgba(255, 255, 255, 0.03);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding: 24px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
  }

  .shipment-card__title-group {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .shipment-card__icon-box {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: rgba(229, 196, 131, 0.1);
    border: 1px solid rgba(229, 196, 131, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #e5c483;
  }

  .shipment-card__awb {
    font-size: 22px;
    font-weight: 700;
    color: #e5e2e1;
    margin: 0;
  }

  .shipment-card__product-name {
    font-size: 13px;
    color: #d0c5b5;
    margin: 2px 0 0 0;
  }

  .shipment-card__eta-box {
    text-align: right;
  }

  .shipment-card__eta-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.2px;
    color: #d0c5b5;
    margin: 0;
    text-transform: uppercase;
  }

  .shipment-card__eta-date {
    font-size: 22px;
    font-weight: 700;
    color: #e5c483;
    margin: 2px 0 0 0;
  }

  .shipment-card__body {
    padding: 32px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
  }

  @media (min-width: 768px) {
    .shipment-card__body {
      grid-template-columns: 1.2fr 1fr;
    }
  }

  /* TIMELINE */
  .timeline {
    position: relative;
    padding-left: 36px;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .timeline::before {
    content: "";
    position: absolute;
    top: 12px;
    bottom: 12px;
    left: 13px;
    width: 2px;
    background: rgba(255, 255, 255, 0.08);
  }

  .timeline__progress-line {
    position: absolute;
    top: 12px;
    left: 13px;
    width: 2px;
    height: 65%;
    background: #e5c483;
    box-shadow: 0 0 10px rgba(229, 196, 131, 0.5);
  }

  .timeline-item {
    position: relative;
  }

  .timeline-item__badge {
    position: absolute;
    left: -36px;
    top: 0;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #e5c483;
    color: #050505;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    transform: translateX(-4px);
    z-index: 2;
  }

  .timeline-item--future .timeline-item__badge {
    background: #2a2a2a;
    border: 2px solid rgba(255, 255, 255, 0.1);
    color: #d0c5b5;
  }

  .timeline-item--future {
    opacity: 0.45;
  }

  .timeline-item__title {
    font-size: 16px;
    font-weight: 600;
    color: #e5c483;
    margin: 0;
  }

  .timeline-item--future .timeline-item__title {
    color: #e5e2e1;
  }

  .timeline-item__time {
    font-size: 12px;
    color: #d0c5b5;
    margin-top: 2px;
    display: block;
  }

  .timeline-item__desc {
    font-size: 14px;
    color: #b8b8b8;
    margin: 6px 0 0 0;
    line-height: 1.5;
  }

  .timeline-quote {
    background: #1c1b1b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    padding: 14px 16px;
    font-style: italic;
    font-size: 13px;
    color: #e5e2e1;
    margin-top: 10px;
    line-height: 1.5;
  }

  /* LOGISTICS INFO SIDE */
  .logistics-info {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .section-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.2px;
    color: #d0c5b5;
    margin: 0 0 12px 0;
    text-transform: uppercase;
  }

  .courier-box {
    display: flex;
    align-items: center;
    gap: 16px;
    background: #1c1b1b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 16px;
  }

  .courier-logo {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    color: #e5c483;
    font-size: 14px;
    flex-shrink: 0;
  }

  .courier-name {
    font-size: 15px;
    font-weight: 600;
    color: #e5e2e1;
    margin: 0;
  }

  .courier-awb {
    font-size: 12px;
    color: #d0c5b5;
    margin: 2px 0 0 0;
  }

  .location-box {
    background: #1c1b1b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    overflow: hidden;
    position: relative;
  }

  .location-map-mock {
    height: 120px;
    background: linear-gradient(135deg, #181818 0%, #282828 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .location-tag {
    position: absolute;
    bottom: 12px;
    left: 12px;
    right: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    font-weight: 600;
    color: #e5e2e1;
    background: rgba(5, 5, 5, 0.85);
    padding: 8px 12px;
    border-radius: 8px;
    backdrop-filter: blur(4px);
  }

  .btn-support-link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: #e5e2e1;
    border-radius: 12px;
    padding: 14px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    transition: all 200ms ease;
  }

  .btn-support-link:hover {
    border-color: #e5c483;
    color: #e5c483;
    background: rgba(229, 196, 131, 0.05);
  }

  /* SIDEBAR HELP */
  .help-sidebar {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .help-card {
    background: #111111;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    padding: 28px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }

  .help-card__title {
    font-size: 20px;
    font-weight: 600;
    color: #e5e2e1;
    margin: 0 0 12px 0;
  }

  .help-card__desc {
    font-size: 14px;
    color: #d0c5b5;
    line-height: 1.6;
    margin: 0 0 20px 0;
  }

  .contact-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #e5e2e1;
    font-size: 14px;
    text-decoration: none;
    transition: color 200ms ease;
  }

  .contact-item:hover {
    color: #e5c483;
  }

  .platinum-note {
    background: rgba(229, 196, 131, 0.05);
    border: 1px solid rgba(229, 196, 131, 0.2);
    border-radius: 12px;
    padding: 16px;
  }

  .platinum-note__header {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.6px;
    color: #e5c483;
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0 0 6px 0;
  }

  .platinum-note__text {
    font-size: 13px;
    color: #e5e2e1;
    margin: 0;
    line-height: 1.5;
  }

  .faq-accordion {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .faq-details {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding: 12px 0;
  }

  .faq-summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 500;
    color: #e5e2e1;
    cursor: pointer;
    list-style: none;
  }

  .faq-content {
    font-size: 13px;
    color: #d0c5b5;
    margin-top: 10px;
    line-height: 1.5;
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 991px) {
    .lacak-container {
      padding: 100px 20px 60px 20px;
    }

    .lacak-main-grid {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px;
    }

    .lacak-content-col {
      width: min(100%, 680px);
      margin: 0 auto;
    }

    .help-sidebar {
      width: min(100%, 680px);
      margin: 0 auto;
    }
  }
`;

const LacakPesananPage: React.FC = () => {
  const { user } = useAuth();
  const [searchAwb, setSearchAwb] = useState<string>("MH-8829102");
  const [activeTracking, setActiveTracking] = useState<{
    awb: string;
    productTitle: string;
    eta: string;
    courier: string;
    courierAwb: string;
    transitLocation: string;
  }>({
    awb: "MH-8829102",
    productTitle: "Signature Minimalist Hoodie (Charcoal Noir)",
    eta: "24 Okt 2024",
    courier: "J & T Express",
    courierAwb: "JX-192837465",
    transitLocation: "SCBD Area, Jakarta Selatan",
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchAwb.trim()) return;
    setActiveTracking((prev) => ({
      ...prev,
      awb: searchAwb.trim().toUpperCase(),
    }));
  };

  return (
    <div className="lacak-page">
      <style data-component="mahreen-lacak">{lacakStyles}</style>
      <StudioNavbar />

      <main className="lacak-container">
        {/* PAGE HEADER */}
        <header className="lacak-header">
          <h1 className="lacak-header__title">Lacak Pesanan</h1>
          <p className="lacak-header__desc">
            Pantau status pengiriman koleksi eksklusif Mahreen Studio Anda secara real-time. Masukkan nomor resi atau ID pesanan untuk memulai.
          </p>
        </header>

        {/* MAIN LAYOUT GRID */}
        <div className="lacak-main-grid">
          {/* CONTENT COLUMN */}
          <div className="lacak-content-col">
            {/* SEARCH FORM */}
            <div className="search-card">
              <form className="search-form" onSubmit={handleSearch}>
                <div className="search-input-wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Masukkan No. Resi / Order ID (Contoh: MH-8829102)"
                    value={searchAwb}
                    onChange={(e) => setSearchAwb(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn-lacak">
                  <span>Lacak Sekarang</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            </div>

            {/* SHIPMENT DETAILS CARD */}
            <article className="shipment-card" aria-label="Detail Lacak Pengiriman">
              <div className="shipment-card__header">
                <div className="shipment-card__title-group">
                  <div className="shipment-card__icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect x="1" y="3" width="15" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
                      <polygon points="16 8 20 8 23 11 23 16 16 16" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="shipment-card__awb">{activeTracking.awb}</h2>
                    <p className="shipment-card__product-name">{activeTracking.productTitle}</p>
                  </div>
                </div>

                <div className="shipment-card__eta-box">
                  <p className="shipment-card__eta-label">ESTIMASI KEDATANGAN</p>
                  <p className="shipment-card__eta-date">{activeTracking.eta}</p>
                </div>
              </div>

              <div className="shipment-card__body">
                {/* TIMELINE */}
                <section aria-label="Status pengiriman timeline">
                  <ol className="timeline">
                    <div className="timeline__progress-line"></div>

                    <li className="timeline-item">
                      <div className="timeline-item__badge">✓</div>
                      <h3 className="timeline-item__title">Pesanan Diterima</h3>
                      <time className="timeline-item__time">18 Okt 2024, 09:12 WIB</time>
                      <p className="timeline-item__desc">
                        Pesanan telah divalidasi oleh sistem Mahreen Studio.
                      </p>
                    </li>

                    <li className="timeline-item">
                      <div className="timeline-item__badge">✓</div>
                      <h3 className="timeline-item__title">Sedang Diproses</h3>
                      <time className="timeline-item__time">19 Okt 2024, 14:30 WIB</time>
                      <p className="timeline-item__desc">
                        Koleksi sedang dipersiapkan dan dikemas dengan standar kurasi kami.
                      </p>
                    </li>

                    <li className="timeline-item">
                      <div className="timeline-item__badge">🚚</div>
                      <h3 className="timeline-item__title">Dalam Pengiriman</h3>
                      <time className="timeline-item__time">21 Okt 2024, 11:05 WIB</time>
                      <blockquote className="timeline-quote">
                        "Paket telah meninggalkan Gudang Transit Jakarta Selatan. Menuju Pusat Distribusi Regional."
                      </blockquote>
                    </li>

                    <li className="timeline-item timeline-item--future">
                      <div className="timeline-item__badge">4</div>
                      <h3 className="timeline-item__title">Sampai di Tujuan</h3>
                      <span className="timeline-item__time">Estimasi: 24 Okt 2024</span>
                    </li>
                  </ol>
                </section>

                {/* LOGISTICS INFO */}
                <aside className="logistics-info" aria-label="Informasi Logistik">
                  <div>
                    <h3 className="section-label">KURIR LOGISTIK</h3>
                    <div className="courier-box">
                      <div className="courier-logo">J&amp;T</div>
                      <div>
                        <p className="courier-name">{activeTracking.courier}</p>
                        <p className="courier-awb">Nomor AWB: {activeTracking.courierAwb}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="section-label">LOKASI TERKINI</h3>
                    <div className="location-box">
                      <div className="location-map-mock">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" opacity="0.3">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" />
                          <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1" />
                        </svg>
                        <div className="location-tag">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" color="#e5c483">
                            <path d="M12 21s-7-6.5-7-12a7 7 0 1114 0c0 5.5-7 12-7 12z" stroke="currentColor" strokeWidth="1.5" />
                          </svg>
                          <span>Transit: {activeTracking.transitLocation}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a href="mailto:support@mahreen.com" className="btn-support-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    <span>Hubungi Support Mahreen</span>
                  </a>
                </aside>
              </div>
            </article>
          </div>

          {/* HELP SIDEBAR */}
          <aside className="help-sidebar">
            <section className="help-card">
              <h2 className="help-card__title">Butuh Bantuan?</h2>
              <p className="help-card__desc">
                Jika Anda mengalami kendala dalam melacak pesanan, tim dukungan pelanggan kami siap membantu Anda 24/7.
              </p>

              <div className="contact-list">
                <a href="mailto:support@mahreen.com" className="contact-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" color="#e5c483">
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <span>support@mahreen.com</span>
                </a>
                <a href="tel:+622180001234" className="contact-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" color="#e5c483">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <span>+62 21 8000 1234</span>
                </a>
              </div>

              <div className="platinum-note">
                <p className="platinum-note__header">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  Layanan Platinum Member
                </p>
                <p className="platinum-note__text">
                  Hai {user?.fullName || "Member"}, Anda mendapatkan prioritas penanganan untuk pengiriman ini.
                </p>
              </div>
            </section>

            <section className="help-card">
              <h2 className="help-card__title">Panduan Pengiriman</h2>
              <div className="faq-accordion">
                <details className="faq-details">
                  <summary className="faq-summary">
                    <span>Berapa lama proses pengiriman?</span>
                    <span>▾</span>
                  </summary>
                  <p className="faq-content">
                    Estimasi pengiriman standar adalah 2-3 hari kerja untuk wilayah Jabodetabek dan 3-5 hari kerja untuk luar pulau Jawa.
                  </p>
                </details>
                <details className="faq-details">
                  <summary className="faq-summary">
                    <span>Apakah bisa mengganti alamat?</span>
                    <span>▾</span>
                  </summary>
                  <p className="faq-content">
                    Perubahan alamat dapat dilakukan selama pesanan belum diserahkan ke kurir logistik (status 'Sedang Diproses'). Silakan hubungi Support Mahreen.
                  </p>
                </details>
              </div>
            </section>
          </aside>
        </div>
      </main>

      <ClosingSection />
      <Footer />
    </div>
  );
};

export default LacakPesananPage;
