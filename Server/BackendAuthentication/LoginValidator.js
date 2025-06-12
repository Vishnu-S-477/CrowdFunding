import { IdentifierValidation } from "./LoginValidation.js";

export const LoginValidator = async (type, identifier) => {
  const result = await IdentifierValidation(type, identifier);
  if (result) {
    return "notExist";
  } else {
    return "exist";
  }
};
