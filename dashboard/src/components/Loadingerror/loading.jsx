import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-primary"></div>
    </div>
  );
};

export default LoadingSpinner;
