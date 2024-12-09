export interface Rule {
  condition: string;
  requirement: string;
  reason: string;
}

export interface Clauses {
  mandatory: string[];
  optional: string[];
}

export interface Category {
  id: number;
  category: string;
  clauses: Clauses;
  rules: Rule[];
}

export interface KnowledgeType {
  id: number;
  type: string;
  categories: Category[];
}

export interface KnowledgeBase {
  types: KnowledgeType[];
}

export const knowledgeBase: KnowledgeBase = {
  types: [
    {
      id: 1,
      type: "Contratos Laborales",
      categories: [
        {
          id: 1,
          category: "Contrato Indefinido",
          clauses: {
            mandatory: [
              "El contrato debe establecer el nombre del trabajador y el empleador.",
              "Debe incluir la naturaleza del trabajo y el lugar donde se prestarán los servicios.",
              "Indicar el salario pactado y la forma de pago.",
            ],
            optional: [
              "Cláusulas sobre beneficios adicionales.",
              "Condiciones de exclusividad del trabajador.",
            ],
          },
          rules: [
            {
              condition: "Si el contrato no tiene un límite de tiempo definido",
              requirement: "Se considera como un contrato laboral indefinido.",
              reason:
                "El contrato por tiempo indefinido es la norma general salvo disposición expresa en contrario.",
            },
          ],
        },
        {
          id: 2,
          category: "Contrato por Tiempo Limitado",
          clauses: {
            mandatory: [
              "Debe especificar la duración del contrato.",
              "Incluir la naturaleza del trabajo y el lugar donde se prestarán los servicios.",
              "Indicar el salario pactado y la forma de pago.",
            ],
            optional: [
              "Estipular beneficios adicionales por cumplimiento anticipado.",
              "Condiciones para la renovación del contrato.",
            ],
          },
          rules: [
            {
              condition: "Duración máxima permitida",
              requirement:
                "No debe exceder los límites establecidos por la ley.",
              reason:
                "Contratos excesivamente largos se consideran como contratos indefinidos.",
            },
          ],
        },
        {
          id: 3,
          category: "Contrato por Obra o Servicio Determinado",
          clauses: {
            mandatory: [
              "El contrato debe especificar la obra o servicio a realizar.",
              "Debe incluir el tiempo estimado para la conclusión de la obra o servicio.",
              "Indicar el salario acordado y los plazos de pago.",
            ],
            optional: [
              "Cláusulas sobre bonificaciones por cumplimiento antes del plazo.",
              "Condiciones para extender el contrato si la obra no ha terminado.",
            ],
          },
          rules: [
            {
              condition: "Cuando la obra o servicio finaliza",
              requirement: "El contrato termina automáticamente.",
              reason:
                "La duración del contrato está limitada a la conclusión de la obra o servicio.",
            },
          ],
        },
        {
          id: 4,
          category: "Periodo de Prueba",
          clauses: {
            mandatory: [
              "Debe especificar la duración del período de prueba, que no puede exceder los 60 días.",
              "El empleador está obligado a remunerar al trabajador durante este período.",
              "El contrato debe incluir las condiciones bajo las cuales se evalúa el desempeño del trabajador.",
            ],
            optional: [
              "Condiciones para la capacitación del trabajador durante el período de prueba.",
            ],
          },
          rules: [
            {
              condition: "Finalización del período de prueba",
              requirement:
                "Debe decidirse si el trabajador continuará bajo contrato laboral regular.",
              reason:
                "El período de prueba es para evaluar la aptitud del trabajador para el puesto.",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      type: "Contratos de Arrendamiento",
      categories: [
        {
          id: 1,
          category: "Arrendamiento de Bienes Inmuebles",
          clauses: {
            mandatory: [
              "Duración del arrendamiento.",
              "Obligaciones del arrendador y arrendatario.",
              "Monto de la renta mensual.",
            ],
            optional: [
              "Opciones de renovación automática.",
              "Cláusula penal por incumplimiento.",
            ],
          },
          rules: [
            {
              condition: "Duración mayor a 1 año",
              requirement: "Registrar ante la autoridad correspondiente.",
              reason:
                "Los contratos mayores a 1 año deben registrarse según la normativa local.",
            },
            {
              condition: "Incluir penalización por incumplimiento",
              requirement: "Debe especificar el monto o porcentaje aplicable.",
              reason:
                "Es necesario detallar la penalización para proteger los derechos del arrendador.",
            },
          ],
        },
        {
          id: 2,
          category: "Arrendamiento de Bienes Muebles",
          clauses: {
            mandatory: [
              "Identificación del bien mueble objeto del arrendamiento.",
              "Duración del arrendamiento.",
              "Monto del arrendamiento y plazos de pago.",
            ],
            optional: [
              "Condiciones de mantenimiento del bien mueble.",
              "Cláusulas para renovación automática.",
            ],
          },
          rules: [
            {
              condition: "Uso indebido del bien mueble",
              requirement: "El arrendador puede rescindir el contrato.",
              reason: "El contrato protege el correcto uso del bien arrendado.",
            },
            {
              condition: "Falta de pago del monto acordado",
              requirement:
                "El arrendador puede reclamar la restitución del bien.",
              reason:
                "La puntualidad en el pago asegura la vigencia del contrato.",
            },
          ],
        },
        {
          id: 3,
          category: "Subarrendamiento",
          clauses: {
            mandatory: [
              "Consentimiento del arrendador principal.",
              "Identificación del subarrendatario y condiciones del subarrendamiento.",
              "Duración del subarrendamiento.",
            ],
            optional: [
              "Cláusulas para la cesión de derechos y obligaciones.",
              "Condiciones para la renovación del subarrendamiento.",
            ],
          },
          rules: [
            {
              condition:
                "El subarrendamiento excede la duración del contrato principal",
              requirement: "El subarrendamiento no podrá ser válido.",
              reason:
                "El subarrendamiento no puede exceder el contrato original del arrendatario.",
            },
            {
              condition: "Daños ocasionados por el subarrendatario",
              requirement:
                "El arrendatario original es responsable ante el arrendador.",
              reason:
                "El arrendatario principal mantiene la relación directa con el arrendador.",
            },
          ],
        },
        {
          id: 4,
          category: "Leasing",
          clauses: {
            mandatory: [
              "Descripción del bien objeto del contrato de leasing.",
              "Duración del contrato de leasing.",
              "Monto de las cuotas y términos de pago.",
            ],
            optional: [
              "Cláusulas para opción de compra al término del leasing.",
              "Condiciones para la renovación del contrato.",
            ],
          },
          rules: [
            {
              condition: "Uso indebido del bien arrendado",
              requirement: "El arrendador puede rescindir el contrato.",
              reason:
                "El contrato protege los intereses del arrendador y el uso correcto del bien.",
            },
            {
              condition: "Opción de compra al finalizar el leasing",
              requirement:
                "El arrendatario debe cumplir con todas las cuotas pactadas.",
              reason:
                "La opción de compra está sujeta al cumplimiento del contrato.",
            },
          ],
        },
      ],
    },
  ],
};

export default knowledgeBase;
