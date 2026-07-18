import { CalendarDays, CircleUserRound, WalletCards } from "lucide-react";
import type { KonsultasiDraft } from "../../../../services/konsultasiDraft";

interface InformasiAndaProps {
  draft: KonsultasiDraft;
}

const budgetLabels: Record<string, string> = {
  "< 1M": "< Rp 1.000.000",
  "1M - 3M": "Rp 1.000.000 – 3.000.000",
  "3M - 5M": "Rp 3.000.000 – 5.000.000",
  "5M - 10M": "Rp 5.000.000 – 10.000.000",
  "> 10M": "> Rp 10.000.000",
};

const InformasiAnda = ({ draft }: InformasiAndaProps) => {
  const { clientInfo, services, budget, target } = draft;

  return (
    <section className="review-summary-grid review-reveal" aria-label="Informasi utama konsultasi">
      <article className="review-card review-card--identity">
        <h2 className="review-section-title">
          <CircleUserRound aria-hidden="true" />
          <span>Informasi Utama</span>
        </h2>

        <div className="review-identity-grid">
          <div className="review-data-block">
            <span className="review-data-label">Nama Lengkap</span>
            <strong>{clientInfo.nama || "Belum diisi"}</strong>
          </div>
          <div className="review-data-block">
            <span className="review-data-label">Nama Brand / Perusahaan</span>
            <strong>{clientInfo.perusahaan || "Belum diisi"}</strong>
          </div>
        </div>

        <div className="review-contact-grid">
          <span>{clientInfo.email || "Email belum diisi"}</span>
          <span>{clientInfo.whatsapp || "WhatsApp belum diisi"}</span>
          {clientInfo.kota && <span>{clientInfo.kota}</span>}
        </div>

        <div className="review-divider" />

        <div>
          <span className="review-data-label">Layanan yang Dipilih</span>
          <div className="review-service-list">
            {services.length > 0 ? (
              services.map((service) => (
                <span className="review-service-chip" key={service}>
                  <span aria-hidden="true">•</span>
                  {service}
                </span>
              ))
            ) : (
              <span className="review-empty-copy">Belum ada layanan dipilih.</span>
            )}
          </div>
        </div>
      </article>

      <aside className="review-side-stack">
        <article className="review-card review-metric-card">
          <span className="review-metric-label">Estimasi Budget</span>
          <div className="review-metric-value">
            <WalletCards aria-hidden="true" />
            <strong>{(budgetLabels[budget] ?? budget) || "Belum dipilih"}</strong>
          </div>
          <em>Estimasi awal proyek</em>
        </article>

        <article className="review-card review-metric-card">
          <span className="review-metric-label">Tenggat Waktu</span>
          <div className="review-metric-value">
            <CalendarDays aria-hidden="true" />
            <strong>{target || "Belum dipilih"}</strong>
          </div>
          <em>Target penyelesaian</em>
        </article>
      </aside>
    </section>
  );
};

export default InformasiAnda;
