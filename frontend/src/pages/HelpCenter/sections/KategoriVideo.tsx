import React from "react";


import iconRocket from "../../../assets/HelpCenter/KategoriVideo/GettingStarted.png"; 
import iconPayment from "../../../assets/HelpCenter/KategoriVideo/Payment.png";
import iconTech from "../../../assets/HelpCenter/KategoriVideo/TechnicalSupport.png";

const KategoriVideo: React.FC = () => {
  return (
    <div className="hc-section-wrapper">
      {/* Kategori Section */}
      <section>
        <h2 className="hc-section-title" style={{ textAlign: "center", marginBottom: "32px" }}>Telusuri Kategori</h2>
        <div className="hc-grid-3">
          
          <div className="hc-cat-card border-card">
            {/* 2. Ganti <span> emoji menjadi <img> */}
            <img 
              src={iconRocket} 
              alt="Icon Getting Started" 
              className="hc-service-icon" 
              style={{ width: "32px", height: "32px", objectFit: "contain", marginBottom: "12px" }} 
            />
            <h3>Getting Started</h3>
            <p>Langkah awal memulai kerja sama atau bergabung dengan ekosistem Mahreen.</p>
            <a href="#" className="hc-cat-link">Lihat 12 Artikel &rarr;</a>
          </div>

          <div className="hc-cat-card border-card">
            <img 
              src={iconPayment} 
              alt="Icon Payments" 
              className="hc-service-icon" 
              style={{ width: "32px", height: "32px", objectFit: "contain", marginBottom: "12px" }} 
            />
            <h3>Payments</h3>
            <p>Informasi metode pembayaran, invoicing, dan konfirmasi transaksi.</p>
            <a href="#" className="hc-cat-link">Lihat 8 Artikel &rarr;</a>
          </div>

          <div className="hc-cat-card border-card">
            <img 
              src={iconTech} 
              alt="Icon Technical Support" 
              className="hc-service-icon" 
              style={{ width: "32px", height: "32px", objectFit: "contain", marginBottom: "12px" }} 
            />
            <h3>Technical Support</h3>
            <p>Solusi kendala teknis pada platform dan integrasi sistem Mahreen.</p>
            <a href="#" className="hc-cat-link">Lihat 24 Artikel &rarr;</a>
          </div>

        </div>
      </section>

      {/* Video Section */}
      <section>
        <h2 className="hc-section-title">Video Panduan</h2>
        <p className="hc-section-subtitle">Tutorial visual untuk mempermudah pengalaman Anda.</p>
        <div className="hc-grid-3">
          
          {/* Video 1 */}
          <div className="hc-video-card">
            <div className="hc-video-card-thumb">
              {/* 3. Ganti <img> Unsplash dengan <iframe> YouTube */}
              <iframe 
                width="100%" 
                height="100%" 
                style={{ aspectRatio: "16/9", borderRadius: "8px", border: "none" }}
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Panduan Penggunaan Website" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <h4 style={{ marginTop: "12px" }}>Panduan Penggunaan Website</h4>
          </div>

          {/* Video 2 */}
          <div className="hc-video-card">
            <div className="hc-video-card-thumb">
              <iframe 
                width="100%" 
                height="100%" 
                style={{ aspectRatio: "16/9", borderRadius: "8px", border: "none" }}
                src="https://www.youtube.com/embed/tgbNymZ7vqY" 
                title="Cara Booking Project di Studio" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <h4 style={{ marginTop: "12px" }}>Cara Booking Project di Studio</h4>
          </div>

          {/* Video 3 */}
          <div className="hc-video-card">
            <div className="hc-video-card-thumb">
              <iframe 
                width="100%" 
                height="100%" 
                style={{ aspectRatio: "16/9", borderRadius: "8px", border: "none" }}
                src="https://www.youtube.com/embed/M7lc1UVf-VE" 
                title="Verifikasi Sertifikat & Dokumen" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <h4 style={{ marginTop: "12px" }}>Verifikasi Sertifikat & Dokumen</h4>
          </div>

        </div>
      </section>
    </div>
  );
};

export default KategoriVideo;