import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

import bootcampIcon from "../../../assets/LearningSection/Bootcamp.svg";
import workshopIcon from "../../../assets/LearningSection/Workshop.svg";
import certificationIcon from "../../../assets/LearningSection/Certification.svg";
import tickIcon from "../../../assets/LearningSection/tick-icon.svg";

type FeatureItem = {
  label: string;
};

type LearningCard = {
  id: string;
  title: string;
  description: string;
  features: FeatureItem[];
  buttonLabel: string;
  icon: string;
  iconAlt: string;
};

const learningCards: LearningCard[] = [
  {
    id: "bootcamp",
    title: "Bootcamp",
    description:
      "Program intensif 12 minggu yang dirancang untuk mengubah pemula menjadi profesional yang siap kerja.",
    features: [
      { label: "Kurikulum Berbasis Industri" },
      { label: "Proyek Dunia Nyata" },
    ],
    buttonLabel: "Daftar Sekarang",
    icon: bootcampIcon,
    iconAlt: "Ikon Bootcamp",
  },
  {
    id: "workshop",
    title: "Workshop",
    description:
      "Sesi berbasis keterampilan praktis yang fokus pada penguasaan alat dan metodologi spesifik.",
    features: [
      { label: "Sesi Intensif 1-2 Hari" },
      { label: "Latihan Langsung (Hands-on)" },
    ],
    buttonLabel: "Lihat Jadwal",
    icon: workshopIcon,
    iconAlt: "Ikon Workshop",
  },
  {
    id: "certification",
    title: "Certification",
    description:
      "Validasi keahlian Anda dengan sertifikasi yang diakui dari jaringan mitra strategis kami.",
    features: [
      { label: "Standar Global" },
      { label: "Kredensial Terverifikasi" },
    ],
    buttonLabel: "Pelajari Lebih Lanjut",
    icon: certificationIcon,
    iconAlt: "Ikon Certification",
  },
];

const learningStyles = `
  .learning-section {
    width: 100%;
    background-color: #050505;
    padding: 74px 24px 96px;
  }

  .learning-section,
  .learning-section *,
  .learning-section *::before,
  .learning-section *::after {
    box-sizing: border-box;
  }

  .learning-section__container {
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
  }

  .learning-section__header {
    max-width: 660px;
    margin: 0 auto 48px;
    text-align: center;
  }

  .learning-section__eyebrow {
    margin: 0 0 12px;
    color: #d8af61;
    font-family: "Inter", Arial, sans-serif;
    font-size: 11px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 2.2px;
    text-transform: uppercase;
  }

  .learning-section__title {
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(36px, 3.2vw, 48px);
    line-height: 1.12;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 14px;
    letter-spacing: -0.02em;
  }

  .learning-section__subtitle {
    font-family: "Inter", Arial, sans-serif;
    font-size: clamp(16px, 1.25vw, 18px);
    line-height: 1.45;
    font-weight: 400;
    color: #c4c1bc;
    margin: 0 auto;
    max-width: 580px;
  }

  .learning-section__grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 22px;
  }

  .learning-card {
    min-height: 430px;
    padding: 36px 28px 30px;
    background: #0d0d0e;
    border: 1px solid #222222;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #ffffff;
    transition:
      transform 180ms ease,
      border-color 180ms ease,
      background-color 180ms ease;
  }

  .learning-card:hover {
    background-color: #101010;
    border-color: #2f2f2f;
    transform: translateY(-2px);
  }

  .learning-card__icon-wrapper {
    width: 62px;
    height: 62px;
    border-radius: 999px;
    background: #211f18;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
  }

  .learning-card__icon {
    width: 30px;
    height: 30px;
    display: block;
    object-fit: contain;
  }

  .learning-card__title {
    margin: 28px 0 0;
    color: #f4f2ed;
    font-family: "Playfair Display", Georgia, serif;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.16;
    letter-spacing: -0.025em;
  }

  .learning-card__description {
    min-height: 92px;
    margin: 16px 0 0;
    color: #c4c1bc;
    font-family: "Inter", Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.7;
  }

  .learning-card__features {
    width: 100%;
    margin: 26px 0 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 13px;
    list-style: none;
  }

  .learning-card__feature {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #f4f2ed;
    font-family: "Inter", Arial, sans-serif;
    font-size: 13px;
    font-weight: 500;
    line-height: 1.45;
  }

  .learning-card__tick {
    width: 18px;
    height: 18px;
    display: block;
    flex: 0 0 auto;
  }

  .learning-card__button {
    width: 100%;
    margin-top: 24px;
    padding: 14px 24px;
    border: 1px solid rgba(255, 255, 255, 0.28);
    border-radius: 999px;
    background: transparent;
    color: #f4f2ed;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: "Inter", Arial, sans-serif;
    font-size: 13px;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    text-decoration: none;
    transition:
      background-color 180ms ease,
      border-color 180ms ease,
      color 180ms ease,
      transform 180ms ease;
  }

  .learning-card__button:hover,
  .learning-card__button:focus-visible {
    background-color: #d8af61;
    border-color: #d8af61;
    color: #050505;
    transform: translateY(-1px);
  }

  .learning-card__button:focus-visible {
    outline: 3px solid rgba(216, 175, 97, 0.45);
    outline-offset: 4px;
  }

  .learning-section [data-scroll-reveal] {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }

  .learning-section.is-reveal-ready [data-scroll-reveal] {
    transition:
      opacity 0.75s ease,
      transform 0.75s cubic-bezier(0.22, 1, 0.36, 1),
      filter 0.75s ease,
      border-color 180ms ease,
      background-color 180ms ease;
    will-change: opacity, transform, filter;
  }

  .learning-section.is-reveal-ready [data-scroll-reveal]:not(.is-visible) {
    opacity: 0;
    transform: translateY(34px);
    filter: blur(8px);
  }

  .learning-section__header[data-scroll-reveal] {
    transition-delay: 80ms;
  }

  .learning-card[data-scroll-reveal] {
    transition-delay: var(--reveal-delay, 0ms);
  }

  @media (max-width: 980px) {
    .learning-section {
      padding: 64px 20px 84px;
    }

    .learning-section__container {
      max-width: 760px;
    }

    .learning-section__grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 20px;
    }
  }

  @media (max-width: 560px) {
    .learning-section {
      padding: 54px 16px 70px;
    }

    .learning-section__header {
      margin-bottom: 34px;
    }

    .learning-section__grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }

    .learning-card {
      min-height: auto;
      padding: 32px 22px 28px;
    }

    .learning-card__icon-wrapper {
      width: 56px;
      height: 56px;
    }

    .learning-card__title {
      font-size: 24px;
    }

    .learning-card__description {
      min-height: 0;
    }

    .learning-card__button {
      margin-top: 28px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .learning-card,
    .learning-card:hover,
    .learning-card__button,
    .learning-card__button:hover,
    .learning-card__button:focus-visible,
    .learning-section [data-scroll-reveal] {
      transform: none;
      transition: none;
    }

    .learning-section [data-scroll-reveal] {
      opacity: 1;
      filter: none;
    }
  }
`;

const LearningSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const revealElements = section.querySelectorAll<HTMLElement>(
      "[data-scroll-reveal]"
    );

    if (typeof IntersectionObserver === "undefined") {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    section.classList.add("is-reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      section.classList.remove("is-reveal-ready");
    };
  }, []);

  return (
    <>
      <style data-component="learning-section">{learningStyles}</style>

      <section
        className="learning-section"
        id="learning"
        ref={sectionRef}
        aria-labelledby="learning-title"
      >
        <div className="learning-section__container">
          <div className="learning-section__header" data-scroll-reveal>
            <p className="learning-section__eyebrow">Mahreen Learning</p>
            <h2 className="learning-section__title" id="learning-title">
              Program Pengembangan Talenta
            </h2>
            <p className="learning-section__subtitle">
              Akselerasi kemampuan digital dan kreatif melalui pembelajaran
              terstruktur, mentor profesional, dan praktik dunia nyata.
            </p>
          </div>

          <div className="learning-section__grid">
            {learningCards.map((item, index) => (
              <article
                className="learning-card"
                key={item.id}
                data-scroll-reveal
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
              >
                <div className="learning-card__icon-wrapper">
                  <img
                    className="learning-card__icon"
                    src={item.icon}
                    alt={item.iconAlt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <h3 className="learning-card__title">{item.title}</h3>
                <p className="learning-card__description">{item.description}</p>

                <ul className="learning-card__features">
                  {item.features.map((feature) => (
                    <li className="learning-card__feature" key={feature.label}>
                      <img
                        className="learning-card__tick"
                        src={tickIcon}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        aria-hidden="true"
                      />
                      <span>{feature.label}</span>
                    </li>
                  ))}
                </ul>

                <a className="learning-card__button" href={`#/learning/${item.id}`}>
                  {item.buttonLabel}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LearningSection;
