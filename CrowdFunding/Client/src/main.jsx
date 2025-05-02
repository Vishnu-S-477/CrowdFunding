import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import App from "./app.jsx";
//import MyAccount from "./MyAccount/myAccount";
import CampaignDetail from "./CampaignDetailPage/CampaignDetail.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CampaignDetail />
  </StrictMode>
);
