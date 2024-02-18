# ToDo App

### File structure of backend development:
1. index.js : main file
2. routes : folder for all routes
3. controllers : folder for all controllers or business logic
4. models : folder for all database schema (description of data)
5. config : folder for all configuration files (eg. database connection)
6. .env : environment file (define port no. and database url)
    
### Create a new project:
1. Create a new folder
2. Open terminal and navigate to the folder
3. Run `npm init -y` to create `package.json` file or initialize the project
4. install express `npm i express`
5. now create your file or folder and start coding
   
**What is `require`?**

In `Node.js`, require is a built-in function that is used to import modules. When you require a module, `Node.js` will look for a file with the specified name. If it finds one, it will load the file and execute the code inside it.

In the code you provided:

```javascript
const express = require('express');
const app = express();
```

**What is nodemon and how to install it?**

Nodemon is a powerful tool that simplifies the development process for `Node.js` applications. **It automatically restarts your `Node.js` server whenever it detects changes in the files within your project directory**. This means you don’t have to manually stop and restart your server every time you make code modifications. Nodemon is particularly useful during development, as it speeds up the feedback loop by instantly reflecting your changes.

**install nodemon: `npm i nodemon`**

### SetUp `package.json` file

```JSON
"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
},
```
*Now you can run the project usin*: `npm run dev`

### How to create `.env` file?
1. Create a file name `.env` in the root folder
2. Define the port number and database url
```
PORT = 3000
DATABASE_URL = 'mongodb://127.0.0.1:27017/todoApp'
```

### How to connect to database?
3. Install mongoose `npm i mongoose`
4. Install dotenv `npm i dotenv`
5. Create a new file in config folder `database.js`
6. Import mongoose and dotenv
```javascript
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
```
**What is dotenv?**

- Dotenv is a zero-dependency module that simplifies the process of loading environment variables into your `Node.js` applications.
- It allows you to store configuration settings (such as API keys, database credentials, and other sensitive information) separately from your code.
- Following the principles of The Twelve-Factor App, dotenv ensures that your application’s configuration is managed consistently across different environments (development, staging, production, etc.).
- In your `Node.js` application, require and configure dotenv as early as possible (usually at the beginning of your entry file):
    ```javascript
    require('dotenv').config();
    ```

**What is `process.exit(1)`?**

In the context of `Node.js`, `process.exit(1)` is a method that allows you to **exit the Node.js process programmatically**. Let's break it down:

1. **Exit Codes**:
   - When a process exits, it returns an **exit code** to the operating system.
   - An exit code indicates whether the process terminated successfully or encountered an error.
   - Common exit codes include:
     - **0**: Indicates a successful exit without any issues.
     - **1**: Signifies that there was an issue or problem causing the program to exit.
     - Other exit codes have specific meanings as well (e.g., internal errors, fatal exceptions, etc.).

2. **Usage of `process.exit(1)`**:
   - When you call `process.exit(1)` in your Node.js code, you are explicitly instructing the process to exit with an **error status**.
   - This can be useful when handling uncaught exceptions or other critical errors.
   - For example, if your application encounters an unrecoverable error, you might want to exit with a non-zero status code to indicate failure.

3. **Behavior**:
   - Calling `process.exit(1)` will **immediately terminate** the Node.js process.
   - It forcibly discards any pending asynchronous tasks, including I/O operations to `process.stdout` and `process.stderr`.
   - Use it carefully, especially in production code, as it abruptly stops the execution.

4. **When to Use It**:
   - **Uncaught Exceptions**: If your application encounters an unhandled exception (i.e., an exception not caught by any try-catch block), you might want to exit with a non-zero status code to signal an error.
   - **Custom Error Handling**: In certain scenarios, you may want to exit the process explicitly based on custom error conditions.

*Remember that using `process.exit(1)` should be done judiciously. It's essential to handle errors gracefully whenever possible, but in exceptional cases, this method provides a way to exit the process explicitly with an error status.*

### Function of mangoose
- `create()`: Creates one or more new documents.
- `find()`: Retrieves documents based on specified conditions.
- `findById()`: Finds a single document by its _id.
- `findByIdAndDelete()`: Finds and deletes a single document by its _id.
- `findByIdAndUpdate()`: Finds a document by its `_id`, updates it, and returns the modified document.

---

- `brew services start mongodb-community` Start the mongodb server
- `mongod --config /opthomebrew/etc/mongod.conf` Start the mongodb server