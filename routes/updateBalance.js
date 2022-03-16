const express = require('express');
const router = express.Router();
const User = require('../models/createAccount');



router.put('/', async (req,res)=>{
    
    let body = req.body;
    console.log(req.body, '\n \n \n \n ---------------------------------');
    let user = await User.findOne({email:body.email});
    console.log(body, 'I am here')
    
    user.balance += body.balance;
    
    try {
        user = await user.save();
        console.log(user)
        res.send(user);
    } catch(e){
        
        console.log(e);
        
    }
    


})

module.exports = router;