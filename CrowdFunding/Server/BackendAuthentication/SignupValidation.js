import mongoose from "mongoose";
import mongoDbConnection from "../DataBase/mongoDbConnection.js";
mongoDbConnection();

export const existPhoneNumber = async (phoneNumber) => {
  const schema = mongoose.Schema({
    userName: String,
    phoneNumber: Number,
    accountId: String,
    gmailId: String,
    password: String,
  });
  const phoneNumberModel =
    mongoose.models.User || mongoose.model("User", schema);
  const result = await phoneNumberModel.find({ phoneNumber: phoneNumber });
  if (result.length == 0) {
    return false;
  } else {
    return true;
  }
};

export const existAccountId = async (accountId) => {
  const schema = mongoose.Schema({
    accountId: String,
  });
  const existAccountIdModel =
    mongoose.models.User || mongoose.model("User", schema);
  const result = await existAccountIdModel.find({ accountId: accountId });
  if (result.length == 0) {
    return false;
  } else {
    return true;
  }
};

export const existGmailId = async (gmailId) => {
  const schema = mongoose.Schema({
    gmailId: String,
  });
  const gmailIdModel = mongoose.models.User || mongoose.model("User", schema);
  const result = await gmailIdModel.find({ gmailId: gmailId });
  if (result.length == 0) {
    return false;
  } else {
    return true;
  }
};
