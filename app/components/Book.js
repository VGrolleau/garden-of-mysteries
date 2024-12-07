"use client";

import React, { useState } from "react";
import BookCover from "./BookCover";
import BookPage from "./BookPage";
import storyData from "../../data/storyData";

const Book = () => {
  const [currentScene, setCurrentScene] = useState("start");
  const [isCoverOpen, setIsCoverOpen] = useState(false);

  const handleChoice = (nextScene) => {
    setCurrentScene(nextScene);
  };

  const scene = storyData[currentScene];

  return (
    <div className="book-container">
      {!isCoverOpen ? (
        <BookCover onStart={() => setIsCoverOpen(true)} />
      ) : (
        <BookPage
          text={scene.text}
          choices={scene.choices}
          onChoice={handleChoice}
        />
      )}
    </div>
  );
};

export default Book;
