
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
        { label: "Casados legalmente", value: "a", points: 4 },
        { label: "Pareja de hecho", value: "b", points: 3 },
        { label: "Separados", value: "c", points: 2 },
        { label: "Divorciados", value: "d", points: 1 },
      ],
    },
    {
      id: 2,
      text: "¿Cuántos hijos tenéis actualmente?",
      options: [
        { label: "1", value: "a", points: 3 },
        { label: "2", value: "b", points: 2 },
        { label: "3 o más", value: "c", points: 1 },
        { label: "Ninguno", value: "d", points: 4 },
      ],
    },
    {
      id: 3,
      text: "¿Qué edades tienen vuestros hijos (elegid la categoría que represente a la mayoría de hijos)?",
      options: [
        { label: "0–5 años", value: "a", points: 1 },
        { label: "6–12 años", value: "b", points: 2 },
        { label: "13–18 años", value: "c", points: 3 },
        { label: "Mayores de 18", value: "d", points: 4 },
      ],
    },
    {
      id: 4,
      text: "¿Quiénes se encargan principalmente de gestionar las finanzas de casa?",
      options: [
        { label: "El marido", value: "a", points: 2 },
        { label: "La mujer", value: "b", points: 2 },
        { label: "Ambos por igual", value: "c", points: 4 },
        { label: "Otro familiar", value: "d", points: 1 },
        { label: "Nadie", value: "e", points: 1 },
      ],
    },
    {
      id: 5,
      text: "¿Cuál es vuestra situación de vivienda actual?",
      options: [
        { label: "Vivienda en propiedad, totalmente pagada", value: "a", points: 4 },
        { label: "Vivienda en propiedad con hipoteca", value: "b", points: 3 },
        { label: "Vivienda de alquiler", value: "c", points: 2 },
        { label: "Vivienda cedida por familiares", value: "d", points: 1 },
      ],
    },
    {
      id: 6,
      text: "¿Tenéis personas dependientes económicamente además de vuestros hijos?",
      options: [
        { label: "No", value: "a", points: 4 },
        { label: "1 persona (ej. padre/madre)", value: "b", points: 3 },
        { label: "2 personas", value: "c", points: 2 },
        { label: "3 o más", value: "d", points: 1 },
      ],
    },
    {
      id: 7,
      text: "¿Cuál es el nivel de estudios más alto alcanzado por quienes gestionan el dinero familiar?",
      options: [
        { label: "Educación primaria", value: "a", points: 1 },
        { label: "Educación secundaria", value: "b", points: 2 },
        { label: "Formación profesional o universidad incompleta", value: "c", points: 3 },
        { label: "Carrera universitaria o superior", value: "d", points: 4 },
      ],
    },
    {
      id: 8,
      text: "¿Trabajáis ambos miembros de la pareja actualmente?",
      options: [
        { label: "Sí, ambos a jornada completa", value: "a", points: 4 },
        { label: "Uno a jornada completa, otro parcial", value: "b", points: 3 },
        { label: "Solo uno trabaja", value: "c", points: 2 },
        { label: "Ninguno trabaja actualmente", value: "d", points: 1 },
      ],
    },
    {
      id: 9,
      text: "¿En qué tipo de zona vivís?",
      options: [
        { label: "Zona urbana (ciudad mediana o grande)", value: "a", points: 3 },
        { label: "Zona semiurbana o pueblo", value: "b", points: 4 },
        { label: "Zona rural", value: "c", points: 2 },
        { label: "Zona en transición", value: "d", points: 1 },
      ],
    },
    {
      id: 10,
      text: "¿Cuántos años lleváis como pareja estable?",
      options: [
        { label: "Menos de 5 años", value: "a", points: 1 },
        { label: "5–10 años", value: "b", points: 2 },
        { label: "11–20 años", value: "c", points: 3 },
        { label: "Más de 20 años", value: "d", points: 4 },
      ],
    },
  ],
};
