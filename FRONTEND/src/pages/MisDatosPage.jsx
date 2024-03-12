import React from "react";
import camara from "../images/camara.png";

export default function MisDatosPage() {

  return (
    <div className="contenedorMisDatos">
      <h2 className="tituloMisDatos">MIS DATOS</h2>

      <div className="datosUsuario">
        <div className="informacionTextualUsuario">
          <label className="labelDatosUsuario" for="nombre">
            Nombre
          </label>
          <input className="inputDatosUsuario" id="nombre" type="text"></input>

          <label className="labelDatosUsuario" for="nombre">
            Correo Electronico
          </label>
          <input className="inputDatosUsuario" id="nombre" type="email"></input>

          <label className="labelDatosUsuario" for="nombre">
            Celular
          </label>
          <input
            className="inputDatosUsuario"
            id="nombre"
            type="number"
          ></input>

          <label className="labelDatosUsuario" for="nombre">
            Domicilio
          </label>
          <input className="inputDatosUsuario" id="nombre" type="text"></input>

          <label className="labelDatosUsuario" for="nombre">
            Fecha de Nacimiento
          </label>
          <input className="inputDatosUsuario" id="nombre" type="date"></input>

          <label className="labelDatosUsuario" for="nombre">
            Libreta Militar
          </label>
          <input className="inputDatosUsuario" id="nombre" type="text"></input>

          <label className="labelDatosUsuario" for="nombre">
            Cedula de ciudadania
          </label>
          <input className="inputDatosUsuario" id="nombre" type="text"></input>
        </div>

        <div className="fotoUsuario">
          <img className=" " src={camara} />
        </div>
      </div>
    </div>
  );
}
