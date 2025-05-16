
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import UserInfoForm, { UserInfo } from "./UserInfoForm";

const CORPORATE_BLUE = "#0C6291";

const ResultsDisplay: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  // Cuando ya se ha completado el formulario, mostrar mensaje de agradecimiento
  if (userInfo) {
    return (
      <div className="flex flex-col items-center justify-center space-y-10 py-12">
        <img
          src="https://ipff.es/wp-content/uploads/2025/04/Logo_home.svg"
          alt="IPFF Logo"
          className="h-20"
        />
        <Card className="p-8 max-w-xl text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: CORPORATE_BLUE }}>
            ¡Gracias por facilitar sus datos!
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Hemos recibido correctamente la información y nos pondremos en contacto con usted en breve.
            <br /><br />
            <b>El informe será revisado y enviado al administrador (<span style={{ color: CORPORATE_BLUE }}>hola@ipff.es</span>).</b>
            <br />
            Si tiene consultas, puede escribirnos también a dicho email.
          </p>
        </Card>
      </div>
    );
  }

  // Mostrar el formulario para capturar datos personales, SIN mostrar el informe
  return (
    <div className="space-y-8">
      <div className="flex justify-center mb-6">
        <img
          src="https://ipff.es/wp-content/uploads/2025/04/Logo_home.svg"
          alt="IPFF Logo"
          className="h-16"
        />
      </div>
      <UserInfoForm onSubmit={setUserInfo} />
    </div>
  );
};

export default ResultsDisplay;
