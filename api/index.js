const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(()=> console.log("DB Connected Successfully!"))
    .catch((err) => console.log(err))

app.listen(8800, ()=>{
    console.log("Backend server is running...");
});