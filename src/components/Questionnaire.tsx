
import React from "react";
import { useQuestionnaire } from "../context/QuestionnaireContext";
import QuestionnaireSection from "./QuestionnaireSection";
import StickyHeader from "./StickyHeader";
import ResultsDisplay from "./ResultsDisplay";

const Questionnaire: React.FC = () => {
  const { currentSectionIndex, isCompleted } = useQuestionnaire();

  return (
    <div className="max-w-3xl mx-auto pt-6 px-4">
      {!isCompleted ? (
        <>
          <StickyHeader />
          <QuestionnaireSection sectionIndex={currentSectionIndex} />
        </>
      ) : (
        <ResultsDisplay />
      )}
    </div>
  );
};

export default Questionnaire;
