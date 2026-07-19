import { useState } from "react";
import Footer from "../../../../components/Footer/Footer";
import ClosingSection from "../../../../components/Cloasing-section/cloasing-section";
import Navbar from "../../../../components/Navbar/Navbar"

type PaymentMethod = "transfer" | "virtual" | "card" | "ewallet";

const pembayaranStyles = `
  @import url("https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap");

  .pembayaran {
    width: 100%;
    min-height: 100vh;
    background: #0a0a0a;
    color: #ffffff;
    font-family: "Inter", sans-serif;
  }

  .pembayaran *,
  .pembayaran *::before,
  .pembayaran *::after {
    box-sizing: border-box;
  }

  .pembayaran__container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 100px 22px 80px;
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 48px;
    align-items: start;
  }

  .pembayaran__eyebrow {
    font-family: "DM Mono", monospace;
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #d6a35c;
    margin: 0 0 12px;
  }

  .pembayaran__title {
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(32px, 4vw, 48px);
    font-weight: 600;
    color: #ffffff;
    margin: 0 0 12px;
    letter-spacing: -0.03em;
    line-height: 1.05;
  }

  .pembayaran__subtitle {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: rgba(255,255,255,0.5);
    margin: 0 0 48px;
    line-height: 1.65;
    max-width: 480px;
  }

  .pembayaran__section {
    margin-bottom: 40px;
  }

  .pembayaran__section-heading {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 24px;
  }

  .pembayaran__section-num {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #d6a35c;
    color: #000000;
    font-family: "DM Mono", monospace;
    font-size: 11px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .pembayaran__section-title {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    margin: 0;
  }

  .pembayaran__fields {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 16px;
  }

  .pembayaran__fields--full {
    grid-template-columns: 1fr;
  }

  .pembayaran__field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .pembayaran__field-label {
    font-family: "Inter", sans-serif;
    font-size: 11px;
    font-weight: 500;
    color: rgba(255,255,255,0.5);
  }

  .pembayaran__input {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid #333333;
    color: #ffffff;
    font-family: "Inter", sans-serif;
    font-size: 13px;
    padding: 10px 0;
    outline: none;
    transition: border-color 0.2s ease;
  }

  .pembayaran__input::placeholder {
    color: rgba(255,255,255,0.2);
  }

  .pembayaran__input:focus {
    border-bottom-color: #d6a35c;
  }

  .pembayaran__methods {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .pembayaran__method {
    background: #111111;
    border: 1px solid #222222;
    padding: 18px 16px;
    cursor: pointer;
    transition: border-color 0.2s ease;
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
  }

  .pembayaran__method:hover {
    border-color: rgba(214,163,92,0.3);
  }

  .pembayaran__method.is-active {
    border-color: #d6a35c;
  }

  .pembayaran__method-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .pembayaran__method-name {
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 600;
    color: #ffffff;
    margin: 0;
  }

  .pembayaran__method-icon {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid #333333;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: rgba(255,255,255,0.3);
    transition: all 0.2s ease;
    flex-shrink: 0;
  }

  .pembayaran__method.is-active .pembayaran__method-icon {
    border-color: #d6a35c;
    color: #d6a35c;
  }

  .pembayaran__method-banks {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }

  .pembayaran__method-bank {
    font-family: "DM Mono", monospace;
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0.5px;
    color: rgba(255,255,255,0.4);
    background: #1a1a1a;
    padding: 3px 7px;
  }

  .pembayaran__method-note {
    font-family: "Inter", sans-serif;
    font-size: 11px;
    font-style: italic;
    color: rgba(255,255,255,0.35);
    margin: 0;
  }

  .pembayaran__cta-wrap {
    margin-top: 32px;
  }

  .pembayaran__cta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    height: 56px;
    background: #d6a35c;
    border: none;
    color: #000000;
    font-family: "DM Mono", monospace;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.2s ease;
    margin-bottom: 16px;
  }

  .pembayaran__cta:hover {
    background: #c4923f;
  }

  .pembayaran__security {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .pembayaran__security-item {
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: "DM Mono", monospace;
    font-size: 8px;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.3);
  }

  .pembayaran__ringkasan {
    background: #111111;
    border: 1px solid #222222;
    padding: 28px 24px;
    position: sticky;
    top: 88px;
  }

  .pembayaran__ringkasan-title {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    margin: 0 0 24px;
  }

  .pembayaran__ringkasan-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 8px;
  }

  .pembayaran__ringkasan-label {
    font-family: "Inter", sans-serif;
    font-size: 13px;
    color: #ffffff;
    margin: 0;
  }

  .pembayaran__ringkasan-sublabel {
    font-family: "Inter", sans-serif;
    font-size: 11px;
    color: rgba(255,255,255,0.4);
    margin: 2px 0 0;
  }

  .pembayaran__ringkasan-price {
    font-family: "Inter", sans-serif;
    font-size: 13px;
    color: #ffffff;
    white-space: nowrap;
  }

  .pembayaran__ringkasan-divider {
    border: none;
    border-top: 1px solid #222222;
    margin: 20px 0;
  }

  .pembayaran__ringkasan-subtotal-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .pembayaran__ringkasan-subtotal-label {
    font-family: "Inter", sans-serif;
    font-size: 12px;
    color: rgba(255,255,255,0.5);
  }

  .pembayaran__ringkasan-subtotal-val {
    font-family: "Inter", sans-serif;
    font-size: 12px;
    color: rgba(255,255,255,0.7);
  }

  .pembayaran__ringkasan-free {
    color: #4a9a6a;
    font-weight: 600;
  }

  .pembayaran__ringkasan-total-label {
    font-family: "DM Mono", monospace;
    font-size: 9px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.4);
    margin: 0 0 6px;
  }

  .pembayaran__ringkasan-total-val {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 28px;
    font-weight: 600;
    color: #d6a35c;
    margin: 0 0 4px;
  }

  .pembayaran__ringkasan-total-note {
    font-family: "Inter", sans-serif;
    font-size: 10px;
    color: rgba(255,255,255,0.3);
    margin: 0 0 24px;
  }

  .pembayaran__next {
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid #1e1e1e;
  }

  .pembayaran__next-label {
    font-family: "DM Mono", monospace;
    font-size: 8px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.35);
    margin: 0 0 16px;
  }

  .pembayaran__next-steps {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .pembayaran__next-step {
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }

  .pembayaran__next-step-num {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: rgba(214,163,92,0.15);
    border: 1px solid rgba(214,163,92,0.3);
    color: #d6a35c;
    font-family: "DM Mono", monospace;
    font-size: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 1px;
  }

  .pembayaran__next-step-num.is-done {
    background: #d6a35c;
    color: #000000;
    border-color: #d6a35c;
  }

  .pembayaran__next-step-title {
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 600;
    color: #ffffff;
    margin: 0 0 3px;
  }

  .pembayaran__next-step-desc {
    font-family: "Inter", sans-serif;
    font-size: 11px;
    color: rgba(255,255,255,0.4);
    margin: 0;
    line-height: 1.5;
  }

  .pembayaran__testimonial {
    margin-top: 24px;
    padding-top: 20px;
    border-top: 1px solid #1e1e1e;
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-style: italic;
    color: rgba(255,255,255,0.4);
    line-height: 1.6;
  }

  @media (max-width: 900px) {
    .pembayaran__container {
      grid-template-columns: 1fr;
    }
    .pembayaran__ringkasan {
      position: static;
    }
  }

  @media (max-width: 600px) {
    .pembayaran__fields {
      grid-template-columns: 1fr;
    }
    .pembayaran__methods {
      grid-template-columns: 1fr;
    }
  }
`;

const paymentMethods = [
  {
    id: "transfer" as PaymentMethod,
    name: "Transfer Bank (Manual)",
    icon: "⊟",
    banks: ["BCA", "BNI"],
    note: "Konfirmasi manual via WhatsApp diperlukan.",
  },
  {
    id: "virtual" as PaymentMethod,
    name: "Virtual Account (Otomatis)",
    icon: "⚡",
    banks: ["BCA", "BNI", "BRI"],
    note: "Konfirmasi instan, akses langsung aktif.",
  },
  {
    id: "card" as PaymentMethod,
    name: "Kartu Kredit / Debit",
    icon: "⊡",
    banks: ["VISA", "MASTERCARD", "AMEX"],
    note: "Enkripsi SSL 256-bit standar global.",
  },
  {
    id: "ewallet" as PaymentMethod,
    name: "E-Wallet / QRIS",
    icon: "⊞",
    banks: ["QRIS", "GOPAY", "OVO"],
    note: "Scan & Bayar instan melalui smartphone.",
  },
];

const nextSteps = [
  {
    num: 1,
    done: true,
    title: "Konfirmasi Pembayaran",
    desc: "Sistem akan memverifikasi dana Anda secara real-time.",
  },
  {
    num: 2,
    done: false,
    title: "Akses Client Portal",
    desc: "Anda akan menerima email aktivasi dashboard proyek pribadi.",
  },
  {
    num: 3,
    done: false,
    title: "Kick-off Meeting",
    desc: "Pilih jadwal konsultasi pertama dengan Direktur Kreatif kami.",
  },
];

const Pembayaran = () => {
  const [activeMethod, setActiveMethod] = useState<PaymentMethod>("transfer");
  const [nama, setNama] = useState("");
  const [perusahaan, setPerusahaan] = useState("");
  const [alamat, setAlamat] = useState("");

  return (
    <>
      <Navbar />
      <style data-component="pembayaran">{pembayaranStyles}</style>

      <div className="pembayaran">
        <div className="pembayaran__container">

          {/* ── LEFT ── */}
          <div>
            <p className="pembayaran__eyebrow">Proses Checkout</p>
            <h1 className="pembayaran__title">Pembayaran Aman</h1>
            <p className="pembayaran__subtitle">
              Lengkapi informasi Anda untuk memulai perjalanan transformasi
              digital eksklusif bersama Tanya Mahreen Studio.
            </p>

            <div className="pembayaran__section">
              <div className="pembayaran__section-heading">
                <div className="pembayaran__section-num">01</div>
                <h2 className="pembayaran__section-title">Informasi Penagihan</h2>
              </div>
              <div className="pembayaran__fields">
                <div className="pembayaran__field">
                  <label className="pembayaran__field-label">Nama Lengkap</label>
                  <input
                    type="text"
                    className="pembayaran__input"
                    placeholder="Masukkan nama sesuai identitas"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                  />
                </div>
                <div className="pembayaran__field">
                  <label className="pembayaran__field-label">
                    Nama Perusahaan (Opsional)
                  </label>
                  <input
                    type="text"
                    className="pembayaran__input"
                    placeholder="Contoh: Luxury Group Ltd."
                    value={perusahaan}
                    onChange={(e) => setPerusahaan(e.target.value)}
                  />
                </div>
              </div>
              <div className="pembayaran__fields pembayaran__fields--full">
                <div className="pembayaran__field">
                  <label className="pembayaran__field-label">
                    Alamat Pengiriman Invoice
                  </label>
                  <input
                    type="text"
                    className="pembayaran__input"
                    placeholder="Alamat lengkap kantor atau rumah"
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="pembayaran__section">
              <div className="pembayaran__section-heading">
                <div className="pembayaran__section-num">02</div>
                <h2 className="pembayaran__section-title">Metode Pembayaran</h2>
              </div>
              <div className="pembayaran__methods">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className={`pembayaran__method ${activeMethod === method.id ? "is-active" : ""}`}
                    onClick={() => setActiveMethod(method.id)}
                  >
                    <div className="pembayaran__method-header">
                      <p className="pembayaran__method-name">{method.name}</p>
                      <div className="pembayaran__method-icon">
                        {activeMethod === method.id ? "✓" : method.icon}
                      </div>
                    </div>
                    <div className="pembayaran__method-banks">
                      {method.banks.map((b) => (
                        <span key={b} className="pembayaran__method-bank">{b}</span>
                      ))}
                    </div>
                    <p className="pembayaran__method-note">{method.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pembayaran__cta-wrap">
              <button type="button" className="pembayaran__cta">
                Bayar Sekarang →
              </button>
              <div className="pembayaran__security">
                <span className="pembayaran__security-item">🔒 SSL Secured</span>
                <span className="pembayaran__security-item">⊙ PCI Compliant</span>
                <span className="pembayaran__security-item">✓ Guaranteed Safe</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Ringkasan ── */}
          <div className="pembayaran__ringkasan">
            <h3 className="pembayaran__ringkasan-title">Ringkasan Pesanan</h3>
            <div className="pembayaran__ringkasan-row">
              <div>
                <p className="pembayaran__ringkasan-label">Bespoke Brand Identity</p>
                <p className="pembayaran__ringkasan-sublabel">Exclusive Package</p>
              </div>
              <span className="pembayaran__ringkasan-price">Rp 45.000.000</span>
            </div>
            <div className="pembayaran__ringkasan-row">
              <div>
                <p className="pembayaran__ringkasan-label">Add-on: Social Media Kit</p>
                <p className="pembayaran__ringkasan-sublabel">Full Platform Assets</p>
              </div>
              <span className="pembayaran__ringkasan-price">Rp 7.500.000</span>
            </div>
            <hr className="pembayaran__ringkasan-divider" />
            <div className="pembayaran__ringkasan-subtotal-row">
              <span className="pembayaran__ringkasan-subtotal-label">Subtotal</span>
              <span className="pembayaran__ringkasan-subtotal-val">Rp 52.500.000</span>
            </div>
            <div className="pembayaran__ringkasan-subtotal-row">
              <span className="pembayaran__ringkasan-subtotal-label">Biaya Layanan (0%)</span>
              <span className="pembayaran__ringkasan-free">FREE</span>
            </div>
            <hr className="pembayaran__ringkasan-divider" />
            <p className="pembayaran__ringkasan-total-label">Total Harga</p>
            <p className="pembayaran__ringkasan-total-val">Rp 52.500.000</p>
            <p className="pembayaran__ringkasan-total-note">Harga sudah termasuk PPN</p>
            <div className="pembayaran__next">
              <p className="pembayaran__next-label">Langkah Selanjutnya</p>
              <div className="pembayaran__next-steps">
                {nextSteps.map((step) => (
                  <div key={step.num} className="pembayaran__next-step">
                    <div className={`pembayaran__next-step-num ${step.done ? "is-done" : ""}`}>
                      {step.done ? "✓" : step.num}
                    </div>
                    <div>
                      <p className="pembayaran__next-step-title">{step.title}</p>
                      <p className="pembayaran__next-step-desc">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="pembayaran__testimonial">
              "Tanya Mahreen memberikan standar baru dalam eksekusi visual untuk brand kami."
            </p>
          </div>
        </div>
      </div>

      <ClosingSection />
      <Footer />
    </>
  );
};

export default Pembayaran;