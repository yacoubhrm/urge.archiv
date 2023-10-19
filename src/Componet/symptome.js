import { useState } from 'react';
import '../CSS/steeper.css';

const Symptome = ({ symptoms }) => {
  const groupSize = 3; // Nombre de photos par groupe
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    // Lorsque l'élément est cliqué, mettez à jour l'index actif
    setActiveIndex(index);
  };

  return (
    <div>
      {symptoms && symptoms.length > 0 ? (
        symptoms.map((symptom, index) => (
          <div key={symptom.id ?? index}>
            {index % groupSize === 0 && (
              <div className="photo-group">
                {symptoms.slice(index, index + groupSize).map((symptomInGroup, subIndex) => (
                  <div key={symptomInGroup.id ?? subIndex}>
                    <button
                      onClick={() => handleClick(index + subIndex)} // Active handleClick sur chaque élément
                      className={activeIndex === index + subIndex ? 'clicked-button' : ''}
                    >
                      <img src={symptomInGroup.photo} alt='icone' />
                    </button>
                    <p>{symptomInGroup.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))
      ) : (
        <p>Aucun symptôme à afficher</p>
      )}
    </div>
  );
};

export default Symptome;
