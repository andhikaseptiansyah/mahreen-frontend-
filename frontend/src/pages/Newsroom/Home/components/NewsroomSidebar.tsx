import {
  CalendarDays,
  CircleHelp,
  Settings,
  Tag,
  TrendingUp,
  X,
} from "lucide-react";

const styles = `
  .newsroom-sidebar {
    position: sticky;
    top: 0;
    z-index: 20;
    flex: 0 0 var(--newsroom-sidebar-width);
    width: var(--newsroom-sidebar-width);
    max-width: var(--newsroom-sidebar-width);
    min-width: var(--newsroom-sidebar-width);
    height: 100dvh;
    min-height: 0;
    align-self: flex-start;
    overflow: hidden;
    color: #ddd5cb;
    background: var(--newsroom-brown);
    border-right: 1px solid rgba(255, 255, 255, 0.04);
    scrollbar-width: none;
  }

  .newsroom-sidebar__panel {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 0;
    padding: 0 0 22px;
    flex-direction: column;
  }

  .newsroom-sidebar__brand {
    display: flex;
    min-height: 88px;
    padding: 23px 18px 18px;
    align-items: flex-start;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  }

  .newsroom-sidebar__brand div {
    display: grid;
    min-width: 0;
    gap: 4px;
  }

  .newsroom-sidebar__brand strong {
    color: var(--newsroom-gold);
    font-family: Georgia, "Times New Roman", serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.1;
  }

  .newsroom-sidebar__brand span {
    color: #a9a097;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 11px;
    line-height: 1;
  }

  .newsroom-sidebar__close {
    display: none;
    width: 34px;
    height: 34px;
    padding: 0;
    border: 0;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: transparent;
    cursor: pointer;
  }

  .newsroom-sidebar__navigation {
    display: grid;
    padding-top: 4px;
  }

  .newsroom-sidebar__item {
    display: flex;
    width: 100%;
    min-width: 0;
    min-height: 46px;
    padding: 0 17px;
    gap: 11px;
    align-items: center;
    border: 0;
    border-left: 2px solid transparent;
    color: #c9c1b8;
    background: transparent;
    font-size: 13px;
    text-align: left;
    cursor: pointer;
    transition:
      color 180ms ease,
      background-color 180ms ease,
      border-color 180ms ease;
  }

  .newsroom-sidebar__item:hover,
  .newsroom-sidebar__item:focus-visible,
  .newsroom-sidebar__item.is-active {
    color: var(--newsroom-gold);
    background: rgba(255, 255, 255, 0.035);
    border-left-color: var(--newsroom-gold);
  }

  .newsroom-sidebar__bottom {
    display: grid;
    margin-top: auto;
    padding: 18px 17px 0;
    gap: 12px;
  }

  .newsroom-sidebar__partner {
    display: flex;
    min-width: 0;
    min-height: 54px;
    padding: 10px;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--newsroom-gold);
    color: var(--newsroom-gold);
    font-family: Georgia, "Times New Roman", serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-align: center;
    transition: color 180ms ease, background-color 180ms ease;
  }

  .newsroom-sidebar__partner:hover,
  .newsroom-sidebar__partner:focus-visible {
    color: #16130f;
    background: var(--newsroom-gold);
  }

  .newsroom-sidebar__utility {
    display: flex;
    min-width: 0;
    gap: 10px;
    align-items: center;
    color: #ddd5cb;
    font-size: 12.5px;
    transition: color 180ms ease;
  }

  .newsroom-sidebar__utility:hover,
  .newsroom-sidebar__utility:focus-visible {
    color: var(--newsroom-gold);
  }

  .newsroom-sidebar__backdrop {
    display: none;
  }

  @media (max-width: 1024px) {
    .newsroom-sidebar {
      position: fixed;
      inset: 0 auto 0 0;
      z-index: 1300;
      display: block;
      width: min(280px, 86vw);
      max-width: min(280px, 86vw);
      min-width: 0;
      height: 100dvh;
      overflow-x: hidden;
      overflow-y: auto;
      overscroll-behavior: contain;
      transform: translate3d(-101%, 0, 0);
      transition: transform 240ms cubic-bezier(0.22, 1, 0.36, 1);
    }

    .newsroom-sidebar__panel {
      height: auto;
      min-height: 100%;
    }

    .newsroom-sidebar.is-open {
      transform: translate3d(0, 0, 0);
    }

    .newsroom-sidebar__close {
      display: inline-flex;
    }

    .newsroom-sidebar__backdrop {
      position: fixed;
      inset: 0;
      z-index: 1250;
      display: block;
      border: 0;
      opacity: 0;
      visibility: hidden;
      background: rgba(0, 0, 0, 0.68);
      cursor: pointer;
      transition: opacity 180ms ease, visibility 180ms ease;
    }

    .newsroom-sidebar__backdrop.is-open {
      opacity: 1;
      visibility: visible;
    }
  }
`;

type NewsroomSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

type SidebarMenu = {
  label: string;
  sectionId: string;
  icon: typeof TrendingUp;
  active?: boolean;
};

const menus: SidebarMenu[] = [
  {
    label: "Trending",
    sectionId: "newsroom-trending",
    icon: TrendingUp,
    active: true,
  },
  { label: "Tags", sectionId: "newsroom-tags", icon: Tag },
  { label: "Events", sectionId: "newsroom-events", icon: CalendarDays },
];

const scrollToSection = (sectionId: string, onClose: () => void) => {
  document
    .getElementById(sectionId)
    ?.scrollIntoView({ behavior: "auto", block: "start" });
  onClose();
};

const NewsroomSidebar = ({ isOpen, onClose }: NewsroomSidebarProps) => {
  return (
    <>
      <style>{styles}</style>

      <aside
        className={`newsroom-sidebar${isOpen ? " is-open" : ""}`}
        aria-label="Navigasi Newsroom"
      >
        <div className="newsroom-sidebar__panel">
          <div className="newsroom-sidebar__brand">
            <div>
              <strong>Newsroom Lab</strong>
              <span>Editorial Insights</span>
            </div>

            <button
              className="newsroom-sidebar__close"
              type="button"
              onClick={onClose}
              aria-label="Tutup menu Newsroom"
            >
              <X size={19} />
            </button>
          </div>

          <nav className="newsroom-sidebar__navigation">
            {menus.map((menu) => {
              const Icon = menu.icon;

              return (
                <button
                  className={`newsroom-sidebar__item${menu.active ? " is-active" : ""}`}
                  type="button"
                  onClick={() => scrollToSection(menu.sectionId, onClose)}
                  key={menu.sectionId}
                >
                  <Icon size={18} aria-hidden="true" />
                  <span>{menu.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="newsroom-sidebar__bottom">
            <a className="newsroom-sidebar__partner" href="#/?section=partnership">
              Partner With Us
            </a>

            <a className="newsroom-sidebar__utility" href="#/login">
              <Settings size={18} aria-hidden="true" />
              <span>Settings</span>
            </a>

            <a className="newsroom-sidebar__utility" href="#/tanya-mahreen">
              <CircleHelp size={18} aria-hidden="true" />
              <span>Support</span>
            </a>
          </div>
        </div>
      </aside>

      <button
        className={`newsroom-sidebar__backdrop${isOpen ? " is-open" : ""}`}
        type="button"
        onClick={onClose}
        aria-label="Tutup menu"
      />
    </>
  );
};

export default NewsroomSidebar;
