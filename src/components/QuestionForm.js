import React, { Fragment, useState } from 'react';
import ErrorMessage from './ErrorMessage';

import PropTypes from 'prop-types';

const QuestionForm = ({ budget, availableBudget, show }) => {          // Destructuring props

    /** State */
    const [ statusBudget, setBudget ] = useState( 0 ),       /**: Presupuesto */
          [ statusError, setError ] = useState( false );     /**: Error */


    /** Manejador de Cambios el State: Define Presupuesto (Cuando el usuario escribe en un campo del formulario) */
    const handleChange = ( event ) => {
        console .log( parseInt( event .target .value ) );
        setBudget( event .target .value );
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

        /** Envia el valor del presupuesto al Componente Padre */
        budget( statusBudget );                 // Presupuesto
        availableBudget( statusBudget );        // Presupuesto Disponible
        show( false );                          // Oculta componente

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

/** Verificación de Tipos usando PropTypes */
QuestionForm .propTypes = {
    budget: PropTypes .func.isRequired, 
    availableBudget: PropTypes .func.isRequired, 
    show: PropTypes .func.isRequired
}

export default QuestionForm;