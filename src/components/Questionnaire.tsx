
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
          <ProgressBar />
          <SectionNavigation />
          <QuestionnaireSection sectionIndex={currentSectionIndex} />
        </>
      ) : (
        <ResultsDisplay />
      )}
    </div>
  );
};

export default Questionnaire;
