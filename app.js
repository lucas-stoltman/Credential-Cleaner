// Adding modules
const csv = require('csv-parser');
const fs = require('fs'); // filesystem
const results = [];

fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log('\nBefore\n');
        console.table(results);

    });

function clean(results) {

}

/*

* make a new array clean of duplicates

* create a new csv file of the new array






*/