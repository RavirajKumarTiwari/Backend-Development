// Server Initiate
const express = require('express');
const app = express();

// load config from .env file
require('dotenv').config();
const PORT = process.env.PORT || 8000;

// middleware to parse json request body
app.use(express.json());

// Import routes for TODO API
const todoRoutes = require('./routes/todos');
// mount the todo API routes
app.use("/api/v1", todoRoutes);

// start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// connect to the database
const dbConnect = require('./config/database');
dbConnect();

// default route
app.get('/', (req, res) => {
    res.send(`<h1> Welcome to the home page of TODO API </h1>`);
});