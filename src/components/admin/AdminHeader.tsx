
import React from "react";
import { Card } from "@/components/ui/card";

const AdminHeader = () => {
  return (
    <Card className="p-6 mb-8">
      <div className="flex justify-center mb-6">
        <img 
          src="https://ipff.es/wp-content/uploads/2025/04/Logo_home.svg" 
          alt="IPFF Logo" 
          className="h-16" 
        />
      </div>
      <h1 className="text-3xl font-bold text-center mb-4 text-finance-primary">
        Panel de Administración
      </h1>
    </Card>
  );
};

export default AdminHeader;
