import { ArrowRight, Clock3, UserRound } from "lucide-react";

const styles = `
  .newsroom-news-card {
    display: grid;
    margin-top: 36px;
    grid-template-columns: minmax(0, 1.25fr) minmax(300px, 0.82fr);
    gap: clamp(28px, 4.6vw, 58px);
    align-items: center;
  }

  .newsroom-news-card__image {
    position: relative;
    display: block;
    min-height: 350px;
    overflow: hidden;
    background: #111;
  }

  .newsroom-news-card__image::after {
    position: absolute;
    inset: 0;
    content: "";
    background: linear-gradient(180deg, transparent 68%, rgba(0, 0, 0, 0.26));
  }

  .newsroom-news-card__image img {
    width: 100%;
    height: 100%;
    min-height: 350px;
    object-fit: cover;
    transition: transform 650ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .newsroom-news-card__image:hover img,
  .newsroom-news-card__image:focus-visible img {
    transform: scale(1.035);
  }

  .newsroom-news-card__copy h2 {
    max-width: 460px;
    margin: 12px 0 0;
    color: #f2ece4;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(32px, 4.2vw, 52px);
    font-weight: 400;
    line-height: 1.02;
  }

  .newsroom-news-card__copy > p {
    margin: 20px 0 0;
    color: #aaa39b;
    font-size: 13px;
    line-height: 1.75;
  }

  .newsroom-news-card__meta {
    display: flex;
    margin-top: 20px;
    gap: 13px;
    color: #aaa39a;
    font-size: 10px;
  }

  .newsroom-news-card__meta span {
    display: inline-flex;
    gap: 5px;
    align-items: center;
  }

  .newsroom-news-card .newsroom-inline-link {
    margin-top: 22px;
  }

  @media (max-width: 780px) {
    .newsroom-news-card {
      grid-template-columns: 1fr;
    }

    .newsroom-news-card__image,
    .newsroom-news-card__image img {
      min-height: 290px;
    }
  }
`;

export type NewsCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  author: string;
  readTime: string;
  image: string;
  href: string;
};

const NewsCard = ({
  eyebrow,
  title,
  description,
  author,
  readTime,
  image,
  href,
}: NewsCardProps) => {
  return (
    <>
      <style>{styles}</style>

      <div className="newsroom-news-card">
        <a
          className="newsroom-news-card__image"
          href={href}
          data-newsroom-reveal
        >
          <img src={image} alt={title} />
        </a>

        <article className="newsroom-news-card__copy" data-newsroom-reveal>
          <span className="newsroom-kicker">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{description}</p>

          <div className="newsroom-news-card__meta">
            <span>
              <UserRound size={15} aria-hidden="true" />
              {author}
            </span>
            <span>
              <Clock3 size={15} aria-hidden="true" />
              {readTime}
            </span>
          </div>

          <a className="newsroom-inline-link" href={href}>
            Baca Selengkapnya
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </article>
      </div>
    </>
  );
};

export default NewsCard;
