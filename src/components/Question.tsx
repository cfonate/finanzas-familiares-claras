
import React from "react";
import { Question as QuestionType } from "../types/questionTypes";
import { useQuestionnaire } from "../context/QuestionnaireContext";

interface QuestionProps {
  question: QuestionType;
  sectionId: number;
}

const Question: React.FC<QuestionProps> = ({ question, sectionId }) => {
  const { answers, addAnswer } = useQuestionnaire();

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

  return (
    <div className="question-card">
      <p className="mb-4 font-medium">
        {question.id}. {question.text}
      </p>
      
      <div className="space-y-2 mt-4">
        {question.options.map((option) => (
          <button
            key={option.value}
            className={`option-button ${
              selectedAnswer?.selectedOption === option.value ? "selected" : ""
            }`}
            onClick={() => handleOptionSelect(option.value, option.points)}
          >
            <span className="option-number">{option.value}</span>
            <span>{option.label.substring(3)}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
