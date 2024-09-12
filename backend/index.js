const express=require('express');
const connectToDb = require('./database/db');
const port=5000;
const cors = require('cors');

const app=express();
connectToDb();

app.use(cors());
app.use(express.json());

//routes
app.use('/',require('./routes/shorturl'));
app.use('/',require('./routes/redirection'));


app.listen(port,()=>{
    console.log(`App is running at port ${port}`);
})