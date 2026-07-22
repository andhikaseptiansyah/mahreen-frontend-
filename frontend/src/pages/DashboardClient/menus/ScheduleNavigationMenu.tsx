import { ChevronLeft, ChevronRight } from "lucide-react";

const styles = `
  .client-dashboard__schedule-nav {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    gap: 7px;
  }

  .client-dashboard__schedule-nav button {
    display: grid;
    width: 25px;
    height: 25px;
    padding: 0;
    place-items: center;
    border: 1px solid #242424;
    border-radius: 50%;
    background: transparent;
    color: #777;
    cursor: pointer;
  }

  .client-dashboard__schedule-nav svg {
    width: 12px;
    height: 12px;
  }
`;

const ScheduleNavigationMenu = () => (
  <>
    <style>{styles}</style>
    <div className="client-dashboard__schedule-nav" aria-label="Navigasi jadwal">
      <button type="button" aria-label="Jadwal sebelumnya"><ChevronLeft /></button>
      <button type="button" aria-label="Jadwal berikutnya"><ChevronRight /></button>
    </div>
  </>
);

export default ScheduleNavigationMenu;
