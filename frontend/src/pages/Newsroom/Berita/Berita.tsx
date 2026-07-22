import { useEffect, useMemo, useState } from "react";
import featuredBuilding from "../../../assets/Newsroom/featured-building.png";
import webinarAi from "../../../assets/Newsroom/webinar-ai.png";
import webinarDigital from "../../../assets/Newsroom/webinar-digital.png";
import webinarUiux from "../../../assets/Newsroom/webinar-uiux.png";
import meetingImage from "../../../assets/Purpose/meeting.jpg";
import brandingImage from "../../../assets/TanyaMahreen/Home/our-work-branding.png";
import contentImage from "../../../assets/TanyaMahreen/Home/our-work-content.png";
import websiteImage from "../../../assets/TanyaMahreen/Home/our-work-website.png";
import NewsroomLayout from "../layout/NewsroomLayout";
import type { NewsroomArticle } from "./components/ArticleCard";
import ArticleGridSection from "./sections/ArticleGridSection";
import FilterSection, {
  type NewsroomSort,
} from "./sections/FilterSection";
import HeroSection from "./sections/HeroSection";

const styles = `
  .newsroom-list-page {
    --newsroom-gold: #e5c477;
    --newsroom-gold-light: #f0d58f;
    --newsroom-border: rgba(229, 196, 119, 0.24);

    position: relative;
    width: 100%;
    max-width: 100%;
    min-width: 0;
    min-height: 100dvh;
    padding-top: var(--navbar-height, 74px);
    overflow-x: clip;
    color: #f4efe8;
    background: #000;
    font-family: Arial, Helvetica, sans-serif;
  }

  .newsroom-list-page,
  .newsroom-list-page *,
  .newsroom-list-page *::before,
  .newsroom-list-page *::after {
    box-sizing: border-box;
  }

  .newsroom-list-page a {
    color: inherit;
    text-decoration: none;
  }

  .newsroom-list-page button,
  .newsroom-list-page input,
  .newsroom-list-page select {
    font: inherit;
  }

  .newsroom-list-page__main {
    width: 100%;
    min-width: 0;
    overflow-x: clip;
    background: #000;
  }

  .newsroom-list-page [data-newsroom-list-reveal] {
    opacity: 0;
    transform: translate3d(0, 32px, 0) scale(0.985);
    transition:
      opacity 720ms cubic-bezier(0.22, 1, 0.36, 1),
      transform 720ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .newsroom-list-page [data-newsroom-list-reveal].is-visible {
    opacity: 1;
    transform: none;
  }

  @media (prefers-reduced-motion: reduce) {
    .newsroom-list-page *,
    .newsroom-list-page *::before,
    .newsroom-list-page *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }

    .newsroom-list-page [data-newsroom-list-reveal] {
      opacity: 1;
      transform: none;
    }
  }
`;

const newsroomArticles: readonly NewsroomArticle[] = [
  {
    id: 1,
    slug: "ekspansi-hub-kreatif-mahreen-di-jawa-barat",
    title: "Ekspansi Hub Kreatif Mahreen di Jawa Barat",
    excerpt:
      "Langkah strategis Mahreen dalam memperluas ruang kolaborasi kreatif dan digital bagi talenta lokal.",
    category: "Ecosystem Update",
    publishedAt: "13 Sep 2025",
    image: meetingImage,
  },
  {
    id: 2,
    slug: "mahreen-leadership-summit-navigasi-ai-di-era-50",
    title: "Mahreen Leadership Summit: Navigasi AI di Era 5.0",
    excerpt:
      "Rangkuman poin penting dari konferensi kepemimpinan mengenai peluang AI dan transformasi organisasi.",
    category: "Events",
    publishedAt: "08 Sep 2025",
    image: webinarAi,
  },
  {
    id: 3,
    slug: "penghargaan-inovasi-digital-terbaik-2024",
    title: "Penghargaan Inovasi Digital Terbaik 2024",
    excerpt:
      "Mahreen Indonesia meraih predikat sebagai pionir pengembangan solusi digital yang berdampak.",
    category: "Press Release",
    publishedAt: "28 Aug 2025",
    image: webinarDigital,
  },
  {
    id: 4,
    slug: "membangun-pengalaman-brand-yang-relevan",
    title: "Membangun Pengalaman Brand yang Relevan",
    excerpt:
      "Strategi menyatukan identitas visual, komunikasi, dan pengalaman pelanggan dalam satu ekosistem.",
    category: "Artikel & Insight",
    publishedAt: "19 Aug 2025",
    image: brandingImage,
  },
  {
    id: 5,
    slug: "masa-depan-transformasi-digital",
    title: "Masa Depan Transformasi Digital: Visi Mahreen 2025",
    excerpt:
      "Membaca arah perkembangan AI, blockchain, serta perubahan perilaku konsumen dalam ekosistem digital.",
    category: "Artikel & Insight",
    publishedAt: "12 Aug 2025",
    image: featuredBuilding,
  },
  {
    id: 6,
    slug: "uiux-untuk-produk-digital-yang-inklusif",
    title: "UI/UX untuk Produk Digital yang Lebih Inklusif",
    excerpt:
      "Prinsip desain yang membantu produk digital terasa mudah, relevan, dan dapat digunakan lebih banyak orang.",
    category: "Design",
    publishedAt: "02 Aug 2025",
    image: webinarUiux,
  },
  {
    id: 7,
    slug: "strategi-konten-untuk-brand-bertumbuh",
    title: "Strategi Konten untuk Brand yang Sedang Bertumbuh",
    excerpt:
      "Kerangka sederhana untuk merencanakan konten yang konsisten tanpa kehilangan karakter dan tujuan bisnis.",
    category: "Marketing",
    publishedAt: "24 Jul 2025",
    image: contentImage,
  },
  {
    id: 8,
    slug: "website-sebagai-pusat-ekosistem-digital",
    title: "Website sebagai Pusat Ekosistem Digital Bisnis",
    excerpt:
      "Menghubungkan informasi, layanan, transaksi, dan hubungan pelanggan melalui pengalaman website yang terarah.",
    category: "Technology",
    publishedAt: "14 Jul 2025",
    image: websiteImage,
  },
  {
    id: 9,
    slug: "kolaborasi-kreatif-lintas-disiplin",
    title: "Kolaborasi Kreatif Lintas Disiplin untuk Dampak Nyata",
    excerpt:
      "Cara tim dengan latar belakang berbeda menyatukan gagasan menjadi program yang terukur dan berkelanjutan.",
    category: "Ecosystem Update",
    publishedAt: "03 Jul 2025",
    image: meetingImage,
  },
  {
    id: 10,
    slug: "digital-marketing-strategy-untuk-umkm",
    title: "Digital Marketing Strategy untuk Bisnis dan UMKM",
    excerpt:
      "Menentukan saluran, pesan, dan indikator performa yang tepat untuk pertumbuhan pemasaran digital.",
    category: "Marketing",
    publishedAt: "21 Jun 2025",
    image: webinarDigital,
  },
  {
    id: 11,
    slug: "ai-for-business-dari-ide-ke-implementasi",
    title: "AI for Business: Dari Ide menuju Implementasi",
    excerpt:
      "Memetakan kebutuhan bisnis sebelum memilih solusi kecerdasan buatan yang efektif dan bertanggung jawab.",
    category: "Technology",
    publishedAt: "09 Jun 2025",
    image: webinarAi,
  },
  {
    id: 12,
    slug: "design-system-untuk-produk-yang-konsisten",
    title: "Design System untuk Produk yang Konsisten",
    excerpt:
      "Membangun komponen, aturan visual, dan pola interaksi yang membantu tim bergerak lebih cepat.",
    category: "Design",
    publishedAt: "29 May 2025",
    image: webinarUiux,
  },
];

const categories = [
  "Semua",
  ...Array.from(new Set(newsroomArticles.map((article) => article.category))),
] as const;

const NewsroomBerita = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [sortBy, setSortBy] = useState<NewsroomSort>("newest");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredArticles = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    const filtered = newsroomArticles.filter((article) => {
      const matchesCategory =
        activeCategory === "Semua" || article.category === activeCategory;
      const matchesSearch =
        normalizedQuery.length === 0 ||
        article.title.toLowerCase().includes(normalizedQuery) ||
        article.excerpt.toLowerCase().includes(normalizedQuery) ||
        article.category.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });

    return [...filtered].sort((first, second) => {
      if (sortBy === "title") {
        return first.title.localeCompare(second.title, "id");
      }

      return sortBy === "oldest" ? first.id - second.id : second.id - first.id;
    });
  }, [activeCategory, searchQuery, sortBy]);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".newsroom-list-page [data-newsroom-list-reveal]:not(.is-visible)",
      ),
    );

    if (elements.length === 0) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
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
        threshold: 0.08,
        rootMargin: "0px 0px 90px 0px",
      },
    );

    elements.forEach((element, index) => {
      element.style.transitionDelay = `${Math.min(index % 6, 5) * 70}ms`;
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [filteredArticles, visibleCount]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setVisibleCount(6);
  };

  const handleCategoryChange = (value: string) => {
    setActiveCategory(value);
    setVisibleCount(6);
  };

  const handleSortChange = (value: NewsroomSort) => {
    setSortBy(value);
    setVisibleCount(6);
  };

  return (
    <>
      <style>{styles}</style>

      <NewsroomLayout>
        <div className="newsroom-list-page">
          <main className="newsroom-list-page__main">
            <HeroSection />
            <FilterSection
              searchQuery={searchQuery}
              categories={categories}
              activeCategory={activeCategory}
              sortBy={sortBy}
              isFilterOpen={isFilterOpen}
              onSearchChange={handleSearchChange}
              onCategoryChange={handleCategoryChange}
              onSortChange={handleSortChange}
              onToggleFilter={() => setIsFilterOpen((current) => !current)}
            />
            <ArticleGridSection
              articles={filteredArticles}
              visibleCount={visibleCount}
              onLoadMore={() => setVisibleCount((current) => current + 3)}
            />
          </main>
        </div>
      </NewsroomLayout>
    </>
  );
};

export default NewsroomBerita;
