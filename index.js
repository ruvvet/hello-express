const express = require('express');


// create an instance of an express app
// lets you create a route
const app = express();

// making a route
// take express instance
// 'GET'
// the home route
// send a response hello world whenever we get the req route

app.get('/', function(req, res){
    res.send('Hello World');
})

// listen on this app
app.listen(8000);

// homeroute
// localhost:8000