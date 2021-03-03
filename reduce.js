const { students } = require('./data.js');

//let sonuc = null;


sonuc = students.reduce((toplam, item) => {
     return toplam = toplam + (item.age)
}, 0);

console.table(sonuc);


//console.log(sonuc);