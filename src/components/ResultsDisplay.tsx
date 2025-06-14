
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import UserInfoForm, { UserInfo } from "./UserInfoForm";
import { useIsMobile } from "../hooks/use-mobile";

const CORPORATE_BLUE = "#0C6291";

const ResultsDisplay: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const isMobile = useIsMobile();

  if (userInfo) {
    return (
      <div className="flex flex-col items-center justify-center space-y-6 md:space-y-10 py-8 md:py-12 px-4">
        <img
          src="https://ipff.es/wp-content/uploads/2025/04/Logo_home.svg"
          alt="IPFF Logo"
          className={isMobile ? "h-16" : "h-20"}
        />
        <Card className={`shadow-lg text-center ${
          isMobile ? 'p-6 max-w-sm mx-4' : 'p-8 max-w-xl'
        }`}>
          <h2 
            className={`font-bold mb-4 ${
              isMobile ? 'text-xl' : 'text-2xl md:text-3xl'
            }`} 
            style={{ color: CORPORATE_BLUE }}
          >
            ¡Gracias por completar el cuestionario!
          </h2>
          <p className={`text-gray-700 mb-6 ${
            isMobile ? 'text-base' : 'text-lg'
          }`}>
            Hemos recibido correctamente el cuestionario. Un miembro del equipo va a revisar la información y nos pondremos en contacto contigo en 48 horas.
            <br /><br />
            <b>Si tienes alguna pregunta, puedes escribirnos a (<span style={{ color: CORPORATE_BLUE }}>hola@ipff.es</span>).</b>
            <br />
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className={`space-y-6 md:space-y-8 ${isMobile ? 'px-4' : ''}`}>
      <div className="flex justify-center mb-4 md:mb-6">
        <img
          src="https://ipff.es/wp-content/uploads/2025/04/Logo_home.svg"
          alt="IPFF Logo"
          className={isMobile ? "h-12 md:h-16" : "h-16"}
        />
      </div>
      <UserInfoForm onSubmit={setUserInfo} />
    </div>
  );
};

export default ResultsDisplay;
