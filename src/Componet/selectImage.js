
import { useState } from "react";
export const AppelSymptome = () => {
    // Déplacez la déclaration de l'état useState ici
    const [selectedSymptom, setSelectedSymptom] = useState(null);
  
  const handleImageClick = (symptom) => {
      setSelectedSymptom(symptom);
    };
  
    return (
      <div>
        {/* Votre code pour afficher les composants Symptome */}
      </div>
    );
  };
  