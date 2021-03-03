const { students } = require('./data.js');

let sonuc = null;


sonuc = students.some(item => item.gender == 'e');

console.table(sonuc);


//console.log(sonuc);