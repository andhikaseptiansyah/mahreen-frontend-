import { newsroomItems } from "../../../data/dashboardData";
import NewsCard from "./NewsCard";
import SectionHeader from "./SectionHeader";

const styles = `
  .client-dashboard__news-block {
    min-width: 0;
    height: 100%;
  }

  .client-dashboard__news-grid {
    display: grid;
    min-width: 0;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(16px, 2vw, 20px);
  }

  @media (max-width: 760px) {
    .client-dashboard__news-grid {
      grid-template-columns: 1fr;
    }
  }
`;

const NewsroomSection = () => (
  <>
    <style>{styles}</style>
    <div className="client-dashboard__news-block">
      <SectionHeader title="Newsroom" />
      <div className="client-dashboard__news-grid">
        {newsroomItems.map((item) => <NewsCard item={item} key={item.title} />)}
      </div>
    </div>
  </>
);

export default NewsroomSection;
