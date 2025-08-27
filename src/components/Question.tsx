
import React from "react";
import { Question as QuestionType } from "../types/questionTypes";
import { useQuestionnaire } from "../context/QuestionnaireContext";
import { useIsMobile } from "../hooks/use-mobile";

interface QuestionProps {
  question: QuestionType;
  sectionId: number;
}

const Question: React.FC<QuestionProps> = ({ question, sectionId }) => {
  const { answers, addAnswer } = useQuestionnaire();
  const isMobile = useIsMobile();

  // Check if this question should be skipped based on conditions
  const shouldSkipQuestion = () => {
    if (!question.condition) return false;
    
    const relatedAnswer = answers.find(
      answer => answer.questionId === question.condition!.questionId && 
                answer.sectionId === sectionId
    );
    
    if (!relatedAnswer) return false;
    
    if (question.condition.action === 'skip') {
      return relatedAnswer.selectedOption === question.condition.expectedAnswer;
    }
    
    return false;
  };

  const selectedAnswer = answers.find(
    (answer) =>
      answer.questionId === question.id && answer.sectionId === sectionId
  );

  const handleOptionSelect = (optionValue: string, points: number) => {
    addAnswer({
      questionId: question.id,
      sectionId,
      selectedOption: optionValue,
      points,
    });
  };

  // Don't render if question should be skipped
  if (shouldSkipQuestion()) {
    return null;
  }

  return (
    <div className={`question-card ${isMobile ? 'p-4' : 'p-6'}`}>
      <p className={`mb-3 md:mb-4 font-medium ${isMobile ? 'text-sm' : 'text-base'}`}>
        {question.id}. {question.text}
      </p>
      
      <div className="space-y-2 mt-3 md:mt-4">
        {question.options.map((option) => (
          <button
            key={option.value}
            className={`option-button ${
              selectedAnswer?.selectedOption === option.value ? "selected" : ""
            } ${isMobile ? 'p-3 text-sm' : 'p-4'}`}
            onClick={() => handleOptionSelect(option.value, option.points)}
          >
            <span className={`option-number ${isMobile ? 'h-5 w-5 text-xs' : 'h-6 w-6 text-sm'}`}>
              {option.value}
            </span>
            <span className={isMobile ? 'text-sm' : ''}>
              {option.label.substring(3)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
