import {React} from 'react';

function InsertarMaterial ({}) {

    document.querySelectorAll('input[id = "elemento"]').forEach(input => {
        input.oninput = () =>{
            if(input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength);
        };
    });

    return <div className='tarjetaDeMaterial'>

        <div className='informacionMaterial'>
            <label className='seleccionTipoRiesgo' for='tipoRiesgo'>Selec.. Clase</label>
            <select id='tipoRiesgo'>
                <option>Clase...</option>

                <option>1. EXPLOSIVOS</option>
                <option>2. GASES</option>
                <option>3. LIQUIDOS INFLAMABLES</option>
                <option>4. SOLIDOS INFLAMABLES</option>
                <option>5. SUSTANCIAS COMBURENTES - PEROXIDOS ORGANICOS</option>
                <option>6. SUSTANCIAS TOXICAS E INFECCIOSAS</option>
                <option>7. MATERIAL RADIOACTIVO</option>
                <option>8. SUSTANCIAS CORROSIVAS</option>
            </select>

            <label className='seleccionElemento' for='elemento'>Codigo ONU:</label>
            <input id='elemento' type='number' min='0' max='9999' maxLength='4'></input>
            <p className='numeroPiezas'>Numero de piezas</p>
            <input className='insertarNumeroPiezas'  type='number' min='0' max='99'></input>
            <p className='pesoMaterial'>PESO EN LIBRAS</p>
            <input className='insertarPesoLb' type='number' min='0'></input>
        </div>

        <div className='imagenInformacionMaterial'>
        </div>

    </div>
}

export default InsertarMaterial;