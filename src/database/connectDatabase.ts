import { config } from "../config";
import { connect } from "mongoose";
export const connectDatabase = async () => {
    await connect(config.MONGO_URI)
    console.log("Database connected!")
}