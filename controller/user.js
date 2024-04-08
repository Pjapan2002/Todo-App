const userModel = require("../model/user");
const { setUser } = require("../Auth_services/auth");

async function handelSignupPost(req,res)  
{
    const {name,gender,email,password} = req.body;
    
    await userModel.create({
        name,
        gender,
        email,
        password
    })
    res.redirect('/');
}

async function handelLoginPost(req,res)
{
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email:email,password:password});

        if(!user) {
            return res.redirect("/user/login", {
                error : "Invalid Password or email."
            });
        }
        
        const token = setUser(user);
        res.cookie("uid",token);
        res.redirect("/");

    } catch (error) {
        console.log(error);
        res.send("error", error)
    }
}

module.exports = {
    handelSignupPost,
    handelLoginPost
}