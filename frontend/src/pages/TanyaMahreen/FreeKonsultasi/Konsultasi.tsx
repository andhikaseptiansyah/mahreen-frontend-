import { useEffect, useState, type FormEvent } from "react";
import { BadgeCheck } from "lucide-react";

import Navbar from "../../../components/Navbar/Tanya-MahreenNavbar";
import ClosingSection from "../../../components/Cloasing-section/cloasing-section";
import Footer from "../../../components/Footer/Footer";
import meetingImage from "../../../assets/TanyaMahreen/FreeKonsultasi/bgound-meeting.png";
import avatarOne from "../../../assets/Internship/maya-kania.jpg";
import avatarTwo from "../../../assets/Internship/raka-pratama.jpg";
import avatarThree from "../../../assets/Internship/dimas-andre.jpg";

import SteepProgres from "./Sections/SteepProgres";
import InformasiData from "./Sections/InformasiData";
import Layanan from "./Sections/Layanan";
import CeritakanKebutuhan from "./Sections/CeritakanKebutuhan";
import Budget from "./Sections/Budget";
import TargetPenyelesaian from "./Sections/TargetPenyelesaian";
import UploadReferensi from "./Sections/UploadReferensi";
import KurikulumTambahan from "./Sections/KurikulumTambahan";
import ButtunKirim from "./Sections/ButtunKirim";
import {
  getKonsultasiDraft,
  getKonsultasiFiles,
  saveKonsultasiDraft,
} from "../../../services/konsultasiDraft";

const konsultasiStyles = `
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap");

  @keyframes konsultasiFadeUp {
    from { opacity: 0; transform: translateY(26px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes konsultasiFadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes konsultasiGlowPulse {
    0%, 100% { box-shadow: 0 0 0 rgba(239, 205, 138, 0); }
    50% { box-shadow: 0 0 28px rgba(239, 205, 138, 0.24); }
  }

  @keyframes konsultasiToastIn {
    from { opacity: 0; transform: translate(-50%, 18px); }
    to { opacity: 1; transform: translate(-50%, 0); }
  }

  .konsultasi-page,
  .konsultasi-page *,
  .konsultasi-page *::before,
  .konsultasi-page *::after {
    box-sizing: border-box;
  }

  .konsultasi-page {
    width: 100%;
    min-height: 100svh;
    margin: 0;
    overflow-x: hidden;
    background: #0c0c0c;
    color: #ffffff;
    font-family: "DM Sans", Arial, sans-serif;
  }

  .konsultasi-hero {
    position: relative;
    isolation: isolate;
    display: flex;
    align-items: center;
    min-height: 100svh;
    padding: 118px clamp(32px, 6vw, 88px) 64px;
    overflow: hidden;
    background:
      radial-gradient(circle at 76% 34%, rgba(183, 139, 70, 0.08), transparent 28%),
      #0b0b0b;
  }

  .konsultasi-hero::before {
    content: "";
    position: absolute;
    inset: 78px 0 auto;
    z-index: -1;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(231, 196, 131, 0.08), transparent);
  }

  .konsultasi-hero__container {
    display: grid;
    grid-template-columns: minmax(0, 0.98fr) minmax(430px, 0.92fr);
    align-items: center;
    gap: clamp(48px, 7vw, 96px);
    width: min(1240px, 100%);
    margin: 0 auto;
  }

  .konsultasi-hero__content {
    position: relative;
    z-index: 2;
    max-width: 570px;
  }

  .konsultasi-hero__eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 23px;
    margin: 0 0 25px;
    padding: 5px 11px;
    border: 1px solid rgba(225, 190, 125, 0.43);
    border-radius: 999px;
    background: rgba(106, 79, 39, 0.16);
    color: #e7c783;
    font-size: 10px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 1px;
    text-transform: uppercase;
    animation: konsultasiFadeUp 700ms cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .konsultasi-hero__eyebrow::before {
    content: "";
    width: 6px;
    height: 6px;
    flex: 0 0 6px;
    border-radius: 50%;
    background: #f0d38c;
    box-shadow: 0 0 12px rgba(240, 211, 140, 0.62);
  }

  .konsultasi-hero__title {
    max-width: 510px;
    margin: 0;
    color: #f0cf8d;
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(58px, 5.7vw, 82px);
    font-weight: 600;
    line-height: 0.96;
    letter-spacing: -0.048em;
    text-wrap: balance;
    animation: konsultasiFadeUp 800ms 90ms cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .konsultasi-hero__description {
    max-width: 520px;
    margin: 25px 0 0;
    color: rgba(255, 255, 255, 0.72);
    font-size: 15px;
    font-weight: 400;
    line-height: 1.62;
    animation: konsultasiFadeUp 800ms 170ms cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .konsultasi-hero__proof {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-top: 34px;
    animation: konsultasiFadeUp 800ms 250ms cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .konsultasi-hero__avatars {
    display: flex;
    align-items: center;
    padding-left: 4px;
  }

  .konsultasi-hero__avatar {
    width: 34px;
    height: 34px;
    margin-left: -8px;
    overflow: hidden;
    border: 2px solid #0b0b0b;
    border-radius: 50%;
    background: #1b1b1b;
  }

  .konsultasi-hero__avatar:first-child { margin-left: 0; }

  .konsultasi-hero__avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: saturate(0.75) contrast(1.05);
  }

  .konsultasi-hero__proof-text {
    color: rgba(255, 255, 255, 0.76);
    font-size: 13px;
    font-weight: 600;
  }

  .konsultasi-hero__proof-text strong { color: #efd083; font-weight: 700; }

  .konsultasi-hero__visual {
    position: relative;
    min-width: 0;
    animation: konsultasiFadeIn 900ms 140ms ease both;
  }

  .konsultasi-hero__image-frame {
    position: relative;
    min-height: 400px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    background: #111111;
    box-shadow: 0 30px 70px rgba(0, 0, 0, 0.36);
  }

  .konsultasi-hero__image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transform: scale(1.035);
    filter: brightness(0.64) saturate(0.72) sepia(0.1) contrast(1.03) blur(0.1px);
  }

  .konsultasi-hero__image-frame::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    background:
      linear-gradient(90deg, rgba(2, 2, 2, 0.25) 0%, transparent 44%, rgba(2, 2, 2, 0.12) 100%),
      linear-gradient(180deg, rgba(0, 0, 0, 0.12) 0%, transparent 43%, rgba(0, 0, 0, 0.34) 100%);
    pointer-events: none;
  }

  .konsultasi-hero__image-frame::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 2;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(238, 204, 143, 0.025);
    pointer-events: none;
  }

  .konsultasi-hero__quote {
    position: absolute;
    z-index: 3;
    left: 28px;
    bottom: 26px;
    width: min(292px, calc(100% - 56px));
    padding: 18px 20px 17px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(10, 10, 10, 0.94);
    box-shadow: 0 18px 46px rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
  }

  .konsultasi-hero__quote-icon {
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    margin-bottom: 8px;
    color: #e7c783;
  }

  .konsultasi-hero__quote-icon svg { width: 19px; height: 19px; stroke-width: 1.8; }

  .konsultasi-hero__quote-text {
    margin: 0;
    color: rgba(255, 255, 255, 0.82);
    font-size: 13px;
    line-height: 1.45;
  }

  .konsultasi-hero__quote-author {
    margin: 8px 0 0;
    color: #e6c67f;
    font-size: 12px;
    line-height: 1.4;
  }

  .consult-form-section {
    position: relative;
    padding: 74px 22px 78px;
    background:
      radial-gradient(circle at 50% 100%, rgba(192, 143, 69, 0.035), transparent 35%),
      #0c0c0c;
  }

  .consult-form-section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: min(1180px, calc(100% - 44px));
    height: 1px;
    transform: translateX(-50%);
    background: linear-gradient(90deg, transparent, rgba(239, 205, 138, 0.17), transparent);
  }

  .consult-form-container {
    width: min(1180px, 100%);
    margin: 0 auto;
  }

  .consult-form-reveal {
    opacity: 0;
    transform: translateY(28px) scale(0.992);
    filter: blur(4px);
    transition:
      opacity 720ms cubic-bezier(0.16, 1, 0.3, 1),
      transform 720ms cubic-bezier(0.16, 1, 0.3, 1),
      filter 640ms ease;
    transition-delay: var(--reveal-delay, 0ms);
    will-change: opacity, transform, filter;
  }

  .consult-form-reveal.is-visible {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }

  .consult-stepper {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: min(1035px, calc(100% - 18px));
    margin: 0 auto 90px;
  }

  .consult-stepper__track {
    position: absolute;
    top: 22px;
    right: 6.1%;
    left: 6.1%;
    height: 1px;
    overflow: hidden;
    background: #454545;
  }

  .consult-stepper__progress {
    display: block;
    height: 100%;
    background: #efd08c;
    box-shadow: 0 0 14px rgba(239, 208, 140, 0.55);
    transition: width 400ms ease;
  }

  .consult-stepper__item {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    color: #cfc8bd;
  }

  .consult-stepper__number {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border: 1px solid #3a3a3a;
    border-radius: 50%;
    background: #1f1f1f;
    color: #ddd7cf;
    font-size: 16px;
    font-weight: 600;
    transition: 220ms ease;
  }

  .consult-stepper__label {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.01em;
    text-align: center;
  }

  .consult-stepper__item.is-active .consult-stepper__number,
  .consult-stepper__item.is-complete .consult-stepper__number {
    border-color: #f1d18d;
    background: #f3d48f;
    color: #21180a;
    box-shadow: 0 0 25px rgba(242, 207, 137, 0.58);
  }

  .consult-stepper__item.is-active .consult-stepper__label,
  .consult-stepper__item.is-complete .consult-stepper__label {
    color: #f0d18f;
  }

  .consult-form {
    display: grid;
    gap: 32px;
  }

  .consult-card {
    padding: 48px 54px 52px;
    border: 1px solid #292929;
    border-radius: 25px;
    background: rgba(15, 15, 15, 0.76);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.012);
    transition: border-color 280ms ease, box-shadow 280ms ease, background 280ms ease;
  }

  .consult-card:hover {
    border-color: rgba(239, 208, 140, 0.22);
    background: rgba(17, 17, 17, 0.84);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.018),
      0 18px 48px rgba(0, 0, 0, 0.16),
      0 0 32px rgba(239, 208, 140, 0.035);
  }

  .consult-section-title {
    display: flex;
    align-items: center;
    gap: 13px;
    margin: 0;
    color: #efd08c;
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(22px, 2vw, 28px);
    font-weight: 600;
    line-height: 1.25;
  }

  .consult-section-title svg {
    width: 21px;
    height: 21px;
    flex: 0 0 21px;
    stroke-width: 1.8;
  }

  .consult-section-description {
    margin: 14px 0 33px;
    color: #c2bbb1;
    font-size: 15px;
    line-height: 1.55;
  }

  .consult-fields-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 34px 34px;
    margin-top: 38px;
  }

  .consult-field {
    display: grid;
    gap: 12px;
    color: #d5cec4;
    font-size: 14px;
    font-weight: 500;
  }

  .consult-field--full { grid-column: 1 / -1; }

  .consult-field input,
  .consult-textarea {
    width: 100%;
    border: 1px solid #343434;
    outline: none;
    background: #1e1e1e;
    color: #f4f1eb;
    font: inherit;
    transition: border-color 180ms ease, box-shadow 180ms ease, background 180ms ease;
  }

  .consult-field input {
    height: 59px;
    padding: 0 25px;
    border-radius: 13px;
    font-size: 16px;
  }

  .consult-field input::placeholder,
  .consult-textarea::placeholder {
    color: #777e8c;
    opacity: 1;
  }

  .consult-field input:focus,
  .consult-textarea:focus {
    border-color: rgba(239, 208, 140, 0.74);
    background: #202020;
    box-shadow: 0 0 0 3px rgba(239, 208, 140, 0.08), 0 0 22px rgba(239, 208, 140, 0.12);
  }

  .consult-service-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 22px 18px;
  }

  .consult-option-button,
  .consult-upload-zone,
  .consult-submit-button,
  .consult-file-chip button {
    font-family: inherit;
    cursor: pointer;
  }

  .consult-option-button {
    border: 1px solid #303030;
    background: #111111;
    color: #dedbd6;
    transition: transform 190ms ease, border-color 190ms ease, background 190ms ease, color 190ms ease, box-shadow 190ms ease;
  }

  .consult-option-button:hover,
  .consult-option-button:focus-visible,
  .consult-upload-zone:hover,
  .consult-upload-zone:focus-visible,
  .consult-radio-option:hover,
  .consult-radio-option:focus-within {
    transform: translateY(-2px);
    border-color: rgba(239, 208, 140, 0.68);
    box-shadow: 0 0 24px rgba(239, 208, 140, 0.17);
    outline: none;
  }

  .consult-option-button.is-selected {
    border-color: #efd08c;
    background: linear-gradient(180deg, rgba(239, 208, 140, 0.13), rgba(239, 208, 140, 0.055));
    color: #f5d99b;
    box-shadow: 0 0 26px rgba(239, 208, 140, 0.22), inset 0 0 20px rgba(239, 208, 140, 0.04);
  }

  .consult-service-option {
    display: grid;
    place-items: center;
    align-content: center;
    gap: 15px;
    min-height: 116px;
    padding: 21px 15px;
    border-radius: 16px;
    font-size: 15px;
    font-weight: 600;
  }

  .consult-service-option svg {
    width: 27px;
    height: 27px;
    color: #f0cf88;
    stroke-width: 1.9;
    transition: filter 190ms ease, transform 190ms ease;
  }

  .consult-service-option:hover svg,
  .consult-service-option.is-selected svg {
    transform: scale(1.06);
    filter: drop-shadow(0 0 8px rgba(239, 208, 140, 0.58));
  }

  .consult-service-option--wide { grid-column: span 2; }

  .consult-needs-layout {
    display: grid;
    grid-template-columns: minmax(0, 1.98fr) minmax(265px, 0.94fr);
    gap: 29px;
  }

  .consult-card--needs,
  .consult-card--budget {
    min-height: 478px;
  }

  .consult-textarea {
    display: block;
    resize: vertical;
    padding: 22px 25px;
    border-radius: 13px;
    font-size: 16px;
    line-height: 1.55;
  }

  .consult-textarea--large {
    min-height: 235px;
    margin-top: 31px;
  }

  .consult-budget-options {
    display: grid;
    gap: 16px;
    margin-top: 30px;
  }

  .consult-radio-option {
    display: flex;
    align-items: center;
    gap: 13px;
    min-height: 54px;
    padding: 0 16px;
    border: 1px solid #363636;
    border-radius: 12px;
    background: #202020;
    color: #e3ded7;
    font-size: 16px;
    cursor: pointer;
    transition: transform 190ms ease, border-color 190ms ease, box-shadow 190ms ease, background 190ms ease;
  }

  .consult-radio-option input {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
  }

  .consult-radio-dot {
    width: 14px;
    height: 14px;
    flex: 0 0 14px;
    border: 2px solid #101010;
    border-radius: 50%;
    background: #090909;
    box-shadow: 0 0 0 1px #090909;
    transition: background 180ms ease, box-shadow 180ms ease;
  }

  .consult-radio-option.is-selected {
    border-color: #efd08c;
    background: rgba(239, 208, 140, 0.08);
    box-shadow: 0 0 22px rgba(239, 208, 140, 0.16);
  }

  .consult-radio-option.is-selected .consult-radio-dot {
    background: #efd08c;
    box-shadow: 0 0 0 1px #efd08c, 0 0 10px rgba(239, 208, 140, 0.72);
  }

  .consult-target-options {
    display: flex;
    flex-wrap: wrap;
    gap: 17px;
    margin-top: 32px;
  }

  .consult-target-button {
    min-width: 148px;
    min-height: 52px;
    padding: 0 25px;
    border-radius: 999px;
    background: #1d1d1d;
    color: #cbc4ba;
    font-size: 16px;
  }

  .consult-file-input {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
  }

  .consult-upload-zone {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 231px;
    margin-top: 32px;
    padding: 28px;
    border: 2px dashed #292929;
    border-radius: 16px;
    background: #101010;
    color: #d9d3ca;
    transition: transform 190ms ease, border-color 190ms ease, box-shadow 190ms ease, background 190ms ease;
  }

  .consult-upload-zone.is-dragging {
    transform: scale(1.006);
    border-color: #efd08c;
    background: rgba(239, 208, 140, 0.05);
    box-shadow: 0 0 28px rgba(239, 208, 140, 0.2);
  }

  .consult-upload-zone__icon {
    display: grid;
    place-items: center;
    width: 59px;
    height: 59px;
    margin-bottom: 19px;
    border-radius: 50%;
    background: #202020;
    color: #efd08c;
    transition: transform 190ms ease, box-shadow 190ms ease;
  }

  .consult-upload-zone:hover .consult-upload-zone__icon,
  .consult-upload-zone.is-dragging .consult-upload-zone__icon {
    transform: translateY(-2px) scale(1.04);
    box-shadow: 0 0 22px rgba(239, 208, 140, 0.24);
  }

  .consult-upload-zone__icon svg { width: 28px; height: 28px; stroke-width: 1.8; }

  .consult-upload-zone__title {
    color: #d9d3ca;
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
  }

  .consult-upload-zone__meta {
    margin-top: 6px;
    color: #d3c4ae;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-align: center;
  }

  .consult-file-error {
    margin: 12px 0 0;
    color: #f0a0a0;
    font-size: 13px;
  }

  .consult-file-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 16px;
  }

  .consult-file-chip {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    max-width: 100%;
    padding: 8px 9px 8px 13px;
    border: 1px solid rgba(239, 208, 140, 0.32);
    border-radius: 999px;
    background: rgba(239, 208, 140, 0.06);
    color: #dfd6c7;
    font-size: 12px;
  }

  .consult-file-chip > span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .consult-file-chip button {
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
    border: 0;
    border-radius: 50%;
    background: transparent;
    color: #d7c59f;
    transition: background 180ms ease, box-shadow 180ms ease;
  }

  .consult-file-chip button:hover,
  .consult-file-chip button:focus-visible {
    background: rgba(239, 208, 140, 0.12);
    box-shadow: 0 0 14px rgba(239, 208, 140, 0.25);
    outline: none;
  }

  .consult-file-chip svg { width: 14px; height: 14px; }

  .consult-textarea--notes {
    min-height: 139px;
    margin-top: 31px;
  }

  .consult-submit-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 58px 20px 6px;
  }

  .consult-privacy-copy {
    max-width: 525px;
    margin: 0 0 27px;
    color: #c9c1b6;
    font-size: 15px;
    line-height: 1.48;
    text-align: center;
  }

  .consult-privacy-copy a {
    color: inherit;
    text-underline-offset: 3px;
  }

  .consult-privacy-copy a:hover { color: #efd08c; }

  .consult-submit-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    min-width: min(440px, 100%);
    min-height: 68px;
    padding: 0 38px;
    border: 1px solid #f2d18d;
    border-radius: 999px;
    background: linear-gradient(90deg, #f4d28d, #ffdda0);
    color: #281d0b;
    font-size: clamp(17px, 2vw, 23px);
    font-weight: 500;
    box-shadow: 0 10px 31px rgba(239, 205, 138, 0.3), 0 0 27px rgba(239, 205, 138, 0.19);
    transition: transform 190ms ease, filter 190ms ease, box-shadow 190ms ease;
    animation: konsultasiGlowPulse 2.8s ease-in-out infinite;
  }

  .consult-submit-button svg {
    width: 25px;
    height: 25px;
    stroke-width: 2;
    transition: transform 190ms ease;
  }

  .consult-submit-button:hover,
  .consult-submit-button:focus-visible {
    transform: translateY(-3px) scale(1.01);
    filter: brightness(1.045);
    box-shadow: 0 14px 38px rgba(239, 205, 138, 0.42), 0 0 42px rgba(239, 205, 138, 0.34);
    outline: none;
  }

  .consult-submit-button:hover svg { transform: translateX(4px); }

  .consult-submit-button:disabled {
    cursor: wait;
    opacity: 0.72;
    transform: none;
  }

  .consult-toast {
    position: fixed;
    z-index: 1000;
    left: 50%;
    bottom: 28px;
    display: flex;
    align-items: center;
    gap: 11px;
    width: min(440px, calc(100% - 32px));
    padding: 15px 18px;
    border: 1px solid rgba(239, 208, 140, 0.5);
    border-radius: 14px;
    background: rgba(18, 18, 18, 0.97);
    color: #e8dfd1;
    box-shadow: 0 16px 42px rgba(0, 0, 0, 0.46), 0 0 24px rgba(239, 208, 140, 0.14);
    animation: konsultasiToastIn 360ms cubic-bezier(0.16, 1, 0.3, 1) both;
    backdrop-filter: blur(12px);
  }

  .consult-toast svg {
    width: 21px;
    height: 21px;
    flex: 0 0 21px;
    color: #efd08c;
  }

  .consult-toast span { font-size: 14px; line-height: 1.45; }

  @media (max-width: 980px) {
    .konsultasi-hero { padding-top: 126px; }
    .konsultasi-hero__container { grid-template-columns: 1fr; gap: 48px; }
    .konsultasi-hero__content { max-width: 650px; }
    .konsultasi-hero__image-frame { min-height: 440px; }

    .consult-service-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .consult-service-option--wide { grid-column: span 2; }
    .consult-needs-layout { grid-template-columns: 1fr; }
    .consult-card--needs, .consult-card--budget { min-height: auto; }
    .consult-budget-options { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }

  @media (max-width: 700px) {
    .consult-form-section { padding: 56px 16px 64px; }
    .consult-stepper { width: 100%; margin-bottom: 62px; }
    .consult-stepper__track { top: 18px; right: 10%; left: 10%; }
    .consult-stepper__number { width: 36px; height: 36px; font-size: 13px; }
    .consult-stepper__label { max-width: 85px; font-size: 11px; }
    .consult-stepper__item { gap: 10px; }

    .consult-card { padding: 31px 23px 34px; border-radius: 20px; }
    .consult-fields-grid { grid-template-columns: 1fr; gap: 22px; margin-top: 29px; }
    .consult-field--full { grid-column: auto; }
    .consult-field input { height: 55px; padding: 0 18px; font-size: 14px; }
    .consult-service-grid { gap: 13px; }
    .consult-service-option { min-height: 104px; font-size: 13px; }
    .consult-budget-options { grid-template-columns: 1fr; }
    .consult-target-options { gap: 11px; }
    .consult-target-button { min-width: calc(50% - 6px); min-height: 48px; padding: 0 16px; font-size: 14px; }
    .consult-upload-zone { min-height: 210px; padding: 22px 15px; }
    .consult-upload-zone__title { font-size: 14px; }
    .consult-upload-zone__meta { max-width: 280px; font-size: 10px; line-height: 1.55; }
    .consult-submit-area { padding-top: 42px; }
    .consult-submit-button { min-height: 62px; padding: 0 26px; }
  }

  @media (max-width: 640px) {
    .konsultasi-hero { align-items: flex-start; padding: 108px 20px 44px; }
    .konsultasi-hero__container { gap: 38px; }
    .konsultasi-hero__eyebrow { margin-bottom: 18px; font-size: 8px; letter-spacing: 0.8px; }
    .konsultasi-hero__title { max-width: 360px; font-size: clamp(48px, 14vw, 66px); line-height: 0.98; letter-spacing: -0.04em; }
    .konsultasi-hero__description { margin-top: 21px; font-size: 14px; line-height: 1.58; }
    .konsultasi-hero__proof { margin-top: 28px; }
    .konsultasi-hero__image-frame { min-height: 340px; border-radius: 16px; }
    .konsultasi-hero__quote { left: 16px; bottom: 16px; width: calc(100% - 32px); padding: 16px; }
  }

  @media (max-width: 460px) {
    .consult-service-grid { grid-template-columns: 1fr; }
    .consult-service-option--wide { grid-column: auto; }
    .consult-target-button { min-width: 100%; }
    .consult-privacy-copy { font-size: 13px; }
    .consult-submit-button { min-width: 100%; font-size: 16px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .konsultasi-hero__eyebrow,
    .konsultasi-hero__title,
    .konsultasi-hero__description,
    .konsultasi-hero__proof,
    .konsultasi-hero__visual,
    .consult-form-reveal,
    .consult-toast,
    .consult-submit-button {
      animation: none;
      opacity: 1;
      transform: none;
      filter: none;
    }

    .consult-form-reveal,
    .consult-option-button,
    .consult-radio-option,
    .consult-upload-zone,
    .consult-submit-button {
      transition: none;
    }
  }
`;

interface ClientInfo {
  nama: string;
  perusahaan: string;
  email: string;
  whatsapp: string;
  kota: string;
}

const initialClientInfo: ClientInfo = {
  nama: "",
  perusahaan: "",
  email: "",
  whatsapp: "",
  kota: "",
};

const Konsultasi = () => {
  const [initialDraft] = useState(() => getKonsultasiDraft());
  const [clientInfo, setClientInfo] = useState<ClientInfo>(
    initialDraft?.clientInfo ?? initialClientInfo,
  );
  const [services, setServices] = useState<string[]>(initialDraft?.services ?? []);
  const [kebutuhan, setKebutuhan] = useState(initialDraft?.kebutuhan ?? "");
  const [budget, setBudget] = useState(initialDraft?.budget ?? "");
  const [target, setTarget] = useState(initialDraft?.target ?? "");
  const [referenceFiles, setReferenceFiles] = useState<File[]>(() =>
    getKonsultasiFiles(),
  );
  const [notes, setNotes] = useState(initialDraft?.notes ?? "");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Konsultasi Gratis | Tanya Mahreen";
  }, []);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".consult-form-reveal"),
    );

    sections.forEach((section, index) => {
      section.style.setProperty("--reveal-delay", `${(index % 3) * 80}ms`);
    });

    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("is-visible"));
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
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const updateClientInfo = (field: keyof ClientInfo, value: string) => {
    setClientInfo((previous) => ({ ...previous, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (services.length === 0) {
      window.alert("Pilih minimal satu jenis layanan yang Anda butuhkan.");
      return;
    }

    if (!budget) {
      window.alert("Pilih estimasi budget proyek Anda.");
      return;
    }

    if (!target) {
      window.alert("Pilih target penyelesaian proyek.");
      return;
    }

    setSubmitting(true);

    saveKonsultasiDraft(
      {
        clientInfo,
        services,
        kebutuhan,
        budget,
        target,
        notes,
        files: [],
      },
      referenceFiles,
    );

    window.setTimeout(() => {
      window.location.hash = "/tanya-mahreen/konsultasi/cek-data";
    }, 320);
  };

  return (
    <div className="konsultasi-page">
      <style data-component="konsultasi-gratis">{konsultasiStyles}</style>
      <Navbar />

      <main>
        <section className="konsultasi-hero" aria-labelledby="konsultasi-title">
          <div className="konsultasi-hero__container">
            <div className="konsultasi-hero__content">
              <p className="konsultasi-hero__eyebrow">Konsultasi Eksklusif</p>

              <h1 className="konsultasi-hero__title" id="konsultasi-title">
                Jadwalkan Konsultasi Gratis
              </h1>

              <p className="konsultasi-hero__description">
                Wujudkan visi bisnis Anda melalui strategi digital yang presisi.
                Kami siap mendengarkan kebutuhan unik Anda dan memberikan
                rekomendasi solusi kelas dunia.
              </p>

              <div className="konsultasi-hero__proof" aria-label="Rekam jejak proyek">
                <div className="konsultasi-hero__avatars" aria-hidden="true">
                  <span className="konsultasi-hero__avatar"><img src={avatarOne} alt="" /></span>
                  <span className="konsultasi-hero__avatar"><img src={avatarTwo} alt="" /></span>
                  <span className="konsultasi-hero__avatar"><img src={avatarThree} alt="" /></span>
                </div>
                <p className="konsultasi-hero__proof-text">
                  <strong>150+</strong> Proyek Berhasil
                </p>
              </div>
            </div>

            <div className="konsultasi-hero__visual">
              <div className="konsultasi-hero__image-frame">
                <img
                  className="konsultasi-hero__image"
                  src={meetingImage}
                  alt="Tim profesional sedang melakukan sesi konsultasi bisnis"
                />

                <blockquote className="konsultasi-hero__quote">
                  <span className="konsultasi-hero__quote-icon" aria-hidden="true">
                    <BadgeCheck />
                  </span>
                  <p className="konsultasi-hero__quote-text">
                    “Kemitraan strategis yang mengubah cara kami menjangkau audiens global.”
                  </p>
                  <footer className="konsultasi-hero__quote-author">
                    — CEO, Fortune 500 Partner
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section className="consult-form-section" aria-label="Form konsultasi gratis">
          <div className="consult-form-container">
            <SteepProgres currentStep={1} />

            <form className="consult-form" onSubmit={handleSubmit}>
              <InformasiData value={clientInfo} onChange={updateClientInfo} />
              <Layanan value={services} onChange={setServices} />
              <div className="consult-needs-layout">
                <CeritakanKebutuhan
                  kebutuhan={kebutuhan}
                  onKebutuhanChange={setKebutuhan}
                />
                <Budget value={budget} onChange={setBudget} />
              </div>
              <TargetPenyelesaian value={target} onChange={setTarget} />
              <UploadReferensi files={referenceFiles} onChange={setReferenceFiles} />
              <KurikulumTambahan value={notes} onChange={setNotes} />
              <ButtunKirim submitting={submitting} />
            </form>
          </div>
        </section>
      </main>

      <ClosingSection />
      <Footer />

    </div>
  );
};

export default Konsultasi;
