const express = require("express");
const blogRouter = express.Router();
const { BlogModel } = require("../model/blog.model");
const jwt = require('jsonwebtoken');

blogRouter.get("/", async (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, 'masai')
    try {
        if (decoded) {
            const blog = await BlogModel.find({"userID":decoded.userID});
            res.status(200).send({ "msg": blog });
        }
    }
    catch (err) {
        res.status(400).send({ "msg": err.message })
    }
})


//post blog
blogRouter.post("/add", async (req, res) => {
    const payload = req.body;
    try {
        const blog = new BlogModel(payload);
        await blog.save();
        res.status(200).send({ "msg": "blog has been posted successfully" })
    }
    catch (err) {
        res.status(400).send({ "msg": err.message })
    }
})


//patch blog
blogRouter.patch("/update/:blogId", async (req, res) => {
    const { blogId } = req.params;
    const payload = req.body;
    try {
        const blog = BlogModel.updateOne({ _id: blogId }, payload);
        // await blog.save();
        res.status(200).send({ "msg": "Blog has been Updated successfully" })
    }
    catch (err) {
        res.status(400).send({ "msg": err.message })
    }
})


//delete blog
blogRouter.delete("/delete/:blogId", async (req, res) => {
    const { blogId } = req.params;
    try {
        await BlogModel.deleteOne({ _id: blogId });
        res.status(200).send({ "msg": "Blog has been Deleted successfully" })
    }
    catch (err) {
        res.status(400).send({ "msg": err.message })
    }
})

module.exports = {
    blogRouter
}