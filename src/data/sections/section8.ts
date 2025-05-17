
import { Section } from "../../types/questionTypes";

export const section8: Section = {
  id: 8,
  title: "Ingresos y Fuentes de Dinero",
  description: "Preguntas sobre variedad y estabilidad de sus ingresos.",
  questions: [
    {
      id: 131,
      text: "¿Cuál es vuestra fuente principal de ingresos?",
      options: [
        { label: "a) Sueldos de trabajo por cuenta ajena", value: "a", points: 1 },
        { label: "b) Trabajo autónomo o freelance", value: "b", points: 2 },
        { label: "c) Ingresos pasivos (alquileres, inversiones, etc.)", value: "c", points: 3 },
        { label: "d) Otros (herencias, pensiones, etc.)", value: "d", points: 4 },
      ]
    },
    {
      id: 132,
      text: "¿Cuál es vuestro ingreso mensual neto total (después de impuestos y deducciones)?",
      options: [
        { label: "a) Menos de 1.000 €", value: "a", points: 1 },
        { label: "b) Entre 1.000 € y 2.000 €", value: "b", points: 2 },
        { label: "c) Entre 2.000 € y 4.000 €", value: "c", points: 3 },
        { label: "d) Más de 4.000 €", value: "d", points: 4 },
      ]
    },
    {
      id: 133,
      text: "¿Recibís algún tipo de ingreso adicional fuera de vuestro salario principal?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, de forma ocasional (por ejemplo, trabajos esporádicos)", value: "b", points: 2 },
        { label: "c) Sí, de forma regular (por ejemplo, alquileres, freelances)", value: "c", points: 3 },
        { label: "d) Sí, de forma sustancial (por ejemplo, ingresos de empresas, pensiones, etc.)", value: "d", points: 4 },
      ]
    },
    {
      id: 134,
      text: "¿Tenéis alguna fuente de ingreso pasivo (rentas, intereses, dividendos, etc.)?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, pero con ingresos muy bajos", value: "b", points: 2 },
        { label: "c) Sí, con ingresos moderados", value: "c", points: 3 },
        { label: "d) Sí, con ingresos significativos", value: "d", points: 4 },
      ]
    },
    {
      id: 135,
      text: "¿Tenéis alguna fuente de ingresos complementarios por inversiones (acciones, bonos, criptomonedas, etc.)?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, pero son pequeños ingresos", value: "b", points: 2 },
        { label: "c) Sí, con ingresos moderados", value: "c", points: 3 },
        { label: "d) Sí, con ingresos sustanciales", value: "d", points: 4 },
      ]
    },
    {
      id: 136,
      text: "¿Recibís algún tipo de ayuda pública o subsidio (por ejemplo, ayudas por hijos, desempleo, etc.)?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, ayudas puntuales", value: "b", points: 2 },
        { label: "c) Sí, ayudas periódicas", value: "c", points: 3 },
        { label: "d) Sí, subsidios sustanciales (como pensiones o ayudas por discapacidad)", value: "d", points: 4 },
      ]
    },
    {
      id: 137,
      text: "¿Tenéis algún tipo de pensión o ahorro para la jubilación además del sistema público?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, pero solo con aportes ocasionales", value: "b", points: 2 },
        { label: "c) Sí, con aportes regulares", value: "c", points: 3 },
        { label: "d) Sí, con aportes elevados y planificación", value: "d", points: 4 },
      ]
    },
    {
      id: 138,
      text: "¿Qué porcentaje de vuestros ingresos destináis a vuestro fondo de ahorro o inversión?",
      options: [
        { label: "a) Nada", value: "a", points: 1 },
        { label: "b) Menos del 10 %", value: "b", points: 2 },
        { label: "c) Entre el 10 % y el 25 %", value: "c", points: 3 },
        { label: "d) Más del 25 %", value: "d", points: 4 },
      ]
    },
    {
      id: 139,
      text: "¿Recibís ingresos adicionales por trabajos familiares (venta de productos, servicios de los hijos, etc.)?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, pero son ingresos pequeños", value: "b", points: 2 },
        { label: "c) Sí, con ingresos regulares", value: "c", points: 3 },
        { label: "d) Sí, con ingresos sustanciales", value: "d", points: 4 },
      ]
    },
    {
      id: 140,
      text: "¿Estáis considerando la posibilidad de aumentar vuestros ingresos mediante nuevas fuentes (como negocios, freelance, etc.)?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, pero no de forma inmediata", value: "b", points: 2 },
        { label: "c) Sí, con una planificación en mente", value: "c", points: 3 },
        { label: "d) Sí, con acciones concretas para generar más ingresos", value: "d", points: 4 },
      ]
    },
    {
      id: 141,
      text: "¿Cuál es vuestra principal preocupación con respecto a vuestros ingresos?",
      options: [
        { label: "a) No tener suficientes ingresos", value: "a", points: 1 },
        { label: "b) Ingresos inestables o fluctuantes", value: "b", points: 2 },
        { label: "c) Falta de ingresos pasivos", value: "c", points: 3 },
        { label: "d) No saber cómo optimizar o incrementar los ingresos", value: "d", points: 4 },
      ]
    },
    {
      id: 142,
      text: "¿Cómo gestionáis el dinero adicional que recibís (bonificaciones, ingresos extraordinarios)?",
      options: [
        { label: "a) Lo gastamos inmediatamente", value: "a", points: 1 },
        { label: "b) Lo ahorramos sin un plan específico", value: "b", points: 2 },
        { label: "c) Lo invertimos en productos de ahorro o inversión", value: "c", points: 3 },
        { label: "d) Lo utilizamos para pagar deudas", value: "d", points: 4 },
      ]
    },
    {
      id: 143,
      text: "¿Habéis considerado algún tipo de inversión inmobiliaria como fuente de ingresos pasivos?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, pero nunca lo hemos hecho", value: "b", points: 2 },
        { label: "c) Sí, pero solo con inversión moderada", value: "c", points: 3 },
        { label: "d) Sí, y estamos activos en el mercado inmobiliario", value: "d", points: 4 },
      ]
    },
    {
      id: 144,
      text: "¿Tenéis algún negocio o actividad emprendedora aparte de su empleo principal?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, pero es de bajo ingreso", value: "b", points: 2 },
        { label: "c) Sí, con ingresos moderados", value: "c", points: 3 },
        { label: "d) Sí, con ingresos significativos y crecimiento", value: "d", points: 4 },
      ]
    },
    {
      id: 145,
      text: "¿Estáis satisfechos con el nivel de ingresos actuales?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) En general, no estamos satisfechos", value: "b", points: 2 },
        { label: "c) Sí, pero hay margen de mejora", value: "c", points: 3 },
        { label: "d) Sí, estamos muy satisfechos", value: "d", points: 4 },
      ]
    },
    {
      id: 146,
      text: "¿Estáis interesados en aumentar sus ingresos mediante formación o educación continua (cursos, estudios, etc.)?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, pero no de forma inmediata", value: "b", points: 2 },
        { label: "c) Sí, con un plan a corto plazo", value: "c", points: 3 },
        { label: "d) Sí, con acciones específicas y cursos programados", value: "d", points: 4 },
      ]
    },
    {
      id: 147,
      text: "¿Utilizáis alguna plataforma de inversión digital (acciones, criptomonedas, etc.)?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, pero solo en productos básicos", value: "b", points: 2 },
        { label: "c) Sí, con productos diversificados", value: "c", points: 3 },
        { label: "d) Sí, y estamos activos en múltiples plataformas", value: "d", points: 4 },
      ]
    },
    {
      id: 148,
      text: "¿Cuál es vuestro nivel de satisfacción con los ingresos provenientes de vuestro trabajo autónomo o freelance (si aplica)?",
      options: [
        { label: "a) No trabajo por cuenta propia", value: "a", points: 1 },
        { label: "b) Insuficientes para cubrir mis necesidades", value: "b", points: 2 },
        { label: "c) Suficientes, pero no me permiten ahorrar o invertir mucho", value: "c", points: 3 },
        { label: "d) Muy satisfactorios, me permiten cubrir necesidades y ahorrar", value: "d", points: 4 },
      ]
    },
    {
      id: 149,
      text: "¿Tenéis algún ingreso adicional por la renta de propiedades o activos (inmuebles, vehículos, etc.)?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, con ingresos bajos", value: "b", points: 2 },
        { label: "c) Sí, con ingresos moderados", value: "c", points: 3 },
        { label: "d) Sí, con ingresos sustanciales", value: "d", points: 4 },
      ]
    },
    {
      id: 150,
      text: "¿Consideráis que deberiáis diversificar vuestras fuentes de ingresos (invertir, emprender, etc.)?",
      options: [
        { label: "a) No, estamos bien con nuestras fuentes actuales", value: "a", points: 1 },
        { label: "b) Tal vez, pero no es una prioridad", value: "b", points: 2 },
        { label: "c) Sí, pero aún no hemos comenzado", value: "c", points: 3 },
        { label: "d) Sí, y ya estamos implementando cambios para diversificar", value: "d", points: 4 },
      ]
    },
  ]
};
