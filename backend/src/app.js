const express= require('express');
const connectDB = require('../config/db');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
var logger = require('morgan')



// Connect Database
connectDB();

// Intialize Middleware
app.use(logger('dev'))

app.use((error , req, res , next) =>{
    res.status(error.status || 500);
    return res.json({
        error:{
            message:error.message,
        }
    })
   next();
})
app.use(cors());
app.use(bodyParser.json());
app.use(express.json({extended : false}));


app.get('/',(req , res)=>{
    res.send('API Running');
})

// Define Routes
 app.use('/api', require('.././routes/invoice'))
// app.use('/api/profile', require('./routes/api/profile'))
// app.use('/api/posts', require('./routes/api/posts'))


//Defing Port 
const PORT = process.env.PORT || 5000;

app.listen(PORT ,()=>{
    console.log(`server started on port ${PORT}`)
});