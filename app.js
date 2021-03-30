// Adding modules
const csv = require('csv-parser');
const fs = require('fs'); // filesystem

let data = [];

fs.createReadStream('bitwarden_export_test.csv')
    .pipe(csv())
    .on('data', (row) => {
        data.push(row);
    })
    .on('end', () => {
        console.table(data);
        console.log('CSV file successfully processed');
    });

// TODO

/*

* make a new array clean of duplicates

* create a new csv file of the new array






*/