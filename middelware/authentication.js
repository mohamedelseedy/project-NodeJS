const Jwt=require('jsonwebtoken');
const config=require('config');
module.exports=function(req,res,next){
    if(req.header('x-auth-token'))
    {
        try{
        const token=req.header('x-auth-token');
        const decoded=Jwt.verify(token,config.get('JWTtoken'));
        req.user=decoded;
        next();
        }
        catch(ex)
        {
            res.send
        }
    }else{
        res.status(403).send('you are not authorized to access')
    }
}