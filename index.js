const express = require('express');
const app = express();
const {connection} =require('./Config/db');

const route =require('./Controller/Route');

app.use(route)




app.listen(2828,()=>{
    try{
    connection();
    console.log("Server is running fine...")
    }
    catch(err){
        console.log("error",err)
    }
})