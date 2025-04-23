import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import Signup from "./FrontEndAuthentication/signup";
//import Login from "./FrontEndAuthentication/login";
//import UploadPage from "./UploadPage/uploadPage";
//import MainPage from "./mainPage/mainPage.jsx";
import App from "./app.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
