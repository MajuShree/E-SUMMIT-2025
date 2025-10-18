import React from "react";

const EcoSystemPartner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-white">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
        ECO SYSTEM PARTNER
      </h1>

      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg">
        <img
          src="/1000437640.jpg"
          alt="Ecosystem Partner Logo"
          className="w-full h-auto object-contain rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default EcoSystemPartner;
