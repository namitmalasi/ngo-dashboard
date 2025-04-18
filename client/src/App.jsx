import "./App.css";
import Home from "./pages/Home";
import ReportForm from "./pages/ReportForm";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/submit-report" element={<ReportForm />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
