const data = require('./data.js').data;

let sonuc = null;

const sayilar = [10, [12, 'abc', ['qwwq', 889]], 6, 61, 56, 44, 81, 120, 2, 56, 78];


sonuc = sayilar.flat(Infinity);

console.table(sonuc);


console.log(sonuc);