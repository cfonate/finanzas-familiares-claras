
import React from "react";
import { useSticky } from "../hooks/useSticky";
import { useQuestionnaire } from "../context/QuestionnaireContext";
import { useIsMobile } from "../hooks/use-mobile";

export type ProgressBarStickyState = {
  isStickyLogoVisible: boolean;
  stickyRef: React.RefObject<HTMLDivElement>;
};

interface ProgressBarProps {
  onStickyChange?: (sticky: boolean) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ onStickyChange }) => {
  const { progressPercentage } = useQuestionnaire();
  const [isSticky, stickyRef] = useSticky<HTMLDivElement>();
  const isMobile = useIsMobile();

  React.useEffect(() => {
    if (onStickyChange) {
      onStickyChange(isSticky);
    }
  }, [isSticky, onStickyChange]);

  return (
    <div ref={stickyRef} className={isMobile ? "mb-4 md:mb-8" : "mb-8"}>
      {isSticky && (
        <div className="flex justify-center mb-3 md:mb-4 animate-fade-in">
          <img 
            src="https://ipff.es/wp-content/uploads/2025/04/Logo_home.svg" 
            alt="IPFF Logo" 
            className={isMobile ? "h-8 md:h-12" : "h-12 md:h-16"}
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
