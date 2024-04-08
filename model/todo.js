const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    task:{
        type:String,
        required: true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
},{timestamps: true})

const todo = mongoose.model("todo-list",todoSchema);

module.exports = todo;