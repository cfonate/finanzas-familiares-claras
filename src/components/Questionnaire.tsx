
import React from "react";
import { useQuestionnaire } from "../context/QuestionnaireContext";
import QuestionnaireSection from "./QuestionnaireSection";
import SectionNavigation from "./SectionNavigation";
import ProgressBar from "./ProgressBar";
import ResultsDisplay from "./ResultsDisplay";

const Questionnaire: React.FC = () => {
  const { currentSectionIndex, isCompleted } = useQuestionnaire();

  return (
    <div className="max-w-3xl mx-auto pt-6 px-4">
      {!isCompleted ? (
        <>
          {/* Lo sticky envuelve progressbar, nav y título de sección */}
          <div className="sticky top-0 z-20 bg-finance-background pt-2 pb-3">
            <ProgressBar />
            <SectionNavigation />
            {/* El título de la sección aparece dentro de QuestionnaireSection, así que aseguramos que también sea sticky */}
          </div>
          <QuestionnaireSection sectionIndex={currentSectionIndex} />
        </>
      ) : (
        <ResultsDisplay />
      )}
    </div>
  );
};

export default Questionnaire;
