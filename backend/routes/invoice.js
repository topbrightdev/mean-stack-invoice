const express = require('express');
const router = express.Router();
const invoiceController =require('../controllers/invoive.Controller')
const authController = require('../controllers/auth.Controller')
const registerController = require('../controllers/register.Controller')
const auth = require('../middleware/auth');


router.get('/invoice' , invoiceController().findAll)
router.get('/invoice/:id' , invoiceController().findOne);
router.post('/invoice' , invoiceController().createInvoice);
router.delete('/invoice/:id' , invoiceController().deleteOne)
router.put('/invoice/:id' , invoiceController().updateInvoice)
// router.post('/register' , authController().registerUser)
router.post('/register' , registerController().regUser)
router.post('/login' ,auth, registerController().loginUser)



module.exports = router;