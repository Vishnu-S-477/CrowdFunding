import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app.jsx";
//import MyAccount from "./MyAccount/myAccount";
//import CampaignDetail from "./CampaignDetailPage/CampaignDetail.jsx";
//import FundCard from "./Testing/fundcard";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
