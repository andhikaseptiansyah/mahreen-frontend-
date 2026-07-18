import { ArrowRight } from "lucide-react";

interface ButtunKirimProps {
  submitting?: boolean;
}

const ButtunKirim = ({ submitting = false }: ButtunKirimProps) => {
  return (
    <div className="consult-submit-area consult-form-reveal">
      <p className="consult-privacy-copy">
        Data belum dikirim ke tim Mahreen pada tahap ini. Setelah selesai mengisi,
        Anda akan diarahkan ke halaman pemeriksaan data sesuai{" "}
        <a href="#/kebijakan-privasi">Kebijakan Privasi</a>.
      </p>

      <button className="consult-submit-button" type="submit" disabled={submitting}>
        <span>{submitting ? "Menyiapkan Pemeriksaan..." : "Kirim Permintaan Konsultasi"}</span>
        <ArrowRight aria-hidden="true" />
      </button>
    </div>
  );
};

export default ButtunKirim;
