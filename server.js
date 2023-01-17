const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    var a = Number(req.body.x1);
    var b = Number(req.body.x2);
    var c = a*b;
    res.send("Multiplied value is "+ c);
});

app.listen(1003,function(){
    console.log("Server Started");
});