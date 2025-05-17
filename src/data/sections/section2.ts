
import { Section } from "../../types/questionTypes";

export const section2: Section = {
  id: 2,
  title: "Ingresos del Hogar",
  description: "Información sobre los ingresos familiares",
  questions: [
    {
      id: 11,
      text: "¿Cuál es el ingreso neto mensual conjunto del hogar (sin contar pagas extras)?",
      options: [
        { label: "a) Menos de 1.200 €", value: "a", points: 1 },
        { label: "b) Entre 1.200 € y 2.000 €", value: "b", points: 2 },
        { label: "c) Entre 2.000 € y 3.500 €", value: "c", points: 3 },
        { label: "d) Más de 3.500 €", value: "d", points: 4 },
      ],
    },
    {
      id: 12,
      text: "¿Cuántas fuentes de ingresos diferentes tenéis en casa?",
      options: [
        { label: "a) Una", value: "a", points: 1 },
        { label: "b) Dos", value: "b", points: 3 },
        { label: "c) Tres o más", value: "c", points: 4 },
        { label: "d) Ninguna fija", value: "d", points: 0 },
      ],
    },
    {
      id: 13,
      text: "¿Recibís alguna ayuda, subsidio o prestación pública (INSS, SEPE, ayudas familiares)?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, menos de 200 € mensuales", value: "b", points: 2 },
        { label: "c) Sí, entre 200 € y 500 € mensuales", value: "c", points: 3 },
        { label: "d) Sí, más de 500 € mensuales", value: "d", points: 4 },
      ],
    },
    {
      id: 14,
      text: "¿Qué ingresos aproximados provienen de trabajo autónomo o negocio propio?",
      options: [
        { label: "a) Nada", value: "a", points: 1 },
        { label: "b) Menos de 500 € al mes", value: "b", points: 2 },
        { label: "c) Entre 500 € y 1.500 €", value: "c", points: 3 },
        { label: "d) Más de 1.500 €", value: "d", points: 4 },
      ],
    },
    {
      id: 15,
      text: "¿Recibís ingresos pasivos (alquileres, dividendos, etc.)?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, hasta 100 € al mes", value: "b", points: 2 },
        { label: "c) Entre 100 € y 500 €", value: "c", points: 3 },
        { label: "d) Más de 500 €", value: "d", points: 4 },
      ],
    },
    {
      id: 16,
      text: "¿Cómo calificarías la estabilidad de vuestros ingresos mensuales?",
      options: [
        { label: "a) Muy estables (cambian menos de 200 € al mes)", value: "a", points: 4 },
        { label: "b) Poco variables (200–500 € de diferencia mensual)", value: "b", points: 3 },
        { label: "c) Variables (500–1.000 € de diferencia mensual)", value: "c", points: 2 },
        { label: "d) Muy inestables (más de 1.000 € de diferencia mensual)", value: "d", points: 1 },
      ],
    },
    {
      id: 17,
      text: "¿Habéis experimentado una bajada de ingresos en el último año?",
      options: [
        { label: "a) No", value: "a", points: 4 },
        { label: "b) Sí, leve (menos de 1.000 € en total)", value: "b", points: 3 },
        { label: "c) Moderada (1.000–3.000 €)", value: "c", points: 2 },
        { label: "d) Grave (más de 3.000 €)", value: "d", points: 1 },
      ],
    },
    {
      id: 18,
      text: "¿Os alcanza vuestro ingreso mensual para cubrir todos los gastos fijos?",
      options: [
        { label: "a) Sí, con margen", value: "a", points: 4 },
        { label: "b) Sí, pero justos", value: "b", points: 3 },
        { label: "c) No siempre", value: "c", points: 2 },
        { label: "d) Habitualmente no", value: "d", points: 1 },
      ],
    },
    {
      id: 19,
      text: "¿Quién administra el ingreso principal en casa?",
      options: [
        { label: "a) Solo uno de los dos", value: "a", points: 2 },
        { label: "b) Ambos por igual", value: "b", points: 4 },
        { label: "c) Cada uno gestiona su parte", value: "c", points: 3 },
        { label: "d) Otro (familiar o externo)", value: "d", points: 1 },
        { label: "e) Nadie", value: "e", points: 1 }
      ],
    },
    {
      id: 20,
      text: "¿Cómo recibís la mayor parte del ingreso?",
      options: [
        { label: "a) Transferencia bancaria", value: "a", points: 3 },
        { label: "b) Efectivo", value: "b", points: 2 },
        { label: "c) Transferencias de clientes o autónomos", value: "c", points: 1 },
        { label: "d) Variado", value: "d", points: 4 },
      ],
    },
    {
      id: 21,
      text: "¿Recibís dinero del extranjero (remesas, pensión exterior, etc.)?",
      options: [
        { label: "a) No", value: "a", points: 4 },
        { label: "b) Sí, hasta 200 € al mes", value: "b", points: 2 },
        { label: "c) Entre 200 € y 500 €", value: "c", points: 3 },
        { label: "d) Más de 500 €", value: "d", points: 1 },
      ],
    },
    {
      id: 22,
      text: "¿Tenéis ingresos extra en ciertas épocas (bonos, pagas extras, etc.)?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Una vez al año o hasta 1.500 €", value: "b", points: 2 },
        { label: "c) Dos veces al año o hasta 3.000 €", value: "c", points: 3 },
        { label: "d) Con frecuencia o más de 3.000 € anuales", value: "d", points: 4 },
      ],
    },
    {
      id: 23,
      text: "¿Qué hacéis con el ingreso extra cuando lo recibís?",
      options: [
        { label: "a) Lo gastamos todo", value: "a", points: 1 },
        { label: "b) Una parte se ahorra", value: "b", points: 2 },
        { label: "c) Se usa para pagar deudas", value: "c", points: 3 },
        { label: "d) Lo invertimos o lo ahorramos casi todo", value: "d", points: 4 },
      ],
    },
    {
      id: 24,
      text: "¿Habéis recibido orientación o asesoramiento para mejorar vuestros ingresos?",
      options: [
        { label: "a) No", value: "a", points: 1 },
        { label: "b) Sí, de forma informal", value: "b", points: 2 },
        { label: "c) Sí, con profesionales", value: "c", points: 3 },
        { label: "d) Sí, de forma continua", value: "d", points: 4 },
      ],
    },
    {
      id: 25,
      text: "¿Cómo de satisfechos estáis con vuestros ingresos familiares actualmente?",
      options: [
        { label: "a) Muy insatisfechos", value: "a", points: 1 },
        { label: "b) Poco satisfechos", value: "b", points: 2 },
        { label: "c) Bastante satisfechos", value: "c", points: 3 },
        { label: "d) Muy satisfechos", value: "d", points: 4 },
      ],
    },
  ],
};

