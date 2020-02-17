import React from 'react';
import Question from './components/Question';

function App() {
  return (
    <div className="container">
        <header>
            <h1>Gastos semanales</h1>
            <div className="content content-principal">
                <Question />
            </div>
        </header>
    </div>
  );
}

export default App;
