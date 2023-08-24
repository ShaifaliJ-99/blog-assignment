const express = require('express');
const userRouter = express.Router();
const { UserModel } = require('../model/user.model');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
//registration route
userRouter.post("/register", async (req, res) => {
    const { user, email, pass, location, age } = req.body
    try {
        const findIt = await UserModel.find({email});
        console.log(findIt);
        if(findIt.length>0){
            res.status(409).send({"msg":"User already exists"})
        }else{
            bcrypt.hash(pass, 5, async (err, hash) => {
                const userRegister = new UserModel({ user, email, pass: hash, location, age })
                await userRegister.save();
                res.status(200).send({ "msg": "registerion has been done" })
                console.log(hash)
            });
        }
    }
    catch (err) {
        res.status(400).send({ "msg": err })
    }
})

//login
userRouter.post("/login", async (req, res) => {
    const { email, pass } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        // console.log(user);

        if (user) {
            bcrypt.compare(pass, user.pass, (err, result) => {
                if (result) {
                    res.status(200).send({
                        "msg": "Login Successfull!",
                        "token": jwt.sign({
                           "userID":user._id
                        }, "masai")
                    })
                }else {
                    res.status(400).send({ "msg": "Wrong Credentials" })
                }
            });
        } 
    }
    catch (err) {
        res.status(400).send({ message: err })
    }

});

//get users details
userRouter.get("/details", (req, res) => {
    const token = req.headers.authorization;
    // console.log("token",token);

    jwt.verify(token, 'Ward', function (err, decoded) {
        if (decoded) {
            res.status(200).send(" ✅ Users Details")
        } else if (err) {
            res.status(400).send({
                "msg": `Access Denied ❌🚷 , ${err}`
            })
        }
    });
})

module.exports = {
    userRouter
}