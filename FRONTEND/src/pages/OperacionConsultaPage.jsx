import React from "react";

export default function OperacionConsultaPage () {
  return (
    <div className="contenedorConsulta">
      <div className="contenedorTiempoLugar">
        <div className="contenedorTiempoSalida">
          <h4 className="tiempoSalida">
            Salida: 00:00 {/*funcion de tiempo de salida*/}
          </h4>
          <h4 className="lugarSalida">
            Bogota D.C{/*funcion de ciduad de salida*/}
          </h4>
        </div>
        <div className="contenedorTiempoTranscurrido">
          <h4 className="tituloTiempoTranscurrido">TIEMPO TRANSCURRIDO</h4>
          <h4 className="tiempoTranscurrido">
            00:00{/*funcion de tiempo transcurrido*/}
          </h4>
        </div>
        <div className="contenedorTiempoLLegada">
          <h4 className="tiempoLlegada">
            Llegada: 00:00 {/*funcion de tiempo de llegada*/}
          </h4>
          <h4 className="lugarLlegada">
            Medellin {/*funcion de ciudad de llegada */}
          </h4>
        </div>
      </div>

      <div className="contenedorInformacionGeneral">
        <div className="informacionVuelo">
          <div className="informacionAvion">
            <ul>
              <h3>Informacion de la Aeronave</h3>
              <li>Matricula: {/*matricula */}</li>
              <li>Tipo de Avion: {/*tipo de avion */}</li>
              <li>
                Capacidad material a bordo:
                {/*informacion de la capicdad segun nave*/}
              </li>
            </ul>
          </div>
          <div className="informacionTripulacion">
            <ul>
              <h3>Informacion tripulantes</h3>
              <li>Piloto: {/* nombres completos del piloto*/}</li>
              <li>Libreta Militar:{/*Libreta militar del piloto */} </li>
            </ul>
            <ul>
              <li>Copiloto: {/*nombres completos del copiloto*/}</li>
              <li>Libreta Militar: {/*nombres completos del copiloto*/}</li>
            </ul>
            {/*Aqui debe se inserant la informacion de la tripulacion */}
          </div>
        </div>
        <div className="informacionCarga">
          <div className="tituloInformacionCarga">
            <h4>MATERIAL A BORDO</h4>
          </div>
          <div className="contenedorMaterialesAbordo">
            <p>Aqui va un componente de informacion</p>
          </div>
        </div>
      </div>
    </div>
  );
}
