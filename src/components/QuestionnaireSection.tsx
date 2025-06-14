
import React from "react";
import { useQuestionnaire } from "../context/QuestionnaireContext";
import Question from "./Question";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";

interface QuestionnaireSectionProps {
  sectionIndex: number;
  isStickyLogoVisible?: boolean;
}

const QuestionnaireSection: React.FC<QuestionnaireSectionProps> = ({
  sectionIndex,
  isStickyLogoVisible = false,
}) => {
  const {
    sections,
    currentSectionIndex,
    setCurrentSectionIndex,
    answers,
    calculateFinalResults,
  } = useQuestionnaire();

  const isMobile = useIsMobile();
  const section = sections[sectionIndex];
  const isFirstSection = sectionIndex === 0;
  const isLastSection = sectionIndex === sections.length - 1;

  const navigateToNextSection = () => {
    if (isLastSection) {
      calculateFinalResults();
    } else {
      setCurrentSectionIndex(currentSectionIndex + 1);
      window.scrollTo(0, 0);
    }
  };

  const navigateToPreviousSection = () => {
    setCurrentSectionIndex(currentSectionIndex - 1);
    window.scrollTo(0, 0);
  };

  const allQuestionsAnswered = section.questions.every((question) =>
    answers.some(
      (answer) =>
        answer.questionId === question.id && answer.sectionId === section.id
    )
  );

  // Ajustar padding según dispositivo y estado sticky
  const getStickyTopPosition = () => {
    if (isMobile) {
      return isStickyLogoVisible ? "top-[120px]" : "top-[80px]";
    }
    return isStickyLogoVisible ? "top-[124px]" : "top-[92px]";
  };

  const headerPaddingTop = isStickyLogoVisible 
    ? (isMobile ? "pt-[100px]" : "pt-[124px]") 
    : (isMobile ? "pt-2" : "pt-4");

  return (
    <div className="mb-6 md:mb-10">
      {/* Header sticky adaptado para móvil */}
      <div className={`sticky ${getStickyTopPosition()} z-10 bg-finance-background pb-2 transition-all duration-300 ${headerPaddingTop}`}>
        <h2 className={`section-title mb-0 ${isMobile ? 'text-lg md:text-xl' : 'text-2xl'} px-2`}>
          SECCIÓN {section.id}: {section.title}
        </h2>
        {section.description && (
          <p className="text-center text-muted-foreground mb-3 md:mb-4 text-sm md:text-base px-3">
            {section.description}
          </p>
        )}
      </div>

      <div className="space-y-4 md:space-y-8 px-2 md:px-0">
        {section.questions.map((question) => (
          <Question
            key={question.id}
            question={question}
            sectionId={section.id}
          />
        ))}
      </div>

      {/* Navegación adaptada para móvil */}
      <div className={`flex ${isMobile ? 'flex-col gap-3' : 'justify-between'} mt-6 md:mt-10 px-2 md:px-0`}>
        <Button
          variant="outline"
          onClick={navigateToPreviousSection}
          disabled={isFirstSection}
          className={`flex items-center gap-2 ${
            isMobile ? 'w-full justify-center' : ''
          }`}
        >
          <ChevronLeft size={16} />
          Sección anterior
        </Button>

        <Button
          onClick={navigateToNextSection}
          disabled={!allQuestionsAnswered}
          className={`flex items-center gap-2 bg-finance-primary hover:bg-finance-primary/80 ${
            isMobile ? 'w-full justify-center' : ''
          }`}
        >
          {isLastSection ? "Ver resultados" : "Siguiente sección"}
          {!isLastSection && <ChevronRight size={16} />}
        </Button>
      </div>

      {!allQuestionsAnswered && (
        <p className="text-sm text-finance-danger mt-2 text-center px-2">
          Por favor responde todas las preguntas para continuar
        </p>
      )}
    </div>
  );
};

export default QuestionnaireSection;
