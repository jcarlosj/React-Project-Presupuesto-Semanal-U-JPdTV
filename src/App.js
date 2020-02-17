import React, { useState } from 'react';
import Question from './components/Question';
import Expenses from './components/Expenses';

function App() {

    /** State */
    const [ stateBudget, setBudget ] = useState( 0 ),                       /**: Presupuesto */
          [ stateAvailableBudget, setAvailableBudget ] = useState( 0 );     /**: Presupuesto Disponible */



  return (
    <div className="container">
        <header>
            <h1>Gastos semanales</h1>
            <div className="content content-principal">
                <Question
                    budget={ setBudget }
                    availableBudget={ setAvailableBudget }
                />
                <div className="row">
                    <div className="one-half column">
                        <Expenses />
                    </div>
                    <div className="one-half column">2</div>
                </div>
            </div>
        </header>
    </div>
  );
}

export default App;
