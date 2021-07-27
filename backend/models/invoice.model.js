const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");


const InvoiceSchema = new mongoose.Schema({
  item: { type: String, required: true },

  qty: { type: Number , required: true },

  date: { type: Date , required: true },

  due: { type: Date , required: true },

  rate: { type: Number },

  tax: { type: Number }
});

InvoiceSchema.plugin(uniqueValidator);

module.exports =  mongoose.model("Invoice", InvoiceSchema);
