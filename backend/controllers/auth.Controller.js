const status = require('http-status');
const Invoice = require("../models/invoice.model");
const Joi = require('@hapi/joi');
const Register = require('../models/register.model');
const bcrypt = require("bcrypt");


function authController() {

  return {

    async registerUser(req, res, next) {



      const { name, email, username , password   ,password_confirmation} = req.body;

      try {


        const schema = Joi.object().keys({

          name: Joi.string().required(),
          email: Joi.string().email({ tlds: { allow: true}}),
          username: Joi.string().required(),
          password:  Joi.string().min(3).max(15).required(),
          password_confirmation: Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' } } })
        
        })
  
         const { error , value }= Joi.validate(req.body , schema);

         if(error && error.details){
           return res.status(status.BAD_REQUEST).json(error)
         }

     let newUser = await Register.create(value);
      res.json({
        msg:"success",
        status:status.ACCEPTED,
        result: newUser
      });

      } catch (err) {
        console.log(err.message);
        res.status(status.BAD_REQUEST).send("Server Error");
      }
    },


   
  };


  
}

module.exports = authController;
