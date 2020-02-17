import React, { useState } from 'react';
import QuestionForm from './components/QuestionForm';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import AvailableBudget from './components/AvailableBudget';

function App() {

    /** State */
    const [ stateBudget, setBudget ] = useState( 0 ),                       // : Presupuesto 
          [ stateAvailableBudget, setAvailableBudget ] = useState( 0 ),     // : Presupuesto Disponible 
          [ stateShowQuestion, setShowQuestion ] = useState( true ),        // : Mostrar/Ocultar Componente QuestionForm
          [ stateExpenses, setExpenses ] = useState([]);                    // : Listado de Gastos

    /** Agrega nuevo gasto */   
    const addExpense = ( expense ) => {
        console .log( 'Gasto', expense );

        /** Establece cambios en el State es decir. Asigna nuevo gasto a listado de gastos */
        setExpenses([
            ...stateExpenses,       // Spread
            expense
        ]);
    }

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
                                    addExpense={ addExpense }
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
