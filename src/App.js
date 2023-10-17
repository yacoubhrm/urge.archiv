import React from 'react';
import Stepper from './Componet/steeper';
import symptomsList from './Componet/appelSymptome';

function App() {
  return (
    <div>
      <Stepper symptoms={symptomsList} />
    </div>
  );
}

export default App;
