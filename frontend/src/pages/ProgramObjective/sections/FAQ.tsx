import React, { useState } from 'react';

const faqStyles = `
  .po-faq {
    width: 100%;
    background: #0E0E0E;
    padding: 80px 48px;
    display: flex;
    justify-content: center;
  }

  .po-faq__container {
    width: 100%;
    max-width: 1200px;
    display: flex;
    gap: 64px;
  }

  .po-faq__left {
    flex: 0 0 380px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .po-faq__title {
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    font-size: clamp(32px, 4vw, 40px);
    line-height: 1.2;
    letter-spacing: -0.4px;
    color: #E5E2E1;
    margin: 0;
  }

  .po-faq__desc {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #D0C5B5;
    margin: 0;
  }

  .po-faq__right {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .po-faq__item {
    background: #201F1F;
    padding: 24px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .po-faq__item:hover {
    background: #2A2929;
  }

  .po-faq__question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }

  .po-faq__question-text {
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    color: #E5E2E1;
    margin: 0;
  }

  .po-faq__icon {
    color: #E5E2E1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
  }

  .po-faq__item--open .po-faq__icon {
    transform: rotate(180deg);
  }

  .po-faq__answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, margin-top 0.3s ease;
  }

  .po-faq__item--open .po-faq__answer {
    max-height: 200px;
    margin-top: 16px;
  }

  .po-faq__answer-text {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.6;
    color: #D0C5B5;
    margin: 0;
  }

  @media (max-width: 992px) {
    .po-faq__container {
      flex-direction: column;
      gap: 40px;
    }
    .po-faq__left {
      flex: none;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .po-faq {
      padding: 60px 24px;
    }
  }
`;

const faqData = [
  {
    q: "Bagaimana cara mendaftarkan komunitas saya?",
    a: "Anda dapat mendaftarkan komunitas Anda melalui formulir online di halaman pendaftaran kami. Tim kami akan meninjau dan menghubungi Anda untuk langkah selanjutnya."
  },
  {
    q: "Apakah ada biaya untuk mengikuti program pelatihan?",
    a: "Tidak, semua program pelatihan yang diselenggarakan melalui inisiatif Mahreen CSR ini 100% gratis untuk peserta yang memenuhi syarat."
  },
  {
    q: "Dapatkah individu bergabung sebagai relawan ahli?",
    a: "Tentu! Kami selalu terbuka bagi para profesional yang ingin berkontribusi sebagai mentor. Silakan hubungi kami melalui halaman kontak."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="po-faq">
      <style>{faqStyles}</style>
      <div className="po-faq__container">
        
        <div className="po-faq__left">
          <h2 className="po-faq__title">Pertanyaan Umum</h2>
          <p className="po-faq__desc">
            Segala hal yang perlu Anda ketahui tentang cara bergabung dan berkontribusi.
          </p>
        </div>

        <div className="po-faq__right">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                className={`po-faq__item ${isOpen ? 'po-faq__item--open' : ''}`} 
                key={index}
                onClick={() => toggle(index)}
              >
                <div className="po-faq__question">
                  <h3 className="po-faq__question-text">{item.q}</h3>
                  <div className="po-faq__icon">
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="po-faq__answer">
                  <p className="po-faq__answer-text">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
