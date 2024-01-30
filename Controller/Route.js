const route = require('express').Router();

const {databasename} =require('../Config/db')

const collection = databasename.collection("Employee");

//query 1

route.get('/queryOne',async(req,res)=>{
    let taskone = await collection.find().toArray();
    return res.send(taskone);
})

//query 2 
route.get('/queryTwo',async(req,res)=>{
    let tasktwo = await collection.find({"salary": { $gt: "30000"}}).toArray();
    return res.send(tasktwo);
})


//query 3 
route.get('/queryThree',async(req,res)=>{
    let taskthree = await collection.find({ "overallExp": { $gt: "2" } }).toArray();
    return res.send(taskthree);
})


//query 4 
route.get('/queryFour',async(req,res)=>{
    let taskfour = await collection.find({
        "yearGrad": { $gt: "2015" },
        "overallExp": { $gt: "1" }
      }).toArray();
      return res.send(taskfour);


})


//query 5

route.get('/queryFive',async(req,res)=>{
    let taskfive = await collection.updateMany({ "salary": { $gt: 70000 } }, { $set: { "salary": 65000 } });
    return res.send(taskfive);
})

//query 6

route.get('/querySix',async(req,res)=>{
    let tasksix = await collection.deleteMany({ "lastCompany": 'Y' })
    return res.send(tasksix);
})


module.exports = route;