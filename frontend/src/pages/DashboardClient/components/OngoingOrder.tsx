import { Box, CalendarDays, PackageCheck } from "lucide-react";

const styles = `
  .client-dashboard__order {
    display: grid;
    min-width: 0;
    grid-template-columns: 118px minmax(230px, 0.75fr) minmax(300px, 1fr) auto;
    min-height: 178px;
    padding: 30px 34px;
    align-items: center;
    gap: clamp(24px, 3vw, 38px);
  }

  .client-dashboard__package-icon {
    display: grid;
    width: 84px;
    height: 88px;
    place-items: center;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    color: rgba(228, 192, 113, 0.52);
  }

  .client-dashboard__package-icon svg {
    width: 42px;
    height: 42px;
    stroke-width: 1.7;
  }

  .client-dashboard__order-copy {
    min-width: 0;
  }

  .client-dashboard__order-copy > span {
    color: var(--dashboard-gold);
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  .client-dashboard__order-copy h2 {
    margin: 4px 0 0;
    overflow-wrap: anywhere;
    color: rgba(255, 255, 255, 0.86);
    font-size: clamp(18px, 2vw, 21px);
    font-weight: 650;
    line-height: 1.16;
  }

  .client-dashboard__order-copy p {
    display: flex;
    margin: 11px 0 0;
    align-items: center;
    gap: 6px;
    overflow-wrap: anywhere;
    color: rgba(255, 255, 255, 0.59);
    font-size: 10px;
    line-height: 1.35;
  }

  .client-dashboard__order-copy p svg {
    width: 13px;
    height: 13px;
    flex: 0 0 auto;
  }

  .client-dashboard__tracking {
    min-width: 0;
  }

  .client-dashboard__tracking-labels {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    color: rgba(255, 255, 255, 0.47);
    font-size: 8px;
    line-height: 1.3;
    text-align: center;
  }

  .client-dashboard__tracking-labels span {
    min-width: 0;
    overflow-wrap: anywhere;
  }

  .client-dashboard__tracking-line {
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 13px;
    align-items: center;
  }

  .client-dashboard__tracking-line::before {
    content: "";
    position: absolute;
    right: 9%;
    left: 9%;
    height: 3px;
    background: linear-gradient(90deg, var(--dashboard-gold-bright) 0 63%, rgba(255,255,255,.08) 63% 100%);
  }

  .client-dashboard__tracking-line span {
    position: relative;
    z-index: 1;
    width: 10px;
    height: 10px;
    justify-self: center;
    border-radius: 50%;
    background: #292929;
  }

  .client-dashboard__tracking-line span.is-complete {
    background: var(--dashboard-gold-bright);
  }

  .client-dashboard__tracking-line span.is-current {
    border: 2px solid #121212;
    background: var(--dashboard-gold-bright);
    box-shadow: 0 0 0 3px rgba(228, 192, 113, 0.18), 0 0 14px rgba(228, 192, 113, 0.6);
  }

  .client-dashboard__secondary-button {
    display: inline-flex;
    min-width: 126px;
    min-height: 45px;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 9px;
    background: #1b1b1b;
    color: rgba(255, 255, 255, 0.74);
    font-size: 11px;
    font-weight: 650;
    white-space: nowrap;
  }



  @media (max-width: 1120px) {
    .client-dashboard__order {
      grid-template-columns: 100px minmax(220px, 0.8fr) minmax(280px, 1fr);
    }

    .client-dashboard__secondary-button {
      grid-column: 3;
      justify-self: end;
    }
  }

  @media (max-width: 860px) {
    .client-dashboard__order {
      grid-template-columns: 88px minmax(0, 1fr);
    }

    .client-dashboard__tracking,
    .client-dashboard__secondary-button {
      grid-column: 1 / -1;
    }

    .client-dashboard__secondary-button {
      justify-self: stretch;
    }
  }

  @media (max-width: 520px) {
    .client-dashboard__order {
      grid-template-columns: 66px minmax(0, 1fr);
      padding: 24px 20px;
      gap: 20px 16px;
    }

    .client-dashboard__package-icon {
      width: 64px;
      height: 70px;
    }

    .client-dashboard__package-icon svg {
      width: 34px;
      height: 34px;
    }

    .client-dashboard__tracking-labels {
      font-size: 7px;
    }
  }

`;

const OngoingOrder = () => (
  <>
    <style>{styles}</style>
    <section className="dashboard-card client-dashboard__order">
      <div className="client-dashboard__package-icon">
        <Box aria-hidden="true" />
      </div>
      <div className="client-dashboard__order-copy">
        <span>Ongoing Order</span>
        <h2>Mahreen Studio<br />Hardware Kit v2</h2>
        <p><PackageCheck aria-hidden="true" /> Dalam Perjalanan</p>
        <p><CalendarDays aria-hidden="true" /> ETA: 12 Oct 2026</p>
      </div>
      <div className="client-dashboard__tracking">
        <div className="client-dashboard__tracking-labels">
          <span>Transit</span><span>Warehouse</span><span>Courier</span><span>Delivered</span>
        </div>
        <div className="client-dashboard__tracking-line">
          <span className="is-complete" />
          <span className="is-complete" />
          <span className="is-current" />
          <span />
        </div>
      </div>
      <a className="client-dashboard__secondary-button" href="#/mahreen-studio/latest-collection">
        Track Package
      </a>
    </section>
  </>
);

export default OngoingOrder;
