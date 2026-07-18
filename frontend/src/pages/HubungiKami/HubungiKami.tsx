import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import MengapaBermitra from "./sections/MengapaBermitra";
import KontakLangsung from "./sections/KontakLangsung";
import FormHubungiKami from "./sections/FormHubungiKami";
import Footer from "../../components/Footer/Footer";

const hkStyles = `
  @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&family=Inter:wght@400;500;600;700&display=swap");

  .hk-page {
    background-color: #050505;
    color: #ffffff;
    font-family: "Inter", sans-serif;
    min-height: 100vh;
    padding: 158px 24px 80px;
    box-sizing: border-box;
  }

  .hk-page *, .hk-page *::before, .hk-page *::after {
    box-sizing: border-box;
  }

  .hk-container {
    max-width: 1100px;
    margin: 0 auto;
  }

  /* Header Section */
  .hk-header {
    text-align: center;
    margin-bottom: 72px;
  }

  .hk-label {
    color: #d8b66f;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 16px;
    display: block;
  }

  .hk-title {
    font-family: "Cormorant Garamond", serif;
    font-size: clamp(42px, 5vw, 64px);
    font-weight: 600;
    line-height: 1.1;
    margin: 0 0 20px 0;
  }

  .hk-title-italic {
    font-style: italic;
    color: #d8b66f;
    font-weight: 500;
  }

  .hk-subtitle {
    color: rgba(255, 255, 255, 0.6);
    font-size: clamp(14px, 2vw, 16px);
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
  }

  /* Layout Grid */
  .hk-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 48px;
  }

  @media (min-width: 960px) {
    .hk-grid {
      grid-template-columns: 0.9fr 1.1fr;
      gap: 80px;
    }
  }

  .hk-col-left {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  /* Section Title */
  .hk-section-title {
    font-family: "Cormorant Garamond", serif;
    font-size: 32px;
    font-weight: 600;
    margin: 0 0 24px 0;
  }

  /* Mengapa Bermitra */
  .hk-why-list {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .hk-why-item {
    display: flex;
    gap: 24px;
    align-items: flex-start;
  }

  .hk-why-num {
    font-family: "Cormorant Garamond", serif;
    font-size: 28px;
    font-style: italic;
    color: rgba(216, 182, 111, 0.6);
    line-height: 1;
    margin-top: 2px;
  }

  .hk-why-content h3 {
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 8px 0;
  }

  .hk-why-content p {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.6;
    margin: 0;
  }

  /* Cards */
  .hk-card {
    background: #111111;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    padding: clamp(24px, 4vw, 40px);
  }

  /* Kontak Langsung */
  .hk-contact-list {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 24px;
  }

  .hk-contact-item {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .hk-contact-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.7);
    flex-shrink: 0;
  }

  .hk-contact-detail h4 {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.4);
    text-transform: uppercase;
    margin: 0 0 4px 0;
  }

  .hk-contact-detail p {
    font-size: 14px;
    font-weight: 500;
    margin: 0;
  }

  /* Form Hubungi Kami */
  .hk-form-desc {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.5);
    line-height: 1.6;
    margin-bottom: 32px;
  }

  .hk-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .hk-form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .hk-form-group label {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1px;
    color: #d8b66f;
    text-transform: uppercase;
  }

  .hk-form-input {
    width: 100%;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    padding: 14px 16px;
    color: #ffffff;
    font-size: 14px;
    font-family: "Inter", sans-serif;
    outline: none;
    transition: all 0.2s ease;
  }

  .hk-form-input::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }

  .hk-form-input:focus, 
  .hk-form-input.focus-mock {
    background: #ffffff;
    color: #000000;
    border-color: #ffffff;
  }

  .hk-form-input:focus::placeholder,
  .hk-form-input.focus-mock::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }

  textarea.hk-form-input {
    resize: vertical;
    min-height: 120px;
  }

  .hk-submit-btn {
    width: 100%;
    background: #d8b66f;
    color: #111111;
    border: none;
    border-radius: 99px;
    padding: 16px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    margin-top: 12px;
    transition: background 0.2s ease, transform 0.2s ease;
  }

  .hk-submit-btn:hover {
    background: #e4c583;
    transform: translateY(-2px);
  }

  /* Bottom CTA Banner */
  .hk-bottom-cta {
    text-align: center;
    margin-top: 100px;
    padding-top: 80px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }

  .hk-bottom-cta h2 {
    font-family: "Cormorant Garamond", serif;
    font-size: clamp(36px, 4vw, 52px);
    font-style: italic;
    font-weight: 600;
    margin: 0 0 20px 0;
  }

  .hk-bottom-cta p {
    color: rgba(255, 255, 255, 0.6);
    font-size: clamp(14px, 1.5vw, 16px);
    max-width: 700px;
    margin: 0 auto 32px auto;
    line-height: 1.6;
  }

  .hk-bottom-cta-label {
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 2px;
    color: #d8b66f;
    text-transform: uppercase;
  }

  /* Form Validation Errors */
  .hk-form-error {
    color: #ff9a9a;
    font-size: 12px;
    margin: 6px 0 0 4px;
  }

  .hk-form-input.hk-form-input--error {
    border-color: #e57373;
    background-color: rgba(229, 115, 115, 0.05);
  }

  .hk-form-input.hk-form-input--error:focus {
    border-color: #ff8a8a;
    background-color: #ffffff;
    box-shadow: 0 0 0 3px rgba(255, 138, 138, 0.25);
  }

  /* Animation */
  [data-hk-reveal] {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
    transition-delay: var(--hk-delay, 0s);
  }

  [data-hk-reveal].is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    [data-hk-reveal] {
      transition: none;
      opacity: 1;
      transform: none;
    }
  }
`;

const HubungiKami: React.FC = () => {
  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('[data-hk-reveal]'));
    if (revealItems.length === 0 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main className="hk-page">
        <style>{hkStyles}</style>

        <div className="hk-container">
          {/* Header Section */}
          <header className="hk-header" data-hk-reveal>
            <span className="hk-label">Hubungi Kami</span>
            <h1 className="hk-title">
              Mari Berkolaborasi <br />
              <span className="hk-title-italic">& Berkarya Bersama</span>
            </h1>
            <p className="hk-subtitle">
              Punya rencana proyek inovatif, ide pengembangan bisnis, program CSR, atau inisiatif sosial? 
              Tim profesional kami siap membantu mewujudkan visi Anda.
            </p>
          </header>

          {/* Main Content Grid */}
          <div className="hk-grid">
            {/* Kolom Kiri */}
            <div className="hk-col-left" data-hk-reveal style={{ '--hk-delay': '100ms' } as React.CSSProperties}>
              <MengapaBermitra />
              <KontakLangsung />
            </div>

            {/* Kolom Kanan */}
            <div className="hk-col-right" data-hk-reveal style={{ '--hk-delay': '200ms' } as React.CSSProperties}>
              <FormHubungiKami />
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="hk-bottom-cta" data-hk-reveal style={{ '--hk-delay': '300ms' } as React.CSSProperties}>
            <h2>Let's Build Something Meaningful Together</h2>
            <p>
              Wujudkan ide, karya, dan bisnis menjadi lebih kreatif, profesional, dan berdampak. 
              Kami siap menjadi partner kolaborasi pengembangan kreatif, digital, dan sosial kemasyarakatan di era modern.
            </p>
            <span className="hk-bottom-cta-label">
              Mari Bertumbuh Dan Memberikan Manfaat Bersama Mahreen Indonesia.
            </span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HubungiKami;