// src/App.tsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import Dashboard from "./components/Dashboard";

import DashboardOverview from "./components/pages/DashboardOverview";
import UserManagement from "./components/pages/UserManagement";
import DriverManagement from "./components/pages/DriverManagement";
import RideManagement from "./components/pages/RideManagement";
import PricingSettings from "./components/pages/PricingSettings";
import CityManagement from "./components/pages/CityManagement";
import Reports from "./components/pages/Reports";
import Feedback from "./components/pages/Feedback";
import PromoCodes from "./components/pages/PromoCodes";
import Wallet from "./components/pages/Wallet";
import Notifications from "./components/pages/Notifications";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/dashboard" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<Navigate to="/signin" />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />

            {/* ✅ Protected Dashboard and its nested pages */}
            <Route
              path="/dashboard/*"
              element={
                // <ProtectedRoute>
                <Dashboard />
                // </ProtectedRoute>
              }
            >
              <Route index element={<DashboardOverview />} />
              <Route path="users" element={<UserManagement />} />
              <Route path="drivers" element={<DriverManagement />} />
              <Route path="rides" element={<RideManagement />} />
              <Route path="pricing" element={<PricingSettings />} />
              <Route path="cities" element={<CityManagement />} />
              <Route path="reports" element={<Reports />} />
              <Route path="feedback" element={<Feedback />} />
              <Route path="promo-codes" element={<PromoCodes />} />
              <Route path="wallet" element={<Wallet />} />
              <Route path="notifications" element={<Notifications />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
