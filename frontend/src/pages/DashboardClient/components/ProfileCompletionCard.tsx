import { ArrowRight, Check } from "lucide-react";
import { completionItems } from "../../../data/dashboardData";

const styles = `
  .client-dashboard__profile-card {
    min-height: 334px;
    height: 100%;
    padding: clamp(25px, 3vw, 32px);
  }

  .client-dashboard__profile-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
  }

  .client-dashboard__profile-heading span {
    color: rgba(255, 255, 255, 0.76);
    font-size: 13px;
    font-weight: 650;
  }

  .client-dashboard__profile-heading strong {
    color: var(--dashboard-gold);
    font-size: 22px;
    font-weight: 650;
  }

  .client-dashboard__profile-progress {
    height: 5px;
    margin: 18px 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.07);
  }

  .client-dashboard__profile-progress span {
    display: block;
    width: 78%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, #ebc66e, #d8b76d);
  }

  .client-dashboard__checklist {
    display: grid;
    margin: 0;
    padding: 0;
    gap: 16px;
    list-style: none;
  }

  .client-dashboard__checklist li {
    display: grid;
    grid-template-columns: 16px minmax(0, 1fr) auto;
    min-width: 0;
    align-items: center;
    gap: 9px;
    color: rgba(255, 255, 255, 0.43);
    font-size: 13px;
    line-height: 1.35;
  }

  .client-dashboard__checklist li > span:nth-child(2) {
    min-width: 0;
    overflow-wrap: anywhere;
  }

  .client-dashboard__checklist li.is-complete {
    color: rgba(255, 255, 255, 0.72);
  }

  .client-dashboard__check-icon {
    display: grid;
    width: 12px;
    height: 12px;
    place-items: center;
    border: 1px solid rgba(255, 255, 255, 0.36);
    border-radius: 50%;
  }

  .client-dashboard__checklist li.is-complete .client-dashboard__check-icon {
    border-color: var(--dashboard-gold);
    background: var(--dashboard-gold);
    color: #17120a;
  }

  .client-dashboard__check-icon svg {
    width: 8px;
    height: 8px;
    stroke-width: 3;
  }

  .client-dashboard__checklist small {
    padding: 3px 7px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.025);
    color: rgba(255, 255, 255, 0.22);
    font-size: 8px;
    white-space: nowrap;
    text-transform: uppercase;
  }

  .client-dashboard__complete {
    display: inline-flex;
    margin: 27px 0 0 30px;
    align-items: center;
    gap: 8px;
    color: var(--dashboard-gold);
    font-size: 12px;
    font-weight: 700;
  }


  .client-dashboard__complete svg {
    width: 14px;
    height: 14px;
  }


  @media (max-width: 1120px) {
    .client-dashboard__profile-card {
      min-height: auto;
    }
  }

  @media (max-width: 520px) {
    .client-dashboard__profile-card {
      padding: 24px 20px;
    }

    .client-dashboard__checklist li {
      grid-template-columns: 16px minmax(0, 1fr);
      font-size: 12px;
    }

    .client-dashboard__checklist small {
      grid-column: 2;
      width: fit-content;
    }

    .client-dashboard__complete {
      margin-left: 0;
    }
  }

`;

const ProfileCompletionCard = () => (
  <>
    <style>{styles}</style>
    <article className="client-dashboard__profile-card dashboard-card">
      <div className="client-dashboard__profile-heading">
        <span>Lengkapi Profil Anda</span>
        <strong>78%</strong>
      </div>
      <div className="client-dashboard__profile-progress" aria-label="Kelengkapan profil 78 persen">
        <span />
      </div>
      <ul className="client-dashboard__checklist">
        {completionItems.map((item) => (
          <li key={item.label} className={item.complete ? "is-complete" : ""}>
            <span className="client-dashboard__check-icon" aria-hidden="true">
              {item.complete ? <Check /> : null}
            </span>
            <span>{item.label}</span>
            {item.pending ? <small>Pending</small> : null}
          </li>
        ))}
      </ul>
      <a className="client-dashboard__complete" href="#/akun/edit">
        Complete Now <ArrowRight aria-hidden="true" />
      </a>
    </article>
  </>
);

export default ProfileCompletionCard;
