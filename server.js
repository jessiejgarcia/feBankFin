const express = require('express');
const app = express();
const createAccount = require('./routes/createAccount');
const updateBalance = require('./routes/updateBalance');
const login = require('./routes/login');
const mongoose = require('mongoose');
const user = require('./models/createAccount');
const allData = require('./routes/allData');
const bodyParser = require('body-parser');
const path = require('path');
const uri = "mongodb+srv://Admin:FXc4fKAJ4UEOAPw5@cluster0.771xm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


mongoose.connect(uri, {
    useNewUrlParser: true, useUnifiedTopology: true
});


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json())

app.use('/createAccount', createAccount);
app.use('/allData', allData);
app.use('/updateBalance', updateBalance);
app.use('/Login', login);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get(/\/(?!api)*/, (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }



let userV = 'stuff';
let make = async()=> {userV = await user.find()};
make();




app.listen(3001);