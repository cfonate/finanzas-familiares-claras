
import React from "react";
import { useQuestionnaire } from "../context/QuestionnaireContext";

const ProgressBar: React.FC = () => {
  const { progressPercentage } = useQuestionnaire();

  return (
    <div className="progress-indicator">
      <div
        className="progress-bar"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
