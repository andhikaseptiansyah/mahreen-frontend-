import { ArrowUpRight } from "lucide-react";

const styles = `
  .newsroom-list-card {
    position: relative;
    display: flex;
    min-width: 0;
    min-height: 650px;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid rgba(229, 196, 119, 0.16);
    border-radius: 14px;
    color: #f4efe8;
    background: linear-gradient(180deg, #141311 0%, #0a0908 100%);
    box-shadow: 0 18px 54px rgba(0, 0, 0, 0.24);
    transition:
      transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
      border-color 320ms ease,
      box-shadow 320ms ease;
  }

  .newsroom-list-card:hover,
  .newsroom-list-card:focus-within {
    border-color: rgba(229, 196, 119, 0.56);
    box-shadow: 0 28px 72px rgba(0, 0, 0, 0.42);
    transform: translateY(-8px);
  }

  .newsroom-list-card__media {
    position: relative;
    display: block;
    width: 100%;
    height: 292px;
    overflow: hidden;
    background: #171513;
  }

  .newsroom-list-card__media::after {
    position: absolute;
    inset: 0;
    content: "";
    pointer-events: none;
    background: linear-gradient(180deg, transparent 55%, rgba(0, 0, 0, 0.48));
  }

  .newsroom-list-card__media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 720ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .newsroom-list-card:hover .newsroom-list-card__media img,
  .newsroom-list-card:focus-within .newsroom-list-card__media img {
    transform: scale(1.06);
  }

  .newsroom-list-card__body {
    display: flex;
    min-width: 0;
    flex: 1;
    flex-direction: column;
    padding: 26px 24px 28px;
  }

  .newsroom-list-card__meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    color: #b99a5a;
    font-size: 10px;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: 0.7px;
    text-transform: uppercase;
  }

  .newsroom-list-card__meta time {
    flex: 0 0 auto;
    color: #8f8981;
    font-weight: 500;
    text-transform: none;
  }

  .newsroom-list-card__title {
    margin: 20px 0 0;
    color: #f4efe8;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(25px, 1.65vw, 32px);
    font-weight: 400;
    line-height: 1.12;
    letter-spacing: -0.025em;
  }

  .newsroom-list-card__excerpt {
    margin: 17px 0 0;
    color: #a9a29a;
    font-size: 15px;
    line-height: 1.72;
  }

  .newsroom-list-card__link {
    display: inline-flex;
    width: fit-content;
    margin-top: auto;
    padding-top: 26px;
    gap: 9px;
    align-items: center;
    color: #e5c477;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    transition: color 180ms ease, gap 180ms ease;
  }

  .newsroom-list-card__link:hover,
  .newsroom-list-card__link:focus-visible {
    gap: 14px;
    color: #f0d58f;
  }

  @media (max-width: 1320px) {
    .newsroom-list-card {
      min-height: 620px;
    }

    .newsroom-list-card__media {
      height: 270px;
    }
  }

  @media (max-width: 680px) {
    .newsroom-list-card {
      min-height: 0;
    }

    .newsroom-list-card__body {
      padding: 22px 20px 24px;
    }

    .newsroom-list-card__media {
      height: 260px;
    }

    .newsroom-list-card__title {
      font-size: 30px;
    }
  }
`;

export type NewsroomArticle = Readonly<{
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  image: string;
}>;

type ArticleCardProps = {
  article: NewsroomArticle;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <>
      <style>{styles}</style>

      <article className="newsroom-list-card" data-newsroom-list-reveal>
        <a
          className="newsroom-list-card__media"
          href={`#/newsroom/berita/${article.slug}`}
          aria-label={`Baca artikel ${article.title}`}
        >
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            decoding="async"
          />
        </a>

        <div className="newsroom-list-card__body">
          <div className="newsroom-list-card__meta">
            <span>{article.category}</span>
            <time>{article.publishedAt}</time>
          </div>

          <h2 className="newsroom-list-card__title">{article.title}</h2>
          <p className="newsroom-list-card__excerpt">{article.excerpt}</p>

          <a
            className="newsroom-list-card__link"
            href={`#/newsroom/berita/${article.slug}`}
          >
            Baca Selengkapnya
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </article>
    </>
  );
};

export default ArticleCard;
