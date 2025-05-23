import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./FrontEndAuthentication/login.jsx";
import Signup from "./FrontEndAuthentication/signup.jsx";
import MainPage from "./mainPage/mainPage.jsx";
import UploadPage from "./UploadPage/uploadPage.jsx";
import CampaignDetail from "./CampaignDetailPage/CampaignDetail.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/detailPage" element={<CampaignDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
