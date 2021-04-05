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

        for (i = 0; i < results.length; i++) {
            console.table(results[i]);
        }

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
    let duplicate = false;

    // iterate through original array
    for (i = 1; i < array.length; i++) {

        //   if in copy already, skip
        if (search(array[i], arrayCopy)) {
            break;
        }
        else {
            arrayCopy.push(array[i]);
        }
    }

    results = arrayCopy;
}

function search(item, array) {
    for (i = 0; i < array.length; i++) {
        if (item == array[i]) {
            return true;
            break;
        }
    }
    return false;
}


// TODO List
/*

* make a new array clean of duplicates






*/