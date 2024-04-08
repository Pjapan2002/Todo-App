const { getUser } = require("../Auth_services/auth");


const loggedUserOnly = function(req,res,next) {
    const user_id = req.cookies.uid;

    if(!user_id)
    {
        return res.redirect("/user/login")
    }

    const user = getUser(user_id);

    if(!user) 
    {
        return res.redirect("/user/login");
    }

    req.user = user;
    next();
}

module.exports = {
    loggedUserOnly,
}