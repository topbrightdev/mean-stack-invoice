const status = require('http-status');
const Invoice = require("../models/invoice.model");
const Joi = require('@hapi/joi');


function invoiceController() {
  return {
    async findAll(req, res, next) {

      let result = await Invoice.find({})
      
      if(!result){
        res.status(status.INTERNAL_SERVER_ERROR).send("Server error")
      }
      res.status(status.ACCEPTED).send(result)
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
  };
}

module.exports = invoiceController;
