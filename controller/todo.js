const todo = require("../model/todo");

async function handlePost(req,res){
    const body = req?.body;
    await todo.create({
        task:body.task
    })
    res.send("task add successfully!");
}

module.exports = {
    handlePost
}