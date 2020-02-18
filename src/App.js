import React, { useState, useEffect } from 'react';
import QuestionForm from './components/QuestionForm';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import AvailableBudget from './components/AvailableBudget';

function App() {

    /** State */
    const [ stateBudget, setBudget ] = useState( 0 ),                       // : Presupuesto 
          [ stateAvailableBudget, setAvailableBudget ] = useState( 0 ),     // : Presupuesto Disponible 
          [ stateShowQuestion, setShowQuestion ] = useState( true ),        // : Mostrar/Ocultar Componente QuestionForm
          [ stateExpenses, setExpenses ] = useState([]),                    // : Listado de Gastos
          [ stateExpense, setExpense ] = useState({});                      // : Gasto

    /** Seguimiento al State */
    useEffect( () => {

        /** Establece cambios en el State es decir. Asigna nuevo gasto a listado de gastos */
        setExpenses([
            ...stateExpenses,       // Spread
            stateExpense
        ]);

        console .group( 'App:useEffect' );
        console .log( 'stateExpense', stateExpense );
        console .log( 'stateExpenses', stateExpenses );
        console .groupEnd();

        /** TO DO: Evitar que muestre el primer objeto como vacio ExpenseList [{…}] */

    }, [stateExpense] );

  return (
    <div className="container">
        <header>
            <h1>Gastos semanales</h1>
            <div className="content content-principal">
                {   stateShowQuestion   // Carga Condicional de Componentes
                    ? ( // Return Implicito
                        <QuestionForm
                            budget={ setBudget }
                            availableBudget={ setAvailableBudget }
                            show={ setShowQuestion }
                        />
                    )
                    : ( // Return Implicito
                        <div className="row">
                            <div className="one-half column">
                                <ExpenseForm
                                    addExpense={ setExpense }
                                />
                            </div>
                            <div className="one-half column">
                                <ExpenseList 
                                    expenses={ stateExpenses }
                                />
                                <AvailableBudget 
                                    budget={ stateBudget }
                                    availableBudget={ stateAvailableBudget }
                                />
                            </div>
                        </div>
                    )
                }
            
            </div>
        </header>
    </div>
  );
}

export default App;
