
import { Section } from "../../types/questionTypes";

export const section6: Section = {
  id: 6,
  title: "Seguros y Previsión",
  description: "Información sobre seguros y previsión familiar",
  questions: [
    {
      id: 91,
      text: "¿Tienen algún seguro de vida?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, solo uno de los dos miembros", value: "b", points: 2 },
        { label: "c) Sí, ambos miembros", value: "c", points: 3 },
        { label: "d) Sí, ambos miembros y nuestros hijos", value: "d", points: 4 },
      ],
    },
    {
      id: 92,
      text: "¿Cuánto pagan mensualmente por su seguro de vida (en total)?",
      options: [
        { label: "a) Nada", value: "a", points: 1 },
        { label: "b) Menos de 20 €", value: "b", points: 2 },
        { label: "c) Entre 20 € y 50 €", value: "c", points: 3 },
        { label: "d) Más de 50 €", value: "d", points: 4 },
      ],
    },
    {
      id: 93,
      text: "¿Tienen seguro de salud privado?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, solo uno de los miembros", value: "b", points: 2 },
        { label: "c) Sí, ambos miembros", value: "c", points: 3 },
        { label: "d) Sí, toda la familia", value: "d", points: 4 },
      ],
    },
    {
      id: 94,
      text: "¿Cuánto pagan mensualmente por su seguro de salud privado (en total)?",
      options: [
        { label: "a) Nada", value: "a", points: 1 },
        { label: "b) Menos de 50 €", value: "b", points: 2 },
        { label: "c) Entre 50 € y 150 €", value: "c", points: 3 },
        { label: "d) Más de 150 €", value: "d", points: 4 },
      ],
    },
    {
      id: 95,
      text: "¿Tienen seguro de hogar?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, solo la vivienda", value: "b", points: 2 },
        { label: "c) Sí, vivienda y contenidos", value: "c", points: 3 },
        { label: "d) Sí, vivienda, contenidos y responsabilidad civil", value: "d", points: 4 },
      ],
    },
    {
      id: 96,
      text: "¿Cuánto pagan mensualmente por su seguro de hogar?",
      options: [
        { label: "a) Nada", value: "a", points: 1 },
        { label: "b) Menos de 20 €", value: "b", points: 2 },
        { label: "c) Entre 20 € y 50 €", value: "c", points: 3 },
        { label: "d) Más de 50 €", value: "d", points: 4 },
      ],
    },
    {
      id: 97,
      text: "¿Tienen seguro de coche?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, solo a terceros", value: "b", points: 2 },
        { label: "c) Sí, a todo riesgo", value: "c", points: 4 },
        { label: "d) Sí, a todo riesgo con franquicia", value: "d", points: 3 },
      ],
    },
    {
      id: 98,
      text: "¿Cuánto pagan mensualmente por su seguro de coche?",
      options: [
        { label: "a) Menos de 30 €", value: "a", points: 4 },
        { label: "b) Entre 30 € y 60 €", value: "b", points: 3 },
        { label: "c) Entre 60 € y 100 €", value: "c", points: 2 },
        { label: "d) Más de 100 €", value: "d", points: 1 },
      ],
    },
    {
      id: 99,
      text: "¿Tienen algún seguro de incapacidad o accidente?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, solo uno de los miembros", value: "b", points: 2 },
        { label: "c) Sí, ambos miembros", value: "c", points: 3 },
        { label: "d) Sí, todos los miembros de la familia", value: "d", points: 4 },
      ],
    },
    {
      id: 100,
      text: "¿Cuánto pagan mensualmente por su seguro de incapacidad o accidente?",
      options: [
        { label: "a) Nada", value: "a", points: 1 },
        { label: "b) Menos de 20 €", value: "b", points: 2 },
        { label: "c) Entre 20 € y 50 €", value: "c", points: 3 },
        { label: "d) Más de 50 €", value: "d", points: 4 },
      ],
    },
    {
      id: 101,
      text: "¿Tienen algún tipo de seguro de ahorro o inversión?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, pero con pocos aportes", value: "b", points: 2 },
        { label: "c) Sí, con aportes regulares", value: "c", points: 3 },
        { label: "d) Sí, con aportes elevados y planificación", value: "d", points: 4 },
      ],
    },
    {
      id: 102,
      text: "¿Tienen un seguro de vida vinculado a la hipoteca?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, solo uno de los miembros", value: "b", points: 2 },
        { label: "c) Sí, ambos miembros", value: "c", points: 3 },
        { label: "d) Sí, toda la familia", value: "d", points: 4 },
      ],
    },
    {
      id: 103,
      text: "¿Tienen algún seguro de decesos?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, solo uno de los miembros", value: "b", points: 2 },
        { label: "c) Sí, ambos miembros", value: "c", points: 3 },
        { label: "d) Sí, toda la familia", value: "d", points: 4 },
      ],
    },
    {
      id: 104,
      text: "¿Cuánto pagan mensualmente por su seguro de decesos?",
      options: [
        { label: "a) Nada", value: "a", points: 1 },
        { label: "b) Menos de 10 €", value: "b", points: 2 },
        { label: "c) Entre 10 € y 30 €", value: "c", points: 3 },
        { label: "d) Más de 30 €", value: "d", points: 4 },
      ],
    },
    {
      id: 105,
      text: "¿Han revisado sus pólizas de seguros en el último año para ajustar coberturas?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, solo el seguro de hogar", value: "b", points: 2 },
        { label: "c) Sí, todos los seguros", value: "c", points: 4 },
        { label: "d) Sí, pero no hemos hecho cambios", value: "d", points: 3 },
      ],
    },
    {
      id: 106,
      text: "¿Tienen un seguro para la educación de los hijos?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, con aportes esporádicos", value: "b", points: 2 },
        { label: "c) Sí, con aportes periódicos", value: "c", points: 3 },
        { label: "d) Sí, con aportes elevados y planificación", value: "d", points: 4 },
      ],
    },
    {
      id: 107,
      text: "¿Tienen algún seguro para gastos médicos imprevistos no cubiertos por el sistema público?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, con una cobertura básica", value: "b", points: 2 },
        { label: "c) Sí, con una cobertura media", value: "c", points: 3 },
        { label: "d) Sí, con una cobertura amplia", value: "d", points: 4 },
      ],
    },
    {
      id: 108,
      text: "¿Tienen algún seguro de asistencia en viaje o internacional?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, solo para viajes largos", value: "b", points: 2 },
        { label: "c) Sí, para cualquier tipo de viaje", value: "c", points: 3 },
        { label: "d) Sí, cobertura global y anual", value: "d", points: 4 },
      ],
    },
    {
      id: 109,
      text: "¿Han tenido alguna vez que usar alguno de los seguros que poseen?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, una vez", value: "b", points: 2 },
        { label: "c) Sí, varias veces", value: "c", points: 3 },
        { label: "d) Sí, frecuentemente", value: "d", points: 4 },
      ],
    },
    {
      id: 110,
      text: "¿Cómo calificarían la relación calidad-precio de sus seguros?",
      options: [
        { label: "a) Muy mala", value: "a", points: 1 },
        { label: "b) Regular", value: "b", points: 2 },
        { label: "c) Buena", value: "c", points: 3 },
        { label: "d) Excelente", value: "d", points: 4 },
      ],
    },
  ],
};
