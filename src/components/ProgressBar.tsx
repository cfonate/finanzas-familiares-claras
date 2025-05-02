
import React from "react";
import { useQuestionnaire } from "../context/QuestionnaireContext";

const ProgressBar: React.FC = () => {
  const { progressPercentage } = useQuestionnaire();

  return (
    <div className="mb-8">
      <div className="flex justify-center mb-4">
        <img 
          src="https://ipff.es/wp-content/uploads/2025/04/Logo_home.svg" 
          alt="IPFF Logo" 
          className="h-12 md:h-16" 
        />
      </div>
      <div className="progress-indicator">
        <div
          className="progress-bar"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
