import backgroundHome from "../../assets/baground-home.png";
import Partnership from "./sections/Partnership";
import Purpose from "./sections/Purpose";

const statistics = [
  {
    value: "50+",
    lines: ["MITRA KAMPUS"],
  },
  {
    value: "10+",
    lines: ["PROYEK SELESAI"],
  },
  {
    value: "15+",
    lines: ["KOLABORASI"],
  },
  {
    value: "20+",
    lines: ["EVENTS PROGRAM"],
  },
  {
    value: "10+",
    lines: ["PEDULI MAHREEN"],
  },
  {
    value: "4",
    lines: ["BUSINESS PILLAR"],
  },
];

const homeStyles = `
  @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Inter:wght@300;400;500;600&display=swap");

  .home-page {
    position: relative;
    left: 50%;
    width: 100vw;
    transform: translateX(-50%);
    
    height: 100vh;
    height: 100svh;
    min-height: 760px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: #000000;
    color: #ffffff;
    box-sizing: border-box;
  }

  .home-page *,
  .home-page *::before,
  .home-page *::after {
    box-sizing: border-box;
  }

  .home-hero {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 118px 20px 0;
    
    background-image:
      linear-gradient(
        180deg,
        rgba(15, 17, 21, 0.10) 0%,
        rgba(15, 17, 21, 0.05) 50%,
        rgba(0, 0, 0, 0.65) 80%,
        rgba(0, 0, 0, 1) 100%
      ),
      url("${backgroundHome}");
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    isolation: isolate;
  }

  .home-hero__content {
    margin: auto auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 1200px;
    transform: translateY(-2vh);
  }

  .home-hero__title {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: clamp(55px, 7.5vw, 95px);
    font-weight: 400;
    line-height: 1.05;
    letter-spacing: -1.5px;
  }

  .home-hero__title-line {
    display: block;
    color: #ffffff;
  }

  .home-hero__title-line--gold {
    color: #dfbe7a;
    font-style: italic;
    font-weight: 500;
  }

  .home-hero__title-line--italic {
    color: #ffffff;
    font-style: italic;
    font-weight: 500;
  }

  .home-hero__description {
    margin: 20px auto 0;
    color: rgba(255, 255, 255, 0.75);
    font-family: "Inter", Arial, sans-serif;
    font-size: clamp(13px, 1.1vw, 15px);
    font-weight: 300;
    line-height: 1.6;
    text-align: center;
  }

  .home-hero__description-line {
    display: block;
  }

  .home-hero__actions {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .home-hero__button {
    min-width: 180px;
    padding: 12px 28px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    font-family: "Inter", Arial, sans-serif;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .home-hero__button--primary {
    background: #dfbe7a;
    color: #000000;
    border: 1px solid #dfbe7a;
  }

  .home-hero__button--primary:hover {
    background: #eed295;
    border-color: #eed295;
  }

  .home-hero__button--outline {
    background: transparent;
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .home-hero__button--outline:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.6);
  }

  .home-hero__statistics {
    width: 100%;
    max-width: 1100px;
    margin: 46px auto 74px;
    border-top: 1px solid rgba(255, 255, 255, 0.08); 
    padding-top: 24px;
    padding-bottom: 0;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 15px;
    align-items: end;
  }

  .home-hero__statistic {
    text-align: center;
  }

  .home-hero__statistic-value {
    margin: 0 0 6px;
    color: #dfbe7a;
    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: clamp(14px, 1.4vw, 18px);
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  .home-hero__statistic-label {
    margin: 0;
    color: rgba(255, 255, 255, 0.5);
    font-family: "Inter", Arial, sans-serif;
    font-size: 9px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  .home-hero__statistic-label span {
    display: block;
  }

  @media (max-width: 950px) {
    .home-page {
      min-height: 820px;
    }

    .home-hero {
      padding-top: 102px;
    }

    .home-hero__statistics {
      margin: 42px auto 64px;
      grid-template-columns: repeat(3, 1fr);
      row-gap: 16px;
    }
  }

  @media (max-width: 560px) {
    .home-page {
      min-height: 860px;
    }

    .home-hero {
      padding: 92px 16px 0;
    }

    .home-hero__actions {
      flex-direction: column;
      width: 100%;
      max-width: 250px;
      gap: 10px;
    }

    .home-hero__button {
      width: 100%;
    }

    .home-hero__statistics {
      margin: 36px auto 54px;
      grid-template-columns: repeat(2, 1fr);
    }

    .home-hero__title {
      font-size: clamp(40px, 11vw, 54px);
    }
  }
`;

const Home = () => {
  return (
    <>
      <style data-component="home">{homeStyles}</style>

      <main className="home-page" id="home">
        <section className="home-hero" aria-labelledby="home-hero-title">
          <div className="home-hero__content">
            <h1 className="home-hero__title" id="home-hero-title">
              <span className="home-hero__title-line">
                Membangun Generasi
              </span>
              <span className="home-hero__title-line home-hero__title-line--gold">
                Ekosistem Kreatif
              </span>
              <span className="home-hero__title-line home-hero__title-line--italic">
                Masa Depan Indonesia
              </span>
            </h1>

            <p className="home-hero__description">
              <span className="home-hero__description-line">
                Memberdayakan bisnis, mahasiswa, komunitas, dan organisasi melalui
              </span>
              <span className="home-hero__description-line">
                kreativitas, teknologi, pendidikan, dan kolaborasi yang bermakna.
              </span>
            </p>

            <div className="home-hero__actions">
              <a
                className="home-hero__button home-hero__button--primary"
                href="#ecosystem"
              >
                Jelajahi Ekosistem
              </a>
              <a
                className="home-hero__button home-hero__button--outline"
                href="#programs"
              >
                Mulai Belajar
              </a>
            </div>
          </div>

          <div
            className="home-hero__statistics"
            aria-label="Statistik Ekosistem"
          >
            {statistics.map((statistic) => (
              <div
                className="home-hero__statistic"
                key={statistic.lines.join("-")}
              >
                <p className="home-hero__statistic-value">
                  {statistic.value}
                </p>
                <p className="home-hero__statistic-label">
                  {statistic.lines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Partnership />
      <Purpose />
    </>
  );
};

export default Home;