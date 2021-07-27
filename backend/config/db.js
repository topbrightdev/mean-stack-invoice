const config = require('config') ;
const db = config.get('mongoURI');
const mongoose =require('mongoose');



const connectDB = async ()=>{
    try{
        await mongoose.connect(db,
            { 
                useUnifiedTopology: true ,
                useNewUrlParser: true ,
                useCreateIndex: true , 
                useFindAndModify:false
            });
        console.log('MongoDB Connected .....')

    }catch(err){

        
        console.error(err.message);
        //Exit process with Failure
        process.exit(1);

    }
}

module.exports =connectDB;