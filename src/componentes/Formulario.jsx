import React, { useState } from "react";
import { calcularTotal } from "../calcularTotal";

const Formulario = ({cantidad, setCantidad, plazo, setPlazo, setTotal}) => {

    const [error, setError] = useState(false);

    const calcularPrestamo = e => {
        e.preventDefault();
        if (cantidad === 0 || plazo === "" ) {
            setError(true);
            return;
        }
        setError(false);

        const total = calcularTotal(cantidad,plazo);
        setTotal(total)
        // console.log(total);
    }
     
    // export default ;

    return ( 
        <>
        <form onSubmit={calcularPrestamo}>
            <div className="column">
                <div>
                    <label>Cantidad prestamo</label>
                    <input type="number" placeholder="Ej: $3000"
                        onChange={(e) => setCantidad(e.target.value)}
                    />
                </div>
                <div>
                    <label>Plazo de pago</label>
                    <select onChange={(e) => setPlazo(e.target.value)}>
                        <option value="">Seleccionar</option>
                        <option value="3">3 meses</option>
                        <option value="6">6 meses</option>
                        <option value="12">12 meses</option>
                        <option value="18">18 meses</option>
                    </select>
                </div>
            </div>
            <div className="btnSubmit">
                <input type="submit" value="Calcular"></input>
            </div>
        </form>
        {(error) ? <p className="error">Todos los campos son obligatorios</p> : ""}
        </>
     );
}
 
export default Formulario ;