
import { Section } from "../../types/questionTypes";

export const section3: Section = {
  id: 3,
  title: "Gastos Mensuales",
  description: "Información sobre los gastos familiares",
  questions: [
    {
      id: 26,
      text: "¿Lleváis algún control de vuestros gastos mensuales?",
      options: [
        { label: "a) Sí, detallado en una hoja de cálculo o app", value: "a", points: 4 },
        { label: "b) Sí, pero solo con anotaciones generales", value: "b", points: 3 },
        { label: "c) Solo controlamos los gastos más grandes", value: "c", points: 2 },
        { label: "d) No llevamos ningún tipo de registro", value: "d", points: 1 },
      ],
    },
    {
      id: 27,
      text: "¿Cuánto gastáis mensualmente en alimentación (supermercado, panadería, etc.)?",
      options: [
        { label: "a) Menos de 300 €", value: "a", points: 4 },
        { label: "b) Entre 300 € y 500 €", value: "b", points: 3 },
        { label: "c) Entre 500 € y 700 €", value: "c", points: 2 },
        { label: "d) Más de 700 €", value: "d", points: 1 },
      ],
    },
    {
      id: 28,
      text: "¿Cuánto pagáis mensualmente por alquiler o hipoteca?",
      options: [
        { label: "a) Menos de 400 €", value: "a", points: 4 },
        { label: "b) Entre 400 € y 700 €", value: "b", points: 3 },
        { label: "c) Entre 700 € y 1.000 €", value: "c", points: 2 },
        { label: "d) Más de 1.000 €", value: "d", points: 1 },
      ],
    },
    {
      id: 29,
      text: "¿Cuánto gastáis al mes en educación por el total de vuestros hijos (colegios, comedor, material escolar, etc.)?",
      options: [
        { label: "a) Nada o menos de 50 €", value: "a", points: 4 },
        { label: "b) Entre 50 € y 150 €", value: "b", points: 3 },
        { label: "c) Entre 150 € y 300 €", value: "c", points: 2 },
        { label: "d) Más de 300 €", value: "d", points: 1 },
      ],
      condition: {
        questionId: 3,
        expectedAnswer: "d",
        action: 'skip'
      }
    },
    {
      id: 30,
      text: "¿Cuánto gastáis al mes en transporte (gasolina de vehículo propio, transporte público)?",
      options: [
        { label: "a) Menos de 50 €", value: "a", points: 4 },
        { label: "b) Entre 50 € y 150 €", value: "b", points: 3 },
        { label: "c) Entre 150 € y 250 €", value: "c", points: 2 },
        { label: "d) Más de 250 €", value: "d", points: 1 },
      ],
    },
    {
      id: 31,
      text: "¿Cuánto gastáis mensualmente en suministros del hogar (agua, luz, gas, internet)?",
      options: [
        { label: "a) Menos de 100 €", value: "a", points: 4 },
        { label: "b) Entre 100 € y 200 €", value: "b", points: 3 },
        { label: "c) Entre 200 € y 300 €", value: "c", points: 2 },
        { label: "d) Más de 300 €", value: "d", points: 1 },
      ],
    },
    {
      id: 32,
      text: "¿Cuánto gastáis al mes en ocio y entretenimiento (salidas, streaming, etc.)?",
      options: [
        { label: "a) Nada o menos de 30 €", value: "a", points: 4 },
        { label: "b) Entre 30 € y 100 €", value: "b", points: 3 },
        { label: "c) Entre 100 € y 200 €", value: "c", points: 2 },
        { label: "d) Más de 200 €", value: "d", points: 1 },
      ],
    },
    {
      id: 33,
      text: "¿Cuánto gastáis al mes en productos de salud (medicinas, consultas, seguros, etc.)?",
      options: [
        { label: "a) Nada o menos de 30 €", value: "a", points: 4 },
        { label: "b) Entre 30 € y 100 €", value: "b", points: 3 },
        { label: "c) Entre 100 € y 200 €", value: "c", points: 2 },
        { label: "d) Más de 200 €", value: "d", points: 1 },
      ],
    },
    {
      id: 34,
      text: "¿Cuánto gastáis al mes en ropa y calzado para la familia?",
      options: [
        { label: "a) Nada o solo en rebajas puntuales", value: "a", points: 4 },
        { label: "b) Hasta 50 €", value: "b", points: 3 },
        { label: "c) Entre 50 € y 150 €", value: "c", points: 2 },
        { label: "d) Más de 150 €", value: "d", points: 1 },
      ],
    },
    {
      id: 35,
      text: "¿Cuánto gastáis por suscripciones digitales (Netflix, Spotify, Disney+, etc.)?",
      options: [
        { label: "a) Nada", value: "a", points: 4 },
        { label: "b) Hasta 15 €", value: "b", points: 3 },
        { label: "c) Entre 15 € y 40 €", value: "c", points: 2 },
        { label: "d) Más de 40 €", value: "d", points: 1 },
      ],
    },
    {
      id: 36,
      text: "¿Con qué frecuencia compráis comida a domicilio (apps, restaurantes)?",
      options: [
        { label: "a) Nunca", value: "a", points: 4 },
        { label: "b) 1–2 veces al mes", value: "b", points: 3 },
        { label: "c) 1 vez por semana", value: "c", points: 2 },
        { label: "d) Varias veces por semana", value: "d", points: 1 },
      ],
    },
    {
      id: 37,
      text: "¿Cuánto gastáis en mantenimiento del coche o transporte privado (ITV, talleres, peajes)?",
      options: [
        { label: "a) Menos de 20 € al mes", value: "a", points: 4 },
        { label: "b) 20 €–50 €", value: "b", points: 3 },
        { label: "c) 50 €–100 €", value: "c", points: 2 },
        { label: "d) Más de 100 €", value: "d", points: 1 },
      ],
    },
    {
      id: 38,
      text: "¿Cuánto gastáis mensualmente en actividades extracurriculares de los hijos (deporte, música, etc.)?",
      options: [
        { label: "a) Nada", value: "a", points: 4 },
        { label: "b) Hasta 50 €", value: "b", points: 3 },
        { label: "c) Entre 50 € y 150 €", value: "c", points: 2 },
        { label: "d) Más de 150 €", value: "d", points: 1 },
      ],
      condition: {
        questionId: 3,
        expectedAnswer: "d",
        action: 'skip'
      }
    },
    {
      id: 39,
      text: "¿Qué importe destináis a regalos y celebraciones familiares al mes (cumpleaños, fiestas, etc.)?",
      options: [
        { label: "a) Nada", value: "a", points: 4 },
        { label: "b) Hasta 30 €", value: "b", points: 3 },
        { label: "c) Entre 30 € y 100 €", value: "c", points: 2 },
        { label: "d) Más de 100 €", value: "d", points: 1 },
      ],
    },
    {
      id: 40,
      text: "¿Cuánto pagáis mensualmente en comisiones bancarias, mantenimiento de cuentas, etc.?",
      options: [
        { label: "a) Nada", value: "a", points: 4 },
        { label: "b) Hasta 10 €", value: "b", points: 3 },
        { label: "c) Entre 10 € y 30 €", value: "c", points: 2 },
        { label: "d) Más de 30 €", value: "d", points: 1 },
      ],
    },
    {
      id: 41,
      text: "¿Cuánto gastáis en mascotas (alimentación, veterinario, etc.)?",
      options: [
        { label: "a) No tenemos mascotas", value: "a", points: 4 },
        { label: "b) Hasta 30 €", value: "b", points: 3 },
        { label: "c) Entre 30 € y 80 €", value: "c", points: 2 },
        { label: "d) Más de 80 €", value: "d", points: 1 },
      ],
    },
    {
      id: 42,
      text: "¿Tenéis gastos mensuales por cuidado de personas mayores o dependientes?",
      options: [
        { label: "a) No", value: "a", points: 4 },
        { label: "b) Sí, hasta 100 €", value: "b", points: 3 },
        { label: "c) Entre 100 € y 300 €", value: "c", points: 2 },
        { label: "d) Más de 300 €", value: "d", points: 1 },
      ],
    },
    {
      id: 43,
      text: "¿Cuánto gastáis mensualmente en productos de higiene y limpieza del hogar?",
      options: [
        { label: "a) Menos de 30 €", value: "a", points: 4 },
        { label: "b) Entre 30 € y 60 €", value: "b", points: 3 },
        { label: "c) Entre 60 € y 100 €", value: "c", points: 2 },
        { label: "d) Más de 100 €", value: "d", points: 1 },
      ],
    },
    {
      id: 44,
      text: "¿Cuánto destináis a gastos imprevistos al mes?",
      options: [
        { label: "a) Nada", value: "a", points: 1 },
        { label: "b) Hasta 50 €", value: "b", points: 2 },
        { label: "c) Entre 50 € y 150 €", value: "c", points: 3 },
        { label: "d) Más de 150 €", value: "d", points: 4 },
      ],
    },
    {
      id: 45,
      text: "¿Cuánto gastáis en tecnología (móvil, apps, mantenimiento de equipos) mensualmente?",
      options: [
        { label: "a) Nada", value: "a", points: 4 },
        { label: "b) Hasta 20 €", value: "b", points: 3 },
        { label: "c) Entre 20 € y 50 €", value: "c", points: 2 },
        { label: "d) Más de 50 €", value: "d", points: 1 },
      ],
    },
    {
      id: 46,
      text: "¿Tenéis gastos en cursos o formación profesional para adultos?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, hasta 30 € al mes", value: "b", points: 2 },
        { label: "c) Entre 30 € y 100 €", value: "c", points: 3 },
        { label: "d) Más de 100 €", value: "d", points: 4 },
      ],
    },
    {
      id: 47,
      text: "¿Cuánto gastáis en seguros (vida, coche, hogar, etc.) mensualmente?",
      options: [
        { label: "a) Nada", value: "a", points: 1 },
        { label: "b) Hasta 50 €", value: "b", points: 2 },
        { label: "c) Entre 50 € y 100 €", value: "c", points: 3 },
        { label: "d) Más de 100 €", value: "d", points: 4 },
      ],
    },
    {
      id: 48,
      text: "¿Realizáis donaciones o colaboráis con causas sociales regularmente?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, hasta 10 € al mes", value: "b", points: 2 },
        { label: "c) Entre 10 € y 30 €", value: "c", points: 3 },
        { label: "d) Más de 30 €", value: "d", points: 4 },
      ],
    },
    {
      id: 49,
      text: "¿Cuánto gastáis mensualmente en cafés, snacks o comidas fuera del hogar?",
      options: [
        { label: "a) Menos de 20 €", value: "a", points: 4 },
        { label: "b) Entre 20 € y 50 €", value: "b", points: 3 },
        { label: "c) Entre 50 € y 100 €", value: "c", points: 2 },
        { label: "d) Más de 100 €", value: "d", points: 1 },
      ],
    },
    {
      id: 50,
      text: "¿Tenéis gastos fijos en servicios de cuidado del hogar (limpieza, canguro, jardinería, etc.)?",
      options: [
        { label: "a) No", value: "a", points: 4 },
        { label: "b) Sí, hasta 50 €", value: "b", points: 3 },
        { label: "c) Entre 50 € y 150 €", value: "c", points: 2 },
        { label: "d) Más de 150 €", value: "d", points: 1 },
      ],
    },
  ],
};
