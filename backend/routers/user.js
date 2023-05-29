const express=require('express')
require("dotenv").config();
require('../db/conn')
const auth=require('../middleware/auth.js');
const jwt = require("jsonwebtoken");
const bcrypt=require('bcryptjs')
const User=require('../models/ujr');
const router=new express.Router();



router.post("/register", async (req, res) => {

    // Our register logic starts here
    try {
      // Get user input
      const { name, username, email, password } = req.body;
   // Validate user input
      if (!(email && password && name && username)) {
        res.status(400).send("All input is required");
      }
   // check if user already exist
      // Validate if user exist in our database
      const oldUser = await User.findOne({ email });
  
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }
    //Encrypt user password
      encryptedPassword = await bcrypt.hash(password, 10);
  
      // Create user in our database
      const user = await User.create({
        name,
        username,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
      });
  
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      // save user token
      user.token = token;
  
      // return new user
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
  });

  router.post("/login", async (req, res) => {
    console.log(req.body);
 // Our login logic starts here
    try {
      // Get user input
      const { email, password } = req.body;
  
      // Validate user input
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }


      // Validate if user exist in our database
      const user = await User.findOne({ email });
  
      if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
  
        // save user token
        user.token = token;
  
        // user
        res.status(200).json(user);
      }
      res.status(400).send("Invalid Credentials");
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
  });
  
router.get('/user',async(req,res)=>{
    try{
        const st=await user.find({});
      
      
        res.status(201).send(st );
    }
    catch(e){
        res.status(400).send(e);
    }
})
router.get('/user/:id',async(req,res)=>{
    try{
     const _id=req.params.id;
     const st=await user.findById({_id:_id});

     res.status(201).send(st );
    }
    catch(e){
        res.status(400).send(e);
    }
})
router.delete('/user/:id',async(req,res)=>{
    try{
     const _id=req.params.id;
     const st=await User.deleteOne({_id:_id});

     res.status(201).send(st );
    }
    catch(e){
        res.status(400).send(e);
    }
})


router.patch('/user/:id',async(req,res)=>{
    try{
     const _id=req.params.id;
     
     const st=await User.findByIdAndUpdate(_id,req.body);


     res.status(201).send(st );
    }
    catch(e){
        res.status(400).send(e);
    }
})

router.put('/user/:id',async(req,res)=>{
    try{
     const _id=req.params.id;
     
     const st=await User.findByIdAndUpdate(_id,req.body);


     res.status(201).send(st );
    }
    catch(e){
        res.status(400).send(e);
    }
})
module.exports=router;