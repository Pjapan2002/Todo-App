const jwt = require("jsonwebtoken");
const secret_key = "japan#07$"
function setUser(user) {

    const payload = {
        id: user._id,
        name: user.name,
        email: user.email,
        password: user.password
    }
    
    return jwt.sign(payload,secret_key)
}

function getUser(token) {
    if(!token){
        return null;
    }
    return jwt.verify(token,secret_key);
}

module.exports = {
    setUser,
    getUser
}
