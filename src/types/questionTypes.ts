
export type Option = {
  label: string;
  value: string;
  points: number;
};

export type Question = {
  id: number;
  text: string;
  options: Option[];
  condition?: {
    questionId: number;
    expectedAnswer: string;
    action: 'skip' | 'show';
  };
};

export type Section = {
  id: number;
  title: string;
  description?: string;
  questions: Question[];
};

export type Answer = {
  questionId: number;
  sectionId: number;
  selectedOption: string;
  points: number;
};

export type SectionScore = {
  sectionId: number;
  score: number;
  total: number;
  percentage: number;
};

export type ResultCategory = 
  | "Excelente" 
  | "Buena" 
  | "Regular" 
  | "Deficiente";

export type QuestionnaireResult = {
  totalScore: number;
  maxPossibleScore: number;
  percentage: number;
  sectionScores: SectionScore[];
  category: ResultCategory;
  recommendations: string[];
};
