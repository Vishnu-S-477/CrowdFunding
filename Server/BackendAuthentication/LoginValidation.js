import mongoose from "mongoose";

export const IdentifierValidation = async (identifierType, identifier) => {
  const schema = mongoose.Schema({
    userName: String,
    phoneNumber: Number,
    accountId: String,
    gmailId: String,
    password: String,
  });
  const userModel = mongoose.models.User || mongoose.model("User", schema);

  if (identifierType == "phoneNumber") {
    const phoneNumberExist = await userModel.find({ phoneNumber: identifier });

    if (phoneNumberExist.length == 0) {
      return true;
    } else {
      return false;
    }
  } else {
    const gmailIdExist = await userModel.find({ gmailId: identifier });

    if (gmailIdExist.length == 0) {
      return true;
    } else {
      return false;
    }
  }
};
