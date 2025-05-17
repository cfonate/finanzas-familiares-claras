
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
      text: "¿Cuántos hijos tenéis actualmente?",
      options: [
        { label: "a) 1", value: "a", points: 2 },
        { label: "b) 2", value: "b", points: 3 },
        { label: "c) 3 o más", value: "c", points: 1 },
        { label: "d) Ninguno", value: "d", points: 4 },
      ],
    },
    {
      id: 3,
      text: "¿Qué edades tienen vuestros hijos (elige la categoría que representen la mayoría de hijos)?",
      options: [
        { label: "a) 0–5 años", value: "a", points: 1 },
        { label: "b) 6–12 años", value: "b", points: 2 },
        { label: "c) 13–18 años", value: "c", points: 3 },
        { label: "d) Mayores de 18", value: "d", points: 4 },
      ],
    },
    {
      id: 4,
      text: "¿Quién se encarga principalmente de gestionar las finanzas de casa?",
      options: [
        { label: "a) El marido", value: "a", points: 2 },
        { label: "b) La mujer", value: "b", points: 2 },
        { label: "c) Ambos por igual", value: "c", points: 4 },
        { label: "d) Otro familiar", value: "d", points: 1 },
        { label: "e) nadie", value: "e", points: 1 },
      ],
    },
    {
      id: 5,
      text: "¿Cuál es vuestra situación de vivienda actual?",
      options: [
        { label: "a) Vivienda en propiedad, totalmente pagada", value: "a", points: 4 },
        { label: "b) Vivienda en propiedad con hipoteca", value: "b", points: 3 },
        { label: "c) Vivienda de alquiler", value: "c", points: 2 },
        { label: "d) Vivienda cedida por familiares", value: "d", points: 1 },
      ],
    },
    {
      id: 6,
      text: "¿Tenéis personas dependientes económicamente además de vuestros hijos?",
      options: [
        { label: "a) No", value: "a", points: 4 },
        { label: "b) 1 persona (ej. padre/madre)", value: "b", points: 3 },
        { label: "c) 2 personas", value: "c", points: 2 },
        { label: "d) 3 o más", value: "d", points: 1 },
      ],
    },
    {
      id: 7,
      text: "¿Cuál es el nivel de estudios más alto alcanzado por quien gestiona el dinero familiar?",
      options: [
        { label: "a) Educación primaria", value: "a", points: 1 },
        { label: "b) Educación secundaria", value: "b", points: 2 },
        { label: "c) Formación profesional o universidad incompleta", value: "c", points: 3 },
        { label: "d) Carrera universitaria o superior", value: "d", points: 4 },
        { label: "e) Sin estudios", value: "e", points: 1 },
      ],
    },
    {
      id: 8,
      text: "¿Trabajáis ambos miembros de la pareja actualmente?",
      options: [
        { label: "a) Sí, ambos a jornada completa", value: "a", points: 4 },
        { label: "b) Uno a jornada completa, otro parcial", value: "b", points: 3 },
        { label: "c) Solo uno trabaja", value: "c", points: 2 },
        { label: "d) Ninguno trabaja actualmente", value: "d", points: 1 },
      ],
    },
    {
      id: 9,
      text: "¿En qué tipo de zona vivís?",
      options: [
        { label: "a) Zona urbana (ciudad mediana o grande)", value: "a", points: 3 },
        { label: "b) Zona semiurbana o pueblo", value: "b", points: 4 },
        { label: "c) Zona rural", value: "c", points: 2 },
        { label: "d) Zona en transición", value: "d", points: 1 },
      ],
    },
    {
      id: 10,
      text: "¿Cuántos años lleváis como pareja estable?",
      options: [
        { label: "a) Menos de 5 años", value: "a", points: 1 },
        { label: "b) 5–10 años", value: "b", points: 2 },
        { label: "c) 11–20 años", value: "c", points: 3 },
        { label: "d) Más de 20 años", value: "d", points: 4 },
      ],
    },
  ],
};

