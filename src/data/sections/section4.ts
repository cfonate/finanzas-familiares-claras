
import { Section } from "../../types/questionTypes";

export const section4: Section = {
  id: 4,
  title: "Ahorro y Fondo de Emergencia",
  description: "Información sobre ahorro y fondos de emergencia",
  questions: [
    {
      id: 51,
      text: "¿Tenéis actualmente algún tipo de ahorro familiar?",
      options: [
        { label: "a) Más de 5.000 €", value: "a", points: 4 },
        { label: "b) Entre 1.000 € y 5.000€", value: "b", points: 3 },
        { label: "c) Sí, menor de 1.000 €", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
    {
      id: 52,
      text: "¿Con qué frecuencia ahorráis dinero?",
      options: [
        { label: "a) Varias veces al mes o según plan establecido", value: "a", points: 4 },
        { label: "b) Mensualmente una cantidad fija", value: "b", points: 3 },
        { label: "c) Sólo si sobra algo", value: "c", points: 2 },
        { label: "d) Nunca", value: "d", points: 1 },
      ],
    },
    {
      id: 53,
      text: "¿Cuánto ahorráis aproximadamente cada mes?",
      options: [
        { label: "a) Más de 300 €", value: "a", points: 4 },
        { label: "b) Entre 100 € y 300 €", value: "b", points: 3 },
        { label: "c) Hasta 100 €", value: "c", points: 2 },
        { label: "d) Nada", value: "d", points: 1 },
      ],
    },
    {
      id: 54,
      text: "¿Dónde guardáis principalmente el dinero ahorrado?",
      options: [
        { label: "a) Diversificado entre varias opciones", value: "a", points: 4 },
        { label: "b) Cuenta remunerada o fondo de inversión", value: "b", points: 3 },
        { label: "c) Cuenta de ahorro bancaria", value: "c", points: 2 },
        { label: "d) En casa (efectivo)", value: "d", points: 1 },
      ],
    },
    {
      id: 55,
      text: "¿Tenéis un fondo específico para emergencias?",
      options: [
        { label: "a) Más de 3.000 €", value: "a", points: 4 },
        { label: "b) Entre 1.000 € y 3.000 €", value: "b", points: 3 },
        { label: "c) Sí, menor a 1.000 €", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
    {
      id: 56,
      text: "¿Para cuántos meses podréis cubrir vuestros gastos si perdieran sus ingresos?",
      options: [
        { label: "a) Más de 6 meses", value: "a", points: 4 },
        { label: "b) 3–6 meses", value: "b", points: 3 },
        { label: "c) 1–2 meses", value: "c", points: 2 },
        { label: "d) Menos de 1 mes", value: "d", points: 1 },
      ],
    },
    {
      id: 57,
      text: "¿Habéis tenido que usar vuestros ahorros en los últimos 12 meses por emergencias?",
      options: [
        { label: "a) No", value: "a", points: 4 },
        { label: "b) Sí, una vez puntual", value: "b", points: 3 },
        { label: "c) Varias veces", value: "c", points: 2 },
        { label: "d) Los hemos agotado totalmente", value: "d", points: 1 },
      ],
    },
    {
      id: 58,
      text: "¿Tenéis una cuenta separada solo para el ahorro?",
      options: [
        { label: "a) Sí, con plan automático o domiciliado", value: "a", points: 4 },
        { label: "b) Sí, con transferencias mensuales", value: "b", points: 3 },
        { label: "c) Sí, pero sin uso regular", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
    {
      id: 59,
      text: "¿Tenéis alguna meta de ahorro clara para este año (viaje, compra, etc.)?",
      options: [
        { label: "a) Sí, con objetivo, fecha y cantidad definida", value: "a", points: 4 },
        { label: "b) Sí, con estimación aproximada", value: "b", points: 3 },
        { label: "c) Sí, pero sin planificación", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
        { label: "e) NS/NC", value: "e", points: 0 },
      ],
    },
    {
      id: 60,
      text: "¿Invertís parte de vuestros ahorros en productos financieros?",
      options: [
        { label: "a) Sí, con asesoramiento profesional", value: "a", points: 4 },
        { label: "b) Sí, en fondos, acciones o criptomonedas", value: "b", points: 3 },
        { label: "c) Sí, en productos básicos (plazo fijo, depósitos)", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
        { label: "e) NS/NC", value: "e", points: 0 },
      ],
    },
    {
      id: 61,
      text: "¿Tenéis algún plan de pensiones o ahorro para la jubilación?",
      options: [
        { label: "a) Sí, con aportaciones regulares", value: "a", points: 4 },
        { label: "b) Sí, con aportaciones ocasionales", value: "b", points: 3 },
        { label: "c) Sí, pero no aportamos regularmente", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
    {
      id: 62,
      text: "¿Qué nivel de confianza tenéis con vuestra capacidad de ahorro actual?",
      options: [
        { label: "a) Alta", value: "a", points: 4 },
        { label: "b) Moderada", value: "b", points: 3 },
        { label: "c) Baja", value: "c", points: 2 },
        { label: "d) Nula", value: "d", points: 1 },
      ],
    },
    {
      id: 63,
      text: "¿Tenéis un plan de ahorro para los estudios futuros de vuestros hijos?",
      options: [
        { label: "a) Sí, y lo complementamos con inversiones", value: "a", points: 4 },
        { label: "b) Sí, con aportes periódicos", value: "b", points: 3 },
        { label: "c) Sí, pero sin regularidad", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
    {
      id: 64,
      text: "¿Ahorráis con algún propósito específico a medio plazo (3–5 años)?",
      options: [
        { label: "a) Sí, con control y seguimiento", value: "a", points: 4 },
        { label: "b) Sí, con plan y metas", value: "b", points: 3 },
        { label: "c) Sí, pero sin estructura clara", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
    {
      id: 65,
      text: "¿Cómo calificáis la disciplina del hogar en cuanto al ahorro?",
      options: [
        { label: "a) Excelente", value: "a", points: 4 },
        { label: "b) Buena", value: "b", points: 3 },
        { label: "c) Irregular", value: "c", points: 2 },
        { label: "d) Muy baja", value: "d", points: 1 },
        { label: "e) NS/NC", value: "e", points: 0 },
      ],
    },
    {
      id: 66,
      text: "¿Qué haríais si recibiéis 2.000 € de forma inesperada?",
      options: [
        { label: "a) Lo invertiríamos o lo usaríamos para pagar deudas", value: "a", points: 4 },
        { label: "b) Lo guardaríamos como fondo de emergencia", value: "b", points: 3 },
        { label: "c) Una parte se ahorra, otra se gasta", value: "c", points: 2 },
        { label: "d) Lo gastaríamos en necesidades o caprichos", value: "d", points: 1 },
        { label: "e) NS/NC", value: "e", points: 0 },
      ],
    },
    {
      id: 67,
      text: "¿En qué gastáis principalmente el ahorro cuando lo utilizáis?",
      options: [
        { label: "a) En deudas o estudios", value: "a", points: 4 },
        { label: "b) En mejoras del hogar o vehículo", value: "b", points: 3 },
        { label: "c) En vacaciones o celebraciones", value: "c", points: 2 },
        { label: "d) En emergencias médicas o imprevistos", value: "d", points: 1 },
        { label: "e) NS/NC", value: "e", points: 0 },
      ],
    },
    {
      id: 68,
      text: "¿Sabéis cuánto dinero tenéis ahorrado actualmente?",
      options: [
        { label: "a) Sí, con exactitud", value: "a", points: 4 },
        { label: "b) Sí, con aproximación", value: "b", points: 3 },
        { label: "c) Más o menos", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
      ],
    },
    {
      id: 69,
      text: "¿Quién toma las decisiones sobre el ahorro familiar?",
      options: [
        { label: "a) Ambos con planificación conjunta", value: "a", points: 4 },
        { label: "b) Ambos con acuerdo", value: "b", points: 3 },
        { label: "c) Ambos, pero sin plan común", value: "c", points: 2 },
        { label: "d) Solo uno de los dos", value: "d", points: 1 },
        { label: "e) NS/NC", value: "e", points: 0 },
      ],
    },
    {
      id: 70,
      text: "¿Sentís que podéis ahorrar más si organizáis mejor vuestras finanzas?",
      options: [
        { label: "a) Sí, de forma significativa", value: "a", points: 4 },
        { label: "b) Sí, con algunos ajustes", value: "b", points: 3 },
        { label: "c) Tal vez, pero no es prioridad", value: "c", points: 2 },
        { label: "d) No", value: "d", points: 1 },
        { label: "e) NS/NC", value: "e", points: 0 },
      ],
    },
  ],
};
