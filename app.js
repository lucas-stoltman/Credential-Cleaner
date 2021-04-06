// Developed by Lucas Stoltman 2021

// Adding modules
const csv = require('csv-parser'); // csv reader
const fastcsv = require('fast-csv'); // csv writer
const fs = require('fs'); // filesystem
const _ = require('lodash'); // JavaScript utility library, https://lodash.com/
let results = [];


fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {

        // post the original
        // console.log('\nBefore\n');
        // console.table(results);

        // remove duplicates
        clean(results);



        // post the cleaned version
        // console.log('\nAfter\n');
        // console.table();

        // create new csv file
        const ws = fs.createWriteStream("data_clean.csv");
        fastcsv
            .write(results, { headers: true })
            .pipe(ws);

    });


// remove duplicates
function clean(array) {

    let arrayCopy = [array[0]];

    // iterate through original array
    for (let i = 1; i < array.length; i++) {

        // if not in copy already, add
        if (!(duplicate(array[i], arrayCopy))) {
            arrayCopy.push(array[i]);
        }
    }

    results = arrayCopy;
}

function duplicate(item, array) {
    for (let i = 0; i < array.length; i++) {
        // if item is found in array        
        if (_.isEqual(item, array[i])) {
            console.log(`${_.values(item)} duplicate found`);
            return true;
        }
    }
    return false;
}


// TODO List
/*

* make a new array clean of duplicates

* Add modular use of lodash rather than the entire package






*/