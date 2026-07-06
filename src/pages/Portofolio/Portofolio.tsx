import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Karya from "./sections/Karya";
import ClosingSection from "../../components/Cloasing-section/cloasing-section";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer/Footer";

const PORTOFOLIO_PAGE_URL = "https://mahreenindonesia.com/portofolio";
const PORTOFOLIO_PAGE_IMAGE = "https://mahreenindonesia.com/og-portofolio.jpg";

const portofolioSeo = {
  title: "Portofolio Mahreen Indonesia | Karya Nyata & Inovasi Kolaboratif",
  description:
    "Jelajahi rekam jejak solusi kreatif, transformasi teknologi, pemberdayaan sosial, dan pengembangan talenta unggulan dari ekosistem Mahreen Indonesia.",
  keywords:
    "Portofolio Mahreen Indonesia, karya Mahreen, proyek kreatif, inovasi kolaboratif, CSR, ekosistem Mahreen, pengembangan talenta",
  url: PORTOFOLIO_PAGE_URL,
  image: PORTOFOLIO_PAGE_IMAGE,
  siteName: "Mahreen Indonesia",
};

const portofolioStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${PORTOFOLIO_PAGE_URL}#webpage`,
  url: PORTOFOLIO_PAGE_URL,
  name: portofolioSeo.title,
  description: portofolioSeo.description,
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://mahreenindonesia.com/#website",
    name: portofolioSeo.siteName,
    url: "https://mahreenindonesia.com/",
  },
  about: {
    "@type": "Organization",
    "@id": "https://mahreenindonesia.com/#organization",
    name: portofolioSeo.siteName,
    url: "https://mahreenindonesia.com/",
  },
  inLanguage: "id-ID",
};

const setMetaByName = (name: string, content: string) => {
  let meta = document.head.querySelector(
    `meta[name="${name}"]`
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
    `meta[property="${property}"]`
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
    `link[rel="canonical"]`
  ) as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
};

const setStructuredData = () => {
  let script = document.head.querySelector(
    `script[data-seo="portofolio-structured-data"]`
  ) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo", "portofolio-structured-data");
    document.head.appendChild(script);
  }

  script.text = JSON.stringify(portofolioStructuredData);
};

const PortofolioSEO = () => {
  useEffect(() => {
    document.documentElement.lang = "id";
    document.title = portofolioSeo.title;

    setMetaByName("description", portofolioSeo.description);
    setMetaByName("keywords", portofolioSeo.keywords);
    setMetaByName(
      "robots",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );
    setMetaByName("author", portofolioSeo.siteName);
    setMetaByName("theme-color", "#101010");

    setMetaByProperty("og:type", "website");
    setMetaByProperty("og:locale", "id_ID");
    setMetaByProperty("og:site_name", portofolioSeo.siteName);
    setMetaByProperty("og:title", portofolioSeo.title);
    setMetaByProperty("og:description", portofolioSeo.description);
    setMetaByProperty("og:url", portofolioSeo.url);
    setMetaByProperty("og:image", portofolioSeo.image);
    setMetaByProperty("og:image:alt", "Portofolio Mahreen Indonesia");

    setMetaByName("twitter:card", "summary_large_image");
    setMetaByName("twitter:title", portofolioSeo.title);
    setMetaByName("twitter:description", portofolioSeo.description);
    setMetaByName("twitter:image", portofolioSeo.image);

    setCanonicalUrl(portofolioSeo.url);
    setStructuredData();
  }, []);

  return null;
};

const stats = [
  {
    value: "50+",
    label: "PROYEK SELESAI",
  },
  {
    value: "5",
    label: "PILAR EKOSISTEM",
  },
  {
    value: "15+",
    label: "KOLABORASI CSR",
  },
  {
    value: "100%",
    label: "DAMPAK POSITIF",
  },
] as const;

const portofolioStyles = `
  @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap");

  .portofolio-page {
    width: 100%;
    min-height: 100vh;
    background: #111111;
    color: #ffffff;
  }

  .portofolio-page,
  .portofolio-page *,
  .portofolio-page *::before,
  .portofolio-page *::after {
    box-sizing: border-box;
  }

  @keyframes portofolioHeroEnter {
    from {
      opacity: 0;
      transform: translate3d(0, 18px, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  .portofolio-hero {
    width: 100%;
    min-height: 100vh;
    min-height: 100svh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 118px 24px 96px;
    background:
      radial-gradient(circle at 50% 18%, rgba(197, 168, 128, 0.045) 0, transparent 34%),
      linear-gradient(180deg, #101010 0%, #111111 100%);
  }

  .portofolio-hero__inner {
    width: 100%;
    max-width: 760px;
    margin: 0 auto;
    text-align: center;
    animation: portofolioHeroEnter 520ms cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  .portofolio-hero__eyebrow {
    margin: 0 0 22px;
    color: #c5a880;
    font-family: "Inter", Arial, sans-serif;
    font-size: 9px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 2.1px;
    text-transform: uppercase;
  }

  .portofolio-hero__title {
    margin: 0;
    color: #ffffff;
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(52px, 5.45vw, 86px);
    font-weight: 700;
    line-height: 0.98;
    letter-spacing: -0.045em;
  }

  .portofolio-hero__title-line {
    display: block;
  }

  .portofolio-hero__title-line--gold {
    color: #c5a880;
    font-style: italic;
    font-weight: 400;
  }

  .portofolio-hero__description {
    max-width: 665px;
    margin: 28px auto 0;
    color: rgba(255, 255, 255, 0.63);
    font-family: "Inter", Arial, sans-serif;
    font-size: clamp(14px, 1.32vw, 17px);
    font-weight: 300;
    line-height: 1.72;
  }

  .portofolio-hero__stats-wrap {
    width: 100%;
    max-width: 720px;
    margin: 64px auto 0;
    border-top: 1px solid rgba(255, 255, 255, 0.22);
    border-bottom: 1px solid rgba(255, 255, 255, 0.22);
    padding: 34px 0 28px;
  }

  .portofolio-hero__stats {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 24px;
    margin: 0;
  }

  .portofolio-hero__stat {
    margin: 0;
    text-align: center;
  }

  .portofolio-hero__stat-value {
    display: block;
    margin: 0;
    color: #c5a880;
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(24px, 2.1vw, 34px);
    font-weight: 400;
    line-height: 1;
    letter-spacing: -0.025em;
  }

  .portofolio-hero__stat-label {
    display: block;
    margin: 0 0 8px;
    color: rgba(255, 255, 255, 0.45);
    font-family: "Inter", Arial, sans-serif;
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 1.7px;
    line-height: 1.3;
    text-transform: uppercase;
  }

  @media (prefers-reduced-motion: reduce) {
    .portofolio-hero__inner {
      animation: none;
    }
  }

  @media (max-width: 768px) {
    .portofolio-hero {
      min-height: 100vh;
      min-height: 100svh;
      padding: 104px 20px 84px;
    }

    .portofolio-hero__eyebrow {
      margin-bottom: 18px;
    }

    .portofolio-hero__title {
      font-size: clamp(44px, 12vw, 64px);
    }

    .portofolio-hero__description {
      margin-top: 24px;
      font-size: 14px;
      line-height: 1.68;
    }

    .portofolio-hero__stats-wrap {
      margin-top: 44px;
      padding: 24px 0 22px;
    }

    .portofolio-hero__stats {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 8px;
    }

    .portofolio-hero__stat-label {
      margin-bottom: 7px;
      font-size: 7px;
      letter-spacing: 1.1px;
      line-height: 1.35;
    }

    .portofolio-hero__stat-value {
      font-size: clamp(20px, 5.6vw, 26px);
    }
  }

  @media (max-width: 420px) {
    .portofolio-hero {
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 76px;
    }

    .portofolio-hero__title {
      font-size: clamp(38px, 15vw, 52px);
    }

    .portofolio-hero__stats-wrap {
      margin-top: 38px;
      padding: 22px 0 20px;
    }

    .portofolio-hero__stats {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 4px;
    }

    .portofolio-hero__stat-label {
      margin-bottom: 6px;
      font-size: 6px;
      letter-spacing: 0.75px;
    }

    .portofolio-hero__stat-value {
      font-size: clamp(17px, 5.2vw, 22px);
    }
  }
`;

const Portofolio = () => {
  return (
    <>
      <PortofolioSEO />
      <style data-component="portofolio-page">{portofolioStyles}</style>
      <Navbar />

      <main className="portofolio-page">
        <section className="portofolio-hero" aria-labelledby="portofolio-title">
          <div className="portofolio-hero__inner">
            <p className="portofolio-hero__eyebrow">Galeri Portofolio</p>

            <h1 className="portofolio-hero__title" id="portofolio-title">
              <span className="portofolio-hero__title-line">Karya Nyata &</span>
              <span className="portofolio-hero__title-line portofolio-hero__title-line--gold">
                Inovasi Kolaboratif
              </span>
            </h1>

            <p className="portofolio-hero__description">
              Menjelajahi rekam jejak solusi kreatif, transformasi teknologi,
              pemberdayaan sosial, dan pengembangan talenta unggulan dari seluruh
              ekosistem Mahreen Indonesia.
            </p>

            <div className="portofolio-hero__stats-wrap">
              <dl className="portofolio-hero__stats" aria-label="Statistik portofolio Mahreen Indonesia">
                {stats.map((stat) => (
                  <div className="portofolio-hero__stat" key={stat.label}>
                    <dt className="portofolio-hero__stat-label">{stat.label}</dt>
                    <dd className="portofolio-hero__stat-value">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <Karya />
        <CTA />
        <ClosingSection />
        <Footer />
      </main>
    </>
  );
};

export default Portofolio;
