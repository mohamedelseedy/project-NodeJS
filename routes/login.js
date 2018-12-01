const express=require('express');
const bcrypt=require('bcrypt');
const router=express.Router();
const authenticate=require('../middelware/authentication');
const authorizate=require('../middelware/authorization');
const errorHandeler=require('../middelware/errorHandeler');
const User=require('../models/usersModel');

router.post('/',errorHandeler(async(req,res)=>{
    let user=await User.findOne({email:req.body.email});
    if(!user) return res.status(400).send('wrong email or password');

    let password=await bcrypt.compare(req.body.password,user.password);
    if(!password) return res.status(400).send('wrong email or password');
    const token=User.generateAuthToken(user.Role,user.username);
    res.header('x-auth-token',token).send({username:user.name})

}));
router.delete('/',authenticate,authorizate,async(req,res)=>{
   
    res.send(`deleted `);
})

module.exports=router