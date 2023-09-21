import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Connectez-vous à MongoDB
   mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo Connecté")
    
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

export default connectDB;
