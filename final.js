var express=require("express");
var app=express();
var bodyParser=require("body-parser");
app.use(bodyParser.json());
require("dotenv").config();
var cors=require("cors");
app.use(cors());
var dbConnect = require("./db");
dbConnect();
const Attempt = require("./models/Attempt");

app.get("/api/quiz",(req,res)=>{
    // res.send("hello world")
    fetch("https://the-trivia-api.com/api/questions?limit=5")
    .then(res => res.json())
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: "Failed to fetch quiz" }));
})


app.post("/api/save-result", async (req, res) => {
    const { score, total } = req.body;
    
    const newAttempt = new Attempt({
        score,
        total,
    });

    await newAttempt.save();
});
app.listen(process.env.PORT||3000,()=>{
    console.log("server uriking on " + process.env.PORT)
})

