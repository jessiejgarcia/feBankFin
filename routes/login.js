const express = require('express');
const router = express.Router();
const User = require('../models/createAccount');

router.post('/',async(req,res)=>{
    const data = await User.find({email:req.body.email});
    console.log(data)
    res.send(data);

})

module.exports = router;