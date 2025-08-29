import { Section } from "../../types/questionTypes";

export const section7: Section = {
  id: 7,
  title: "Planificación Financiera",
  description: "Información sobre planificación financiera",
  questions: [
    {
      id: 111,
      text: "¿Tenéis un plan financiero familiar a largo plazo?",
      options: [
        { label: "a) Sí, con metas claras, plazos y acciones específicas", value: "a", points: 4 },
        { label: "b) Sí, con metas generales", value: "b", points: 3 },
        { label: "c) Sí, pero no está estructurado", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
    {
      id: 112,
      text: "¿Estáis realizando algún tipo de inversión a largo plazo (más de 5 años)?",
      options: [
        { label: "a) Sí, en inversiones inmobiliarias u otros activos", value: "a", points: 4 },
        { label: "b) Sí, en fondos de inversión o acciones", value: "b", points: 3 },
        { label: "c) Sí, en productos básicos como depósitos o cuentas remuneradas", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
    {
      id: 113,
      text: "¿Habéis hecho alguna vez una revisión financiera completa con un asesor?",
      options: [
        { label: "a) Sí, de manera regular", value: "a", points: 4 },
        { label: "b) Sí, una vez al año", value: "b", points: 3 },
        { label: "c) Sí, pero solo de forma puntual", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
    {
      id: 114,
      text: "¿Tenéis un presupuesto familiar mensual?",
      options: [
        { label: "a) Sí, y lo seguimos estrictamente", value: "a", points: 4 },
        { label: "b) Sí, lo seguimos parcialmente", value: "b", points: 3 },
        { label: "c) Sí, pero no lo seguimos regularmente", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
    {
      id: 115,
      text: "¿El presupuesto familiar incluye ahorros e inversiones?",
      options: [
        { label: "a) Sí, incluye ahorros e inversiones como prioridad", value: "a", points: 4 },
        { label: "b) Sí, pero de forma ocasional", value: "b", points: 3 },
        { label: "c) Solo incluye los gastos", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
    {
      id: 116,
      text: "¿Con qué frecuencia revisáis vuestra situación financiera (ingresos, gastos, ahorro, inversión, deudas)?",
      options: [
        { label: "a) De forma mensual o trimestral", value: "a", points: 4 },
        { label: "b) Una vez cada 6 meses", value: "b", points: 3 },
        { label: "c) Una vez al año", value: "c", points: 2 },
        { label: "d) Nunca", value: "d", points: 1 },
      ],
    },
    {
      id: 117,
      text: "¿Tenéis un plan de inversión para vuestra jubilación?",
      options: [
        { label: "a) Sí, con un plan claro y aportes regulares", value: "a", points: 4 },
        { label: "b) Sí, con aportes periódicos pequeños", value: "b", points: 3 },
        { label: "c) Sí, pero no está estructurado", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
    {
      id: 118,
      text: "¿Habéis ajustado vuestro plan financiero en los últimos 12 meses debido a cambios en la economía o en vuestros ingresos?",
      options: [
        { label: "a) Sí, lo hemos ajustado de forma significativa", value: "a", points: 4 },
        { label: "b) Sí, de manera puntual", value: "b", points: 3 },
        { label: "c) Sí, varias veces", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
    {
      id: 119,
      text: "¿Tenéis un objetivo financiero específico para los próximos 5 años?",
      options: [
        { label: "a) Sí, con metas claras y fechas definidas", value: "a", points: 4 },
        { label: "b) Sí, con un plan de acción", value: "b", points: 3 },
        { label: "c) Sí, pero es vago o general", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
    {
      id: 120,
      text: "¿Tenéis una estrategia para financiar la educación universitaria de vuestros hijos?",
      options: [
        { label: "a) Sí, con un plan detallado y aportes establecidos", value: "a", points: 4 },
        { label: "b) Sí, con ahorros e inversiones regulares", value: "b", points: 3 },
        { label: "c) Sí, pero no con una planificación clara", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
      condition: {
        questionId: 3,
        expectedAnswer: "d",
        action: 'skip'
      }
    },
    {
      id: 121,
      text: "¿Tenéis un plan para la compra de una vivienda o segunda vivienda?",
      options: [
        { label: "a) Sí, con un plan completo y fechas establecidas", value: "a", points: 4 },
        { label: "b) Sí, con ahorros o financiación prevista", value: "b", points: 3 },
        { label: "c) Sí, pero sin detalles", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
    {
      id: 122,
      text: "¿Estáis ahorrando para algún proyecto o compra importante (coche, reforma, vacaciones, etc.)?",
      options: [
        { label: "a) Sí, con un plan definido y aportes regulares", value: "a", points: 4 },
        { label: "b) Sí, con aportes esporádicos", value: "b", points: 3 },
        { label: "c) Sí, pero solo de forma ocasional", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
    {
      id: 123,
      text: "¿Consideráis que vuestro plan de ahorro actual es adecuado para vuestros objetivos financieros a largo plazo?",
      options: [
        { label: "a) Sí, y estamos en el camino correcto", value: "a", points: 4 },
        { label: "b) Sí, pero necesitamos ajustar algunas cosas", value: "b", points: 3 },
        { label: "c) Un poco adecuado, pero podría mejorar", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
    {
      id: 124,
      text: "¿Utilizáis herramientas o aplicaciones para gestionar vuestro presupuesto y finanzas?",
      options: [
        { label: "a) Sí, con un asesoramiento completo y seguimiento regular", value: "a", points: 4 },
        { label: "b) Sí, aplicaciones móviles o software financiero", value: "b", points: 3 },
        { label: "c) Sí, solo hojas de cálculo", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
    {
      id: 125,
      text: "¿Tenéis algún plan de sucesión o herencia?",
      options: [
        { label: "a) Sí, con asesoramiento legal y planificación fiscal", value: "a", points: 4 },
        { label: "b) Sí, con testamento o acuerdos familiares", value: "b", points: 3 },
        { label: "c) Sí, pero no está formalizado", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
    {
      id: 126,
      text: "¿Habéis considerado o tenéis un seguro de inversión?",
      options: [
        { label: "a) Sí, con un plan estructurado pero conservador", value: "a", points: 3 },
        { label: "b) Sí, con un plan agresivo de inversión", value: "b", points: 4 },
        { label: "c) Sí, pero solo con aportes pequeños", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
    {
      id: 127,
      text: "¿Tenéis acceso a un servicio de acompañamiento financiero (personal o profesional)?",
      options: [
        { label: "a) Sí, con un acompañamiento integral y constante", value: "a", points: 4 },
        { label: "b) Sí, en ciertos aspectos financieros", value: "b", points: 3 },
        { label: "c) Sí, solo ocasionalmente", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
    {
      id: 128,
      text: "¿Con qué frecuencia revisáis vuestras metas financieras con un acompañante financiero?",
      options: [
        { label: "a) De forma trimestral o mensual", value: "a", points: 4 },
        { label: "b) Cada 6 meses", value: "b", points: 3 },
        { label: "c) Una vez al año", value: "c", points: 2 },
        { label: "d) Nunca", value: "d", points: 1 },
      ],
      condition: {
        questionId: 127,
        expectedAnswer: "d",
        action: 'skip'
      }
    },
    {
      id: 129,
      text: "¿Tenéis alguna estrategia para proteger vuestro patrimonio familiar ante posibles imprevistos (enfermedades graves, pérdidas de empleo, etc.)?",
      options: [
        { label: "a) Sí, con un plan completo y coberturas adecuadas", value: "a", points: 4 },
        { label: "b) Sí, con una estrategia básica", value: "b", points: 3 },
        { label: "c) Sí, pero no de forma estructurada", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
    {
      id: 130,
      text: "¿Consideráis que estáis en el camino correcto para alcanzar vuestras metas financieras a largo plazo?",
      options: [
        { label: "a) Sí, y tenemos confianza en nuestro plan", value: "a", points: 4 },
        { label: "b) Sí, pero necesitamos mejorar algunos aspectos", value: "b", points: 3 },
        { label: "c) No estamos seguros", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
  ],
};