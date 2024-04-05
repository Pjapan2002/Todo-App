const todo = require("../model/todo");
const User = require("../model/todo");


async function handlePost(req,res){
    const body = req.body;
    // console.log(body);
    await User.create({
        task: body.task
    })
    res.redirect('/');
}

async function handleDelete(req,res) {
    const id = req.params.id;
    await User.findOneAndDelete({_id : id});
    res.redirect('/');
}

module.exports = {
    handlePost,
    handleDelete,
}