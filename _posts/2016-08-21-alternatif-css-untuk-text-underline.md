---
layout: post
title:  "Alternatif CSS Untuk Text Underline"
categories: tutorial
---

Awalnya mungkin sah – sah aja jika kita menggunakan `text-decoration: underline` di CSS untuk memberi garis bawah pada sebuah teks. Tetapi jika ditilik lebih lanjut masalah akan muncul jika huruf berukuran besar (misal 80 pixel):

```css
.text-line {
  font-size: 80px;
  text-decoration: underline;
}
```

Hasilnya akan seperti gambar di bawah, dimana underline-nya tampak tebal:

![Alternatif CSS Untuk Text Underline]({{ site.url }}/img/underline-default.jpg)
*Default CSS underline*

Mungkin bagi para designer yang peduli dengan web typography, tentunya akan sedikit “mengganggu”.

Ada alternatif untuk mengatasi hal tersebut, seperti yang digunakan di website Medium. Mereka menggunakan background untuk underline-nya. Contoh code:

```css
.text-line {
  font-size: 80px;
  text-decoration: none;
  background-image: linear-gradient(#000000, #000000);
  background-position: 0 1em;
  background-size: 1px 1px;
  background-repeat: repeat-x;
}
```

Dengan memakai cara tersebut, ketebalannya bisa diatur menggunakan background-size. Hasilnya bisa dilihat pada gambar di bawah ini:

![Alternatif CSS Untuk Text Underline]({{ site.url }}/img/underline-background.jpg)
*Alternatif underline dengan background-image*

Selanjutnya, masih dengan cara yang sama. Kita bisa menambahkan multiple `text-shadow` sebagai pembungkus untuk huruf yang kita pakai. Supaya underline tidak terkesan menyatu dengan hurufnya (lihat pada huruf g dan p pada gambar di atas). Contoh code-nya seperti ini:

```css
.text-line {
  font-size: 80px;
  text-decoration: none;
  background-image: linear-gradient(#000000, #000000);
  background-position: 0 1em;
  background-size: 1px 1px;
  background-repeat: repeat-x;
  text-shadow: 0.05em 0 0 red, -0.05em 0 0 red, 0 0.04em 0 red;
}
```

Biar lebih jelas, pada contoh code di atas, saya memakai warna merah (Red) untuk `text-shadow`-nya. Hasilnya seperti gambar di bawah ini:

![Alternatif CSS Untuk Text Underline]({{ site.url }}/img/underline-shadow.jpg)
*Alternatif underline dengan text-shadow*

Jika `text-shadow`, diubah warnanya menjadi sama dengan background (warna putih), hasilnya akan seperti ini:

![Alternatif CSS Untuk Text Underline]({{ site.url }}/img/underline-final.jpg)
*Alternatif underline final*

Selesai, sekarang underline terkesan terpisah dengan hurufnya.

### Yang harus diperhatikan

* Warna background website harus sama dengan warna `text-shadow`
* Setiap huruf punya karakteristik `line-height` yang berbeda, maka saat mengganti huruf `text-shadow`-nya harus diatur ulang
* Saat user men-select teks, text-shadow harus dihilangkan

### Final Code

Untuk lebih jelasnya, bisa kalian utak-atik di Codepen:

<p class="codepen" data-height="400" data-theme-id="0" data-default-tab="css,result" data-user="yja" data-slug-hash="EyGdwq" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Alternative for CSS Text Underline">
  <span>See the Pen <a href="https://codepen.io/yja/pen/EyGdwq/">
  Alternative for CSS Text Underline</a> by Yahya J Aifit (<a href="https://codepen.io/yja">@yja</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Rujukan
* [Smarter Link Underlines For Every Website][smarterlink]
* [Crafting link underlines on Medium][crafting]
* [Multiple `text-shadow` generator][multiple]

[smarterlink]: https://eager.io/blog/smarter-link-underlines/
[crafting]: https://medium.design/crafting-link-underlines-on-medium-7c03a9274f9
[multiple]: http://westciv.com/tools/shadows/
