const express = require('express');
const router = express.Router();
const User = require('../models/createAccount');



router.post('/', async (req,res)=>{
    
    let body = req.body;
    console.log(req.body, '\n \n \n \n ---------------------------------');
    let user = new User({
        name: req.body.name,
        // name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        balance: 100, 
    });
    try {
        user = await user.save();
        res.send(user);
    } catch(e){
        
        console.log(e);
        
    }
    


})

module.exports = router;