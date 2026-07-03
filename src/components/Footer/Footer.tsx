import "./style.css";

const socialLinks = [
  {
    href: "mailto:hello@mahreen.id",
    icon: "/social-logo/email-icon.svg",
    label: "Email",
  },
  {
    href: "https://instagram.com/mahreen.id",
    icon: "/social-logo/instagram-icon.svg",
    label: "Instagram",
  },
  {
    href: "https://tiktok.com/@mahreen.id",
    icon: "/social-logo/tiktok-icon.svg",
    label: "TikTok",
  },
  {
    href: "https://x.com/mahreen_id",
    icon: "/social-logo/X-icon.svg",
    label: "X",
  },
  {
    href: "https://youtube.com/@mahreen.id",
    icon: "/social-logo/youtube-icon.svg",
    label: "YouTube",
  },
];

const companyLinks = [
  "Tentang Kami",
  "Visi & Misi",
  "Portofolio",
  "Legalitas Resmi",
];

const pillarLinks = [
  "Mahreen Studio",
  "Tanya Mahreen",
  "Peduli Mahreen",
  "Mahreen CSR",
  "Mahreen Indonesia Internship",
];

export const Footer = () => {
  return (
    <footer className="footer">
      {/* Ambient blurred glow */}
      <div className="footer__glow" aria-hidden="true" />

      <div className="footer__inner">
        {/* CTA / Hero block */}
        <div className="footer-cta">
          <div className="footer-cta__heading">
            <h2 className="footer-cta__title">
              Let&#39;s Build Something Meaningful Together
            </h2>
          </div>

          <div className="footer-cta__paragraph-wrap">
            <p className="footer-cta__paragraph">
              Wujudkan ide, karya, dan bisnis menjadi lebih kreatif,
              profesional, dan berdampak. Kami siap menjadi partner kolaborasi
              pengembangan kreatif, digital, dan sosial kemasyarakatan di era
              modern.
            </p>
          </div>

          <div className="footer-cta__tagline-wrap">
            <p className="footer-cta__tagline">
              Mari Bertumbuh dan Memberikan Manfaat Bersama Mahreen Indonesia.
            </p>
          </div>
        </div>

        {/* Columns */}
        <div className="footer-columns">
          <div className="footer-col footer-col--brand">
            <img
              className="footer-col__logo"
              src="/social-logo/mahreen-logo.png"
              alt="Mahreen Indonesia"
            />
            <p className="footer-col__desc">
              Creative • Digital • Social Development.
              <br />
              Next Generation Brand Ecosystem.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-col__heading">Perusahaan</h4>
            <ul className="footer-col__list">
              {companyLinks.map((label) => (
                <li key={label} className="footer-col__item">
                  <a href="#" className="footer-col__link">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col__heading">Pilar Mahreen</h4>
            <ul className="footer-col__list">
              {pillarLinks.map((label) => (
                <li key={label} className="footer-col__item">
                  <a href="#" className="footer-col__link">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col__heading">Follow Us</h4>
            <div className="footer-social">
              {socialLinks.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="footer-social__link"
                >
                  <img src={icon} alt="" className="footer-social__icon" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-bottom__text">
            © 2026 Mahreen Indonesia. All Rights Reserved.
          </p>
          <p className="footer-bottom__text">NIB: 1203260152054</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
