const express= require('express');
const connectDB = require('../config/db');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')



// Connect Database
connectDB();

// Intialize Middleware
app.use('/' ,(req, res, next)=>{
    console.log('Time: %d' , Date.now())
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
// app.use('/api/auth', require('./routes/api/auth'))
// app.use('/api/profile', require('./routes/api/profile'))
// app.use('/api/posts', require('./routes/api/posts'))


//Defing Port 
const PORT = process.env.PORT || 5000;

app.listen(PORT ,()=>{
    console.log(`server started on port ${PORT}`)
});