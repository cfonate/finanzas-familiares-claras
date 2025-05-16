
import { Section } from "../../types/questionTypes";

export const section3: Section = {
  id: 3,
  title: "Gastos Mensuales",
  description: "Información sobre los gastos familiares",
  questions: [
    {
      id: 26,
      text: "¿Lleváis algún control de sus gastos mensuales?",
      options: [
        { label: "a) Sí, detallado en una hoja de cálculo o app", value: "a", points: 4 },
        { label: "b) Sí, pero solo con anotaciones generales", value: "b", points: 3 },
        { label: "c) Solo controlamos los gastos más grandes", value: "c", points: 2 },
        { label: "d) No llevamos ningún registro", value: "d", points: 1 },
      ],
    },
    {
      id: 27,
      text: "¿Cuánto gastan mensualmente en alimentación (supermercado, panadería, etc.)?",
      options: [
        { label: "a) Menos de 300 €", value: "a", points: 4 },
        { label: "b) Entre 300 € y 500 €", value: "b", points: 3 },
        { label: "c) Entre 500 € y 700 €", value: "c", points: 2 },
        { label: "d) Más de 700 €", value: "d", points: 1 },
      ],
    },
    {
      id: 28,
      text: "¿Cuánto pagan mensualmente por alquiler o hipoteca?",
      options: [
        { label: "a) Menos de 400 €", value: "a", points: 4 },
        { label: "b) Entre 400 € y 700 €", value: "b", points: 3 },
        { label: "c) Entre 700 € y 1.000 €", value: "c", points: 2 },
        { label: "d) Más de 1.000 €", value: "d", points: 1 },
      ],
    },
  ],
};
