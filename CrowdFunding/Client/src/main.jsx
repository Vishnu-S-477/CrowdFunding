import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import Signup from "./FrontEndAuthentication/signup";
import Login from "./FrontEndAuthentication/login";
//import UploadPage from "./UploadPage/uploadPage";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Login />
  </StrictMode>
);
