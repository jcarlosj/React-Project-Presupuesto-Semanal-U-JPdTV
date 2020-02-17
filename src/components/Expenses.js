import React, { useState } from 'react';

const Expenses = () => {

    /** State: Podr[ia definirse como un objeto que contenga ambos valores] */
    const [ stateDescription, setDescription ] = useState( '' ),        // Descripcion del Gasto
          [ stateAmount, setAmount ] = useState( 0 );                   // Monto del Gasto

    /** Evento que solicita la cita al hacer click en el formulario */
    const submitAddExpense = ( event ) => {
        event .preventDefault();        // Evita el envio por el QueryString por el metodo GET

        console .log( 'Envia', stateDescription, stateAmount );

    }

    return (
        <form 
            className="form-expenses"
            onSubmit={ submitAddExpense }
        >
            <h3>Registra tu gasto</h3>
            <div className="field">
                <label>Descripción del gasto</label>
                <input  
                    type="text"
                    placeholder="Ej: Transporte"
                    className="u-full-width"
                    value={ stateDescription }
                    onChange={ event => setDescription( event .target .value ) }        // Actualiza el State al lanzar el evento usando un Callback
                />
            </div>
            <div className="field">
                <label>Cantdad del gasto</label>
                <input  
                    type="number"
                    placeholder="Ej: 30"
                    className="u-full-width"
                    value={ stateAmount }
                    onChange={ event => setAmount( parseInt( event .target .value ) ) }             // Actualiza el State al lanzar el evento usando un Callback
                />
            </div>

            <input 
                type="submit"
                value="Agregar Gasto"
                className="button-primary u-full-width"
            />
        </form>
    );
}

export default Expenses;