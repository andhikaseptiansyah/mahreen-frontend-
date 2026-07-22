import emailIcon from "../../assets/social-logo/email-icon.svg";
import instagramIcon from "../../assets/social-logo/instagram-icon.svg";
import tiktokIcon from "../../assets/social-logo/tiktok-icon.svg";
import xIcon from "../../assets/social-logo/X-icon.svg";
import youtubeIcon from "../../assets/social-logo/youtube-icon.svg";
import mahreenLogo from "../../assets/social-logo/mahreen-logo.png";

type FooterLink = Readonly<{
  label: string;
  href: string;
}>;

type SocialLink = FooterLink &
  Readonly<{
    icon: string;
    iconAlt: string;
  }>;

const aboutLinks: readonly FooterLink[] = [
  { label: "Profil & Sejarah", href: "/tentang?section=profil-sejarah" },
  { label: "Visi & Misi", href: "/tentang?section=visi-misi" },
  { label: "Legalitas Resmi", href: "/tentang?section=legalitas" },
  { label: "Portofolio", href: "/portofolio" },
  { label: "Contact", href: "/contact" },
];

const pillarLinks: readonly FooterLink[] = [
  { label: "Mahreen Studio", href: "/mahreen-studio" },
  { label: "Tanya Mahreen", href: "/tanya-mahreen" },
  { label: "Peduli Mahreen", href: "/peduli-mahreen" },
  { label: "Mahreen CSR", href: "#/mahreen-csr" },
  { label: "Mahreen Indonesia Internship", href: "/internship" },
];

const socialLinks: readonly SocialLink[] = [
  {
    label: "instagram",
    href: "https://instagram.com/mahreen.id",
    icon: instagramIcon,
    iconAlt: "Instagram",
  },
  {
    label: "X (sebelumnya Twitter)",
    href: "https://x.com/mahreen_id",
    icon: xIcon,
    iconAlt: "X",
  },
  {
    label: "tiktok",
    href: "https://tiktok.com/@mahreen.id",
    icon: tiktokIcon,
    iconAlt: "TikTok",
  },
  {
    label: "email",
    href: "mailto:hello@mahreen.id",
    icon: emailIcon,
    iconAlt: "Email",
  },
  {
    label: "youtube",
    href: "https://youtube.com/@mahreen.id",
    icon: youtubeIcon,
    iconAlt: "YouTube",
  },
];

const footerStyles = `
  @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=Inter:wght@300;400;500&display=swap");

  .footer {
    --footer-gold: #d6a34f;
    --footer-gold-bright: #ffd77a;
    --footer-gold-soft: rgba(214, 163, 79, 0.28);

    width: 100%;
    background: #000000;
    color: #ffffff;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }

  .footer,
  .footer *,
  .footer *::before,
  .footer *::after {
    box-sizing: border-box;
  }

  .footer a {
    color: inherit;
    text-decoration: none;
  }

  .footer__inner {
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
    padding: 38px 32px 0;
  }

  .footer__main {
    display: grid;
    grid-template-columns: 1.15fr 1fr 1fr 1.25fr;
    column-gap: 54px;
    align-items: start;
    padding-bottom: 34px;
  }

  .footer__brand {
    max-width: 232px;
  }

  .footer__logo-link {
    display: inline-flex;
    line-height: 0;
    border-radius: 8px;
    transition: filter 180ms ease, opacity 180ms ease, transform 180ms ease;
  }

  .footer__logo {
    display: block;
    width: 220px;
    height: auto;
    object-fit: contain;
  }

  .footer__brand-text {
    margin: 28px 0 0;
    color: rgba(255, 255, 255, 0.72);
    font-family: "Inter", Arial, sans-serif;
    font-size: 13px;
    font-weight: 300;
    line-height: 1.55;
    letter-spacing: 0.01em;
  }

  .footer__column-title {
    margin: 0;
    color: #ffffff;
    font-family: "Playfair Display", Georgia, serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.25;
    letter-spacing: 0;
  }

  .footer__list {
    margin: 26px 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .footer__link,
  .footer__social-link,
  .footer__bottom-link,
  .footer__logo-link {
    transition:
      color 220ms ease,
      text-shadow 220ms ease,
      filter 220ms ease,
      opacity 220ms ease,
      transform 220ms ease,
      background-color 220ms ease,
      border-color 220ms ease,
      box-shadow 220ms ease;
  }

  .footer__link,
  .footer__social-link,
  .footer__bottom-link {
    position: relative;
    isolation: isolate;
    border-radius: 8px;
  }

  .footer__link::before,
  .footer__social-link::before,
  .footer__bottom-link::before {
    content: "";
    position: absolute;
    inset: -7px -10px;
    z-index: -1;
    border-radius: inherit;
    background: radial-gradient(
      circle at center,
      rgba(255, 215, 122, 0.24) 0%,
      rgba(214, 163, 79, 0.1) 48%,
      transparent 74%
    );
    filter: blur(8px);
    opacity: 0;
    transform: scale(0.82);
    pointer-events: none;
    transition: opacity 220ms ease, transform 220ms ease;
  }

  .footer__link,
  .footer__social-link {
    color: rgba(255, 255, 255, 0.72);
    font-family: "Inter", Arial, sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.35;
  }

  .footer__social-list {
    margin: 26px 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .footer__social-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    width: fit-content;
    padding: 7px 10px;
    margin: -7px -10px;
    border: 1px solid transparent;
  }

  .footer__social-icon {
    width: 13px;
    height: 13px;
    object-fit: contain;
    opacity: 0.92;
    filter: grayscale(1) brightness(1.45);
    transition: filter 180ms ease, opacity 180ms ease, transform 180ms ease;
  }

  .footer__separator {
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .footer__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 24px 32px 24px;
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
  }

  .footer__copyright,
  .footer__bottom-link {
    color: rgba(255, 255, 255, 0.62);
    font-family: "Inter", Arial, sans-serif;
    font-size: 10px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .footer__bottom-links {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .footer__link:hover,
  .footer__link:focus-visible,
  .footer__social-link:hover,
  .footer__social-link:focus-visible,
  .footer__bottom-link:hover,
  .footer__bottom-link:focus-visible {
    color: var(--footer-gold-bright);
    opacity: 1;
    text-shadow:
      0 0 6px rgba(255, 215, 122, 0.95),
      0 0 15px rgba(214, 163, 79, 0.72),
      0 0 30px rgba(214, 163, 79, 0.38);
    filter: brightness(1.12);
  }

  .footer__link:hover::before,
  .footer__link:focus-visible::before,
  .footer__social-link:hover::before,
  .footer__social-link:focus-visible::before,
  .footer__bottom-link:hover::before,
  .footer__bottom-link:focus-visible::before {
    opacity: 1;
    transform: scale(1);
  }

  .footer__social-link:hover,
  .footer__social-link:focus-visible {
    border-color: rgba(255, 215, 122, 0.42);
    background: linear-gradient(
      135deg,
      rgba(255, 215, 122, 0.1),
      rgba(214, 163, 79, 0.035)
    );
    box-shadow:
      0 0 10px rgba(255, 215, 122, 0.18),
      0 0 24px rgba(214, 163, 79, 0.16),
      inset 0 0 14px rgba(255, 215, 122, 0.035);
  }

  .footer__logo-link:hover,
  .footer__logo-link:focus-visible {
    opacity: 1;
    filter:
      brightness(1.12)
      drop-shadow(0 0 10px rgba(255, 215, 122, 0.22))
      drop-shadow(0 0 22px rgba(214, 163, 79, 0.14));
  }

  .footer__link:hover,
  .footer__social-link:hover,
  .footer__bottom-link:hover,
  .footer__logo-link:hover {
    transform: translateY(-1px);
  }

  .footer__social-link:hover .footer__social-icon,
  .footer__social-link:focus-visible .footer__social-icon,
  .footer__logo-link:hover .footer__logo,
  .footer__logo-link:focus-visible .footer__logo {
    filter:
      grayscale(0) brightness(1.15)
      drop-shadow(0 0 10px rgba(255, 255, 255, 0.24))
      drop-shadow(0 0 18px rgba(197, 168, 128, 0.18));
    opacity: 1;
  }

  .footer__link:focus-visible,
  .footer__social-link:focus-visible,
  .footer__bottom-link:focus-visible,
  .footer__logo-link:focus-visible {
    outline: 1px solid rgba(255, 215, 122, 0.72);
    outline-offset: 4px;
  }

  @media (max-width: 1024px) {
    .footer__inner {
      padding: 34px 24px 0;
    }

    .footer__main {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      row-gap: 34px;
      column-gap: 28px;
      padding-bottom: 30px;
    }

    .footer__bottom {
      padding: 20px 24px 24px;
      flex-direction: column;
      align-items: flex-start;
    }

    .footer__bottom-links {
      gap: 20px;
      flex-wrap: wrap;
    }
  }

  @media (max-width: 640px) {
    .footer__inner {
      padding: 28px 20px 0;
    }

    .footer__main {
      grid-template-columns: 1fr;
      row-gap: 28px;
      padding-bottom: 24px;
    }

    .footer__logo {
      width: 200px;
    }

    .footer__brand-text {
      margin-top: 22px;
      font-size: 12px;
    }

    .footer__column-title {
      font-size: 17px;
    }

    .footer__list,
    .footer__social-list {
      margin-top: 20px;
      gap: 14px;
    }

    .footer__link,
    .footer__social-link {
      font-size: 13px;
    }

    .footer__bottom {
      padding: 18px 20px 22px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .footer__link,
    .footer__social-link,
    .footer__bottom-link,
    .footer__logo-link,
    .footer__social-icon,
    .footer__link::before,
    .footer__social-link::before,
    .footer__bottom-link::before {
      transition: none;
    }

    .footer__link:hover,
    .footer__social-link:hover,
    .footer__bottom-link:hover,
    .footer__logo-link:hover {
      transform: none;
    }
  }
`;

const toAppRouteHref = (href: string) => {
  const isExternal =
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  if (isExternal || href.startsWith("#")) {
    return href;
  }

  return `#${href.startsWith("/") ? href : `/${href}`}`;
};

const renderLinks = (links: readonly FooterLink[]) => (
  <ul className="footer__list">
    {links.map(({ href, label }) => (
      <li key={href}>
        <a className="footer__link" href={toAppRouteHref(href)}>
          {label}
        </a>
      </li>
    ))}
  </ul>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style data-component="footer">{footerStyles}</style>

      <footer id="contact" className="footer" role="contentinfo" aria-label="Footer Mahreen Indonesia">
        <div className="footer__inner">
          <div className="footer__main">
            <section className="footer__brand" aria-label="Mahreen Indonesia">
              <a className="footer__logo-link" href="#/" aria-label="Mahreen Indonesia - Beranda">
                <img
                  className="footer__logo"
                  src={mahreenLogo}
                  alt="Mahreen Indonesia"
                  width="220"
                  height="58"
                  loading="lazy"
                  decoding="async"
                />
              </a>

              <p className="footer__brand-text">
                Creative • Digital • Social
                <br />
                Development.
                <br />
                Next Generation Brand Ecosystem.
              </p>
            </section>

            <nav aria-labelledby="footer-about-title">
              <h2 className="footer__column-title" id="footer-about-title">
                Tentang Kami
              </h2>
              {renderLinks(aboutLinks)}
            </nav>

            <nav aria-labelledby="footer-pillar-title">
              <h2 className="footer__column-title" id="footer-pillar-title">
                Pilar Mahreen
              </h2>
              {renderLinks(pillarLinks)}
            </nav>

            <nav aria-labelledby="footer-social-title">
              <h2 className="footer__column-title" id="footer-social-title">
                Follow Us & Contact
              </h2>

              <ul className="footer__social-list">
                {socialLinks.map(({ href, label, icon, iconAlt }) => {
                  const isExternal = href.startsWith("http");

                  return (
                    <li key={href}>
                      <a
                        className="footer__social-link"
                        href={href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        aria-label={label}
                      >
                        <img
                          className="footer__social-icon"
                          src={icon}
                          alt={iconAlt}
                          width="13"
                          height="13"
                          loading="lazy"
                          decoding="async"
                        />
                        <span>{label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>

        <div className="footer__separator" aria-hidden="true" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Mahreen Indonesia. Seluruh hak cipta dilindungi.
          </p>

          <div className="footer__bottom-links">
            <a className="footer__bottom-link" href="#/kebijakan-privasi">
              Kebijakan Privasi
            </a>
            <a className="footer__bottom-link" href="#/help-center">
              Help Center
            </a>
            <a className="footer__bottom-link" href="#/syarat-ketentuan">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;