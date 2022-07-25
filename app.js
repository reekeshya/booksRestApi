const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000

// connect to mongoDB atlas
mongoose
.connect(
    process.env.MONGO_URL,
    {userNewIParser:true}
    )
    .then(() => {
        console.log("Connected to mongoDB atlas!");
    }).catch(error => {
        console.log("Something went wrong",error)
    })
    
// start server
app.listen(PORT, () => {
    console.log("Server is started on port ", PORT);
});