
import React from "react";
import { useQuestionnaire } from "../context/QuestionnaireContext";
import QuestionnaireSection from "./QuestionnaireSection";
import StickyHeader from "./StickyHeader";
import ResultsDisplay from "./ResultsDisplay";

const Questionnaire: React.FC = () => {
  const { currentSectionIndex, isCompleted } = useQuestionnaire();

  // Local state lives here and gets updated from the StickyHeader + ProgressBar combo
  const [isStickyLogoVisible, setIsStickyLogoVisible] = React.useState(false);

  return (
    <div className="max-w-3xl mx-auto pt-6 px-4">
      {!isCompleted ? (
        <>
          {/* Pass the setter directly to StickyHeader */}
          <StickyHeader onStickyLogoVisibleChange={setIsStickyLogoVisible}>
            {/* Render QuestionnaireSection and pass sticky state directly */}
          </StickyHeader>
          <QuestionnaireSection
            sectionIndex={currentSectionIndex}
            isStickyLogoVisible={isStickyLogoVisible}
          />
        </>
      ) : (
        <ResultsDisplay />
      )}
    </div>
  );
};

export default Questionnaire;
