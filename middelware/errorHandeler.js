module.exports=function(eventhandler)
{
    console.log('catch here the event handler');
    return async (req,res)=>{
        try{
            await eventhandler(req,res);

        }catch(ex){
            console.log('handeler error is thrown:'+ex)

        }
    }
}