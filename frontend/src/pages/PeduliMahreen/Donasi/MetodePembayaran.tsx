import { useEffect, useState } from "react";
import {
  ArrowRight,
  Building2,
  LockKeyhole,
  QrCode,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react";
import DonationLayout from "./DonationLayout";
import DonationStepper from "./DonationStepper";
import type { DonationPaymentMethodId } from "./donationTypes";
import {
  getDonationDraft,
  saveDonationPaymentMethod,
} from "./donationStorage";
import { formatRupiah } from "./donationUtils";
import { navigateToHashRoute } from "../../../utils/hashNavigation";
import { donationService } from "../../../services/donation/donationService";

const walletMethods = [
  {
    id: "qris" as const,
    label: "QRIS",
    description: "GoPay, OVO, Dana, LinkAja",
    icon: QrCode,
  },
  {
    id: "shopeepay" as const,
    label: "ShopeePay",
    description: "Direct e-wallet payment",
    icon: ShoppingBag,
  },
];

const bankMethods = [
  {
    id: "bca-va" as const,
    label: "BCA Virtual Account",
    description: "Konfirmasi otomatis",
    icon: Building2,
  },
  {
    id: "mandiri-va" as const,
    label: "Mandiri Virtual Account",
    description: "Konfirmasi otomatis",
    icon: Building2,
  },
];

const MetodePembayaran = () => {
  const [draft, setDraft] = useState(() => getDonationDraft());
  const [selectedMethod, setSelectedMethod] = useState<DonationPaymentMethodId>(
    draft.paymentMethod ?? "qris",
  );
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState("");

  useEffect(() => {
    if (!draft.donor.email) {
      navigateToHashRoute("/peduli-mahreen/donasi/data-diri");
    }
  }, [draft.donor.email]);

  const handleSelect = (method: DonationPaymentMethodId) => {
    setSelectedMethod(method);
    setDraft(saveDonationPaymentMethod(method));
  };

  const handlePay = async () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setPaymentError("");
    const nextDraft = saveDonationPaymentMethod(selectedMethod);

    try {
      await donationService.processPayment(nextDraft);
      navigateToHashRoute("/peduli-mahreen/donasi/berhasil");
    } catch (caughtError) {
      setPaymentError(
        caughtError instanceof Error
          ? caughtError.message
          : "Pembayaran tidak dapat diproses. Silakan coba kembali.",
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const renderMethod = (
    method: (typeof walletMethods)[number] | (typeof bankMethods)[number],
  ) => {
    const Icon = method.icon;
    const active = selectedMethod === method.id;

    return (
      <button
        key={method.id}
        type="button"
        className={`donation-method${active ? " is-active" : ""}`}
        onClick={() => handleSelect(method.id)}
      >
        <span className="donation-method__icon">
          <Icon size={19} aria-hidden="true" />
        </span>
        <span>
          <strong>{method.label}</strong>
          <span>{method.description}</span>
        </span>
        <span className="donation-method__radio" aria-hidden="true" />
      </button>
    );
  };

  const donorLabel = draft.donor.anonymous ? "Donatur Anonim" : draft.donor.fullName || "Guest User";

  return (
    <DonationLayout>
      <section className="donation-shell" aria-labelledby="donation-payment-title">
        <DonationStepper activeStep={3} />

        <div className="donation-payment-layout">
          <div data-donation-reveal>
            <h1 className="donation-payment-title" id="donation-payment-title">
              Pilih Metode
              <br />
              Pembayaran
            </h1>
            <p className="donation-payment-copy">
              Silakan pilih metode pembayaran yang paling memudahkan Anda.
            </p>

            <section className="donation-payment-group" aria-labelledby="wallet-payment-title">
              <h2 className="donation-payment-group__title" id="wallet-payment-title">
                E-WALLET & QRIS
              </h2>
              <div className="donation-method-list">{walletMethods.map(renderMethod)}</div>
            </section>

            <section className="donation-payment-group" aria-labelledby="bank-payment-title">
              <h2 className="donation-payment-group__title" id="bank-payment-title">
                TRANSFER BANK (VIRTUAL ACCOUNT)
              </h2>
              <div className="donation-method-list">{bankMethods.map(renderMethod)}</div>
            </section>
          </div>

          <aside className="donation-summary-card" data-donation-reveal style={{ animationDelay: "110ms" }}>
            <h2>Ringkasan Kontribusi</h2>
            <div className="donation-summary-row">
              <span>Program</span>
              <strong>Kelas Inspirasi</strong>
            </div>
            <div className="donation-summary-row">
              <span>Donatur</span>
              <strong>{donorLabel}</strong>
            </div>

            <strong className="donation-summary-card__amount">{formatRupiah(draft.amount)}</strong>
            <p className="donation-summary-card__caption">Sudah termasuk biaya admin Rp0</p>

            {paymentError && <p className="donation-card__footnote" role="alert">{paymentError}</p>}
            <button type="button" className="donation-primary-button" onClick={handlePay} disabled={isProcessing}>
              {isProcessing ? "Memproses..." : "Bayar Sekarang"}
              {!isProcessing && <ArrowRight size={16} aria-hidden="true" />}
            </button>

            <div className="donation-trust-list">
              <span>
                <ShieldCheck size={14} aria-hidden="true" /> Secure Payment
              </span>
              <span>
                <LockKeyhole size={14} aria-hidden="true" /> Encrypted
              </span>
              <span>
                <ShieldCheck size={14} aria-hidden="true" /> Anti-Fraud
              </span>
            </div>
          </aside>
        </div>
      </section>
    </DonationLayout>
  );
};

export default MetodePembayaran;
