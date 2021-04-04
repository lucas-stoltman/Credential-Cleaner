// Adding modules
const csv = require('csv-parser');
const fastcsv = require('fast-csv');
const fs = require('fs'); // filesystem
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

    let arrayCopy = [];
    let duplicate = false;

    // iterate through original array
    for (i = 0; i < array.length; i++) {

        // check for duplicate
        for (j = 0; j < arrayCopy.length; j++) {
            if (arrayCopy[j] == array[i]) {
                duplicate == true;
                break;
            }
            else {
                duplicate = false;
            }
        }

        if (!duplicate) {
            arrayCopy.push(array[i]);
            console.table(arrayCopy);
        }
    }
}


// TODO List
/*

* make a new array clean of duplicates

* create a new csv file of the new array






*/