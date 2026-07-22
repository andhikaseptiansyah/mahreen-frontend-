import { Clock3 } from "lucide-react";
import type { ScheduleEntry } from "../types";

type ScheduleItemProps = {
  entry: ScheduleEntry;
};

const styles = `
  .client-dashboard__schedule article {
    position: relative;
    display: grid;
    min-width: 0;
    grid-template-columns: 50px minmax(0, 1fr);
    min-height: 155px;
    padding: 25px 28px;
    gap: 16px;
  }

  .client-dashboard__schedule article + article {
    border-left: 1px solid #202020;
  }

  .client-dashboard__schedule time {
    display: flex;
    width: 48px;
    height: 50px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #303030;
    border-radius: 10px;
    background: #222;
  }

  .client-dashboard__schedule time span {
    color: var(--dashboard-gold);
    font-size: 8px;
    font-weight: 800;
    text-transform: uppercase;
  }

  .client-dashboard__schedule time strong {
    margin-top: 1px;
    color: #e8e8e8;
    font-size: 18px;
    line-height: 1;
  }

  .client-dashboard__schedule article > div:nth-child(2) {
    min-width: 0;
    padding-right: 72px;
  }

  .client-dashboard__schedule h3 {
    margin: 0;
    overflow-wrap: anywhere;
    color: #d8d8d8;
    font-size: 14px;
    font-weight: 650;
    line-height: 1.35;
    white-space: pre-line;
  }

  .client-dashboard__schedule p {
    margin: 3px 0 0;
    overflow-wrap: anywhere;
    color: #9b9b9b;
    font-size: 10px;
    line-height: 1.35;
    white-space: pre-line;
  }

  .client-dashboard__schedule-time {
    display: inline-flex;
    margin-top: 12px;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px;
    color: #a3a3a3;
    font-size: 9px;
    line-height: 1.35;
  }

  .client-dashboard__schedule-time svg {
    width: 11px;
    height: 11px;
    flex: 0 0 auto;
  }

  .client-dashboard__schedule-time b {
    margin-left: 7px;
    color: var(--dashboard-gold);
    font-weight: 650;
  }

  .client-dashboard__schedule-label {
    position: absolute;
    top: 25px;
    right: 24px;
    max-width: 92px;
    padding: 4px 7px;
    border-radius: 3px;
    overflow: hidden;
    background: #1d1d1d;
    color: #737373;
    font-size: 7px;
    font-weight: 750;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-transform: uppercase;
  }

  .client-dashboard__schedule-label.is-mandatory {
    background: rgba(217, 183, 101, 0.12);
    color: var(--dashboard-gold);
  }

  .client-dashboard__schedule-attendees {
    position: absolute;
    bottom: 25px;
    left: 177px;
    display: flex;
  }

  .client-dashboard__schedule-attendees span {
    width: 17px;
    height: 17px;
    margin-left: -4px;
    border: 2px solid #141414;
    border-radius: 50%;
    background: #2b2b2b;
  }

  @media (max-width: 960px) and (min-width: 761px) {
    .client-dashboard__schedule article {
      padding-right: 22px;
      padding-left: 22px;
    }

    .client-dashboard__schedule article > div:nth-child(2) {
      padding-right: 0;
    }

    .client-dashboard__schedule-label {
      position: static;
      grid-column: 2;
      width: fit-content;
      max-width: 100%;
      margin-top: 4px;
    }

    .client-dashboard__schedule-attendees {
      position: static;
      grid-column: 2;
      margin-top: 1px;
    }
  }

  @media (max-width: 760px) {
    .client-dashboard__schedule article {
      grid-template-columns: 50px minmax(0, 1fr);
      min-height: 0;
      padding: 24px 20px;
      gap: 16px;
    }

    .client-dashboard__schedule article + article {
      border-top: 1px solid #202020;
      border-left: 0;
    }

    .client-dashboard__schedule article > div:nth-child(2) {
      padding-right: 0;
    }

    .client-dashboard__schedule-label {
      position: static;
      grid-column: 2;
      width: fit-content;
      max-width: 100%;
      margin-top: 3px;
    }

    .client-dashboard__schedule-attendees {
      position: static;
      grid-column: 2;
      margin-top: 2px;
    }
  }

  @media (max-width: 390px) {
    .client-dashboard__schedule article {
      grid-template-columns: 1fr;
    }

    .client-dashboard__schedule-label,
    .client-dashboard__schedule-attendees {
      grid-column: 1;
    }
  }
`;

const ScheduleItem = ({ entry }: ScheduleItemProps) => (
  <>
    <style>{styles}</style>
    <article>
      <time><span>{entry.month}</span><strong>{entry.day}</strong></time>
      <div>
        <h3>{entry.title}</h3>
        <p>{entry.description}</p>
        <span className="client-dashboard__schedule-time">
          <Clock3 aria-hidden="true" /> {entry.time}
          {entry.attendees ? <b>{entry.attendees}</b> : null}
        </span>
      </div>
      <span className={`client-dashboard__schedule-label${entry.mandatory ? " is-mandatory" : ""}`}>
        {entry.label}
      </span>
      {entry.showAvatars ? (
        <div className="client-dashboard__schedule-attendees"><span /><span /></div>
      ) : null}
    </article>
  </>
);

export default ScheduleItem;
