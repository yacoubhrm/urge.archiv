import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Pour la redirection
//import '../CSS/App.css';
import '../CSS/steeper.css';

function Stepper({ symptoms }) {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [addedSteps, setAddedSteps] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // État pour stocker l'image sélectionnée
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
    if (selectedSymptoms.length > 0 && selectedImages.length > 0) {
      history('/merci'); // Assurez-vous d'avoir défini la route "/merci" dans votre fichier de routage
    } else {
      alert('Veuillez sélectionner au moins un symptôme et au moins une image');
    }
  };

  const handleSymptomSelection = (symptom) => {
    if (selectedSymptoms.some((s) => s.id === symptom.photo)) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s.id !== symptom.id));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const handleImageClick = (symptom) => {
    const newStep = {
      photo: symptom.photo,
      text: symptom.message,
      traits: ['1', '2', 'ECT'], // Ajoutez les traits ici
    };

    setAddedSteps([...addedSteps, newStep]);
    setSelectedImages([...selectedImages, symptom.photo]);
  };

  return (
    <div className="stepper-container">
      <div className="stepper-progress">
        <div
          className="stepper-progress-bar"
          style={{ width: `${(activeStep / (symptoms.length - 1)) * 100}%` }}
        ></div>
      </div>
      <div className="stepper-content">
        {activeStep < symptoms.length ? (
          symptoms[activeStep].component
        ) : (
          <div>
            <img src={addedSteps[activeStep - symptoms.length].photo} alt="symptôme" />
            <p>{addedSteps[activeStep - symptoms.length].text}</p>
            <p>Étapes:</p>
            <ul>
              {addedSteps[activeStep - symptoms.length].traits.map((trait, index) => (
                <li key={index}>{trait}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="stepper-actions">
        <button onClick={handleBack} disabled={activeStep === 0}>
          Précédent
        </button>
        <button onClick={handleNext} disabled={activeStep === symptoms.length - 1}>
          Suivant
        </button>
        {activeStep === symptoms.length - 1 && (
          <button onClick={handleFinish}>Valider</button>
        )}
      </div>
    </div>
  );
}

export default Stepper;
