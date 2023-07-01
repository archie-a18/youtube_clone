const express=require("express");
const mongoose=require("mongoose");
const dotenv=require('dotenv');


const app=express();
dotenv.config()

// const connect=() =>{
//     mongoose.connect("")
// }

const connect=function(){
    return (mongoose.connect(process.env.MONGO)
    .then (res => console.log("connected to db")
    )
    .catch((err)=> 
    {throw err;}
    ))
}
app.get("/",function(req,res){
    res.send("<h1>hello</h1>")
})

app.listen(5000,function(){
    connect()
    console.log("server started on port 5000");
});
