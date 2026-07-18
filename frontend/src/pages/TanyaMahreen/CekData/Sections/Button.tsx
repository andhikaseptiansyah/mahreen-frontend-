import { ArrowRight, LockKeyhole, Pencil } from "lucide-react";

interface ButtonProps {
  onEdit: () => void;
  onContinue: () => void;
}

const Button = ({ onEdit, onContinue }: ButtonProps) => {
  return (
    <section className="review-actions review-reveal" aria-label="Tindakan review data">
      <div className="review-action-buttons">
        <button className="review-button review-button--secondary" type="button" onClick={onEdit}>
          <Pencil aria-hidden="true" />
          <span>Edit Data</span>
        </button>

        <button className="review-button review-button--primary" type="button" onClick={onContinue}>
          <span>Konfirmasi & Selesai</span>
          <ArrowRight aria-hidden="true" />
        </button>
      </div>

      <p className="review-security-copy">
        <LockKeyhole aria-hidden="true" />
        Data Anda tersimpan sementara dengan aman di perangkat ini.
      </p>
    </section>
  );
};

export default Button;
