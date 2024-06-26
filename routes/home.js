const express = require("express");
const {handlePost, handleDelete, handleEdit} = require("../controller/todo");
const todos = require("../model/todo");
const routes = express.Router();

routes.get('', async (req,res) => {
    const allTask = await todos.find({});
    return res.render("home",{todotask : allTask});
});

routes.post("", handlePost);

routes.get("/del/:id", handleDelete);

routes.post("/edit/:id", handleEdit);

module.exports = routes;