const mongoose = require('mongoose');

// Load environment variables in process object
require('dotenv').config();

// Connect to the database
const dbConnect = () => {
    // Return a promise from the mongoose.connect() method
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to the database')
    })
    .catch((error) => {
        console.log('Error: ', error);
        process.exit(1);
    });
}

module.exports = dbConnect;