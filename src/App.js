import { Box } from "@chakra-ui/react";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import Settings from "./Pages/Settings/Settings";
import LoginPage from "./Pages/LoginPage/LoginPage";
import UploadPage from "./Pages/UploadPage/UploadPage";
import NotFoundPage from "./Pages/404/404";
import Nav from "./component/Nav/Nav";
import NavTop from "./component/NavTop/NavTop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "./Pages/UserPostPage/Post";
import "./assets/Background.css";
import MyProfilePage from "./Pages/MyProfilePage/MyProfilePage";

const routes = [
  {
    path: "/",
    component: <HomePage />,
    sideBar: true,
    navBar: true,
  },
  {
    path: "/MyProfilePage",
    component: <MyProfilePage />,
    sideBar: true,
    navBar: true
  },
  {
    path: "/ProfilePage",
    component: <ProfilePage />,
    sideBar: true,
    navBar: true
  },
  {
    path: "/LoginPage",
    component: <LoginPage />,
    sideBar: false,
    navBar: false
  },
  {
    path: "/Settings",
    component: <Settings />,
    sideBar: true,
    navBar: true
  },
  {
    path: "/UploadPage",
    component: <UploadPage />,
    sideBar: true,
    navBar: true
  },
];

function App() {
  return (
    <Box paddingX="5">
      <BrowserRouter>
        <Routes>
          {routes.map((route) => {
            console.log(route.path, route.navBar)
            if (route.navBar) {
              return <Route path={route.path} element={<NavTop />} />;
            }
          })}
        </Routes>
        <Box display="flex">
          <Routes>
            {routes.map((route) => {
              if (route.sideBar) {
                return <Route path={route.path} element={<Nav />} />;
              }
            })}
          </Routes>
          <Box flex={1}>
            <Routes>
              {routes.map((route) => {
                return <Route path={route.path} element={route.component} />;
              })}
              {/* <Route path="/" element={<HomePage />} />
            <Route path="/ProfilePage/:userId" element={<ProfilePage />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/UploadPage" element={<UploadPage />} />
            <Route path="/UserPostPage" element={<Post />} />
            <Route path="/MyProfilePage" element={<MyProfilePage />} />
            <Route path="/*" element={<NotFoundPage />} /> */}
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </Box>
  );
}

export default App;
