import bcaLogo from "../../../../assets/Newsroom/payment-banks/bca.svg";
import bniLogo from "../../../../assets/Newsroom/payment-banks/bni.svg";
import briLogo from "../../../../assets/Newsroom/payment-banks/bri.svg";
import mandiriLogo from "../../../../assets/Newsroom/payment-banks/mandiri.svg";
import type {
  BankId,
  PaymentDetailsValue,
  PaymentMethodId,
  WalletId,
} from "./paymentTypes";

export type BankOption = Readonly<{
  id: BankId;
  name: string;
  longName: string;
  logo: string;
  accountNumber: string;
  virtualAccountPrefix: string;
}>;

export type WalletOption = Readonly<{
  id: WalletId;
  name: string;
}>;

export const BANK_OPTIONS: readonly BankOption[] = [
  {
    id: "bca",
    name: "BCA",
    longName: "Bank Central Asia",
    logo: bcaLogo,
    accountNumber: "123 456 7890",
    virtualAccountPrefix: "8808",
  },
  {
    id: "bni",
    name: "BNI",
    longName: "Bank Negara Indonesia",
    logo: bniLogo,
    accountNumber: "123 456 7890",
    virtualAccountPrefix: "9888",
  },
  {
    id: "bri",
    name: "BRI",
    longName: "Bank Rakyat Indonesia",
    logo: briLogo,
    accountNumber: "5376 5950 1880 6500",
    virtualAccountPrefix: "26215",
  },
  {
    id: "mandiri",
    name: "Mandiri",
    longName: "Bank Mandiri",
    logo: mandiriLogo,
    accountNumber: "123 00 4567890 1",
    virtualAccountPrefix: "70012",
  },
];

export const WALLET_OPTIONS: readonly WalletOption[] = [
  { id: "qris", name: "QRIS" },
  { id: "gopay", name: "GoPay" },
  { id: "ovo", name: "OVO" },
];

export const DEFAULT_PAYMENT_DETAILS: PaymentDetailsValue = {
  bankTransferBank: "bni",
  virtualAccountBank: "bca",
  wallet: "qris",
  card: {
    cardNumber: "",
    expiry: "",
    cvc: "",
    cardholderName: "",
  },
};

export const getBankOption = (bankId: BankId) =>
  BANK_OPTIONS.find((bank) => bank.id === bankId) ?? BANK_OPTIONS[0];

export const getWalletOption = (walletId: WalletId) =>
  WALLET_OPTIONS.find((wallet) => wallet.id === walletId) ?? WALLET_OPTIONS[0];

export const getMethodLabel = (
  method: PaymentMethodId,
  details: PaymentDetailsValue,
) => {
  if (method === "bank-transfer") return "Transfer Bank (Manual)";

  if (method === "virtual-account") {
    return `Virtual Account (VA) ${getBankOption(details.virtualAccountBank).name}`;
  }

  if (method === "card") return "Kartu Kredit / Debit";

  return details.wallet === "qris"
    ? "QRIS / E-Wallet"
    : `${getWalletOption(details.wallet).name} / E-Wallet`;
};

export const getVirtualAccountNumber = (
  bankId: BankId,
  transactionId: string,
) => {
  const bank = getBankOption(bankId);
  const digits = transactionId.replace(/\D/g, "").slice(-10).padStart(10, "0");

  return `${bank.virtualAccountPrefix}${digits}`;
};
