const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is not defined in environment variables.");
        }
        await mongoose.connect(process.env.MONGO_URI,{});
        console.log("MongoDB connected");
    }
    catch(err){
        console.error("Error connectiong to MongoDB", err);
        process.exit(1);

    }
};

module.exports = connectDB;