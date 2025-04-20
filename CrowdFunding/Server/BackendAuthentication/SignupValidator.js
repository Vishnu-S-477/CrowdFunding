import {
  existPhoneNumber,
  existAccountId,
  existGmailId,
} from "./SignupValidation.js";

export const SignupValidator = (data) => {
  if (data.type == "existPhoneNumber") {
    const existCheck = async () => {
      const result = await existPhoneNumber(data.input);
      if (result) {
        return "exist";
      } else {
        return "notExist";
      }
    };
    return existCheck();
  } else if (data.type == "existAccountId") {
    const existCheck = async () => {
      const result = await existAccountId(data.input);
      if (result) {
        return "exist";
      } else {
        return "notExist";
      }
    };
    return existCheck();
  } else {
    const existCheck = async () => {
      const result = await existGmailId(data.input);
      if (result) {
        return "exist";
      } else {
        return "notExist";
      }
    };
    return existCheck();
  }
};
