module.exports=function(req,res,next)
{
    if(req.User.Role=='admin')
    {
        next();
    }
    else{
        res.satatus(403).send('you not auhorized an admin')
    }
}