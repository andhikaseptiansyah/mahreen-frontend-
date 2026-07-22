import { ArrowRight } from "lucide-react";
import webinarAi from "../../../../assets/Newsroom/webinar-ai.png";
import webinarDigital from "../../../../assets/Newsroom/webinar-digital.png";
import webinarUiUx from "../../../../assets/Newsroom/webinar-uiux.png";
import WebinarCard, {
  type WebinarItem,
} from "../components/WebinarCard";
import type { NewsroomCategory } from "./FeaturedSection";

const styles = `
  .newsroom-webinars {
    padding-top: clamp(58px, 7vw, 88px);
  }

  .newsroom-section-heading {
    display: flex;
    gap: 24px;
    align-items: flex-end;
    justify-content: space-between;
  }

  .newsroom-section-heading h2 {
    margin: 0;
    color: #e7dfd5;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(28px, 3.4vw, 40px);
    font-weight: 400;
  }

  .newsroom-section-heading p {
    margin: 8px 0 0;
    color: #8f8982;
    font-size: 14px;
  }

  .newsroom-webinar-grid {
    display: grid;
    margin-top: 24px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
  }

  .newsroom-empty-state {
    margin-top: 24px;
    padding: 40px;
    color: #9b948c;
    background: #0b0b0b;
    border: 1px solid rgba(255, 255, 255, 0.07);
    font-size: 14px;
    text-align: center;
  }

  @media (max-width: 980px) {
    .newsroom-webinar-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 640px) {
    .newsroom-section-heading {
      align-items: flex-start;
      flex-direction: column;
    }

    .newsroom-webinar-grid {
      grid-template-columns: 1fr;
    }
  }
`;

type WebinarSectionProps = {
  activeCategory: NewsroomCategory;
  searchQuery: string;
};

const webinars: readonly WebinarItem[] = [
  {
    id: 1,
    title: "Digital Marketing Strategy",
    category: "Event & Webinar",
    label: "Strategy",
    date: "24 Oct",
    duration: "90 Menit",
    speaker: "Budi Santoso",
    price: "Rp 149.000",
    image: webinarDigital,
    href: "#/newsroom/webinar/digital-marketing-strategy",
    labelTone: "gold",
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    category: "Event & Webinar",
    label: "Design",
    date: "28 Oct",
    duration: "140 Menit",
    speaker: "Siti Aminah",
    price: "Gratis",
    image: webinarUiUx,
    href: "#/newsroom/webinar/ui-ux-design-masterclass",
    labelTone: "light",
  },
  {
    id: 3,
    title: "AI for Business",
    category: "Berita Mahreen",
    label: "Technology",
    date: "31 Oct",
    duration: "200 Menit",
    speaker: "Renoy Wijaya",
    price: "Rp 249.000",
    image: webinarAi,
    href: "#/newsroom/webinar/ai-for-business",
    labelTone: "red",
  },
];

const WebinarSection = ({
  activeCategory,
  searchQuery,
}: WebinarSectionProps) => {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredWebinars = webinars.filter((webinar) => {
    const categoryMatches =
      activeCategory === "Semua" || webinar.category === activeCategory;
    const queryMatches =
      normalizedQuery.length === 0 ||
      webinar.title.toLowerCase().includes(normalizedQuery) ||
      webinar.speaker.toLowerCase().includes(normalizedQuery) ||
      webinar.label.toLowerCase().includes(normalizedQuery);

    return categoryMatches && queryMatches;
  });

  return (
    <>
      <style>{styles}</style>

      <section
        className="newsroom-webinars newsroom-content-section"
        aria-labelledby="webinars-title"
      >
        <div className="newsroom-section-heading" data-newsroom-reveal>
          <div>
            <h2 id="webinars-title">Webinar Mendatang</h2>
            <p>Kurikulum yang disusun untuk kebutuhan industri masa kini.</p>
          </div>

          <a
            className="newsroom-inline-link"
            href="#/newsroom?section=newsroom-events"
          >
            Lihat Semua
            <ArrowRight size={14} aria-hidden="true" />
          </a>
        </div>

        {filteredWebinars.length > 0 ? (
          <div className="newsroom-webinar-grid">
            {filteredWebinars.map((webinar) => (
              <WebinarCard webinar={webinar} key={webinar.id} />
            ))}
          </div>
        ) : (
          <div className="newsroom-empty-state" data-newsroom-reveal>
            Tidak ada agenda yang cocok dengan pencarian atau kategori
            tersebut.
          </div>
        )}
      </section>
    </>
  );
};

export default WebinarSection;
