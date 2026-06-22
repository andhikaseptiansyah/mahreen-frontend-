# 🌐 Mahreen Website

Website resmi **Mahreen Indonesia** yang dikembangkan oleh tim **Frontend Internship Batch 1**. Proyek ini dibangun menggunakan **React TypeScript**, **Vite**, dan dikelola menggunakan **Bun** untuk performa pengembangan yang super cepat.

---

## 🚀 Tech Stack

Teknologi utama yang digunakan dalam pengembangan proyek ini:

* **Runtime & Package Manager:** [Bun](https://bun.sh/)
* **Framework & Bundler:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Version Control:** Git & GitHub

---

## 📂 Struktur Proyek

Berikut adalah arsitektur direktori terbaru di dalam folder `src/` untuk menjaga kode tetap modular, *type-safe*, dan mudah dikembangkan:

```text
src/
├── assets/         # File statis seperti gambar, logo, dan ikon
├── components/     # Komponen UI global yang reusable (e.g., Navbar, Footer)
│   ├── Navbar/
│   └── Footer/
├── pages/          # Komponen halaman utama berbasis fitur
│   └── Home/
│       ├── Home.tsx
│       └── sections/ # Sub-komponen khusus untuk halaman Home
│           ├── Hero.tsx
│           ├── About.tsx
│           ├── Services.tsx
│           └── Contact.tsx
├── layouts/        # Komponen tata letak halaman (Layout Wrapper)
├── routes/         # Konfigurasi routing aplikasi
├── types/          # Definisi interface dan tipe data TypeScript global
├── utils/          # Fungsi pembantu (helper functions) & konstanta global
├── App.tsx         # Komponen root aplikasi
└── main.tsx        # Entry point aplikasi untuk rendering ke DOM
```

---

## 🛠️ Memulai Pengembangan (Getting Started)

Pastikan Anda sudah menginstal **Bun** di komputer Anda. Jika belum, jalankan `curl -fsSL https://bun.sh/install | bash` (Mac/Linux) atau cek dokumentasi resmi Bun.

### 1. Klon Repositori
```bash
git clone <repository-url>
cd mahreen-website
```

### 2. Instal Dependensi
Gunakan Bun untuk proses instalasi yang lebih cepat:
```bash
bun install
```

### 3. Jalankan Server Pengembangan
```bash
bun dev
```
Setelah berhasil, buka tautan lokal (biasanya `http://localhost:5173`) di browser Anda.

### 4. Build untuk Produksi
```bash
bun build-project # Atau jalankan skrip build sesuai package.json Anda (e.g., bun run build)
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
