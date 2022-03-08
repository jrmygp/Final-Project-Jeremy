import { Box } from "@chakra-ui/react";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import Settings from "./Pages/Settings/Settings";
import LoginPage from "./Pages/LoginPage/LoginPage";
import UploadPage from "./Pages/UploadPage/UploadPage"
import NotFoundPage from "./Pages/404/404";
import Nav from "./component/Nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Box paddingX="16" display="flex">
      <BrowserRouter>
        <Nav />
        <Box flex={1}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ProfilePage/:userId" element={<ProfilePage />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/UploadPage" element={<UploadPage/>}/>
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </Box>
  );
}

export default App;
