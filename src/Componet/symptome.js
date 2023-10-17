import React from 'react';
import '../CSS/App.css';

const Symptome = ({ symptoms }) => {
  return (
    <div>
      {symptoms && symptoms.length > 0 ? (
        symptoms.map((symptom, index) => (
          <div key={symptom.id ?? index}>
            <img src={symptom.photo} alt="symptôme" />
            <p>{symptom.message}</p>
          </div>
        ))
      ) : (
        <p>Aucun symptôme à afficher</p>
      )}
    </div>
  );
};

export default Symptome;
