const { students } = require('./data.js');

let sonuc = null;


sonuc = students.find(item => item.class == 'medicine');

console.table(sonuc);



//console.log(sonuc);
