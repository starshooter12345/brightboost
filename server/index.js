const express = require('express')
const app = express()
const cors=require('cors')
const mongoose = require('mongoose')
const Student = require('./models/student.model')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/bright-boost')

app.post('/api/register', async(req,res) => {
    console.log(req.body)
    try{
        const student=await Student.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })
        res.json({status:'ok'})

    }catch(err){
        console.log(err)
        res.json({status:'error', error:'Duplicate email'})
    }
    
   
})

app.post('/api/login', async(req,res) => {
    const student = await Student.findOne({email:req.body.email,password:req.body.password});
    if(student){
        return res.json({status:'ok', student:true});
    } else {
        return res.json({status:'error',student:false});
    }
 });
 

app.listen(1337,()=>{
    console.log('Server started in port 1337')
})