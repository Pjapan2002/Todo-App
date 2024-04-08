const express = require('express')
const app = express()
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/todo-task")
.then(() => console.log("mongodb connected successfully with mongode server!"));

const homeroutes = require("./routes/home");
const userroutes = require("./routes/user");
const path = require("path");
const { loggedUserOnly } = require('./middleware/auth');
const cookieParser = require('cookie-parser');



app.set("view engine","ejs");
app.set("views",path.resolve('./views'));

app.use(express.static('public'));

app.use(express.urlencoded());
app.use(cookieParser())

app.use('/user',userroutes);
app.use('/',loggedUserOnly,homeroutes);


app.listen(3000)