import { ChevronLeft, ChevronRight } from "lucide-react";
import EventCard, { type EventItem } from "../components/EventCard";

const styles = `
  .newsroom-events {
    padding-top: clamp(70px, 8vw, 108px);
    scroll-margin-top: 86px;
  }

  .newsroom-events__heading {
    display: flex;
    gap: 24px;
    align-items: flex-end;
    justify-content: space-between;
  }

  .newsroom-events__heading h2 {
    margin: 0;
    color: #e7dfd5;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(28px, 3.4vw, 40px);
    font-weight: 400;
  }

  .newsroom-events__heading > div {
    display: flex;
    gap: 8px;
  }

  .newsroom-events__heading button {
    display: inline-flex;
    width: 34px;
    height: 34px;
    padding: 0;
    border: 1px solid rgba(255, 255, 255, 0.12);
    align-items: center;
    justify-content: center;
    color: #b8b1a8;
    background: transparent;
    cursor: pointer;
    transition: color 180ms ease, border-color 180ms ease;
  }

  .newsroom-events__heading button:hover,
  .newsroom-events__heading button:focus-visible {
    color: var(--newsroom-gold);
    border-color: var(--newsroom-gold);
  }

  .newsroom-event-list {
    display: grid;
    margin-top: 26px;
    gap: 12px;
  }
`;

const events: readonly EventItem[] = [
  {
    id: 1,
    day: "24",
    month: "NOV",
    year: "2026",
    type: "Seminar",
    title: "The Global Impact of Digitalization in Indonesia",
    meta: "Online via Zoom | 14:00 - 16:00 WIB",
    action: "Daftar Sekarang",
    href: "#/newsroom/webinar/global-impact-digitalization",
    featured: true,
  },
  {
    id: 2,
    day: "15",
    month: "DES",
    year: "2026",
    type: "Workshop",
    title: "UI/UX Mastery: Crafting Luxury Digital Experiences",
    meta: "Mahreen Tower, Jakarta | 09:00 - 17:00 WIB",
    action: "Book a Slot",
    href: "#/newsroom/webinar/ui-ux-mastery",
  },
];

const EventCalendar = () => {
  return (
    <>
      <style>{styles}</style>

      <section
        className="newsroom-events newsroom-content-section"
        id="newsroom-events"
        aria-labelledby="events-title"
      >
        <div className="newsroom-events__heading" data-newsroom-reveal>
          <h2 id="events-title">Kalender Event</h2>
          <div>
            <button type="button" aria-label="Event sebelumnya">
              <ChevronLeft size={17} />
            </button>
            <button type="button" aria-label="Event berikutnya">
              <ChevronRight size={17} />
            </button>
          </div>
        </div>

        <div className="newsroom-event-list">
          {events.map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default EventCalendar;
