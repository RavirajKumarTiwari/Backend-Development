# Class 01: Basics of Express & MongoDB

## What is Express.js?

**Express.js**, also known simply as **Express**, is an open-source web application framework built on top of **Node.js**. Let’s break it down:

1. **Node.js**:
   - Node.js is a powerful runtime environment that allows you to execute JavaScript code on the server side.
   - It’s commonly used for building scalable and efficient web applications.

2. **Express.js**:
   - Express.js provides a minimal and flexible framework for creating web applications and APIs.
   - Key points about Express:
     - **Purpose**: It simplifies the process of building web servers by enhancing Node’s built-in web server functionality.
     - **Features**:
       - **Middleware**: Express allows you to organize your application’s functionality using middleware. Middleware functions can handle tasks like authentication, logging, and error handling.
       - **Routing**: Express makes it easy to define routes for handling different HTTP requests (such as GET, POST, etc.).
       - **HTTP Utilities**: It adds helpful utilities to Node’s HTTP objects, making it easier to work with requests and responses.
     - **Advantages**:
       - **Simplicity and Minimalism**: Express has a straightforward design, making it easy to learn and use. You can quickly set up a server, define routes, and handle requests.
       - **Flexibility and Customization**: Express allows you to structure your application based on your preferences.
       - **Scalability**: Designed to be lightweight and scalable, it’s suitable for both small projects and large-scale applications.
       - **Active Community Support**: Express has a large and active community, ensuring regular updates and good documentation.
  
In summary, Express.js is a powerful tool for building web applications and APIs using JavaScript. [It’s widely regarded as the de facto standard server framework for Node.js1](https://www.geeksforgeeks.org/express-js/)[2](https://www.edureka.co/blog/expressjs-tutorial/)[3](https://en.wikipedia.org/wiki/Expressjs)[4](https://www.codecademy.com/article/what-is-express-js). 
    
## Get Started with Express

1. **Open your project folder**
2. Initialize Node.js project: `npm init -y`
3. Install Express.js: `npm i express`
   - The `express.js` module is installed in the `node_modules` directory.

Now create a file `file_name.js` and we will write code in this file.

### Inside `file_name.js`

1. **Server Instantiation**:
    ```javascript
    const express = require("express");
    const app = express();
    ```

2. **Middleware to Parse the Body of the Request (for PUT and POST)**:
    ```javascript
    // Used to parse req.body in Express (for PUT or POST)
    const bodyParser = require("body-parser");
    // Specifically parse JSON data and add it to the request.Body object
    app.use(bodyParser.json());
    ```

3. **Activate the Server on Port 3000**:
    ```javascript
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
    ```

### Testing Your Code

After writing the first and second code blocks in your file, you can test whether your code is running or not:

- Run the server: `node file_name.js`
- Visit localhost:3000 in your browser to see your output.

### Creating Routes

1. **Create a Route (GET Request)**:
    ```javascript
    app.get("/", (request, response) => {
        response.send("Hello World");
        // Now you can see the message in the browser by typing localhost:3000
    });
    ```

2. **Creating a Route (POST Request)**:
    - For `POST`, we need middleware. Put the middleware after server instantiation (1. Server Instantiation):
    ```javascript
    app.post("/api/cars", (request, response) => {
        const { name, brand } = request.body;
        console.log(name);
        console.log(brand);
        response.send("Car Submitted Successfully");
    });
    ```

Now test the above code using **Postman**:
1. Go to Postman, select `POST`, and put your URL in the address bar (e.g., http://localhost:3000/api/cars).
2. Select `Body`.
3. Choose `raw` and in the same row, select `JSON`.
4. Inside the text area, write your data (e.g.):
    ```json
    {
        "name": "BR22",
        "brand": "Hero"
    }
    ```

    
## Running Your Server

1. **Run Your Server**:
   - Open your terminal/command prompt.
   - Navigate to your project folder.
   - Run the server: `node file_name.js`.
   - You'll see the following output in your terminal:
     ```
     Server is running on port 3000
     BR22
     Hero
     ```

2. **Testing with Postman**:
   - Open Postman.
   - Select `POST` and put your URL in the address bar (e.g., http://localhost:3000/api/cars).
   - Choose `Body`.
   - Select `raw` and in the same row, select `JSON`.
   - Inside the text area, write your data (e.g.):
     ```json
     {
         "name": "BR22",
         "brand": "Hero"
     }
     ```
   - You'll receive the response "Car Submitted Successfully" in Postman.

    Postman Output:

    ![ss of postman](https://prod-files-secure.s3.us-west-2.amazonaws.com/0632bdad-b588-47ad-adfb-9dd03cfcbf52/5d96d0a1-8e03-4a90-9bb8-cb35e5c689c2/Untitled.png)
    
# MangoDB

**MongoDB** is an open-source, document-oriented database system designed for ease of application development and scalability. Unlike traditional relational databases, MongoDB stores data in flexible, JSON-like documents (in BSON format). It allows you to organize data into collections, and each document within a collection can have different fields. MongoDB is widely used for building modern web applications and APIs, offering features like scalability, flexibility, and an active community of developers.

Key points about MongoDB:

- **Cross-Platform**: MongoDB is a cross-platform, document-oriented database that provides high performance, high availability, and easy scalability.
- **Non-Relational (NoSQL)**: It falls under the category of NoSQL databases.
- **Data Formats**: You can store data in different formats, including key-value pairs, documents, graphs, etc.

### Connecting MongoDB with Node.js

To connect MongoDB with Node.js, we use **Mongoose**:

- **Mongoose**:
  - Mongoose is an Object Data Modeling (ODM) library specifically designed for MongoDB and Node.js.
  - It simplifies interactions with MongoDB databases by providing a higher-level, more structured approach compared to using the native MongoDB driver directly.
  - Key reasons why Mongoose is essential:
    - **Schema Definition**: Mongoose allows you to define schemas for your data. Schemas define the structure of documents (objects) within a collection.
    - **Validation**: You can set up validation rules for fields in your schema, ensuring data consistency.
    - **Relationships**: Mongoose handles relationships between collections (e.g., one-to-many, many-to-many) using references or subdocuments.
    - **Middleware**: Define middleware functions (pre-save, post-save, etc.) to perform actions before or after saving data.
    - **Query Building**: Mongoose provides a fluent API for building complex queries.
    - **Hooks**: Attach hooks to specific events (e.g., save, remove) to execute custom logic.

## How to Install Mongoose and Connect to MongoDB

1. **Install Mongoose**:
   - Open your terminal/command prompt.
   - Navigate to your project folder.
   - Run: `npm i mongoose`
     - This installs the Mongoose package.

2. **Connect to the Database Using Mongoose**:
   - In your Node.js file (e.g., `file_name.js`), use the following syntax to connect to your MongoDB database:
     ```javascript
     const mongoose = require("mongoose");
     // This is a promise-based function (reject or resolve)
     mongoose.connect("mongodb://localhost:27017/myDatabase", {
         useNewUrlParser: true,
         useUnifiedTopology: true
     });
     ```
     - Replace `"mongodb://localhost:27017/myDatabase"` with your actual MongoDB connection URL and database name.

   - Alternatively, you can use the promise syntax:
     ```javascript
     const mongoose = require("mongoose");
     // This is a promise-based function (reject or resolve)
     mongoose.connect("mongodb://127.0.0.1/myDatabase", {}).then(() => {
         console.log("Connected to the database");
     }).catch((error) => {
         console.log("Error: ", error);
     });
     ```

3. **Database Creation**:
   - If the database is not present, MongoDB will create a new database with the given name.

### Testing Your Setup:

1. Go to your project directory.
2. Start your MongoDB database: 

    ```bash
    mongosh
    ```

3. Start your Server

    ```bash
    node file_name.js
    ```
 You'll see the message "**Connected to the database**" in your terminal if the connection is successful.
