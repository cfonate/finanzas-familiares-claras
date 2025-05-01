
import React from "react";
import { useQuestionnaire } from "../context/QuestionnaireContext";
import { Card } from "@/components/ui/card";
import {
  CircleCheck,
  CircleX,
  CircleMinus,
  CircleHelp,
  BarChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ResultsDisplay: React.FC = () => {
  const { results, sections } = useQuestionnaire();

  if (!results) {
    return <div>Cargando resultados...</div>;
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Excelente":
        return <CircleCheck className="w-12 h-12 text-finance-success" />;
      case "Buena":
        return <CircleMinus className="w-12 h-12 text-finance-warning" />;
      case "Regular":
        return <CircleHelp className="w-12 h-12 text-finance-warning" />;
      case "Deficiente":
        return <CircleX className="w-12 h-12 text-finance-danger" />;
      default:
        return <CircleHelp className="w-12 h-12" />;
    }
  };

  const getCategoryClass = (category: string) => {
    switch (category) {
      case "Excelente":
        return "bg-green-100 text-green-800 border-green-300";
      case "Buena":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "Regular":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "Deficiente":
        return "bg-red-100 text-red-800 border-red-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  return (
    <div className="space-y-8">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-6 text-finance-primary">
          Resultados de su Evaluación Financiera
        </h2>
        <div className="flex justify-center items-center mb-6">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-lg font-medium ${getCategoryClass(
              results.category
            )}`}
          >
            {getCategoryIcon(results.category)}
            <span>Situación financiera: {results.category}</span>
          </div>
        </div>
        
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6 border">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-medium text-gray-700">Puntuación total:</span>
            <span className="text-2xl font-bold text-finance-primary">
              {results.percentage}%
            </span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
            <div
              className="bg-finance-primary h-4 rounded-full"
              style={{ width: `${results.percentage}%` }}
            ></div>
          </div>
          
          <div className="text-sm text-center text-gray-500">
            {results.totalScore} de {results.maxPossibleScore} puntos
          </div>
        </div>
      </div>

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <BarChart className="text-finance-accent" />
          Resultados por sección
        </h3>
        
        <div className="grid gap-4 md:grid-cols-2">
          {results.sectionScores.map((score) => {
            const section = sections.find((s) => s.id === score.sectionId);
            
            return (
              <div
                key={score.sectionId}
                className="border rounded-md p-4 hover:bg-gray-50"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Sección {score.sectionId}: {section?.title}</span>
                  <span className="text-finance-primary font-semibold">{score.percentage}%</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-finance-accent h-2 rounded-full"
                    style={{ width: `${score.percentage}%` }}
                  ></div>
                </div>
                
                <div className="text-xs text-gray-500 mt-1 text-right">
                  {score.score} / {score.total} puntos
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Recomendaciones Personalizadas</h3>
        <ul className="list-disc pl-5 space-y-2">
          {results.recommendations.map((recommendation, index) => (
            <li key={index} className="text-gray-700">
              {recommendation}
            </li>
          ))}
        </ul>
      </Card>

      <div className="flex justify-center mt-8 space-x-4">
        <Button 
          variant="outline" 
          onClick={() => window.print()}
          className="border-finance-primary text-finance-primary hover:bg-finance-primary/10"
        >
          Imprimir resultados
        </Button>
        <Button
          onClick={() => window.location.reload()}
          className="bg-finance-primary hover:bg-finance-primary/80"
        >
          Completar nuevo cuestionario
        </Button>
      </div>
    </div>
  );
};

export default ResultsDisplay;
