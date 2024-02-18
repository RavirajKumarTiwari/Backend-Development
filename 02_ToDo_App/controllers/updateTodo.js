// import the model
const Todo = require('../models/Todo');

// define the controller
exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        
        const todo = await Todo.findByIdAndUpdate(
            { _id: id },
            { title, description, updatedAt: Date.now() }
        );

        if (!todo) {
            return res.status(404)
                .json({
                    success: false,
                    message: 'Todo not found'
                });
        }

        res.status(200)
            .json({
                success: true,
                data: todo,
                message: 'Todo updated successfully'
            });
    }
    catch (error) {
        console.log(error);
        res.status(500)
            .json({
                success: false,
                error: error.message,
                message: 'Server Error'
            });
    }
}