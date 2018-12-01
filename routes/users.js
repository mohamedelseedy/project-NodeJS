const express=require('express');
const bcrypt=require('bcrypt');
const User=require('../models/usersModel');
const errorHandeler=require('../middelware/errorHandeler');
const router=express.Router();

router.post('/',errorHandeler(async(req,res)=>{
    let user=await User.findOne({email:req.body.email});
    if(user) return res.status(400).send('user already exisit');
    
   user= new User({
        email:req.body.email,
        username:req.body.username,
        password:req.body.password,
        Role:req.body.Role
    })
 user.password=await bcrypt.hash(user.password,10);
    let newuser=await user.save();
    res.send(newuser);
}));

router.get('/',errorHandeler(async(req,res)=>{
    let user=await User.find();
    res.send(user)
}));

module.exports=router;