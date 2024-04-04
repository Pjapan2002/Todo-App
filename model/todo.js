const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    task:{
        type:String,
        required: true
    }
},{timestamps: true})

const todo = mongoose.model("todo-list",todoSchema);

module.exports = todo;