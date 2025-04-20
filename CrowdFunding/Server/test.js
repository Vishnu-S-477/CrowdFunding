import mongoose from "mongoose";
import mongoDbConnection from "./DataBase/mongoDbConnection.js";
mongoDbConnection();
async function Testing() {
  try {
    const schema = mongoose.Schema({
      name: String,
      phoneNumber: Number,
      accountId: String,
      gmailId: String,
    });
    const User = mongoose.model("User", schema);
    const newUser = new User({
      name: "Sneha V",
      phoneNumber: 6380013622,
      accountId: "ur32y838rebwfuhse.fhsdfiQY7RYQWLUIFLFDS",
      gmailId: "vishnus082005@gmail.com",
    });
    await newUser.save();
    console.log("Data Stored Succ");
  } catch (e) {
    console.log("Error in Data Storage", e);
  }
}
Testing();
