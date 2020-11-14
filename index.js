const express = require('express');


// create an instance of an express app
// lets you create a route
const app = express();

// need to set the view with using the ejs engine
// only needed to serve html pages
//- this is a render engine that renders ejs/html pages
app.set('view engine', 'ejs');

// making a route
// take express instance
// 'GET'
// send a response hello world whenever we get the req route

// res is an object that express provides
// that represents the response that needs to be sent, based on the route that was requested
// this object can contain html, code, js, database...etc

// '/' is the home route
app.get('/', function(req, res){

    ////////// with EJS
    res.render('index', {varName: 'jenny'});

    ////////// send a basic response
    //res.send('Hello j');

    ///////// sending a html file with res.sendfile
    // dirname gets the relative path regardless of where its deployed
    // res.sendFile(__dirname+'/views/index.html');
    // res.status(200);

})


app.get('/about', function(req, res){
    //res.send('about');
    // res.sendFile(__dirname+'/views/about.html');
    res.render('about');
})

//search?char=lisa&type=mage >> this is a query string
// :date >> is a route parameter
// req.body >> body of request > typically json data
// dependent on req header
app.get('/blog/:date', function(req, res){
    // : equivalent to '?'????
    console.log(req)
    // the req is an object with a params key
    // and the value is what is queried by user from endpoint


    // pass an object
    // date = key - since we call it that in ejs
    // req is the object
    //params is key in rec
    // date is nested key in params
    res.render('blog', {date: req.params.date});
    //res.send('blog');
    // res.sendFile(__dirname+'/views/blog.html');

})

//? type = query parameters
    // has typical key:value pairings format
    //key = value
    // every key:val pair delimited by &

// in express
// req.query object




// listen on this app
// homeroute
// localhost:8000
app.listen(8000, () => {
    // visual console indicator that server has restarted
    console.log('server restarted');
});



// MVC pattern
// MODEL VIEW CONTROLLER PATTERN
// SEPARATING CONTOL + VIEW ELEMENTS


// EJS
//embedded javascript
// makes our templates 'smart'
// so we can pass info from index.js into our ejs files

// questions
// using EJS + JS, optimal ways for passing info
// how it ties to query?



// route parameters are used to specify relational data
//  /books >> SELECT * FROM books;
//  /books/1 >> SELECT * FROM books WHERE id =1;

// query data is done through query parameters
// pagination >> query parameters
//   /books?title=hello >>> SELECT * FROM books WHERE title LIKE '%hello%';

