import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB =async()=>{

    try{
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MONGODB STATUS: Connected to the database successfully ${connectionInstance.connection.host}\n`);
    }
    catch(err){
        console.error("MONGODB_ERROR: connection FAILED", err);
        process.exit(1);
        throw err;  
    }
}

export default connectDB;