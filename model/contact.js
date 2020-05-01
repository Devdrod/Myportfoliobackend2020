const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({

 email:{
     type: String,
     unique: true,
     require: true,

 },
name:{
    type: String,
    require:true,
},

message:{
    type: String,
    require:true,
},

 date:{
     type:Date,
     default:Date.now
 }   

})

module.exports = Contact = mongoose.model('contact',ContactSchema)