
import React from "react";
import { QuestionnaireProvider } from "../context/QuestionnaireContext";
import Questionnaire from "../components/Questionnaire";
import { Card } from "@/components/ui/card";
import LogoHeader from "../components/LogoHeader";

const Index = () => {
  return (
    <div className="min-h-screen bg-finance-background py-10">
      <div className="container mx-auto">
        <LogoHeader />
        <Card className="max-w-5xl mx-auto p-6 mb-8">
          <h1 className="text-center text-3xl font-bold text-finance-primary mb-4">
            Cuestionario de Finanzas Familiares
          </h1>
          <p className="text-center text-muted-foreground mb-6">
            Complete este cuestionario para obtener una evaluación detallada de su situación financiera familiar.
          </p>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-finance-accent rounded"></div>
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
