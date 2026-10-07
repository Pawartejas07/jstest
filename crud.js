const mongoose = require('mongoose');
const { connectDB } = require('./db');
connectDB()
const empSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        min:15000,
        max:900000,
        required:true
    },dept:{
        type:String,
        enum:["IT","Sales","HR","Acct"],
        required:true
    }
}, {timestamps:true})

// model 
 const empModel = mongoose.model("emp",empSchema)
   
 // funtion (CRUD)

 async function displayEmpData(){
    try {
        const data = await empModel.find()
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
 } 

 // displayEmpData
async function addEmpData(ename,esal,edept){
    try {
       await empModel.create({name:ename,salary:esal,dept:edept})
        console.log("inserted");
        displayEmpData()
    } catch (error) {
        console.log(error);
        
    }
 }  
 addEmpData("jay",200000,"IT")
 addEmpData("vjay",300000,"HR")
 addEmpData("ajay",400000,"Sales")
