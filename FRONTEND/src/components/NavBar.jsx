import React from "react";
import { useAuth } from "../context/authContext.jsx";

function Navbar() {
  const { isAuthenticated, logOut } = useAuth();

  return (
    <div className="header">
      <div className="logo">
        <h1>RIMPA</h1>
      </div>

      <div className="logoDescript">
        <p>
          REGISTRO E IDENTIFICACION DE MERCANCIAS PELIGROSAS
          <br />
          EN LA AVIACION MILITAR
        </p>
      </div>

      {!isAuthenticated ? (
        <div className="ancles2">
          <a to href="/">
            Login
          </a>
          <a to href="/register">
            Registrarse
          </a>
        </div>
      ) : (
        <div className="ancles2">
          <a to href="/misDatos">
            Mis datos
          </a>
          <a to href="/operacion">
            Operacion
          </a>
          <a to href="/asistencia">
            Asistencia
          </a>
          <button
            onClick={() => {
              logOut();
            }}
          >
            Cerrar Sesion
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
