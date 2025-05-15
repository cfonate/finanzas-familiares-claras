
// Ya no se usa para descarga PDF directa, dejar el archivo pero se puede dejar vacío o poner una advertencia/comentario.
export const generatePDF = async () => {
  throw new Error("La descarga de PDF ha sido deshabilitada. El informe se enviará solo por email al administrador.");
};
