import React, { useState } from "react";

type FormErrors = Partial<Record<keyof typeof initialFormData, string>>;

const initialFormData = {
  nama: "",
  email: "",
  perusahaan: "",
  pilar: "",
  detail: ""
};

const FormHubungiKami: React.FC = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Hapus error saat pengguna mulai mengetik
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    if (!formData.nama) newErrors.nama = "Nama lengkap wajib diisi.";
    if (!formData.email) {
      newErrors.email = "Alamat email wajib diisi.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid.";
    }
    if (!formData.pilar) newErrors.pilar = "Pilar kemitraan wajib dipilih.";
    if (!formData.detail) newErrors.detail = "Detail kolaborasi wajib diisi.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const waNumber = "6289652647385";
    const message = `Halo Tim Mahreen, saya ingin berkolaborasi.%0A%0ANama: ${formData.nama}%0AEmail: ${formData.email}%0APerusahaan: ${formData.perusahaan || '-'}%0APilar Kemitraan: ${formData.pilar}%0ADetail Rencana: ${formData.detail}`;
    
    window.open(`https://wa.me/${waNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="hk-card">
      <h2 className="hk-section-title" style={{ fontSize: "28px", marginBottom: "8px" }}>
        Hubungi Kami
      </h2>
      <p className="hk-form-desc">
        Isi detail rencana kolaborasi Anda di bawah ini. Tim kami akan segera menindaklanjuti melalui email atau WhatsApp.
      </p>

      <form className="hk-form" onSubmit={handleSubmit} noValidate>
        <div className="hk-form-group">
          <label>Nama Lengkap *</label>
          <input 
            type="text" 
            name="nama"
            className={`hk-form-input ${errors.nama ? 'hk-form-input--error' : ''}`}
            placeholder="Masukkan nama lengkap Anda"
            value={formData.nama}
            onChange={handleChange}
            required 
          />
          {errors.nama && <p className="hk-form-error">{errors.nama}</p>}
        </div>

        <div className="hk-form-group">
          <label>Alamat Email *</label>
          <input 
            type="email" 
            name="email"
            className={`hk-form-input ${errors.email ? 'hk-form-input--error' : ''}`}
            placeholder="Masukkan email aktif Anda"
            value={formData.email}
            onChange={handleChange}
            required 
          />
          {errors.email && <p className="hk-form-error">{errors.email}</p>}
        </div>

        <div className="hk-form-group">
          <label>Perusahaan / Institusi (Opsional)</label>
          <input 
            type="text" 
            name="perusahaan"
            className="hk-form-input" 
            placeholder="Nama perusahaan atau universitas Anda"
            value={formData.perusahaan}
            onChange={handleChange}
          />
        </div>

        <div className="hk-form-group">
          <label>Pilar Kemitraan *</label>
          <select 
            name="pilar"
            className={`hk-form-input ${errors.pilar ? 'hk-form-input--error' : ''}`}
            value={formData.pilar}
            onChange={handleChange}
            required
            style={{ appearance: "none" }}
          >
            <option value="" disabled hidden>Pilih Pilar Kemitraan</option>
            <option value="Branding & Identity">Branding & Identity</option>
            <option value="Web & Apps Development">Web & Apps Development</option>
            <option value="CSR & Social Impact">CSR & Social Impact</option>
            <option value="Magang / Akademik">Magang / Akademik</option>
          </select>
          {errors.pilar && <p className="hk-form-error">{errors.pilar}</p>}
        </div>

        <div className="hk-form-group">
          <label>Detail Kolaborasi / Rencana Proyek *</label>
          <textarea 
            name="detail"
            className={`hk-form-input ${errors.detail ? 'hk-form-input--error' : ''}`}
            placeholder="Tuliskan gagasan, ide proyek, atau pertanyaan kerja sama Anda di sini..."
            value={formData.detail}
            onChange={handleChange}
            required 
          />
          {errors.detail && <p className="hk-form-error">{errors.detail}</p>}
        </div>

        <button type="submit" className="hk-submit-btn">
          Kirim Rencana Kolaborasi
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
             <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default FormHubungiKami;