import React from "react";
import ReactDOM from "react-dom/client";
// CSS
import "./css/navbar.css";
import "./css/mid.css";
import "./css/footer.css"

// CSS
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
//      Abajo se importan los componentes
import Navbar from "./components/NavBar.jsx";
import Bot from "./components/Bot.jsx";
import { AuthProvider } from "./context/authContext";
//      Arriba se importan los componentes
import AsistenciaPage from "./pages/AsistenciaPage.jsx";
import GenerarOperacionPage from "./pages/GenerarOperacionPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import MisDatosPage from "./pages/MisDatosPage.jsx";
import OperacionConsultaPage from "./pages/OperacionConsultaPage.jsx";
import OperacionPage from "./pages/OperacionPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

import { ProtectedRoute } from "./utils/ProtectedRoute.jsx";
import { Route, Routes } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
      <Navbar />
      <div className="body">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />

          <Route element={<ProtectedRoute />}>
            <Route path="operacion" element={<OperacionPage />} />
            <Route path="consultas" element={<OperacionConsultaPage />} />
            <Route path="generar" element={<GenerarOperacionPage />} />
            <Route path="asistencia" element={<AsistenciaPage />} />
            <Route path="misDatos" element={<MisDatosPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
      <Bot />
  </AuthProvider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();