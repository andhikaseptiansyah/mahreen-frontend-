import { CalendarDays, Clock3, UserRound } from "lucide-react";

const styles = `
  .newsroom-webinar-card {
    overflow: hidden;
    background: #0c0c0c;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    transition:
      border-color 220ms ease,
      transform 220ms ease,
      box-shadow 220ms ease;
  }

  .newsroom-webinar-card:hover {
    border-color: var(--newsroom-border);
    box-shadow: 0 22px 50px rgba(0, 0, 0, 0.35);
    transform: translateY(-5px);
  }

  .newsroom-webinar-card__image {
    position: relative;
    display: block;
    height: 215px;
    overflow: hidden;
  }

  .newsroom-webinar-card__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 500ms ease;
  }

  .newsroom-webinar-card:hover .newsroom-webinar-card__image img {
    transform: scale(1.04);
  }

  .newsroom-webinar-card__image span {
    position: absolute;
    top: 11px;
    left: 11px;
    padding: 7px 11px;
    color: #21190e;
    background: var(--newsroom-gold);
    border-radius: 12px;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  .newsroom-webinar-card__body {
    padding: 22px 20px 20px;
  }

  .newsroom-webinar-card__meta {
    display: flex;
    gap: 14px;
    color: #928b83;
    font-size: 10px;
  }

  .newsroom-webinar-card__meta span,
  .newsroom-webinar-card__footer span {
    display: inline-flex;
    gap: 5px;
    align-items: center;
  }

  .newsroom-webinar-card h3 {
    margin: 12px 0 0;
    color: #f2ece4;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.35;
  }

  .newsroom-webinar-card h3 a:hover,
  .newsroom-webinar-card h3 a:focus-visible {
    color: var(--newsroom-gold);
  }

  .newsroom-webinar-card__footer {
    display: flex;
    margin-top: 28px;
    gap: 16px;
    align-items: center;
    justify-content: space-between;
    color: #aaa39a;
    font-size: 10px;
  }

  .newsroom-webinar-card__footer strong {
    color: var(--newsroom-gold);
    font-size: 11px;
    font-weight: 600;
  }
`;

export type WebinarItem = {
  id: number;
  title: string;
  category:
    | "Berita Mahreen"
    | "Artikel & Insight"
    | "Event & Webinar"
    | "Internship Update";
  label: string;
  date: string;
  duration: string;
  speaker: string;
  price: string;
  image: string;
  href: string;
  labelTone?: "gold" | "light" | "red";
};

type WebinarCardProps = {
  webinar: WebinarItem;
};

const labelBackground: Record<NonNullable<WebinarItem["labelTone"]>, string> = {
  gold: "#e5c477",
  light: "#dcd9ec",
  red: "#b93136",
};

const WebinarCard = ({ webinar }: WebinarCardProps) => {
  const labelTone = webinar.labelTone ?? "gold";
  const labelColor = labelTone === "red" ? "#fff" : "#21190e";

  return (
    <>
      <style>{styles}</style>

      <article className="newsroom-webinar-card" data-newsroom-reveal>
        <a className="newsroom-webinar-card__image" href={webinar.href}>
          <img src={webinar.image} alt={webinar.title} />
          <span
            style={{
              background: labelBackground[labelTone],
              color: labelColor,
            }}
          >
            {webinar.label}
          </span>
        </a>

        <div className="newsroom-webinar-card__body">
          <div className="newsroom-webinar-card__meta">
            <span>
              <CalendarDays size={14} aria-hidden="true" />
              {webinar.date}
            </span>
            <span>
              <Clock3 size={14} aria-hidden="true" />
              {webinar.duration}
            </span>
          </div>

          <h3>
            <a href={webinar.href}>{webinar.title}</a>
          </h3>

          <div className="newsroom-webinar-card__footer">
            <span>
              <UserRound size={14} aria-hidden="true" />
              {webinar.speaker}
            </span>
            <strong>{webinar.price}</strong>
          </div>
        </div>
      </article>
    </>
  );
};

export default WebinarCard;
