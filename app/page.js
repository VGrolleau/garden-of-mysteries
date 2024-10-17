"use client"

import { useState, useEffect } from 'react';
import storyData from '../data/storyData';

const Story = () => {
  const [currentScene, setCurrentScene] = useState('start');  // Initialisation à "start"

  console.log(storyData)

  const handleChoice = (nextScene) => {
    console.log('Tentative de passage à la scène:', nextScene);
    if (storyData[nextScene]) {  // Vérification que la scène suivante existe
      setCurrentScene(nextScene);
    } else {
      console.error(`La scène ${nextScene} n'existe pas dans storyData.`);
    }
  };

  const scene = storyData[currentScene];  // Récupérer la scène actuelle

  if (!scene) {
    console.error(`La scène "${currentScene}" est introuvable dans storyData.`);
    return <div>La scène est introuvable. Vérifiez vos données.</div>;
  }

  console.log('Scène actuelle:', currentScene);

  return (
    <div className="p-6 font-sans bg-green-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Le Jardin des Mystères</h1>

      {/* Afficher le texte avec des paragraphes multiples */}
      {Array.isArray(scene.text)
        ? scene.text.map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))
        : <p className="mb-4">{scene.text}</p>}

      <div>
        {scene.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => handleChoice(choice.next)}
            className="block w-full mb-3 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Story;
