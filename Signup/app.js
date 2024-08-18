const express = require("express");
const bodyParser=require("body-parser");
const request=require("request")
const app=express();
app.use(express.static("public"));
app.get("/",function(req,res){

    res.sendFile(__dirname+"/signup.html")
})
app.listen(3000,function(){
console.log("Server is ruining  at port 3000");
})
app.use(bodyParser.urlencoded({extended:true}));
app.post("/",function(req,res){
    var FirstName=req.body.First;
    var LastName=req.body.Last;
    var email=req.body.email;  
    var password=req.body.password;   
    console.log(FirstName);
    console.log(LastName);
    console.log(email);
    console.log(password);

})
