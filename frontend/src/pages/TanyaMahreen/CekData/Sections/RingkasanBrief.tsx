import { FileText } from "lucide-react";

interface RingkasanBriefProps {
  kebutuhan: string;
  notes?: string;
}

const RingkasanBrief = ({ kebutuhan, notes = "" }: RingkasanBriefProps) => {
  return (
    <section className="review-card review-reveal" aria-labelledby="ringkasan-brief-title">
      <h2 className="review-section-title" id="ringkasan-brief-title">
        <FileText aria-hidden="true" />
        <span>Ringkasan Brief</span>
      </h2>

      <div className="review-brief-box">
        <p>{kebutuhan || "Brief kebutuhan belum diisi."}</p>
        {notes.trim() && (
          <>
            <span className="review-brief-subtitle">Catatan Tambahan</span>
            <p>{notes}</p>
          </>
        )}
      </div>
    </section>
  );
};

export default RingkasanBrief;
