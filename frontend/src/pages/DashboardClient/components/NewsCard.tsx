import type { NewsItem } from "../types";

type NewsCardProps = {
  item: NewsItem;
};

const styles = `
  .client-dashboard__news-card {
    display: block;
    min-width: 0;
    height: 100%;
    overflow: hidden;
  }

  .client-dashboard__news-card img {
    display: block;
    width: 100%;
    aspect-ratio: 1.55 / 1;
    object-fit: cover;
    filter: saturate(0.8) contrast(1.07) brightness(0.82);
  }


  .client-dashboard__news-card > div {
    min-height: 158px;
    padding: 23px 24px 25px;
  }

  .client-dashboard__news-card span {
    color: var(--dashboard-gold);
    font-size: 8px;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .client-dashboard__news-card h3 {
    margin: 11px 0 0;
    overflow-wrap: anywhere;
    color: rgba(255, 255, 255, 0.84);
    font-size: 17px;
    line-height: 1.35;
  }

  .client-dashboard__news-card p {
    margin: 13px 0 0;
    overflow-wrap: anywhere;
    color: var(--dashboard-muted);
    font-size: 11px;
    line-height: 1.55;
  }

  @media (max-width: 520px) {
    .client-dashboard__news-card > div {
      min-height: 0;
      padding: 21px 20px 24px;
    }
  }
`;

const NewsCard = ({ item }: NewsCardProps) => (
  <>
    <style>{styles}</style>
    <a className="dashboard-card client-dashboard__news-card" href={item.href}>
      <img src={item.image} alt={item.imageAlt} />
      <div>
        <span>{item.category}</span>
        <h3>{item.title}</h3>
        <p>{item.excerpt}</p>
      </div>
    </a>
  </>
);

export default NewsCard;
