const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");


const RegisterSchema = new mongoose.Schema({

  name: { type: String, required: true },

  email: { type: String , required: true ,unique: true },

  username: { type: String, required: true },

  password: { type: String, required: true },

//   avatar :{
//     type : String
// },
  
   password_confirmation: { type: String }

});

RegisterSchema.plugin(uniqueValidator);

module.exports =  mongoose.model("Register", RegisterSchema);
