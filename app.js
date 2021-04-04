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
        console.log('\nBefore\n');
        // console.table(results);

        // remove duplicates
        clean(results);

        // post the cleaned version
        console.log('\nAfter\n');
        // console.table();

        // create new csv file
        const ws = fs.createWriteStream("out.csv");
        fastcsv
            .write(results, { headers: true })
            .pipe(ws);


    });


function clean(array) {

    let arrayCopy = [];

    // iterate through original array
    for (i = 0; i < array.length; i++) {

        let numDuplicates = 0;

        // compare current value with every value in the copy
        for (i = 0; i < array.length; i++) {
            if (array[i] == arrayCopy[i]) {
                arrayCopy.slice()
            }
        }
    }

    console.table(arrayCopy);

}


// TODO List
/*

* make a new array clean of duplicates

* create a new csv file of the new array






*/