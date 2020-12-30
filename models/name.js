const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const NameSchema = new Schema({
    name:{
        type:String,
        required:[true,'Name Required']
    },
    pos:{
        type:String
    },

})


const Name = mongoose.model('name',NameSchema);

module.exports = Name;