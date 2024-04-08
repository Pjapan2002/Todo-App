const express = require("express");
const routes = express.Router();

const { handelSignupPost,handelLoginPost } = require("../controller/user");


routes.get("/", (req,res) => {
    return res.render("signup");
})

routes.post("/", handelSignupPost);

routes.get("/login", (req,res) => {
    return res.render("login");
})

routes.post("/login", handelLoginPost)

module.exports = routes;