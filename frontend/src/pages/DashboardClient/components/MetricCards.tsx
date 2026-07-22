import { Award, BriefcaseBusiness, HandHeart, ShoppingBag } from "lucide-react";
import { dashboardMetrics } from "../../../data/dashboardData";
import type { MetricIcon } from "../types";

const styles = `
  .client-dashboard__metric-grid {
    display: grid;
    height: 100%;
    min-width: 0;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(16px, 2vw, 24px);
  }

  .client-dashboard__metric-card {
    position: relative;
    min-width: 0;
    min-height: 155px;
    padding: 26px 28px;
  }

  .client-dashboard__metric-card > svg {
    width: 24px;
    height: 24px;
    color: var(--dashboard-gold);
    stroke-width: 1.8;
  }


  .client-dashboard__metric-card > span {
    display: block;
    margin-top: 9px;
    color: rgba(255, 255, 255, 0.49);
    font-size: 11px;
    font-weight: 720;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .client-dashboard__metric-card > strong {
    display: block;
    margin-top: 3px;
    overflow-wrap: anywhere;
    color: #f4f1ec;
    font-size: clamp(36px, 4vw, 47px);
    font-weight: 560;
    line-height: 0.98;
    letter-spacing: -0.04em;
    white-space: pre-line;
  }

  .client-dashboard__metric-card > small {
    position: absolute;
    right: 27px;
    bottom: 27px;
    max-width: 44%;
    color: var(--dashboard-gold);
    font-size: 10px;
    line-height: 1.35;
    text-align: right;
    white-space: pre-line;
  }

  .client-dashboard__metric-card--compact > strong {
    font-size: clamp(25px, 3vw, 30px);
    line-height: 0.9;
  }

  @media (max-width: 760px) {
    .client-dashboard__metric-card {
      min-height: 145px;
      padding: 23px 22px;
    }
  }

  @media (max-width: 560px) {
    .client-dashboard__metric-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 380px) {
    .client-dashboard__metric-card > small {
      position: static;
      display: block;
      max-width: none;
      margin-top: 14px;
      text-align: left;
    }
  }
`;

const getMetricIcon = (icon: MetricIcon) => {
  if (icon === "projects") return <BriefcaseBusiness aria-hidden="true" />;
  if (icon === "orders") return <ShoppingBag aria-hidden="true" />;
  if (icon === "donations") return <HandHeart aria-hidden="true" />;
  return <Award aria-hidden="true" />;
};

const MetricCards = () => (
  <>
    <style>{styles}</style>
    <div className="client-dashboard__metric-grid">
      {dashboardMetrics.map((metric) => (
        <article
          className={`dashboard-card client-dashboard__metric-card${metric.compact ? " client-dashboard__metric-card--compact" : ""}`}
          key={metric.label}
        >
          {getMetricIcon(metric.icon)}
          <span>{metric.label}</span>
          <strong>{metric.value}</strong>
          <small>{metric.note}</small>
        </article>
      ))}
    </div>
  </>
);

export default MetricCards;
