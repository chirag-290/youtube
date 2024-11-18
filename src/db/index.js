import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async() =>{
    try {
        const connectioninst=await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)

        console.log(`\n mongodb connected!! : db host"${connectioninst.connection.host}`);

        
    } catch (error) {

        console.log("Mongo connection error",error);
        process.exit(1);
        
    }

   

}

export default connectDB;