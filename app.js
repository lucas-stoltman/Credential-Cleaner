// Adding modules
const csv = require('csv-parser');
const fs = require('fs'); // filesystem

fs.createReadStream('bitwarden_export_test.csv')
    .pipe(csv())
    .on('data', (row) => {
        console.log(row);
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    });

// TODO

/*

* make a new array clean of duplicates

* create a new csv file of the new array






*/