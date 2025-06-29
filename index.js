const express = require('express');
const routes = require('./routes/userRoute');
const app = express();
const port =3000;
app.use('/',routes)
app.listen(port,(req,res)=>{
    console.log("server is listen on 3000");
})