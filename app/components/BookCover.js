import React from "react";

const BookCover = ({ onStart }) => {
  return (
    <div
      className="book-cover flex items-center justify-center text-white cursor-pointer"
      onClick={onStart}
      style={{
        backgroundImage: `url('/images/erol-ahmed-cover.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="cover-content text-center bg-black bg-opacity-50 p-6 rounded">
        <h1 className="text-4xl font-bold">Le jardin des mystères</h1>
        <p className="mt-5 text-lg">Cliquez pour commencer</p>
      </div>
    </div>
  );
};

export default BookCover;
