import { CalendarDays, Clock3 } from "lucide-react";
import SectionHeader from "./SectionHeader";

const styles = `
  .client-dashboard__invite-block {
    min-width: 0;
  }

  .client-dashboard__invite-card {
    display: flex;
    min-width: 0;
    min-height: 214px;
    padding: 31px 27px 25px;
    flex-direction: column;
  }

  .client-dashboard__invite-card > span {
    color: var(--dashboard-gold);
    font-size: 8px;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .client-dashboard__invite-card h3 {
    margin: 13px 0 0;
    overflow-wrap: anywhere;
    color: #d9d9d9;
    font-size: 15px;
    font-weight: 650;
    line-height: 1.35;
  }

  .client-dashboard__invite-card > p {
    max-width: 240px;
    margin: 5px 0 0;
    overflow-wrap: anywhere;
    color: #9a9a9a;
    font-size: 10px;
    line-height: 1.35;
  }

  .client-dashboard__invite-meta {
    display: flex;
    margin-top: 13px;
    flex-wrap: wrap;
    gap: 8px 10px;
    color: #aaa;
    font-size: 10px;
  }

  .client-dashboard__invite-meta span {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    white-space: nowrap;
  }

  .client-dashboard__invite-meta svg {
    width: 12px;
    height: 12px;
  }

  .client-dashboard__invite-button {
    display: flex;
    min-height: 38px;
    margin-top: auto;
    align-items: center;
    justify-content: center;
    border-radius: 9px;
    background: var(--dashboard-gold-bright);
    color: #211808;
    font-size: 12px;
    font-weight: 760;
  }

  @media (max-width: 1120px) {
    .client-dashboard__invite-card > p {
      max-width: none;
    }
  }

  @media (max-width: 520px) {
    .client-dashboard__invite-card {
      min-height: 214px;
      padding: 27px 20px 22px;
    }
  }
`;

const WebinarInvite = () => (
  <>
    <style>{styles}</style>
    <aside className="client-dashboard__invite-block">
      <SectionHeader title="Invited For You" />
      <article className="dashboard-card client-dashboard__invite-card">
        <span>Webinar Invite</span>
        <h3>UI Motion Masterclass</h3>
        <p>With Senior Motion Director from Mahreen Studio.</p>
        <div className="client-dashboard__invite-meta">
          <span><Clock3 aria-hidden="true" /> 14:00 WIB</span>
          <span><CalendarDays aria-hidden="true" /> 15 Oct</span>
        </div>
        <a className="client-dashboard__invite-button" href="#/newsroom/webinar/ui-ux-design-masterclass">
          RSVP Now
        </a>
      </article>
    </aside>
  </>
);

export default WebinarInvite;
