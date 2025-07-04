
import React from "react";
import { QuestionnaireProvider } from "../context/QuestionnaireContext";
import Questionnaire from "../components/Questionnaire";
import { Card } from "@/components/ui/card";
import LogoHeader from "../components/LogoHeader";
import { useIsMobile } from "../hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-finance-background py-4 md:py-10">
      <div className="container mx-auto px-2 md:px-4">
        <LogoHeader />
        <Card className="max-w-5xl mx-auto p-3 md:p-6 mb-4 md:mb-8">
          <h1 className={`text-center font-bold text-finance-primary mb-3 md:mb-4 ${
            isMobile ? 'text-xl md:text-2xl' : 'text-3xl'
          }`}>
            Cuestionario de Finanzas Familiares
          </h1>
          <p className="text-center text-muted-foreground mb-4 md:mb-6 text-sm md:text-base px-2">
            Complete este cuestionario para obtener una evaluación detallada de su situación financiera familiar.
          </p>
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="h-1 w-16 md:w-24 bg-finance-accent rounded"></div>
          </div>
        </Card>

        <QuestionnaireProvider>
          <Questionnaire />
        </QuestionnaireProvider>
      </div>
    </div>
  );
};

export default Index;
