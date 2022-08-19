import mongoose from "mongoose";
import config from "../config";

(async () => {
    try {
        await mongoose.connect(config.URI, {
            useNewUrlParser: true,
            useUniFiedTopology: true,
        });
        console.log("Connect to database MongoDb successfully")
        
    } catch (error) {
        console.error("Error connecting to database Mongo");
    }
})();