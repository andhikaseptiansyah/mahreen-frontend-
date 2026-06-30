import {
  Sparkles,
  Briefcase,
  PenTool,
  Users,
  Globe,
} from "lucide-react";

import logoStudio from "../../../assets/Ekosistem Mahreen/mahreen-studio.png";
import logoTanya from "../../../assets/Ekosistem Mahreen/tanya-mahreen.png";
import logoPeduli from "../../../assets/Ekosistem Mahreen/peduli-mahreen.png";
import logoCsr from "../../../assets/Ekosistem Mahreen/mahreen-csr.png";
import logoInternship from "../../../assets/Ekosistem Mahreen/mahreen-internship.png";

interface EcosystemItem {
  id: string;
  logo: string;
  icon: React.ReactNode;
  category: string;
  title: string;
  description: string;
  linkLabel: string;
  linkHref: string;
}

const ecosystemItems: EcosystemItem[] = [
  {
    id: "studio",
    logo: logoStudio,
    icon: <Sparkles size={14} />,
    category: "PENGEMBANGAN TALENTA",
    title: "Mahreen Studio",
    description:
      "Creative lifestyle yang berfokus pada pengembangan apparel, visual branding, dan identitas kreatif modern.",
    linkLabel: "Lihat Karya",
    linkHref: "#",
  },
  {
    id: "tanya",
    logo: logoTanya,
    icon: <Briefcase size={14} />,
    category: "SOLUSI BISNIS",
    title: "Tanya Mahreen",
    description:
      "Solusi digital dan kreatif untuk membantu UMKM, brand, dan perusahaan bertumbuh melalui teknologi dan inovasi.",
    linkLabel: "Eksplorasi Solusi",
    linkHref: "#",
  },
  {
    id: "peduli",
    logo: logoPeduli,
    icon: <PenTool size={14} />,
    category: "CREATIVE AGENCY",
    title: "Peduli Mahreen",
    description:
      "Mendorong perubahan melalui pendidikan, pemberdayaan, dan aksi sosial yang berdampak bagi masyarakat.",
    linkLabel: "Lihat Program",
    linkHref: "#",
  },
  {
    id: "csr",
    logo: logoCsr,
    icon: <Users size={14} />,
    category: "SOCIAL IMPACT",
    title: "Mahreen CSR",
    description:
      "Mendorong perubahan melalui pendidikan, pemberdayaan, dan aksi sosial yang berdampak bagi masyarakat.",
    linkLabel: "Lihat Mitra",
    linkHref: "#",
  },
  {
    id: "internship",
    logo: logoInternship,
    icon: <Globe size={14} />,
    category: "PENGEMBANGAN TALENTA",
    title: "Mahreen Indonesia Internship",
    description:
      "Program pengembangan talenta kreatif dan digital berbasis proyek nyata yang membekali peserta dengan pengalaman profesional dan portofolio.",
    linkLabel: "Pelajari Lebih Lanjut",
    linkHref: "#",
  },
];

const ekosistemStyles = `
  .ekosistem {
    width: 100%;
    background-color: #050505;
    padding: 96px 22px;
  }

  .ekosistem .ekosistem__container {
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
  }

  .ekosistem .ekosistem__header {
    max-width: 720px;
    margin-bottom: 48px;
  }

  .ekosistem .ekosistem__title {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 42px;
    font-weight: 700;
    color: #d6a35c;
    margin: 0 0 16px;
    text-align: left;
  }

  .ekosistem .ekosistem__subtitle {
    font-family: "Inter", Arial, sans-serif;
    font-size: 15px;
    line-height: 1.7;
    color: #b8b8b8;
    margin: 0;
    text-align: left;
  }

  .ekosistem .ekosistem__grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
  }

  .ekosistem .ekosistem__card {
    background-color: #161616;
    border: 1px solid #232323;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: border-color 0.2s ease, transform 0.2s ease;
  }

  .ekosistem .ekosistem__card:hover {
    border-color: #d6a35c;
    transform: translateY(-2px);
  }

  .ekosistem .ekosistem__logo-wrapper {
    width: 100%;
    aspect-ratio: 1 / 0.78;
    background-color: #1d1d1d;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ekosistem .ekosistem__logo {
    width: 56px;
    height: 56px;
    object-fit: contain;
  }

  .ekosistem .ekosistem__card-body {
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .ekosistem .ekosistem__category {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: "Inter", Arial, sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #d6a35c; /* <-- Diubah dari #9a9a9a menjadi #d6a35c di sini */
    margin-bottom: 12px;
  }

  .ekosistem .ekosistem__card-title {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 10px;
    line-height: 1.3;
  }

  .ekosistem .ekosistem__card-description {
    font-family: "Inter", Arial, sans-serif;
    font-size: 13px;
    line-height: 1.6;
    color: #999999;
    margin: 0 0 20px;
    flex: 1;
  }

  .ekosistem .ekosistem__card-link {
    font-family: "Inter", Arial, sans-serif;
    font-size: 12px;
    font-weight: 600;
    color: #d6a35c;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    width: fit-content;
    padding: 8px 12px;
    margin-left: -12px;
    border-radius: 6px;
    transition: all 0.2s ease;
  }

  .ekosistem .ekosistem__card-link:hover {
    gap: 8px;
    background-color: rgba(214, 163, 92, 0.15);
    text-decoration: none;
  }

  @media (max-width: 1100px) {
    .ekosistem .ekosistem__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .ekosistem .ekosistem__grid {
      grid-template-columns: 1fr;
    }

    .ekosistem .ekosistem__title {
      font-size: 32px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .ekosistem .ekosistem__card,
    .ekosistem .ekosistem__card-link {
      transition: none;
    }
  }
`;

const Ekosistem = () => {
  return (
    <>
      <style data-component="ekosistem">{ekosistemStyles}</style>

      <section className="ekosistem" id="ecosystem">
        <div className="ekosistem__container">
          <div className="ekosistem__header">
            <h2 className="ekosistem__title">Ekosistem Kami</h2>
            <p className="ekosistem__subtitle">
              Membangun bisnis, mengembangkan talenta, mendorong kreativitas,
              serta menciptakan dampak sosial melalui ekosistem Mahreen
              Indonesia.
            </p>
          </div>

          <div className="ekosistem__grid">
            {ecosystemItems.map((item) => (
              <article className="ekosistem__card" key={item.id}>
                <div className="ekosistem__logo-wrapper">
                  <img
                    src={item.logo}
                    alt={`Logo ${item.title}`}
                    className="ekosistem__logo"
                  />
                </div>

                <div className="ekosistem__card-body">
                  <span className="ekosistem__category">
                    {item.icon}
                    {item.category}
                  </span>

                  <h3 className="ekosistem__card-title">{item.title}</h3>

                  <p className="ekosistem__card-description">
                    {item.description}
                  </p>

                  <a href={item.linkHref} className="ekosistem__card-link">
                    {item.linkLabel} <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Ekosistem;