const mongoose=require('mongoose');
const MONGO_URI='mongodb://localhost:27017/urlhashing';

const connectToDb=()=>{
    mongoose.connect(MONGO_URI);
    console.log('connected');
};

module.exports=connectToDb;