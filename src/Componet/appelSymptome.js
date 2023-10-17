import React from 'react';
import Symptome from './symptome';
import { listeSymptom1, listeSymptom2 } from './listeSymptome';



const symptomsList = [
  {
    label: 'Symptôme 1',
    component: <Symptome symptoms={listeSymptom1} />,
  },
  {
    label: 'Symptôme 2',
    component: <Symptome symptoms={listeSymptom2} />,
  },

];

export default symptomsList;
