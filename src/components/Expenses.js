import React, { useState } from 'react';
import ErrorMessage from './ErrorMessage';

import shortid from 'shortid';

const Expenses = ({ addExpense }) => {      // Destructuring props

    /** State: Podria definirse como un objeto que contenga ambos valores] */
    const [ stateDescription, setDescription ] = useState( '' ),        // : Descripcion del Gasto
          [ stateAmount, setAmount ] = useState( 0 ),                   // : Monto del Gasto
          [ statusError, setError ] = useState( false );                // : Error 

    /** Evento que solicita la cita al hacer click en el formulario */
    const submitAddExpense = ( event ) => {
        event .preventDefault();        // Evita el envio por el QueryString por el metodo GET

        console .log( 'Envia', stateDescription, stateAmount );

        /** Evalua si el valor del presupuesto NO es valido */
        if( stateAmount < 1 || isNaN( stateAmount ) || stateDescription .trim() === '' ) {
            setError( true );          // Actualiza State
            return;
        }
        setError( false );

        /** Envia detalles del gasto al Componente Padre */
        const expense = {
            id: shortid .generate(),
            description: stateDescription,
            amount: stateAmount
        }

        /** Agrega nuevo gasto */
        addExpense( expense );

    }

    return (
        <form 
            className="form-expenses"
            onSubmit={ submitAddExpense }
        >
            <h3>Registra tu gasto</h3>
            {   statusError 
                    ?   <ErrorMessage message="Ambos campos son obligatorios, deben ser valores validos" />
                    :   null
            }
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