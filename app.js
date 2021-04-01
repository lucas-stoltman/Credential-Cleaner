// Adding modules
const csv = require('csv-parser');
const fs = require('fs'); // filesystem

let data = [];

fs.createReadStream('bitwarden_export_test.csv')
    .pipe(csv())
    .on('data', (row) => {
        data.push(row);
    })

    // sort the array first


    for (let i = 0; i < data.length; i++) {
        if (data[i] == data[i+1]) {
            data.splice(i, 1);
        }
    }

    .on('end', () => {
        console.log(data);
        console.log('CSV file successfully processed');
    });

// TODO

/*

* make a new array clean of duplicates

* create a new csv file of the new array






*/