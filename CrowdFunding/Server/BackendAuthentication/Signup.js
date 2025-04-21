import mongoose from "mongoose";

export const createAccount = async (
  userName,
  phoneNumber,
  accountId,
  gmailId,
  password
) => {
  const schema = mongoose.Schema({
    userName: String,
    phoneNumber: Number,
    accountId: String,
    gmailId: String,
    password: String,
  });
  const userModel = mongoose.models.User || mongoose.model("User", schema);
  const newUser = new userModel({
    userName,
    phoneNumber,
    accountId,
    gmailId,
    password,
  });
  try {
    await newUser.save();
    return "success_account_creation";
  } catch (e) {
    return "error in account creation";
  }
};
