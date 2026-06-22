# 🌐 Mahreen Website

Website resmi **Mahreen Indonesia** yang dikembangkan oleh tim **Frontend Internship Batch 1**. Proyek ini dirancang dengan performa optimal, antarmuka yang responsif, dan struktur kode yang bersih.

---

## 🚀 Tech Stack

Teknologi utama yang digunakan dalam pengembangan proyek ini:

* **Framework/Bundler:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Version Control:** Git & GitHub

---

## 📂 Struktur Proyek

Berikut adalah arsitektur direktori di dalam folder `src/` untuk menjaga kode tetap modular dan *scalable*:

```text
src/
├── assets/        # File statis seperti gambar, logo, dan ikon
├── components/    # Komponen UI global yang dapat digunakan kembali (reusable)
├── layouts/       # Komponen tata letak halaman (e.g., Navbar, Footer wrapper)
├── pages/         # Komponen halaman utama (e.g., Home, About, Contact)
├── services/      # Konfigurasi API fetching dan integrasi layanan eksternal
├── hooks/         # Custom React Hooks
└── utils/         # Fungsi pembantu (helper functions) dan konstanta global
```

---

## 🛠️ Memulai Pengembangan (Getting Started)

Ikuti langkah-langkah berikut untuk menjalankan proyek di lingkungan lokal Anda:

### 1. Klon Repositori
```bash
git clone <repository-url>
cd mahreen-website
```

### 2. Instal Dependensi
```bash
npm install
```

### 3. Jalankan Server Pengembangan
```bash
npm run dev
```
Setelah berhasil, buka `http://localhost:5173` di browser Anda.

### 4. Build untuk Produksi
```bash
npm run build
```

---

## 🌿 Alur Kerja Git (Git Workflow)

Untuk menjaga konsistensi dan kerapian histori repositori, seluruh anggota tim wajib mengikuti alur kerja berikut:

### 1. Ambil Perubahan Terbaru dari `main`
Sebelum membuat fitur baru, pastikan branch lokal Anda sudah yang paling mutakhir.
```bash
git checkout main
git pull origin main
```

### 2. Buat Branch Baru
Gunakan format penamaan branch: `username/nama-fitur`.
```bash
git checkout -b username/feature-name
```
*Contoh:*
```bash
git checkout -b andhika/hero-section
```

### 3. Commit Perubahan
Gunakan pesan commit yang deskriptif (disarankan mengikuti standar *Conventional Commits*).
```bash
git add .
git commit -m "feat: add hero section"
```

### 4. Push Branch ke Remote
```bash
git push origin username/feature-name
```

### 5. Buat Pull Request (PR)
* Buka repositori proyek di GitHub.
* Ajukan **Pull Request** dari branch Anda ke branch `main`.
* Tulis deskripsi singkat mengenai perubahan atau fitur yang Anda tambahkan.

### 6. Proses Review
* Tunggu proses *review* dan persetujuan (*approval*) dari Team Lead atau rekan tim sebelum branch Anda di-*merge* ke `main`.

---

## 👥 Tim Pengembang

Proyek ini dikembangkan dan dikelola dengan bangga oleh:
* **Frontend Team - Mahreen Indonesia Internship Batch 1**
