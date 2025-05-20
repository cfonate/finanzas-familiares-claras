
import { Section } from "../../types/questionTypes";

export const section5: Section = {
  id: 5,
  title: "Deudas y Créditos",
  description: "Información sobre deudas y créditos",
  questions: [
    {
      id: 71,
      text: "¿Tenéis alguna deuda activa?",
      options: [
        { label: "a) No", value: "a", points: 4 },
        { label: "b) Sí, solo una (crédito personal o tarjeta)", value: "b", points: 3 },
        { label: "c) Sí, varias pequeñas", value: "c", points: 2 },
        { label: "d) Sí, varias y de importe elevado", value: "d", points: 1 },
      ],
    },
    {
      id: 72,
      text: "¿Cuánto debéis aproximadamente (excluyendo hipoteca)?",
      options: [
        { label: "a) Nada", value: "a", points: 4 },
        { label: "b) Menos de 2.000 €", value: "b", points: 3 },
        { label: "c) Entre 2.000 € y 10.000 €", value: "c", points: 2 },
        { label: "d) Más de 10.000 €", value: "d", points: 1 },
      ],
    },
    {
      id: 73,
      text: "¿Qué tipo de deuda es la más relevante actualmente (excluyendo hipoteca)?",
      options: [
        { label: "a) Crédito al consumo o personal", value: "a", points: 2 },
        { label: "b) Tarjeta de crédito", value: "b", points: 1 },
        { label: "c) Préstamos familiares o entre particulares", value: "c", points: 3 },
        { label: "d) Varios tipos combinados", value: "d", points: 1 },
      ],
    },
    {
      id: 74,
      text: "¿Cuánto pagáis al mes en cuotas de deuda (excluyendo hipoteca)?",
      options: [
        { label: "a) Nada", value: "a", points: 4 },
        { label: "b) Menos de 100 €", value: "b", points: 3 },
        { label: "c) Entre 100 € y 300 €", value: "c", points: 2 },
        { label: "d) Más de 300 €", value: "d", points: 1 },
      ],
    },
    {
      id: 75,
      text: "¿Cuánto pagáis al mes por la hipoteca, si tenéis?",
      options: [
        { label: "a) No tenemos hipoteca", value: "a", points: 4 },
        { label: "b) Menos de 400 €", value: "b", points: 3 },
        { label: "c) Entre 400 € y 700 €", value: "c", points: 2 },
        { label: "d) Más de 700 €", value: "d", points: 1 },
      ],
    },
    {
      id: 76,
      text: "¿Alguna vez os habéis retrasado en el pago de una cuota de deuda?",
      options: [
        { label: "a) No", value: "a", points: 4 },
        { label: "b) Sí, 1 o 2 veces puntuales", value: "b", points: 3 },
        { label: "c) Sí, varias veces", value: "c", points: 2 },
        { label: "d) Sí, con frecuencia", value: "d", points: 1 },
      ],
    },
    {
      id: 77,
      text: "¿Qué porcentaje de vuestros ingresos netos se destinan al pago de deudas (incluyendo hipoteca)?",
      options: [
        { label: "a) Menos del 10 %", value: "a", points: 4 },
        { label: "b) Entre el 10 % y el 25 %", value: "b", points: 3 },
        { label: "c) Entre el 25 % y el 50 %", value: "c", points: 2 },
        { label: "d) Más del 50 %", value: "d", points: 1 },
      ],
    },
    {
      id: 78,
      text: "¿Utilizáis tarjetas de crédito habitualmente para los gastos mensuales?",
      options: [
        { label: "a) No", value: "a", points: 4 },
        { label: "b) Sí, pero las pagamos en su totalidad cada mes", value: "b", points: 3 },
        { label: "c) Sí, y dejamos parte sin pagar", value: "c", points: 2 },
        { label: "d) Varias tarjetas con pagos aplazados", value: "d", points: 1 },
      ],
    },
    {
      id: 79,
      text: "¿Tenéis préstamos vigentes con entidades financieras (bancos, financieras, etc.)?",
      options: [
        { label: "a) No", value: "a", points: 4 },
        { label: "b) Sí, uno", value: "b", points: 3 },
        { label: "c) Sí, entre 2 y 3", value: "c", points: 2 },
        { label: "d) Sí, 4 o más", value: "d", points: 1 },
      ],
    },
    {
      id: 80,
      text: "¿Pedís préstamos para gastos puntuales como vacaciones, tecnología, etc.?",
      options: [
        { label: "a) Nunca", value: "a", points: 4 },
        { label: "b) Muy rara vez", value: "b", points: 3 },
        { label: "c) Algunas veces al año", value: "c", points: 2 },
        { label: "d) Frecuentemente", value: "d", points: 1 },
      ],
    },
    {
      id: 81,
      text: "¿Tenéis algún préstamo familiar o con amigos actualmente?",
      options: [
        { label: "a) No", value: "a", points: 4 },
        { label: "b) Sí, menor de 1.000 €", value: "b", points: 3 },
        { label: "c) Entre 1.000 € y 5.000 €", value: "c", points: 2 },
        { label: "d) Más de 5.000 €", value: "d", points: 1 },
      ],
    },
    {
      id: 82,
      text: "¿Tenéis algún tipo de deuda con la Administración (Hacienda, Seguridad Social, etc.)?",
      options: [
        { label: "a) No", value: "a", points: 4 },
        { label: "b) Sí, pero ya está en trámite de pago", value: "b", points: 3 },
        { label: "c) Sí, y nos está generando intereses", value: "c", points: 2 },
        { label: "d) Sí, y estamos en situación de embargo o aviso", value: "d", points: 1 },
      ],
    },
    {
      id: 83,
      text: "¿Habéis solicitado reunificación de deudas alguna vez?",
      options: [
        { label: "a) No lo conocemos", value: "a", points: 1 },
        { label: "b) No lo hemos hecho", value: "b", points: 4 },
        { label: "c) Sí, una vez", value: "c", points: 2 },
        { label: "d) Sí, varias veces o estamos en ello", value: "d", points: 1 },
      ],
    },
    {
      id: 84,
      text: "¿Cómo manejáis la deuda como pareja?",
      options: [
        { label: "a) No tenemos deudas", value: "a", points: 4 },
        { label: "b) Cada uno gestiona la suya", value: "b", points: 2 },
        { label: "c) Compartimos la responsabilidad, sin plan", value: "c", points: 3 },
        { label: "d) Tenemos un plan conjunto y lo seguimos", value: "d", points: 4 },
      ],
    },
    {
      id: 85,
      text: "¿Qué nivel de preocupación tenéis por vuestras deudas actuales?",
      options: [
        { label: "a) Ninguno", value: "a", points: 4 },
        { label: "b) Bajo", value: "b", points: 3 },
        { label: "c) Moderado", value: "c", points: 2 },
        { label: "d) Alto", value: "d", points: 1 },
      ],
    },
    {
      id: 86,
      text: "¿Tenéis un plan específico para reducir o eliminar vuestras deudas?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Solo una intención", value: "b", points: 2 },
        { label: "c) Sí, pero poco estructurado", value: "c", points: 3 },
        { label: "d) Sí, con fechas y objetivos claros", value: "d", points: 4 },
      ],
    },
    {
      id: 87,
      text: "¿Qué método seguís para pagar deudas, si tenéis varias?",
      options: [
        { label: "a) No tenemos deudas", value: "a", points: 4 },
        { label: "b) Pagamos según urgencia o disponibilidad", value: "b", points: 2 },
        { label: "c) Pagamos primero las más caras (interés alto)", value: "c", points: 3 },
        { label: "d) Pagamos primero las más pequeñas (método bola de nieve)", value: "d", points: 3 },
      ],
    },
    {
      id: 88,
      text: "¿Habéis solicitado alguna vez una tarjeta de crédito por necesidad financiera inmediata?",
      options: [
        { label: "a) No", value: "a", points: 4 },
        { label: "b) Sí, una vez", value: "b", points: 3 },
        { label: "c) Sí, varias veces", value: "c", points: 2 },
        { label: "d) Lo hacemos de forma habitual", value: "d", points: 1 },
      ],
    },
    {
      id: 89,
      text: "¿Os han denegado alguna vez un crédito o financiación?",
      options: [
        { label: "a) No", value: "a", points: 4 },
        { label: "b) Sí, por falta de ingresos", value: "b", points: 2 },
        { label: "c) Sí, por sobreendeudamiento", value: "c", points: 1 },
        { label: "d) Sí, por historial negativo", value: "d", points: 1 },
      ],
    },
    {
      id: 90,
      text: "¿Qué parte de vuestras deudas creeis que podéis pagar en los próximos 12 meses?",
      options: [
        { label: "a) Ninguna", value: "a", points: 1 },
        { label: "b) Menos del 25 %", value: "b", points: 2 },
        { label: "c) Entre el 25 % y el 75 %", value: "c", points: 3 },
        { label: "d) Más del 75 %", value: "d", points: 4 },
      ],
    },
  ],
};
