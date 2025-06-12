import mongoose from "mongoose";

const mongoURI =
  "mongodb+srv://2022peccb287:2KwK45WkXGjPYCgi@cluster.w6owg.mongodb.net/?retryWrites=true&w=majority&appName=cluster";

const mongoDbConnection = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB Connection Established Successfully");
  } catch (e) {
    console.log("Error In Access MongoDB Connection Establishment");
  }
};

export default mongoDbConnection;
