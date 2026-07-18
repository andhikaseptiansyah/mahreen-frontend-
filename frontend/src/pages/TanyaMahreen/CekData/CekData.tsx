import { useEffect, useMemo } from "react";
import { ArrowLeft, ShieldCheck } from "lucide-react";

import Navbar from "../../../components/Navbar/Tanya-MahreenNavbar";
import ClosingSection from "../../../components/Cloasing-section/cloasing-section";
import Footer from "../../../components/Footer/Footer";
import {
  getKonsultasiDraft,
  getKonsultasiFiles,
  markKonsultasiReviewed,
} from "../../../services/konsultasiDraft";
import SteepProgres from "./SteepProgres";
import InformasiAnda from "./Sections/InformasiAnda";
import RingkasanBrief from "./Sections/RingkasanBrief";
import LampiranDokumen from "./Sections/LampiranDokumen";
import Button from "./Sections/Button";

const cekDataStyles = `
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap");

  @keyframes reviewPageIn {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes reviewGlowPulse {
    0%, 100% { box-shadow: 0 10px 28px rgba(225, 184, 102, 0.17), 0 0 0 rgba(225, 184, 102, 0); }
    50% { box-shadow: 0 13px 34px rgba(225, 184, 102, 0.3), 0 0 30px rgba(225, 184, 102, 0.22); }
  }

  .review-page,
  .review-page *,
  .review-page *::before,
  .review-page *::after {
    box-sizing: border-box;
  }

  .review-page {
    min-height: 100svh;
    overflow-x: hidden;
    background:
      radial-gradient(circle at 82% 12%, rgba(189, 143, 67, 0.045), transparent 29%),
      #0d0d0d;
    color: #f3eee5;
    font-family: "DM Sans", Arial, sans-serif;
  }

  .review-main {
    width: min(1180px, calc(100% - 44px));
    margin: 0 auto;
    padding: 132px 0 74px;
  }

  .review-reveal {
    opacity: 0;
    transform: translateY(24px) scale(0.994);
    filter: blur(3px);
    transition:
      opacity 700ms cubic-bezier(0.16, 1, 0.3, 1),
      transform 700ms cubic-bezier(0.16, 1, 0.3, 1),
      filter 580ms ease;
    transition-delay: var(--review-delay, 0ms);
    will-change: opacity, transform, filter;
  }

  .review-reveal.is-visible {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }

  .review-stepper {
    display: flex;
    align-items: center;
    width: min(680px, 100%);
    margin: 0 0 62px;
  }

  .review-stepper__item {
    display: flex;
    align-items: center;
    min-width: 0;
    color: #655f56;
  }

  .review-stepper__badge {
    display: grid;
    place-items: center;
    width: 31px;
    height: 31px;
    flex: 0 0 31px;
    border: 1px solid #302e2a;
    border-radius: 50%;
    color: #59554e;
    font-size: 12px;
    transition: 220ms ease;
  }

  .review-stepper__label {
    margin-left: 9px;
    color: inherit;
    font-size: 13px;
    white-space: nowrap;
  }

  .review-stepper__line {
    width: clamp(45px, 6.8vw, 93px);
    height: 1px;
    margin: 0 15px;
    background: #282723;
  }

  .review-stepper__item.is-complete,
  .review-stepper__item.is-active {
    color: #dbbd7c;
  }

  .review-stepper__item.is-complete .review-stepper__badge {
    border-color: #a98c52;
    color: #e0c17e;
    background: rgba(195, 153, 78, 0.06);
  }

  .review-stepper__item.is-active .review-stepper__badge {
    border-color: #f0cf89;
    background: #f1d394;
    color: #20170a;
    box-shadow: 0 0 24px rgba(239, 205, 137, 0.45);
  }

  .review-heading {
    max-width: 720px;
    margin-bottom: 47px;
  }

  .review-heading h1 {
    margin: 0;
    color: #f1cf8b;
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(38px, 4.4vw, 56px);
    font-weight: 600;
    line-height: 1.08;
    letter-spacing: -0.035em;
  }

  .review-heading p {
    max-width: 650px;
    margin: 17px 0 0;
    color: #bdb5aa;
    font-size: 15px;
    line-height: 1.65;
  }

  .review-content {
    display: grid;
    gap: 29px;
  }

  .review-card {
    border: 1px solid #292929;
    border-radius: 14px;
    background: rgba(16, 16, 16, 0.84);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.012);
    transition: border-color 220ms ease, box-shadow 220ms ease, transform 220ms ease;
  }

  .review-card:hover {
    border-color: rgba(232, 196, 128, 0.25);
    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.17), 0 0 28px rgba(226, 187, 111, 0.035);
  }

  .review-summary-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.72fr) minmax(250px, 0.82fr);
    gap: 29px;
  }

  .review-card--identity {
    min-height: 350px;
    padding: 39px 41px 35px;
  }

  .review-section-title {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 0;
    color: #e9c77f;
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(22px, 2.1vw, 28px);
    font-weight: 600;
    line-height: 1.25;
  }

  .review-section-title svg {
    width: 22px;
    height: 22px;
    flex: 0 0 22px;
    stroke-width: 1.7;
  }

  .review-identity-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 34px;
    margin-top: 37px;
  }

  .review-data-block {
    display: grid;
    gap: 9px;
  }

  .review-data-label,
  .review-metric-label {
    color: #817b73;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.12em;
    line-height: 1.35;
    text-transform: uppercase;
  }

  .review-data-block strong {
    max-width: 220px;
    color: #e8e0d6;
    font-family: "Playfair Display", Georgia, serif;
    font-size: 23px;
    font-weight: 500;
    line-height: 1.14;
  }

  .review-contact-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 7px 17px;
    margin-top: 22px;
    color: #8d877f;
    font-size: 12px;
  }

  .review-contact-grid span:not(:last-child)::after {
    content: "•";
    margin-left: 17px;
    color: #4b4843;
  }

  .review-divider {
    height: 1px;
    margin: 35px 0 29px;
    background: #282828;
  }

  .review-service-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 14px;
  }

  .review-service-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-height: 33px;
    padding: 0 14px;
    border: 1px solid rgba(213, 175, 99, 0.4);
    border-radius: 999px;
    background: rgba(194, 151, 70, 0.09);
    color: #d9bb7d;
    font-size: 13px;
    box-shadow: 0 0 16px rgba(227, 190, 116, 0.035);
  }

  .review-side-stack {
    display: grid;
    gap: 29px;
  }

  .review-metric-card {
    min-height: 160px;
    padding: 34px 35px;
    background: #1d1d1d;
  }

  .review-metric-value {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 16px;
  }

  .review-metric-value svg {
    width: 20px;
    height: 20px;
    flex: 0 0 20px;
    color: #e8c77f;
    stroke-width: 1.7;
  }

  .review-metric-value strong {
    color: #e9d6b3;
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(20px, 2.1vw, 25px);
    font-weight: 500;
    line-height: 1.2;
  }

  .review-metric-card em {
    display: block;
    margin: 7px 0 0 30px;
    color: #77716a;
    font-family: Georgia, serif;
    font-size: 12px;
  }

  .review-content > .review-card {
    padding: 37px 40px 40px;
  }

  .review-brief-box {
    margin-top: 29px;
    padding: 25px 27px;
    border: 1px solid #292929;
    border-radius: 8px;
    background: #0d0d0d;
  }

  .review-brief-box p {
    margin: 0;
    color: #c8c0b5;
    font-size: 14px;
    line-height: 1.75;
    white-space: pre-line;
  }

  .review-brief-box p + p {
    margin-top: 14px;
  }

  .review-brief-subtitle {
    display: block;
    margin: 22px 0 8px;
    color: #d8b975;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.11em;
    text-transform: uppercase;
  }

  .review-attachment-list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 28px;
  }

  .review-file-card {
    display: flex;
    align-items: center;
    gap: 14px;
    width: min(310px, 100%);
    min-height: 72px;
    padding: 13px 17px;
    border: 1px solid #3b3b3b;
    border-radius: 7px;
    background: #2b2b2b;
    color: #e5dfd6;
    font-family: inherit;
    text-align: left;
    cursor: pointer;
    transition: transform 190ms ease, border-color 190ms ease, box-shadow 190ms ease, background 190ms ease;
  }

  .review-file-card:hover:not(:disabled),
  .review-file-card:focus-visible:not(:disabled) {
    transform: translateY(-2px);
    border-color: rgba(236, 201, 133, 0.65);
    background: #303030;
    box-shadow: 0 0 25px rgba(233, 197, 128, 0.16);
    outline: none;
  }

  .review-file-card:disabled {
    cursor: default;
    opacity: 0.84;
  }

  .review-file-icon {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    flex: 0 0 44px;
    border-radius: 4px;
    background: #0b0b0b;
    color: #e7c77f;
  }

  .review-file-icon svg {
    width: 22px;
    height: 22px;
    stroke-width: 1.7;
  }

  .review-file-copy {
    display: grid;
    min-width: 0;
    gap: 3px;
  }

  .review-file-copy strong {
    overflow: hidden;
    color: #ddd7ce;
    font-size: 13px;
    font-weight: 500;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .review-file-copy small {
    color: #8f8a83;
    font-size: 11px;
  }

  .review-empty-copy {
    color: #817b73;
    font-size: 13px;
  }

  .review-empty-copy--attachment {
    margin: 28px 0 0;
  }

  .review-actions {
    padding: 29px 0 5px;
  }

  .review-action-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 18px;
  }

  .review-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-height: 53px;
    padding: 0 29px;
    border-radius: 999px;
    font-family: inherit;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 190ms ease, border-color 190ms ease, box-shadow 190ms ease, filter 190ms ease, background 190ms ease;
  }

  .review-button svg {
    width: 17px;
    height: 17px;
    stroke-width: 1.8;
    transition: transform 190ms ease;
  }

  .review-button--secondary {
    min-width: 150px;
    border: 1px solid #454545;
    background: transparent;
    color: #d8d1c8;
    box-shadow: 0 0 0 rgba(230, 194, 125, 0);
  }

  .review-button--secondary:hover,
  .review-button--secondary:focus-visible {
    transform: translateY(-2px);
    border-color: rgba(237, 202, 134, 0.67);
    background: rgba(231, 193, 119, 0.05);
    box-shadow: 0 0 26px rgba(230, 194, 125, 0.15);
    outline: none;
  }

  .review-button--primary {
    min-width: 170px;
    border: 1px solid #d9b66f;
    background: linear-gradient(90deg, #d5b064, #e8c77f);
    color: #241a0b;
    box-shadow: 0 10px 28px rgba(225, 184, 102, 0.24), 0 0 22px rgba(225, 184, 102, 0.13);
    animation: reviewGlowPulse 2.8s ease-in-out infinite;
  }

  .review-button--primary:hover,
  .review-button--primary:focus-visible {
    transform: translateY(-3px) scale(1.01);
    filter: brightness(1.06);
    box-shadow: 0 14px 38px rgba(225, 184, 102, 0.39), 0 0 38px rgba(225, 184, 102, 0.3);
    outline: none;
  }

  .review-button--primary:hover svg {
    transform: translateX(4px);
  }

  .review-security-copy svg {
    width: 13px;
    height: 13px;
    flex: 0 0 13px;
  }

  .review-security-copy {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin: 70px 0 0;
    color: #5f5a53;
    font-size: 11px;
    text-align: center;
  }

  .review-empty-state {
    display: grid;
    place-items: center;
    min-height: 60svh;
    text-align: center;
    animation: reviewPageIn 600ms ease both;
  }

  .review-empty-state__card {
    width: min(520px, 100%);
    padding: 48px 38px;
    border: 1px solid #2a2a2a;
    border-radius: 18px;
    background: #111111;
  }

  .review-empty-state svg {
    width: 44px;
    height: 44px;
    color: #e7c77f;
    stroke-width: 1.5;
  }

  .review-empty-state h1 {
    margin: 20px 0 10px;
    color: #efd08d;
    font-family: "Playfair Display", Georgia, serif;
    font-size: 34px;
  }

  .review-empty-state p {
    margin: 0 auto 28px;
    color: #9d968d;
    line-height: 1.65;
  }

  @media (max-width: 860px) {
    .review-main { padding-top: 116px; }
    .review-summary-grid { grid-template-columns: 1fr; }
    .review-side-stack { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .review-metric-card { min-height: 145px; }
  }

  @media (max-width: 680px) {
    .review-main { width: min(100% - 30px, 1180px); padding: 104px 0 54px; }
    .review-stepper { margin-bottom: 46px; overflow-x: auto; padding-bottom: 6px; }
    .review-stepper__line { width: 34px; margin: 0 10px; }
    .review-stepper__label { font-size: 11px; }
    .review-heading { margin-bottom: 35px; }
    .review-heading h1 { font-size: 37px; }
    .review-heading p { font-size: 14px; }
    .review-card--identity,
    .review-content > .review-card { padding: 29px 24px 30px; }
    .review-identity-grid { grid-template-columns: 1fr; gap: 24px; margin-top: 30px; }
    .review-data-block strong { max-width: none; font-size: 21px; }
    .review-contact-grid { display: grid; gap: 6px; }
    .review-contact-grid span::after { display: none; }
    .review-side-stack { grid-template-columns: 1fr; gap: 18px; }
    .review-metric-card { min-height: auto; padding: 28px 25px; }
    .review-attachment-list { display: grid; }
    .review-file-card { width: 100%; }
    .review-action-buttons { display: grid; grid-template-columns: 1fr; }
    .review-button { width: 100%; }
    .review-button--primary { grid-row: 1; }
    .review-security-copy { margin-top: 45px; }
  }

  @media (max-width: 440px) {
    .review-stepper__label { display: none; }
    .review-stepper__line { width: 58px; }
    .review-heading h1 { font-size: 33px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .review-reveal,
    .review-button--primary,
    .review-empty-state {
      animation: none;
      opacity: 1;
      transform: none;
      filter: none;
    }

    .review-reveal,
    .review-button,
    .review-file-card,
    .review-card {
      transition: none;
    }
  }
`;

const CekData = () => {
  const draft = useMemo(() => getKonsultasiDraft(), []);
  const actualFiles = useMemo(() => getKonsultasiFiles(), []);

  useEffect(() => {
    document.title = "Periksa Kembali | Tanya Mahreen";
  }, []);

  useEffect(() => {
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>(".review-reveal"),
    );

    revealItems.forEach((item, index) => {
      item.style.setProperty("--review-delay", `${Math.min(index * 75, 360)}ms`);
    });

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const handleEdit = () => {
    window.location.hash = "/tanya-mahreen/konsultasi";
  };

  const handleContinue = () => {
    markKonsultasiReviewed();
    window.location.hash = "/tanya-mahreen/konsultasi/selesai";
  };

  return (
    <div className="review-page">
      <style data-component="cek-data-konsultasi">{cekDataStyles}</style>
      <Navbar />

      <main className="review-main">
        {!draft ? (
          <section className="review-empty-state">
            <div className="review-empty-state__card">
              <ShieldCheck aria-hidden="true" />
              <h1>Belum Ada Data</h1>
              <p>
                Isi form konsultasi terlebih dahulu agar informasi proyek dapat
                diperiksa pada halaman ini.
              </p>
              <button className="review-button review-button--primary" type="button" onClick={handleEdit}>
                <ArrowLeft aria-hidden="true" />
                <span>Kembali ke Form</span>
              </button>
            </div>
          </section>
        ) : (
          <>
            <SteepProgres currentStep={2} />

            <header className="review-heading review-reveal">
              <h1>Periksa Kembali Informasi Anda</h1>
              <p>
                Pastikan semua detail proyek yang Anda sampaikan sudah akurat
                sebelum kami memproses permintaan Anda ke tahap selanjutnya.
              </p>
            </header>

            <div className="review-content">
              <InformasiAnda draft={draft} />
              <RingkasanBrief kebutuhan={draft.kebutuhan} notes={draft.notes} />
              <LampiranDokumen files={draft.files} actualFiles={actualFiles} />
              <Button onEdit={handleEdit} onContinue={handleContinue} />
            </div>
          </>
        )}
      </main>

      <ClosingSection />
      <Footer />
    </div>
  );
};

export default CekData;
