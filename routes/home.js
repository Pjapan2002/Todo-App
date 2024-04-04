const express = require("express");
const {handlePost} = require("../controller/todo");
const routes = express.Router();

routes.get('/', (req,res) => {
    return res.render("home");
});

routes.post("/", handlePost);

module.exports = routes;