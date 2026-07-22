import { MessageSquareText } from "lucide-react";

const styles = `
  .client-dashboard__consultation {
    display: grid;
    min-width: 0;
    grid-template-columns: auto minmax(0, 1fr) auto auto;
    min-height: 128px;
    padding: clamp(24px, 3vw, 32px);
    align-items: center;
    gap: clamp(18px, 2.4vw, 30px);
  }

  .client-dashboard__consultation-icon {
    color: var(--dashboard-gold-bright);
  }

  .client-dashboard__consultation-icon svg {
    width: 48px;
    height: 48px;
    stroke-width: 1.5;
  }


  .client-dashboard__consultation-copy {
    min-width: 0;
  }

  .client-dashboard__consultation-copy h2 {
    margin: 0;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(21px, 2vw, 24px);
    font-weight: 500;
    letter-spacing: -0.02em;
  }

  .client-dashboard__consultation-copy p {
    max-width: 760px;
    margin: 6px 0 0;
    overflow-wrap: anywhere;
    color: var(--dashboard-muted);
    font-size: 12px;
    line-height: 1.55;
  }

  .client-dashboard__consultation-tags {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    max-width: 680px;
    margin-top: 24px;
    gap: 14px 20px;
  }

  .client-dashboard__consultation-tags span {
    position: relative;
    min-width: 0;
    padding-left: 14px;
    overflow-wrap: anywhere;
    color: var(--dashboard-gold);
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .client-dashboard__consultation-tags span::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--dashboard-gold-bright);
    transform: translateY(-50%);
  }

  .client-dashboard__price {
    align-self: start;
    margin-top: 3px;
    padding: 5px 13px;
    border: 1px solid rgba(228, 192, 113, 0.28);
    border-radius: 999px;
    background: rgba(228, 192, 113, 0.08);
    color: rgba(228, 192, 113, 0.8);
    font-size: 9px;
    font-weight: 700;
    white-space: nowrap;
    text-transform: uppercase;
  }

  .client-dashboard__primary-button {
    display: inline-flex;
    min-width: 116px;
    min-height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    background: var(--dashboard-gold-bright);
    color: #1c1609;
    font-size: 13px;
    font-weight: 760;
    white-space: nowrap;
  }


  @media (max-width: 1120px) {
    .client-dashboard__consultation {
      grid-template-columns: auto minmax(0, 1fr) auto;
      align-items: start;
    }

    .client-dashboard__consultation-icon {
      grid-row: 1 / span 2;
    }

    .client-dashboard__price {
      grid-column: 2;
      justify-self: start;
      margin-top: 2px;
    }

    .client-dashboard__consultation .client-dashboard__primary-button {
      grid-column: 3;
      grid-row: 1 / span 2;
      align-self: center;
    }
  }

  @media (max-width: 760px) {
    .client-dashboard__consultation {
      grid-template-columns: 48px minmax(0, 1fr);
      padding: 24px 20px;
      gap: 18px 16px;
    }

    .client-dashboard__consultation-icon {
      grid-row: auto;
    }

    .client-dashboard__consultation-tags {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 13px;
    }

    .client-dashboard__price,
    .client-dashboard__consultation .client-dashboard__primary-button {
      grid-column: 1 / -1;
      grid-row: auto;
      justify-self: stretch;
    }

    .client-dashboard__price {
      margin: 0;
      text-align: center;
    }
  }

  @media (max-width: 420px) {
    .client-dashboard__consultation {
      grid-template-columns: 1fr;
    }

    .client-dashboard__consultation-icon svg {
      width: 40px;
      height: 40px;
    }

    .client-dashboard__consultation-tags {
      grid-template-columns: 1fr;
    }
  }
`;

const ConsultationBanner = () => (
  <>
    <style>{styles}</style>
    <section className="client-dashboard__consultation dashboard-card">
      <div className="client-dashboard__consultation-icon">
        <MessageSquareText aria-hidden="true" />
      </div>
      <div className="client-dashboard__consultation-copy">
        <h2>Business Consultation</h2>
        <p>Expert guidance for digital transformation, branding strategy, and personal branding excellence.</p>
        <div className="client-dashboard__consultation-tags" aria-label="Topik konsultasi">
          <span>Business</span>
          <span>Brand</span>
          <span>Marketing</span>
          <span>Personal</span>
        </div>
      </div>
      <span className="client-dashboard__price">Rp300K / Session</span>
      <a className="client-dashboard__primary-button" href="#/tanya-mahreen/konsultasi">
        Book Now
      </a>
    </section>
  </>
);

export default ConsultationBanner;
