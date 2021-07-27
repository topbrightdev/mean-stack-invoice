const express = require('express');
const router = express.Router();
const invoiceController =require('../controllers/invoive.Controller')




router.get('/invoice' , invoiceController().findAll)

router.post('/invoice' , invoiceController().createInvoice)

module.exports = router;