// src/pages/SyaratKetentuan/SyaratKetentuan.tsx
import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HeaderSyarat from './sections/HeaderSyarat';
import KontenSyarat from './sections/KontenSyarat';
import CTASyarat from './sections/CTASyarat';
import ClosingSection from '../../components/Cloasing-section/cloasing-section';
import Footer from '../../components/Footer/Footer';

const SyaratKetentuan: React.FC = () => {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('.sk-reveal');
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
      section.style.transitionDelay = `${index * 100}ms`;
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <style>
        {`
          .sk-container {
            background-color: #050505;
            color: #ffffff;
            font-family: 'Inter', sans-serif;
            padding: calc(var(--navbar-height, 78px) + 60px) 5% 60px;
            line-height: 1.6;
          }

          /* --- HEADER SECTION (LEFT ALIGNED) --- */
          .sk-header {
            text-align: left;
            max-width: 800px;
            margin: 0 0 60px 0; /* Rata Kiri */
          }

          .sk-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background-color: rgba(200, 169, 126, 0.1);
            color: #C8A97E;
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.5px;
            margin-bottom: 24px;
            border: 1px solid rgba(200, 169, 126, 0.3);
          }

          .sk-title {
            font-size: 48px;
            font-weight: 700;
            margin-bottom: 16px;
            letter-spacing: -0.5px;
          }

          .sk-subtitle {
            color: #A0A0A0;
            font-size: 15px;
            max-width: 600px;
          }

          /* --- MAIN CONTENT & SIDEBAR --- */
          .sk-main-layout {
            display: flex;
            gap: 60px;
            max-width: 1200px;
            margin: 0 auto;
          }

          .sk-sidebar {
            width: 280px;
            flex-shrink: 0;
          }

          .sk-toc-box {
            background-color: #0A0A0A;
            border: 1px solid #1A1A1A;
            border-radius: 12px;
            padding: 24px;
            position: sticky;
            top: calc(var(--navbar-height, 78px) + 22px);
          }

          .sk-toc-box h3 {
            color: #C8A97E;
            font-size: 16px;
            margin-bottom: 4px;
            font-weight: 600;
          }

          .sk-toc-box p {
            color: #666666;
            font-size: 12px;
            margin-bottom: 24px;
          }

          .sk-toc-menu {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .sk-toc-menu a {
            color: #A0A0A0;
            text-decoration: none;
            font-size: 13px;
            display: flex;
            align-items: center;
            gap: 12px;
            transition: 0.3s;
          }

          .sk-toc-icon {
            width: 14px;
            height: 14px;
            stroke: #666666;
            transition: stroke 0.3s;
          }

          .sk-toc-menu a:hover,
          .sk-toc-menu a.active {
            color: #ffffff;
          }
          
          .sk-toc-menu a:hover .sk-toc-icon,
          .sk-toc-menu a.active .sk-toc-icon {
            stroke: #C8A97E;
          }

          /* --- CONTENT SECTIONS --- */
          .sk-content {
            flex-grow: 1;
            scroll-behavior: smooth;
          }

          .sk-section {
            margin-bottom: 60px;
            scroll-margin-top: calc(var(--navbar-height, 78px) + 24px); 
          }

          /* Judul Section (Angka) */
          .sk-section-title {
            font-size: 28px;
            color: #ffffff;
            margin-bottom: 24px;
            font-weight: 600;
          }

          .sk-text {
            color: #A0A0A0;
            font-size: 14px;
            margin: 0;
          }

          /* --- VARIASI BOX & CARD --- */
          /* 1. Box Standar (Tentang, HKI) */
          .sk-box-standard {
            background-color: #0A0A0A;
            border: 1px solid #1A1A1A;
            border-radius: 12px;
            padding: 24px;
          }

          /* 2. Definisi Layout */
          .sk-def-row {
            display: flex;
            gap: 24px;
            margin-bottom: 20px;
            align-items: flex-start;
          }
          .sk-def-row:last-child { margin-bottom: 0; }
          .sk-def-term {
            width: 140px;
            flex-shrink: 0;
            color: #C8A97E;
            font-weight: 600;
            font-size: 14px;
          }
          .sk-def-desc {
            color: #A0A0A0;
            font-size: 14px;
          }

          /* 3. Box Persetujuan (Quote) */
          .sk-box-quote {
            background-color: #0A0A0A;
            border-left: 3px solid #C8A97E;
            padding: 20px 24px;
            border-radius: 0 8px 8px 0;
          }
          .sk-box-quote p {
            color: #A0A0A0;
            font-size: 14px;
            font-style: italic;
            margin: 0;
          }

          /* 4. List Hak & Kewajiban */
          .sk-list-check {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .sk-list-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
          }
          .sk-list-icon {
            color: #C8A97E;
            flex-shrink: 0;
            margin-top: 2px;
          }
          .sk-list-text {
            font-size: 14px;
            color: #A0A0A0;
          }
          .sk-list-text strong {
            color: #ffffff;
            font-weight: 600;
          }

          /* 5. Grid 4 Layanan */
          .sk-grid-4 {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
          }
          .sk-card-mini {
            background-color: #0A0A0A;
            border: 1px solid #1A1A1A;
            border-radius: 12px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          .sk-card-mini svg {
            color: #C8A97E;
            width: 24px;
            height: 24px;
          }
          .sk-card-mini h4 {
            margin: 0;
            font-size: 14px;
            color: #ffffff;
          }
          .sk-card-mini p {
            margin: 0;
            font-size: 12px;
            color: #666666;
          }

          /* 6. Grid Pembayaran (2 Kolom) */
          .sk-grid-2 {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .sk-card-pay {
            background-color: #0A0A0A;
            border: 1px solid #1A1A1A;
            border-radius: 12px;
            padding: 24px;
          }
          .sk-pay-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
          }
          .sk-pay-header h4 {
            margin: 0;
            font-size: 15px;
            color: #ffffff;
          }
          .sk-pay-header svg {
            color: #C8A97E;
            width: 20px;
            height: 20px;
          }

          /* HKI Bullet List */
          .sk-bullet-list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            padding-left: 20px;
            margin: 16px 0;
          }
          .sk-bullet-list li {
            color: #A0A0A0;
            font-size: 14px;
          }
          .sk-bullet-list li::marker {
            color: #C8A97E;
          }

          /* 8. Box Larangan (Merah) */
          .sk-danger-box {
            background-color: rgba(255, 60, 60, 0.03);
            border: 1px solid rgba(255, 60, 60, 0.15);
            border-radius: 8px;
            padding: 16px 20px;
            display: flex;
            align-items: flex-start;
            gap: 16px;
            margin-bottom: 12px;
          }
          .sk-danger-box svg {
            color: #ff5555;
            width: 20px;
            height: 20px;
            flex-shrink: 0;
            margin-top: 2px;
          }
          .sk-danger-box p {
            margin: 0;
            font-size: 14px;
            color: #A0A0A0;
          }

          /* 9. Hubungi Kami Layout */
          .sk-contact-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
          }
          .sk-contact-info {
            display: flex;
            flex-direction: column;
            gap: 24px;
          }
          .sk-info-item {
            display: flex;
            align-items: flex-start;
            gap: 16px;
          }
          .sk-info-icon {
            background-color: rgba(200, 169, 126, 0.1);
            padding: 12px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .sk-info-icon svg {
            color: #C8A97E;
            width: 18px;
            height: 18px;
          }
          .sk-info-text p {
            margin: 0 0 4px 0;
            font-size: 11px;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .sk-info-text h4 {
            margin: 0;
            font-size: 15px;
            color: #ffffff;
            font-weight: 500;
          }
          .sk-contact-card {
            background-color: #0A0A0A;
            border: 1px solid #1A1A1A;
            border-radius: 12px;
            padding: 24px;
          }
          .sk-contact-card h4 {
            margin: 0 0 8px 0;
            font-size: 16px;
            color: #ffffff;
          }
          .sk-contact-card p {
            margin: 0 0 20px 0;
            font-size: 13px;
            color: #888;
          }
          .sk-btn-whatsapp {
            background-color: #C8A97E;
            color: #000;
            border: none;
            padding: 10px 20px;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: opacity 0.3s;
          }
          .sk-btn-whatsapp:hover { opacity: 0.8; }

          /* --- KEBIJAKAN TERKAIT (BOTTOM CTA) --- */
          .sk-related-section {
            max-width: 1200px;
            margin: 80px auto 0 auto;
            padding-top: 60px;
            border-top: 1px solid #1A1A1A;
          }
          .sk-related-section h3 {
            font-size: 24px;
            color: #ffffff;
            margin-bottom: 32px;
          }
          .sk-grid-3 {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
          .sk-related-card {
            background-color: #0A0A0A;
            border: 1px solid #1A1A1A;
            border-radius: 12px;
            padding: 24px;
            transition: border-color 0.3s;
          }
          .sk-related-card:hover {
            border-color: #333333;
          }
          .sk-related-card svg {
            color: #C8A97E;
            width: 24px;
            height: 24px;
            margin-bottom: 16px;
          }
          .sk-related-card h4 {
            margin: 0 0 8px 0;
            font-size: 16px;
            color: #ffffff;
          }
          .sk-related-card p {
            margin: 0;
            font-size: 13px;
            color: #888;
          }

          /* --- ANIMATION --- */
          .sk-reveal {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }
          .sk-reveal.is-visible {
            opacity: 1;
            transform: translateY(0);
          }

          /* --- RESPONSIVE --- */
          @media (max-width: 992px) {
            .sk-main-layout { flex-direction: column; gap: 40px; }
            .sk-sidebar { width: 100%; }
            .sk-toc-box { position: static; }
            .sk-grid-4 { grid-template-columns: repeat(2, 1fr); }
            .sk-grid-3 { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 768px) {
            .sk-title { font-size: 32px; }
            .sk-def-row { flex-direction: column; gap: 8px; }
            .sk-grid-4, .sk-grid-2, .sk-grid-3, .sk-contact-layout { grid-template-columns: 1fr; }
            .sk-bullet-list { grid-template-columns: 1fr; }
          }
        `}
      </style>

      <main>
        <div className="sk-container">
          {/* Header dibungkus div max-width agar sejajar dengan sidebar */}
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="sk-reveal"><HeaderSyarat /></div>
          </div>
          <div className="sk-reveal"><KontenSyarat /></div>
          <div className="sk-reveal"><CTASyarat/></div>
        </div>
      </main>
      <ClosingSection />
      <Footer />
    </>
  );
};

export default SyaratKetentuan;