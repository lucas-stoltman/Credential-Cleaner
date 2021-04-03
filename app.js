// Adding modules
const csv = require('csv-parser');
const fs = require('fs'); // filesystem

let data = [];
let rowString;

fs.createReadStream('bitwarden_export_test.csv')
    .pipe(csv())
    .on('data', (row) => {
        console.log(row); 
        data.push(rowString);
    })

// sort the array first for faster runtime
// if not, build new array and compare for duplicates when adding


for (let i = 0; i < data.length; i++) {
    if (data[i] == data[i + 1]) {
        data.splice(i, 1);
    }
    console.log(data[i]);
}

// console.log(`Slot 0: ${data[0]}`);
// console.log(`Slot 1: ${data[1]}`);
// console.log(data[0] > data[1]);
// console.log('CSV file successfully processed');
// TODO

/*

* make a new array clean of duplicates

* create a new csv file of the new array






*/