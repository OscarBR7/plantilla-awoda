import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp"; 
import DashboardPage from "./pages/DashboardPage";
import GraficasPage from "./pages/GraficasPage";
import HistorialPage from "./pages/HistorialPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/singin" element={<SignIn />} />
        <Route path="/singup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/graficas" element={<GraficasPage />} />
        <Route path="/historial" element={<HistorialPage />} />        
      </Routes>
    </Router>
  );
}

export default App;
