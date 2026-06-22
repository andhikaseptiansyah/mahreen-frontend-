<div align="center">

  # 🌐 Mahreen Indonesia Website
  
  <p align="center">
    <strong>Website resmi Mahreen Indonesia yang dikembangkan secara kolaboratif oleh tim Frontend Internship Batch 1.</strong>
  </p>

  <p align="center">
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"></a>
    <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"></a>
    <a href="https://www.npmjs.com/"><img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="NPM"></a>
  </p>

  <h4>
    <a href="#-fitur-utama">Fitur Utama</a> • 
    <a href="#-struktur-proyek">Struktur Proyek</a> • 
    <a href="#%EF%B8%8F-memulai-pengembangan">Cara Instalasi</a> • 
    <a href="#-alur-kerja-git">Git Workflow</a>
  </h4>

</div>

---

## ✨ Fitur Utama

* ⚡ **Ultra Fast Build:** Menggunakan Vite untuk pengalaman *development* yang instan.
* 🛡️ **Type Safety:** Memanfaatkan TypeScript penuh untuk meminimalisir *runtime error*.
* 🎨 **Modern & Responsive UI:** Menggunakan Tailwind CSS untuk desain yang adaptif di semua ukuran layar.
* 🧩 **Modular Component Architecture:** Struktur folder rapi berbasis fitur untuk kemudahan skalabilitas.

---

## 📂 Struktur Proyek

Arsitektur direktori di bawah folder `src/` dirancang agar kode tetap bersih dan mudah dikelola antar anggota tim:

```text
src/
├── assets/         # File statis (Gambar, Logo, Ikon)
├── components/     # Komponen global yang dapat digunakan kembali
│   ├── Navbar/     # Komponen navigasi utama
│   └── Footer/     # Komponen kaki halaman
├── pages/          # Komponen halaman utama berbasis fitur
│   └── Home/       # Halaman beranda
│       ├── Home.tsx
│       └── sections/ # Sub-section khusus halaman Home
│           ├── Hero.tsx
│           ├── About.tsx
│           ├── Services.tsx
│           └── Contact.tsx
├── layouts/        # Pembungkus tata letak halaman (Layout Wrapper)
├── routes/         # Konfigurasi dan manajemen routing aplikasi
├── types/          # Definisi interface dan tipe data TypeScript global
├── hooks/
├── services/ 
├── utils/          # Fungsi pembantu (helper) & konstanta global
├── App.tsx         # Root component aplikasi
└── main.tsx        # Entry point aplikasi untuk rendering DOM
```

---

## 🛠️ Memulai Pengembangan

Ikuti instruksi di bawah ini untuk memasang dan menjalankan proyek di komputer lokal Anda.

### Prasyarat
Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) (versi LTS yang disarankan) dan **npm** di sistem Anda.

### Langkah-Langkah

1. **Klon Repositori**
   ```bash
   git clone <repository-url>
   cd mahreen-website
   ```

2. **Instal Dependensi**
   ```bash
   npm install
   ```

3. **Jalankan Server Lokal**
   ```bash
   npm run dev
   ```
   Buka tautan lokal `http://localhost:5173` pada browser Anda.

4. **Build untuk Produksi**
   ```bash
   npm run build
   ```

---

## 🌿 Alur Kerja Git (Git Workflow)

Untuk menjaga histori repositori tetap rapi dan menghindari *conflict*, semua kontributor wajib mengikuti alur kerja berikut:

### 1. Sinkronisasi Branch Utama
Sebelum memulai pekerjaan baru, pastikan branch lokal Anda sinkron dengan perubahan terbaru dari repositori utama.
```bash
git checkout main
git pull origin main
```

### 2. Buat Branch Baru
Gunakan format penamaan branch: `username/nama-fitur`.
```bash
git checkout -b username/feature-name
```
> **Contoh:** `git checkout -b andhika/hero-section`

### 3. Commit Kode Anda
Gunakan aturan *Conventional Commits* agar pesan perubahan lebih mudah dipahami oleh tim.
```bash
git add .
git commit -m "feat: add hero section"
```
*Contoh prefiks:* `feat:` (fitur baru), `fix:` (perbaikan bug), `style:` (perapian kode/UI tanpa merubah logika).

### 4. Dorong Branch ke GitHub
```bash
git push origin username/feature-name
```

### 5. Ajukan Pull Request (PR)
* Masuk ke halaman repositori di GitHub.
* Klik **Compare & pull request**.
* Tulis deskripsi singkat mengenai fitur yang ditambahkan atau masalah yang diselesaikan.
* Tugaskan (*assign*) Team Lead atau rekan tim untuk meninjau pekerjaan Anda.

### 6. Review & Merge
Tunggu proses *code review* selesai dan dapatkan persetujuan (*approval*) sebelum branch Anda digabungkan ke `main`.

---

## 👥 Tim Pengembang

<table align="center">
  <tr>
    <td align="center">
      <img src="https://github.com/identicons/andhika.png" width="100px;" alt="Contributor"/><br />
      <sub><b>Frontend Team</b></sub><br />
      <sub>Mahreen Indonesia Internship<br />Batch 1</sub>
    </td>
  </tr>
</table>
