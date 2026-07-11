import { useEffect } from "react";

import Navbar from "../../components/Navbar/Navbar";
import ClosingSection from "../../components/Cloasing-section/cloasing-section";
import Footer from "../../components/Footer/Footer";

import ProfileSection from "./sections/Profile";
import VisimisiSection from "./sections/Visimisi";
import LegalStatusSection from "./sections/Legal_status";

const tentangSeo = {
  title: "Profil & Sejarah Mahreen Indonesia",
  description:
    "Profil, sejarah, visi, dan misi Mahreen Indonesia sebagai ruang kreatif, bisnis, digital, dan sosial yang memberi manfaat nyata bagi masyarakat Indonesia.",
  keywords:
    "Profil Mahreen Indonesia, sejarah Mahreen Indonesia, visi misi Mahreen, tentang Mahreen, legalitas Mahreen, HAKI Mahreen Indonesia",
  url: "https://mahreenindonesia.com/tentang/profil-sejarah",
  image: "https://mahreenindonesia.com/og-tentang.jpg",
  siteName: "Mahreen Indonesia",
};

const setMetaByName = (name: string, content: string) => {
  let meta = document.head.querySelector(
    `meta[name="${name}"]`,
  ) as HTMLMetaElement | null;

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", name);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
};

const setMetaByProperty = (property: string, content: string) => {
  let meta = document.head.querySelector(
    `meta[property="${property}"]`,
  ) as HTMLMetaElement | null;

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
};

const setCanonicalUrl = (href: string) => {
  let link = document.head.querySelector(
    `link[rel="canonical"]`,
  ) as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
};

const TentangSEO = () => {
  useEffect(() => {
    document.documentElement.lang = "id";
    document.title = tentangSeo.title;

    setMetaByName("description", tentangSeo.description);
    setMetaByName("keywords", tentangSeo.keywords);
    setMetaByName(
      "robots",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    );
    setMetaByName("author", tentangSeo.siteName);
    setMetaByName("theme-color", "#000000");

    setMetaByProperty("og:type", "website");
    setMetaByProperty("og:locale", "id_ID");
    setMetaByProperty("og:site_name", tentangSeo.siteName);
    setMetaByProperty("og:title", tentangSeo.title);
    setMetaByProperty("og:description", tentangSeo.description);
    setMetaByProperty("og:url", tentangSeo.url);
    setMetaByProperty("og:image", tentangSeo.image);
    setMetaByProperty("og:image:alt", "Profil dan Sejarah Mahreen Indonesia");

    setMetaByName("twitter:card", "summary_large_image");
    setMetaByName("twitter:title", tentangSeo.title);
    setMetaByName("twitter:description", tentangSeo.description);
    setMetaByName("twitter:image", tentangSeo.image);

    setCanonicalUrl(tentangSeo.url);
  }, []);

  return null;
};

const tentangPageStyles = `
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400&family=Playfair+Display:ital,wght@0,400;1,400&display=swap");

  .tentang-page {
    --tentang-black: #000000;
    --tentang-panel: #111111;
    --tentang-white: #ffffff;
    --tentang-muted: #a1a1aa;
    --tentang-gold: #c5a880;
    --tentang-border: rgba(255, 255, 255, 0.08);
    --tentang-gold-border: rgba(197, 168, 128, 0.3);

    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    background: var(--tentang-black);
    color: var(--tentang-white);
    font-family: "DM Sans", Inter, Arial, sans-serif;
  }

  .tentang-page,
  .tentang-page *,
  .tentang-page *::before,
  .tentang-page *::after {
    box-sizing: border-box;
  }

  .tentang-page p,
  .tentang-page h1,
  .tentang-page h2,
  .tentang-page h3 {
    margin: 0;
  }
`;

const Tentang = () => {
  return (
    <>
      <TentangSEO />
      <style data-component="tentang-page">{tentangPageStyles}</style>
      <Navbar />

      <main className="tentang-page">
        <ProfileSection />
        <VisimisiSection />
        <LegalStatusSection />
        <LegalStatusSection />
        <ClosingSection />
        <Footer />
      </main>
    </>
  );
};

export default Tentang;
