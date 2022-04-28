const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const validateToken = (req, res, next) => {
    const validationHeader = req.headers['authorization']
    const token = validationHeader && validationHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, JWT_SECRET, (err, user) => {
        console.log(err)

        if (err) return res.sendStatus(403)

        req.user = user

        next()
    })
}

module.exports = {
    validateToken
}
