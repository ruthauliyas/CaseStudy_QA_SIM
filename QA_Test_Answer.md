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
- Sepuluh test case untuk halaman login (dengan format: Test Case ID, Deskripsi,
Langkah, Input, Expected Result).
- Tiga skenario untuk negative testing.
- Dua skenario boundary testing untuk field password.
