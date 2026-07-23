import React from "react";

const SearchHeader: React.FC = () => {
  return (
    <section className="hc-hero">
      <h1 className="text-gold">Mahreen Help Center</h1>
      <p className="text-muted">Temukan jawaban, panduan, dokumentasi, serta bantuan resmi Mahreen Indonesia dalam satu tempat.</p>
      
      <div className="hc-search-box">
        <svg className="hc-search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input type="text" placeholder="Apa yang ingin Anda cari?" />
      </div>

      <div className="hc-popular-tags">
        Populer: 
        <span>Cara Daftar Internship</span> • 
        <span>Booking Consultation</span> • 
        <span>Metode Pembayaran</span>
      </div>
    </section>
  );
};

export default SearchHeader;