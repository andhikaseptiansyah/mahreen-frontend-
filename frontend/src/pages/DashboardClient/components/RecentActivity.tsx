import { activities } from "../../../data/dashboardData";
import ActivityItem from "./ActivityItem";

const styles = `
  .client-dashboard__activity-block {
    min-width: 0;
    width: 100%;
  }

  .client-dashboard__activity-title {
    margin: 0 0 20px;
    color: #c7c2bc;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.015em;
  }

  .client-dashboard__activity-card {
    width: 100%;
    min-height: 500px;
    padding: 46px 42px 42px;
    overflow: hidden;
    border: 1px solid #303030;
    border-radius: 24px;
    background: #141414;
  }

  .client-dashboard__activity-timeline {
    position: relative;
    min-height: 410px;
  }

  .client-dashboard__activity-timeline::before {
    content: "";
    position: absolute;
    z-index: 0;
    top: 18px;
    bottom: -20px;
    left: 18px;
    width: 1px;
    background: #2a2a2a;
  }

  @media (max-width: 760px) {
    .client-dashboard__activity-title {
      margin-bottom: 15px;
      font-size: 16px;
    }

    .client-dashboard__activity-card {
      min-height: 0;
      padding: 30px 22px 32px;
      border-radius: 20px;
    }

    .client-dashboard__activity-timeline {
      min-height: 0;
    }

    .client-dashboard__activity-timeline::before {
      top: 16px;
      bottom: -12px;
      left: 16px;
    }
  }
`;

const RecentActivity = () => (
  <>
    <style>{styles}</style>
    <aside className="client-dashboard__activity-block">
      <h2 className="client-dashboard__activity-title">Recent Activity</h2>

      <div className="dashboard-card client-dashboard__activity-card">
        <div className="client-dashboard__activity-timeline">
          {activities.map((activity) => (
            <ActivityItem activity={activity} key={activity.title} />
          ))}
        </div>
      </div>
    </aside>
  </>
);

export default RecentActivity;
