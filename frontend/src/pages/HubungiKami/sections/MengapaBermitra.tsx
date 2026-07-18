import React from "react";

const MengapaBermitra: React.FC = () => {
  const reasons = [
    {
      num: "01",
      title: "Standar Kualitas Global",
      desc: "Setiap proyek digarap dengan dedikasi tinggi, riset mendalam, serta eksekusi desain dan teknologi sesuai standar industri global."
    },
    {
      num: "02",
      title: "Ekosistem Brand Terintegrasi",
      desc: "Dari pilar gaya hidup kreatif, edukasi akademik, penanganan program sosial (CSR), hingga magang talenta digital, kami menawarkan solusi hulu-ke-hilir."
    },
    {
      num: "03",
      title: "Dampak Sosial & Nilai Kemanusiaan",
      desc: "Kolaborasi bersama kami turut mendukung program sosial berkelanjutan untuk kemajuan komunitas dan talenta muda di Indonesia."
    }
  ];

  return (
    <section>
      <h2 className="hk-section-title">Mengapa Bermitra dengan Kami?</h2>
      <div className="hk-why-list">
        {reasons.map((item, index) => (
          <div key={index} className="hk-why-item">
            <span className="hk-why-num">{item.num}</span>
            <div className="hk-why-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MengapaBermitra;