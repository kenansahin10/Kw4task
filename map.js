const { students } = require('./data.js');

let sonuc = null;


sonuc = students.map(item => {
    return {
        id:item.id,
        name:item.name,
        gender:item.gender,
        finisTime: item.relaseDate - item.startingDate
    }
});

console.table(sonuc);


//console.log(sonuc);