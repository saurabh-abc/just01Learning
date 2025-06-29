const userApis = {
getProfile:(req,res)=>{
    return res.status(200).send({message:"Just Basic Profile"})
}
}
module.exports = userApis;