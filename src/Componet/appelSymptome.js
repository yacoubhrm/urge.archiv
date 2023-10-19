import React from 'react';
import Symptome from './symptome';
import { listeSymptom1, listeSymptom2, listeSymptom3 } from './listeSymptome';

const symptomsList = [
  {
    label: 'Symptôme 1',
    component: <Symptome symptoms={listeSymptom1}  />,
  },
  {
    label: 'Symptôme 2',
    component: <Symptome symptoms={listeSymptom2 } />,
  },
  {
    label: 'Symptôme 3',
    component: <Symptome symptoms={listeSymptom3 } />,
  },
];

const handleImageClick = (symptom) => {
  // Faites quelque chose avec le symptôme cliqué
  console.log('Image cliquée :', symptom);
};

export default symptomsList;