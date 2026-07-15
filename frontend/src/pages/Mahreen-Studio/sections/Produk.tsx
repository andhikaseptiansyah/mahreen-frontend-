import { useState, useEffect, useRef } from "react";

type ProdukTab = "all" | "apparel" | "merchandise";

type ProductCard = {
  id: string;
  title: string;
  price: string;
  stock: number;
  category: "apparel" | "merchandise";
};

const produkTabs: { label: string; value: ProdukTab }[] = [
  { label: "Semua Produk", value: "all" },
  { label: "Apparel", value: "apparel" },
  { label: "Merchandise", value: "merchandise" },
];

const products: ProductCard[] = [
  {
    id: "signature-tee-new",
    title: "Mahreen Signature Tee",
    price: "Rp. 249.000",
    stock: 70,
    category: "apparel",
  },
  {
    id: "refined-modisty-new",
    title: "Mahreen Refined Modisty",
    price: "Rp. 449.000",
    stock: 70,
    category: "apparel",
  },
  {
    id: "elevated-essentials-new",
    title: "Mahreen Elevated Essentials",
    price: "Rp. 629.000",
    stock: 70,
    category: "apparel",
  },
  {
    id: "everyday-motion-new",
    title: "Mahreen Everyday Motion",
    price: "Rp. 389.000",
    stock: 70,
    category: "apparel",
  },
];

const produkStyles = `
  @import url("https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Inter:wght@400;500;600&family=Playfair+Display:wght@500;600&display=swap");

  .studio-produk {
    width: 100%;
    background: #050505; 
    color: #ffffff;
    padding: 40px clamp(16px, 4vw, 32px);
    font-family: "Inter", sans-serif;
    overflow: hidden;
  }

  .studio-produk * {
    box-sizing: border-box;
  }

  .studio-produk__inner {
    width: 100%;
    max-width: 1200px; 
    margin: 0 auto;
  }

  @keyframes fadeUpInProduk {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Header & Tabs */
  .studio-produk__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 12px;
    margin-bottom: 24px;
    opacity: 0;
  }

  .studio-produk.is-visible .studio-produk__header {
    animation: fadeUpInProduk 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .studio-produk__tabs {
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
    list-style: none;
    transform: translateY(13px);
  }

  .studio-produk__tab {
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.5);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    padding: 0 0 12px;
    transition: color 0.3s ease;
    border-bottom: 2px solid transparent;
  }

  .studio-produk__tab:hover {
    color: rgba(255, 255, 255, 0.8);
  }

  .studio-produk__tab.is-active {
    color: #ffffff;
    border-bottom: 2px solid #ffffff;
  }

  .studio-produk__count {
    color: rgba(255, 255, 255, 0.5);
    font-family: "DM Mono", monospace;
    font-size: 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  .studio-produk__count span {
    color: #ffffff;
  }

  /* Grid Layout */
  .studio-produk__grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 16px; 
  }

  /* Card Layout */
  .studio-produk__card {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    aspect-ratio: 7 / 10; 
    text-decoration: none;
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, #262626 0%, #0a0a0a 100%);
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: transform 0.3s ease, border-color 0.3s ease;
    opacity: 0; 
  }

  .studio-produk__card:hover {
    transform: translateY(-6px);
    border-color: rgba(255, 255, 255, 0.2);
  }

  .studio-produk.is-visible .studio-produk__card {
    animation: fadeUpInProduk 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  /* Card Content */
  .studio-produk__copy {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px 16px; 
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 8px; 
  }

  .studio-produk__stock {
    display: flex;
    align-items: center;
    gap: 6px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .studio-produk__stock-dot {
    width: 5px;
    height: 5px;
    background-color: #ffffff;
    border-radius: 50%;
  }

  .studio-produk__title {
    margin: 0;
    color: #ffffff;
    font-family: "Playfair Display", serif;
    font-size: clamp(16px, 1.5vw, 18px); 
    font-weight: 500;
    line-height: 1.2;
  }

  .studio-produk__price {
    margin: 2px 0 0;
    color: rgba(255, 255, 255, 0.7);
    font-family: "DM Mono", monospace;
    font-size: 12px;
    letter-spacing: 0.5px;
  }

  /* Responsiveness */
  @media (max-width: 1024px) {
    .studio-produk__grid {
      grid-template-columns: repeat(2, minmax(0, 1fr)); 
    }
  }

  @media (max-width: 768px) {
    .studio-produk__header {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }
    .studio-produk__tabs {
      transform: translateY(0);
      width: 100%;
      overflow-x: auto;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    .studio-produk__count {
      align-self: flex-end;
    }
  }

  @media (max-width: 480px) {
    .studio-produk__grid {
      grid-template-columns: 1fr; 
    }
  }
`;

const Produk = () => {
  const [activeTab, setActiveTab] = useState<ProdukTab>("all");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
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

  const filteredProducts = products.filter(
    (product) => activeTab === "all" || product.category === activeTab
  );

  return (
    <section 
      className={`studio-produk ${isVisible ? 'is-visible' : ''}`} 
      id="produk-unggulan" // ID diubah agar tidak bentrok dengan ID 'collection'
      ref={sectionRef}
    >
      <style data-component="studio-produk">{produkStyles}</style>

      <div className="studio-produk__inner">
        <header className="studio-produk__header">
          <ul className="studio-produk__tabs">
            {produkTabs.map((tab) => {
              const isActive = activeTab === tab.value;
              return (
                <li key={tab.value}>
                  <button
                    className={`studio-produk__tab${isActive ? " is-active" : ""}`}
                    type="button"
                    onClick={() => setActiveTab(tab.value)}
                  >
                    {tab.label}
                  </button>
                </li>
              );
            })}
          </ul>
          
          <div className="studio-produk__count">
            <span>{filteredProducts.length}</span> PRODUCTS
          </div>
        </header>

        <div className="studio-produk__grid">
          {filteredProducts.map((card, index) => (
            <a
              key={card.id}
              className="studio-produk__card"
              href={`#/mahreen-studio/product/${card.id}`}
              aria-label={`Lihat detail ${card.title}`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }} 
            >
              <div className="studio-produk__copy">
                <div className="studio-produk__stock">
                  <span className="studio-produk__stock-dot"></span>
                  {card.stock} PCS TERSEDIA
                </div>
                <h3 className="studio-produk__title">{card.title}</h3>
                <p className="studio-produk__price">{card.price}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Produk;