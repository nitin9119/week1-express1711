const express = require('express');

const users = require('./user.json');

const app = express();

// app.get('/', (req, res) => {
//     res.send("Welcome to Home page");
  
// })

app.get('', (req, res) => {
    res.send(users);
  
})

app.listen(1234,() =>{
    console.log("Listening on port 1234");
})