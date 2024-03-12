import React from "react";
import iconPreguntasfrecuentes from "../images/info.png";
import iconManualUsuario from "../images/manual.png";
import iconContactenos from "../images/contact.png";
import iconReportarError from "../images/report.png";

export default function  AsistenciaPage () {
    return(
        <div className="contenedorAsistencia">
        <h2 className="tituloAsistencia">¿Necesita Ayuda?</h2>

        <div className="contenedorModulosAsistencia">
          <div className="modulo1Asistencia">
            <div className="contenedorModulo1">
              <div className="descripcionModulo1">
                <h3 className="subtituloAsistencia">Preguntas frecuentes</h3>
                <p className="parrafoAsistencia">
                  Encuentre todo lo relacionado a posibles fallos con la
                  aplicacion dando click
                  <a className="anclaAsistencia" href="#">
                    aqui.
                  </a>
                </p>
              </div>

              <img className="imgModulo1" src={iconPreguntasfrecuentes} />
            </div>

            <div className="contenedorModulo1">
              <div className="descripcionModulo1">
                <h3 className="subtituloAsistencia">Manual de Usuario</h3>
                <p className="parrafoAsistencia">
                  Encuentre el manual de usuario de guia para el uso de la
                  aplicacion dando click
                  <a className="anclaAsistencia" href="#">
                    aqui.
                  </a>
                </p>
              </div>

              <img className="imgModulo1" src={iconManualUsuario} />
            </div>
          </div>

          <div className="modulo2Asistencia">
            <div className="contenedorModulo2">
              <div className="descripcionModulo2">
                <h3 className="subtituloAsistencia">Contactenos</h3>
                <p className="parrafoAsistencia">
                  Contactenos a nuestra linea nacional gratuita abierta las
                  24H
                  <a className="anclaAsistencia" href="#">
                    aqui.
                  </a>
                </p>
              </div>

              <img className="imgModulo2" src={iconContactenos} />
            </div>

            <div className="contenedorModulo2">
              <div className="descripcionModulo2">
                <h3 className="subtituloAsistencia">Reportar un Error</h3>
                <p className="parrafoAsistencia">
                  Para reportar un error encontrado de click{" "}
                  <a className="anclaAsistencia" href="#">
                    aqui
                  </a>{" "}
                  y siga las instrucciones.
                </p>
              </div>

              <img className="imgModulo2" src={iconReportarError} />
            </div>
          </div>
        </div>
      </div>
    )
}