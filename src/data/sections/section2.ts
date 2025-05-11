
import { Section } from "../../types/questionTypes";

export const section2: Section = {
  id: 2,
  title: "Ingresos del Hogar",
  description: "Información sobre los ingresos familiares",
  questions: [
    {
      id: 11,
      text: "¿Cuál es el ingreso neto mensual conjunto del hogar (sin contar pagas extras)?",
      options: [
        { label: "a) Menos de 1.200 €", value: "a", points: 1 },
        { label: "b) Entre 1.200 € y 2.000 €", value: "b", points: 2 },
        { label: "c) Entre 2.000 € y 3.500 €", value: "c", points: 3 },
        { label: "d) Más de 3.500 €", value: "d", points: 4 },
      ],
    },
    {
      id: 12,
      text: "¿Cuántas fuentes de ingreso diferentes tiene el hogar?",
      options: [
        { label: "a) Una", value: "a", points: 1 },
        { label: "b) Dos", value: "b", points: 3 },
        { label: "c) Tres o más", value: "c", points: 4 },
        { label: "d) Ninguna fija", value: "d", points: 0 },
      ],
    },
    {
      id: 13,
      text: "¿Reciben alguna ayuda, subsidio o prestación pública (INSS, SEPE, ayudas familiares)?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, menos de 200 € mensuales", value: "b", points: 2 },
        { label: "c) Sí, entre 200 € y 500 € mensuales", value: "c", points: 3 },
        { label: "d) Sí, más de 500 € mensuales", value: "d", points: 4 },
      ],
    },
    {
      id: 14,
      text: "¿Qué ingresos aproximados provienen de trabajo autónomo o negocio propio?",
      options: [
        { label: "a) Nada", value: "a", points: 1 },
        { label: "b) Menos de 500 € al mes", value: "b", points: 2 },
        { label: "c) Entre 500 € y 1.500 €", value: "c", points: 3 },
        { label: "d) Más de 1.500 €", value: "d", points: 4 },
      ],
    },
    {
      id: 15,
      text: "¿Reciben ingresos pasivos (alquileres, dividendos, etc.)?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, hasta 100 € al mes", value: "b", points: 2 },
        { label: "c) Entre 100 € y 500 €", value: "c", points: 3 },
        { label: "d) Más de 500 €", value: "d", points: 4 },
      ],
    },
  ],
};
