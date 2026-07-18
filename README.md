<div align="center">

# 🌐 Mahreen Indonesia Website

<p align="center">
  <strong>Website resmi Mahreen Indonesia yang dikembangkan secara kolaboratif oleh Tim Frontend Internship Batch 1.</strong>
</p>

<p align="center">
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19">
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-6-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 6">
  </a>
  <a href="https://vite.dev/">
    <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 8">
  </a>
  <a href="https://lucide.dev/">
    <img src="https://img.shields.io/badge/Lucide-React-F56565?style=for-the-badge&logo=lucide&logoColor=white" alt="Lucide React">
  </a>
  <a href="https://www.npmjs.com/">
    <img src="https://img.shields.io/badge/npm-Package_Manager-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm">
  </a>
</p>

<p align="center">
  <a href="#-tentang-proyek">Tentang</a> •
  <a href="#-fitur-yang-tersedia">Fitur</a> •
  <a href="#-struktur-proyek">Struktur</a> •
  <a href="#-routing-aplikasi">Routing</a> •
  <a href="#-memulai-pengembangan">Instalasi</a> •
  <a href="#-alur-kerja-git">Git Workflow</a>
</p>

</div>

---

## 📌 Status Implementasi

Repositori yang diperiksa saat ini hanya berisi aplikasi `frontend`.

Folder berikut merupakan rancangan arsitektur lanjutan dan belum tersedia di source code:

```text
backend/
admin-dashboard/
client-dashboard/
```

Kondisi aplikasi saat ini:

| Area | Status |
|---|---|
| Website publik | Tersedia |
| Hash-based routing | Tersedia |
| Home, Tentang, Portofolio | Tersedia |
| Mahreen Studio | Tersedia |
| Tanya Mahreen | Tersedia |
| Peduli Mahreen | Tersedia |
| Internship | Tersedia |
| Newsroom | Tersedia |
| Registrasi dan pembayaran webinar | Simulasi di browser |
| Login | Antarmuka dan redirect saja |
| Pendaftaran akun | Antarmuka tahap awal |
| Backend API | Belum tersedia |
| Database | Belum tersedia |
| Autentikasi nyata | Belum tersedia |
| Dashboard admin | Belum tersedia |
| Dashboard klien | Belum tersedia |
| Integrasi pembayaran nyata | Belum tersedia |
| Mahreen CSR | Masih halaman Coming Soon |

> README ini menjelaskan perilaku kode yang tersedia saat ini. Bagian yang masih berupa rencana ditandai secara jelas agar dokumentasi tidak memberikan kesan bahwa backend atau dashboard sudah aktif.

---

## 📝 Tentang Proyek

Mahreen Indonesia Website merupakan aplikasi web berbasis React dan TypeScript yang menampilkan ekosistem layanan Mahreen Indonesia. Aplikasi mencakup profil perusahaan, portofolio, studio produk, konsultasi, program sosial, program internship, newsroom, berita, dan alur registrasi webinar.

Frontend menggunakan pola komponen berbasis fitur. Setiap halaman utama ditempatkan di dalam `src/pages`, sedangkan bagian halaman yang lebih kecil ditempatkan di folder `sections` atau `Sections`.

Aplikasi tidak menggunakan React Router. Sistem navigasi dibuat secara mandiri dengan membaca dan mengubah `window.location.hash`.

Contoh URL aplikasi:

```text
#/
#/tentang
#/mahreen-studio
#/tanya-mahreen
#/newsroom
```

---

## 📊 Ringkasan Kode

Berdasarkan source code yang tersedia:

| Jenis | Jumlah |
|---|---:|
| File `.tsx` | 116 |
| File `.ts` | 6 |
| File `.css` | 1 |
| File aset | 88 |
| Total baris TypeScript, TSX, dan CSS | 45.056 |
| Komponen dengan style tag internal | 99 file |
| Penggunaan `IntersectionObserver` | 61 lokasi |

Arsitektur rendering utama:

```text
index.html
    ↓
src/main.tsx
    ↓
src/App.tsx
    ↓
src/routes/AppRoutes.tsx
    ↓
Page Component
    ↓
Section Component
    ↓
Reusable Component
```

---

## 🧰 Teknologi yang Digunakan

| Teknologi | Fungsi |
|---|---|
| React 19 | Membangun antarmuka berbasis komponen |
| React DOM 19 | Rendering aplikasi ke DOM |
| TypeScript 6 | Pemeriksaan tipe dan keamanan kode |
| Vite 8 | Development server dan production bundler |
| Lucide React | Ikon pada beberapa halaman dan formulir |
| CSS | Styling global dan styling internal komponen |
| ESLint 10 | Pemeriksaan kualitas kode |
| Browser Storage | Menyimpan data simulasi konsultasi, keranjang, dan webinar |

Dependensi utama dari `package.json`:

```json
{
  "dependencies": {
    "lucide-react": "^1.22.0",
    "react": "^19.2.6",
    "react-dom": "^19.2.6"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/node": "^24.12.3",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "eslint": "^10.3.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.6.0",
    "typescript": "~6.0.2",
    "typescript-eslint": "^8.59.2",
    "vite": "^8.0.12"
  }
}
```

### Catatan styling

Proyek ini tidak menggunakan Tailwind CSS pada kode aktual. Styling dilakukan melalui:

1. `src/index.css` untuk style global.
2. Template string CSS di dalam file komponen.
3. Elemen `<style data-component="...">` pada halaman atau komponen.

Karena itu, dokumentasi tidak mencantumkan Tailwind sebagai teknologi aktif.

---

## ✨ Fitur yang Tersedia

### 1. Home

Halaman utama terdiri dari:

- Hero section
- Partnership
- Purpose
- Ekosistem Mahreen
- Layanan profesional
- Learning section
- Call to Action
- Closing section
- Footer

File utama:

```text
src/pages/Home/Home.tsx
```

Section terkait:

```text
src/pages/Home/sections/
├── Partnership.tsx
├── Purpose.tsx
├── Ekosistem.tsx
├── LayananProfesional.tsx
└── LearningSection.tsx
```

### 2. Tentang Mahreen

Halaman profil perusahaan mencakup:

- Profil Mahreen
- Visi dan misi
- Legal status
- Closing section
- Footer

File utama:

```text
src/pages/Tentang/Tentang.tsx
```

### 3. Portofolio

Halaman portofolio menampilkan kumpulan karya melalui komponen `Karya`.

Route detail portofolio sudah dikenali oleh router, tetapi halaman detail masih menggunakan komponen `ComingSoon`.

### 4. Mahreen Studio

Modul Mahreen Studio terdiri dari:

- Halaman utama studio
- Collection
- Produk
- Specialization
- Latest Collection
- Detail produk
- Pemilihan warna
- Pemilihan ukuran
- Galeri produk
- Keranjang berbasis `localStorage`
- Redirect ke halaman login ketika pengguna memilih Buy Now

Keranjang disimpan menggunakan key:

```text
mahreen-studio-cart
```

Data produk masih ditulis langsung di dalam:

```text
src/pages/Mahreen-Studio/ProdukDetail/Produk_Detail.tsx
```

Slug produk yang tersedia pada katalog detail:

```text
signature-noir-hoodie
signature-tee-new
refined-modisty-new
elevated-essentials-new
everyday-motion-new
```

### 5. Tanya Mahreen

Halaman Tanya Mahreen menyediakan:

- Daftar solusi
- Workflow layanan
- Keunggulan
- Proses kerja
- Portofolio pekerjaan
- FAQ
- Form konsultasi gratis
- Pemeriksaan ulang data
- Halaman permintaan selesai
- Konfigurasi paket

Alur konsultasi:

```text
Tanya Mahreen
    ↓
Form Konsultasi
    ↓
Simpan Draft ke sessionStorage
    ↓
Cek Data
    ↓
Tandai Data Sudah Ditinjau
    ↓
Permintaan Selesai
```

Data draft konsultasi mencakup:

- Nama
- Perusahaan
- Email
- Nomor WhatsApp
- Kota
- Pilihan layanan
- Deskripsi kebutuhan
- Budget
- Target penyelesaian
- Catatan tambahan
- Metadata file
- Waktu pembaruan

Key `sessionStorage`:

```text
mahreen-konsultasi-draft
mahreen-konsultasi-review-status
```

> File asli yang diunggah tidak disimpan ke `sessionStorage`. Kode hanya menyimpan nama, ukuran, dan tipe file. Objek `File` disimpan sementara di memori JavaScript dan akan hilang ketika halaman dimuat ulang.

### 6. Peduli Mahreen

Halaman Peduli Mahreen berisi:

- Target penerima manfaat
- Timeline pelaksanaan
- Jejak langkah
- Cerita dampak
- Kontribusi
- Closing section
- Footer

### 7. Internship

Portal internship mencakup:

- Statistik program
- Jalur program
- Spesialisasi
- Alasan bergabung
- Admission window
- Alumni
- Showcase
- Call to Action pendaftaran
- Form internship

Route form:

```text
#/internship/form
```

Form internship masih berupa antarmuka frontend dan belum mengirim data ke backend.

### 8. Newsroom

Newsroom menyediakan:

- Beranda Newsroom
- Sidebar kategori
- Featured news
- Webinar
- Event calendar
- Newsletter
- Daftar berita
- Filter dan sorting artikel
- Detail artikel
- Detail webinar
- Registrasi webinar
- Pembayaran simulasi
- Halaman registrasi berhasil

Data webinar berasal dari:

```text
src/data/webinars.ts
```

Saat ini data tersebut berisi satu webinar:

```text
digital-marketing-strategy
```

### 9. Login

Halaman login menerima parameter redirect aman:

```text
#/login?redirect=/tujuan
```

Setelah form dikirim, aplikasi mengarahkan pengguna ke route tujuan. Kode belum:

- Memeriksa email dan password ke server
- Membuat access token
- Membuat session pengguna
- Membatasi protected route
- Membedakan role pengguna

### 10. Pendaftaran Akun

Halaman daftar menampilkan formulir data diri dan bisnis. Form masih berupa tahap antarmuka dan belum terhubung dengan backend atau database.

### 11. Coming Soon dan 404

Komponen `ComingSoon` digunakan untuk:

- Modul yang belum selesai
- Legal document
- Pemulihan password
- Mahreen CSR
- Pembayaran Tanya Mahreen
- Detail portofolio
- Route Newsroom yang belum didukung
- Halaman tidak ditemukan

---

## 🧱 Struktur Proyek

Rencana arsitektur keseluruhan:

```text
mahreen-website/
├── backend/                 # Rencana API, database, auth, dan business logic
├── admin-dashboard/         # Rencana dashboard admin
├── client-dashboard/        # Rencana dashboard klien
└── frontend/                # Implementasi yang tersedia saat ini
```

Struktur lengkap aplikasi frontend berdasarkan file aktual:

```text
frontend/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── CTA/
│   │   │   └── Future-Build.png
│   │   ├── Daftar/
│   │   │   └── login-visual.png
│   │   ├── Ekosistem-Mahreen/
│   │   │   ├── mahreen-csr.png
│   │   │   ├── mahreen-internship.png
│   │   │   ├── mahreen-studio.png
│   │   │   ├── peduli-mahreen.png
│   │   │   └── tanya-mahreen.png
│   │   ├── Hero-section/
│   │   │   └── baground-home.png
│   │   ├── Internship/
│   │   │   ├── bground-intern.png
│   │   │   ├── creative-object.jpg
│   │   │   ├── dimas-andre.jpg
│   │   │   ├── graphic-design.jpg
│   │   │   ├── impact-team.jpg
│   │   │   ├── local-impact-mobile.jpg
│   │   │   ├── maya-kania.jpg
│   │   │   ├── raka-pratama.jpg
│   │   │   ├── siti-mahreen.jpg
│   │   │   ├── social-media.jpg
│   │   │   ├── video-editing.jpg
│   │   │   └── website-development.jpg
│   │   ├── LearningSection/
│   │   │   ├── Bootcamp.svg
│   │   │   ├── Certification.svg
│   │   │   ├── tick-icon.svg
│   │   │   └── Workshop.svg
│   │   ├── logo_layanan/
│   │   │   ├── Branding_logo.png
│   │   │   ├── Business_logo.png
│   │   │   ├── DigitalMartketing_logo.png
│   │   │   ├── GraphicDesain_logo.png
│   │   │   ├── Photograph_logo.png
│   │   │   ├── UIUX_logo.png
│   │   │   ├── VideoGraph_logo.png
│   │   │   └── Web_Dev_logo.png
│   │   ├── Mahreen-Studio/
│   │   │   ├── Collection/
│   │   │   │   ├── digital-showroom.png
│   │   │   │   ├── lifestyle-essentials.png
│   │   │   │   ├── merchandise.png
│   │   │   │   └── signature-noir-hoodie.png
│   │   │   ├── GambarProduk/
│   │   │   │   ├── hoodie_coklat.png
│   │   │   │   ├── hoodie_hitam.png
│   │   │   │   ├── hoodie_putih.png
│   │   │   │   ├── Premium_Packaging.png
│   │   │   │   └── tailoring_process.png
│   │   │   ├── Home/
│   │   │   │   └── bground-hero.png
│   │   │   └── LatestCollection/
│   │   │       ├── hero_bg.png
│   │   │       ├── lastest_produk_1.png
│   │   │       ├── lastest_produk_2.png
│   │   │       └── lastest_produk_3.png
│   │   ├── Navbar/
│   │   │   ├── icon-csr.png
│   │   │   ├── icon-internship.png
│   │   │   ├── icon-peduli.png
│   │   │   ├── icon-studio.png
│   │   │   ├── icon-tanyamahreen.png
│   │   │   ├── mahreen-logo.png
│   │   │   └── mahreen-mark.png
│   │   ├── Newsroom/
│   │   │   ├── berita-hero-background.png
│   │   │   ├── featured-building.png
│   │   │   ├── webinar-ai.png
│   │   │   ├── webinar-digital.png
│   │   │   └── webinar-uiux.png
│   │   ├── Partnership/
│   │   │   ├── Icon-berkarya.png
│   │   │   ├── ITB.png
│   │   │   ├── Ma Chung.png
│   │   │   ├── PNP.png
│   │   │   ├── PU.png
│   │   │   ├── UI.png
│   │   │   └── UTB.png
│   │   ├── PeduliMahreen/
│   │   │   ├── bground-hero.png
│   │   │   ├── ceritadampak.png
│   │   │   ├── jejaklangkah1.png
│   │   │   ├── jejaklangkah2.png
│   │   │   ├── jejaklangkah3.png
│   │   │   └── jejaklangkah4.png
│   │   ├── Purpose/
│   │   │   └── meeting.jpg
│   │   ├── social-logo/
│   │   │   ├── email-icon.svg
│   │   │   ├── favicon.svg
│   │   │   ├── icons.svg
│   │   │   ├── instagram-icon.svg
│   │   │   ├── mahreen-logo.png
│   │   │   ├── tiktok-icon.svg
│   │   │   ├── X-icon.svg
│   │   │   └── youtube-icon.svg
│   │   ├── TanyaMahreen/
│   │   │   ├── FreeKonsultasi/
│   │   │   │   └── bgound-meeting.png
│   │   │   └── Home/
│   │   │       ├── bground-tanyamahreen.png
│   │   │       ├── icon-consultation.png
│   │   │       ├── our-work-branding.png
│   │   │       ├── our-work-content.png
│   │   │       ├── our-work-website.png
│   │   │       └── process-meeting.png
│   │   └── icon.png
│   ├── components/
│   │   ├── Cloasing-section/
│   │   │   └── cloasing-section.tsx
│   │   ├── CTA/
│   │   │   └── CTA.tsx
│   │   ├── Footer/
│   │   │   └── Footer.tsx
│   │   └── Navbar/
│   │       ├── InternshipNavbar.tsx
│   │       ├── Navbar.tsx
│   │       ├── Peduli-MahreenNavbar.tsx
│   │       ├── StudioNavbar.tsx
│   │       └── Tanya-MahreenNavbar.tsx
│   ├── data/
│   │   └── webinars.ts
│   ├── pages/
│   │   ├── ComingSoon/
│   │   │   └── ComingSoon.tsx
│   │   ├── Daftar/
│   │   │   └── Daftar.tsx
│   │   ├── Home/
│   │   │   ├── sections/
│   │   │   │   ├── Ekosistem.tsx
│   │   │   │   ├── LayananProfesional.tsx
│   │   │   │   ├── LearningSection.tsx
│   │   │   │   ├── Partnership.tsx
│   │   │   │   └── Purpose.tsx
│   │   │   └── Home.tsx
│   │   ├── Internship/
│   │   │   ├── Sections/
│   │   │   │   ├── AdmissionWindow.tsx
│   │   │   │   ├── Alumni.tsx
│   │   │   │   ├── Daftar.tsx
│   │   │   │   ├── Jalur.tsx
│   │   │   │   ├── Number.tsx
│   │   │   │   ├── Showcase.tsx
│   │   │   │   ├── Spesialisasi.tsx
│   │   │   │   └── WhyMahreen.tsx
│   │   │   ├── FormInternship.tsx
│   │   │   └── Internship.tsx
│   │   ├── Login/
│   │   │   └── Login.tsx
│   │   ├── Mahreen-Studio/
│   │   │   ├── LatestCollection/
│   │   │   │   ├── sections/
│   │   │   │   │   ├── FeaturedPieces.tsx
│   │   │   │   │   └── InnerCircle.tsx
│   │   │   │   └── LatestCollection.tsx
│   │   │   ├── ProdukDetail/
│   │   │   │   ├── sections/
│   │   │   │   │   ├── Creative_process.tsx
│   │   │   │   │   └── Experience.tsx
│   │   │   │   └── Produk_Detail.tsx
│   │   │   ├── sections/
│   │   │   │   ├── Collection.tsx
│   │   │   │   ├── Produk.tsx
│   │   │   │   └── Specialization.tsx
│   │   │   └── Studio.tsx
│   │   ├── Newsroom/
│   │   │   ├── ArticleDetail/
│   │   │   │   ├── components/
│   │   │   │   │   ├── BeritaTerkait.tsx
│   │   │   │   │   ├── Informasi.tsx
│   │   │   │   │   └── IsiBerita.tsx
│   │   │   │   └── DetailBerita.tsx
│   │   │   ├── Berita/
│   │   │   │   ├── components/
│   │   │   │   │   └── ArticleCard.tsx
│   │   │   │   ├── sections/
│   │   │   │   │   ├── ArticleGridSection.tsx
│   │   │   │   │   ├── FilterSection.tsx
│   │   │   │   │   └── HeroSection.tsx
│   │   │   │   └── Berita.tsx
│   │   │   ├── components/
│   │   │   │   └── NewsroomContentNavbar.tsx
│   │   │   ├── Home/
│   │   │   │   ├── components/
│   │   │   │   │   ├── ClosingSection.tsx
│   │   │   │   │   ├── CTA.tsx
│   │   │   │   │   ├── EventCard.tsx
│   │   │   │   │   ├── Footer.tsx
│   │   │   │   │   ├── NewsCard.tsx
│   │   │   │   │   ├── NewsroomNavbar.tsx
│   │   │   │   │   ├── NewsroomSidebar.tsx
│   │   │   │   │   └── WebinarCard.tsx
│   │   │   │   ├── sections/
│   │   │   │   │   ├── EventCalendar.tsx
│   │   │   │   │   ├── FeaturedSection.tsx
│   │   │   │   │   ├── HeroSection.tsx
│   │   │   │   │   ├── NewsletterSection.tsx
│   │   │   │   │   └── WebinarSection.tsx
│   │   │   │   └── Home.tsx
│   │   │   ├── RegistrationSuccess/
│   │   │   │   ├── components/
│   │   │   │   │   └── SuccessContent.tsx
│   │   │   │   └── RegistrationSuccess.tsx
│   │   │   ├── WebinarDetail/
│   │   │   │   ├── components/
│   │   │   │   │   ├── MentorCard.tsx
│   │   │   │   │   └── PricingCard.tsx
│   │   │   │   ├── sections/
│   │   │   │   │   ├── HeroSection.tsx
│   │   │   │   │   ├── LearningSection.tsx
│   │   │   │   │   ├── SearchFilterSection.tsx
│   │   │   │   │   └── TimelineSection.tsx
│   │   │   │   └── WebinarDetail.tsx
│   │   │   ├── WebinarPayment/
│   │   │   │   ├── components/
│   │   │   │   │   └── PaymentForm.tsx
│   │   │   │   └── WebinarPayment.tsx
│   │   │   └── WebinarRegistration/
│   │   │       ├── components/
│   │   │       │   └── RegistrationForm.tsx
│   │   │       └── WebinarRegistration.tsx
│   │   ├── PeduliMahreen/
│   │   │   ├── sections/
│   │   │   │   ├── CeritaDampak.tsx
│   │   │   │   ├── JejakLangkah.tsx
│   │   │   │   ├── Kontribusi.tsx
│   │   │   │   ├── TargetPenerimaManfaat.tsx
│   │   │   │   └── TimelinePelaksanaan.tsx
│   │   │   └── PeduliMahreen.tsx
│   │   ├── Portofolio/
│   │   │   ├── sections/
│   │   │   │   └── Karya.tsx
│   │   │   └── Portofolio.tsx
│   │   ├── TanyaMahreen/
│   │   │   ├── CekData/
│   │   │   │   ├── Sections/
│   │   │   │   │   ├── Button.tsx
│   │   │   │   │   ├── InformasiAnda.tsx
│   │   │   │   │   ├── LampiranDokumen.tsx
│   │   │   │   │   └── RingkasanBrief.tsx
│   │   │   │   ├── CekData.tsx
│   │   │   │   └── SteepProgres.tsx
│   │   │   ├── FreeKonsultasi/
│   │   │   │   ├── Sections/
│   │   │   │   │   ├── Budget.tsx
│   │   │   │   │   ├── ButtunKirim.tsx
│   │   │   │   │   ├── CeritakanKebutuhan.tsx
│   │   │   │   │   ├── InformasiData.tsx
│   │   │   │   │   ├── KurikulumTambahan.tsx
│   │   │   │   │   ├── Layanan.tsx
│   │   │   │   │   ├── SteepProgres.tsx
│   │   │   │   │   ├── TargetPenyelesaian.tsx
│   │   │   │   │   └── UploadReferensi.tsx
│   │   │   │   └── Konsultasi.tsx
│   │   │   ├── KonfigurasiPaket/
│   │   │   │   ├── sections/
│   │   │   │   │   ├── FeatureComparison.tsx
│   │   │   │   │   └── LayananTambahan.tsx
│   │   │   │   └── Paket.tsx
│   │   │   ├── PermintaanSelesai/
│   │   │   │   └── KonsultasiSelesai.tsx
│   │   │   ├── sections/
│   │   │   │   ├── Excellence.tsx
│   │   │   │   ├── FAQ.tsx
│   │   │   │   ├── OurWork.tsx
│   │   │   │   ├── Solution.tsx
│   │   │   │   ├── TheProcess.tsx
│   │   │   │   └── Workflow.tsx
│   │   │   └── TanyaMahreen.tsx
│   │   └── Tentang/
│   │       ├── sections/
│   │       │   ├── Legal_status.tsx
│   │       │   ├── Profile.tsx
│   │       │   └── Visimisi.tsx
│   │       └── Tentang.tsx
│   ├── routes/
│   │   └── AppRoutes.tsx
│   ├── services/
│   │   ├── konsultasiDraft.ts
│   │   ├── webinarPaymentStorage.ts
│   │   ├── webinarRegistrationStorage.ts
│   │   └── webinarSuccessStorage.ts
│   ├── utils/
│   │   └── hashNavigation.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### Fungsi setiap folder utama

| Folder | Fungsi |
|---|---|
| `public` | File statis yang disajikan langsung oleh Vite |
| `src/assets` | Gambar, logo, ikon, dan ilustrasi |
| `src/components` | Komponen global lintas halaman |
| `src/data` | Data statis terstruktur |
| `src/pages` | Halaman berdasarkan domain fitur |
| `src/routes` | Router hash aplikasi |
| `src/services` | Penyimpanan dan pengelolaan data frontend |
| `src/utils` | Fungsi pembantu navigasi |
| `src/index.css` | Style global |
| `src/App.tsx` | Root component |
| `src/main.tsx` | Entry point React |

---

## 🧭 Routing Aplikasi

Routing dikelola oleh:

```text
src/routes/AppRoutes.tsx
```

Router bekerja dengan langkah berikut:

1. Membaca `window.location.hash`.
2. Memisahkan path dan query string.
3. Menormalkan slash.
4. Mencocokkan route statis atau dinamis.
5. Merender komponen halaman.
6. Menangani scroll ke section.
7. Merender halaman 404 jika route tidak dikenali.

### Route utama

| Hash URL | Komponen | Status |
|---|---|---|
| `#/` | `Home` | Aktif |
| `#/tentang` | `Tentang` | Aktif |
| `#/portofolio` | `Portofolio` | Aktif |
| `#/mahreen-studio` | `Studio` | Aktif |
| `#/mahreen-studio/latest-collection` | `LatestCollections` | Aktif |
| `#/tanya-mahreen` | `TanyaMahreen` | Aktif |
| `#/tanya-mahreen/konsultasi` | `Konsultasi` | Aktif |
| `#/tanya-mahreen/konsultasi/cek-data` | `CekData` | Aktif |
| `#/tanya-mahreen/konsultasi/selesai` | `KonsultasiSelesai` | Aktif |
| `#/tanya-mahreen/paket` | `Paket` | Aktif |
| `#/internship` | `Internship` | Aktif |
| `#/internship/form` | `FormInternship` | Aktif |
| `#/peduli-mahreen` | `PeduliMahreen` | Aktif |
| `#/daftar` | `Daftar` | Aktif |
| `#/login` | `Login` | Aktif |
| `#/newsroom` | `NewsroomHome` | Aktif |
| `#/newsroom/berita` | `NewsroomBerita` | Aktif |

### Route dinamis

| Pola | Fungsi |
|---|---|
| `#/mahreen-studio/product/:slug` | Membuka detail produk |
| `#/portofolio/:slug` | Detail portofolio, saat ini Coming Soon |
| `#/newsroom/berita/:slug` | Membuka detail artikel |
| `#/newsroom/webinar/:slug` | Membuka detail webinar |
| `#/newsroom/webinar/:slug/daftar` | Membuka form registrasi webinar |
| `#/newsroom/webinar/:slug/pembayaran` | Membuka pembayaran webinar |
| `#/newsroom/webinar/:slug/sukses` | Membuka halaman registrasi berhasil |

### Route Coming Soon

```text
#/mahreen-csr
#/tanya-mahreen/pembayaran
#/lupa-sandi
#/kebijakan-privasi
#/syarat-ketentuan
#/dokumen/haki
#/dokumen/keputusan-menteri
```

### Query parameter

Router mendukung query parameter berikut:

```text
?section=<id-section>
```

Contoh:

```text
#/?section=contact
#/mahreen-studio?section=specializations
#/newsroom?section=newsroom-events
```

Perilaku khusus:

```text
#/internship?program=<nilai>
```

Aplikasi akan mencoba menggulir ke:

```text
jalur-program
```

Perilaku khusus Tanya Mahreen:

```text
#/tanya-mahreen?service=<nilai>
```

Aplikasi akan mencoba menggulir ke:

```text
solutions
```

### Redirect login

Contoh:

```text
#/login?redirect=/mahreen-studio/product/signature-noir-hoodie
```

Router melakukan validasi sederhana untuk mencegah redirect ke nilai yang tidak aman, seperti:

- URL tanpa awalan `/`
- URL dengan `//`
- Backslash
- Hash tambahan
- Path yang mengandung `:`
- Redirect kembali ke `/login`

---

## 🔁 Alur Data Aplikasi

### Alur produk

```text
Pilih Produk
    ↓
Pilih Warna dan Ukuran
    ↓
Simpan ke localStorage
    ↓
Klik Buy Now
    ↓
Redirect ke Login
    ↓
Kembali ke Detail Produk
```

### Alur konsultasi

```text
Isi Form Konsultasi
    ↓
Simpan Draft
    ↓
Cek Data
    ↓
Tinjau Informasi dan Lampiran
    ↓
Tandai Reviewed
    ↓
Halaman Selesai
```

### Alur webinar

```text
Detail Webinar
    ↓
Form Registrasi
    ↓
Simpan Registrasi Pending Payment
    ↓
Pilih Metode Pembayaran
    ↓
Simpan Pembayaran Simulasi
    ↓
Buat Nomor Registrasi
    ↓
Halaman Sukses
```

---

## 💾 Browser Storage

Aplikasi menggunakan `sessionStorage` dan `localStorage`.

### Session Storage

| Key | Fungsi |
|---|---|
| `mahreen-konsultasi-draft` | Menyimpan draft konsultasi |
| `mahreen-konsultasi-review-status` | Menyimpan status pemeriksaan data |

### Local Storage

| Key | Fungsi |
|---|---|
| `mahreen-studio-cart` | Menyimpan isi keranjang Studio |
| `mahreen-webinar-registration-draft:<slug>` | Draft form webinar |
| `mahreen-webinar-registration:<slug>` | Registrasi webinar per slug |
| `mahreen-webinar-registration` | Registrasi webinar terakhir |
| `mahreen-webinar-payment-method:<slug>` | Metode pembayaran terpilih |
| `mahreen-webinar-payment:<slug>` | Data pembayaran per slug |
| `mahreen-webinar-payment` | Pembayaran webinar terakhir |
| `mahreen-webinar-success:<slug>` | Data keberhasilan per slug |
| `mahreen-webinar-success` | Data keberhasilan terakhir |
| `mahreen-webinar-access:<slug>` | Status akses webinar |

### Status pembayaran

Pembayaran webinar menggunakan status:

```text
simulated-paid
```

Status ini hanya simulasi frontend. Tidak ada payment gateway, verifikasi bank, webhook, invoice server, atau transaksi database.

### Catatan keamanan

Browser Storage tidak sesuai untuk menyimpan:

- Password
- Access token sensitif
- Dokumen rahasia
- Data kartu pembayaran
- Data pribadi yang memerlukan perlindungan tinggi

Data penting harus dipindahkan ke backend dengan autentikasi dan otorisasi yang benar.

---

## 🎨 Pola Styling

Sebagian besar komponen memiliki CSS internal:

```tsx
const componentStyles = `
  .component {
    display: block;
  }
`;

function Component() {
  return (
    <>
      <style data-component="component">{componentStyles}</style>
      <section className="component">...</section>
    </>
  );
}
```

Style global diimpor dari:

```text
src/index.css
```

Kelebihan pola saat ini:

- Style dekat dengan komponen
- Mudah memindahkan satu komponen
- Tidak membutuhkan library CSS tambahan

Hal yang perlu diperhatikan:

- Banyak file komponen menjadi sangat panjang
- Style tag dapat berulang
- Sulit menjaga design token secara global
- Potensi duplikasi antar-Navbar dan Footer
- Perubahan desain global memerlukan banyak edit

Rekomendasi pengembangan:

```text
src/styles/
├── tokens.css
├── reset.css
├── utilities.css
└── components/
```

atau gunakan CSS Modules secara bertahap.

---

## 🔍 SEO dan Metadata

Beberapa halaman menggunakan komponen SEO berbasis `useEffect` untuk mengubah:

- Document title
- Meta description
- Canonical URL
- Open Graph metadata
- Twitter metadata
- Structured data tertentu

Implementasi SEO tersedia pada beberapa halaman utama, antara lain:

- Home
- Tentang
- Portofolio
- Mahreen Studio
- Peduli Mahreen
- Internship

Karena aplikasi menggunakan hash routing, crawler tertentu dapat memperlakukan URL secara berbeda dibanding route berbasis History API. Evaluasi SSR, SSG, atau prerendering diperlukan jika SEO organik menjadi prioritas utama.

---

## ♿ Aksesibilitas dan Animasi

Kode sudah menggunakan beberapa praktik aksesibilitas:

- `aria-label`
- `aria-hidden`
- `aria-current`
- Elemen button untuk aksi
- Label pada form
- Dukungan `prefers-reduced-motion`

Animasi reveal banyak menggunakan:

```text
IntersectionObserver
```

Router juga memeriksa:

```text
prefers-reduced-motion: reduce
```

Ketika preferensi tersebut aktif, scroll dan sebagian animasi dijalankan secara instan atau dinonaktifkan.

---

## 🛠️ Memulai Pengembangan

### Prasyarat

Gunakan Node.js yang sesuai dengan Vite 8:

```text
Node.js ^20.19.0 atau >=22.12.0
npm
Git
```

Periksa versi:

```bash
node --version
npm --version
git --version
```

### 1. Clone repository

```bash
git clone <repository-url>
cd mahreen-website
```

### 2. Masuk ke folder frontend

Root repository belum memiliki `package.json`. Seluruh perintah npm harus dijalankan dari folder `frontend`.

```bash
cd frontend
```

### 3. Instal dependensi

Untuk instalasi berdasarkan lock file:

```bash
npm ci
```

Alternatif:

```bash
npm install
```

### 4. Jalankan development server

```bash
npm run dev
```

Buka alamat yang ditampilkan Vite, biasanya:

```text
http://localhost:5173
```

### 5. Jalankan lint

```bash
npm run lint
```

### 6. Build production

```bash
npm run build
```

### 7. Preview build

```bash
npm run preview
```

---

## 📜 Script npm

Script yang tersedia pada `frontend/package.json`:

| Script | Perintah | Fungsi |
|---|---|---|
| Development | `npm run dev` | Menjalankan Vite development server |
| Build | `npm run build` | Menjalankan TypeScript build lalu Vite build |
| Lint | `npm run lint` | Memeriksa seluruh kode dengan ESLint |
| Preview | `npm run preview` | Menjalankan preview hasil build |

Isi script:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

---

## ✅ Pemeriksaan Kualitas Kode

Hasil pemeriksaan pada source code yang tersedia:

```text
ESLint:
0 error
4 warning
```

Warning ditemukan pada:

```text
src/pages/Mahreen-Studio/LatestCollection/sections/FeaturedPieces.tsx
src/pages/Mahreen-Studio/LatestCollection/sections/InnerCircle.tsx
src/pages/TanyaMahreen/sections/Solution.tsx
src/pages/TanyaMahreen/sections/Workflow.tsx
```

Peringatan berkaitan dengan penggunaan `sectionRef.current` di cleanup effect.

Pola perbaikan yang disarankan:

```tsx
useEffect(() => {
  const element = sectionRef.current;

  if (!element) return;

  observer.observe(element);

  return () => {
    observer.unobserve(element);
  };
}, []);
```

---

## 🧯 Troubleshooting

### 1. Error native binding Rolldown

Pesan yang mungkin muncul:

```text
Cannot find native binding
Cannot find module '@rolldown/binding-linux-x64-gnu'
```

Masalah ini dapat terjadi ketika folder `node_modules` disalin dari sistem operasi lain atau optional dependency tidak terpasang dengan benar.

Jangan mengirim atau menyalin `node_modules` antarperangkat.

Linux atau macOS:

```bash
rm -rf node_modules
npm ci
```

Jika masih gagal:

```bash
rm -rf node_modules package-lock.json
npm install
```

Windows PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules
npm ci
```

Jika masih gagal:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
```

Setelah itu:

```bash
npm run build
```

### 2. Halaman tidak berubah

Pastikan URL menggunakan hash:

```text
Benar:
#/tentang

Tidak sesuai dengan router saat ini:
/tentang
```

### 3. Route kembali ke Coming Soon

Periksa:

- Ejaan path
- Slug artikel
- Slug webinar
- Slug produk
- Jumlah segment URL
- Konfigurasi di `AppRoutes.tsx`

### 4. Data konsultasi hilang setelah browser ditutup

Draft konsultasi menggunakan `sessionStorage`. Data dapat hilang setelah session browser berakhir.

### 5. File konsultasi hilang setelah refresh

File asli hanya disimpan dalam memori JavaScript. Setelah refresh, metadata masih dapat tersedia, tetapi objek file asli tidak lagi ada.

### 6. Data webinar tidak muncul

Pastikan slug terdaftar di:

```text
src/data/webinars.ts
```

---

## ➕ Menambahkan Halaman Baru

### 1. Buat halaman

Contoh:

```text
src/pages/Kontak/Kontak.tsx
```

```tsx
const Kontak = () => {
  return (
    <main>
      <h1>Kontak</h1>
    </main>
  );
};

export default Kontak;
```

### 2. Import ke router

Di `src/routes/AppRoutes.tsx`:

```tsx
import Kontak from "../pages/Kontak/Kontak";
```

### 3. Tambahkan route statis

```tsx
const staticRoutes: Readonly<Record<string, RouteRenderer>> = {
  "/": () => <Home />,
  "/kontak": () => <Kontak />,
};
```

### 4. Tambahkan tautan

```tsx
<a href="#/kontak">Kontak</a>
```

---

## ➕ Menambahkan Route Dinamis

Contoh route:

```text
#/layanan/:slug
```

Tambahkan pemeriksaan sebelum `staticRoutes`:

```tsx
if (path.startsWith("/layanan/")) {
  const slug = decodeURIComponent(path.slice("/layanan/".length));

  return <DetailLayanan slug={slug} />;
}
```

Urutan pemeriksaan route penting. Route yang lebih spesifik harus diperiksa sebelum fallback umum.

---

## ➕ Menambahkan Webinar

Edit:

```text
src/data/webinars.ts
```

Tambahkan objek baru:

```ts
{
  slug: "nama-webinar",
  title: "Judul Webinar",
  titleLead: "Judul",
  titleHighlight: "Webinar",
  category: "Premium Masterclass",
  durationMinutes: 120,
  description: "Deskripsi webinar.",
  price: 149000,
  originalPrice: 499000,
  scheduleDate: "Dec 15, 2026",
  scheduleTime: "19:00 WIB",
}
```

Route otomatis yang tersedia:

```text
#/newsroom/webinar/nama-webinar
#/newsroom/webinar/nama-webinar/daftar
#/newsroom/webinar/nama-webinar/pembayaran
#/newsroom/webinar/nama-webinar/sukses
```

Slug harus unik.

---

## ➕ Menambahkan Produk Studio

Data katalog detail saat ini berada di:

```text
src/pages/Mahreen-Studio/ProdukDetail/Produk_Detail.tsx
```

Tambahkan produk pada:

```ts
const studioProductCatalog = {
  "produk-baru": {
    slug: "produk-baru",
    title: "Nama Produk",
    price: "Rp 299.000",
    collection: "Nama Collection",
  },
};
```

Route produk:

```text
#/mahreen-studio/product/produk-baru
```

Pastikan kartu produk pada halaman collection menggunakan slug yang sama.

---

## 🌐 Environment Variable

Kode saat ini belum menggunakan file `.env` atau `import.meta.env`.

Ketika backend sudah tersedia, struktur yang disarankan:

```text
frontend/
├── .env
├── .env.example
└── src/
```

Contoh `.env.example`:

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_NAME=Mahreen Indonesia
```

Contoh penggunaan:

```ts
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
```

Jangan menyimpan secret backend pada variabel `VITE_*`, karena nilai tersebut akan masuk ke bundle frontend.

---

## 🔌 Rencana Integrasi Backend

Struktur layanan yang disarankan:

```text
src/services/
├── apiClient.ts
├── authService.ts
├── consultationService.ts
├── internshipService.ts
├── newsroomService.ts
├── productService.ts
└── webinarService.ts
```

Contoh API client:

```ts
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function apiRequest<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Request gagal: ${response.status}`);
  }

  return response.json() as Promise<T>;
}
```

Data yang perlu dipindahkan ke backend:

- Akun pengguna
- Password dan autentikasi
- Konsultasi
- File lampiran
- Produk
- Keranjang permanen
- Pesanan
- Pembayaran
- Berita
- Webinar
- Registrasi webinar
- Internship
- Newsletter
- Konten legal

---

## 🔐 Rencana Autentikasi

Autentikasi yang disarankan:

1. Login melalui backend.
2. Password di-hash pada server.
3. Gunakan HTTP-only secure cookie atau mekanisme token yang aman.
4. Sediakan refresh session.
5. Terapkan role-based access control.
6. Lindungi route dashboard.
7. Tambahkan logout.
8. Tambahkan pemulihan password.
9. Tambahkan verifikasi email.
10. Tambahkan rate limiting pada endpoint sensitif.

Contoh role:

```text
admin
staff
client
mentor
applicant
```

---

## 📦 Build dan Deployment

Build production:

```bash
cd frontend
npm ci
npm run build
```

Hasil build:

```text
frontend/dist/
```

Karena aplikasi menggunakan hash routing, navigasi halaman dilakukan setelah karakter `#`. Konfigurasi server rewrite khusus untuk setiap route umumnya tidak diperlukan seperti pada History API routing.

Checklist sebelum deployment:

- `npm run lint`
- `npm run build`
- Periksa seluruh hash route
- Periksa tampilan mobile
- Periksa form
- Periksa metadata SEO
- Optimalkan ukuran gambar
- Pastikan tidak ada data rahasia
- Periksa tautan legal
- Periksa fallback 404
- Periksa browser storage
- Periksa dukungan reduced motion

---

## 🧹 Standar Penamaan

Kode saat ini memiliki beberapa variasi penamaan:

```text
sections/
Sections/
Cloasing-section/
Tanya-MahreenNavbar.tsx
Peduli-MahreenNavbar.tsx
Produk_Detail.tsx
ButtunKirim.tsx
SteepProgres.tsx
```

Nama tersebut harus dipertahankan selama import masih menggunakannya, terutama pada sistem operasi yang case-sensitive.

Standar yang disarankan untuk pengembangan baru:

### Komponen dan halaman

```text
PascalCase.tsx
```

Contoh:

```text
HeroSection.tsx
ProductDetail.tsx
ConsultationForm.tsx
```

### Folder fitur

Pilih satu format dan gunakan konsisten:

```text
PascalCase/
```

atau:

```text
kebab-case/
```

### Variabel dan fungsi

```ts
const webinarData = [];
const handleSubmit = () => {};
```

### Type dan interface

```ts
interface UserProfile {}
type PaymentStatus = "pending" | "paid" | "failed";
```

### Refactor nama

Perubahan nama file sebaiknya dilakukan dalam commit terpisah agar mudah ditinjau dan tidak tercampur dengan perubahan fitur.

---

## 🧩 Prinsip Pengembangan Komponen

Gunakan pembagian tanggung jawab berikut:

- `pages`: menyusun halaman
- `sections`: bagian besar dalam satu halaman
- `components`: komponen yang dapat dipakai ulang
- `services`: komunikasi data dan penyimpanan
- `data`: data statis
- `utils`: helper murni
- `assets`: gambar dan ikon

Hindari:

- Menaruh seluruh halaman dalam satu file yang sangat panjang
- Menggandakan Navbar tanpa alasan
- Menulis data bisnis besar langsung di JSX
- Mengakses storage tanpa penanganan error
- Menaruh secret di frontend
- Menggunakan link route yang tidak terdaftar
- Mengubah kapitalisasi nama folder tanpa memperbarui import

---

## 🌿 Alur Kerja Git

### 1. Sinkronisasi branch utama

```bash
git checkout main
git pull origin main
```

### 2. Buat branch baru

Format:

```text
username/jenis-pekerjaan
```

Contoh:

```bash
git checkout -b andhika/hero-section
git checkout -b naufal/fix-newsroom-filter
git checkout -b kholid/refactor-navbar
```

### 3. Kerjakan perubahan

Pastikan hanya file yang berkaitan dengan tugas yang diubah.

### 4. Jalankan pemeriksaan

```bash
cd frontend
npm run lint
npm run build
```

### 5. Periksa status Git

```bash
git status
git diff
```

### 6. Tambahkan perubahan

```bash
git add .
```

### 7. Commit

```bash
git commit -m "feat: add webinar registration flow"
```

### 8. Push

```bash
git push origin username/jenis-pekerjaan
```

### 9. Buat Pull Request

Isi Pull Request minimal mencakup:

- Ringkasan perubahan
- Alasan perubahan
- File utama yang diubah
- Cara menguji
- Screenshot untuk perubahan UI
- Catatan keterbatasan
- Checklist lint dan build

---

## 🏷️ Conventional Commits

| Prefix | Penggunaan |
|---|---|
| `feat:` | Fitur baru |
| `fix:` | Perbaikan bug |
| `docs:` | Dokumentasi |
| `style:` | Perubahan visual atau format tanpa mengubah logic |
| `refactor:` | Perubahan struktur internal |
| `test:` | Penambahan atau perubahan test |
| `perf:` | Peningkatan performa |
| `build:` | Perubahan build system |
| `ci:` | Perubahan CI/CD |
| `chore:` | Pemeliharaan umum |
| `revert:` | Membatalkan commit |

Contoh:

```text
feat: add webinar payment simulation
fix: prevent unsafe login redirect
docs: update frontend folder structure
refactor: extract newsroom card component
style: improve mobile navbar spacing
```

---

## 📋 Checklist Pull Request

```text
[ ] Branch dibuat dari main terbaru
[ ] Perubahan sesuai ruang lingkup tugas
[ ] Tidak ada secret di source code
[ ] Tidak ada node_modules yang di-commit
[ ] Route baru sudah ditambahkan ke AppRoutes
[ ] Link menggunakan format hash yang benar
[ ] Tampilan desktop sudah diperiksa
[ ] Tampilan mobile sudah diperiksa
[ ] Form dapat digunakan dengan keyboard
[ ] npm run lint sudah dijalankan
[ ] npm run build sudah dijalankan
[ ] Screenshot dilampirkan untuk perubahan UI
[ ] README diperbarui jika struktur berubah
```

---

## 🚧 Keterbatasan Saat Ini

1. Belum ada backend.
2. Belum ada database.
3. Login belum melakukan autentikasi.
4. Pendaftaran akun belum menyimpan data.
5. Form internship belum dikirim ke server.
6. Pembayaran webinar hanya simulasi.
7. Keranjang produk hanya tersimpan di browser.
8. File konsultasi tidak bertahan setelah refresh.
9. Konten berita dan produk masih hardcoded.
10. Data webinar hanya memiliki satu entri.
11. Beberapa route masih Coming Soon.
12. Belum ada automated test.
13. Belum ada CI/CD.
14. Belum ada error boundary global.
15. Belum ada loading state API karena API belum tersedia.
16. Belum ada state management global.
17. Belum ada React Router.
18. Belum ada sistem analytics.
19. Belum ada sistem notifikasi.

---

## 🗺️ Roadmap Pengembangan

### Tahap 1: Stabilitas frontend

- Perbaiki warning ESLint
- Konsistenkan nama folder
- Pecah komponen besar
- Kurangi duplikasi Navbar dan Footer
- Tambahkan halaman 404 khusus
- Tambahkan form validation terpusat
- Tambahkan error boundary
- Tambahkan unit test

### Tahap 2: Dashboard

- Admin dashboard
- Client dashboard
- Role dan permission
- Status proyek
- Invoice
- Dokumen
- Notifikasi

---

## 👥 Tim Pengembang

<table align="center">
  <tr>
    <td align="center">
      <img src="https://github.com/identicons/andhika.png" width="100px;" alt="Frontend Team"/><br>
      <sub><b>Frontend Team</b></sub><br>
      <sub>Mahreen Indonesia Internship<br>Batch 1</sub>
    </td>
  </tr>
</table>

---

## 📄 Lisensi

Hak penggunaan, distribusi, dan pengembangan proyek mengikuti kebijakan internal Mahreen Indonesia.

```text
Copyright © 2026 Mahreen Indonesia.
All rights reserved.
```
