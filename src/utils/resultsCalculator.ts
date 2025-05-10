
import { Answer, Section, SectionScore, QuestionnaireResult, ResultCategory } from "../types/questionTypes";

export const calculateResults = (
  answers: Answer[],
  sections: Section[]
): QuestionnaireResult => {
  // Calcular puntuación por sección
  const sectionScores: SectionScore[] = sections.map((section) => {
    const sectionAnswers = answers.filter(
      (answer) => answer.sectionId === section.id
    );
    
    const sectionScore = sectionAnswers.reduce(
      (sum, answer) => sum + answer.points,
      0
    );
    
    // Calcular puntuación máxima posible para esta sección
    const totalPossibleScore = section.questions.reduce((sum, question) => {
      const maxOptionPoints = Math.max(...question.options.map(option => option.points));
      return sum + maxOptionPoints;
    }, 0);
    
    const percentage = totalPossibleScore > 0 
      ? Math.round((sectionScore / totalPossibleScore) * 100) 
      : 0;
    
    return {
      sectionId: section.id,
      score: sectionScore,
      total: totalPossibleScore,
      percentage
    };
  });
  
  // Puntuación total
  const totalScore = sectionScores.reduce((sum, section) => sum + section.score, 0);
  
  // Puntuación máxima posible total
  const maxPossibleScore = sectionScores.reduce((sum, section) => sum + section.total, 0);
  
  // Porcentaje general
  const percentage = Math.round((totalScore / maxPossibleScore) * 100);
  
  // Determinar categoría basada en el porcentaje
  let category: ResultCategory;
  if (percentage >= 80) {
    category = "Excelente";
  } else if (percentage >= 60) {
    category = "Buena";
  } else if (percentage >= 40) {
    category = "Regular";
  } else {
    category = "Deficiente";
  }
  
  // Generar recomendaciones basadas en las puntuaciones por sección
  const recommendations: string[] = [];
  
  sectionScores.forEach((sectionScore) => {
    const section = sections.find((s) => s.id === sectionScore.sectionId);
    if (!section) return;
    
    if (sectionScore.percentage < 50) {
      switch (sectionScore.sectionId) {
        case 1:
          recommendations.push("Considera evaluar tu situación familiar y cómo afecta tus finanzas.");
          break;
        case 2:
          recommendations.push("Recomendamos diversificar tus fuentes de ingresos para mayor estabilidad financiera.");
          break;
        case 3:
          recommendations.push("Implementa un sistema de seguimiento de gastos para identificar áreas de optimización.");
          break;
        case 4:
          recommendations.push("Establece un fondo de emergencia que cubra al menos 3-6 meses de gastos.");
          break;
        case 5:
          recommendations.push("Considera un plan de reducción de deudas priorizando las de mayor interés.");
          break;
        case 6:
          recommendations.push("Revisa tus seguros actuales y evalúa si necesitas mayor cobertura en ciertas áreas.");
          break;
        case 7:
          recommendations.push("Desarrolla un plan financiero a largo plazo con metas específicas.");
          break;
        case 8:
          recommendations.push("Busca formas de aumentar tus ingresos ya sea mediante formación adicional o trabajos complementarios.");
          break;
        case 9:
          recommendations.push("Comienza a invertir regularmente, incluso con pequeñas cantidades.");
          break;
        case 10:
          recommendations.push("Define metas financieras claras a largo plazo y establece un plan para alcanzarlas.");
          break;
        case 11:
          recommendations.push("Trabaja en desarrollar hábitos financieros más saludables y consistentes.");
          break;
      }
    }
  });
  
  // Asegurarse de que haya al menos una recomendación
  if (recommendations.length === 0) {
    recommendations.push("Mantén tus buenos hábitos financieros y considera consultar con un asesor financiero para optimizar aún más tu estrategia.");
  }
  
  return {
    totalScore,
    maxPossibleScore,
    percentage,
    sectionScores,
    category,
    recommendations,
  };
};

