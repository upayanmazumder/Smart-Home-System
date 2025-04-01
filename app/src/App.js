import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./components/404/404";
import LoginPage from "./pages/Auth/Login";
import SignupPage from "./pages/Auth/Signup";
import DashboardPage from "./pages/DashboardPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/P/PrivacyPolicy";
import TermsOfService from "./pages/P/TermsOfService";
import ForgotPasswordPage from "./pages/Auth/ForgotPassword";

function App() {
  const AuthRoute = ({ children }) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    useEffect(() => {
      if (!storedUser) {
        navigate("/auth/login");
      }
    }, [storedUser, navigate]);

    return storedUser ? children : null;
  };

  const GuestRoute = ({ children }) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    useEffect(() => {
      if (storedUser) {
        navigate("/dashboard");
      }
    }, [storedUser, navigate]);

    return !storedUser ? children : <Navigate to="/dashboard" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/auth/*"
          element={
            <GuestRoute>
              <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="signup" element={<SignupPage />} />
                <Route
                  path="forgot-password"
                  element={<ForgotPasswordPage />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </GuestRoute>
          }
        />
        <Route
          path="/p/*"
          element={
            <Routes>
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="terms-of-service" element={<TermsOfService />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AuthRoute>
              <DashboardPage />
            </AuthRoute>
          }
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
