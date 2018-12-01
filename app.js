const express=require('express');
const mongoose=require('mongoose');
const userRouter=require('./routes/users');
const login=require('./routes/login');
const app=express();

app.use(express.json());
app.use('/apis/users',userRouter);
app.use('/apis/login',login);

mongoose.connect('mongodb://localhost/mohamed')
.then(()=>{
console.log('database connected')
}).catch((ex)=>{
    console.log(`${ex}`)
});

app.listen(3000,()=>{
    console.log('server running')
});