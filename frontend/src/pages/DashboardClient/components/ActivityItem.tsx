import { Award, Check, CircleDollarSign } from "lucide-react";
import type { Activity, ActivityIcon } from "../types";

type ActivityItemProps = {
  activity: Activity;
};

const styles = `
  .client-dashboard__activity {
    position: relative;
    z-index: 1;
    display: grid;
    min-width: 0;
    grid-template-columns: 36px minmax(0, 1fr);
    align-items: start;
    gap: 20px;
  }

  .client-dashboard__activity + .client-dashboard__activity {
    margin-top: 38px;
  }

  .client-dashboard__activity:not(:last-child)::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: -19px;
    left: 56px;
    height: 1px;
    background: #292929;
  }

  .client-dashboard__activity-icon-wrap {
    position: relative;
    z-index: 2;
    display: grid;
    width: 36px;
    place-items: center;
  }

  .client-dashboard__activity-icon {
    display: grid;
    width: 36px;
    height: 36px;
    place-items: center;
    border: 1px solid #303030;
    border-radius: 999px;
    background: #1a1a1a;
    color: #ddb964;
  }

  .client-dashboard__activity-icon--certificate {
    border-color: #e7c671;
    background: #e7c671;
    color: #171207;
  }

  .client-dashboard__activity-icon svg {
    width: 17px;
    height: 17px;
    stroke-width: 2.1;
  }

  .client-dashboard__activity-copy {
    min-width: 0;
    padding-top: 1px;
  }

  .client-dashboard__activity h3 {
    margin: 0;
    overflow-wrap: anywhere;
    color: #f1ede7;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.24;
    letter-spacing: -0.015em;
  }

  .client-dashboard__activity p {
    margin: 5px 0 0;
    overflow-wrap: anywhere;
    color: #c9c1b7;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.38;
    letter-spacing: -0.005em;
  }

  .client-dashboard__activity time {
    display: block;
    margin-top: 8px;
    color: #66615b;
    font-size: 11px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: 0.045em;
    text-transform: uppercase;
  }

  @media (max-width: 760px) {
    .client-dashboard__activity {
      grid-template-columns: 32px minmax(0, 1fr);
      gap: 16px;
    }

    .client-dashboard__activity + .client-dashboard__activity {
      margin-top: 32px;
    }

    .client-dashboard__activity:not(:last-child)::after {
      bottom: -16px;
      left: 48px;
    }

    .client-dashboard__activity-icon-wrap,
    .client-dashboard__activity-icon {
      width: 32px;
    }

    .client-dashboard__activity-icon {
      height: 32px;
    }

    .client-dashboard__activity-icon svg {
      width: 15px;
      height: 15px;
    }

    .client-dashboard__activity h3 {
      font-size: 16px;
    }

    .client-dashboard__activity p {
      font-size: 14px;
    }

    .client-dashboard__activity time {
      font-size: 10px;
    }
  }
`;

const getActivityIcon = (icon: ActivityIcon) => {
  if (icon === "certificate") return <Award aria-hidden="true" />;
  if (icon === "payment") return <CircleDollarSign aria-hidden="true" />;
  return <Check aria-hidden="true" />;
};

const ActivityItem = ({ activity }: ActivityItemProps) => {
  const iconClassName = [
    "client-dashboard__activity-icon",
    activity.icon === "certificate"
      ? "client-dashboard__activity-icon--certificate"
      : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <style>{styles}</style>
      <article className="client-dashboard__activity">
        <div className="client-dashboard__activity-icon-wrap">
          <span className={iconClassName}>{getActivityIcon(activity.icon)}</span>
        </div>

        <div className="client-dashboard__activity-copy">
          <h3>{activity.title}</h3>
          <p>{activity.description}</p>
          <time>{activity.time}</time>
        </div>
      </article>
    </>
  );
};

export default ActivityItem;
