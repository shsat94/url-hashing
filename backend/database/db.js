const mongoose=require('mongoose');
const MONGO_URI=process.env.MONGOURI;

const connectToDb=()=>{
    try {
        
        mongoose.connect(MONGO_URI);
        console.log("Successfully Connected to Database");

    } catch (error) {
        console.log(error);
    }
};

module.exports=connectToDb;