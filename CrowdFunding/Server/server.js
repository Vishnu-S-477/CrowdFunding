import express from "express";
import cors from "cors";
import { SignupValidator } from "./BackendAuthentication/SignupValidator.js";
import { generatePresignedUrl } from "./PreSignedUrl/uploadPresignedUrl.js";
import { createAccount } from "./BackendAuthentication/Signup.js";

const port = 3000;
const app = express();

app.use(cors());

app.use(express.json());

app.post("/api/uploadPreSignedUrl", (req, res) => {
  let data = req.body;
  const activateProcess = async () => {
    let result = await generatePresignedUrl(data.name, data.type);
    console.log(result);
    res.json({ url: result });
  };
  activateProcess();
});

app.post("/api/signUpValidation", (req, res) => {
  let data = req.body;
  let existCheck = async () => {
    let result = await SignupValidator(data);
    console.log(result);
    res.json({ status: result });
  };
  existCheck();
});

app.post("/api/createAccount", (req, res) => {
  let data = req.body;
  const createAccounts = async () => {
    let result = await createAccount(
      data.userName,
      data.phoneNumber,
      data.accountId,
      data.gmailId,
      data.password1
    );
    res.json({ status: result });
  };
  createAccounts();
});

app.listen(port, () => {
  console.log("server Started");
});
