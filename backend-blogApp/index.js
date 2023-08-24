const express = require('express');
const { connection } = require('./db');
const { auth } = require('./middleware/auth.middleware');
const { userRouter } = require('./routes/user.route');
const  {blogRouter} = require("./routes/blog.route")
require('dotenv').config();
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("hello")
})
app.use("/user",userRouter);
app.use(auth);
app.use("/blog",blogRouter);

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log(`Server running at port ${process.env.port}`);
    }catch(err){
        console.log("cannot connect to DB");
        console.log(err.message);
    }
})