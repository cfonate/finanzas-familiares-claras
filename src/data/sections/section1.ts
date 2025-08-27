import { Section } from "../../types/questionTypes";

export const section1: Section = {
  id: 1,
  title: "Datos Generales",
  description: "Información básica sobre la situación familiar",
  questions: [
    {
      id: 1,
      text: "¿Cuál es vuestro estado civil actual?",
      options: [
        { label: "a) Casados legalmente", value: "a", points: 4 },
        { label: "b) Pareja de hecho", value: "b", points: 3 },
        { label: "c) Separados", value: "c", points: 2 },
        { label: "d) Divorciados", value: "d", points: 1 },
      ],
    },
    {
      id: 2,
      text: "¿Cuántos años lleváis como pareja estable?",
      options: [
        { label: "a) Menos de 5 años", value: "a", points: 1 },
        { label: "b) Entre 5 y 10 años", value: "b", points: 2 },
        { label: "c) Entre 11 y 20 años", value: "c", points: 3 },
        { label: "d) Más de 20 años", value: "d", points: 4 },
      ],
    },
    {
      id: 3,
      text: "¿Cuántos hijos tenéis actualmente?",
      options: [
        { label: "a) Uno", value: "a", points: 2 },
        { label: "b) Dos", value: "b", points: 3 },
        { label: "c) Tres o más", value: "c", points: 1 },
        { label: "d) Ninguno", value: "d", points: 4 },
      ],
    },
    {
      id: 4,
      text: "¿Cuál es la edad media de tus hijos?",
      options: [
        { label: "a) De 0 a 5 años", value: "a", points: 1 },
        { label: "b) De 6 a 12 años", value: "b", points: 2 },
        { label: "c) De 13 a 18 años", value: "c", points: 3 },
        { label: "d) Mayores de 18 años", value: "d", points: 4 },
      ],
      condition: {
        questionId: 3,
        expectedAnswer: "d",
        action: 'skip'
      }
    },
    {
      id: 5,
      text: "¿Quién gestiona principalmente las finanzas del hogar?",
      options: [
        { label: "a) El marido", value: "a", points: 2 },
        { label: "b) La mujer", value: "b", points: 2 },
        { label: "c) Ambos por igual", value: "c", points: 4 },
        { label: "d) Otro familiar", value: "d", points: 1 },
        { label: "e) Nadie", value: "e", points: 1 },
      ],
    },
    {
      id: 6,
      text: "¿Cuál es vuestra situación actual respecto a la vivienda?",
      options: [
        { label: "a) Vivienda en propiedad, totalmente pagada", value: "a", points: 4 },
        { label: "b) Vivienda en propiedad con hipoteca", value: "b", points: 3 },
        { label: "c) Vivienda en alquiler", value: "c", points: 2 },
        { label: "d) Vivienda cedida por familiares", value: "d", points: 1 },
      ],
    },
    {
      id: 7,
      text: "¿Tenéis personas económicamente dependientes que no sean hijos?",
      options: [
        { label: "a) No", value: "a", points: 4 },
        { label: "b) Una persona (por ejemplo, padre o madre)", value: "b", points: 3 },
        { label: "c) Dos personas", value: "c", points: 2 },
        { label: "d) Tres o más", value: "d", points: 1 },
      ],
    },
    {
      id: 8,
      text: "¿Cuál es el nivel de estudios más alto alcanzado por la persona que gestiona las finanzas familiares?",
      options: [
        { label: "a) Educación primaria", value: "a", points: 1 },
        { label: "b) Educación secundaria", value: "b", points: 2 },
        { label: "c) Formación profesional o universidad incompleta", value: "c", points: 3 },
        { label: "d) Carrera universitaria o estudios superiores", value: "d", points: 4 },
        { label: "e) Sin estudios", value: "e", points: 1 },
        { label: "f) NS/NC", value: "f", points: 2 },
      ],
      condition: {
        questionId: 5,
        expectedAnswer: "e",
        action: 'skip'
      }
    },
    {
      id: 9,
      text: "¿Trabajáis actualmente ambos miembros de la pareja?",
      options: [
        { label: "a) Sí, ambos a jornada completa", value: "a", points: 4 },
        { label: "b) Uno a jornada completa y el otro a tiempo parcial", value: "b", points: 3 },
        { label: "c) Solo uno trabaja", value: "c", points: 2 },
        { label: "d) Ninguno trabaja actualmente", value: "d", points: 1 },
      ],
    },
    {
      id: 10,
      text: "¿En qué tipo de zona vivís?",
      options: [
        { label: "a) Zona urbana (ciudad mediana o grande)", value: "a", points: 3 },
        { label: "b) Zona semiurbana o pueblo", value: "b", points: 4 },
        { label: "c) Zona rural", value: "c", points: 2 },
        { label: "d) Zona en proceso de transición", value: "d", points: 1 },
      ],
    },
  ],
};