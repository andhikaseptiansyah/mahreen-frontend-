import {
  CircleDollarSign,
  Copy,
  CreditCard,
  Landmark,
  QrCode,
  ShieldCheck,
} from "lucide-react";
import {
  BANK_OPTIONS,
  WALLET_OPTIONS,
  getBankOption,
} from "../paymentData";
import type {
  BankId,
  CardInformationValue,
  PaymentDetailsValue,
  PaymentMethodId,
  WalletId,
} from "../paymentTypes";

const formatCardNumber = (value: string) =>
  value
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim();

const formatExpiry = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  return digits.length > 2 ? `${digits.slice(0, 2)} / ${digits.slice(2)}` : digits;
};

type Props = Readonly<{
  selectedMethod: PaymentMethodId;
  value: PaymentDetailsValue;
  onChange: (value: PaymentDetailsValue) => void;
}>;

const BankLogoPicker = ({
  selected,
  onSelect,
}: Readonly<{
  selected: BankId;
  onSelect: (bankId: BankId) => void;
}>) => (
  <div className="tp-bank-picker" role="radiogroup" aria-label="Pilih bank">
    {BANK_OPTIONS.map((bank) => (
      <button
        key={bank.id}
        type="button"
        className={`tp-bank-logo-button tp-glow-button${selected === bank.id ? " is-selected" : ""}`}
        aria-pressed={selected === bank.id}
        onClick={() => onSelect(bank.id)}
      >
        <img src={bank.logo} alt={bank.name} />
      </button>
    ))}
  </div>
);

const PaymentMethodDetails = ({ selectedMethod, value, onChange }: Props) => {
  const manualBank = getBankOption(value.bankTransferBank);

  if (selectedMethod === "bank-transfer") {
    return (
      <div className="tp-method-detail tp-method-detail--bank">
        <div className="tp-method-detail__heading">
          <span className="tp-method-detail__icon"><Landmark aria-hidden="true" /></span>
          <div>
            <strong>Transfer Bank (Manual)</strong>
            <p>Konfirmasi manual melalui WhatsApp setelah transfer.</p>
          </div>
        </div>

        <div className="tp-method-detail__divider" />
        <p className="tp-method-detail__label">Pilih rekening tujuan:</p>

        <BankLogoPicker
          selected={value.bankTransferBank}
          onSelect={(bankId) => onChange({ ...value, bankTransferBank: bankId })}
        />

        <div className="tp-bank-account-card">
          <div className="tp-bank-account-card__logo">
            <img src={manualBank.logo} alt={manualBank.name} />
          </div>
          <dl>
            <div><dt>Bank</dt><dd>{manualBank.longName} ({manualBank.name})</dd></div>
            <div><dt>No. Rekening</dt><dd className="is-gold">{manualBank.accountNumber}</dd></div>
            <div><dt>Atas Nama</dt><dd>PT Mahreen Indonesia Kreatif</dd></div>
          </dl>
          <button
            type="button"
            className="tp-copy-button tp-glow-button"
            onClick={() => void navigator.clipboard?.writeText(manualBank.accountNumber.replace(/\s/g, ""))}
          >
            <Copy aria-hidden="true" /> Salin
          </button>
        </div>

        <div className="tp-method-detail__note">
          <CircleDollarSign aria-hidden="true" />
          <span>
            Kirim bukti transfer melalui <strong>WhatsApp Mahreen Indonesia</strong> untuk verifikasi maksimal 1×24 jam.
          </span>
        </div>
      </div>
    );
  }

  if (selectedMethod === "virtual-account") {
    return (
      <div className="tp-method-detail">
        <div className="tp-method-detail__heading">
          <span className="tp-method-detail__icon"><ShieldCheck aria-hidden="true" /></span>
          <div>
            <strong>Virtual Account (Otomatis)</strong>
            <p>Nomor VA dibuat otomatis dan akses aktif setelah pembayaran terverifikasi.</p>
          </div>
        </div>

        <div className="tp-method-detail__divider" />
        <p className="tp-method-detail__label">Pilih bank Virtual Account:</p>

        <BankLogoPicker
          selected={value.virtualAccountBank}
          onSelect={(bankId) => onChange({ ...value, virtualAccountBank: bankId })}
        />

        <div className="tp-method-detail__note">
          <ShieldCheck aria-hidden="true" />
          <span>Nomor Virtual Account akan tampil pada halaman konfirmasi dan diverifikasi otomatis oleh sistem.</span>
        </div>
      </div>
    );
  }

  if (selectedMethod === "card") {
    const updateCard = (patch: Partial<CardInformationValue>) => {
      onChange({ ...value, card: { ...value.card, ...patch } });
    };

    return (
      <div className="tp-method-detail">
        <div className="tp-method-detail__heading">
          <span className="tp-method-detail__icon"><CreditCard aria-hidden="true" /></span>
          <div>
            <strong>Kartu Kredit / Debit</strong>
            <p>Informasi kartu dienkripsi menggunakan standar keamanan pembayaran.</p>
          </div>
        </div>

        <div className="tp-method-detail__divider" />
        <div className="tp-card-form">
          <label className="tp-card-field tp-card-field--full">
            <span>Nomor Kartu</span>
            <input
              inputMode="numeric"
              autoComplete="cc-number"
              value={value.card.cardNumber}
              placeholder="1234 5678 9012 3456"
              onChange={(event) => updateCard({ cardNumber: formatCardNumber(event.target.value) })}
            />
          </label>

          <label className="tp-card-field">
            <span>Masa Berlaku</span>
            <input
              inputMode="numeric"
              autoComplete="cc-exp"
              value={value.card.expiry}
              placeholder="MM / YY"
              onChange={(event) => updateCard({ expiry: formatExpiry(event.target.value) })}
            />
          </label>

          <label className="tp-card-field">
            <span>CVC / CVV</span>
            <input
              inputMode="numeric"
              autoComplete="cc-csc"
              value={value.card.cvc}
              placeholder="123"
              maxLength={4}
              onChange={(event) => updateCard({ cvc: event.target.value.replace(/\D/g, "").slice(0, 4) })}
            />
          </label>

          <label className="tp-card-field tp-card-field--full">
            <span>Nama di Kartu</span>
            <input
              autoComplete="cc-name"
              value={value.card.cardholderName}
              placeholder="Nama lengkap"
              onChange={(event) => updateCard({ cardholderName: event.target.value.toUpperCase() })}
            />
          </label>
        </div>

        <div className="tp-card-brands" aria-label="Kartu yang didukung">
          <span>VISA</span><span>MASTERCARD</span><span>AMEX</span>
        </div>
      </div>
    );
  }

  return (
    <div className="tp-method-detail">
      <div className="tp-method-detail__heading">
        <span className="tp-method-detail__icon"><QrCode aria-hidden="true" /></span>
        <div>
          <strong>E-Wallet / QRIS</strong>
          <p>Pindai QR atau lanjutkan pembayaran melalui aplikasi pilihan.</p>
        </div>
      </div>

      <div className="tp-method-detail__divider" />
      <p className="tp-method-detail__label">Pilih aplikasi e-wallet:</p>

      <div className="tp-wallet-picker" role="radiogroup" aria-label="Pilih e-wallet">
        {WALLET_OPTIONS.map((wallet) => (
          <button
            key={wallet.id}
            type="button"
            className={`tp-wallet-button tp-glow-button${value.wallet === wallet.id ? " is-selected" : ""}`}
            aria-pressed={value.wallet === wallet.id}
            onClick={() => onChange({ ...value, wallet: wallet.id as WalletId })}
          >
            {wallet.id === "qris" ? <QrCode aria-hidden="true" /> : <CircleDollarSign aria-hidden="true" />}
            <span>{wallet.name}</span>
          </button>
        ))}
      </div>

      <div className="tp-qr-preview" aria-hidden="true">
        <QrCode />
        <p>{value.wallet === "qris" ? "QRIS ditampilkan pada langkah berikutnya." : `Lanjutkan melalui aplikasi ${WALLET_OPTIONS.find((item) => item.id === value.wallet)?.name}.`}</p>
      </div>
    </div>
  );
};

export default PaymentMethodDetails;
