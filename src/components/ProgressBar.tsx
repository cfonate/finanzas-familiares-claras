
import React from "react";
import { useSticky } from "../hooks/useSticky";
import { useQuestionnaire } from "../context/QuestionnaireContext";

const ProgressBar: React.FC = () => {
  const { progressPercentage } = useQuestionnaire();
  const [isSticky, stickyRef] = useSticky<HTMLDivElement>();

  return (
    <div ref={stickyRef} className="mb-8">
      {isSticky && (
        <div
          className="flex justify-center mb-4 animate-fade-in"
        >
          <img 
            src="https://ipff.es/wp-content/uploads/2025/04/Logo_home.svg" 
            alt="IPFF Logo" 
            className="h-12 md:h-16"
          />
        </div>
      )}
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
