# Kebijakan Privasi Global BMDU Studio

*Terakhir Diperbarui: November 2026 • Versi: 2.0 • Kepatuhan Penuh UU No. 27 Tahun 2022 (UU PDP)*

Di **BMDU Studio** (menaungi *Uwebly, UMessage, Barticle, Velora, Posd, Scrolls*), kami memandang privasi dan kedaulatan data pribadi sebagai hak asasi mendasar di era digital. Kebijakan Privasi ini menguraikan secara transparan bagaimana kami mengumpulkan, memproses, menyimpan, dan melindungi data pribadi Anda.

---

## 0. Komitmen Kepatuhan UU PDP Indonesia

> [!IMPORTANT]
> Kebijakan Privasi ini dirancang dan diterapkan sepenuhnya berlandaskan asas-asas **Undang-Undang Republik Indonesia Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP)**.

---

## 1. Prinsip Utama: Tanpa Penjualan Data

**Kami tidak pernah, dan tidak akan pernah menjual, menyewakan, atau memperdagangkan data pribadi pengguna kepada pihak ketiga atau broker periklanan mana pun.** Data Anda dikelola semata-mata untuk mengoperasikan layanan yang Anda minta secara aman.

---

## 2. Kategori Data yang Kami Kelola

1. **Informasi Profil Ekosistem**:
   - Nama tampilan (*displayName*), nama pengguna (@username), alamat email terautentikasi (Google OAuth / Firebase Auth), dan foto profil avatar.
2. **Data Komunikasi Terenkripsi (UMessage)**:
   - Pesan 1-on-1 dilindungi enkripsi ujung-ke-ujung (*End-to-End Encryption*) menggunakan pasangan kunci kriptografi TweetNaCl. Peladen kami hanya bertindak sebagai perantara data terenkripsi (*ciphertext*) dan **tidak memiliki kunci untuk membaca isi percakapan Anda**.
   - Panggilan audio/video berjalan *peer-to-peer* (P2P WebRTC). Sinyal sementara langsung dibersihkan dan kami tidak pernah merekam panggilan.
3. **Data Publikasi Artikel & Media (Barticle & Posd)**:
   - Judul tulisan, isi artikel, visual karya, serta metrik apresiasi (upvote dan bookmark) yang Anda simpan.
4. **Data Interaksi AI (Velora)**:
   - Prompt percakapan yang diproses melalui API terisolasi dengan klausul bebas pelatihan model publik pihak ketiga.

---

## 3. Standar Keamanan & Enkripsi Data

- **Enkripsi dalam Transit**: Seluruh lalu lintas data antara peramban/aplikasi seluler Anda dan peladen BMDU Studio dilindungi enkripsi SSL/TLS 256-bit (HTTPS).
- **Penyimpanan Cloud Terenkripsi**: Database dioperasikan di atas Google Cloud Firebase dengan aturan keamanan (*Security Rules*) tingkat lanjut.
- **Isolasi Sesi Tamu (*Guest Mode*)**: Pengguna tanpa login pada layanan publik (seperti Velora atau pembaca Barticle) tidak dipungut data identitas pribadi dan sesi hanya tersimpan sementara di memori peramban.

---

## 4. Hak-Hak Anda sebagai Subjek Data

Sesuai dengan regulasi UU PDP, Anda memegang hak penuh atas data pribadi Anda:
1. **Hak Akses & Portabilitas**: Anda berhak melihat dan mengunduh salinan data akun Anda kapan saja.
2. **Hak Koreksi**: Anda dapat memperbarui data profil yang tidak akurat melalui menu Pengaturan.
3. **Hak Penghapusan (*Right to be Forgotten*)**: Anda berhak menghapus riwayat percakapan, tulisan artikel, atau mengajukan penutupan akun secara permanen.
4. **Hak Menarik Persetujuan**: Anda dapat mengubah preferensi keterlihatan profil publik (*searchable*) atau status privasi stories.

---

## 5. Kontak Petugas Perlindungan Data (DPO)

Jika Anda memiliki pertanyaan, saran, atau ingin mengajukan hak subjek data terkait pengelolaan informasi pribadi Anda, silakan hubungi saluran resmi kami:

- **Pejabat Pelindungan Data**: `dpo@uwebly.com` / `legal@uwebly.com`
- **Pusat Dukungan**: `support@uwebly.com`
- **Alamat Kantor Virtual**: BMDU Studio, Indonesia
