 const mongoose = require('mongoose');
 const connectDB = () => {
    mongoose.connect("mongodb://Localhost:27017/i1").then(()=>{
        console.log("connected....");
        
    })
    .catch((err)=>{
        console.log(err);
        
    })
 }
 module.exports = { connectDB }