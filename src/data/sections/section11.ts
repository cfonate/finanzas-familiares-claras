import { Section } from "../../types/questionTypes";

export const section11: Section = {
  id: 11,
  title: "Actitudes y Hábitos Financieros",
  description: "Tus hábitos, decisiones y actitudes frente a las finanzas.",
  questions: [
    {
      id: 166,
      text: "¿Tenéis el hábito de revisar vuestras finanzas regularmente (por ejemplo, mensual o trimestralmente)?",
      options: [
        { label: "a) Sí, revisamos nuestras finanzas al menos una vez al mes", value: "a", points: 4 },
        { label: "b) Sí, pero lo hacemos de manera irregular", value: "b", points: 3 },
        { label: "c) No, rara vez revisamos nuestras finanzas", value: "c", points: 2 },
        { label: "d) No, nunca revisamos nuestras finanzas", value: "d", points: 1 },
      ],
    },
    {
      id: 167,
      text: "¿Cómo tomáis decisiones financieras importantes (como invertir, comprar una casa, etc.)?",
      options: [
        { label: "a) Consultamos con un asesor o experto", value: "a", points: 4 },
        { label: "b) Analizamos nuestra situación y tomamos la decisión por nuestra cuenta", value: "b", points: 3 },
        { label: "c) Pedimos consejo a familiares o amigos", value: "c", points: 2 },
        { label: "d) Tomamos decisiones impulsivas sin mucha reflexión", value: "d", points: 1 },
      ],
    },
    {
      id: 168,
      text: "¿Cómo de cómodos os sentéis con el riesgo financiero?",
      options: [
        { label: "a) Muy cómodos, nos gusta asumir riesgos", value: "a", points: 4 },
        { label: "b) Algo cómodos, pero tratamos de equilibrar los riesgos", value: "b", points: 3 },
        { label: "c) Poco cómodos, preferimos minimizar los riesgos", value: "c", points: 2 },
        { label: "d) Muy incómodos, evitamos el riesgo a toda costa", value: "d", points: 1 },
      ],
    },
    {
      id: 169,
      text: "¿Qué tan importante es para vosotros la seguridad financiera?",
      options: [
        { label: "a) Muy importante, siempre buscamos estabilidad financiera", value: "a", points: 4 },
        { label: "b) Algo importante, pero aceptamos cierta incertidumbre", value: "b", points: 3 },
        { label: "c) No muy importante, nos adaptamos a las circunstancias", value: "c", points: 2 },
        { label: "d) No nos preocupa mucho la seguridad financiera", value: "d", points: 1 },
      ],
    },
    {
      id: 170,
      text: "¿Tenéis alguna estrategia para reducir gastos innecesarios?",
      options: [
        { label: "a) Sí, siempre buscamos maneras de ahorrar y reducir gastos", value: "a", points: 4 },
        { label: "b) A veces, pero no de manera consistente", value: "b", points: 3 },
        { label: "c) No, no tenemos una estrategia específica", value: "c", points: 2 },
        { label: "d) No, gastamos según nuestras necesidades del momento", value: "d", points: 1 },
      ],
    },
    {
      id: 171,
      text: "¿Con qué frecuencia revisais vuestro presupuesto familiar?",
      options: [
        { label: "a) Cada mes", value: "a", points: 4 },
        { label: "b) Cada tres meses", value: "b", points: 3 },
        { label: "c) Una vez al año", value: "c", points: 2 },
        { label: "d) Nunca", value: "d", points: 1 },
      ],
    },
    {
      id: 172,
      text: "¿Estáis dispuestos a cambiar vuestros hábitos financieros para mejorar vuestra situación?",
      options: [
        { label: "a) Sí, si fuera necesario", value: "a", points: 4 },
        { label: "b) Solo si es muy necesario", value: "b", points: 3 },
        { label: "c) No, nos sentimos cómodos con nuestros hábitos actuales", value: "c", points: 2 },
        { label: "d) No, nos gustaría cambiar", value: "d", points: 1 },
      ],
    },
    {
      id: 173,
      text: "¿Tenéis alguna estrategia para gestionar los imprevistos financieros?",
      options: [
        { label: "a) Sí, tenemos un fondo de emergencia", value: "a", points: 4 },
        { label: "b) No tenemos una estrategia definida", value: "b", points: 2 },
        { label: "c) Confiamos en poder pedir ayuda si surge algún problema", value: "c", points: 1 },
        { label: "d) No nos hemos planteado esa posibilidad", value: "d", points: 1 },
      ],
    },
    {
      id: 174,
      text: "¿Os sentís preparados para afrontar una crisis financiera (por ejemplo, pérdida de empleo)?",
      options: [
        { label: "a) Sí, tenemos ahorros y un plan de contingencia", value: "a", points: 4 },
        { label: "b) No, pero estamos empezando a prepararnos", value: "b", points: 3 },
        { label: "c) No, no tenemos preparación alguna", value: "c", points: 2 },
        { label: "d) No, y no creo que podamos afrontarlo", value: "d", points: 1 },
      ],
    },
    {
      id: 175,
      text: "¿Estáis dispuestos a hacer sacrificios financieros para alcanzar vuestras metas a largo plazo?",
      options: [
        { label: "a) Sí, estamos dispuesto a hacer los sacrificios necesarios", value: "a", points: 4 },
        { label: "b) Solo si es absolutamente necesario", value: "b", points: 3 },
        { label: "c) No, no queremos sacrificar nuestro estilo de vida", value: "c", points: 2 },
        { label: "d) No, preferimos vivir en el presente", value: "d", points: 1 },
      ],
    },
  ],
};