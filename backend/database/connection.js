import mongoose from 'mongoose';
import { ENV_VARS } from '../utils/envVars.js';

export async function dbConnection() {
    try {
        await mongoose.connect(ENV_VARS.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("error in dbConnection", error);
        console.log("Failed to connect to DB");
    }
}