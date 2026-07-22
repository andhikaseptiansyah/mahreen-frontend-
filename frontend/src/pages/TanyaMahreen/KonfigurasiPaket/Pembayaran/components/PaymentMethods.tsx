import {
  CreditCard,
  Landmark,
  QrCode,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";
import PaymentMethodDetails from "./PaymentMethodDetails";
import { BANK_OPTIONS } from "../paymentData";
import type {
  PaymentDetailsValue,
  PaymentMethodId,
} from "../paymentTypes";

type PaymentMethod = {
  id: PaymentMethodId;
  title: string;
  options: string[];
  description: string;
  icon: LucideIcon;
  showBankLogos?: boolean;
};

type PaymentMethodsProps = {
  selectedMethod: PaymentMethodId;
  details: PaymentDetailsValue;
  onSelect: (method: PaymentMethodId) => void;
  onDetailsChange: (details: PaymentDetailsValue) => void;
};

const paymentMethods: PaymentMethod[] = [
  {
    id: "bank-transfer",
    title: "Transfer Bank (Manual)",
    options: ["BANK", "BANK"],
    description: "Konfirmasi manual melalui WhatsApp diperlukan.",
    icon: Landmark,
    showBankLogos: true,
  },
  {
    id: "virtual-account",
    title: "Virtual Account (Otomatis)",
    options: ["BCA", "BNI", "BRI"],
    description: "Konfirmasi instan dan akses langsung aktif.",
    icon: Zap,
    showBankLogos: true,
  },
  {
    id: "card",
    title: "Kartu Kredit / Debit",
    options: ["VISA", "MASTERCARD", "AMEX"],
    description: "Enkripsi SSL 256-bit dengan standar global.",
    icon: CreditCard,
  },
  {
    id: "e-wallet",
    title: "E-Wallet / QRIS",
    options: ["QRIS", "GOPAY", "OVO"],
    description: "Scan dan bayar instan melalui smartphone.",
    icon: QrCode,
  },
];

const PaymentMethods = ({
  selectedMethod,
  details,
  onSelect,
  onDetailsChange,
}: PaymentMethodsProps) => (
  <section className="tp-section tp-section--payment" aria-labelledby="payment-method-title">
    <div className="tp-section__heading">
      <span className="tp-section__number">02</span>
      <h2 id="payment-method-title">Metode Pembayaran</h2>
    </div>

    <div className="tp-method-grid">
      {paymentMethods.map((method) => {
        const Icon = method.icon;
        const selected = method.id === selectedMethod;

        return (
          <button
            key={method.id}
            type="button"
            className={`tp-method-card tp-glow-button ${selected ? "is-selected" : ""}`}
            aria-pressed={selected}
            onClick={() => onSelect(method.id)}
          >
            <span className="tp-method-card__topline">
              <span className="tp-method-card__title">{method.title}</span>
              {selected ? <ShieldCheck aria-hidden="true" /> : <Icon aria-hidden="true" />}
            </span>

            {method.showBankLogos ? (
              <span className="tp-method-card__bank-logos" aria-label="Bank tersedia">
                {BANK_OPTIONS.slice(0, 3).map((bank) => (
                  <img key={bank.id} src={bank.logo} alt={bank.name} />
                ))}
              </span>
            ) : (
              <span className="tp-method-card__options">
                {method.options.map((option, index) => (
                  <span key={`${option}-${index}`}>{option}</span>
                ))}
              </span>
            )}

            <span className="tp-method-card__description">{method.description}</span>
          </button>
        );
      })}
    </div>

    <PaymentMethodDetails
      selectedMethod={selectedMethod}
      value={details}
      onChange={onDetailsChange}
    />
  </section>
);

export default PaymentMethods;
