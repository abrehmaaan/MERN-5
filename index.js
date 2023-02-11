import express from "express";
const app = express()

app.get('/', (req, res)=>{
    res.send([1,2,3]);
})

app.listen(8080, ()=>{
    console.log("Server Running...");
})