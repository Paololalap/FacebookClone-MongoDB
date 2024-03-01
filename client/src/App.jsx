//App.jsx

import "./reset.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import MaintenancePage from "./Pages/MaintenancePage";
import LoginFailedPage from "./Pages/LoginFailedPage";
import React from "react";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/loginfailed' element={<LoginFailedPage />} />
        <Route path='/maintenance' element={<MaintenancePage />} />
      </Routes>
    </Router>
  );
}

