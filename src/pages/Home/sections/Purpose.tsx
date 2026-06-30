import meetingImg from "../../../Assets/Purpose/meeting.jpg";

const purposeStyles = `
  @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,500;1,600&family=Inter:wght@400;500;600;700;800&display=swap");

  .purpose {
    width: 100%;
    background-color: #050505;
    padding: 76px 22px 78px;
    overflow: hidden;
  }

  .purpose .container {
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 0.95fr;
    align-items: center;
    gap: 90px;
  }

  .purpose .textCol {
    width: 100%;
    max-width: 680px;
    color: #f5f5f5;
    text-align: left;
  }

  .purpose .eyebrow {
    display: block;
    margin: 0 0 20px 0;
    color: #b99a67;
    font-family: "Inter", Arial, sans-serif;
    font-size: 9px;
    font-weight: 800;
    line-height: 1;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-align: left;
  }

  .purpose .heading {
    margin: 0 0 26px 0;
    color: #ffffff;
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(56px, 5.4vw, 76px);
    line-height: 0.94;
    font-weight: 700;
    letter-spacing: -1.6px;
    text-align: left;
  }

  .purpose .headingAccent {
    display: inline-block;
    color: #d4b078;
    font-style: italic;
    font-weight: 500;
  }

  .purpose .description {
    max-width: 600px;
    margin: 0 0 42px 0;
    color: rgba(255, 255, 255, 0.7);
    font-family: "Inter", Arial, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.65;
    letter-spacing: -0.1px;
    text-align: left;
  }

  .purpose .cta {
    min-width: 156px;
    height: 52px;
    padding: 0 34px;
    background-color: #d7b37b;
    color: #111111;
    border: none;
    border-radius: 999px;
    font-family: "Inter", Arial, sans-serif;
    font-size: 10px;
    font-weight: 800;
    line-height: 1;
    letter-spacing: 1.1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.2s ease;
  }

  .purpose .cta:hover {
    background-color: #cba66c;
    transform: translateY(-1px);
  }

  .purpose .cta:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 3px;
  }

  .purpose .imageCol {
    width: 100%;
    height: 385px;
    border-radius: 10px;
    overflow: hidden;
  }

  .purpose .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 1100px) {
    .purpose {
      padding: 68px 22px;
    }

    .purpose .container {
      max-width: 960px;
      gap: 58px;
    }

    .purpose .heading {
      font-size: clamp(48px, 5.8vw, 64px);
    }

    .purpose .description {
      font-size: 14px;
    }

    .purpose .imageCol {
      height: 330px;
    }
  }

  @media (max-width: 900px) {
    .purpose {
      padding: 64px 22px;
    }

    .purpose .container {
      grid-template-columns: 1fr;
      gap: 42px;
    }

    .purpose .textCol {
      max-width: 620px;
    }

    .purpose .heading {
      font-size: clamp(44px, 9vw, 58px);
    }

    .purpose .description {
      max-width: 560px;
      font-size: 14px;
    }

    .purpose .imageCol {
      height: 300px;
    }
  }

  @media (max-width: 560px) {
    .purpose {
      padding: 54px 20px;
    }

    .purpose .eyebrow {
      font-size: 8px;
      margin-bottom: 16px;
    }

    .purpose .heading {
      font-size: 42px;
      line-height: 1;
      margin-bottom: 22px;
    }

    .purpose .description {
      font-size: 12px;
      line-height: 1.65;
      margin-bottom: 32px;
    }

    .purpose .cta {
      min-width: 142px;
      height: 46px;
      font-size: 9px;
      padding: 0 28px;
    }

    .purpose .imageCol {
      height: 240px;
      border-radius: 8px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .purpose .cta {
      transition: none;
    }
  }
`;

const Purpose = () => {
  return (
    <>
      <style data-component="purpose">{purposeStyles}</style>

      <section className="purpose" id="purpose">
        <div className="container">
          <div className="textCol">
            <span className="eyebrow">OUR PURPOSE</span>

            <h2 className="heading">
              Building Ideas.
              <br />
              <span className="headingAccent">Creating Impact.</span>
            </h2>

            <p className="description">
              Kami percaya bahwa setiap ide memiliki potensi menjadi inovasi.
              <br />
              Melalui sinergi, kreativitas, dan kolaborasi, kami menghadirkan solusi
              <br />
              yang memberikan dampak nyata bagi masyarakat.
            </p>

            <button type="button" className="cta">
              Selengkapnya
            </button>
          </div>

          <div className="imageCol">
            <img
              src={meetingImg}
              alt="Tim sedang berdiskusi ide di depan papan sticky notes"
              className="image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Purpose;