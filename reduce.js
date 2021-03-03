const { students } = require('./data.js');

//let sonuc = null;


//sonuc = students.log(sayilar)
//sonuc = sayilar.reduce((toplam, item) => toplam = toplam + item);

sonuc = students.reduce((toplam, item) => {
     return toplam = toplam + (item.age)
}, 0);

console.table(sonuc);


//console.log(sonuc);