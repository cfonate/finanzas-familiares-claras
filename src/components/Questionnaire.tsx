
import React from "react";
import { useQuestionnaire } from "../context/QuestionnaireContext";
import QuestionnaireSection from "./QuestionnaireSection";
import StickyHeader from "./StickyHeader";
import ResultsDisplay from "./ResultsDisplay";

const Questionnaire: React.FC = () => {
  const { currentSectionIndex, isCompleted } = useQuestionnaire();

  // El estado isStickyLogoVisible será recibido del StickyHeader y pasado a QuestionnaireSection
  // Lo gestionamos usando React.cloneElement
  const [isStickyLogoVisible, setIsStickyLogoVisible] = React.useState(false);

  return (
    <div className="max-w-3xl mx-auto pt-6 px-4">
      {!isCompleted ? (
        <>
          {/* El StickyHeader ahora maneja el render del logo sticky y actualiza el estado */}
          <StickyHeader>
            {/* Renderizamos QuestionnaireSection como hijo, le pasamos la prop sticky */}
            <QuestionnaireSection
              sectionIndex={currentSectionIndex}
              isStickyLogoVisible={isStickyLogoVisible}
            />
          </StickyHeader>
        </>
      ) : (
        <ResultsDisplay />
      )}
    </div>
  );
};

export default Questionnaire;
