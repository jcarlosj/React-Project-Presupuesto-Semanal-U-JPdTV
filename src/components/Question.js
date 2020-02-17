import React, { Fragment, useState } from 'react';
import ErrorMessage from './ErrorMessage';

const Question = () => {

    /** State */
    const [ statusBudget, setBuget ] = useState( 0 ),       /**: Presupuesto */
          [ statusError, setError ] = useState( false );    /**: Error */


    /** Manejador de Cambios el State: Define Presupuesto (Cuando el usuario escribe en un campo del formulario) */
    const handleChange = ( event ) => {
        console .log( parseInt( event .target .value ) );
        setBuget( event .target .value );
    }

    /** Evento que solicita la cita al hacer click en el formulario */
    const submitAddBudget = ( event ) => {
        event .preventDefault();        // Evita el envio por el QueryString por el metodo GET

        console .log( 'Envia', statusBudget );

        /** Evalua si el valor del presupuesto NO es valido */
        if( statusBudget < 1 || isNaN( statusBudget ) ) {
            setError( true );          // Actualiza State
            return;
        }
        setError( false );

    }

    return (
        <Fragment>
            <h2>Ingresa tú presupuesto</h2>
            {   statusError 
                    ?   <ErrorMessage message="Debes ingresar un presupuesto valido" />
                    :   null
            }
            <form
                onSubmit={ submitAddBudget }
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej: 300"
                    onChange={ handleChange }
                />
                <button
                    type="submit"
                    className="button-primary u-full-width"
                >Definir presupuesto</button>
            </form>
        </Fragment>
    );
}

export default Question;