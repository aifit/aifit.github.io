---
layout: post
title:  "Expose Local Server dengan Ngrok"
categories: tutorial
---

Kadang, kita diminta ngasih preview kerjaan Front-end Web Development secara tiba-tiba, sedangkan kerjaan masih ada di local server. Daripada harus setting server untuk demo (yang waktunya kurang efisien juga). Kita bisa memakai sebuah tool yang bernama [Ngrok][ngrok_url].

Ngrok berfungsi untuk membuat local sever kita menjadi sebuah public url. Sehingga, dengan public url itu, local server kita bisa diakses dari manapun.

Settingnya mudah, tinggal ketik beberapa perintah dari Terminal jika pake Linux atau Mac, dan MsDOS jika pakai Windows. Dan berikut beberapa langkah yang harus dilakukan jika ingin memakai Ngrok:

### Langkah Pertama

Saya anggap local server udah diaktifkan. Kemudian download Ngrok dari [link ini][ngrok_download]. Download salah satu sesuai dengan sistem operasi yang digunakan. Lalu simpan ke hardisk, di lokasi yang gampang diingat misal di folder Download. Di tutorial ini, saya simpan hasil download di folder htdocs.

### Langkah Kedua

Buka Terminal atau MsDOS, arahkan ke direktori tempat menyimpan Ngrok. Kemudian, ketik perintah: `./ngrok` (Mac & Linux) atau `ngrok` (Windows)

> Note: tambahkan `./` saat mengetik perintah di Terminal Mac & Linux

Jika muncul seperti tampilan ini, berarti Ngrok siap digunakan:

![Ngrok Instalation]({{ site.url }}/img/ngrok-instalasi.jpg)
*Ngrok Hasil inisiasi Ngrok dari Terminal / MsDOS*

### Langkah Ketiga
Karena saya pake [mamP][mamp_url] berarti folder kerja saya berada di htdocs. Jadi nantinya, yang akan kita share adalah folder htdocs tersebut. Kemudian ketik perintah: `./ngrok http 80` (Mac & Linux) atau `ngrok http 80` (Windows)

> Note: `80` adalah default port dari local server. Kalau kalian memakai custom port, ganti angka `80` menjadi port yang kalian gunakan, misalnya ketika sedang bikin mobile app memakai [Ionic Framework][ionic_url], default portnya adalah `8100`, maka ketik `./ngrok http 8100` (Mac & Linux) atau `ngrok http 8100` (Windows)

Lalu di Terminal atau MsDOS akan muncul tampilan seperti ini:

![Ngrok tunnel status]({{ site.url }}/img/ngrok-status.jpg)
*Ngrok tunnel status*

Selesai, folder htdocs udah bisa dishare ke public. Link share-nya pada gambar di atas adalah yang saya highlight, yaitu: `https://4e8372b1.ngrok.io`.

Jika ingin men-share folder tertentu di dalam htdocs, maka tinggal tambahkan nama folder itu di belakang url tersebut, `https://4e8372b1.ngrok.io/NamaFolder`.

[ngrok_url]: https://ngrok.io
[ngrok_download]: https://ngrok.com/download
[mamp_url]: https://www.mamp.info/en/
[ionic_url]: http://ionicframework.com/
