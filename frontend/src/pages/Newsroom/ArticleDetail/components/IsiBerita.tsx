import meetingImage from "../../../../assets/Purpose/meeting.jpg";

const styles = `
  .article-body {
    min-width: 0;
    color: #bbb4ab;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    line-height: 1.9;
  }

  .article-body__lead {
    margin: 0 0 28px;
    color: #e6e0d8;
    font-size: 17px;
    line-height: 1.8;
  }

  .article-body p {
    margin: 0 0 22px;
  }

  .article-body h2 {
    margin: 42px 0 18px;
    color: #e5c477;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(29px, 2.35vw, 38px);
    font-weight: 400;
    line-height: 1.15;
    letter-spacing: -0.02em;
  }

  .article-body__figure {
    margin: 42px 0 44px;
  }

  .article-body__image-wrap {
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(229, 196, 119, 0.16);
    border-radius: 12px;
    background: #161513;
  }

  .article-body__image-wrap::after {
    position: absolute;
    inset: 0;
    content: "";
    pointer-events: none;
    background: linear-gradient(180deg, transparent 58%, rgba(0, 0, 0, 0.65));
  }

  .article-body__image {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 8.5;
    object-fit: cover;
    transition: transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .article-body__figure:hover .article-body__image {
    transform: scale(1.025);
  }

  .article-body__caption {
    position: absolute;
    right: 22px;
    bottom: 18px;
    left: 22px;
    z-index: 1;
    margin: 0;
    color: rgba(245, 239, 230, 0.82);
    font-size: 10px;
    font-style: italic;
    line-height: 1.55;
  }

  .article-body__quote {
    position: relative;
    margin: 42px 0;
    padding: 30px 32px 30px 36px;
    overflow: hidden;
    border: 1px solid rgba(229, 196, 119, 0.12);
    border-left: 3px solid #e5c477;
    border-radius: 10px;
    color: #d6cec4;
    background:
      radial-gradient(circle at 100% 0%, rgba(229, 196, 119, 0.08), transparent 42%),
      linear-gradient(145deg, #151412, #0d0c0b);
    font-family: Georgia, "Times New Roman", serif;
    font-size: 20px;
    font-style: italic;
    line-height: 1.65;
  }

  .article-body__quote footer {
    margin-top: 16px;
    color: #a99770;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }

  .article-body__ending {
    margin-top: 44px;
    padding-top: 28px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  @media (max-width: 720px) {
    .article-body {
      font-size: 14px;
      line-height: 1.82;
    }

    .article-body__lead {
      font-size: 16px;
    }

    .article-body__quote {
      padding: 26px 24px 26px 28px;
      font-size: 18px;
    }

    .article-body__caption {
      right: 16px;
      bottom: 14px;
      left: 16px;
    }
  }
`;

const IsiBerita = () => {
  return (
    <>
      <style>{styles}</style>

      <article className="article-body">
        <p className="article-body__lead" data-article-reveal>
          Mahreen Indonesia secara resmi mengumumkan pembukaan hub kreatif
          terbaru di pusat inovasi Jawa Barat. Inisiatif ini menandai tonggak
          sejarah baru dalam misi perusahaan untuk mendemokratisasi akses
          teknologi dan ruang kolaborasi premium bagi para wirausahawan lokal.
        </p>

        <h2 data-article-reveal>Visi Ekspansi</h2>
        <div data-article-reveal>
          <p>
            Sebagai bagian dari roadmap jangka panjang “Obsidian Vision 2030”,
            Mahreen Indonesia berkomitmen untuk membangun 12 hub inovasi di
            lokasi-lokasi strategis Jawa Barat dengan menggabungkan fungsi
            kreatif, teknologi, dan pengembangan bisnis dalam 1 ekosistem.
          </p>
          <p>
            Hub ini akan menjadi pusat bertemunya talenta lokal, pelaku usaha,
            mentor, dan mitra industri. Setiap fasilitas dirancang agar mampu
            mendukung proses dari ide awal hingga validasi pasar dengan standar
            kerja profesional.
          </p>
          <p>
            “Kami melihat Jawa Barat sebagai jantung kreativitas baru di
            Indonesia. Dengan hadirnya Mahreen Hub di sini, kami ingin
            memberikan wadah yang mampu memicu sinergi antara talenta lokal
            dengan standar industri global,” jelas Bambang Wijaya selaku Chief
            Ecosystem Officer Mahreen Indonesia.
          </p>
        </div>

        <figure className="article-body__figure" data-article-reveal>
          <div className="article-body__image-wrap">
            <img
              className="article-body__image"
              src={meetingImage}
              alt="Tim Mahreen berdiskusi dalam ruang kolaborasi"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="article-body__caption">
              Suasana ruang kolaborasi yang dirancang untuk mempertemukan
              talenta, mentor, dan pelaku usaha lokal.
            </figcaption>
          </div>
        </figure>

        <h2 data-article-reveal>Kolaborasi Lokal</h2>
        <div data-article-reveal>
          <p>
            Salah satu pilar utama ekspansi ini adalah kemitraan strategis
            dengan institusi pendidikan, komunitas kreatif lokal, dan pemerintah
            daerah. Mahreen Indonesia akan meluncurkan program “Gold Catalyst”,
            sebuah inisiatif pendampingan intensif bagi pengusaha muda yang
            ingin mempertajam kemampuan manajerial serta teknis mereka.
          </p>
          <p>
            Fasilitas di hub mencakup studio produksi konten 4K, ruang
            prototyping berbasis AI, lounge eksklusif, ruang diskusi, dan area
            kerja bersama. Seluruh elemen dibangun dalam estetika desain minimalis
            yang menjadi ciri khas Mahreen Indonesia.
          </p>
        </div>

        <blockquote className="article-body__quote" data-article-reveal>
          “Inovasi sejati tidak lahir dari isolasi, melainkan dari pertemuan
          berbagai ide di lingkungan yang tepat. Hub Jawa Barat adalah bukti
          komitmen kami terhadap pertumbuhan yang inklusif dan berkelanjutan.”
          <footer>Bambang Wijaya · Chief Ecosystem Officer</footer>
        </blockquote>

        <p className="article-body__ending" data-article-reveal>
          Langkah ini diharapkan mampu meningkatkan daya saing ekonomi kreatif
          regional serta membuka akses yang lebih luas bagi talenta baru.
          Pendaftaran program awal, agenda komunitas, dan informasi kemitraan
          akan diumumkan melalui Newsroom Mahreen Indonesia.
        </p>
      </article>
    </>
  );
};

export default IsiBerita;
