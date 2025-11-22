// Di sini tempat Anda mengedit, menambah, atau menghapus artikel.
// Tidak perlu pusing dengan kodingan tampilan.

// Import dulu foto-foto yang dibutuhkan
import fotoSekre1 from '../assets/kegiatan-sekre-1.jpg';
import fotoSekre2 from '../assets/kegiatan-sekre-2.jpg';

export const articlesData = [
  {
    id: 1,
    title: "Peresmian Sekretariat Baru & Diskusi Santai PADU Jakarta",
    date: "21 April 2025",
    category: "Berita Utama",
    cover: fotoSekre1, // Foto yang muncul di kartu depan
    gallery: [fotoSekre1, fotoSekre2], // Foto-foto untuk di dalam popup (modal)
    excerpt: "Alhamdulillah, momen bersejarah peresmian rumah baru bagi alumni telah terlaksana. Acara dirangkai dengan doa bersama...",
    
    // Isi Lengkap Artikel (Bisa pakai HTML biasa seperti <p>, <b>, <ul>)
    content: (
      <>
        <p>
          <strong>Jakarta, 21 April 2025</strong> – Suasana penuh kehangatan dan kekeluargaan menyelimuti acara peresmian sekretariat baru PADU Jakarta. Bertempat di lokasi strategis yang mudah dijangkau, sekretariat ini diharapkan menjadi "rumah pulang" bagi seluruh alumni Daarul 'Uluum yang merantau di ibu kota.
        </p>
        <p>
          Acara dimulai dengan pembacaan doa bersama untuk keberkahan tempat baru ini, dilanjutkan dengan pemotongan tumpeng sederhana sebagai wujud syukur.
        </p>
        <h3>Diskusi Program Kerja</h3>
        <p>
          Tidak hanya seremoni, kegiatan ini juga dimanfaatkan untuk menggelar diskusi santai mengenai arah gerak organisasi ke depan. Beberapa poin penting yang dibahas antara lain:
        </p>
        <ul style={{paddingLeft: '20px', marginBottom: '15px'}}>
          <li>Penguatan database alumni di wilayah Jabodetabek.</li>
          <li>Rencana program "Alumni Mengajar" dan sharing session karir.</li>
          <li>Persiapan kegiatan sosial menyambut bulan Ramadhan.</li>
        </ul>
        <p>
          "Sekretariat ini bukan sekadar bangunan fisik, tapi simbol dari soliditas kita. Mari kita hidupkan tempat ini dengan ide-ide liar dan karya nyata," ujar Koordinator PADU Jakarta dalam sambutannya.
        </p>
      </>
    )
  },
  
  // --- ARTIKEL 2 (CONTOH CARA NAMBAH DATA) ---
  {
    id: 2,
    title: "Agenda Mendatang",
    date: "-",
    category: "Coming Soon",
    isPlaceholder: true, // Tandai ini sebagai placeholder (bukan berita asli)
    excerpt: "Nantikan kegiatan seru PADU Jakarta selanjutnya. Pastikan Anda bergabung dan berpartisipasi aktif!"
    
    
  }
];