const express = require('express');
const message = require('./models/message');
const router = express.Router()

router.get("/api/messages",(req,res)=>{
message.find()
.then((data)=>res.json(data))
.catch((err) => {
    res.status().json({})
})
})


router.post("/api/messages",(req, res)=>{
    console.log("sdsd")
    console.log(req.body);
    message.create({
        username:req.body.username,
        email:req.body.email,
        message:req.body.message


    })
    .then((data)=>res.json(data))
    .catch((err)=>res.status.json({}))
})

module.exports = router;
