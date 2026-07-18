import { Search, SlidersHorizontal } from "lucide-react";

const styles = `
  .webinar-search-section {
    width: min(100% - 40px, 1460px);
    margin: clamp(54px, 6vw, 84px) auto 0;
  }

  .webinar-search-panel {
    display: grid;
    padding: 14px;
    grid-template-columns: minmax(0, 1fr) auto 150px;
    gap: 12px;
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 18px;
    background: linear-gradient(145deg, #121212, #0a0a0a);
  }

  .webinar-search-field {
    display: flex;
    min-width: 0;
    min-height: 54px;
    padding: 0 18px;
    gap: 12px;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 11px;
    background: #0d0d0d;
  }

  .webinar-search-field svg {
    color: #d8d2c8;
  }

  .webinar-search-field input {
    width: 100%;
    min-width: 0;
    border: 0;
    outline: 0;
    color: #f2ede5;
    background: transparent;
    font-size: 13px;
  }

  .webinar-search-field input::placeholder {
    color: rgba(255, 255, 255, 0.38);
  }

  .webinar-search-filter,
  .webinar-search-sort {
    min-height: 54px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 11px;
    color: rgba(255, 255, 255, 0.8);
    background: #0d0d0d;
    font-size: 12px;
  }

  .webinar-search-filter {
    display: inline-flex;
    padding: 0 20px;
    gap: 9px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .webinar-search-sort {
    padding: 0 14px;
    outline: none;
  }

  @media (max-width: 760px) {
    .webinar-search-panel {
      grid-template-columns: 1fr;
    }
  }
`;

const SearchFilterSection = () => {
  return (
    <>
      <style>{styles}</style>

      <section className="webinar-search-section" data-webinar-reveal>
        <div className="webinar-search-panel">
          <label className="webinar-search-field">
            <Search size={18} aria-hidden="true" />
            <input
              type="search"
              placeholder="Cari topik webinar (UI/UX, AI, Marketing...)"
              aria-label="Cari topik webinar"
            />
          </label>

          <button className="webinar-search-filter" type="button">
            <SlidersHorizontal size={17} aria-hidden="true" />
            Filter
          </button>

          <select className="webinar-search-sort" aria-label="Urutkan webinar">
            <option>Terbaru</option>
            <option>Terpopuler</option>
            <option>Harga Terendah</option>
          </select>
        </div>
      </section>
    </>
  );
};

export default SearchFilterSection;
