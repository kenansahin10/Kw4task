const { students } = require('./data.js');

let sonuc = null;


sonuc = students.filter(item => (item.gender == 'e' && item.class == 'education' && item.age > 20));

console.table(sonuc);


//console.log(sonuc);