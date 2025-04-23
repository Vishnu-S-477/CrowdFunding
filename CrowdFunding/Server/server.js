import express from "express";
import cors from "cors";
import { SignupValidator } from "./BackendAuthentication/SignupValidator.js";
import { generatePresignedUrl } from "./PreSignedUrl/uploadPresignedUrl.js";
import { createAccount } from "./BackendAuthentication/Signup.js";
import { LoginValidator } from "./BackendAuthentication/LoginValidator.js";
import { Login } from "./BackendAuthentication/Login.js";
import session from "express-session";

const port = 3000;
const app = express();

app.use(
  cors({
    orogin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  session({
    secret: "sneha@vishnu",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60,
      secure: false,
    },
  })
);

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
  req.session.phoneNumber = data.phoneNumber;
  req.session.IsLogin = true;
  req.session.accountId = data.accountId;
  req.session.gmailId = data.gmailId;
  console.log(req.session.gmailId);
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

app.post("/api/loginValidation", (req, res) => {
  let data = req.body;
  const existCheck = async () => {
    const status = await LoginValidator(data.type, data.identifier);
    res.json({ status });
  };
  existCheck();
});

app.post("/api/login", (req, res) => {
  let data = req.body;
  const loginVerify = async () => {
    const result = await Login(data.type, data.identifier, data.password);
    console.log("Below is Check");
    console.log(result);
    res.json({ status: result });
  };
  loginVerify();
});

app.post("/api/createCampaign", (req, res) => {
  let data = req.body;
});

app.listen(port, () => {
  console.log("server Started");
});
