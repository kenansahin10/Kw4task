const data = require('./data.js').data;

let sonuc = null;


sonuc = students.map(item => {
    return {
        id:item.id,
        name:item.name,
        gender:item.gender,
        ortalama: item.relaseDate - item.startingDate
    }
});

console.table(sonuc);


console.log(sonuc);