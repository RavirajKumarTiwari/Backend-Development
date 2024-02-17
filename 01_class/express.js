// Server Instantiate
const express = require("express");
const app = express();

// Middleware to parse the body of the request

// used to parse req.body in express -> PUT or POST
const bodyParser = require("body-parser");
// specifically parse JSON data & add it to the request.Body object
app.use(bodyParser.json());

// Activate the server on port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// create a route (GET request)
app.get("/", (request, response) => {
    response.send("Hello World");
    // now u can see the message in the browser by typing localhost:3000
})


// create a route (POST request)
app.post("/api/cars", (request, response) => {
    const { name, brand } = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car Submitted Successfully");
})

// connect to the database using mongoose
const mongoose = require("mongoose");
// This is a promise based function (reject or resolve)
mongoose.connect("mongodb://127.0.0.1/myDatabase", {
}).then(() => {
    console.log("Connected to the database");
}).catch((error) => {
    console.log("Error: ", error);
});