import { Section } from "../../types/questionTypes";

export const section6: Section = {
  id: 6,
  title: "Seguros y Previsión",
  description: "Información sobre seguros y previsión familiar",
  questions: [
    {
      id: 91,
      text: "¿Tenéis algún seguro de vida?",
      options: [
        { label: "a) Sí, ambos miembros y nuestros hijos", value: "a", points: 4 },
        { label: "b) Sí, ambos miembros", value: "b", points: 3 },
        { label: "c) Sí, sólo uno de los dos miembros", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
    {
      id: 92,
      text: "¿Cuánto pagáis mensualmente por vuestro seguro de vida (en total)?",
      options: [
        { label: "a) Nada", value: "a", points: 1 },
        { label: "b) Menos de 20 €", value: "b", points: 2 },
        { label: "c) Entre 20 € y 50 €", value: "c", points: 3 },
        { label: "d) Más de 50 €", value: "d", points: 4 },
      ],
    },
    {
      id: 93,
      text: "¿Tenéis seguro de salud privado?",
      options: [
        { label: "a) Sí, toda la familia", value: "a", points: 4 },
        { label: "b) Sí, ambos miembros", value: "b", points: 3 },
        { label: "c) Sí, sólo uno de los miembros", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
    {
      id: 94,
      text: "¿Cuánto pagáis mensualmente por vuestro seguro de salud privado (en total)?",
      options: [
        { label: "a) Nada", value: "a", points: 1 },
        { label: "b) Menos de 50 €", value: "b", points: 2 },
        { label: "c) Entre 50 € y 150 €", value: "c", points: 3 },
        { label: "d) Más de 150 €", value: "d", points: 4 },
      ],
    },
    {
      id: 95,
      text: "¿Tenéis seguro de hogar?",
      options: [
        { label: "a) Sí, vivienda, contenidos y responsabilidad civil", value: "a", points: 4 },
        { label: "b) Sí, vivienda y contenidos", value: "b", points: 3 },
        { label: "c) Sí, solo la vivienda", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
        { label: "e) No tenemos vivienda en propiedad", value: "e", points: 0 },
      ],
    },
    {
      id: 96,
      text: "¿Cuánto pagáis mensualmente por vuestro seguro de hogar?",
      options: [
        { label: "a) Nada", value: "a", points: 1 },
        { label: "b) Menos de 20 €", value: "b", points: 2 },
        { label: "c) Entre 20 € y 50 €", value: "c", points: 3 },
        { label: "d) Más de 50 €", value: "d", points: 4 },
      ],
    },
    {
      id: 97,
      text: "¿Tenéis seguro de coche?",
      options: [
        { label: "a) Sí, a todo riesgo con franquicia", value: "a", points: 3 },
        { label: "b) Sí, a todo riesgo", value: "b", points: 4 },
        { label: "c) Sí, solo a terceros", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
        { label: "e) No tenemos vehículo", value: "e", points: 0 },
      ],
    },
    {
      id: 98,
      text: "¿Cuánto pagáis mensualmente por vuestro seguro de coche?",
      options: [
        { label: "a) Menos de 30 €", value: "a", points: 4 },
        { label: "b) Entre 30 € y 60 €", value: "b", points: 3 },
        { label: "c) Entre 60 € y 100 €", value: "c", points: 2 },
        { label: "d) Más de 100 €", value: "d", points: 1 },
      ],
    },
    {
      id: 99,
      text: "¿Tenéis algún seguro de incapacidad o accidente?",
      options: [
        { label: "a) Sí, todos los miembros de la familia", value: "a", points: 4 },
        { label: "b) Sí, ambos miembros", value: "b", points: 3 },
        { label: "c) Sí, sólo uno de los miembros", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
    {
      id: 100,
      text: "¿Cuánto pagáis mensualmente por vuestro seguro de incapacidad o accidente?",
      options: [
        { label: "a) Nada", value: "a", points: 1 },
        { label: "b) Menos de 20 €", value: "b", points: 2 },
        { label: "c) Entre 20 € y 50 €", value: "c", points: 3 },
        { label: "d) Más de 50 €", value: "d", points: 4 },
      ],
    },
    {
      id: 101,
      text: "¿Tenéis algún tipo de seguro de ahorro o inversión?",
      options: [
        { label: "a) Sí, con aportes elevados y planificación", value: "a", points: 4 },
        { label: "b) Sí, con aportes regulares", value: "b", points: 3 },
        { label: "c) Sí, pero con pocos aportes", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
    {
      id: 102,
      text: "¿Tenéis un seguro de vida vinculado a la hipoteca?",
      options: [
        { label: "a) Sí, toda la familia", value: "a", points: 4 },
        { label: "b) Sí, ambos miembros", value: "b", points: 3 },
        { label: "c) Sí, sólo uno de los miembros", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
        { label: "e) No tenemos hipoteca/vivienda en propiedad", value: "e", points: 0 },
      ],
    },
    {
      id: 103,
      text: "¿Tenéis algún seguro de decesos?",
      options: [
        { label: "a) Sí, toda la familia", value: "a", points: 4 },
        { label: "b) Sí, ambos miembros", value: "b", points: 3 },
        { label: "c) Sí, sólo uno de los miembros", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
    {
      id: 104,
      text: "¿Cuánto pagáis mensualmente por vuestro seguro de decesos?",
      options: [
        { label: "a) Nada", value: "a", points: 1 },
        { label: "b) Menos de 10 €", value: "b", points: 2 },
        { label: "c) Entre 10 € y 30 €", value: "c", points: 3 },
        { label: "d) Más de 30", value: "d", points: 4 },
      ],
    },
    {
      id: 105,
      text: "¿Habéis revisado vuestras pólizas de seguros en el último año para ajustar coberturas?",
      options: [
        { label: "a) Sí, pero no hemos hecho cambios", value: "a", points: 3 },
        { label: "b) Sí, todos los seguros", value: "b", points: 4 },
        { label: "c) Sí, solo el seguro de hogar", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
    {
      id: 106,
      text: "¿Tenéis un seguro para la educación de los hijos?",
      options: [
        { label: "a) Sí, con aportes elevados y planificación", value: "a", points: 4 },
        { label: "b) Sí, con aportes periódicos", value: "b", points: 3 },
        { label: "c) Sí, con aportes esporádicos", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
      condition: {
        questionId: 3,
        expectedAnswer: "d",
        action: 'skip'
      }
    },
    {
      id: 107,
      text: "¿Tenéis algún seguro para gastos médicos imprevistos no cubiertos por el sistema público?",
      options: [
        { label: "a) Sí, con una cobertura amplia", value: "a", points: 4 },
        { label: "b) Sí, con una cobertura media", value: "b", points: 3 },
        { label: "c) Sí, con una cobertura básica", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
    {
      id: 108,
      text: "¿Tenéis algún seguro de asistencia en viaje o internacional?",
      options: [
        { label: "a) Sí, cobertura global y anual", value: "a", points: 4 },
        { label: "b) Sí, para cualquier tipo de viaje", value: "b", points: 3 },
        { label: "c) Sí, solo para viajes largos", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
    {
      id: 109,
      text: "¿Habéis tenido alguna vez que usar alguno de los seguros que tenéis?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, una vez", value: "b", points: 2 },
        { label: "c) Sí, varias veces", value: "c", points: 3 },
        { label: "d) Sí, frecuentemente", value: "d", points: 4 },
      ],
    },
    {
      id: 110,
      text: "¿Cómo calificaríais la relación calidad-precio de vuestros seguros?",
      options: [
        { label: "a) Excelente", value: "a", points: 4 },
        { label: "b) Buena", value: "b", points: 3 },
        { label: "c) Regular", value: "c", points: 2 },
        { label: "d) Muy mala", value: "d", points: 1 },
      ],
    },
  ],
};