# Ketentuan Layanan & Kebijakan Privasi UMessage

*Terakhir Diperbarui: 14 November 2026 • Versi: 1.2.2*

Selamat datang di **UMessage** (Layanan). UMessage adalah platform komunikasi instan real-time, perpesanan terenkripsi ujung-ke-ujung (*End-to-End Encrypted*), panggilan suara & video langsung berlatensi rendah, serta cerita 24 jam yang dikembangkan sebagai bagian dari **Ekosistem Uwebly & Bmdu Studio**.

Dokumen ini memuat **Ketentuan Layanan (Terms of Service)** dan **Kebijakan Privasi & Keamanan Data (Privacy & Data Security Policy)** yang mengatur hak, kewajiban, serta tata kelola data pribadi Anda ketika mengakses atau menggunakan UMessage melalui peramban web (`umessage.uwebly.com`, `uwebly.com/message`) maupun aplikasi seluler UMessage.

> [!IMPORTANT]
> Dengan membuat akun, masuk, atau menggunakan Layanan UMessage, Anda menyatakan telah membaca, memahami, dan menyetujui seluruh ketentuan dan kebijakan privasi ini. Jika Anda tidak menyetujui salah satu poin di dalamnya, mohon untuk tidak melanjutkan penggunaan Layanan UMessage.

---

## 0. Pengenalan & Definisi Layanan

1. **UMessage** adalah platform komunikasi terdesentralisasi sebagian (*hybrid client-server*) yang menyediakan fitur perpesanan teks instan, pesan suara (*voice note*), panggilan suara WebRTC peer-to-peer, pertukaran media/berkas, obrolan grup, serta interaksi asisten kecerdasan buatan (*Velora*).
2. **Akun Uwebly / UMessage** adalah identitas digital unik milik Pengguna yang diautentikasi secara aman melalui Firebase Authentication, Google OAuth, atau kredensial akun Uwebly yang terdaftar secara sah.
3. **Pesan Terenkripsi** mengacu pada paket data komunikasi (teks, reaksi, kutipan balasan) yang dilindungi secara kriptografis menggunakan pasangan kunci dan algoritma enkripsi simetris (*TweetNaCl Box*) di mana hanya pengirim dan penerima yang sah yang memegang kunci untuk membaca isi pesan.
4. **Brankas Kunci Terenkripsi (*Encrypted Key Vault*)** adalah mekanisme penyimpanan cadangan kunci privat pengguna di cloud Firebase yang dilindungi oleh enkripsi simetris berbasis kunci turunan dan *application pepper* khusus, memungkinkan pengguna membuka sesi baru di berbagai perangkat tanpa mengorbankan privasi.
5. **Mode Just UMessage** adalah mode privasi eksklusif yang membatasi keterpaparan akun dari aktivitas sosial publik Uwebly, menyamarkan avatar publik, dan memusatkan fungsi akun murni untuk perpesanan personal.
6. **Subjek Data / Pengguna** merujuk pada individu pemilik akun yang menggunakan Layanan.

---

## 1. Akun Pengguna, Kelayakan & Keamanan Kredensial

1. **Batasan Usia Pengguna**: Layanan ini diperuntukkan bagi individu yang telah berusia sekurang-kurangnya **13 (tiga belas) tahun** atau batas usia kedewasaan digital minimum yang ditetapkan oleh undang-undang di yurisdiksi tempat tinggal Anda. Pengguna di bawah umur wajib memperoleh izin dan pengawasan penuh dari orang tua atau wali yang sah.
2. **Kebenaran Data Pendaftaran**: Anda setuju untuk memberikan informasi dasar akun yang akurat saat proses orientasi (*onboarding*). Dilarang menyamar (*impersonation*) sebagai individu, organisasi, atau entitas lain tanpa izin yang sah.
3. **Tanggung Jawab Sesi & Kredensial**:
   - Pengguna bertanggung jawab penuh atas perlindungan kata sandi akun, token autentikasi sesi, serta perangkat keras yang digunakan untuk mengakses UMessage.
   - Segala tindakan atau transmisi data yang berlangsung di bawah sesi akun Anda yang sah dianggap secara hukum dilakukan oleh Anda.
4. **Sinkronisasi Multi-Perangkat**: Satu akun UMessage dapat dioperasikan secara bersamaan di peramban web desktop, tablet, serta perangkat seluler (Android & iOS). Setiap perangkat baru akan memverifikasi pasangan kunci kriptografi secara otomatis melalui Brankas Kunci Terenkripsi.

---

## 2. Kebijakan Keamanan & Enkripsi Ujung-ke-Ujung (Policy)

UMessage menempatkan kedaulatan data dan privasi pengguna sebagai fondasi utama arsitektur sistem. Kami menerapkan prinsip **Zero-Knowledge Architecture** terhadap seluruh isi komunikasi pribadi.

1. **Prinsip Enkripsi Sisi Klien (*Client-Side Encryption*)**:
   - Pasangan kunci publik dan privat (*KeyPair*) dihasilkan secara lokal di dalam memori perangkat pengguna saat pertama kali membuat akun atau menginisialisasi UMessage.
   - Pesan teks, reaksi, dan metadata sensitif dienkripsi secara langsung di perangkat pengirim menggunakan kunci publik penerima sebelum ditransmisikan melalui jaringan internet.
   - Server Firebase Realtime Database kami hanya berfungsi sebagai perantara lalu lintas paket (*relay server*) yang menerima dan meneruskan *ciphertext* acak beserta *nonce*.
2. **Ketiadaan Akses Plaintext (*Zero Plaintext Access*)**:
   - Pengelola Uwebly, administrator sistem, teknisi basis data, maupun pihak ketiga lainnya **TIDAK MEMILIKI KEMAMPUAN TEKNIS** untuk membaca, mendekripsi, atau menyadap pesan terenkripsi Anda.
   - UMessage tidak menyimpan salinan kunci privat pengguna dalam bentuk teks terbuka (*plaintext*) di server mana pun.
3. **Mekanisme Brankas Kunci Cloud Terenkripsi (*Encrypted Key Vault*)**:
   - Untuk mencegah hilangnya riwayat pesan ketika pengguna berganti perangkat atau berpindah dari web ke aplikasi mobile, kunci privat dienkripsi dengan algoritma simetris berkekuatan tinggi menggunakan kunci turunan SHA-512 khusus sebelum dicadangkan ke brankas cloud pribadi pengguna.
   - Brankas ini hanya dapat didekripsi kembali oleh perangkat yang berhasil melewati autentikasi kredensial pengguna yang sah.
4. **Tanggung Jawab Keamanan Perangkat Pengguna**:
   - Keamanan enkripsi bergantung pada integritas perangkat fisik Anda. Pengguna wajib memastikan perangkat bebas dari *malware*, *trojan*, *keylogger*, maupun modifikasi sistem (*root/jailbreak*) yang rentan disusupi pihak luar.

---

## 3. Kebijakan Privasi & Pemrosesan Data Pribadi (Privacy Policy)

Kebijakan ini menjabarkan bagaimana UMessage mengumpulkan, memproses, dan melindungi data pribadi Anda sesuai dengan ketentuan **Undang-Undang Nomor 27 Tahun 2022 tentang Perlindungan Data Pribadi (UU PDP)** Republik Indonesia.

### Data yang Kami Kumpulkan:
1. **Informasi Profil Akun**:
   - Nama Tampilan (*Display Name*), usertag unik (`@username`), alamat email atau pengidentifikasi Google Auth, foto profil, serta deskripsi/status profil khusus UMessage.
2. **Kunci Kriptografi Publik**:
   - Kunci publik Anda disimpan di direktori kontak server agar pengguna lain dapat mengenkripsi pesan yang ditujukan kepada Anda.
3. **Metadata Teknis & Kehadiran (*Presence Data*)**:
   - Indikator status koneksi (*online/offline*), penanda waktu terakhir aktif (*last seen*), penanda aktivitas mengetik (*typing indicator*), dan stempel waktu pengiriman pesan (*timestamp*).
   - Pengidentifikasi teknis perangkat (tipe OS, versi peramban/aplikasi) yang dikumpulkan secara anonim untuk diagnosis stabilitas dan penyesuaian tampilan antarmuka.
4. **Metadata Log Panggilan Suara**:
   - Catatan riwayat panggilan yang mencakup ID penelepon, penerima, durasi percakapan, status panggilan (diterima, ditolak, tak terjawab), dan stempel waktu. Isi pembicaraan suara **tidak pernah direkam atau disimpan**.

### Data yang TIDAK PERNAH Kami Kumpulkan atau Jual:
- Isi pesan teks pribadi yang belum terenkripsi.
- Rekaman suara dari panggilan WebRTC.
- Lokasi GPS presisi secara terus-menerus di latar belakang.
- Data kontak buku telepon tanpa persetujuan eksplisit.
- Data pribadi Anda **TIDAK AKAN PERNAH DIJUAL, DISEWAKAN, ATAU DIMONETISASI** kepada pihak ketiga atau jaringan periklanan luar mana pun.

---

## 4. Fitur Percakapan & Pertukaran Pesan

1. **Pesan Langsung (Direct Messages)**:
   - Pengguna dapat bertukar pesan teks, emoji, reaksi pesan, dan kutipan balasan (*reply quote*) tanpa batasan kuota pesan harian.
   - Fitur penghapusan pesan mendukung opsi **Hapus untuk Saya (*Delete for Me*)** serta **Tarik Pesan untuk Semua Orang (*Unsend/Delete for Everyone*)** dalam jangka waktu yang ditentukan oleh protokol aplikasi.
2. **Indikator Pengiriman & Keterbacaan**:
   - Status pesan ditandai dengan ikon centang: centang tunggal menandakan pesan telah diterima server, dan centang ganda hijau menandakan pesan telah berhasil didekripsi dan dibuka oleh perangkat penerima.
3. **Sematkan Obrolan (Pinned Chats)**:
   - Pengguna dapat menyematkan (*pin*) hingga maksimal **5 (lima) obrolan** prioritas agar selalu berada pada posisi teratas daftar percakapan.
   - Status sematan obrolan disinkronkan secara aman dan real-time di seluruh perangkat (Web dan Aplikasi Seluler UMessage) melalui profil pengguna.
4. **Share QR Code**:
   - QR Code milik akunmu yang berada di Profile dan Chat(Dropdown): Berfungsi agar Dapat mempermudah dan mempercepat chat dengan akun yang dimaksud tanpa harus mencari satu per satu di pencarian akun.
5. **Dukungan Karakter & Bahasa**:
   - UMessage mendukung penyandian karakter internasional (Unicode/UTF-8), memungkinkan percakapan dalam berbagai bahasa dan aksara dunia.

---

## 5. Kebijakan Panggilan Suara & Video Real-time (Voice, Video & Group Call Policy)

1. **Arsitektur Peer-to-Peer & Multi-Partisipan Terenkripsi**:
   - Panggilan langsung 1-on-1 UMessage beroperasi menggunakan standar protokol WebRTC (*Web Real-Time Communication*) yang dialirkan langsung secara *peer-to-peer* antar-perangkat menggunakan enkripsi transport DTLS (*Datagram Transport Layer Security*) dan SRTP (*Secure Real-time Transport Protocol*).
   - Untuk panggilan multi-partisipan (Panggilan Grup & Eskalasi Panggilan), transmisi media menggunakan arsitektur Selective Forwarding Unit (SFU) terenkripsi guna mengoptimalkan konsumsi bandwidth dan performa perangkat tanpa mengurangi privasi pengguna.
2. **Panggilan Grup & Fitur Invite Multi-Partisipan (Group Calls & Call Escalation)**:
   - Pengguna dapat memulai panggilan suara atau video bersama seluruh anggota di dalam obrolan grup dengan indikator status kehadiran langsung (*In-Chat Ongoing Call Banner*).
   - Pengguna yang sedang berada dalam panggilan 1-on-1 dapat mengundang kontak lain ke dalam panggilan secara spontan (*Invite to Call*).
   - Sesi panggilan grup bersifat desentralisasi ruang (*room-oriented*): jika pemrakarsa atau host keluar dari panggilan, panggilan bagi peserta aktif lainnya tetap berjalan tanpa terputus selama minimal dua peserta masih terhubung.
3. **Fitur Panggilan Video, Grid Adaptif & Picture-in-Picture (PiP)**:
   - Pengguna dapat melakukan panggilan video berkualitas tinggi dengan kendali fleksibel kamera depan/belakang, toggle bisukan audio (*mute*), dan toggle nonaktifkan kamera.
   - Panggilan video grup mendukung tata letak grid adaptif yang menyesuaikan otomatis dengan jumlah peserta aktif, fitur *double-tap* untuk mengunci/mem-pin fokus layar ke peserta tertentu (tersedia ketika terdapat 4 atau lebih peserta yang terhubung), serta fokus pembicara aktif.
   - Pada aplikasi mobile, jendela pratinjau kamera lokal (*Picture-in-Picture*) dapat digeser secara bebas ke sudut layar (*draggable snap*) dan kontrol panggilan dapat disembunyikan (*collapsible dock*) untuk tampilan layar penuh yang leluasa.
4. **Sinyal Panggilan (*Signaling*)**:
   - Server Firebase Realtime Database kami hanya bertindak sebagai mediator sinyal (*signaling exchange*) untuk menukar metadata status panggilan, koordinasi partisipan ruang, *SDP Offer*, *SDP Answer*, dan *ICE Candidates*.
   - Segera setelah koneksi audio/video terjalin, aliran media tidak lagi melalui basis data server kami.
5. **Ketiadaan Rekaman Suara & Video**:
   - UMessage **TIDAK MEREKAM, MENYADAP, ATAU MENYIMPAN ALIRAN SUARA MAUPUN VIDEO PANGGILAN** pada media server manapun. Percakapan audio dan video Anda sepenuhnya bersifat instan dan efemeral.
6. **Penafian Panggilan Darurat**:
   > [!WARNING]
   > UMessage **BUKAN** merupakan pengganti layanan telepon konvensional atau seluler. Layanan panggilan UMessage **TIDAK DAPAT** digunakan untuk melakukan panggilan darurat ke nomor layanan publik (seperti 110, 112, 113, 118, 119, atau 911).

---

## 5.1. Kebijakan Cerita 24 Jam (24-Hour Stories & Voice Stories Policy)

1. **Format Cerita (Text, Photo, and Voice Stories)**:
   - Pengguna dapat mempublikasikan cerita sementara berupa teks dengan latar warna kustom, foto media, maupun pesan suara berdurasi hingga 60 detik (*Voice Story*).
2. **Masa Tayang Efemeral 24 Jam**:
   - Setiap cerita yang dipublikasikan memiliki masa tayang aktif selama **24 (dua puluh empat) jam**.
   - Setelah 24 jam terlewati, sistem secara otomatis menghentikan penayangan cerita dari linimasa dan menghapus data terkait dari peredaran publik.
3. **Kontrol Privasi Audiens Cerita**:
   - Pengguna memiliki kendali penuh atas siapa saja yang berhak melihat cerita melalui pengaturan privasi:
     - **Kontak Obrolan (*Contacts - Default*)**: Hanya pengguna yang pernah memiliki riwayat percakapan langsung dengan Anda.
     - **Semua Orang (*Everyone*)**: Seluruh pengguna terdaftar di ekosistem Uwebly.
     - **Pengikut (*Followers*)**: Pengguna yang mengikuti akun Anda.
     - **Pengguna Terpilih (*Selected Users*)**: Daftar teman tertentu yang dipilih secara khusus oleh Anda.
4. **Balasan Cerita (*Story Replies*)**:
   - Tanggapan atau balasan teks terhadap cerita akan dikirimkan secara langsung dan pribadi sebagai pesan obrolan terenkripsi ke ruang pesan pengunggah cerita.

---

## 6. Kebijakan Penyimpanan Berkas, Media & Pesan Suara (Voice Note)

1. **Pesan Suara (Voice Notes)**:
   - File rekaman audio pesan suara dikompresi menggunakan codec Opus/WebM untuk menghemat penggunaan kuota internet pengguna dengan kualitas kejernihan suara tinggi.
   - Berkas audio diunggah ke Firebase Cloud Storage dengan pengidentifikasi acak (*UUID tokenized access*) dan hanya dapat diakses melalui URL bertoken aman yang dibagikan di ruang obrolan terkait.
2. **Pertukaran Foto, Gambar & Kamera Langsung**:
   - Pengguna dapat mengirimkan foto langsung dari kamera perangkat atau galeri media.
   - Gambar yang dikirimkan melalui obrolan diproses dengan optimasi kompresi visual agar pengiriman berlangsung cepat tanpa kehilangan ketajaman detail esensial.
3. **Dokumen & File Lampiran**:
   - UMessage mendukung pengiriman berkas dokumen umum (PDF, DOCX, XLSX, TXT, ZIP).
   - Pengguna dilarang mengirimkan berkas berekstensi eksekusi mencurigakan (`.exe`, `.bat`, `.vbs`, `.scr`, `.sh`, `.apk` yang dimodifikasi jahat) yang berpotensi membahayakan keamanan perangkat penerima.
4. **Retensi & Pembersihan Media**:
   - Media dan berkas yang dikaitkan dengan pesan yang telah dihapus permanen oleh kedua belah pihak akan dijadwalkan untuk pembersihan otomatis dari penyimpanan cloud sistem.

---

## 7. Kebijakan Mode Akun "Just UMessage" & Penyamaran Identitas Sosial

UMessage menyediakan fitur revolusioner berupa mode **Just UMessage** yang dirancang untuk pengguna yang menginginkan privasi maksimal tanpa jejak interaksi sosial di platform Uwebly.

1. **Penyamaran Profil Publik (*Avatar Masking*)**:
   - Jika mode "Just UMessage" diaktifkan, foto profil asli pengguna secara otomatis disembunyikan dan diganti dengan avatar standar di seluruh halaman publik Uwebly (Feed Posd, Kolom Komentar, Halaman Jelajah/Explore, dan Hasil Pencarian).
   - Foto profil asli hanya dapat dilihat oleh rekan obrolan di dalam antarmuka UMessage.
2. **Pemisahan Bio & Deskripsi Obrolan**:
   - Deskripsi profil di UMessage bersifat independen dan tidak akan ditampilkan pada bio profil publik di halaman akun Uwebly utama (`/account`).
3. **Pembatasan Aktivitas Sosial**:
   - Untuk menjaga isolasi privasi, akun dalam mode ini tidak dapat mempublikasikan komentar publik di postingan karya kreator Uwebly.
   - Pengguna tetap dapat memberikan tanda suka (*Like*) pada postingan publik dan menikmati karya di feed.
4. **Jeda Waktu Pergantian Mode (*Cooldown Period*)**:
   - Pengguna dapat beralih antara mode *Just UMessage* dan *Mode Sosial Penuh* dengan batas jeda minimal **30 (tiga puluh) hari sekali**. Hal ini diberlakukan demi menjaga stabilitas integritas data pengguna di jaringan.

---

## 8. Pengelolaan Grup & Kebijakan Obrolan Komunitas

1. **Hak & Peran Administrator Grup**:
   - Pembuat grup secara otomatis memegang hak istimewa sebagai Pemilik (*Owner*) dan Administrator Utama grup.
   - Admin berwenang mengubah nama grup, ikon/avatar grup, deskripsi informasi grup, menambah atau menghapus anggota, serta menunjuk administrator pendamping.
   - Admin berhak mengatur hak akses pengiriman pesan (*announcement-only mode*).
2. **Kerahasiaan Obrolan Grup**:
   - Pesan grup didistribusikan ke seluruh anggota yang terdaftar secara sah di dalam grup tersebut.
   - Anggota grup dilarang menyebarluaskan tangkapan layar (*screenshot*) atau isi percakapan grup pribadi ke ruang publik tanpa persetujuan anggota terkait.
   - Catatan : Jika mode Group diubah menuju Public, memungkinkan Group muncul di Feed Uwebly/Posd/Scrolls, pastikan periksa deskripsi Group jika ingin Group bersifat Private.
3. **Keluarnya Anggota & Pembubaran Grup**:
   - Setiap anggota berhak keluar dari grup percakapan kapan saja.
   - Jika admin utama keluar tanpa menunjuk pengganti, sistem secara otomatis akan melimpahkan hak admin kepada anggota tertua berikutnya atau membubarkan grup jika tidak ada anggota tersisa.

---

## 9. Kebijakan Interaksi Kecerdasan Buatan (Velora Policy)

UMessage terintegrasi dengan **Velora**, asisten cerdas yang siap membantu produktivitas, pembuatan draf pesan, konsultasi ide, dan pencarian bantuan di dalam aplikasi.

1. **Isolasi Data Kriptografi**:
   - Sesi percakapan Anda dengan pengguna lain **TIDAK PERNAH DIBAGIKAN KE MODEL VELORA**.
   - Model AI hanya memproses teks yang Anda ketikkan secara sengaja di dalam ruang obrolan khusus Velora atau saat memanggil fitur Velora.
2. **Penggunaan Data Obrolan AI**:
   - Perintah dan percakapan dengan Velora AI diproses menggunakan protokol kecerdasan buatan terenkripsi untuk menghasilkan respons yang relevan, akurat, dan sopan.
   - Data obrolan Velora tidak digunakan untuk melatih model publik tanpa anonimisasi ketat.
3. **Kepribadian & Penyesuaian Pengguna**:
   - Pada integrasi Velora Embed, asisten AI mengadaptasi gaya kepribadian dan pengetahuan bisnis sesuai dengan profil mitra terdaftar.
   - Velora mengenal siapa yang sedang dia aja obrol, dari Username, dan waktu yang terjadi pada waktu itu juga, Velora tidak tahu email mu, dia hanya tahu Usernamemu saja.
4. **Batasan Keakuratan AI**:
   - Velora dirancang untuk membantu pengguna atau sekedar menjadi teman bicara, namun respons yang dihasilkan merupakan komputasi generatif probabilistik. Pengguna disarankan untuk memverifikasi kembali saran medis, hukum, keuangan, atau data kritikal yang diberikan oleh asisten AI.

---

## 10. Kebijakan Konten yang Dilarang & Batasan Penggunaan (Acceptable Use Policy)

Demi menjaga keamanan seluruh pengguna di dalam ekosistem UMessage, setiap pengguna **DILARANG KERAS** menyalahgunakan platform untuk:

1. **Eksploitasi Anak & Konten Pornografi**:
   - Membuat, menyimpan, mengirimkan, atau memfasilitasi materi eksploitasi seksual anak (CSAM), pornografi tanpa persetujuan (*non-consensual sexual imagery*), atau konten cabul ekstrem. UMessage menerapkan toleransi nol (*zero tolerance*) untuk pelanggaran ini dan akan langsung berkoordinasi dengan aparat penegak hukum yang berwenang.
2. **Pelecehan, Ancaman & Ujaran Kebencian**:
   - Melakukan perundungan siber (*cyberbullying*), ancaman kekerasan fisik, pemerasan (*blackmail*), atau ujaran kebencian terhadap suku, agama, ras, etnis, jenis kelamin, atau disabilitas.
3. **Penipuan Finansial & Phishing**:
   - Mengirim tautan palsu untuk mencuri data akun (*phishing*), penipuan undian berhadiah, manipulasi transfer perbankan, atau skema ponzi/investasi ilegal.
4. **Penyebaran Malware & Peretasan**:
   - Mengirimkan kode komputer yang merusak, spyware, ransomware, virus, atau upaya manipulasi payload API server Uwebly.
5. **Spam & Otomatisasi Ilegal**:
   - Mengirim pesan massal yang tidak diminta (*unsolicited bulk messages*), membanjiri ruang obrolan (*flooding*), atau mengoperasikan bot otomatis tanpa izin resmi.
6. **Pelanggaran Privasi Orang Lain (*Doxxing*)**:
   - Mempublikasikan nomor telepon pribadi, alamat rumah, identitas KTP/Paspor, dokumen medis, atau informasi sensitif milik orang lain tanpa izin tertulis.

---

## 11. Kebijakan Pemblokiran Kontak, Pelaporan & Penegakan Disiplin

1. **Hak Pemblokiran Mandiri**:
   - Setiap pengguna memiliki hak mutlak untuk memblokir kontak manapun secara sepihak melalui tombol *Blokir Kontak* di halaman profil obrolan.
   - Kontak yang diblokir tidak akan dapat:
     - Mengirim pesan teks, berkas, atau pesan suara kepada Anda.
     - Melakukan panggilan suara WebRTC kepada Anda.
     - Melihat foto profil terbaru, status online, maupun waktu terakhir aktif (*last seen*) Anda.
2. **Mekanisme Pelaporan (*Reporting System*)**:
   - Pengguna dapat melaporkan akun yang terindikasi melakukan pelecehan, spam, atau penipuan melalui menu pelaporan terintegrasi.
   - Tim Keamanan dan Keselamatan Komunitas akan meninjau laporan secara profesional dan rahasia.
3. **Tingkatan Sanksi Pelanggaran**:
   - Berdasarkan tingkat keparahan pelanggaran, pengelola berhak menjatuhkan sanksi bertahap:
     - **Peringatan Resmi**: Notifikasi teguran pertama di dalam akun pengguna.
     - **Pembatasan Sementara**: Penonaktifan sementara hak mengirim pesan atau panggilan selama 24 jam hingga 7 hari.
     - **Pemutusan Sesi Aktif (*Session Revocation*)**: Mengeluarkan paksa seluruh sesi login di semua perangkat.
     - **Pemblokiran Akun Permanen**: Penutupan akun secara permanen dan pelarangan pendaftaran ulang identitas terkait.

---

## 12. Kebijakan Retensi Data, Hak Subjek Data & Penghapusan Akun

Sesuai dengan hak-hak subjek data yang dijamin oleh **UU Perlindungan Data Pribadi (UU PDP)**:

1. **Hak Akses & Portabilitas Data**:
   - Pengguna berhak meminta salinan data akun dan informasi profil yang tersimpan di sistem UMessage melalui formulir permohonan resmi di Pusat Bantuan.
2. **Hak Perbaikan Data (*Right to Rectification*)**:
   - Pengguna dapat memperbarui nama tampilan, usertag, foto profil, dan status kapan saja melalui menu *Pengaturan Profil*.
3. **Masa Retensi Data**:
   - Metadata teknis dan log aktivitas koneksi disimpan maksimal selama 90 (sembilan puluh) hari untuk keperluan stabilitas server, setelah itu akan diagregasi atau dihapus secara otomatis.
4. **Hak Penghapusan Akun Permanen (*Right to Erasure / Right to be Forgotten*)**:
   - Pengguna memiliki hak penuh untuk menutup dan menghapus akun UMessage secara permanen kapan saja melalui menu `Pengaturan > Hapus Akun`.
   - Konsekuensi penghapusan akun permanen meliputi:
     - Pemusnahan seluruh token autentikasi dan kredensial login akun.
     - Penghapusan brankas kunci terenkripsi (*Encrypted Key Vault*) dari cloud database.
     - Pelepasan kepemilikan grup percakapan.
     - Seluruh riwayat obrolan di sisi server akan dihilangkan dan tidak dapat dipulihkan kembali oleh pihak manapun.

---

## 13. Batasan Tanggung Jawab & Jaminan Layanan (Disclaimer)

1. Layanan UMessage disediakan berdasarkan prinsip **"SEBAGAIMANA ADANYA" (*AS IS*)** dan **"SEBAGAIMANA TERSEDIA" (*AS AVAILABLE*)** tanpa jaminan tersurat maupun tersirat mengenai ketersediaan jaringan bebas hambatan 100%.
2. UMessage tidak bertanggung jawab atas:
   - Gangguan teknis, keterlambatan pesan, atau kegagalan panggilan yang diakibatkan oleh penyedia layanan internet (ISP) pengguna, bencana alam, gangguan listrik, atau kendala jaringan global.
   - Kerugian finansial atau moral akibat kelalaian pengguna dalam menjaga kerahasiaan perangkat atau kunci akses akun pribadinya.
   - Perselisihan pribadi atau transaksi perdata antar-pengguna yang disepakati melalui percakapan di luar kendali langsung sistem Uwebly.

---

## 14. Perubahan Ketentuan & Kebijakan

1. Bmdu Studio berhak memperbarui, merevisi, atau menambahkan klausul baru pada dokumen Ketentuan Layanan & Kebijakan Privasi ini sewaktu-waktu guna merespons perkembangan teknologi baru, penambahan fitur aplikasi, atau penyesuaian regulasi perundang-undangan.
2. Setiap pembaruan material akan diinformasikan kepada pengguna melalui:
   - Pengumuman resmi di banner aplikasi UMessage.
   - Pembaruan tanggal *Terakhir Diperbarui* dan nomor versi di bagian atas dokumen ini.
3. Dengan tetap mengakses atau menggunakan Layanan UMessage setelah tanggal berlakunya pembaruan, Anda dianggap telah menyetujui seluruh isi perubahan tersebut.

---

## 15. Kontak Bantuan & Petugas Perlindungan Data

Jika Anda memiliki pertanyaan, klarifikasi hukum, keluhan privasi, atau ingin menggunakan hak subjek data Anda terkait Ketentuan Layanan dan Kebijakan Privasi UMessage ini, Anda dapat menghubungi tim kami melalui saluran resmi berikut:

- **Petugas Perlindungan Data (Data Protection Officer)**: `usahlanbuisness@gmail.com`
- **Email Dukungan Pengguna**: `usahlanbuisness@gmail.com`
- **Asisten AI Langsung**: Tanyakan panduan kebijakan melalui **Velora Assistant** di halaman pesan
- **Pusat Bantuan & Tiket Laporan**: [https://uwebly.com/feedback](https://uwebly.com/feedback)
- **Portal Uwebly**: [https://uwebly.com](https://uwebly.com)
- **Alamat Kantor Operasional**: Uwebly Ecosystem Legal & Safety Team, Indonesia
