// import model
const Todo = require('../models/Todo');

// define route handler
exports.createTodo = async (req, res) => {
    try {
        // extract data from request body
        const { title, description } = req.body;
        // create a new Todo object and insert into database
        const response = await Todo.create({ title, description });
        // send a json response with a success flag
        res.status(200).json({
            sucess: true,
            data: response,
            message: "Todo created successfully",
        });
    }
    catch (error) {
        console.error(error);
        console.log(error);
        // send a json response with an error message
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: error.message,
        });

    }
}