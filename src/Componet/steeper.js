import React, { useState } from "react";
import '../CSS/steeper.css'; // Assurez-vous de créer le fichier CSS pour les styles
import { useNavigate } from "react-router-dom"; // Pour la redirection

function Stepper({ symptoms }) {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const history = useNavigate(); // Utilisé pour la redirection

  const handleNext = () => {
    if (activeStep < symptoms.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleFinish = () => {
    // Vérifier si des symptômes sont sélectionnés
    if (selectedSymptoms.length > 0) {
      // Symptômes sélectionnés, redirection vers la page de remerciement
      history("/merci"); // Assurez-vous d'avoir défini la route "/remerciement" dans votre fichier de routage
    } else {
      // Aucun symptôme sélectionné, afficher un message d'erreur
      alert("Veuillez sélectionner au moins un symptôme");
    }
  };

  const handleSymptomSelection = (symptom) => {
    if (selectedSymptoms.some((s) => s.id === symptom.id)) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s.id !== symptom.id));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  return (
    <div className="stepper-container">
      <div className="stepper-progress">
        <div className="stepper-progress-bar" style={{ width: `${(activeStep / (symptoms.length - 1)) * 100}%` }}></div>
      </div>
      <div className="stepper-steps">
        {symptoms.map((symptom, index) => (
          <div key={index} className={`stepper-step ${activeStep === index ? 'active' : ''}`}>
            {symptom.label}
            <button onClick={() => handleSymptomSelection(symptom)}>
              {selectedSymptoms.some((s) => s.id === symptom.id) ? "Désélectionner" : "Sélectionner"}
            </button>
          </div>
        ))}
      </div>
      <div className="stepper-content">
        {symptoms[activeStep].component}
      </div>
      <div className="stepper-actions">
        <button onClick={handleBack} disabled={activeStep === 0}>Précédent</button>
        <button onClick={handleNext} disabled={activeStep === symptoms.length - 1}>Suivant</button>
        {activeStep === symptoms.length - 1 && (
          <button onClick={handleFinish}>Valider</button>
        )}
      </div>
    </div>
  );
}

export default Stepper;
