
import { Section } from "../../types/questionTypes";

export const section9: Section = {
  id: 9,
  title: "Inversiones y Ahorro a Largo Plazo",
  description: "Preguntas sobre hábitos y productos de inversión o ahorro prolongado.",
  questions: [
    {
      id: 151,
      text: "¿Tenéis alguna inversión en fondos de inversión?",
      options: [
        { label: "a) Sí, en fondos de inversión a corto plazo", value: "a", points: 2 },
        { label: "b) Sí, en fondos de inversión a largo plazo", value: "b", points: 4 },
        { label: "c) No", value: "c", points: 1 },
        { label: "d) Estoy pensando en empezar a invertir", value: "d", points: 3 },
      ]
    },
    {
      id: 152,
      text: "¿Tenéis inversiones en la bolsa de valores (acciones, ETFs, etc.)?",
      options: [
        { label: "a) Sí, tenemos inversiones activas", value: "a", points: 4 },
        { label: "b) No, pero tenemos la intención de hacerlo pronto", value: "b", points: 3 },
        { label: "c) No, y no tenemos planes de hacerlo", value: "c", points: 1 },
        { label: "d) No, pero nos interesa aprender sobre inversiones", value: "d", points: 2 },
      ]
    },
    {
      id: 153,
      text: "¿Estáis ahorrando para la jubilación?",
      options: [
        { label: "a) Sí, mediante un plan de pensiones o fondos privados", value: "a", points: 4 },
        { label: "b) No, pero nos gustaría comenzar pronto", value: "b", points: 3 },
        { label: "c) No, y no tenemos planes inmediatos de hacerlo", value: "c", points: 1 },
        { label: "d) No, porque consideramos que el sistema público es suficiente", value: "d", points: 2 },
      ]
    },
    {
      id: 154,
      text: "¿Cómo os sentís respecto al riesgo de inversión?",
      options: [
        { label: "a) Muy conservadores, preferimos opciones de bajo riesgo", value: "a", points: 1 },
        { label: "b) Moderadamente conservadores, aceptamos algo de riesgo", value: "b", points: 2 },
        { label: "c) Nos gusta asumir riesgos elevados para potenciales ganancias", value: "c", points: 4 },
        { label: "d) No sé, nunca hemos invertido", value: "d", points: 3 },
      ]
    },
    {
      id: 155,
      text: "¿Tenéis algún tipo de asesoramiento o gestor de inversiones?",
      options: [
        { label: "a) Sí, tenemos un asesor que nos ayuda regularmente", value: "a", points: 4 },
        { label: "b) No, pero nos gustaría contar con uno", value: "b", points: 2 },
        { label: "c) No, preferimos gestionarlo todo por nuestra cuenta", value: "c", points: 1 },
        { label: "d) No, pero tenemos pensado contratar uno a futuro", value: "d", points: 3 },
      ]
    },
    {
      id: 156,
      text: "¿Tenéis alguna inversión en bienes raíces (propiedades, locales comerciales)?",
      options: [
        { label: "a) Sí, tenemos varias propiedades", value: "a", points: 4 },
        { label: "b) Sí, una", value: "b", points: 3 },
        { label: "c) No, pero estamos interesados en invertir en bienes raíces", value: "c", points: 2 },
        { label: "d) No, y no tenemos planes de hacerlo", value: "d", points: 1 },
      ]
    },
    {
      id: 157,
      text: "¿En qué productos de ahorro a largo plazo invertís?",
      options: [
        { label: "a) Planes de pensiones o fondos de inversión", value: "a", points: 4 },
        { label: "b) Cuentas de ahorro de alto rendimiento", value: "b", points: 3 },
        { label: "c) Inversiones inmobiliarias", value: "c", points: 2 },
        { label: "d) No invertimos a largo plazo", value: "d", points: 1 },
        { label: "e) otros", value: "e", points: 2 },
      ]
    },
    {
      id: 158,
      text: "¿Consideráis que vuestro nivel de ahorro es suficiente para vuestra jubilación?",
      options: [
        { label: "a) Sí, consideramos que estamos bien preparados", value: "a", points: 4 },
        { label: "b) No, pero estamos trabajando para mejorar nuestra situación", value: "b", points: 3 },
        { label: "c) No, y no tenemos planes claros de mejorarla", value: "c", points: 2 },
        { label: "d) No hemos considerado aún nuestra jubilación", value: "d", points: 1 },
      ]
    },
    {
      id: 159,
      text: "¿Tenéis algún plan de ahorro para la educación de vuestros hijos (si los tenéis)?",
      options: [
        { label: "a) Sí, tenemos un plan específico", value: "a", points: 4 },
        { label: "b) No, pero nos gustaría empezar", value: "b", points: 3 },
        { label: "c) No, no tenemos pensado ahorrar para ello", value: "c", points: 2 },
        { label: "d) No tenemos hijos", value: "d", points: 1 },
      ]
    },
    {
      id: 160,
      text: "¿Cuál es vuestra estrategia de inversión actual?",
      options: [
        { label: "a) Invertimos en productos de bajo riesgo", value: "a", points: 1 },
        { label: "b) Diversificamos entre riesgos medios y altos", value: "b", points: 3 },
        { label: "c) Invertimos en productos de alto riesgo con potencial de altas ganancias", value: "c", points: 4 },
        { label: "d) No tenemos una estrategia definida", value: "d", points: 2 },
      ]
    },
  ]
};
