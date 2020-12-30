const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');




//const routes = require('./routes/api');


//express is set
const app = express();


//connect to mogodb
mongoose.connect('mongodb://localhost/namego');
mongoose.Promise = global.Promise;



app.use(bodyParser.json())


app.use('/api',require('./routes/api'));
//app.get('/api/name',routes);
//app.post('/api/name',routes);
//app.put('api/name/:id',routes);
//app.delete('api/name/:id',routes);
//routes.initialize(app);

//app.get('/api',function(req,res){
  //  console.log('GET');
    //res.send({name:'Arshad'});
//});

//error handling
app.use(function(err,req,res,next){
    res.status(422).send({error:err.message});

});


app.listen(4000,function(){
    console.log('Request success');


});