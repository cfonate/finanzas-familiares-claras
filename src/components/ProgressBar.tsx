
import React from "react";
import { useSticky } from "../hooks/useSticky";
import { useQuestionnaire } from "../context/QuestionnaireContext";

// Añadimos una prop para "avisar" si el logo sticky está visible (opcional: export o prop)
export type ProgressBarStickyState = {
  isStickyLogoVisible: boolean;
  stickyRef: React.RefObject<HTMLDivElement>;
};

interface ProgressBarProps {
  /**
   * Callback que recibe el estado sticky, útil para compartirlo hacia arriba
   */
  onStickyChange?: (sticky: boolean) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ onStickyChange }) => {
  const { progressPercentage } = useQuestionnaire();
  const [isSticky, stickyRef] = useSticky<HTMLDivElement>();

  // Llama al callback cuando cambia el sticky para comunicarlo hacia arriba
  React.useEffect(() => {
    if (onStickyChange) {
      onStickyChange(isSticky);
    }
  }, [isSticky, onStickyChange]);

  return (
    <div ref={stickyRef} className="mb-8">
      {isSticky && (
        <div className="flex justify-center mb-4 animate-fade-in">
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
