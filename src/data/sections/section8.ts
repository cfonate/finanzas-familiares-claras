
import { Section } from "../../types/questionTypes";

export const section8: Section = {
  id: 8,
  title: "Ingresos y Fuentes de Dinero",
  description: "Preguntas sobre variedad y estabilidad de sus ingresos.",
  questions: [
    {
      id: 131,
      text: "¿Tenéis alguna fuente de ingreso pasivo (rentas, intereses, dividendos, etc.)?",
      options: [
        { label: "Sí, con ingresos significativos", value: "a", points: 10 },
        { label: "Sí, con ingresos moderados", value: "b", points: 7 },
        { label: "Sí, pero con ingresos muy bajos", value: "c", points: 3 },
        { label: "No", value: "d", points: 0 },
      ],
    },
    {
      id: 132,
      text: "¿Tenéis alguna fuente de ingresos complementarios por inversiones (acciones, bonos, criptomonedas, etc.)?",
      options: [
        { label: "Sí, con ingresos sustanciales", value: "a", points: 10 },
        { label: "Sí, con ingresos moderados", value: "b", points: 7 },
        { label: "Sí, pero son pequeños ingresos", value: "c", points: 3 },
        { label: "No", value: "d", points: 0 },
      ],
    },
    {
      id: 133,
      text: "¿Recibís algún tipo de ayuda pública o subsidio (por ejemplo, ayudas por hijos, desempleo, etc.)?",
      options: [
        { label: "Sí, subsidios sustanciales (como pensiones o ayudas por discapacidad)", value: "a", points: 10 },
        { label: "Sí, ayudas periódicas", value: "b", points: 7 },
        { label: "Sí, ayudas puntuales", value: "c", points: 3 },
        { label: "No", value: "d", points: 0 },
      ],
    },
    {
      id: 134,
      text: "¿Tenéis algún tipo de pensión o ahorro para la jubilación además del sistema público?",
      options: [
        { label: "Sí, con aportes elevados y planificación", value: "a", points: 10 },
        { label: "Sí, con aportes regulares", value: "b", points: 7 },
        { label: "Sí, pero solo con aportes ocasionales", value: "c", points: 3 },
        { label: "No", value: "d", points: 0 },
      ],
    },
    {
      id: 135,
      text: "¿Qué porcentaje de vuestros ingresos destináis a vuestro fondo de ahorro o inversión?",
      options: [
        { label: "Más del 25 %", value: "a", points: 10 },
        { label: "Entre el 10 % y el 25 %", value: "b", points: 7 },
        { label: "Menos del 10 %", value: "c", points: 3 },
        { label: "Nada", value: "d", points: 0 },
      ],
    },
    {
      id: 136,
      text: "¿Recibís ingresos adicionales por trabajos familiares (venta de productos, servicios de los hijos, etc.)?",
      options: [
        { label: "Sí, con ingresos sustanciales", value: "a", points: 10 },
        { label: "Sí, con ingresos regulares", value: "b", points: 7 },
        { label: "Sí, pero son ingresos pequeños", value: "c", points: 3 },
        { label: "No", value: "d", points: 0 },
      ],
    },
    {
      id: 137,
      text: "¿Estáis considerando la posibilidad de aumentar vuestros ingresos mediante nuevas fuentes (como negocios, freelance, etc.)?",
      options: [
        { label: "Sí, con acciones concretas para generar más ingresos", value: "a", points: 10 },
        { label: "Sí, con una planificación en mente", value: "b", points: 7 },
        { label: "Sí, pero no de forma inmediata", value: "c", points: 3 },
        { label: "No", value: "d", points: 0 },
      ],
    },
    {
      id: 138,
      text: "¿Cuál es vuestra principal preocupación con respecto a vuestros ingresos?",
      options: [
        { label: "No saber cómo optimizar o incrementar los ingresos", value: "a", points: 3 },
        { label: "Falta de ingresos pasivos", value: "b", points: 5 },
        { label: "Ingresos inestables o fluctuantes", value: "c", points: 7 },
        { label: "No tener suficientes ingresos", value: "d", points: 10 },
      ],
    },
    {
      id: 139,
      text: "¿Cómo gestionáis el dinero adicional que recibís (bonificaciones, ingresos extraordinarios)?",
      options: [
        { label: "Lo utilizamos para pagar deudas", value: "a", points: 7 },
        { label: "Lo invertimos en productos de ahorro o inversión", value: "b", points: 10 },
        { label: "Lo ahorramos sin un plan específico", value: "c", points: 5 },
        { label: "Lo gastamos inmediatamente", value: "d", points: 0 },
      ],
    },
    {
      id: 140,
      text: "¿Habéis considerado algún tipo de inversión inmobiliaria como fuente de ingresos pasivos?",
      options: [
        { label: "Sí, y estamos activos en el mercado inmobiliario", value: "a", points: 10 },
        { label: "Sí, pero nunca lo hemos hecho", value: "b", points: 5 },
        { label: "Sí, pero solo con inversión moderada", value: "c", points: 7 },
        { label: "No", value: "d", points: 0 },
      ],
    },
    {
      id: 141,
      text: "¿Estáis satisfechos con el nivel de ingresos actuales?",
      options: [
        { label: "Sí, estamos muy satisfechos", value: "a", points: 10 },
        { label: "Sí, pero hay margen de mejora", value: "b", points: 7 },
        { label: "En general, no estamos satisfechos", value: "c", points: 3 },
        { label: "No", value: "d", points: 0 },
      ],
    },
    {
      id: 142,
      text: "¿Estáis interesados en aumentar sus ingresos mediante formación o educación continua (cursos, estudios, etc.)?",
      options: [
        { label: "Sí, con acciones específicas y cursos programados", value: "a", points: 10 },
        { label: "Sí, con un plan a corto plazo", value: "b", points: 7 },
        { label: "Sí, pero no de forma inmediata", value: "c", points: 3 },
        { label: "No", value: "d", points: 0 },
      ],
    },
    {
      id: 143,
      text: "¿Utilizáis alguna plataforma de inversión digital (acciones, criptomonedas, etc.)?",
      options: [
        { label: "Sí, y estamos activos en múltiples plataformas", value: "a", points: 10 },
        { label: "Sí, con productos diversificados", value: "b", points: 7 },
        { label: "Sí, pero solo en productos básicos", value: "c", points: 3 },
        { label: "No", value: "d", points: 0 },
      ],
    },
    {
      id: 144,
      text: "¿Cuál es vuestro nivel de satisfacción con los ingresos provenientes de vuestro trabajo autónomo o freelance?",
      options: [
        { label: "No trabajo de forma autónoma o freelance", value: "a", points: 5 },
        { label: "Insuficientes para cubrir mis necesidades", value: "b", points: 0 },
        { label: "Suficientes, pero no me permiten ahorrar o invertir mucho", value: "c", points: 5 },
        { label: "Muy satisfactorios, me permiten cubrir necesidades y ahorrar", value: "d", points: 10 },
      ],
    },
    {
      id: 145,
      text: "¿Consideráis que deberiáis diversificar vuestras fuentes de ingresos (invertir, emprender, etc.)?",
      options: [
        { label: "Sí, y ya estamos implementando cambios para diversificar", value: "a", points: 10 },
        { label: "Sí, pero aún no hemos comenzado", value: "b", points: 5 },
        { label: "Tal vez, pero no es una prioridad", value: "c", points: 3 },
        { label: "No, estamos bien con nuestras fuentes actuales", value: "d", points: 7 },
      ],
    },
  ]
};
