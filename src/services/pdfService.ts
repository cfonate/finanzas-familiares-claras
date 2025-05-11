
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { QuestionnaireResult } from "../types/questionTypes";

export const generatePDF = async (
  results: QuestionnaireResult,
  userInfo: {
    firstName: string;
    lastName: string;
    email: string;
  }
) => {
  try {
    // Get the element to convert to PDF
    const element = document.getElementById("results-container");
    
    if (!element) {
      console.error("Results container not found");
      return { success: false, error: "Element not found" };
    }
    
    // Create canvas from the element
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      allowTaint: true // Allow tainted canvas for cross-origin images
    });
    
    // Calculate the PDF dimensions (A4)
    const imgWidth = 210;
    const imgHeight = canvas.height * imgWidth / canvas.width;
    
    // Create PDF document
    const pdf = new jsPDF("p", "mm", "a4");
    
    // Add title and user info first (don't try to add logo which might fail)
    pdf.setFontSize(18);
    pdf.setTextColor(46, 80, 144); // #2E5090
    pdf.text("Resultados de Evaluación Financiera", 10, 20);
    
    pdf.setFontSize(12);
    pdf.setTextColor(0);
    pdf.text(`Nombre: ${userInfo.firstName} ${userInfo.lastName}`, 10, 30);
    pdf.text(`Email: ${userInfo.email}`, 10, 37);
    pdf.text(`Fecha: ${new Date().toLocaleDateString()}`, 10, 44);
    
    // Add results image
    pdf.addImage(
      canvas.toDataURL("image/png"), 
      "PNG", 
      10, 
      50, 
      imgWidth - 20, 
      imgHeight * 0.7
    );
    
    // Save the PDF
    pdf.save("Resultados_Evaluacion_Financiera_IPFF.pdf");
    
    return { success: true };
  } catch (error) {
    console.error("Error generating PDF:", error);
    return { success: false, error };
  }
};
