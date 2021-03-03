const { students } = require('./data.js');

let sonuc = null;


sonuc = students.sort((startingDate, relaseDate) => relaseDate - startingDate);

console.table(sonuc);


//console.log(sonuc);