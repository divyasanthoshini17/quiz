var express=require("express");
var app=express();
require("dotenv").config();
var cors=require("cors");
app.use(cors());
var dbConnect = require("./db");
dbConnect();
app.get("/api/quiz",(req,res)=>{
    // res.send("hello world")
    fetch("https://the-trivia-api.com/api/questions?limit=5")
    .then(res => res.json())
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: "Failed to fetch quiz" }));
})

app.listen(process.env.PORT||3000,()=>{
    console.log("server uriking on " + process.env.PORT)
})

