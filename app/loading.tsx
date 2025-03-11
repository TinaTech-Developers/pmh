import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="border-8 border-t-8 border-gray-300 border-t-blue-500 rounded-full w-16 h-16 animate-spin"></div>
      <p className="mt-4 text-lg text-gray-700">Loading...</p>
    </div>
  );
};

export default Loading;
