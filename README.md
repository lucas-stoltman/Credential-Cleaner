# Credential-Cleaner
A node app that will comb through a csv password file and remove duplicates. 
To be used in tandem with a password manager.

## How To Install

```
$ npm install
```
This will install the relevant tools from [csv-parser](https://www.npmjs.com/package/csv-parser), [fast-csv](https://www.npmjs.com/package/fast-csv), and [Lodash](https://lodash.com/).

## How To Use

Rename the desired csv file to "data.csv" and place within the same folder as app.js

Run the app from the relevant directory with:
```
$ node app.js
```
If it works correctly, it will spit out a new file called "data_clean.csv" within the same folder that you can import to your desired password manager. :)

The app utilizes the JS library [_Lodash_](https://lodash.com/) to compare objects with each other while cleaning the csv file.
