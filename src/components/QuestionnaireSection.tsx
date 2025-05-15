
import React from "react";
import { useQuestionnaire } from "../context/QuestionnaireContext";
import Question from "./Question";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface QuestionnaireSectionProps {
  sectionIndex: number;
}

const QuestionnaireSection: React.FC<QuestionnaireSectionProps> = ({
  sectionIndex,
}) => {
  const {
    sections,
    currentSectionIndex,
    setCurrentSectionIndex,
    answers,
    calculateFinalResults,
  } = useQuestionnaire();

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

  // Verificar si todas las preguntas de la sección actual tienen respuestas
  const allQuestionsAnswered = section.questions.every((question) =>
    answers.some(
      (answer) =>
        answer.questionId === question.id && answer.sectionId === section.id
    )
  );

  return (
    <div className="mb-10">
      {/* Sticky para el título de la sección */}
      <div className="sticky top-[92px] z-10 bg-finance-background pb-2">
        <h2 className="section-title mb-0">
          SECCIÓN {section.id}: {section.title}
        </h2>
        {section.description && (
          <p className="text-center text-muted-foreground mb-4">
            {section.description}
          </p>
        )}
      </div>
      <div className="space-y-8">
        {section.questions.map((question) => (
          <Question
            key={question.id}
            question={question}
            sectionId={section.id}
          />
        ))}
      </div>

      <div className="flex justify-between mt-10">
        <Button
          variant="outline"
          onClick={navigateToPreviousSection}
          disabled={isFirstSection}
          className="flex items-center gap-2"
        >
          <ChevronLeft size={16} />
          Sección anterior
        </Button>

        <Button
          onClick={navigateToNextSection}
          disabled={!allQuestionsAnswered}
          className="flex items-center gap-2 bg-finance-primary hover:bg-finance-primary/80"
        >
          {isLastSection ? "Ver resultados" : "Siguiente sección"}
          {!isLastSection && <ChevronRight size={16} />}
        </Button>
      </div>

      {!allQuestionsAnswered && (
        <p className="text-sm text-finance-danger mt-2 text-center">
          Por favor responde todas las preguntas para continuar
        </p>
      )}
    </div>
  );
};

export default QuestionnaireSection;
