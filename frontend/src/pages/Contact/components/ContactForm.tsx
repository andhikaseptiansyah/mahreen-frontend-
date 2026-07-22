import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";

type ContactFormState = {
  name: string;
  email: string;
  company: string;
  partnership: string;
  details: string;
};

const partnershipOptions = [
  { value: "", label: "Pilih pilar atau kebutuhan kolaborasi" },
  { value: "business", label: "Tanya Mahreen - Business Solutions" },
  { value: "studio", label: "Mahreen Studio" },
  { value: "csr", label: "Mahreen CSR" },
  { value: "peduli", label: "Peduli Mahreen" },
  { value: "internship", label: "Mahreen Indonesia Internship" },
  { value: "media", label: "Newsroom & Media Partnership" },
  { value: "general", label: "Kolaborasi Umum" },
] as const;

const getInitialPartnership = () => {
  if (typeof window === "undefined") return "";

  const query = window.location.hash.split("?")[1] ?? "";
  const requestedPillar = new URLSearchParams(query).get("pillar") ?? "";
  return partnershipOptions.some((option) => option.value === requestedPillar)
    ? requestedPillar
    : "";
};

const contactFormStyles = `
  .contact-form-card {
    padding: clamp(30px, 3vw, 48px);
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 22px;
    background: #121212;
  }

  .contact-form-card,
  .contact-form-card * {
    box-sizing: border-box;
  }

  .contact-form-card__title {
    margin: 0;
    color: #f1ede7;
    font-family: "Cormorant Garamond", Georgia, serif;
    font-size: clamp(30px, 2.4vw, 40px);
    font-weight: 600;
    line-height: 1;
  }

  .contact-form-card__intro {
    max-width: 690px;
    margin: 13px 0 29px;
    color: #737379;
    font-family: Inter, Arial, sans-serif;
    font-size: 11px;
    line-height: 1.6;
  }

  .contact-form {
    display: grid;
    gap: 19px;
  }

  .contact-form__field {
    display: grid;
    gap: 9px;
  }

  .contact-form__label {
    color: #a98a5e;
    font-family: Inter, Arial, sans-serif;
    font-size: 9px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: 0.65px;
    text-transform: uppercase;
  }

  .contact-form__control {
    width: 100%;
    min-height: 51px;
    padding: 0 17px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 10px;
    outline: none;
    background: #070707;
    color: #f4f4f5;
    font-family: Inter, Arial, sans-serif;
    font-size: 12px;
    transition: border-color 160ms ease, box-shadow 160ms ease;
  }

  .contact-form__control::placeholder {
    color: #696970;
  }

  .contact-form__control:focus {
    border-color: rgba(203, 168, 112, 0.62);
    box-shadow: 0 0 0 3px rgba(203, 168, 112, 0.08);
  }

  .contact-form__control--select {
    appearance: none;
    background-image:
      linear-gradient(45deg, transparent 50%, #9c7d50 50%),
      linear-gradient(135deg, #9c7d50 50%, transparent 50%);
    background-position:
      calc(100% - 20px) 22px,
      calc(100% - 15px) 22px;
    background-size: 5px 5px, 5px 5px;
    background-repeat: no-repeat;
  }

  .contact-form__control--textarea {
    min-height: 133px;
    padding-top: 16px;
    resize: vertical;
    border-color: rgba(203, 168, 112, 0.34);
  }

  .contact-form__button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    width: 100%;
    min-height: 52px;
    margin-top: 7px;
    padding: 0 22px;
    border: 0;
    border-radius: 999px;
    background: #d0ad78;
    color: #17120c;
    font-family: Inter, Arial, sans-serif;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 0 11px 23px rgba(208, 173, 120, 0.22);
    transition: transform 160ms ease, filter 160ms ease;
  }

  .contact-form__button:hover,
  .contact-form__button:focus-visible {
    transform: translateY(-1px);
    filter: brightness(1.06);
  }

  .contact-form__button svg {
    width: 17px;
    height: 17px;
  }

  .contact-form__status {
    margin: -5px 0 0;
    color: #b99056;
    font-family: Inter, Arial, sans-serif;
    font-size: 11px;
    line-height: 1.5;
  }

  @media (max-width: 560px) {
    .contact-form-card {
      padding: 28px 20px;
      border-radius: 18px;
    }
  }
`;

const ContactForm = () => {
  const [form, setForm] = useState<ContactFormState>(() => ({
    name: "",
    email: "",
    company: "",
    partnership: getInitialPartnership(),
    details: "",
  }));
  const [status, setStatus] = useState("");

  const setField = (field: keyof ContactFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setStatus("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.partnership || !form.details.trim()) {
      setStatus("Lengkapi seluruh kolom wajib sebelum melanjutkan ke WhatsApp.");
      return;
    }

    const partnershipLabel =
      partnershipOptions.find((option) => option.value === form.partnership)?.label ?? form.partnership;
    const message = [
      "Halo Mahreen Indonesia, saya ingin membahas peluang kolaborasi.",
      "",
      `Nama: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Perusahaan/Institusi: ${form.company.trim() || "-"}`,
      `Pilar Kemitraan: ${partnershipLabel}`,
      "",
      "Detail rencana:",
      form.details.trim(),
    ].join("\n");

    const whatsappUrl = `https://wa.me/6289652647385?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setStatus("Pesan telah disiapkan. Lanjutkan pengiriman melalui tab WhatsApp yang terbuka.");
  };

  return (
    <>
      <style data-component="contact-form">{contactFormStyles}</style>
      <section className="contact-form-card" aria-labelledby="contact-form-title">
        <h2 className="contact-form-card__title" id="contact-form-title">Hubungi Kami</h2>
        <p className="contact-form-card__intro">
          Isi detail Anda di bawah ini dan kami akan mengarahkan Anda ke WhatsApp dengan pesan terformat rapi untuk segera ditindaklanjuti.
        </p>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label className="contact-form__field">
            <span className="contact-form__label">Nama Lengkap *</span>
            <input
              className="contact-form__control"
              type="text"
              autoComplete="name"
              placeholder="Masukkan nama lengkap Anda"
              value={form.name}
              onChange={(event) => setField("name", event.target.value)}
              required
            />
          </label>

          <label className="contact-form__field">
            <span className="contact-form__label">Alamat Email *</span>
            <input
              className="contact-form__control"
              type="email"
              autoComplete="email"
              placeholder="Masukkan email aktif Anda"
              value={form.email}
              onChange={(event) => setField("email", event.target.value)}
              required
            />
          </label>

          <label className="contact-form__field">
            <span className="contact-form__label">Perusahaan / Institusi (Opsional)</span>
            <input
              className="contact-form__control"
              type="text"
              autoComplete="organization"
              placeholder="Nama perusahaan atau universitas Anda"
              value={form.company}
              onChange={(event) => setField("company", event.target.value)}
            />
          </label>

          <label className="contact-form__field">
            <span className="contact-form__label">Pilar Kemitraan *</span>
            <select
              className="contact-form__control contact-form__control--select"
              value={form.partnership}
              onChange={(event) => setField("partnership", event.target.value)}
              required
            >
              {partnershipOptions.map((option) => (
                <option key={option.value || "placeholder"} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="contact-form__field">
            <span className="contact-form__label">Detail Kolaborasi / Rencana Proyek *</span>
            <textarea
              className="contact-form__control contact-form__control--textarea"
              placeholder="Tuliskan gagasan, ide proyek, atau pertanyaan kerja sama Anda di sini..."
              value={form.details}
              onChange={(event) => setField("details", event.target.value)}
              required
            />
          </label>

          {status && <p className="contact-form__status" role="status">{status}</p>}

          <button className="contact-form__button" type="submit">
            Hubungi Kami via WhatsApp
            <MessageCircle aria-hidden="true" />
          </button>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
