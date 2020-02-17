import React from 'react';

const Expenses = () => {
    return (
        <form className="form-expenses">
            <h3>Registra tu gasto</h3>
            <div className="field">
                <label>Descripción del gasto</label>
                <input  
                    type="text"
                    placeholder="Ej: Transporte"
                    className="u-full-width"
                />
            </div>
            <div className="field">
                <label>Cantdad del gasto</label>
                <input  
                    type="number"
                    placeholder="Ej: 30"
                    className="u-full-width"
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