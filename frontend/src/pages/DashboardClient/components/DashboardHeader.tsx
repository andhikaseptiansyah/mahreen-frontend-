import { BadgeCheck } from "lucide-react";

type DashboardHeaderProps = {
  displayName: string;
  memberId: string;
  memberYear: number;
};

const styles = `
  .client-dashboard__hero {
    display: flex;
    min-width: 0;
    min-height: 118px;
    padding: 4px 2px;
    align-items: flex-start;
    justify-content: space-between;
    gap: clamp(20px, 4vw, 48px);
  }

  .client-dashboard__identity {
    min-width: 0;
    flex: 1 1 auto;
  }

  .client-dashboard__welcome-row {
    display: flex;
    min-width: 0;
    align-items: center;
    flex-wrap: wrap;
    gap: 14px 22px;
  }

  .client-dashboard__welcome-row h1 {
    max-width: 850px;
    margin: 0;
    overflow-wrap: anywhere;
    color: #efefef;
    font-size: clamp(30px, 3.2vw, 53px);
    font-weight: 610;
    line-height: 1.02;
    letter-spacing: -0.045em;
  }

  .client-dashboard__welcome-row h1 span {
    color: var(--dashboard-gold);
  }

  .client-dashboard__verified {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    gap: 5px;
    padding: 5px 11px;
    border: 1px solid rgba(228, 192, 113, 0.25);
    border-radius: 999px;
    background: rgba(228, 192, 113, 0.11);
    color: var(--dashboard-gold-bright);
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .client-dashboard__verified svg {
    width: 13px;
    height: 13px;
  }

  .client-dashboard__identity > p {
    margin: 14px 0 0;
    overflow-wrap: anywhere;
    color: var(--dashboard-muted);
    font-size: 13px;
    line-height: 1.55;
    letter-spacing: 0.02em;
  }

  .client-dashboard__identity > p span {
    margin: 0 10px;
    color: rgba(255, 255, 255, 0.34);
  }

  .client-dashboard__edit {
    display: grid;
    width: 96px;
    min-width: 96px;
    height: 58px;
    flex: 0 0 auto;
    place-items: center;
    border-radius: 11px;
    background: var(--dashboard-gold-bright);
    color: #1b1508;
    font-size: 13px;
    font-weight: 760;
    line-height: 1.15;
    text-align: center;
  }


  @media (max-width: 760px) {
    .client-dashboard__hero {
      min-height: 0;
      padding: 0;
      gap: 18px;
    }

    .client-dashboard__welcome-row {
      align-items: flex-start;
      gap: 10px;
    }

    .client-dashboard__verified {
      margin-top: 3px;
      padding: 4px 7px;
      font-size: 7px;
    }

    .client-dashboard__identity > p {
      font-size: 10px;
    }

    .client-dashboard__identity > p span {
      margin: 0 4px;
    }

    .client-dashboard__edit {
      width: 74px;
      min-width: 74px;
      height: 50px;
      font-size: 10px;
    }
  }

  @media (max-width: 540px) {
    .client-dashboard__hero {
      flex-direction: column;
      align-items: stretch;
    }

    .client-dashboard__welcome-row h1 {
      font-size: clamp(29px, 9.5vw, 40px);
    }

    .client-dashboard__edit {
      width: 100%;
      min-width: 0;
      height: 46px;
    }

    .client-dashboard__edit br {
      display: none;
    }
  }

`;

const DashboardHeader = ({ displayName, memberId, memberYear }: DashboardHeaderProps) => (
  <>
    <style>{styles}</style>
    <header className="client-dashboard__hero">
      <div className="client-dashboard__identity">
        <div className="client-dashboard__welcome-row">
          <h1>
            Selamat Datang, <span>{displayName}</span>
          </h1>
          <span className="client-dashboard__verified">
            <BadgeCheck aria-hidden="true" /> Verified
          </span>
        </div>
        <p>
          Mahreen ID: {memberId} <span aria-hidden="true">•</span> Member Since {memberYear}
        </p>
      </div>

      <a className="client-dashboard__edit" href="#/akun/edit">
        Edit<br />Profile
      </a>
    </header>
  </>
);

export default DashboardHeader;
