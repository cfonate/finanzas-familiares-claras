
import { Section } from "../../types/questionTypes";

export const section4: Section = {
  id: 4,
  title: "Ahorro y Fondo de Emergencia",
  description: "Información sobre ahorro y fondos de emergencia",
  questions: [
    {
      id: 51,
      text: "¿Tienen actualmente algún tipo de ahorro familiar?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, menor de 1.000 €", value: "b", points: 2 },
        { label: "c) Entre 1.000 € y 5.000 €", value: "c", points: 3 },
        { label: "d) Más de 5.000 €", value: "d", points: 4 },
      ],
    },
    {
      id: 52,
      text: "¿Con qué frecuencia ahorrais?",
      options: [
        { label: "a) Nunca", value: "a", points: 1 },
        { label: "b) Solo si sobra algo", value: "b", points: 2 },
        { label: "c) Mensualmente una cantidad fija", value: "c", points: 3 },
        { label: "d) Varias veces al mes o según plan establecido", value: "d", points: 4 },
      ],
    },
    {
      id: 53,
      text: "¿Cuánto ahorrais aproximadamente cada mes?",
      options: [
        { label: "a) Nada", value: "a", points: 1 },
        { label: "b) Hasta 100 €", value: "b", points: 2 },
        { label: "c) Entre 100 € y 300 €", value: "c", points: 3 },
        { label: "d) Más de 300 €", value: "d", points: 4 },
      ],
    },
  ],
};
