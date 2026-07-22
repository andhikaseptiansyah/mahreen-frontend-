import { useEffect } from "react";
import CSRNavbar from "../../components/Navbar/CSRNavbar";
import Footer from "../../components/Footer/Footer";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import DaftarSekarangSection from "./sections/DaftarSekarangSection";
import ProgramPillarsSection from "./sections/ProgramPillarsSection";
import FeaturedProgramsSection from "./sections/FeaturedProgramsSection";
import CSRPageEffects from "./components/CSRPageEffects";

const CSR_PAGE_URL = "https://mahreenindonesia.com/#/mahreen-csr";

const csrSeo = {
  title: "Mahreen CSR | Corporate Social Responsibility - Mahreen Indonesia",
  description:
    "Program CSR Mahreen Indonesia untuk dampak sosial yang berkelanjutan melalui kolaborasi, edukasi, dan pemberdayaan komunitas.",
  keywords:
    "CSR, corporate social responsibility, Mahreen Indonesia, program sosial, pemberdayaan komunitas, sustainability",
  url: CSR_PAGE_URL,
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

const CSRSEO = () => {
  useEffect(() => {
    document.documentElement.lang = "id";
    document.title = csrSeo.title;

    setMetaByName("description", csrSeo.description);
    setMetaByName("keywords", csrSeo.keywords);
    setMetaByName(
      "robots",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    );
    setMetaByName("author", csrSeo.siteName);
    setMetaByName("theme-color", "#050505");

    setMetaByProperty("og:type", "website");
    setMetaByProperty("og:locale", "id_ID");
    setMetaByProperty("og:site_name", csrSeo.siteName);
    setMetaByProperty("og:title", csrSeo.title);
    setMetaByProperty("og:description", csrSeo.description);
    setMetaByProperty("og:url", csrSeo.url);

    setMetaByName("twitter:card", "summary_large_image");
    setMetaByName("twitter:title", csrSeo.title);
    setMetaByName("twitter:description", csrSeo.description);

    setCanonicalUrl(csrSeo.url);
  }, []);

  return null;
};

const csrStyles = `
  .csr-content {
    width: 100vw;
    max-width: 100vw;
    min-width: 0;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background: #000000;
    color: #ffffff;
  }
`;

const CSR = () => {
  return (
    <>
      <CSRSEO />
      <style data-component="csr">{csrStyles}</style>
      <CSRNavbar />
      <CSRPageEffects rootId="csr" />

      <main className="csr-content" id="csr">
        <HeroSection />
        <AboutSection />
        <ProgramPillarsSection />
        <FeaturedProgramsSection />
        <DaftarSekarangSection />
      </main>

      <Footer />
    </>
  );
};

export default CSR;
