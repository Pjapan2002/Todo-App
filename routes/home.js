const express = require("express");
const {handlePost, handleDelete} = require("../controller/todo");
const User = require("../model/todo");
const routes = express.Router();

routes.get('', async (req,res) => {
    const allTask = await User.find({});
    return res.render("home",{todotask : allTask});
});

routes.post("", handlePost);

routes.get("/del/:id", handleDelete);

routes.post("/edit/:id", async (req,res) => {
    // res.send("hi");
    const updatedTask = req.body;
    const id = req.params.id;
    await User.findOneAndUpdate({_id : id}, {$set: {task : updatedTask.task}});
    return res.redirect("/");
});

module.exports = routes;