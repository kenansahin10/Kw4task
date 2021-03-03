const { students } = require('./data.js');

let sonuc = null;


sonuc = students.every(item => item.gender == 'k');

console.table(sonuc);


//console.log(sonuc);