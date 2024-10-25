import { connect, disconnect } from "mongoose";

async function connectToDatabase() {
    try {
        // Type assertion to treat it as a string
        const mongoUrl = process.env.MONGO_URL; // This will be string | undefined

        if (!mongoUrl) {
            throw new Error("MONGO_URL environment variable is not defined.");
        }

        await connect(mongoUrl); // Now we can safely use mongoUrl as a string
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Connection error:", error); // Log the actual error for debugging
        throw new Error("Cannot connect to MongoDB");
    }
}

async function disconnectFromDatabase() {
    try {
        await disconnect();
        console.log("Disconnected from MongoDB");
    } catch (error) {
        console.error("Disconnection error:", error);
    }
}

export { connectToDatabase, disconnectFromDatabase };
