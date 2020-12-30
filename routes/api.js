const express =require('express');

const router =express.Router();
const Name = require('../models/name');


//get a list of name
router.get('/name',function(req,res,next){
    res.send({type:'GET'});
});

//add  a new name
router.post('/name',function(req,res,next){
    Name.create(req.body).then(function(name){

res.send(name);


    }).catch(next);

    
    //var name = new Name(req.body);
    //name.save();

    //console.log(req.body);
    //res.send({
      //  type:'POST',
        //name:req.body.name,
        //pos:req.body.pos

});
//});


//update a name
router.put('/name/:id',function(req,res,next){
    Name.findByIdAndUpdate({_id:req.params.id},req.body).then(function(name){

        res.send(name);
    });

});


//delete a name
router.delete('/name/:id',function(req,res,next){
    Name.findByIdAndRemove({_id:req.params.id}).then(function(name){
        res.send(name);
    });

    //req.params.id
    
});



module.exports = router;