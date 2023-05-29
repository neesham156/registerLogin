require("dotenv").config();
const auth=require('../middleware/auth.js');
const express =require('express')
require('../db/conn.js');

const User=require('../models/ujr.js')
const userRouter=require('../routers/user.js');
const app=express();
console.log(process.env.TOKEN_KEY)
const port=process.env.API_PORT || 3080;
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  app.post('/loginn',auth,(req,res)=>{
    res.send("hello");
})
app.use(userRouter);



app.listen(port,(req,res)=>{
    console.log(`server is running at port ${port}`)
})
