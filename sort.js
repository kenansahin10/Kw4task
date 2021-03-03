const { students } = require('./data.js');


const sonuc = students.sort((item1, item2) => {
    if (item1.startingDate>item2.startingDate) {
        return 1;
    }

    else {
        return -1;
    }
});

console.table(sonuc);


//console.log(sonuc);