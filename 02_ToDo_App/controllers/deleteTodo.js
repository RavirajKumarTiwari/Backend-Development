// import the model
const Todo = require('../models/Todo');

// define the controller
exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete({_id: id });
        
        res.json({
            success: true,
            message: 'Todo deleted successfully'
        });
    }
    catch(error) {
        console.log(error);
        res.status(500)
            .json({
                success: false,
                error: error.message,
                message: 'Server Error'
            });
    }
}