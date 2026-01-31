import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import ArtistsPage from "./pages/ArtistsPage";
import OrganisationsPage from "./pages/OrganisationsPage";
import Register from "./pages/Register";
import Login from "./pages/Login";

// Dashboards (future-ready)
import ArtistDashboard from "./pages/ArtistDashboard";
import OrganisationDashboard from "./pages/OrganisationDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<ArtistsPage />} />
        <Route path="/organisations" element={<OrganisationsPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboards */}
        <Route
          path="/artist/dashboard"
          element={
            <ProtectedRoute role="artist">
              <ArtistDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/organisation/dashboard"
          element={
            <ProtectedRoute role="organisation">
              <OrganisationDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
