import React, { useState } from 'react';
import Stepper from './Componet/steeper';
import symptomsList from './Componet/appelSymptome';
import AIDE from './Photo/aide.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './CSS/steeper.css';
import URGE from'./Photo/Urge.png';
import EYE from './Photo/Logour.png'
function App() {
  const [selectedSymptom, setSelectedSymptom] = useState(null);

  return (
    <div>
      <header>
        <img src={URGE} alt='icone'></img>
        <FontAwesomeIcon icon={faHome} />
        <img src={EYE} alt='icone'></img>
      </header>
      <Stepper symptoms={symptomsList} />
      <img src={AIDE} alt="icone" class="fixed-right-image" />

    </div>
  );
}

export default App;
