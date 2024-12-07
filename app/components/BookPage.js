import React, { useState, useEffect } from "react";

const BookPage = ({ text, choices, onChoice }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [currentText, setCurrentText] = useState(text);

  useEffect(() => {
    setCurrentText(text);
  }, [text]);

  const handleChoice = (nextScene) => {
    setIsExiting(true); // Déclenche l'animation de sortie
    setTimeout(() => {
      onChoice(nextScene); // Change la scène après la transition
      setIsExiting(false); // Prépare l'animation d'entrée
    }, 500);
  };

  return (
    <div
      className={`book-page ${isExiting ? "exiting" : "entering"}`}
      style={{
        backgroundImage: `url('/images/sj-objio-page.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="page-content p-5 w-full h-full rounded">
        <div className="page-text text-lg mb-4">
          {currentText.map((paragraph, index) => (
            <p key={index} className="break-words">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="choices flex flex-col gap-4">
          {choices.map((choice, index) => (
            <button
              key={index}
              className="choice-button bg-blue-500 text-white rounded p-2"
              onClick={() => handleChoice(choice.next)}
            >
              {choice.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookPage;
