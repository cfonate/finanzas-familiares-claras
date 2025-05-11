import { Section } from "../types/questionTypes";

export const questionnaireSections: Section[] = [
  {
    id: 1,
    title: "Datos Generales",
    description: "Información básica sobre la situación familiar",
    questions: [
      {
        id: 1,
        text: "¿Cuál es su estado civil actual?",
        options: [
          { label: "a) Casados legalmente", value: "a", points: 4 },
          { label: "b) Pareja de hecho", value: "b", points: 3 },
          { label: "c) Separados", value: "c", points: 2 },
          { label: "d) Divorciados", value: "d", points: 1 },
        ],
      },
      {
        id: 2,
        text: "¿Cuántos hijos tienen actualmente?",
        options: [
          { label: "a) 1", value: "a", points: 3 },
          { label: "b) 2", value: "b", points: 2 },
          { label: "c) 3 o más", value: "c", points: 1 },
          { label: "d) Ninguno", value: "d", points: 4 },
        ],
      },
      {
        id: 3,
        text: "¿Qué edades tienen sus hijos (elija la categoría que representa la mayoría)?",
        options: [
          { label: "a) 0–5 años", value: "a", points: 1 },
          { label: "b) 6–12 años", value: "b", points: 2 },
          { label: "c) 13–18 años", value: "c", points: 3 },
          { label: "d) Mayores de 18", value: "d", points: 4 },
        ],
      },
      {
        id: 4,
        text: "¿Quién se encarga principalmente de gestionar las finanzas del hogar?",
        options: [
          { label: "a) El marido", value: "a", points: 2 },
          { label: "b) La mujer", value: "b", points: 2 },
          { label: "c) Ambos por igual", value: "c", points: 4 },
          { label: "d) Otro familiar", value: "d", points: 1 },
        ],
      },
      {
        id: 5,
        text: "¿Cuál es su situación de vivienda actual?",
        options: [
          { label: "a) Vivienda en propiedad, totalmente pagada", value: "a", points: 4 },
          { label: "b) Vivienda en propiedad con hipoteca", value: "b", points: 3 },
          { label: "c) Vivienda de alquiler", value: "c", points: 2 },
          { label: "d) Vivienda cedida por familiares", value: "d", points: 1 },
        ],
      },
      {
        id: 6,
        text: "¿Tienen personas dependientes económicamente además de sus hijos?",
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
        ],
      },
      {
        id: 8,
        text: "¿Trabajan ambos miembros de la pareja actualmente?",
        options: [
          { label: "a) Sí, ambos a jornada completa", value: "a", points: 4 },
          { label: "b) Uno jornada completa, otro parcial", value: "b", points: 3 },
          { label: "c) Solo uno trabaja", value: "c", points: 2 },
          { label: "d) Ninguno trabaja actualmente", value: "d", points: 1 },
        ],
      },
      {
        id: 9,
        text: "¿En qué tipo de zona viven?",
        options: [
          { label: "a) Zona urbana (ciudad mediana o grande)", value: "a", points: 3 },
          { label: "b) Zona semiurbana o pueblo", value: "b", points: 4 },
          { label: "c) Zona rural", value: "c", points: 2 },
          { label: "d) Zona en transición", value: "d", points: 1 },
        ],
      },
      {
        id: 10,
        text: "¿Cuántos años llevan como pareja estable?",
        options: [
          { label: "a) Menos de 5 años", value: "a", points: 1 },
          { label: "b) 5–10 años", value: "b", points: 2 },
          { label: "c) 11–20 años", value: "c", points: 3 },
          { label: "d) Más de 20 años", value: "d", points: 4 },
        ],
      },
    ],
  },
  {
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
        text: "¿Cuántas fuentes de ingreso diferentes tiene el hogar?",
        options: [
          { label: "a) Una", value: "a", points: 1 },
          { label: "b) Dos", value: "b", points: 3 },
          { label: "c) Tres o más", value: "c", points: 4 },
          { label: "d) Ninguna fija", value: "d", points: 0 },
        ],
      },
      {
        id: 13,
        text: "¿Reciben alguna ayuda, subsidio o prestación pública (INSS, SEPE, ayudas familiares)?",
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
        text: "¿Reciben ingresos pasivos (alquileres, dividendos, etc.)?",
        options: [
          { label: "a) No", value: "a", points: 1 },
          { label: "b) Sí, hasta 100 € al mes", value: "b", points: 2 },
          { label: "c) Entre 100 € y 500 €", value: "c", points: 3 },
          { label: "d) Más de 500 €", value: "d", points: 4 },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Gastos Mensuales",
    description: "Información sobre los gastos familiares",
    questions: [
      {
        id: 26,
        text: "¿Llevan algún control de sus gastos mensuales?",
        options: [
          { label: "a) Sí, detallado en una hoja de cálculo o app", value: "a", points: 4 },
          { label: "b) Sí, pero solo con anotaciones generales", value: "b", points: 3 },
          { label: "c) Solo controlamos los gastos más grandes", value: "c", points: 2 },
          { label: "d) No llevamos ningún registro", value: "d", points: 1 },
        ],
      },
      {
        id: 27,
        text: "¿Cuánto gastan mensualmente en alimentación (supermercado, panadería, etc.)?",
        options: [
          { label: "a) Menos de 300 €", value: "a", points: 4 },
          { label: "b) Entre 300 € y 500 €", value: "b", points: 3 },
          { label: "c) Entre 500 € y 700 €", value: "c", points: 2 },
          { label: "d) Más de 700 €", value: "d", points: 1 },
        ],
      },
      {
        id: 28,
        text: "¿Cuánto pagan mensualmente por alquiler o hipoteca?",
        options: [
          { label: "a) Menos de 400 €", value: "a", points: 4 },
          { label: "b) Entre 400 € y 700 €", value: "b", points: 3 },
          { label: "c) Entre 700 € y 1.000 €", value: "c", points: 2 },
          { label: "d) Más de 1.000 €", value: "d", points: 1 },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Ahorro y Fondo de Emergencia",
    description: "Información sobre ahorro y fondos de emergencia",
    questions: [
      {
        id: 51,
        text: "¿Tienen actualmente algún tipo de ahorro familiar?",
        options: [
          { label: "a) No", value: "a", points: 1 },
          { label: "b) Sí, menor de 1.000 €", value: "b", points: 2 },
          { label: "c) Entre 1.000 € y 5.000 €", value: "c", points: 3 },
          { label: "d) Más de 5.000 €", value: "d", points: 4 },
        ],
      },
      {
        id: 52,
        text: "¿Con qué frecuencia ahorran dinero?",
        options: [
          { label: "a) Nunca", value: "a", points: 1 },
          { label: "b) Solo si sobra algo", value: "b", points: 2 },
          { label: "c) Mensualmente una cantidad fija", value: "c", points: 3 },
          { label: "d) Varias veces al mes o según plan establecido", value: "d", points: 4 },
        ],
      },
      {
        id: 53,
        text: "¿Cuánto ahorran aproximadamente cada mes?",
        options: [
          { label: "a) Nada", value: "a", points: 1 },
          { label: "b) Hasta 100 €", value: "b", points: 2 },
          { label: "c) Entre 100 € y 300 €", value: "c", points: 3 },
          { label: "d) Más de 300 €", value: "d", points: 4 },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Deudas y Créditos",
    description: "Información sobre deudas y créditos",
    questions: [
      {
        id: 71,
        text: "¿Tienen actualmente alguna deuda activa?",
        options: [
          { label: "a) No", value: "a", points: 4 },
          { label: "b) Sí, solo una (crédito personal o tarjeta)", value: "b", points: 3 },
          { label: "c) Sí, varias pequeñas", value: "c", points: 2 },
          { label: "d) Sí, varias y de importe elevado", value: "d", points: 1 },
        ],
      },
      {
        id: 72,
        text: "¿Cuánto deben aproximadamente (excluyendo hipoteca)?",
        options: [
          { label: "a) Nada", value: "a", points: 4 },
          { label: "b) Menos de 2.000 €", value: "b", points: 3 },
          { label: "c) Entre 2.000 € y 10.000 €", value: "c", points: 2 },
          { label: "d) Más de 10.000 €", value: "d", points: 1 },
        ],
      },
      {
        id: 73,
        text: "¿Qué tipo de deuda es la más relevante actualmente?",
        options: [
          { label: "a) Crédito al consumo o personal", value: "a", points: 2 },
          { label: "b) Tarjeta de crédito", value: "b", points: 1 },
          { label: "c) Préstamos familiares o entre particulares", value: "c", points: 3 },
          { label: "d) Varios tipos combinados", value: "d", points: 1 },
        ],
      },
      {
        id: 74,
        text: "¿Cuánto pagan al mes en cuotas de deuda (excluyendo hipoteca)?",
        options: [
          { label: "a) Nada", value: "a", points: 4 },
          { label: "b) Menos de 100 €", value: "b", points: 3 },
          { label: "c) Entre 100 € y 300 €", value: "c", points: 2 },
          { label: "d) Más de 300 €", value: "d", points: 1 },
        ],
      },
      {
        id: 75,
        text: "¿Cuánto pagan al mes por la hipoteca, si tienen?",
        options: [
          { label: "a) No tenemos hipoteca", value: "a", points: 4 },
          { label: "b) Menos de 400 €", value: "b", points: 3 },
          { label: "c) Entre 400 € y 700 €", value: "b", points: 2 },
          { label: "d) Más de 700 €", value: "d", points: 1 },
        ],
      },
      {
        id: 76,
        text: "¿Alguna vez se han retrasado en el pago de una cuota de deuda?",
        options: [
          { label: "a) No", value: "a", points: 4 },
          { label: "b) Sí, 1 o 2 veces puntuales", value: "b", points: 3 },
          { label: "c) Sí, varias veces", value: "c", points: 2 },
          { label: "d) Sí, con frecuencia", value: "d", points: 1 },
        ],
      },
      {
        id: 77,
        text: "¿Qué porcentaje de sus ingresos netos se destinan al pago de deudas (incluyendo hipoteca)?",
        options: [
          { label: "a) Menos del 10 %", value: "a", points: 4 },
          { label: "b) Entre el 10 % y el 25 %", value: "b", points: 3 },
          { label: "c) Entre el 25 % y el 50 %", value: "c", points: 2 },
          { label: "d) Más del 50 %", value: "d", points: 1 },
        ],
      },
      {
        id: 78,
        text: "¿Utilizan tarjetas de crédito habitualmente para los gastos mensuales?",
        options: [
          { label: "a) No", value: "a", points: 4 },
          { label: "b) Sí, pero las pagamos en su totalidad cada mes", value: "b", points: 3 },
          { label: "c) Sí, y dejamos parte sin pagar", value: "c", points: 2 },
          { label: "d) Varias tarjetas con pagos aplazados", value: "d", points: 1 },
        ],
      },
      {
        id: 79,
        text: "¿Tienen préstamos vigentes con entidades financieras (bancos, financieras, etc.)?",
        options: [
          { label: "a) No", value: "a", points: 4 },
          { label: "b) Sí, uno", value: "b", points: 3 },
          { label: "c) Sí, entre 2 y 3", value: "c", points: 2 },
          { label: "d) Sí, 4 o más", value: "d", points: 1 },
        ],
      },
      {
        id: 80,
        text: "¿Piden préstamos para gastos puntuales como vacaciones, tecnología, etc.?",
        options: [
          { label: "a) Nunca", value: "a", points: 4 },
          { label: "b) Muy rara vez", value: "b", points: 3 },
          { label: "c) Algunas veces al año", value: "c", points: 2 },
          { label: "d) Frecuentemente", value: "d", points: 1 },
        ],
      },
      {
        id: 81,
        text: "¿Tienen algún préstamo familiar o con amigos actualmente?",
        options: [
          { label: "a) No", value: "a", points: 4 },
          { label: "b) Sí, menor de 1.000 €", value: "b", points: 3 },
          { label: "c) Entre 1.000 € y 5.000 €", value: "c", points: 2 },
          { label: "d) Más de 5.000 €", value: "d", points: 1 },
        ],
      },
      {
        id: 82,
        text: "¿Tienen algún tipo de deuda con la Administración (Hacienda, Seguridad Social, etc.)?",
        options: [
          { label: "a) No", value: "a", points: 4 },
          { label: "b) Sí, pero ya está en trámite de pago", value: "b", points: 3 },
          { label: "c) Sí, y nos está generando intereses", value: "c", points: 2 },
          { label: "d) Sí, y estamos en situación de embargo o aviso", value: "d", points: 1 },
        ],
      },
      {
        id: 83,
        text: "¿Han solicitado reunificación de deudas alguna vez?",
        options: [
          { label: "a) No lo conocemos", value: "a", points: 1 },
          { label: "b) No lo hemos hecho", value: "b", points: 4 },
          { label: "c) Sí, una vez", value: "c", points: 2 },
          { label: "d) Sí, varias veces o estamos en ello", value: "d", points: 1 },
        ],
      },
      {
        id: 84,
        text: "¿Cómo manejan la deuda como pareja?",
        options: [
          { label: "a) No tenemos deudas", value: "a", points: 4 },
          { label: "b) Cada uno gestiona la suya", value: "b", points: 2 },
          { label: "c) Compartimos la responsabilidad, sin plan", value: "c", points: 3 },
          { label: "d) Tenemos un plan conjunto y lo seguimos", value: "d", points: 4 },
        ],
      },
      {
        id: 85,
        text: "¿Qué nivel de preocupación tienen por sus deudas actuales?",
        options: [
          { label: "a) Ninguno", value: "a", points: 4 },
          { label: "b) Bajo", value: "b", points: 3 },
          { label: "c) Moderado", value: "c", points: 2 },
          { label: "d) Alto", value: "d", points: 1 },
        ],
      },
      {
        id: 86,
        text: "¿Tienen un plan específico para reducir o eliminar sus deudas?",
        options: [
          { label: "a) No", value: "a", points: 1 },
          { label: "b) Solo una intención", value: "b", points: 2 },
          { label: "c) Sí, pero poco estructurado", value: "c", points: 3 },
          { label: "d) Sí, con fechas y objetivos claros", value: "d", points: 4 },
        ],
      },
      {
        id: 87,
        text: "¿Qué método siguen para pagar deudas, si tienen varias?",
        options: [
          { label: "a) No tenemos deudas", value: "a", points: 4 },
          { label: "b) Pagamos según urgencia o disponibilidad", value: "b", points: 2 },
          { label: "c) Pagamos primero las más caras (interés alto)", value: "c", points: 3 },
          { label: "d) Pagamos primero las más pequeñas (método bola de nieve)", value: "c", points: 3 },
        ],
      },
      {
        id: 88,
        text: "¿Han solicitado alguna vez una tarjeta de crédito por necesidad financiera inmediata?",
        options: [
          { label: "a) No", value: "a", points: 4 },
          { label: "b) Sí, una vez", value: "b", points: 3 },
          { label: "c) Sí, varias veces", value: "c", points: 2 },
          { label: "d) Lo hacemos de forma habitual", value: "d", points: 1 },
        ],
      },
      {
        id: 89,
        text: "¿Les han denegado alguna vez un crédito o financiación?",
        options: [
          { label: "a) No", value: "a", points: 4 },
          { label: "b) Sí, por falta de ingresos", value: "b", points: 2 },
          { label: "c) Sí, por sobreendeudamiento", value: "c", points: 1 },
          { label: "d) Sí, por historial negativo", value: "d", points: 1 },
        ],
      },
      {
        id: 90,
        text: "¿Qué parte de sus deudas creen que podrían pagar en los próximos 12 meses?",
        options: [
          { label: "a) Ninguna", value: "a", points: 1 },
          { label: "b) Menos del 25 %", value: "b", points: 2 },
          { label: "c) Entre el 25 % y el 75 %", value: "c", points: 3 },
          { label: "d) Más del 75 %", value: "d", points: 4 },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Seguros y Previsión",
    description: "Información sobre seguros y previsión familiar",
    questions: [
      {
        id: 91,
        text: "¿Tienen algún seguro de vida?",
        options: [
          { label: "a) No", value: "a", points: 1 },
          { label: "b) Sí, solo uno de los dos miembros", value: "b", points: 2 },
          { label: "c) Sí, ambos miembros", value: "c", points: 3 },
          { label: "d) Sí, ambos miembros y nuestros hijos", value: "d", points: 4 },
        ],
      },
      {
        id: 92,
        text: "¿Cuánto pagan mensualmente por su seguro de vida (en total)?",
        options: [
          { label: "a) Nada", value: "a", points: 1 },
          { label: "b) Menos de 20 €", value: "b", points: 2 },
          { label: "c) Entre 20 € y 50 €", value: "c", points: 3 },
          { label: "d) Más de 50 €", value: "d", points: 4 },
        ],
      },
      {
        id: 93,
        text: "¿Tienen seguro de salud privado?",
        options: [
          { label: "a) No", value: "a", points: 1 },
          { label: "b) Sí, solo uno de los miembros", value: "b", points: 2 },
          { label: "c) Sí, ambos miembros", value: "c", points: 3 },
          { label: "d) Sí, toda la familia", value: "d", points: 4 },
        ],
      },
      {
        id: 94,
        text: "¿Cuánto pagan mensualmente por su seguro de salud privado (en total)?",
        options: [
          { label: "a) Nada", value: "a", points: 1 },
          { label: "b) Menos de 50 €", value: "b", points: 2 },
          { label: "c) Entre 50 € y 150 €", value: "c", points: 3 },
          { label: "d) Más de 150 €", value: "d", points: 4 },
        ],
      },
      {
        id: 95,
        text: "¿Tienen seguro de hogar?",
        options: [
          { label: "a) No", value: "a", points: 1 },
          { label: "b) Sí, solo la vivienda", value: "b", points: 2 },
          { label: "c) Sí, vivienda y contenidos", value: "c", points: 3 },
          { label: "d) Sí, vivienda, contenidos y responsabilidad civil", value: "d", points: 4 },
        ],
      },
      {
        id: 96,
        text: "¿Cuánto pagan mensualmente por su seguro de hogar?",
        options: [
          { label: "a) Nada", value: "a", points: 1 },
          { label: "b) Menos de 20 €", value: "b", points: 2 },
          { label: "c) Entre 20 € y 50 €", value: "c", points: 3 },
          { label: "d) Más de 50 €", value: "d", points: 4 },
        ],
      },
      {
        id: 97,
        text: "¿Tienen seguro de coche?",
        options: [
          { label: "a) No", value: "a", points: 1 },
          { label: "b) Sí, solo a terceros", value: "b", points: 2 },
          { label: "c) Sí, a todo riesgo", value: "c", points: 4 },
          { label: "d) Sí, a todo riesgo con franquicia", value: "d", points: 3 },
        ],
      },
      {
        id: 98,
        text: "¿Cuánto pagan mensualmente por su seguro de coche?",
        options: [
          { label: "a) Menos de 30 €", value: "a", points: 4 },
          { label: "b) Entre 30 € y 60 €", value: "b", points: 3 },
          { label: "c) Entre 60 € y 100 €", value: "c", points: 2 },
          { label: "d) Más de 100 €", value: "d", points: 1 },
        ],
      },
      {
        id: 99,
        text: "¿Tienen algún seguro de incapacidad o accidente?",
        options: [
          { label: "a) No", value: "a", points: 1 },
          { label: "b) Sí, solo uno de los miembros", value: "b", points: 2 },
          { label: "c) Sí, ambos miembros", value: "c", points: 3 },
          { label: "d) Sí, todos los miembros de la familia", value: "d", points: 4 },
        ],
      },
      {
        id: 100,
        text: "¿Cuánto pagan mensualmente por su seguro de incapacidad o accidente?",
        options: [
          { label: "a) Nada", value: "a", points: 1 },
          { label: "b) Menos de 20 €", value: "b", points: 2 },
          { label: "c) Entre 20 € y 50 €", value: "c", points: 3 },
          { label: "d) Más de 50 €", value: "d", points: 4 },
        ],
      },
      {
        id: 101,
        text: "¿Tienen algún tipo de seguro de ahorro o inversión?",
        options: [
          { label: "a) No", value: "a", points: 1 },
          { label: "b) Sí, pero con pocos aportes", value: "b", points: 2 },
          { label: "c) Sí, con aportes regulares", value: "c", points: 3 },
          { label: "d) Sí, con aportes elevados y planificación", value: "d", points: 4 },
        ],
      },
      {
        id: 102,
        text: "¿Tienen un seguro de vida vinculado a la hipoteca?",
        options: [
          { label: "a) No", value: "a", points: 1 },
          { label: "b) Sí, solo uno de los miembros", value: "b", points: 2 },
          { label: "c) Sí, ambos miembros", value: "c", points: 3 },
          { label: "d) Sí, toda la familia", value: "d", points: 4 },
        ],
      },
      {
        id: 103,
        text: "¿Tienen algún seguro de decesos?",
        options: [
          { label: "a) No", value: "a", points: 1 },
          { label: "b) Sí, solo uno de los miembros", value: "b", points: 2 },
          { label: "c) Sí, ambos miembros", value: "c", points: 3 },
          { label: "d) Sí, toda la familia", value: "d", points: 4 },
        ],
      },
      {
        id: 104,
        text: "¿Cuánto pagan mensualmente por su seguro de decesos?",
        options: [
          { label: "a) Nada", value: "a", points: 1 },
          { label: "b) Menos de 10 €", value: "b", points: 2 },
          { label: "c) Entre 10 € y 30 €", value: "c", points: 3 },
          { label: "d) Más de 30 €", value: "d", points: 4 },
        ],
      },
      {
        id: 105,
        text: "¿Han revisado sus pólizas de seguros en el último año para ajustar coberturas?",
        options: [
          { label: "a) No", value: "a", points: 1 },
          { label: "b) Sí, solo el seguro de hogar", value: "b", points: 2 },
          { label: "c) Sí, todos los seguros", value: "c", points: 4 },
          { label: "d) Sí, pero no hemos hecho cambios", value: "d", points: 3 },
        ],
      },
      {
        id: 106,
        text: "¿Tienen un seguro para la educación de los hijos?",
        options: [
          { label: "a) No", value: "a", points: 1 },
          { label: "b) Sí, con aportes esporádicos", value: "b", points: 2 },
          { label: "c) Sí, con aportes periódicos", value: "c", points: 3 },
          { label: "d) Sí, con aportes elevados y planificación", value:
