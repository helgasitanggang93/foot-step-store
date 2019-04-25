'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Products', [
     {
      name: "Nike Revolution 4",
      price: 599000,
      description: "NIKE Revolution 4 Running Shoe merupakan sepatu lari persembahan Nike yang dibuat dengan material sintetis yang berkualitas tinggi. Sepatu lari ini memiliki bobot yang ringan dan bantalan yang membuat Anda nyaman dalam menggunakannya. Selain itu, sepatu lari persembahan Nike ini memungkinkan perputaran udara tetap berjalan dengan lancar, sehingga membuat sepatu ini tetap kering dan tidak ditumbuhi jamur.",
      size: 40,
      color: "Black",
      stock:10,
      picture:"nHBfsgAAeAAAAAgAGi6X7gABcj0.jpg",
      createdAt:new Date(),
      updatedAt: new Date()
    },
    {
      name: "Nike Revolution 4",
      price: 599000,
      description: "NIKE Revolution 4 Running Shoe merupakan sepatu lari persembahan Nike yang dibuat dengan material sintetis yang berkualitas tinggi. Sepatu lari ini memiliki bobot yang ringan dan bantalan yang membuat Anda nyaman dalam menggunakannya. Selain itu, sepatu lari persembahan Nike ini memungkinkan perputaran udara tetap berjalan dengan lancar, sehingga membuat sepatu ini tetap kering dan tidak ditumbuhi jamur.",
      size: 41,
      color: "Black",
      stock:10,
      picture:"nHBfsgAAeAAAAAgAGi6X7gABcj0.jpg",
      createdAt:new Date(),
      updatedAt: new Date()
    },
    {
      name: "Nike Revolution 4",
      price: 599000,
      description: "NIKE Revolution 4 Running Shoe merupakan sepatu lari persembahan Nike yang dibuat dengan material sintetis yang berkualitas tinggi. Sepatu lari ini memiliki bobot yang ringan dan bantalan yang membuat Anda nyaman dalam menggunakannya. Selain itu, sepatu lari persembahan Nike ini memungkinkan perputaran udara tetap berjalan dengan lancar, sehingga membuat sepatu ini tetap kering dan tidak ditumbuhi jamur.",
      size: 42,
      color: "Black",
      stock:10,
      picture:"nHBfsgAAeAAAAAgAGi6X7gABcj0.jpg",
      createdAt:new Date(),
      updatedAt: new Date()
    },
    {
      name: "Nike Revolution 4",
      price: 599000,
      description: "NIKE Revolution 4 Running Shoe merupakan sepatu lari persembahan Nike yang dibuat dengan material sintetis yang berkualitas tinggi. Sepatu lari ini memiliki bobot yang ringan dan bantalan yang membuat Anda nyaman dalam menggunakannya. Selain itu, sepatu lari persembahan Nike ini memungkinkan perputaran udara tetap berjalan dengan lancar, sehingga membuat sepatu ini tetap kering dan tidak ditumbuhi jamur.",
      size: 43,
      color: "Black",
      stock:10,
      picture:"nHBfsgAAeAAAAAgAGi6X7gABcj0.jpg",
      createdAt:new Date(),
      updatedAt: new Date()
    },
    {
      name: "NIKE Air Max Sequent 3",
      price: 1049000,
      description: `NIKE Air Max Sequent 3 adalah sepatu lari dari Nike yang memiliki material kulit yang berkualitas tinggi. Berbobot ringan dan bantalan yang membuat Anda nyaman dalam menggunakannya. Bahannya juga memungkinkan perputaran udara tetap berjalan dengan lancar, sehingga sepatu tetap kering dan tidak ditumbuhi jamur.`,
      size: 40,
      color: "White",
      stock:10,
      picture:"nHBfsgAATAAAAAsAA1Op4AABCZw.jpg",
      createdAt:new Date(),
      updatedAt: new Date()
    },
    {
      name: "NIKE Air Max Sequent 3",
      price: 1049000,
      description: `NIKE Air Max Sequent 3 adalah sepatu lari dari Nike yang memiliki material kulit yang berkualitas tinggi. Berbobot ringan dan bantalan yang membuat Anda nyaman dalam menggunakannya. Bahannya juga memungkinkan perputaran udara tetap berjalan dengan lancar, sehingga sepatu tetap kering dan tidak ditumbuhi jamur.`,
      size: 41,
      color: "White",
      stock:10,
      picture:"nHBfsgAATAAAAAsAA1Op4AABCZw.jpg",
      createdAt:new Date(),
      updatedAt: new Date()
    },
    {
      name: "NIKE Air Max Sequent 3",
      price: 1049000,
      description: `NIKE Air Max Sequent 3 adalah sepatu lari dari Nike yang memiliki material kulit yang berkualitas tinggi. Berbobot ringan dan bantalan yang membuat Anda nyaman dalam menggunakannya. Bahannya juga memungkinkan perputaran udara tetap berjalan dengan lancar, sehingga sepatu tetap kering dan tidak ditumbuhi jamur.`,
      size: 42,
      color: "White",
      stock:10,
      picture:"nHBfsgAATAAAAAsAA1Op4AABCZw.jpg",
      createdAt:new Date(),
      updatedAt: new Date()
    },
    {
      name: "NIKE Air Max Sequent 3",
      price: 1049000,
      description: `NIKE Air Max Sequent 3 adalah sepatu lari dari Nike yang memiliki material kulit yang berkualitas tinggi. Berbobot ringan dan bantalan yang membuat Anda nyaman dalam menggunakannya. Bahannya juga memungkinkan perputaran udara tetap berjalan dengan lancar, sehingga sepatu tetap kering dan tidak ditumbuhi jamur.`,
      size: 43,
      color: "White",
      stock:10,
      picture:"nHBfsgAATAAAAAsAA1Op4AABCZw.jpg",
      createdAt:new Date(),
      updatedAt: new Date()
    },
    {
      name: "New Balance W480LB6",
      price: 499000,
      description: `New Balance W480LB6 Sepatu Running Original menghadirkan sepatu running dengan kenyamanan dan kerah mewah, ditambah kombinasi overlay dijahit dan tanpa jahitan. Sisipan respons NB 1.0 memberikan kenyamanan ekstra dengan detail cetak dan gradien untuk menyempurnakan tampilan gaya anda.`,
      size: 43,
      color: "Black",
      stock:10,
      picture:"nHBfsgAAcwAAAAsAP0tWbAAAr08.jpg",
      createdAt:new Date(),
      updatedAt: new Date()
    },
    {
      name: "New Balance W480LB6",
      price: 499000,
      description: `New Balance W480LB6 Sepatu Running Original menghadirkan sepatu running dengan kenyamanan dan kerah mewah, ditambah kombinasi overlay dijahit dan tanpa jahitan. Sisipan respons NB 1.0 memberikan kenyamanan ekstra dengan detail cetak dan gradien untuk menyempurnakan tampilan gaya anda.`,
      size: 42,
      color: "Black",
      stock:10,
      picture:"nHBfsgAAcwAAAAsAP0tWbAAAr08.jpg",
      createdAt:new Date(),
      updatedAt: new Date()
    },
    {
      name: "New Balance W480LB6",
      price: 499000,
      description: `New Balance W480LB6 Sepatu Running Original menghadirkan sepatu running dengan kenyamanan dan kerah mewah, ditambah kombinasi overlay dijahit dan tanpa jahitan. Sisipan respons NB 1.0 memberikan kenyamanan ekstra dengan detail cetak dan gradien untuk menyempurnakan tampilan gaya anda.`,
      size: 41,
      color: "Black",
      stock:10,
      picture:"nHBfsgAAcwAAAAsAP0tWbAAAr08.jpg",
      createdAt:new Date(),
      updatedAt: new Date()
    },
    {
      name: "New Balance W480LB6",
      price: 499000,
      description: `New Balance W480LB6 Sepatu Running Original menghadirkan sepatu running dengan kenyamanan dan kerah mewah, ditambah kombinasi overlay dijahit dan tanpa jahitan. Sisipan respons NB 1.0 memberikan kenyamanan ekstra dengan detail cetak dan gradien untuk menyempurnakan tampilan gaya anda.`,
      size: 40,
      color: "Black",
      stock:10,
      picture:"nHBfsgAAcwAAAAsAP0tWbAAAr08.jpg",
      createdAt:new Date(),
      updatedAt: new Date()
    },
    {
      name: "NIKE Flex Trainer 8-Gunsmoke",
      price: 949000,
      description: `NIKE Flex Trainer 8-Gunsmoke/Metallic Silver-Atmosphere Grey merupakan produk sepatu training unggulan dari Nike yang dapat Anda jadikan pilihan. Sepatu training ini hadir dengan beragam teknologi terbaru yang semakin memberikan kenyamanan saat Anda gunakan. Sepatu ini dirancang mengikuti bentuk kaki sehingga akan meminimalisir cedera saat digunakan, serta memberikan kenyamanan yang lebih pada kaki Anda. Sepatu ini memiliki model yang cukup simpel namun tetap memiliki kesan modern. Gunakan sepatu training dari Nike ini sebagai pilihan Anda.`,
      size: 40,
      color: "Grey",
      stock:10,
      picture:"nHBfsgAAMQAAAAgAH37JIgANUx0.jpg",
      createdAt:new Date(),
      updatedAt: new Date()
    },
    {
      name: "NIKE Flex Trainer 8-Gunsmoke",
      price: 949000,
      description: `NIKE Flex Trainer 8-Gunsmoke/Metallic Silver-Atmosphere Grey merupakan produk sepatu training unggulan dari Nike yang dapat Anda jadikan pilihan. Sepatu training ini hadir dengan beragam teknologi terbaru yang semakin memberikan kenyamanan saat Anda gunakan. Sepatu ini dirancang mengikuti bentuk kaki sehingga akan meminimalisir cedera saat digunakan, serta memberikan kenyamanan yang lebih pada kaki Anda. Sepatu ini memiliki model yang cukup simpel namun tetap memiliki kesan modern. Gunakan sepatu training dari Nike ini sebagai pilihan Anda.`,
      size: 41,
      color: "Grey",
      stock:10,
      picture:"nHBfsgAAMQAAAAgAH37JIgANUx0.jpg",
      createdAt:new Date(),
      updatedAt: new Date()
    },
    {
      name: "NIKE Flex Trainer 8-Gunsmoke",
      price: 949000,
      description: `NIKE Flex Trainer 8-Gunsmoke/Metallic Silver-Atmosphere Grey merupakan produk sepatu training unggulan dari Nike yang dapat Anda jadikan pilihan. Sepatu training ini hadir dengan beragam teknologi terbaru yang semakin memberikan kenyamanan saat Anda gunakan. Sepatu ini dirancang mengikuti bentuk kaki sehingga akan meminimalisir cedera saat digunakan, serta memberikan kenyamanan yang lebih pada kaki Anda. Sepatu ini memiliki model yang cukup simpel namun tetap memiliki kesan modern. Gunakan sepatu training dari Nike ini sebagai pilihan Anda.`,
      size: 42,
      color: "Grey",
      stock:10,
      picture:"nHBfsgAAMQAAAAgAH37JIgANUx0.jpg",
      createdAt:new Date(),
      updatedAt: new Date()
    },
    {
      name: "ADIDAS Cf Racer Tr - Icepur",
      price: 880000,
      description: `ADIDAS Cf Racer Tr - Icepur/Carbon/Mysrub merupakan sepatu dari Adidas yang dibuat dengan material yang berkualitas tinggi. Sepatu ini memiliki bobot yang ringan dan bantalan yang membuat Anda nyaman dalam menggunakannya. Selain itu, sepatu lari persembahan Adidas ini memungkinkan perputaran udara tetap berjalan dengan lancar, sehingga sepatu ini tetap kering dan tidak ditumbuhi jamur.`,
      size: 42,
      color: "Grey",
      stock:10,
      picture:"nHBfsgAAwQAAABAAHfgP9AABQh8.jpg",
      createdAt:new Date(),
      updatedAt: new Date()
    },
    {
      name: "ADIDAS Cf Racer Tr - Icepur",
      price: 880000,
      description: `ADIDAS Cf Racer Tr - Icepur/Carbon/Mysrub merupakan sepatu dari Adidas yang dibuat dengan material yang berkualitas tinggi. Sepatu ini memiliki bobot yang ringan dan bantalan yang membuat Anda nyaman dalam menggunakannya. Selain itu, sepatu lari persembahan Adidas ini memungkinkan perputaran udara tetap berjalan dengan lancar, sehingga sepatu ini tetap kering dan tidak ditumbuhi jamur.`,
      size: 41,
      color: "Grey",
      stock:10,
      picture:"nHBfsgAAwQAAABAAHfgP9AABQh8.jpg",
      createdAt:new Date(),
      updatedAt: new Date()
    },
    {
      name: "ADIDAS Cf Racer Tr - Icepur",
      price: 880000,
      description: `ADIDAS Cf Racer Tr - Icepur/Carbon/Mysrub merupakan sepatu dari Adidas yang dibuat dengan material yang berkualitas tinggi. Sepatu ini memiliki bobot yang ringan dan bantalan yang membuat Anda nyaman dalam menggunakannya. Selain itu, sepatu lari persembahan Adidas ini memungkinkan perputaran udara tetap berjalan dengan lancar, sehingga sepatu ini tetap kering dan tidak ditumbuhi jamur.`,
      size: 40,
      color: "Grey",
      stock:10,
      picture:"nHBfsgAAwQAAABAAHfgP9AABQh8.jpg",
      createdAt:new Date(),
      updatedAt: new Date()
    },
    {
      name: "New Balance NB MRL996SE",
      price: 880000,
      description: `Dear pembeli, Terima kasih telah memilih produk kami. Perlu diketahui bahwa barang-barang kami berasal dari luar Indonesia. Kami memiliki banyak variasi produk dan persediaan barang yang sangat dinamis. Jika persediaan barang kami tidak mencukupi, staf layanan pelanggan kami akan menghubungi Anda sesegera mungkin untuk proses penukaran barang atau pengembalian dana (refund). Anda bisa menghubungi kami untuk menanyakan ketersediaan barang atau hal terkait lainnya sebelum melakukan pembelian. `,
      size: 40,
      color: "Dark Blue",
      stock:10,
      picture:"nHBfsgAAvQAAAAEAASHIPQAAaEc.jpg",
      createdAt:new Date(),
      updatedAt: new Date()
    },
    {
      name: "New Balance NB MRL996SE",
      price: 880000,
      description: `Dear pembeli, Terima kasih telah memilih produk kami. Perlu diketahui bahwa barang-barang kami berasal dari luar Indonesia. Kami memiliki banyak variasi produk dan persediaan barang yang sangat dinamis. Jika persediaan barang kami tidak mencukupi, staf layanan pelanggan kami akan menghubungi Anda sesegera mungkin untuk proses penukaran barang atau pengembalian dana (refund). Anda bisa menghubungi kami untuk menanyakan ketersediaan barang atau hal terkait lainnya sebelum melakukan pembelian. `,
      size: 41,
      color: "Dark Blue",
      stock:10,
      picture:"nHBfsgAAvQAAAAEAASHIPQAAaEc.jpg",
      createdAt:new Date(),
      updatedAt: new Date()
    },
    {
      name: "New Balance NB MRL996SE",
      price: 880000,
      description: `Dear pembeli, Terima kasih telah memilih produk kami. Perlu diketahui bahwa barang-barang kami berasal dari luar Indonesia. Kami memiliki banyak variasi produk dan persediaan barang yang sangat dinamis. Jika persediaan barang kami tidak mencukupi, staf layanan pelanggan kami akan menghubungi Anda sesegera mungkin untuk proses penukaran barang atau pengembalian dana (refund). Anda bisa menghubungi kami untuk menanyakan ketersediaan barang atau hal terkait lainnya sebelum melakukan pembelian. `,
      size: 42,
      color: "Dark Blue",
      stock:10,
      picture:"nHBfsgAAvQAAAAEAASHIPQAAaEc.jpg",
      createdAt:new Date(),
      updatedAt: new Date()
    },
    {
      name: "New Balance NB MS574DCG",
      price: 3290000,
      description: `Dear pembeli, Terima kasih telah memilih produk kami. Perlu diketahui bahwa barang-barang kami berasal dari luar Indonesia. Kami memiliki banyak variasi produk dan persediaan barang yang sangat dinamis. Jika persediaan barang kami tidak mencukupi, staf layanan pelanggan kami akan menghubungi Anda sesegera mungkin untuk proses penukaran barang atau pengembalian dana (refund). Anda bisa menghubungi kami untuk menanyakan ketersediaan barang atau hal terkait lainnya sebelum melakukan pembelian. `,
      size: 42,
      color: "Green",
      stock:10,
      picture:"nHBfsgAA3wAAAAEAAQEWJgAAcFk.jpg",
      createdAt:new Date(),
      updatedAt: new Date()
    },
    {
      name: "New Balance NB MS574DCG",
      price: 3290000,
      description: `Dear pembeli, Terima kasih telah memilih produk kami. Perlu diketahui bahwa barang-barang kami berasal dari luar Indonesia. Kami memiliki banyak variasi produk dan persediaan barang yang sangat dinamis. Jika persediaan barang kami tidak mencukupi, staf layanan pelanggan kami akan menghubungi Anda sesegera mungkin untuk proses penukaran barang atau pengembalian dana (refund). Anda bisa menghubungi kami untuk menanyakan ketersediaan barang atau hal terkait lainnya sebelum melakukan pembelian. `,
      size: 41,
      color: "Green",
      stock:10,
      picture:"nHBfsgAA3wAAAAEAAQEWJgAAcFk.jpg",
      createdAt:new Date(),
      updatedAt: new Date()
    },
    {
      name: "New Balance NB MS574DCG",
      price: 3290000,
      description: `Dear pembeli, Terima kasih telah memilih produk kami. Perlu diketahui bahwa barang-barang kami berasal dari luar Indonesia. Kami memiliki banyak variasi produk dan persediaan barang yang sangat dinamis. Jika persediaan barang kami tidak mencukupi, staf layanan pelanggan kami akan menghubungi Anda sesegera mungkin untuk proses penukaran barang atau pengembalian dana (refund). Anda bisa menghubungi kami untuk menanyakan ketersediaan barang atau hal terkait lainnya sebelum melakukan pembelian. `,
      size: 40,
      color: "Green",
      stock:10,
      picture:"nHBfsgAA3wAAAAEAAQEWJgAAcFk.jpg",
      createdAt:new Date(),
      updatedAt: new Date()
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
