const mongoose=require('mongoose');
const MONGO_URI='your mongo uri';

const connectToDb=()=>{
    mongoose.connect(MONGO_URI);
    console.log('connected');
};

module.exports=connectToDb;