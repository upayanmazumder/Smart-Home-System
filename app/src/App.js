import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./components/404/404";
import LoginPage from "./pages/Auth/Login";
import SignupPage from "./pages/Auth/Signup";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/P/PrivacyPolicy";
import TermsOfService from "./pages/P/TermsOfService";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/*" element={
          <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        } />
        <Route path="/p/*" element={
          <Routes>
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        } />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
