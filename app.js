// Developed by Lucas Stoltman 2021

// Adding modules
const csv = require('csv-parser'); // csv reader
const fastcsv = require('fast-csv'); // csv writer
const fs = require('fs'); // filesystem
const _ = require('lodash'); // JavaScript utility library, https://lodash.com/
let inputResults = [];


// read current csv file
fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', (data) => inputResults.push(data))
    .on('end', () => {

        // remove duplicates
        let outputResults = removeDuplicates(inputResults);

        // create new csv file
        const ws = fs.createWriteStream("data_clean.csv");
        fastcsv
            .write(outputResults, { headers: true })
            .pipe(ws);
    });


// remove duplicates
function removeDuplicates(array) {

    let arrayCopy = [];

    // iterate through original array
    for (let i = 0; i < array.length; i++) {

        // if not in array copy already, add
        if (!(isDuplicate(array[i], arrayCopy))) {
            arrayCopy.push(array[i]);
        }
    }

    return arrayCopy;
}

function isDuplicate(item, array) {
    for (let i = 0; i < array.length; i++) {
        // if item is found in array, return true       
        if (_.isEqual(item, array[i])) {
            console.log(`${_.values(item)} duplicate found`);
            return true;
        }
    }
    return false;
}


// TODO List
/*

* Add modular use of lodash rather than the entire package






*/