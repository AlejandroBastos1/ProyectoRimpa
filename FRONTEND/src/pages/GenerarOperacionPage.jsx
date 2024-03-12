import React from "react";
import { useState } from "react";
import InsertarMaterial from "../components/InsertarMaterial.jsx";

export default function GenerarOperacionPage() {
  const [componentesInsertados, setComponentesInsertados] = useState([]);

  const addMaterial = () => {
    const nuevoComponente = <InsertarMaterial key={Date.now()} />;
    setComponentesInsertados((prevComponentes) => [
      ...prevComponentes,
      nuevoComponente,
    ]);
  };

  const deleteMaterial = () => {
    setComponentesInsertados((prevComponentes) => prevComponentes.slice(0, -1));
  };
  return (
    <div className="contenedorGenerarOperacion">
      <div className="tituloGenerarOperacion">
        <h2>CREACION DE OPERACION</h2>
        <button>Enviar</button>
      </div>

      <div className="contenedorAggInfoMate">
        <div className="contenedorInfo">
          <div className="contenedorAvion">
            <div className="contenedorMatricula">
              <label className="seleccionMatricula" for="matricula">
                ELIJA MATRICULA:
              </label>
              <select id="matricula" name="matricula">
                <option> Mat1 </option>
                <option> Mat2 </option>
                <option> Mat3 </option>
                <option> Mat4 </option>
              </select>
            </div>

            <div className="contenedorTipoAvion">
              <p>Tipo de avion:</p>
            </div>

            <div className="contenedorCapacidad">
              <p>Capacidad:</p>
            </div>
          </div>

          <div className="contenedorTripulacion1">
            <div className="contenedorLibretaMilitarPil">
              <p>Lib. militar de Piloto</p>
              <input type="number" min="0"></input>
            </div>

            <div className="contenedorLibretaMilitarCop">
              <p>Lib. militar de Copiloto</p>
              <input type="number" min="0"></input>
            </div>

            <div className="contenedorTripulacion2">
              <label className="seleccionTripulacion" for="matricula">
                ELIJA TRIPULACION:
              </label>
              <select id="tripulacion" name="tripulacion">
                <option> Trip1 </option>
                <option> Trip2 </option>
                <option> Trip3 </option>
                <option> Trip4 </option>
              </select>
            </div>
          </div>

          <div className="contenedorDesp">
            <div className="contenedorLugarDespegue">
              <p> Seleccione lugar de despegue: </p>
              <select>
                <option></option>
                <option>Lugar 1</option>
                <option>Lugar 2</option>
                <option>Lugar 3</option>
              </select>
            </div>
            <div className="contenedorHoraDespegue">
              <p> Seleccione hora de despegue: </p>
              <select>
                <option></option>
                <option>Hora despegue 1</option>
                <option>Hora despegue 2</option>
                <option>Hora despegue 3</option>
              </select>
            </div>
            <div className="contenedorLugarAterrizaje">
              <p> Seleccione lugar de aterrizaje: </p>
              <select>
                <option></option>
                <option>Lugar 1</option>
                <option>Lugar 2</option>
                <option>Lugar 3</option>
              </select>
            </div>
            <div className="contenedorHoraAterrizaje">
              <p> Seleccione hora de aterrizaje: </p>
              <select>
                <option></option>
                <option>Hora aterrizaje 1</option>
                <option>Hora aterrizaje 2</option>
                <option>Hora aterrizaje 3</option>
              </select>
            </div>
          </div>
        </div>

        <div className="contenedorMaterial">
          <div className="tituloMaterialABordo">
            <p>MATERIAL A BORDO</p>
          </div>
          <div className="botonesMaterialABordo">
            <button onClick={addMaterial} className="botonAñadir">
              añadir
            </button>
            <button onClick={deleteMaterial} className="botonEliminar">
              eliminar
            </button>
          </div>
          <div className="contenidoMateriales">
            {componentesInsertados.map((componente, index) => (
              <div key={index}>{componente}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
