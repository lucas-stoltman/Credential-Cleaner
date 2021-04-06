# Credential-Cleaner
A node app that will comb through a csv password file and remove duplicates. To be used in tandem with a password manager.

Just rename the desired csv file to "data.csv" and place within the same folder as app.js

Run the app from the relevant directory with:

$ node app.js

If it works correctly, it will spit out a new file called "data_clean.csv" within the same folder that you can import to your desired password manager. :)

The app utilizes the JS library _lodash_ to compare objects with each other while cleaning the csv file, so it may need to be installed...
(Currently looking into a way to include it within the repository)
