import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ClosingSection from "../../components/Cloasing-section/cloasing-section";
import Footer from "../../components/Footer/Footer";
import SearchHeader from "./sections/SearchHeader";
import LayananUtama from "./sections/LayananUtama";
import ArtikelStatus from "./sections/ArtikelStatus";
import KategoriVideo from "./sections/KategoriVideo";
import FAQDownload from "./sections/FAQDownload";
import HubungiLapor from "./sections/HubungiLapor";

const hcStyles = `
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

  .hc-page {
    background-color: #050505;
    color: #ffffff;
    font-family: "Inter", sans-serif;
    min-height: 100vh;
    padding: calc(var(--navbar-height, 78px) + 40px) 24px 80px;
    box-sizing: border-box;
  }

  .hc-page *, .hc-page *::before, .hc-page *::after {
    box-sizing: border-box;
  }

  .hc-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 80px; /* Jarak antar section besar */
  }

  /* --- Global Typography & Colors --- */
  .text-gold { color: #d8b66f; }
  .text-muted { color: rgba(255, 255, 255, 0.6); }
  .text-white { color: #ffffff; }
  .bg-card { background-color: #111111; }
  .border-card { border: 1px solid rgba(255, 255, 255, 0.05); }

  .hc-section-title {
    font-size: clamp(24px, 3vw, 32px);
    font-weight: 600;
    margin: 0 0 8px 0;
  }
  .hc-section-subtitle {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    margin: 0 0 32px 0;
  }

  /* --- Search Header --- */
  .hc-hero { text-align: center; margin-bottom: 24px; }
  .hc-hero h1 {
    font-size: clamp(36px, 5vw, 48px);
    font-weight: 700;
    margin: 0 0 16px 0;
  }
  .hc-hero p { font-size: 15px; margin: 0 0 40px 0; }
  
  .hc-search-box {
    max-width: 700px;
    margin: 0 auto 24px auto;
    position: relative;
  }
  .hc-search-box input {
    width: 100%;
    background: #151515;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 99px;
    padding: 18px 24px 18px 56px;
    color: #fff;
    font-size: 16px;
    outline: none;
    transition: border-color 0.2s;
  }
  .hc-search-box input:focus { border-color: #d8b66f; }
  .hc-search-icon {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.4);
  }
  .hc-popular-tags {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
  }
  .hc-popular-tags span { color: rgba(255, 255, 255, 0.8); margin: 0 4px; }

  /* --- Layanan Utama (8 Cards) --- */
  .hc-grid-8 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  @media (min-width: 768px) { .hc-grid-8 { grid-template-columns: repeat(4, 1fr); } }
  
  .hc-service-card {
    background: #0f0f0f;
    border: 1px solid rgba(255, 255, 255, 0.03);
    border-radius: 12px;
    padding: 32px 20px;
    text-align: center;
    transition: transform 0.2s, background 0.2s;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }
  .hc-service-card:hover { background: #131313; transform: translateY(-3px); }
  .hc-service-icon { color: #d8b66f; margin-bottom: 16px; display: inline-block; }
  .hc-service-card h3 { font-size: 15px; font-weight: 600; margin: 0 0 6px 0; }
  .hc-service-card p { font-size: 12px; color: rgba(255, 255, 255, 0.5); margin: 0; }

  /* --- Artikel & Status --- */
  .hc-grid-split {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
  }
  @media (min-width: 960px) { .hc-grid-split { grid-template-columns: 1.5fr 1fr; gap: 64px; } }

  .hc-article-item {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 24px;
    background: #0a0a0a;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    margin-bottom: 16px;
    cursor: pointer;
    transition: border-color 0.2s;
  }
  .hc-article-item:hover { border-color: rgba(216, 182, 111, 0.4); }
  .hc-article-num { font-size: 28px; font-weight: 300; color: rgba(255, 255, 255, 0.2); }
  .hc-article-content { flex: 1; }
  .hc-article-content h4 { font-size: 15px; margin: 0 0 4px 0; }
  .hc-article-content p { font-size: 13px; color: rgba(255, 255, 255, 0.5); margin: 0; }
  
  .hc-status-card {
    background: #0a0a0a;
    border-radius: 12px;
    padding: 32px;
  }
  .hc-status-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    font-size: 14px;
  }
  .hc-status-item:last-child { border-bottom: none; padding-bottom: 0; }
  .status-badge { display: flex; align-items: center; gap: 8px; font-size: 13px; }
  .dot { width: 8px; height: 8px; border-radius: 50%; }
  .dot.green { background: #22c55e; box-shadow: 0 0 8px rgba(34, 197, 94, 0.4); }
  .dot.yellow { background: #eab308; box-shadow: 0 0 8px rgba(234, 179, 8, 0.4); }

  /* --- Kategori & Video --- */
  .hc-grid-3 {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
  }
  @media (min-width: 768px) { .hc-grid-3 { grid-template-columns: repeat(3, 1fr); } }

  .hc-cat-card {
    padding: 32px;
    background: #0f0f0f;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 12px;
  }
  .hc-cat-card:hover { border-color: #d8b66f; }
  .hc-cat-card h3 { font-size: 18px; margin: 16px 0 8px; }
  .hc-cat-card p { font-size: 13px; color: rgba(255, 255, 255, 0.6); line-height: 1.6; margin-bottom: 24px; }
  .hc-cat-link { font-size: 13px; color: #d8b66f; text-decoration: none; display: flex; align-items: center; gap: 4px; }
  
  .hc-video-card img { width: 100%; border-radius: 8px; object-fit: cover; aspect-ratio: 16/9; margin-bottom: 12px; }
  .hc-video-card-thumb { position: relative; }
  .hc-video-duration {
    position: absolute; bottom: 16px; right: 8px;
    background: rgba(0,0,0,0.8); padding: 4px 8px; border-radius: 4px; font-size: 11px;
  }
  .hc-video-card h4 { font-size: 14px; margin: 0; font-weight: 500; }

  /* --- FAQ & Downloads --- */
  .hc-faq-container { max-width: 800px; margin: 0 auto; width: 100%; }
  .hc-faq-item {
    background: #0f0f0f; border: 1px solid rgba(255, 255, 255, 0.05);
    padding: 20px 24px; border-radius: 8px; margin-bottom: 12px;
    display: flex; justify-content: space-between; align-items: center; cursor: pointer;
  }
  .hc-faq-item h4 { font-size: 15px; font-weight: 400; margin: 0; }

  .hc-dl-card {
    display: flex; align-items: center; justify-content: space-between;
    padding: 20px; background: #0f0f0f; border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 12px;
    text-decoration: none; color: inherit; transition: border-color 0.2s;
  }
  .hc-dl-card:hover {
    border-color: rgba(216, 182, 111, 0.5);
  }
  .hc-dl-info { display: flex; align-items: center; gap: 16px; }
  .hc-dl-icon {
    width: 32px;
    height: 32px;
    object-fit: contain;
    flex-shrink: 0;
  }
  .hc-dl-text h4 { font-size: 14px; margin: 0 0 4px; }
  .hc-dl-text p { font-size: 11px; color: rgba(255, 255, 255, 0.4); margin: 0; }
  .hc-dl-download-icon {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    opacity: 0.6;
    transition: opacity 0.2s;
  }
  .hc-dl-card:hover .hc-dl-download-icon { opacity: 1; }
  /* --- Contact & Report Box --- */
  .hc-contact-box {
    background: #111111;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    padding: clamp(32px, 5vw, 64px);
    display: grid; grid-template-columns: 1fr; gap: 48px;
  }
  @media (min-width: 960px) { .hc-contact-box { grid-template-columns: 1fr 1fr; gap: 80px; } }

  .hc-contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-top: 32px; }
  .hc-c-item { 
    display: flex; 
    gap: 16px; 
    align-items: center;
    background: #1a1a1a;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 16px;
    border-radius: 12px;
    text-decoration: none;
    color: inherit;
    transition: background 0.2s, border-color 0.2s;
  }
  .hc-c-item:hover { background: #222222; border-color: rgba(216, 182, 111, 0.5); }
  .hc-c-icon {
    width: 24px; height: 24px; object-fit: contain;
    color: #d8b66f;
    flex-shrink: 0;
  }
  .hc-c-text h5 { font-size: 14px; margin: 0 0 4px; font-weight: 500; }
  .hc-c-text p { font-size: 12px; color: rgba(255, 255, 255, 0.5); margin: 0; }

  .hc-form-group { margin-bottom: 16px; position: relative; }
  .hc-form-group label { display: block; font-size: 11px; color: rgba(255, 255, 255, 0.6); margin-bottom: 8px; }
  .hc-form-input {
    width: 100%; background: #1a1a1a; border: 1px solid rgba(255, 255, 255, 0.05);
    padding: 12px 16px; color: #fff; border-radius: 8px; outline: none; font-family: "Inter"; font-size: 13px; transition: border-color 0.2s;
  }
  .hc-form-input:focus { border-color: #d8b66f; }
  .hc-form-input.is-invalid { border-color: #e57373; }
  .hc-form-input.is-invalid:focus { border-color: #ef5350; }
  .hc-form-error {
    color: #ffcdd2;
    font-size: 11px;
    margin-top: 6px;
    display: block;
  }
  .hc-form-success {
    background-color: rgba(34, 197, 94, 0.1);
    border: 1px solid rgba(34, 197, 94, 0.3);
    color: #a7f3d0;
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 13px;
    margin-bottom: 16px;
  }
  textarea.hc-form-input { min-height: 120px; resize: vertical; }
  .hc-btn-submit {
    width: 100%; background: #d8b66f; color: #000; padding: 14px; border: none;
    border-radius: 8px; font-weight: 600; cursor: pointer; transition: 0.2s;
  }
  .hc-btn-submit:hover:not(:disabled) { background: #e6c883; }
  .hc-btn-submit:disabled {
    background: #555;
    color: #999;
    cursor: not-allowed;
  }

  /* --- Section Wrapper for multi-part sections --- */
  .hc-section-wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px; /* Jarak antar sub-section */
  }

  /* --- Animation --- */
  .hc-section-reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    will-change: opacity, transform;
  }
  .hc-section-reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HelpCenter: React.FC = () => {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('.hc-section-reveal');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    sections.forEach((section, index) => {
      section.style.transitionDelay = `${index * 120}ms`;
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main className="hc-page">
        <style>{hcStyles}</style>

        <div className="hc-container">
          <div className="hc-section-reveal"><SearchHeader /></div>
          <div className="hc-section-reveal"><LayananUtama /></div>
          <div className="hc-section-reveal"><ArtikelStatus /></div>
          <div className="hc-section-reveal"><KategoriVideo /></div>
          <div className="hc-section-reveal"><FAQDownload /></div>
          <div className="hc-section-reveal"><HubungiLapor /></div>
        </div>
      </main>
      <ClosingSection />
      <Footer />
    </>
  );
};

export default HelpCenter;