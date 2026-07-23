import React from "react";
import { ChevronRight } from "lucide-react";

// Di aplikasi nyata, data ini idealnya diambil dari data source newsroom Anda,
// misalnya melalui sebuah hook seperti `usePopularArticles()`.
// Untuk saat ini, kita simulasikan dengan data statis yang memiliki slug.
const popularArticles = [
  {
    slug: "cara-mendaftar-program-internship-2024",
    title: "Cara Mendaftar Program Internship 2024",
    desc: "Panduan langkah demi langkah pendaftaran magang.",
  },
  {
    slug: "cara-booking-consultation-di-mahreen-studio",
    title: "Cara Booking Consultation di Mahreen Studio",
    desc: "Prosedur reservasi jadwal konsultasi desainer.",
  },
  {
    slug: "panduan-penggunaan-client-portal",
    title: "Panduan Penggunaan Client Portal",
    desc: "Mengelola progress proyek dan feedback.",
  },
];

const ArtikelStatus: React.FC = () => {
  return (
    <section className="hc-grid-split">
      {/* Kolom Kiri: Artikel Populer */}
      <div>
        <h2 className="hc-section-title">Artikel Populer</h2>
        <p className="hc-section-subtitle">
          Baca artikel pilihan yang paling sering membantu pengguna lain.
        </p>
        <div>
          {popularArticles.map((item, i) => (
            <a key={item.slug} href={`#/newsroom/berita/${item.slug}`} className="hc-article-item">
              <span className="hc-article-num">{String(i + 1).padStart(2, "0")}</span>
              <div className="hc-article-content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
              <ChevronRight size={20} className="text-muted" />
            </a>
          ))}
        </div>
      </div>

      {/* Kolom Kanan: Status Layanan */}
      <div>
        <h2 className="hc-section-title">Status Layanan</h2>
        <p className="hc-section-subtitle">Monitor status operasional layanan Mahreen secara real-time.</p>
        <div className="hc-status-card">
          <div className="hc-status-item">
            <span>Main Website</span>
            <div className="status-badge"><span className="dot green"></span><span style={{color:"#22c55e"}}>Normal</span></div>
          </div>
          <div className="hc-status-item">
            <span>Client Portal</span>
            <div className="status-badge"><span className="dot green"></span><span style={{color:"#22c55e"}}>Normal</span></div>
          </div>
          <div className="hc-status-item">
            <span>Internship Dashboard</span>
            <div className="status-badge"><span className="dot yellow"></span><span style={{color:"#eab308"}}>Maintenance</span></div>
          </div>
          <div className="hc-status-item">
            <span>Verification Center</span>
            <div className="status-badge"><span className="dot green"></span><span style={{color:"#22c55e"}}>Online</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtikelStatus;