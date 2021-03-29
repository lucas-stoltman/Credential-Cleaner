// Adding modules
let http = require('http');
let fs = require('fs'); // filesystem

const port = 8081;

http.createServer(function (request, response) {

    fs.readFile('bitwarden_export_test.csv', function(err, data){

        // build an array to store the data
        // let passwords[]

        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(data);
        return response.end();


    })
}).listen(port);

console.log(`Console running at http://127.0.0.1:${port}`); 


// TODO

/*

* make a new array clean of duplicates

* create a new csv file of the new array






*/