const styles = `
  .newsroom-event-row {
    display: grid;
    min-height: 92px;
    padding: 17px 22px;
    grid-template-columns: 88px minmax(0, 1fr) auto;
    gap: 22px;
    align-items: center;
    background: #0a0908;
    border-left: 2px solid rgba(229, 196, 119, 0.2);
    transition: border-color 180ms ease, background-color 180ms ease;
  }

  .newsroom-event-row:hover {
    background: #0e0c0a;
    border-left-color: var(--newsroom-gold);
  }

  .newsroom-event-row.is-featured {
    background: #0f0d0a;
    border-left-color: var(--newsroom-gold);
  }

  .newsroom-event-row__date {
    display: grid;
    gap: 1px;
    line-height: 1;
  }

  .newsroom-event-row__date strong {
    color: var(--newsroom-gold);
    font-family: Georgia, "Times New Roman", serif;
    font-size: 28px;
    font-weight: 400;
  }

  .newsroom-event-row__date span,
  .newsroom-event-row__date small {
    color: #9b948b;
    font-size: 9px;
    letter-spacing: 0.7px;
  }

  .newsroom-event-row__copy > span {
    color: var(--newsroom-gold);
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }

  .newsroom-event-row__copy h3 {
    margin: 5px 0 0;
    color: #e8e1d8;
    font-size: 13px;
    font-weight: 500;
  }

  .newsroom-event-row__copy p {
    margin: 4px 0 0;
    color: #837d76;
    font-size: 10px;
  }

  .newsroom-event-row > a {
    display: inline-flex;
    min-height: 36px;
    padding: 0 18px;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(229, 196, 119, 0.5);
    color: var(--newsroom-gold);
    font-size: 10px;
    transition: color 180ms ease, background-color 180ms ease;
  }

  .newsroom-event-row > a:hover,
  .newsroom-event-row > a:focus-visible {
    color: #1a1510;
    background: var(--newsroom-gold);
  }

  @media (max-width: 640px) {
    .newsroom-event-row {
      grid-template-columns: 66px minmax(0, 1fr);
    }

    .newsroom-event-row > a {
      grid-column: 2;
      width: max-content;
      margin-top: 4px;
    }
  }
`;

export type EventItem = {
  id: number;
  day: string;
  month: string;
  year: string;
  type: string;
  title: string;
  meta: string;
  action: string;
  href: string;
  featured?: boolean;
};

type EventCardProps = {
  event: EventItem;
};

const EventCard = ({ event }: EventCardProps) => {
  return (
    <>
      <style>{styles}</style>

      <article
        className={`newsroom-event-row${event.featured ? " is-featured" : ""}`}
        data-newsroom-reveal
      >
        <div className="newsroom-event-row__date">
          <strong>{event.day}</strong>
          <span>{event.month}</span>
          <small>{event.year}</small>
        </div>

        <div className="newsroom-event-row__copy">
          <span>{event.type}</span>
          <h3>{event.title}</h3>
          <p>{event.meta}</p>
        </div>

        <a href={event.href}>{event.action}</a>
      </article>
    </>
  );
};

export default EventCard;
