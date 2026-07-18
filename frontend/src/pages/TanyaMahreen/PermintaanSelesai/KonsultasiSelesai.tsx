import { useEffect, useMemo } from "react";
import { Check, MessageSquareText } from "lucide-react";

import Navbar from "../../../components/Navbar/Tanya-MahreenNavbar";
import ClosingSection from "../../../components/Cloasing-section/cloasing-section";
import Footer from "../../../components/Footer/Footer";
import {
  getKonsultasiDraft,
  isKonsultasiReviewed,
  type KonsultasiDraft,
} from "../../../services/konsultasiDraft";

const selesaiStyles = `
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap");

  @keyframes selesaiContentIn {
    0% {
      opacity: 0;
      transform: translateY(24px) scale(.985);
      filter: blur(5px);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
      filter: blur(0);
    }
  }

  @keyframes selesaiIconIn {
    0% {
      opacity: 0;
      transform: scale(.68) rotate(-9deg);
    }
    70% {
      opacity: 1;
      transform: scale(1.07) rotate(2deg);
    }
    100% {
      opacity: 1;
      transform: scale(1) rotate(0);
    }
  }

  @keyframes selesaiGlowPulse {
    0%, 100% {
      box-shadow:
        0 12px 30px rgba(239, 199, 119, .22),
        0 0 0 rgba(239, 199, 119, 0);
    }
    50% {
      box-shadow:
        0 16px 38px rgba(239, 199, 119, .34),
        0 0 34px rgba(239, 199, 119, .22);
    }
  }

  .konsultasi-selesai-page,
  .konsultasi-selesai-page *,
  .konsultasi-selesai-page *::before,
  .konsultasi-selesai-page *::after {
    box-sizing: border-box;
  }

  .konsultasi-selesai-page {
    min-height: 100svh;
    overflow-x: hidden;
    background: #0d0d0d;
    color: #f5eee2;
    font-family: "DM Sans", Arial, sans-serif;
  }

  .konsultasi-selesai-main {
    position: relative;
    isolation: isolate;
    display: grid;
    place-items: center;
    min-height: 720px;
    padding: 150px 24px 118px;
    overflow: hidden;
    background:
      radial-gradient(circle at 50% 44%, rgba(207, 160, 82, .055), transparent 32%),
      #0d0d0d;
  }

  .konsultasi-selesai-main::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    background:
      linear-gradient(90deg, transparent 0 49.9%, rgba(255,255,255,.008) 50%, transparent 50.1%),
      linear-gradient(rgba(255,255,255,.006) 1px, transparent 1px);
    background-size: 100% 100%, 100% 92px;
    mask-image: linear-gradient(to bottom, transparent, #000 20%, #000 80%, transparent);
  }

  .konsultasi-selesai-content {
    display: grid;
    justify-items: center;
    width: min(650px, 100%);
    text-align: center;
    animation: selesaiContentIn 780ms cubic-bezier(.16, 1, .3, 1) both;
  }

  .konsultasi-selesai-icon {
    display: grid;
    place-items: center;
    width: 74px;
    height: 74px;
    border: 1.4px solid rgba(225, 187, 111, .65);
    border-radius: 50%;
    background: rgba(232, 191, 111, .025);
    color: #f0cd86;
    box-shadow: 0 0 28px rgba(219, 172, 88, .055);
    animation: selesaiIconIn 760ms 90ms cubic-bezier(.16, 1, .3, 1) both;
  }

  .konsultasi-selesai-icon svg {
    width: 37px;
    height: 37px;
    stroke-width: 2;
  }

  .konsultasi-selesai-title {
    margin: 28px 0 0;
    color: #e6c57f;
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(19px, 2.15vw, 27px);
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: -.018em;
  }

  .konsultasi-selesai-description {
    max-width: 500px;
    margin: 15px auto 0;
    color: #b6aea3;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.75;
  }

  .konsultasi-selesai-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 11px;
    min-width: 245px;
    min-height: 56px;
    margin-top: 78px;
    padding: 15px 28px;
    border: 1px solid #edc77e;
    border-radius: 999px;
    background: linear-gradient(105deg, #f0ce8b 0%, #ffe3a9 54%, #efc878 100%);
    color: #2b1f0d;
    font-family: inherit;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    animation: selesaiGlowPulse 2.8s ease-in-out infinite;
    transition:
      transform 210ms cubic-bezier(.16, 1, .3, 1),
      box-shadow 210ms ease,
      filter 210ms ease;
  }

  .konsultasi-selesai-button svg {
    width: 17px;
    height: 17px;
    stroke-width: 1.8;
  }

  .konsultasi-selesai-button:hover,
  .konsultasi-selesai-button:focus-visible {
    transform: translateY(-3px) scale(1.015);
    filter: brightness(1.06);
    box-shadow:
      0 18px 42px rgba(239, 199, 119, .42),
      0 0 42px rgba(239, 199, 119, .28);
    outline: none;
  }

  .konsultasi-selesai-helper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin: 20px 0 0;
    color: #8f887e;
    font-size: 11px;
    line-height: 1.5;
  }

  .konsultasi-selesai-helper svg {
    width: 13px;
    height: 13px;
    color: #d7b66f;
    stroke-width: 1.7;
  }

  .konsultasi-selesai-home {
    display: inline-flex;
    margin-top: 11px;
    color: #c5a86e;
    font-size: 11px;
    text-decoration: none;
    transition: color 180ms ease, text-shadow 180ms ease;
  }

  .konsultasi-selesai-home:hover,
  .konsultasi-selesai-home:focus-visible {
    color: #f1d294;
    text-shadow: 0 0 18px rgba(235, 198, 126, .38);
    outline: none;
  }

  @media (max-width: 640px) {
    .konsultasi-selesai-main {
      min-height: 650px;
      padding: 124px 22px 92px;
    }

    .konsultasi-selesai-icon {
      width: 68px;
      height: 68px;
    }

    .konsultasi-selesai-icon svg {
      width: 34px;
      height: 34px;
    }

    .konsultasi-selesai-title {
      font-size: 22px;
    }

    .konsultasi-selesai-description {
      max-width: 390px;
      font-size: 12px;
    }

    .konsultasi-selesai-button {
      width: min(310px, 100%);
      margin-top: 62px;
    }

    .konsultasi-selesai-helper {
      align-items: flex-start;
      max-width: 330px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .konsultasi-selesai-content,
    .konsultasi-selesai-icon,
    .konsultasi-selesai-button {
      animation: none;
    }

    .konsultasi-selesai-button,
    .konsultasi-selesai-home {
      transition: none;
    }
  }
`;

const formatProjectMessage = (draft: KonsultasiDraft | null) => {
  if (!draft) {
    return "Halo Mahreen Indonesia, saya ingin melanjutkan konsultasi bisnis.";
  }

  const selectedServices = draft.services.length
    ? draft.services.join(", ")
    : "Belum ditentukan";

  return [
    "Halo Mahreen Indonesia, saya ingin melanjutkan permintaan konsultasi berikut:",
    "",
    `Nama: ${draft.clientInfo.nama || "-"}`,
    `Perusahaan/Brand: ${draft.clientInfo.perusahaan || "-"}`,
    `Email: ${draft.clientInfo.email || "-"}`,
    `Nomor WhatsApp: ${draft.clientInfo.whatsapp || "-"}`,
    `Domisili: ${draft.clientInfo.kota || "-"}`,
    `Layanan: ${selectedServices}`,
    `Budget: ${draft.budget || "-"}`,
    `Target Penyelesaian: ${draft.target || "-"}`,
    "",
    `Ringkasan kebutuhan: ${draft.kebutuhan || "-"}`,
    draft.notes ? `Catatan tambahan: ${draft.notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");
};

const KonsultasiSelesai = () => {
  const draft = useMemo(() => getKonsultasiDraft(), []);
  const hasBeenReviewed = useMemo(() => isKonsultasiReviewed(), []);
  const whatsappUrl = useMemo(() => {
    const message = formatProjectMessage(draft);
    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  }, [draft]);

  useEffect(() => {
    document.title = "Konsultasi Siap Dilanjutkan | Tanya Mahreen";

    if (!draft) {
      window.location.hash = "/tanya-mahreen/konsultasi";
      return;
    }

    if (!hasBeenReviewed) {
      window.location.hash = "/tanya-mahreen/konsultasi/cek-data";
    }
  }, [draft, hasBeenReviewed]);

  if (!draft || !hasBeenReviewed) {
    return null;
  }

  return (
    <div className="konsultasi-selesai-page">
      <style data-component="konsultasi-selesai">{selesaiStyles}</style>
      <Navbar />

      <main className="konsultasi-selesai-main">
        <section className="konsultasi-selesai-content" aria-labelledby="konsultasi-selesai-title">
          <span className="konsultasi-selesai-icon" aria-hidden="true">
            <Check />
          </span>

          <h1 className="konsultasi-selesai-title" id="konsultasi-selesai-title">
            Data Konsultasi Berhasil Dikonfirmasi
          </h1>

          <p className="konsultasi-selesai-description">
            Informasi Anda sudah melewati tahap pemeriksaan. Lanjutkan ke
            WhatsApp untuk mengirimkan detail konsultasi kepada tim Mahreen.
          </p>

          <a
            className="konsultasi-selesai-button"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <MessageSquareText aria-hidden="true" />
            <span>Lanjut ke WhatsApp</span>
            <span aria-hidden="true">→</span>
          </a>

          <p className="konsultasi-selesai-helper">
            <MessageSquareText aria-hidden="true" />
            <span>WhatsApp akan terbuka dengan ringkasan proyek yang sudah terisi otomatis.</span>
          </p>

          <a className="konsultasi-selesai-home" href="#/">
            Kembali ke Beranda
          </a>
        </section>
      </main>

      <ClosingSection />
      <Footer />
    </div>
  );
};

export default KonsultasiSelesai;
