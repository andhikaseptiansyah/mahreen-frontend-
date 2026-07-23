import React, { useState, type FormEvent } from "react";
import iconWhatsapp from "../../../assets/HelpCenter/HubungiLapor/Whatsapp.png"; 
import iconEmail from "../../../assets/HelpCenter/HubungiLapor/Email.png";
import iconTelegram from "../../../assets/HelpCenter/HubungiLapor/Telegram.png";
import iconDiscord from "../../../assets/HelpCenter/HubungiLapor/Discord.png";

const HubungiLapor: React.FC = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [tipe, setTipe] = useState("");
  const [pesan, setPesan] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!nama.trim()) newErrors.nama = "Nama lengkap wajib diisi.";
    if (!email.trim()) newErrors.email = "Email wajib diisi.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Format email tidak valid.";
    if (!tipe) newErrors.tipe = "Tipe masalah wajib dipilih.";
    if (!pesan.trim()) newErrors.pesan = "Pesan atau deskripsi wajib diisi.";
    return newErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus("success");
        setNama("");
        setEmail("");
        setTipe("");
        setPesan("");
      }, 1500);
    }
  };

  return (
    <section className="hc-contact-box">
      {/* Kiri: Hubungi Kami */}
      <div>
        <h2 className="hc-section-title">Hubungi Kami</h2>
        <p className="text-muted" style={{ fontSize: "14px", marginTop: "12px" }}>
          Tim kami siap membantu Anda kapan saja melalui berbagai saluran komunikasi resmi.
        </p>

        <div className="hc-contact-grid">
          {/* Item 1: WhatsApp */}
          <a href="https://wa.me/6289652647385" target="_blank" rel="noopener noreferrer" className="hc-c-item">
            {/* 2. Ubah <span> emoji menjadi <img> file PNG */}
            <img src={iconWhatsapp} alt="Icon WhatsApp" className="hc-c-icon" />
            <div className="hc-c-text">
              <h5>WhatsApp</h5>
              <p>Balasan Cepat</p>
            </div>
          </a>

          {/* Item 2: Email */}
          <a href="mailto:support@mahreen.id" className="hc-c-item">
            <img src={iconEmail} alt="Icon Email" className="hc-c-icon" />
            <div className="hc-c-text">
              <h5>Email Support</h5>
              <p>support@mahreen.id</p>
            </div>
          </a>

          {/* Item 3: Telegram */}
          <a href="https://t.me/MahreenSupport" target="_blank" rel="noopener noreferrer" className="hc-c-item">
            <img src={iconTelegram} alt="Icon Telegram" className="hc-c-icon" />
            <div className="hc-c-text">
              <h5>Telegram</h5>
              <p>@MahreenSupport</p>
            </div>
          </a>

          {/* Item 4: Discord */}
          <a
            href="https://discord.gg/mahreen-community" // TODO: Ganti dengan link Discord yang valid
            target="_blank"
            rel="noopener noreferrer"
            className="hc-c-item"
          >
            <img src={iconDiscord} alt="Icon Discord" className="hc-c-icon" />
            <div className="hc-c-text">
              <h5>Discord Community</h5>
              <p>Gabung Komunitas</p>
            </div>
          </a>
        </div>
      </div>

      {/* Kanan: Form Laporkan Masalah */}
      <div>
        <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "24px" }}>Laporkan Masalah</h3>
        <form onSubmit={handleSubmit} noValidate>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div className="hc-form-group">
              <label>Nama Lengkap</label>
              <input
                type="text"
                className={`hc-form-input ${errors.nama ? 'is-invalid' : ''}`}
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
              {errors.nama && <span className="hc-form-error">{errors.nama}</span>}
            </div>
            <div className="hc-form-group">
              <label>Email</label>
              <input
                type="email"
                className={`hc-form-input ${errors.email ? 'is-invalid' : ''}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <span className="hc-form-error">{errors.email}</span>}
            </div>
          </div>
          
          <div className="hc-form-group">
            <label>Tipe Masalah</label>
            <select
              className={`hc-form-input ${errors.tipe ? 'is-invalid' : ''}`}
              style={{ appearance: "none" }}
              value={tipe}
              onChange={(e) => setTipe(e.target.value)}
            >
              <option value="">Pilih tipe masalah...</option>
              <option value="akun">Akun & Login</option>
              <option value="transaksi">Transaksi</option>
              <option value="error">Error Teknis</option>
              <option value="lainnya">Lainnya</option>
            </select>
            {errors.tipe && <span className="hc-form-error">{errors.tipe}</span>}
          </div>

          <div className="hc-form-group">
            <label>Pesan / Deskripsi</label>
            <textarea
              className={`hc-form-input ${errors.pesan ? 'is-invalid' : ''}`}
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
            ></textarea>
            {errors.pesan && <span className="hc-form-error">{errors.pesan}</span>}
          </div>

          {submitStatus === 'success' && <div className="hc-form-success">Laporan Anda telah berhasil dikirim.</div>}
          <button type="submit" className="hc-btn-submit" disabled={isSubmitting}>{isSubmitting ? 'Mengirim...' : 'Kirim Laporan'}</button>
        </form>
      </div>
    </section>
  );
};

export default HubungiLapor;