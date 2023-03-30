const express = require("express");
const mongoose = require("mongoose");
const app = express();

const uri = 'mongodb+srv://*******:******@mycluster.2tyy3ze.mongodb.net/?retryWrites=true&w=majority';

async function conect(){
    try{
        mongoose.connect(uri);
        console.log("Connected to MongoDB");
    }catch (err) {
        console.error(err);
    }
}

conect();

app.listen(8000, () => {
  console.log("Server started on port 8000");
});