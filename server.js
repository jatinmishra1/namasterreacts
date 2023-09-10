const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const dbConnection = require('./mongodb')
const mongodbmodel = require("./model.js");
const journalModel = require("./journalmodel")
app.use(express.json())



const path = require('path');
const e = require('express');

app.get('/', async(req, res) => res.send('Hello World!'))
app.post("/data",async(req,res)=>{
    try{
        console.log(req.body)
        const newcar = await new mongodbmodel(req.body);
    await newcar.save();
    res.send({
        name:"jatin"
    })
    }catch{

    }
})

app.post("/journal",async(req,res)=>{
    try{
        console.log(req.body)
        const newcar = await new journalModel(req.body);
    await newcar.save();
    res.send({
        name:"arpit"
    })
    }catch{

    }
})

app.get("/journaldata",async(req,res)=>{
    try{
        const newcar=await journalModel.find();
            // console.log(newcar)
            const arr=[];
            for(var i=0;i<newcar.length;i++){
                const temp={
                    name:newcar[i].item,
                    state:newcar[i].status
                }
                
                arr.push(temp)
                
            }
            
            console.log(arr)
        // const res=newcar.project({ item: 1, status: 1, _id: 0 });
       
        res.send({
           arr
        })
    }catch{
        
    }
})

app.put("/journaldataupdate",async(req,res)=>{
    try{
        console.log(req.body)
        const newcar=await journalModel.updateMany({status:'Zebra'},[{$set:{modified: "$$NOW"}}]);
        const newca=await journalModel.find({status:"Zebra"})
            // console.log(newcar)
            
        // const res=newcar.project({ item: 1, status: 1, _id: 0 });
       
        res.send(
           newca)
    }catch{
        res.send("wrong")
    }
})
 



app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`))