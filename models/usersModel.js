const mongoose=require('mongoose');
const config=require('config');
const Jwt=require('jsonwebtoken')
userSchema=mongoose.Schema({
    username:{
        type:String,
        minlength:3,
        required:true
    },
    email:{
        type:String,
        required:true,

    },
    password:{
        type:String,
        required:true,
        minlength:6
        
    },
    Role:{
        type:String,
        required:true
    }

});

const User=mongoose.model('user',userSchema);
User.generateAuthToken=function(role,name){
    const claims={
        Role:role,
        username:name
    }
let token=Jwt.sign(claims,config.get('JWTtoken'));
return token;
}
module.exports=User;