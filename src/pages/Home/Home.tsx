import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";

import backgroundHome from "../../assets/Hero-section/baground-home.png";
import Partnership from "./sections/Partnership";
import Purpose from "./sections/Purpose";
import Ekosistem from "./sections/Ekosistem";
import LayananProfesional from "./sections/LayananProfesional";
import Footer from "../../components/Footer/Footer";
import ClosingSection from "../../components/Cloasing-section/cloasing-section";
import CTA from "../../components/CTA/CTA";
import LearningSection from "./sections/LearningSection";



const HOME_PAGE_URL = "https://mahreenindonesia.com/";
const HOME_PAGE_IMAGE = "https://mahreenindonesia.com/og-image.jpg";

const homeSeo = {
  title:
    "Mahreen Indonesia | Ekosistem Kreatif, Edukasi, Bisnis, dan Kolaborasi",
  description:
    "Mahreen Indonesia membangun ekosistem kreatif melalui pengembangan talenta, solusi bisnis, pendidikan, program sosial, kolaborasi kampus, dan inovasi digital.",
  keywords:
    "Mahreen Indonesia, ekosistem kreatif, pengembangan talenta, solusi bisnis, creative agency, internship, CSR, kolaborasi kampus, komunitas kreatif",
  url: HOME_PAGE_URL,
  image: HOME_PAGE_IMAGE,
  siteName: "Mahreen Indonesia",
};

const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${HOME_PAGE_URL}#organization`,
      name: "Mahreen Indonesia",
      url: HOME_PAGE_URL,
      logo: `${HOME_PAGE_URL}logo.png`,
      description: homeSeo.description,
    },
    {
      "@type": "WebSite",
      "@id": `${HOME_PAGE_URL}#website`,
      url: HOME_PAGE_URL,
      name: homeSeo.siteName,
      publisher: {
        "@id": `${HOME_PAGE_URL}#organization`,
      },
      inLanguage: "id-ID",
    },
    {
      "@type": "WebPage",
      "@id": `${HOME_PAGE_URL}#webpage`,
      url: HOME_PAGE_URL,
      name: homeSeo.title,
      description: homeSeo.description,
      isPartOf: {
        "@id": `${HOME_PAGE_URL}#website`,
      },
      about: {
        "@id": `${HOME_PAGE_URL}#organization`,
      },
      inLanguage: "id-ID",
    },
  ],
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
    `script[data-seo="home-structured-data"]`
  ) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo", "home-structured-data");
    document.head.appendChild(script);
  }

  script.text = JSON.stringify(homeStructuredData);
};

const HomeSEO = () => {
  useEffect(() => {
    document.documentElement.lang = "id";
    document.title = homeSeo.title;

    setMetaByName("description", homeSeo.description);
    setMetaByName("keywords", homeSeo.keywords);
    setMetaByName(
      "robots",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );
    setMetaByName("author", homeSeo.siteName);
    setMetaByName("theme-color", "#050505");

    setMetaByProperty("og:type", "website");
    setMetaByProperty("og:locale", "id_ID");
    setMetaByProperty("og:site_name", homeSeo.siteName);
    setMetaByProperty("og:title", homeSeo.title);
    setMetaByProperty("og:description", homeSeo.description);
    setMetaByProperty("og:url", homeSeo.url);
    setMetaByProperty("og:image", homeSeo.image);
    setMetaByProperty("og:image:alt", "Mahreen Indonesia");

    setMetaByName("twitter:card", "summary_large_image");
    setMetaByName("twitter:title", homeSeo.title);
    setMetaByName("twitter:description", homeSeo.description);
    setMetaByName("twitter:image", homeSeo.image);

    setCanonicalUrl(homeSeo.url);
    setStructuredData();
  }, []);

  return null;
};

const statistics = [
  {
    value: "50+",
    lines: ["MITRA KAMPUS"],
  },
  {
    value: "10+",
    lines: ["PROYEK SELESAI"],
  },
  {
    value: "15+",
    lines: ["KOLABORASI"],
  },
  {
    value: "20+",
    lines: ["EVENTS PROGRAM"],
  },
  {
    value: "10+",
    lines: ["PEDULI MAHREEN"],
  },
  {
    value: "4",
    lines: ["BUSINESS PILLAR"],
  },
];

const homeStyles = `
  @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Inter:wght@300;400;500;600&display=swap");

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .home-content {
    width: 100vw;
    max-width: 100vw;
    min-width: 0;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background: #000000;
    color: #ffffff;
  }

  .home-page {
    position: relative;
    width: 100%;
    max-width: 100%;

    min-height: 100vh;
    min-height: 100svh;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: #000000;
    color: #ffffff;
    box-sizing: border-box;
  }

  .home-page *,
  .home-page *::before,
  .home-page *::after {
    box-sizing: border-box;
  }

  .home-hero {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 118px 20px 0;

    background-image:
      linear-gradient(
        180deg,
        rgba(15, 17, 21, 0.10) 0%,
        rgba(15, 17, 21, 0.05) 50%,
        rgba(0, 0, 0, 0.65) 80%,
        rgba(0, 0, 0, 1) 100%
      ),
      url("${backgroundHome}");
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    isolation: isolate;
  }

  .home-hero__content {
    margin: auto auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 1200px;
    transform: translateY(-2vh);
  }

  .home-hero__title {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: clamp(55px, 7.5vw, 95px);
    font-weight: 400;
    line-height: 1.05;
    letter-spacing: -1.5px;

    opacity: 0;
    animation: fadeInUp 0.8s ease-out 0.2s forwards;
  }

  .home-hero__title-line {
    display: block;
    color: #ffffff;
  }

  .home-hero__title-line--gold {
    color: #dfbe7a;
    font-style: italic;
    font-weight: 500;
  }

  .home-hero__title-line--italic {
    color: #ffffff;
    font-style: italic;
    font-weight: 500;
  }

  .home-hero__description {
    margin: 20px auto 0;
    color: rgba(255, 255, 255, 0.75);
    font-family: "Inter", Arial, sans-serif;
    font-size: clamp(13px, 1.1vw, 15px);
    font-weight: 300;
    line-height: 1.6;
    text-align: center;

    opacity: 0;
    animation: fadeInUp 0.8s ease-out 0.4s forwards;
  }

  .home-hero__description-line {
    display: block;
  }

  .home-hero__actions {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    opacity: 0;
    animation: fadeInUp 0.8s ease-out 0.6s forwards;
  }

  .home-hero__button {
    min-width: 180px;
    padding: 12px 28px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    font-family: "Inter", Arial, sans-serif;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      background-color 0.3s ease,
      border-color 0.3s ease,
      box-shadow 0.3s ease;
  }

  .home-hero__button:focus-visible {
    outline: 3px solid rgba(223, 190, 122, 0.7);
    outline-offset: 4px;
  }

  .home-hero__button:active {
    transform: translateY(0) scale(0.98) !important;
    box-shadow: none !important;
  }

  .home-hero__button--primary {
    background: #dfbe7a;
    color: #000000;
    border: 1px solid #dfbe7a;
  }

  .home-hero__button--primary:hover {
    background: #eed295;
    border-color: #eed295;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(223, 190, 122, 0.3);
  }

  .home-hero__button--outline {
    background: transparent;
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .home-hero__button--outline:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #ffffff;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .home-hero__statistics {
    width: 100%;
    max-width: 1100px;
    margin: 46px auto 74px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding-top: 24px;
    padding-bottom: 0;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 15px;
    align-items: end;

    opacity: 0;
    animation: fadeInUp 0.8s ease-out 0.8s forwards;
  }

  .home-hero__statistic {
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  .home-hero__statistic-value {
    order: 1;
    margin: 0 0 6px;
    color: #dfbe7a;
    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: clamp(14px, 1.4vw, 18px);
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  .home-hero__statistic-label {
    order: 2;
    margin: 0;
    color: rgba(255, 255, 255, 0.5);
    font-family: "Inter", Arial, sans-serif;
    font-size: 9px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  .home-hero__statistic-label span {
    display: block;
  }

  @media (max-width: 950px) {
    .home-page {
      min-height: 820px;
    }

    .home-hero {
      padding-top: 102px;
    }

    .home-hero__statistics {
      margin: 42px auto 64px;
      grid-template-columns: repeat(3, 1fr);
      row-gap: 16px;
    }
  }

  @media (max-width: 560px) {
    .home-content {
      width: 100vw;
      max-width: 100vw;
    }

    .home-page {
      width: 100%;
      max-width: 100%;
      min-height: 100svh;
      overflow: hidden;
    }

    .home-hero {
      min-height: 100svh;
      height: auto;
      padding: 92px 18px 34px;
      background-size: cover;
      background-position: center top;
    }

    .home-hero__content {
      margin: 0 auto;
      transform: none;
      max-width: 100%;
    }

    .home-hero__title {
      width: 100%;
      font-size: clamp(31px, 9.8vw, 42px);
      line-height: 1.04;
      letter-spacing: -0.8px;
    }

    .home-hero__description {
      margin-top: 16px;
      max-width: 310px;
      font-size: 11px;
      line-height: 1.7;
    }

    .home-hero__description-line {
      display: inline;
    }

    .home-hero__actions {
      flex-direction: column;
      width: 100%;
      max-width: 230px;
      gap: 10px;
      margin-top: 24px;
    }

    .home-hero__button {
      width: 100%;
      min-width: 0;
      padding: 11px 20px;
      font-size: 11px;
    }

    .home-hero__statistics {
      width: 100%;
      margin: 32px auto 0;
      padding-top: 18px;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px 10px;
    }

    .home-hero__statistic-value {
      font-size: 15px;
    }

    .home-hero__statistic-label {
      font-size: 7px;
      letter-spacing: 1px;
    }
  }

  @media (max-width: 380px) {
    .home-hero {
      padding-inline: 14px;
    }

    .home-hero__title {
      font-size: clamp(28px, 9.4vw, 36px);
    }

    .home-hero__description {
      max-width: 285px;
      font-size: 10px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .home-hero__title,
    .home-hero__description,
    .home-hero__actions,
    .home-hero__statistics {
      opacity: 1;
      animation: none;
      transform: none;
    }

    .home-hero__button {
      transition: none;
    }
  }
`;

const Home = () => {
  return (
    <>
      <HomeSEO />
      <style data-component="home">{homeStyles}</style>
      <Navbar />

      <main className="home-content" id="home">
        <section className="home-page" aria-labelledby="home-hero-title">
          <div className="home-hero" aria-label="Hero Mahreen Indonesia">
            <div className="home-hero__content">
              <h1 className="home-hero__title" id="home-hero-title">
                <span className="home-hero__title-line">
                  Membangun Generasi
                </span>
                <span className="home-hero__title-line home-hero__title-line--gold">
                  Ekosistem Kreatif
                </span>
                <span className="home-hero__title-line home-hero__title-line--italic">
                  Masa Depan Indonesia
                </span>
              </h1>

              <p className="home-hero__description">
                <span className="home-hero__description-line">
                  Memberdayakan bisnis, mahasiswa, komunitas, dan organisasi melalui
                </span>
                <span className="home-hero__description-line">
                  kreativitas, teknologi, pendidikan, dan kolaborasi yang bermakna.
                </span>
              </p>

              <nav
                className="home-hero__actions"
                aria-label="Navigasi utama halaman beranda"
              >
                <a
                  className="home-hero__button home-hero__button--primary"
                  href="#ecosystem"
                  aria-label="Jelajahi ekosistem Mahreen Indonesia"
                >
                  Jelajahi Ekosistem
                </a>
                <a
                  className="home-hero__button home-hero__button--outline"
                  href="#/programs"
                  aria-label="Mulai belajar melalui program Mahreen Indonesia"
                >
                  Mulai Belajar
                </a>
              </nav>
            </div>

            <dl
              className="home-hero__statistics"
              aria-label="Statistik Ekosistem Mahreen Indonesia"
            >
              {statistics.map((statistic) => (
                <div
                  className="home-hero__statistic"
                  key={statistic.lines.join("-")}
                >
                  <dt className="home-hero__statistic-label">
                    {statistic.lines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </dt>
                  <dd className="home-hero__statistic-value">
                    {statistic.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <Partnership />
        <Purpose />
        <Ekosistem />
        <LayananProfesional />
        <LearningSection />
        <CTA />
        <ClosingSection />
      </main>

      <Footer />
    </>
  );
};

export default Home;
