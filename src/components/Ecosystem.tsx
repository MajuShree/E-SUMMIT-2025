import React from "react";

const EcoSystemPartner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-gradient-to-br from-black via-gray-900 to-violet-800">
      <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-8 text-center tracking-wide">
        ECO SYSTEM PARTNER
      </h1>

      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg">
        <img
          src="/1000437640.jpg"
          alt="Ecosystem Partner Logo"
          className="w-full h-auto object-contain rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default EcoSystemPartner;
