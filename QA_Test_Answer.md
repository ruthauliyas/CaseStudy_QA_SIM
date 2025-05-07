# CaseStudy QA SIM

## Bagian A – Pengetahuan Dasar QA
### 1. Perbedaan antara bug, defect, dan error
| Istilah   | Definisi    | Penyebab    | Waktu Ditemukan   | Contoh       |
|-----------|-------------|-------------|-------------------|--------------|
| **Error** | Kesalahan manusia dalam menulis kode atau memahami spesifikasi. Ini merupakan tindakan yang salah dalam fase pengembangan.  | Salah logika, sintaks, salah memahami requirement | Saat pengembangan (coding)      | Developer menulis logika yang salah dalam algoritma.         |
| **Defect**| Ketidaksesuaian antara hasil aktual dan hasil yang diharapkan dalam perangkat lunak. Muncul karena error yang tidak ditangani. | Error dalam kode yang tidak diperbaiki      | Selama pengujian    | Fungsi kalkulasi tidak mengembalikan hasil sesuai spesifikasi.      |
| **Bug**   | Masalah dalam perangkat lunak yang menyebabkan perilaku tak terduga. Biasanya ditemukan selama fase pengujian dan dapat berkisar dari gangguan kecil hingga kesalahan kritis.  | Akibat defect atau error      | Saat testing atau pasca-rilis     | UI tidak menampilkan tombol yang seharusnya ada pada layar pengguna.      |

### 2. Regression testing
| Aspek   | Penjelasan      |
|---------|-----------------|
| **Definisi**   | Pengujian ulang terhadap sistem untuk memastikan bahwa perubahan kode tidak menyebabkan bug baru. |
| **Tujuan**     | Menjamin stabilitas dan konsistensi sistem setelah perbaikan bug, penambahan fitur, atau refactoring. |
| **Manfaat Utama**    | - Mendeteksi efek samping dari perubahan<br> - Mengoptimalkan kualitas dan stabilitas software<br> - Menghindari kerusakan fungsi atau fitur lama |
| **Tipe Regression Test**| - Manual Regression<br> - Automated Regression    |
| **Tools Umum**     | Selenium, JUnit, TestNG, Cypress, Katalon Studio, Postman (untuk API)    |
| **Kapan Dilakukan**   | - Setelah perbaikan bug<br> - Setelah penambahan fitur atau modifikasi fitur<br> - Setelah refactoring<br> - Selama iterasi dalam Agile<br> - Saat migrasi platform |
| **Contoh Kasus**   | Setelah menambahkan fitur notifikasi email, dilakukan regression test untuk memastikan fitur login, pendaftaran, dan pembayaran tetap berjalan normal. |

### 3. Lifecycle dari bug/defect dari ditemukan hingga ditutup
![Lifecycle Bug](https://github.com/ruthauliyas/CaseStudy_QA_SIM/blob/main/Flow.png)
| **Status**      | **Deskripsi** |
|----------------|--------------|
| **New**        | Bug ditemukan dan didokumentasikan dalam sistem pelacakan bug. |
| **Assigned**   | Bug diberikan kepada tim pengembang untuk dianalisis dan diperbaiki. |
| **Open**       | Pengembang mulai menyelidiki bug untuk menentukan validitasnya. |
| **In Progress** | Tim pengembang mulai memperbaiki bug dengan melakukan perubahan pada kode. |
| **Fixed**      | Bug telah diperbaiki dan perubahan kode telah dibuat. |
| **Retest or Test**     | Tester melakukan pengujian ulang untuk memastikan bug benar-benar telah diperbaiki. |
| **Verified**   | Jika pengujian ulang sukses, bug dianggap terverifikasi. |
| **Closed**     | Bug telah diperbaiki dan tidak ada masalah lain yang muncul, sehingga status ditutup. |

| **Status Tambahan**    | **Deskripsi** |
|------------------------|---------------|
| **Rejected**   | Bug tidak valid atau bukan kesalahan perangkat lunak. |
| **Deferred**   | Perbaikan bug ditunda untuk versi selanjutnya karena bukan prioritas saat ini. |
| **Duplicate**  | Bug sudah pernah dilaporkan sebelumnya dan ditandai sebagai duplikat. |
| **Reopen**  | Jika bug tetap sama setelah pengujian ulang (Sebelumnya telah ditandai "Closed" atau "Fixed"), maka penguji mengubah status menjadi “Reopen”. |

### 4. Perbedaan test case dan test scenario
| **Aspek**       | **Test Case** | **Test Scenario** |
|-----------------|---------------|-------------------|
| **Definisi**    | Dokumen terperinci berisi langkah-langkah spesifik untuk menguji fitur atau fungsionalitas. | Situasi atau skenario pengujian yang lebih luas atau umum untuk memastikan fitur bekerja sebagaimana mestinya. |
| **Fokus**       | Menguji kondisi spesifik dengan input, langkah, dan hasil yang telah ditentukan. | Menggambarkan bagaimana fitur atau alur kerja diuji secara umum tanpa rincian langkah spesifik. |
| **Detail**      | Sangat terperinci, mencakup ID test case, langkah eksekusi, data uji, hasil yang diharapkan, dll. | Lebih abstrak, sering kali hanya berisi gambaran besar skenario yang perlu diuji. |
| **Tujuan**      | Memastikan bahwa suatu fitur berfungsi dengan benar berdasarkan kondisi spesifik. | Menyusun rencana pengujian yang mencakup berbagai kemungkinan skenario. |
| **Contoh**      | Pengujian fitur lupa password. | Ada pada **Tabel 4.1** |

#### 4.1 Tabel Test Scenario Pengujian fitur lupa password
| **ID Test Case** | **Deskripsi** | **Langkah Eksekusi** | **Hasil yang Diharapkan** |
|------------------|---------------|----------------------|---------------------------|
| TC001 | Masukkan email yang terdaftar | Masukkan email yang valid dan klik tombol "Reset Password" | Email reset password dikirimkan ke pengguna |
| TC002 | Masukkan email yang tidak terdaftar | Masukkan email yang tidak terdaftar lalu klik "Reset Password" | Muncul pesan error bahwa email tidak ditemukan |
| TC003 | Masukkan email dengan format salah | Masukkan email dengan format tidak valid (misalnya: 'user@@domain') | Muncul pesan validasi bahwa format email tidak benar |
| TC004 | Lakukan reset password dan masukkan kata sandi baru | Klik link reset password yang dikirimkan melalui email dan masukkan kata sandi baru | Kata sandi berhasil diperbarui dan pengguna dapat login dengan kata sandi baru |

### 5. Severity dan priority dalam konteks bug
| **Aspek**        | **Severity** | **Priority** |
|------------------|--------------|-------------------|
| **Definisi**    | Mengukur tingkat dampak teknis bug terhadap fungsionalitas sistem. | Menentukan urgensi atau urutan penanganan bug untuk diperbaiki berdasarkan kebutuhan bisnis atau tim. |
| **Fokus**       | Seberapa parah bug mempengaruhi fungsionalitas sistem. | Seberapa cepat bug harus diperbaiki. |
| **Kategori**    | Critical, High, Medium, Low. | High, Medium, Low. |

**Contoh**
| **Severity** | **Priority** | **Contoh Bug** |
|--------------|--------------|----------------|
| **High**     | **High**      | Aplikasi crash saat pengguna mengklik tombol "Submit" dalam form pendaftaran. |
| **Medium**   | **High**      | OTP (kode verifikasi) tidak terkirim ke email pengguna, menyebabkan mereka tidak bisa menyelesaikan proses login. |
| **Low**      | **Medium**    | Kesalahan tampilan pada halaman profil (misalnya, ikon tidak sesuai desain), tetapi tidak mempengaruhi fungsionalitas utama. |


## Bagian B – Praktik Manual Testing
### Skenario
Sebuah aplikasi memiliki halaman login dengan input:
- Email
- Password
- Tombol "Login"
  
### Tugas
#### 1. Sepuluh test case untuk halaman login (dengan format: Test Case ID, Deskripsi, Langkah, Input, Expected Result).

| **Test Case ID** | **Deskripsi** | **Langkah Eksekusi** | **Input** | **Expected Result** |
|------------------|--------------|----------------------|-----------|---------------------|
| TC001 | Login dengan kredensial yang valid | Masukkan email dan password yang benar, lalu klik tombol "Login" | Email: `user@example.com` <br> Password: `Pass1234` | Pengguna berhasil masuk dan diarahkan ke halaman dashboard |
| TC002 | Login menggunakan email yang tidak case-sensitive | Masukkan email dengan kombinasi huruf besar dan kecil, lalu klik "Login" | Email: `USER@EXAMPLE.COM` <br> Password: `Pass1234` | Login berhasil karena email tidak case-sensitive |
| TC003 | Login menggunakan password yang case-sensitive | Masukkan password dengan kombinasi huruf besar dan kecil sesuai yang terdaftar, lalu klik "Login" | Email: `user@example.com` <br> Password: `Pass1234` | Login berhasil jika password cocok, jika tidak muncul pesan error |
| TC004 | Validasi bahwa login dapat dilakukan dengan password yang memenuhi panjang minimum | Masukkan email valid dan password dengan panjang minimal 8 karakter, lalu klik "Login" | Email: `user@example.com` <br> Password: `Abcd1234` | Login berhasil jika password memenuhi aturan panjang minimum |
| TC005 | Validasi masking karakter pada input password | Masukkan password ke dalam kolom input | Password: `Pass1234` | Karakter ditampilkan sebagai titik atau bintang untuk keamanan |
| TC006 | Login menggunakan email yang mengandung angka | Masukkan email dengan angka lalu klik "Login" | Email: `user123@example.com` <br> Password: `Pass1234` | Login berhasil jika akun terdaftar |
| TC007 | Login menggunakan email dengan domain berbeda | Masukkan email dengan domain yang berbeda lalu klik "Login" | Email: `user@gmail.com` <br> Password: `Pass1234` | Login berhasil jika akun terdaftar |
| TC008 | Pastikan tombol "Login" aktif setelah mengisi semua field | Masukkan email dan password, lalu amati apakah tombol "Login" aktif | Email: `user@example.com` <br> Password: `Pass1234` | Tombol "Login" aktif setelah kedua field terisi |
| TC009 | Validasi fungsi "Enter" pada keyboard untuk submit login | Masukkan email dan password, lalu tekan tombol "Enter" | Email: `user@example.com` <br> Password: `Pass1234` | Login berhasil dan pengguna diarahkan ke halaman dashboard |
| TC010 | Redirect setelah login berhasil | Masukkan email dan password yang valid lalu klik "Login" | Email: `user@example.com` <br> Password: `Pass1234` | Pengguna dialihkan ke halaman dashboard atau home setelah login sukses |

#### 2. Tiga skenario untuk negative testing.

| **Test Case ID** | **Deskripsi** | **Langkah Eksekusi** | **Input** | **Expected Result** |
|------------------|---------------|----------------------|-----------|---------------------|
| TC011 | Validasi format email yang tidak sesuai | Masukkan email tanpa karakter "@" dan password valid, lalu klik tombol "Login" | Email: `userexample.com` <br> Password: `Pass1234` | Muncul pesan error: **"Format email tidak valid"** |
| TC012 | Login dengan password yang salah | Masukkan email valid tetapi password salah, lalu klik tombol "Login" | Email: `user@example.com` <br> Password: `salah123` | Muncul pesan error: **"Email atau password salah"** |
| TC013 | Login dengan email yang tidak terdaftar | Masukkan email yang belum terdaftar tetapi dengan password valid, lalu klik tombol "Login" | Email: `tidakada@example.com` <br> Password: `Pass1234` | Muncul pesan error: **"Akun tidak ditemukan"** |

#### 3. Dua skenario boundary testing untuk field password.

| **Test Case ID** | **Deskripsi** | **Langkah Eksekusi** | **Input** | **Expected Result** |
|------------------|---------------|----------------------|-----------|---------------------|
| TC014 | Validasi login dengan password di bawah batas minimum | Masukkan email valid dan password dengan hanya 1 karakter, lalu klik tombol "Login" | Email: `user@example.com` <br> Password: `a` | Muncul pesan error: **"Password terlalu pendek"** |
| TC015 | Validasi login dengan password pada batas maksimum yang diizinkan | Masukkan email valid dan password dengan 20 karakter, lalu klik tombol "Login" | Email: `user@example.com` <br> Password: `Abcdefghijklmnopqr12` | Login berhasil jika password memenuhi aturan panjang maksimum |
