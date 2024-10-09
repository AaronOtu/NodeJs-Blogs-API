const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  first_name: {type:String, required:true, trim:true},
  last_name: {type:String, required:true, trim:true},
  username: {type:String, required:true, trim:true, unique:true},
  email:{type:String, required:true, trim:true, unique:true},
  password:{type:String, required:true},
  createdAt:{type:Date, default:Date.now},


})


module.exports = mongoose.model("Users", UserSchema)