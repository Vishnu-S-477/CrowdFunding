import express from "express";
import cors from "cors";
import { SignupValidator } from "./BackendAuthentication/SignupValidator.js";

const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/server", (req, res) => {
  let data = req.body;
  if (data.operation == "SignupValidation") {
    let existCheck = async () => {
      let result = await SignupValidator(data);
      console.log(result);
      res.json({ status: result });
    };
    existCheck();
  }
});

app.listen(port, () => {
  console.log("server Started");
});
