const User = require("../model/todo");

// creating new task, and uploaded on database
async function handlePost(req,res){
    const body = req.body;
    await User.create({
        task: body.task
    })
    res.redirect('/');
}

// Delete the exciting task from Db
async function handleDelete(req,res) {
    const id = req.params.id;
    await User.findOneAndDelete({_id : id});
    res.redirect('/');
}

// Updateing the exciting task from Db
async function handleEdit(req,res)  {
    const updatedTask = req.body;
    const id = req.params.id;
    await User.findOneAndUpdate({_id : id}, {$set: {task : updatedTask.task}});
    return res.redirect("/");
}

module.exports = {
    handlePost,
    handleDelete,
    handleEdit
}