const express = require('express');
const router = express.Router();
const User = require('../models/createAccount');

router.get('/',async(req,res)=>{
    const data = await User.find({});
    res.send(data);

})

module.exports = router;