const status = require('http-status');
const Invoice = require("../models/invoice.model");
const Joi = require('@hapi/joi');
const { updateOne } = require('../models/invoice.model');


function invoiceController() {

  return {

    async findAll(req, res, next) {

      let result = await Invoice.find({})
      
      if(!result){
        res.status(status.INTERNAL_SERVER_ERROR).send("Server error")
      }
      res.status(status.ACCEPTED).send(result)
    },


    async deleteOne(req, res, next) {
      
      let {id } = req.params

      let result = await Invoice.findByIdAndDelete(id)
      
      if(!result){
        res.status(status.INTERNAL_SERVER_ERROR).send("Not Found")
      }
      res.status(status.ACCEPTED).json({
        msg:"Deleted successfully",
        result: `This item is deleted with Id = ${result._id}`
      })
    },



    async findOne(req, res, next) {

      let {id } = req.params

      let results = await Invoice.findById(id)

      if(!results){

        res.status(status.NOT_FOUND).send("Not Found")
      }       

      //return res.json(results)

       res.status(status.ACCEPTED).send(results)
    },

    async createInvoice(req, res, next) {
      const { item, qty, date, due, rate, tax } = req.body;

      try {


        const schema = Joi.object().keys({

          item: Joi.string().required(),
          date: Joi.date().required(),
          due: Joi.date().required(),
          qty: Joi.number().integer()
               .required(),
          rate: Joi.number().optional(),
          tax: Joi.number().optional(),
        })
  
         const { error , value }= Joi.validate(req.body , schema);

         if(error && error.details){
           return res.status(status.BAD_REQUEST).json(error)
         }

     let newInvoice = await Invoice.create(value);
      res.json({
        msg:"success",
        status:status.ACCEPTED,
        result: newInvoice
      });

      } catch (err) {
        console.log(err.message);
        res.status(status.BAD_REQUEST).send("Server Error");
      }
    },


    async updateInvoice(req, res, next) {
      const { item, qty, date, due, rate, tax } = req.body;

      try {


        const schema = Joi.object().keys({

          item: Joi.string().optional(),
          date: Joi.date().optional(),
          due: Joi.date().optional(),
          qty: Joi.number().integer()
               .optional(),
          rate: Joi.number().optional(),
          tax: Joi.number().optional(),
        })
  
         const { error , value }= Joi.validate(req.body , schema);

         if(error && error.details){
           return res.status(status.BAD_REQUEST).json(error)
         }
        let {id } = req.params

       let updatedInvoice = await Invoice.findByIdAndUpdate({ _id:id } ,value, {new : true});
      res.json({
        msg:"successfully updated",
        status:status.ACCEPTED,
        result: updatedInvoice
      });

      } catch (err) {
        console.log(err.message);
        res.status(status.BAD_REQUEST).send("Server Error");
      }
    },
  };


  
}

module.exports = invoiceController;
