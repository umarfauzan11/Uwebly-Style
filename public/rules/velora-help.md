# Pusat Bantuan & Panduan Fitur Velora

*Panduan resmi penggunaan, fitur unggulan, dan tanya jawab seputar Velora AI.*

Selamat datang di Pusat Bantuan Velora! Halaman ini merangkum panduan lengkap fitur utama Velora seperti Velora Talk, model AI, Workspace, sinkronisasi kalender, dan tata kelola akun.

---

## 1. Velora Talk (Multi-Karakter AI)

### Apa itu fitur Velora Talk dan bagaimana alur bicaranya?
**Velora Talk** adalah arena percakapan multi-karakter AI interaktif di mana 2 hingga 5 karakter AI dapat saling berdialog dan berdebat secara mandiri. Alur berbicara menggunakan sistem **Sirkular (Round-Robin)** berurutan (Karakter 1 ➔ Karakter 2 ➔ ... ➔ kembali ke Karakter 1) sehingga setiap karakter mendapatkan porsi berbicara yang seimbang tanpa ada yang mendominasi.

### Bagaimana cara menggunakan fitur Sutradara (Director Prompt)?
Di bagian bawah layar Velora Talk, terdapat kolom input bertanda 🎬 **Sutradara**. Kamu dapat menyuntikkan instruksi adegan nyata kapan saja (misal: *"Budi marah lalu membanting meja"*). Sistem akan otomatis mendeteksi karakter yang kamu tuju (atau kamu bisa mention seperti `@Budi`), dan karakter tersebut akan seketika mengeksekusi aksi fisik `*...*` dan dialog emosional sesuai arahanmu tanpa menunda.

### Berapa jumlah partisipan yang didukung dalam satu sesi Talk?
Secara default sesi dimulai dengan **2 orang**. Kamu bisa menambah hingga maksimal **5 orang** (menggunakan tombol `+ Tambah Orang`) atau menguranginya hingga minimal 2 orang langsung di panggung atas maupun melalui menu **Atur Talk**.

---

## 2. Model AI & Inferensi Cepat

### Teknologi AI yang Menggerakkan Velora
Velora menggabungkan mesin inferensi tercanggih untuk kecepatan dan kecerdasan optimal:
- **Groq LPU**: Menghasilkan respon teks super cepat (ratusan token per detik) dengan inferensi instan untuk chat harian dan mode Talk.
- **Microsoft Edge Neural Voice**: Sintesis audio berlatensi rendah dengan intonasi natural untuk fitur suara interaktif.

### Mengapa muncul error "429 Too Many Requests"?
Error 429 terjadi jika batas kecepatan pemanggilan API (*Requests Per Minute*) terlampaui dalam waktu singkat. Velora sudah dilengkapi sistem **Rotasi Multi-Key Pool** otomatis. Jika kendala masih muncul, tunggu sekitar 15–30 detik sebelum mengirim pesan berikutnya.

---

## 3. Workspace, Kalender & Pocket Keuangan

### Bagaimana cara menyambungkan Google Calendar ke Velora?
1. Buka menu **Pengaturan** (ikon gerigi di sidebar).
2. Pilih tab **Account**.
3. Pada bagian *Google Calendar Sync*, klik tombol **Hubungkan Akun Google** dan berikan izin kalender.
Setelah terhubung, setiap agenda yang dibuat lewat AI di Workspace akan otomatis tersinkronisasi ke Google Calendar di perangkat Anda.

### Bagaimana cara kerja Node Visual dan Pocket Keuangan di Workspace?
Fitur Keuangan di Workspace mengelompokkan saldo dan mutasi ke dalam "Pocket" (seperti Rekening Bank, E-Wallet, atau Tunai) yang terhubung dalam bentuk node visual. Kamu dapat menggeser posisi node di kanvas serta mengklik node untuk melihat rincian riwayat transaksi lengkap.

---

## 4. Akun, Keamanan & Privasi

### Apakah percakapan saya aman dan tidak dipakai melatih AI publik?
Ya, privasi pengguna adalah prioritas utama. Seluruh riwayat obrolan dan data workspace tersimpan secara privat di akun Firebase terenkripsi milikmu. Kami tidak menjual data pengguna ataupun menggunakannya untuk melatih model AI publik pihak ketiga.

### Bagaimana cara menghapus riwayat obrolan saya?
Buka **Pengaturan** (ikon gerigi) ➔ tab **General** ➔ scroll ke bagian bawah dan klik **Hapus Semua Percakapan**. Semua riwayat akan dihapus secara permanen dari penyimpanan lokal dan database.

---

## Kontak Dukungan & Pelaporan Masalah
Jika mengalami kendala teknis atau memiliki saran fitur baru, Anda dapat mengirimkan laporan melalui formulir pelaporan di aplikasi atau email ke `support@uwebly.com`.
