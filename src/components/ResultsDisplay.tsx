
import React, { useState, useRef } from "react";
import { useQuestionnaire } from "../context/QuestionnaireContext";
import { Card } from "@/components/ui/card";
import {
  CircleCheck,
  CircleX,
  CircleMinus,
  CircleHelp,
  BarChart,
  Save,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import UserInfoForm, { UserInfo } from "./UserInfoForm";
import { saveSubmission, sendEmails } from "../services/submissionService";
import { toast } from "@/hooks/use-toast";

const GREEN = "#0EDE85"; // Verde solicitado

const ResultsDisplay: React.FC = () => {
  const { results, sections, answers } = useQuestionnaire();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const resultsContainerRef = useRef<HTMLDivElement>(null);

  if (!results) {
    return <div>Cargando resultados...</div>;
  }

  // ICONOS EN VERDE
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Excelente":
        return <CircleCheck className="w-12 h-12" color={GREEN} />;
      case "Buena":
        return <CircleMinus className="w-12 h-12" color={GREEN} />;
      case "Regular":
        return <CircleHelp className="w-12 h-12" color={GREEN} />;
      case "Deficiente":
        return <CircleX className="w-12 h-12" color={GREEN} />;
      default:
        return <CircleHelp className="w-12 h-12" color={GREEN} />;
    }
  };

  // CLASES DE CATEGORÍA EN VERDE
  const getCategoryClass = (category: string) => {
    return "bg-white text-[#0EDE85] border-[#0EDE85]";
  };

  const handleUserInfoSubmit = async (data: UserInfo) => {
    try {
      setUserInfo(data);
      setIsSubmitting(true);

      // Save submission to database
      const submission = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        answers: answers,
        results: results
      };

      const saveResult = await saveSubmission(submission);
      if (!saveResult.success) {
        throw new Error("Error saving submission");
      }

      // Send emails
      const emailResult = await sendEmails(submission);
      if (!emailResult.success) {
        throw new Error("Error sending emails");
      }

      toast({
        title: "Información guardada",
        description: "Sus resultados han sido enviados a su correo electrónico.",
      });
    } catch (error) {
      console.error("Error submitting results:", error);
      toast({
        title: "Error",
        description: "Hubo un problema al guardar sus resultados",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-center mb-6">
        <img 
          src="https://ipff.es/wp-content/uploads/2025/04/Logo_home.svg" 
          alt="IPFF Logo" 
          className="h-16" 
        />
      </div>

      {!userInfo ? (
        <UserInfoForm onSubmit={handleUserInfoSubmit} />
      ) : (
        <div id="results-container" ref={resultsContainerRef}>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: GREEN }}>
              Resultados de su Evaluación Financiera
            </h2>
            <div className="flex justify-center items-center mb-6">
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-lg font-medium ${getCategoryClass(
                  results.category
                )}`}
                style={{
                  background: "#e6fff4",
                  color: GREEN,
                  border: `2px solid ${GREEN}`,
                }}
              >
                {getCategoryIcon(results.category)}
                <span>Situación financiera: {results.category}</span>
              </div>
            </div>
            
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6 border">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium text-gray-700">Puntuación total:</span>
                <span className="text-2xl font-bold" style={{ color: GREEN }}>
                  {results.percentage}%
                </span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
                <div
                  className=""
                  style={{
                    background: GREEN,
                    height: "1rem",
                    borderRadius: "9999px",
                    width: `${results.percentage}%`,
                    transition: "width 0.3s"
                  }}
                ></div>
              </div>
              
              <div className="text-sm text-center text-gray-500">
                {results.totalScore} de {results.maxPossibleScore} puntos
              </div>
            </div>
          </div>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" style={{ color: GREEN }}>
              <BarChart style={{ color: GREEN }} />
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
                      <span className="font-medium" style={{ color: GREEN }}>
                        Sección {score.sectionId}: {section?.title}
                      </span>
                      <span className="font-semibold" style={{ color: GREEN }}>{score.percentage}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        style={{
                          background: GREEN,
                          height: "0.5rem",
                          borderRadius: "9999px",
                          width: `${score.percentage}%`
                        }}
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

          <Card className="p-6 mt-6">
            <h3 className="text-xl font-semibold mb-4" style={{ color: GREEN }}>
              Recomendaciones Personalizadas
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              {results.recommendations.map((recommendation, index) => (
                <li key={index} className="text-gray-700">
                  {recommendation}
                </li>
              ))}
            </ul>
          </Card>

          <div className="flex justify-center mt-8">
            <Button
              onClick={() => window.location.reload()}
              className="bg-[#0EDE85] hover:bg-[#0ECD6C] text-white font-bold"
            >
              Completar nuevo cuestionario
            </Button>
          </div>

          <div className="text-center mt-8 font-semibold" style={{ color: GREEN }}>
            El informe será revisado y enviado al administrador tras completar el formulario.
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsDisplay;
