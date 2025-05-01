
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Section, Answer, QuestionnaireResult } from "../types/questionTypes";
import { calculateResults } from "../utils/resultsCalculator";
import { questionnaireSections } from "../data/questionnaireData";

interface QuestionnaireContextType {
  sections: Section[];
  currentSectionIndex: number;
  setCurrentSectionIndex: (index: number) => void;
  answers: Answer[];
  addAnswer: (answer: Answer) => void;
  results: QuestionnaireResult | null;
  calculateFinalResults: () => void;
  isCompleted: boolean;
  totalQuestions: number;
  answeredQuestions: number;
  progressPercentage: number;
}

const QuestionnaireContext = createContext<QuestionnaireContextType | undefined>(
  undefined
);

export const QuestionnaireProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [sections] = useState<Section[]>(questionnaireSections);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [results, setResults] = useState<QuestionnaireResult | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  // Calcular el total de preguntas en todas las secciones
  const totalQuestions = sections.reduce(
    (acc, section) => acc + section.questions.length,
    0
  );

  // Cantidad de preguntas respondidas
  const answeredQuestions = answers.length;

  // Porcentaje de progreso
  const progressPercentage = Math.round((answeredQuestions / totalQuestions) * 100);

  const addAnswer = (answer: Answer) => {
    setAnswers((prev) => {
      // Verificar si la pregunta ya fue respondida
      const existingIndex = prev.findIndex(
        (a) => a.questionId === answer.questionId && a.sectionId === answer.sectionId
      );

      if (existingIndex !== -1) {
        // Actualizar respuesta existente
        const updatedAnswers = [...prev];
        updatedAnswers[existingIndex] = answer;
        return updatedAnswers;
      } else {
        // Añadir nueva respuesta
        return [...prev, answer];
      }
    });
  };

  const calculateFinalResults = () => {
    const result = calculateResults(answers, sections);
    setResults(result);
    setIsCompleted(true);
  };

  return (
    <QuestionnaireContext.Provider
      value={{
        sections,
        currentSectionIndex,
        setCurrentSectionIndex,
        answers,
        addAnswer,
        results,
        calculateFinalResults,
        isCompleted,
        totalQuestions,
        answeredQuestions,
        progressPercentage,
      }}
    >
      {children}
    </QuestionnaireContext.Provider>
  );
};

export const useQuestionnaire = () => {
  const context = useContext(QuestionnaireContext);
  if (!context) {
    throw new Error(
      "useQuestionnaire debe utilizarse dentro de un QuestionnaireProvider"
    );
  }
  return context;
};
