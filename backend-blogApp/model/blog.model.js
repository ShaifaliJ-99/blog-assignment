const mongoose = require('mongoose');

//blogSchema

const blogSchema = mongoose.Schema({
    title: String,
    body: String,
    subject:String,
    userID :String
}, {
    versionKey: false
});

const BlogModel = mongoose.model("blog", blogSchema);

module.exports = {
    BlogModel
}