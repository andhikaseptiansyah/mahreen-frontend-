// src/pages/Home/sections/Partnership.tsx

import logoBerkarya from "../../../assets/Partnership/Icon-berkarya.png";
import logoITB from "../../../assets/Partnership/ITB.png";
import logoUI from "../../../assets/Partnership/UI.png";
import logoPNP from "../../../assets/Partnership/PNP.png";
import logoMaChung from "../../../assets/Partnership/Ma Chung.png";
import logoPresUniv from "../../../assets/Partnership/PU.png";
import logoUTB from "../../../assets/Partnership/UTB.png";

const partners = [
  { id: 1, name: "Berkarya", logo: logoBerkarya },
  { id: 2, name: "ITB", logo: logoITB },
  { id: 3, name: "Universitas Indonesia", logo: logoUI },
  { id: 4, name: "Politeknik Negeri Padang", logo: logoPNP },
  { id: 5, name: "Ma Chung", logo: logoMaChung },
  { id: 6, name: "President University", logo: logoPresUniv },
  { id: 7, name: "UTB", logo: logoUTB },
];

const partnershipStyles = `
  .partnership-section {
    width: 100%;
    background-color: #000000;
    padding: 28px 20px 38px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .partnership-section__title {
    margin: 0 0 32px 0;
    color: rgba(255, 255, 255, 0.32);
    font-family: "Inter", Arial, sans-serif;
    font-size: 11px; /* Diperbesar dari 8px */
    font-weight: 500;
    line-height: 1;
    letter-spacing: 2.5px; /* Disesuaikan agar tetap elegan */
    text-transform: uppercase;
    text-align: center;
  }

  .partnership-section__logos {
    width: 100%;
    max-width: 1100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: clamp(34px, 5vw, 72px);
  }

  .partnership-section__logo-item {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 60px;
  }

  .partnership-section__logo-img {
    height: 74px; 
    max-width: 150px; 
    object-fit: contain;
    opacity: 0.82;
    filter: grayscale(1);
    transition:
      opacity 0.3s ease,
      transform 0.3s ease,
      filter 0.3s ease;
  }

  .partnership-section__logo-img:hover {
    opacity: 1;
    filter: grayscale(0);
    transform: translateY(-2px) scale(1.04);
  }

  @media (max-width: 1100px) {
    .partnership-section__logos {
      max-width: 900px;
    }
    
    .partnership-section__logo-img {
      height: 64px;
      max-width: 130px;
    }
  }

  @media (max-width: 950px) {
    .partnership-section {
      padding: 26px 18px 34px;
    }

    .partnership-section__logos {
      max-width: 780px;
      gap: clamp(24px, 4vw, 46px);
    }

    .partnership-section__logo-img {
      height: 56px;
      max-width: 115px;
    }
  }

  @media (max-width: 680px) {
    .partnership-section__logos {
      flex-wrap: wrap;
      row-gap: 32px;
      column-gap: 42px;
    }

    .partnership-section__logo-img {
      height: 50px;
      max-width: 100px;
    }
  }

  @media (max-width: 480px) {
    .partnership-section {
      padding: 24px 16px 32px;
    }

    .partnership-section__title {
      margin-bottom: 24px;
      font-size: 9px; /* Diperbesar dari 7px untuk HP */
      letter-spacing: 2px;
    }

    .partnership-section__logos {
      column-gap: 30px;
      row-gap: 28px;
    }

    .partnership-section__logo-img {
      height: 44px;
      max-width: 90px;
    }
  }
`;

const Partnership = () => {
  return (
    <>
      <style data-component="partnership">{partnershipStyles}</style>

      <section className="partnership-section" id="partnership">
        <h3 className="partnership-section__title">
          Trusted by Partners & Institutions
        </h3>

        <div className="partnership-section__logos">
          {partners.map((partner) => (
            <div key={partner.id} className="partnership-section__logo-item">
              <img
                src={partner.logo}
                alt={`Logo ${partner.name}`}
                className="partnership-section__logo-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Partnership;