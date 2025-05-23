import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import SigninPage from "./pages/SigninPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/profile" element={<ProfilePage />} />

      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default App;
