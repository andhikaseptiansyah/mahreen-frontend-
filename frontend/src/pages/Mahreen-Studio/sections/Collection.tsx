import { useState, useEffect, useRef } from "react";
import signatureNoirHoodieImage from "../../../assets/Mahreen-Studio/Collection/signature-noir-hoodie.png";
import lifestyleEssentialsImage from "../../../assets/Mahreen-Studio/Collection/lifestyle-essentials.png";
import merchandiseImage from "../../../assets/Mahreen-Studio/Collection/merchandise.png";
import digitalShowroomImage from "../../../assets/Mahreen-Studio/Collection/digital-showroom.png";

type CollectionTab = "apparel" | "merchandise" | "lifestyle";

type CollectionCard = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  layout: "featured" | "portrait" | "compact" | "wide";
  eyebrow?: string;
  imagePosition?: string;
  href: string;
};

const collectionTabs: { label: string; value: CollectionTab }[] = [
  { label: "Apparel", value: "apparel" },
  { label: "Merchandise", value: "merchandise" },
  { label: "Lifestyle Essentials", value: "lifestyle" },
];

const collectionCards: CollectionCard[] = [
  {
    id: "signature-noir-hoodie",
    title: "The Signature Noir Hoodie",
    description: "Elevated comfort meets street sophistication.",
    eyebrow: "Featured Selection",
    layout: "featured",
    image: signatureNoirHoodieImage,
    imageAlt: "Model memakai hoodie gelap dengan gaya urban modern",
    imagePosition: "center 42%",
    href: "#/mahreen-studio/product/signature-noir-hoodie",
  },
  {
    id: "lifestyle-essentials",
    title: "Lifestyle Essentials",
    description: "Curated for the modern creative.",
    layout: "portrait",
    image: lifestyleEssentialsImage,
    imageAlt: "Produk stationery premium berwarna hitam di atas meja",
    imagePosition: "center",
    href: "#/mahreen-studio?section=produk-unggulan",
  },
  {
    id: "merchandise",
    title: "Merchandise",
    description: "Everyday pieces, distinctly Mahreen.",
    layout: "compact",
    image: merchandiseImage,
    imageAlt: "Tekstur material hitam premium dengan detail emboss",
    imagePosition: "center",
    href: "#/mahreen-studio?section=produk-unggulan",
  },
  {
    id: "digital-showroom",
    title: "Digital Showroom",
    description: "Explore our full ecosystem in a virtual experience.",
    layout: "wide",
    image: digitalShowroomImage,
    imageAlt: "Interior showroom modern dengan pencahayaan hangat",
    imagePosition: "center 59%",
    href: "#/mahreen-studio?section=specializations",
  },
];

const collectionStyles = `
  @import url("https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Inter:wght@400;500;600&family=Playfair+Display:wght@500;600&display=swap");

  .studio-collection {
    width: 100%;
    background: #000000;
    color: #ffffff;
    padding: 17px clamp(18px, 3.88vw, 34px) 64px;
    overflow: hidden; /* Mencegah elemen animasi membuat scroll horizontal */
  }

  .studio-collection,
  .studio-collection *,
  .studio-collection *::before,
  .studio-collection *::after {
    box-sizing: border-box;
  }

  .studio-collection__inner {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* Keyframes Animasi Ringan */
  @keyframes fadeUpInCollection {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .studio-collection__heading-row {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 24px;
    
    /* Setup Awal Animasi */
    opacity: 0;
  }

  /* Trigger Animasi Header saat is-visible aktif */
  .studio-collection.is-visible .studio-collection__heading-row {
    animation: fadeUpInCollection 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .studio-collection__eyebrow {
    margin: 0 0 7px;
    color: #d8b56e;
    font-family: "DM Mono", "Courier New", monospace;
    font-size: 7px;
    font-weight: 500;
    letter-spacing: 1.45px;
    line-height: 1;
    text-transform: uppercase;
  }

  .studio-collection__title {
    margin: 0;
    color: #ffffff;
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(28px, 3.05vw, 37px);
    font-weight: 600;
    letter-spacing: -0.045em;
    line-height: 0.98;
  }

  .studio-collection__tabs {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: clamp(21px, 3.05vw, 36px);
    margin: 0 2px 2px 0;
    padding: 0;
    list-style: none;
  }

  .studio-collection__tab {
    position: relative;
    appearance: none;
    border: 0;
    background: transparent;
    color: rgba(255, 255, 255, 0.58);
    cursor: pointer;
    font-family: "DM Mono", "Courier New", monospace;
    font-size: 7px;
    font-weight: 400;
    letter-spacing: 1.2px;
    line-height: 1;
    padding: 0 0 8px;
    text-transform: none;
    transition: color 180ms ease;
    white-space: nowrap;
  }

  .studio-collection__tab::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1px;
    background: #d8b56e;
    opacity: 0;
    transform: scaleX(0.25);
    transform-origin: center;
    transition: opacity 180ms ease, transform 180ms ease;
  }

  .studio-collection__tab:hover,
  .studio-collection__tab:focus-visible,
  .studio-collection__tab.is-active {
    color: #d8b56e;
    outline: none;
  }

  .studio-collection__tab.is-active::after {
    opacity: 1;
    transform: scaleX(1);
  }

  .studio-collection__tab:focus-visible {
    outline: 1px solid rgba(216, 181, 110, 0.74);
    outline-offset: 4px;
  }

  .studio-collection__grid {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    grid-template-rows: clamp(342px, 43.7vw, 438px) clamp(242px, 29vw, 310px);
    gap: 14px;
    margin-top: 40px;
  }

  .studio-collection__card {
    position: relative;
    min-width: 0;
    overflow: hidden;
    isolation: isolate;
    background: #101010;
    text-decoration: none;

    /* Setup Awal Animasi */
    opacity: 0;
  }

  /* Trigger Animasi Card saat is-visible aktif */
  .studio-collection.is-visible .studio-collection__card {
    animation: fadeUpInCollection 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .studio-collection__card--featured {
    grid-column: span 4;
  }

  .studio-collection__card--portrait {
    grid-column: span 2;
  }

  .studio-collection__card--compact {
    grid-column: span 2;
  }

  .studio-collection__card--wide {
    grid-column: span 4;
  }

  .studio-collection__image {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    filter: brightness(0.73) saturate(0.64) contrast(1.06);
    transform: scale(1.01);
    transition: transform 650ms cubic-bezier(0.2, 0.65, 0.3, 1), filter 650ms ease;
  }

  .studio-collection__card::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    background:
      linear-gradient(90deg, rgba(0, 0, 0, 0.16) 0%, transparent 48%, rgba(0, 0, 0, 0.1) 100%),
      linear-gradient(180deg, rgba(0, 0, 0, 0.03) 20%, rgba(0, 0, 0, 0.12) 45%, rgba(0, 0, 0, 0.89) 100%);
    pointer-events: none;
  }

  .studio-collection__card--compact::before {
    background:
      linear-gradient(180deg, rgba(0, 0, 0, 0.14) 10%, rgba(0, 0, 0, 0.78) 100%),
      linear-gradient(90deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.28) 100%);
  }

  .studio-collection__card--wide::before {
    background:
      linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.04) 65%),
      linear-gradient(180deg, rgba(0, 0, 0, 0.02) 18%, rgba(0, 0, 0, 0.85) 100%);
  }

  .studio-collection__card:hover .studio-collection__image,
  .studio-collection__card:focus-visible .studio-collection__image {
    filter: brightness(0.82) saturate(0.72) contrast(1.05);
    transform: scale(1.045);
  }

  .studio-collection__card:focus-visible {
    outline: 1px solid #d8b56e;
    outline-offset: 4px;
  }

  .studio-collection__copy {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    padding: 23px 25px 24px;
  }

  .studio-collection__card--portrait .studio-collection__copy {
    padding-right: 24px;
    padding-left: 24px;
  }

  .studio-collection__card--compact .studio-collection__copy {
    padding: 22px 20px 20px;
  }

  .studio-collection__card--wide .studio-collection__copy {
    padding: 23px 24px 20px;
  }

  .studio-collection__card-eyebrow {
    width: fit-content;
    margin: 0 0 13px;
    padding: 4px 8px 3px;
    border: 1px solid rgba(216, 181, 110, 0.52);
    color: #d8b56e;
    font-family: "DM Mono", "Courier New", monospace;
    font-size: 6px;
    font-weight: 400;
    letter-spacing: 0.75px;
    line-height: 1;
    text-transform: uppercase;
  }

  .studio-collection__card-title {
    margin: 0;
    color: #ffffff;
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(17px, 1.72vw, 22px);
    font-weight: 500;
    letter-spacing: -0.035em;
    line-height: 1.08;
    text-wrap: balance;
  }

  .studio-collection__card--compact .studio-collection__card-title,
  .studio-collection__card--wide .studio-collection__card-title {
    font-size: clamp(16px, 1.55vw, 20px);
  }

  .studio-collection__card-description {
    margin: 8px 0 0;
    color: rgba(255, 255, 255, 0.67);
    font-family: "Inter", Arial, sans-serif;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: -0.01em;
    line-height: 1.45;
  }

  @media (max-width: 720px) {
    .studio-collection {
      padding-top: 24px;
      padding-bottom: 52px;
    }

    .studio-collection__heading-row {
      align-items: flex-start;
      flex-direction: column;
      gap: 21px;
    }

    .studio-collection__tabs {
      justify-content: flex-start;
      width: 100%;
      gap: 21px;
      margin: 0;
      overflow-x: auto;
      scrollbar-width: none;
    }

    .studio-collection__tabs::-webkit-scrollbar {
      display: none;
    }

    .studio-collection__grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-template-rows: 350px 270px 240px;
      gap: 12px;
      margin-top: 30px;
    }

    .studio-collection__card--featured {
      grid-column: 1 / -1;
    }

    .studio-collection__card--portrait,
    .studio-collection__card--compact {
      grid-column: span 1;
    }

    .studio-collection__card--wide {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 480px) {
    .studio-collection {
      padding-right: 16px;
      padding-left: 16px;
    }

    .studio-collection__title {
      font-size: 29px;
    }

    .studio-collection__grid {
      grid-template-columns: 1fr;
      grid-template-rows: 350px 290px 240px 250px;
    }

    .studio-collection__card--featured,
    .studio-collection__card--portrait,
    .studio-collection__card--compact,
    .studio-collection__card--wide {
      grid-column: 1;
    }

    .studio-collection__copy,
    .studio-collection__card--portrait .studio-collection__copy,
    .studio-collection__card--compact .studio-collection__copy,
    .studio-collection__card--wide .studio-collection__copy {
      padding: 22px 20px;
    }
  }
`;

const Collection = () => {
  const [activeTab, setActiveTab] = useState<CollectionTab>("apparel");
  
  // State dan Ref untuk Animation Observer
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (!sectionElement) return;

    // Observer API memantau elemen tanpa memberatkan performa
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Jika elemen mulai terlihat setidaknya 15% dari viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionElement);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(sectionElement);

    return () => {
      observer.unobserve(sectionElement);
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      // Tambahkan logic "is-visible" ketika user scroll masuk ke bagian ini
      className={`studio-collection ${isVisible ? 'is-visible' : ''}`} 
      id="collection" 
      aria-labelledby="collection-title"
      ref={sectionRef}
    >
      <style data-component="studio-collection">{collectionStyles}</style>

      <div className="studio-collection__inner">
        <header className="studio-collection__heading-row">
          <div>
            <p className="studio-collection__eyebrow">Curated Selects</p>
            <h2 className="studio-collection__title" id="collection-title">
              Our Collection
            </h2>
          </div>

          <ul className="studio-collection__tabs" aria-label="Kategori koleksi Mahreen Studio">
            {collectionTabs.map((tab) => {
              const isActive = activeTab === tab.value;

              return (
                <li key={tab.value}>
                  <button
                    className={`studio-collection__tab${isActive ? " is-active" : ""}`}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveTab(tab.value)}
                  >
                    {tab.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </header>

        <div className="studio-collection__grid">
          {collectionCards.map((card, index) => (
            <a
              key={card.id}
              className={`studio-collection__card studio-collection__card--${card.layout}`}
              href={card.href}
              aria-label={`Lihat ${card.title}`}
              // Delay animasi yang berbeda untuk setiap gambar (Stagger Effect)
              style={{ animationDelay: `${0.1 + index * 0.15}s` }} 
            >
              <img
                className="studio-collection__image"
                src={card.image}
                alt={card.imageAlt}
                loading="lazy"
                style={{ objectPosition: card.imagePosition }}
              />

              <div className="studio-collection__copy">
                {card.eyebrow ? (
                  <p className="studio-collection__card-eyebrow">{card.eyebrow}</p>
                ) : null}
                <h3 className="studio-collection__card-title">{card.title}</h3>
                <p className="studio-collection__card-description">{card.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;