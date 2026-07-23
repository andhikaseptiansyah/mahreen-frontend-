import React from "react";

import fileCompanyProfile from "../../../assets/HelpCenter/FaqDownload/CompanyProfile.png";
import iconDownload from "../../../assets/HelpCenter/FaqDownload/Download.png"; 
import iconDoc from "../../../assets/HelpCenter/FaqDownload/Guidbook.png";
import iconPro from "../../../assets/HelpCenter/FaqDownload/ProjectTemplates.png";

const FAQDownload: React.FC = () => {
  return (
    <div className="hc-section-wrapper">
      {/* FAQ Section */}
      <section className="hc-faq-container">
        <h2 className="hc-section-title" style={{ textAlign: "center", marginBottom: "32px" }}>Pertanyaan Umum</h2>
        <div>
          {["Bagaimana cara mendaftar akun Mahreen?", "Apa saja metode pembayaran yang diterima?", "Berapa kali saya bisa mengajukan revisi?"].map((q, i) => (
            <div key={i} className="hc-faq-item">
              <h4>{q}</h4>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          ))}
        </div>
      </section>

      {/* Download Center */}
      <section>
        <h2 className="hc-section-title">Download Center</h2>
        <div className="hc-grid-3" style={{ marginTop: "24px" }}>
          
          {/* Card 1: Company Profile */}
          <a 
            href={fileCompanyProfile} 
            download="Company-Profile-Mahreen.png" 
            className="hc-dl-card"
          >
            <div className="hc-dl-info">
              <img src={fileCompanyProfile} alt="Company Profile Icon" className="hc-dl-icon" />
              <div className="hc-dl-text">
                <h4>Company Profile</h4>
                <p>PNG • 5.2 MB</p>
              </div>
            </div>
            <img src={iconDownload} alt="Download Icon" className="hc-dl-download-icon" />
          </a>

          {/* Card 2: Guidebook */}
          <a href="#" className="hc-dl-card">
            <div className="hc-dl-info">
              <img src={iconDoc} alt="Guidebook Icon" className="hc-dl-icon" />
              <div className="hc-dl-text">
                <h4>Guidebook 2024</h4>
                <p>PDF • 12.8 MB</p>
              </div>
            </div>
            <img src={iconDownload} alt="Download Icon" className="hc-dl-download-icon" />
          </a>

          {/* Card 3: Project Templates */}
          <a href="#" className="hc-dl-card">
            <div className="hc-dl-info">
              {/* Menggunakan iconPro sesuai import terbaru */}
              <img src={iconPro} alt="Project Templates Icon" className="hc-dl-icon" />
              <div className="hc-dl-text">
                <h4>Project Templates</h4>
                <p>ZIP • 24.5 MB</p>
              </div>
            </div>
            <img src={iconDownload} alt="Download Icon" className="hc-dl-download-icon" />
          </a>

        </div>
      </section>
    </div>
  );
};

export default FAQDownload;