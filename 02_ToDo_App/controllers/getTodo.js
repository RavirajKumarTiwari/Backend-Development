// import the model
const Todo = require('../models/Todo');

// define the controller
exports.getTodo = async (req, res) => {
    try {
        // fetch all todos from the database
        const todos = await Todo.find({});

        // send the response
        res.status(200)
            .json({
                success: true,
                data: todos,
                message: 'Fetched all todos successfully'
            });
    }
    catch (err) {
        console.error(err.message);
        res.status(500)
            .json({
                success: false,
                error: err.message,
                message: 'Server Error'
            });
    }
}

exports.getTodoById = async (req, res) => {
    try {
        // extract the todo item basis on id from the request
        const id = req.params.id;
        const todo = await Todo.findById({_id: id})
        // console.log(todo);
        
        // data for given id not found
        if (!todo) {
            return res.status(404)
                .json({
                    success: false,
                    message: 'No todo found for the given id'
                })
        }

        // data found for given id
        res.status(200)
            .json({
                success: true,
                data: todo,
                message: `Fetched the todo successfully for ${id}`
            })
    }
    catch (err) {
        console.error(err.message);
        res.status(500)
            .json({
                success: false,
                error: err.message,
                message: 'Server Error'
            });
    }
}