"use client"

import { useState } from 'react';
import storyData from '../../data/storyData.js';

const Story = () => {
  const [currentScene, setCurrentScene] = useState('start');  // Initialisation à "start"

  const handleChoice = (nextScene) => {
    if (storyData[nextScene]) {  // Vérification que la scène suivante existe
      setCurrentScene(nextScene);
    } else {
      console.error(`La scène ${nextScene} n'existe pas dans storyData.`);
    }
  };

  const scene = storyData[currentScene];  // Récupérer la scène actuelle

  if (!scene) {
    console.error(`La scène "${currentScene}" est introuvable dans storyData.`);
    return <div className="text-red-500 text-center mt-10">La scène est introuvable. Vérifiez vos données.</div>;
  }

  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-2xl rounded-lg max-w-xl text-justify border-4 border-green-700 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-green-100 opacity-70 rounded-lg blur-lg"></div>
      <h1 className="text-4xl font-bold text-green-800 text-center mb-6 z-10 relative">Le Jardin des Mystères</h1>

      {scene.text.map((paragraph, index) => (
        <p key={index} className="text-lg text-gray-800 mb-4 z-10 relative">
          {paragraph}
        </p>
      ))}

      <div className="mt-6 flex gap-4 justify-center flex-wrap">
        {scene.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => handleChoice(choice.next)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition transform hover:scale-105 shadow-lg"
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Story;
