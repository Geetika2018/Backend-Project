// require("dotenv").config({path:"./.env"});
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./.env" });

// import mongoose from "mongoose";
// import {DB_NAME} from "./constants.js";

connectDB();





//------------------------------ use the ifee pattern to connect to the database immediately when the file is imported--------------------------------------
//  this the basic one to connect to the database without using the connectDB function and just using the mongoose.connect method directly in the index.js file. But it is not recommended to use this approach as it can lead to issues with error handling and can make the code less modular and harder to maintain. It is better to use a separate function like connectDB to handle the database connection and error handling in a more organized way.

/*
import express from "express";
const app = express();

(async() =>{
    try{
          await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
          app.on("error", (err) => {
            console.error("Error connecting to the database", err);
            throw err;
          });
        //   console.log("Connected to the database successfully");

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    }
    catch(err){
        console.error("Error connecting to the database", err);
        throw err;
    }
})()


*/