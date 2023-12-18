import React, { useState } from 'react';

const Resultado = ({total, cantidad, plazo}) => {
    return ( 
        <div>
            <div className="resultado">
                <h2>Cotizacion:</h2>
                <p>La cantidad solicitada es: ${cantidad}</p>
                <p>A pagar en: {plazo} meses</p>
                <p>Su pago mensual con interes incluido es de: ${(total / plazo).toFixed(2)}</p>
                <p>Total a pagar: ${total}</p>

            </div>    
            <div>
                <button className='btnGuardar' onClick={()=>{console.log("hiciste click")}}>Guardar en el historial</button>
            </div> 
        </div>
     );
}
 
export default Resultado ;