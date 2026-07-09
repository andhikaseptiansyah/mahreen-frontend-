// src/pages/Home/sections/Partnership.tsx
import { useEffect, useRef, type CSSProperties } from "react";

import logoBerkarya from "../../../assets/Partnership/Icon-berkarya.png";
import logoITB from "../../../assets/Partnership/ITB.png";
import logoUI from "../../../assets/Partnership/UI.png";
import logoPNP from "../../../assets/Partnership/PNP.png";
import logoMaChung from "../../../assets/Partnership/Ma Chung.png";
import logoPresUniv from "../../../assets/Partnership/PU.png";
import logoUTB from "../../../assets/Partnership/UTB.png";

const partners = [
  { id: 1, name: "Berkarya", logo: logoBerkarya, logoWidth: 190 },
  { id: 2, name: "ITB", logo: logoITB, logoWidth: 84 },
  { id: 3, name: "Universitas Indonesia", logo: logoUI, logoWidth: 84 },
  { id: 4, name: "Politeknik Negeri Padang", logo: logoPNP, logoWidth: 84 },
  { id: 5, name: "Ma Chung", logo: logoMaChung, logoWidth: 90 },
  { id: 6, name: "President University", logo: logoPresUniv, logoWidth: 84 },
  { id: 7, name: "UTB", logo: logoUTB, logoWidth: 102 },
];

const partnershipJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Partner dan Institusi Mahreen Indonesia",
  description:
    "Daftar partner dan institusi yang berkolaborasi dengan Mahreen Indonesia.",
  itemListElement: partners.map((partner, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: partner.name,
  })),
};

const partnershipStyles = `
  @keyframes fadeInPartnership {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .partnership-section {
    width: 100%;
    box-sizing: border-box;
    height: 210px;
    min-height: 210px;
    padding: 17px 32px 40px;
    background: #111111;
    overflow: hidden;
  }

  .partnership-section *,
  .partnership-section *::before,
  .partnership-section *::after {
    box-sizing: border-box;
  }

  .partnership-section__title {
    height: 13px;
    margin: 0 0 42px;
    color: rgba(255, 255, 255, 0.82);
    font-family: "Inter", Arial, sans-serif;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 2.45px;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .partnership-section__logos {
    width: max-content;
    height: 86px;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 28px;
    list-style: none;
  }

  .partnership-section__logo-item {
    width: var(--partner-logo-width);
    min-width: var(--partner-logo-width);
    height: 86px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .partnership-section__logo-img {
    display: block;
    width: 100%;
    height: 86px;
    object-fit: contain;
    object-position: center;
    opacity: 1;
    filter: grayscale(1);
    user-select: none;
    -webkit-user-drag: none;
  }

  .partnership-section.is-reveal-ready .partnership-section__title,
  .partnership-section.is-reveal-ready .partnership-section__logo-item {
    opacity: 0;
  }

  .partnership-section.is-visible .partnership-section__title,
  .partnership-section.is-visible .partnership-section__logo-item {
    animation: fadeInPartnership 0.55s ease-out forwards;
  }

  .partnership-section__logo-name {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (max-width: 680px) {
    .partnership-section {
      padding-right: 18px;
      padding-left: 18px;
      overflow-x: auto;
      overflow-y: hidden;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    .partnership-section::-webkit-scrollbar {
      display: none;
    }

    .partnership-section__title {
      position: sticky;
      left: 0;
      width: calc(100vw - 36px);
      font-size: 9px;
      letter-spacing: 2px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .partnership-section.is-reveal-ready .partnership-section__title,
    .partnership-section.is-reveal-ready .partnership-section__logo-item {
      opacity: 1;
    }

    .partnership-section.is-visible .partnership-section__title,
    .partnership-section.is-visible .partnership-section__logo-item {
      animation: none;
    }
  }
`;

const Partnership = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (!sectionElement) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      sectionElement.classList.add("is-visible");
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      sectionElement.classList.add("is-visible");
      return;
    }

    sectionElement.classList.add("is-reveal-ready");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionElement.classList.add("is-visible");
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(sectionElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style data-component="partnership">{partnershipStyles}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(partnershipJsonLd),
        }}
      />

      <section
        className="partnership-section"
        id="partnership"
        ref={sectionRef}
        aria-labelledby="partnership-title"
      >
        <h2 className="partnership-section__title" id="partnership-title">
          Trusted by Partners &amp; Institutions
        </h2>

        <ul
          className="partnership-section__logos"
          aria-label="Daftar partner Mahreen Indonesia"
        >
          {partners.map((partner, index) => (
            <li
              key={partner.id}
              className="partnership-section__logo-item"
              style={
                {
                  "--partner-logo-width": `${partner.logoWidth}px`,
                  animationDelay: `${0.1 + index * 0.07}s`,
                } as CSSProperties
              }
            >
              <img
                src={partner.logo}
                alt={`Logo ${partner.name}, partner Mahreen Indonesia`}
                className="partnership-section__logo-img"
                loading="lazy"
                decoding="async"
                width={partner.logoWidth}
                height={86}
              />

              <span className="partnership-section__logo-name">
                {partner.name}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Partnership;
