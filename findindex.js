const { students } = require('./data.js');

let sonuc = null;

sonuc = students.findIndex(item => {
    return item.id == 9
});

console.table(sonuc);


//console.log(sonuc);
