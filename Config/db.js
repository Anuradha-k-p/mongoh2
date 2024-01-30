const {MongoClient} = require('mongodb')

const Client = new MongoClient("mongodb://127.0.0.1:27017")

const connection = async()=>{
    try{
        await Client.connect()
        console.log("connected to the DB")
    }
    catch(err){
        console.log("err",err)
    }
}


const databasename = Client.db("Human_Resourse");

module.exports={connection,databasename}