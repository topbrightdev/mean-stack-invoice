const status = require('http-status');
const Register = require('../models/register.model');
const bcrypt = require("bcrypt");
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');

function registerController() {

  return {

    async regUser(req, res, next) {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

      const { name, email, username , password ,password_confirmation } = req.body;

      try {

        // See if user exists

        let user = await Register.findOne({ email });
        if (user) {
            res.status(400).json({ errors: [{ msg: 'Email Already Exists' }] })
        }

       

        user = new Register({
            name,
            email,
            username,
            password,
            password_confirmation

        })

        // Encrypt password
        const salt = await bcrypt.genSalt(10);

        // In this , its taking as a plain password and making it hash
        // Anything returning promise make sure you use await

        user.password = await bcrypt.hash(password, salt);
        await user.save();

        // Return JsonWebtoken
        const payload = {
            user: {
                id: user.id
            }
        }
        const privatekey = config.get('jwtSecret');
        
        jwt.sign(
            payload,
            privatekey,
            { expiresIn: 360000 },
          
            (err, token) => {
                if (err) throw err;
                res.json({ token })
            }
        );




    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error')
    }


    },

    async loginUser(req , res , next){

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;

        try {

            // See if user exists

            let user = await Register.findOne({ email });
            if (!user) {
                res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })
            }

         // @comapring plain password and user password
         
            const isMatch = await bcrypt.compare(password , user.password)
          
            if(!isMatch){
                res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }]})  
            }

         

            // Return JsonWebtoken
            const payload = {
                user: {
                    id: user.id
                }
            }
            const privatekey = config.get('jwtSecret');
            
            jwt.sign(
                payload,
                privatekey,
                { expiresIn: 360000 },
              
                (err, token) => {
                    if (err) throw err;
                    res.json({
                        msg:"login success",
                         token })
                }
            );




        } catch (err) {
            console.error(err.message);
            res.status(500).send('server error')
        }


    }


   
  };


  
}

module.exports = registerController;
