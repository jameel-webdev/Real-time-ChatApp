import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log(`MongoDB connected successfully`);
  } catch (error) {
    console.log(`Error connecting to MongoDB`, error.message);
  }
};
