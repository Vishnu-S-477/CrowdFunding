import mongoose from "mongoose";
import bcrypt from "bcrypt";

export const Login = async (identifierType, identifier, password) => {
  const schema = mongoose.Schema({
    userName: String,
    phoneNumber: Number,
    accountId: String,
    gmailId: String,
    password: String,
  });

  const userModel = mongoose.models.User || mongoose.model("User", schema);

  let userDocument;

  if (identifierType == "phoneNumber") {
    userDocument = await userModel.findOne({ phoneNumber: identifier });
  } else {
    userDocument = await userModel.findOne({ gmailId: identifier });
  }

  const validUser = await bcrypt.compare(password, userDocument.password);

  return validUser;
};
