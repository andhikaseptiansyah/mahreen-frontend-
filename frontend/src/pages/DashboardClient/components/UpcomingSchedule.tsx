import { scheduleEntries } from "../../../data/dashboardData";
import ScheduleNavigationMenu from "../menus/ScheduleNavigationMenu";
import ScheduleItem from "./ScheduleItem";
import SectionHeader from "./SectionHeader";

const styles = `
  .client-dashboard__schedule-block {
    min-width: 0;
  }

  .client-dashboard__section-heading--schedule {
    margin-bottom: 14px;
  }

  .client-dashboard__schedule {
    display: grid;
    min-width: 0;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    overflow: hidden;
  }

  @media (max-width: 760px) {
    .client-dashboard__schedule {
      grid-template-columns: 1fr;
    }
  }
`;

const UpcomingSchedule = () => (
  <>
    <style>{styles}</style>
    <section className="client-dashboard__schedule-block">
      <SectionHeader title="Upcoming Schedule" className="client-dashboard__section-heading--schedule">
        <ScheduleNavigationMenu />
      </SectionHeader>
      <div className="dashboard-card client-dashboard__schedule">
        {scheduleEntries.map((entry) => <ScheduleItem entry={entry} key={`${entry.month}-${entry.day}-${entry.title}`} />)}
      </div>
    </section>
  </>
);

export default UpcomingSchedule;
