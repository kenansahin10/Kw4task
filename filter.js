const data = require('./data.js').data;

let sonuc = null;


sonuc = students.filter(item => (item.gender == 'e' && item.class == 'education' && item.age > 18));

console.table(sonuc);


console.log(sonuc);