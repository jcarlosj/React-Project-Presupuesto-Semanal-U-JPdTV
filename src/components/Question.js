import React, { Fragment } from 'react';

const Question = () => {
    return (
        <Fragment>
            <h2>Ingresa tú presupuesto</h2>
            <form>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej: 300"
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