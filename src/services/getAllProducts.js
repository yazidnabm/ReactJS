export default function getAllProducts() {
  return [
    {
      id: 'NAF-1-07-FMEN-001',
      slug: 'kemeja-hitam-men',
      name: "Kemeja Hitam",
      category: 'Men\'s',
      price: 150_000,
      stock: 100,
      imageUrl: '/assets/images/kemeja-pria1.jpeg',
      description: `Kemeja casual dengan desain simpel, terbuat dari bahan katun premium yang ringan dan nyaman di kulit. Cocok untuk suasana santai atau semi-formal. Tersedia dalam pilihan warna netral seperti hitam, putih, dan biru muda. Dilengkapi dengan saku dada untuk tampilan yang modern.`
    },
    {
      id: 'NAF-1-07-FMEN-LV8-002',
      slug: 'kemeja-abu-men',
      name: "Kemeja Abu",
      category: 'Men\'s',
      price: 200_000,
      stock: 5,
      imageUrl: `/assets/images/kemeja-pria2.jpeg`,
      description: `Kemeja berbahan linen yang breathable, ideal untuk cuaca tropis. Desain lengan panjang dengan potongan slim-fit untuk tampilan modern dan elegan. Hadir dalam warna pastel seperti krem dan hijau zaitun yang cocok untuk acara formal maupun kasual.`
    },
    {
      id: 'NAF-1-07-FMEN-003',
      slug: 'kemeja-flannel-men',
      name: "Kemeja Flannel",
      category: 'Men\'s',
      price: 180_000,
      stock: 10,
      imageUrl: `/assets/images/kemeja-pria3.jpeg`,
      description: `Kemeja flanel berbahan tebal dan hangat, sempurna untuk musim dingin atau kegiatan outdoor. Motif kotak-kotak klasik dengan kombinasi warna merah dan hitam, memberikan kesan maskulin sekaligus stylish. Tersedia dengan kerah button-down untuk fleksibilitas gaya.`
    },
    {
      id: 'NAF-1-07-FWOMEN-004',
      slug: 'kemeja-wanita-satin',
      name: "Kemeja Wanita 1",
      category: 'Women\'s',
      price: 250_000,
      stock: 9,
      imageUrl: `/assets/images/kemeja-wanita1.jpeg`,
      description: `Kemeja blouse berbahan satin lembut yang memberikan kesan mewah dan feminin. Didesain dengan detail ruffle pada bagian leher dan lengan, cocok untuk acara formal atau makan malam spesial. Pilihan warna blush pink dan champagne menambah kesan anggun.`
    },
    {
      id: 'NAF-1-07-FWOMEN-005',
      slug: 'kemeja-wanita-denim',
      name: "Kemeja Wanita 2",
      category: 'Women\'s',
      price: 220_000,
      stock: 0,
      imageUrl: `/assets/images/kemeja-wanita2.jpeg`,
      description: `Kemeja denim dengan model oversize untuk tampilan kasual yang trendi. Terbuat dari bahan denim ringan dengan detail kancing logam. Dapat digunakan sebagai outer atau kemeja biasa, memberikan fleksibilitas gaya untuk aktivitas sehari-hari.`
    },
  ];
}
