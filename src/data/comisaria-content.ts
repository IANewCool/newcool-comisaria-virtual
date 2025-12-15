// NewCool Comisaria Virtual - Contenido Educativo
// Portal de servicios policiales en linea de Carabineros de Chile

export const COMISARIA_INFO = {
  nombre: 'Comisaria Virtual',
  sigla: 'Comisaria Virtual',
  fullName: 'Comisaria Virtual de Carabineros de Chile',
  shortName: 'Comisaria Virtual',
  institucion: 'Carabineros de Chile',
  fundacion: 2007,
  sitioWeb: 'https://comisariavirtual.cl',
  website: 'https://comisariavirtual.cl',
  icon: '👮',
  foundedYear: 2007,
  dependencia: 'Ministerio del Interior y Seguridad Publica',
  mision: 'Facilitar el acceso ciudadano a servicios policiales mediante plataformas digitales, reduciendo tiempos de espera y mejorando la experiencia del usuario.',
  vision: 'Ser la plataforma lider en servicios policiales digitales de Latinoamerica, con cobertura total y maxima satisfaccion ciudadana.',
  mission: 'Brindar servicios policiales de forma digital, eficiente y accesible para todos los ciudadanos.',
  description: 'Plataforma digital de Carabineros que permite realizar tramites policiales sin ir a una comisaria fisica. Disponible 24/7 desde cualquier lugar.',
  slogan: 'Tu comisaria, siempre disponible',
  director: 'General Director de Carabineros',
  tesorero: 'General Director de Carabineros'
};

// Estadisticas de uso
export const COMISARIA_STATS = {
  tramitesAnuales: '15M+',
  usuariosRegistrados: '8M+',
  disponibilidad: '24/7',
  tiempoPromedio: '5 min',
  satisfaccion: '92%',
  coberturaNacional: '100%'
};

// Tipos de denuncias que se pueden hacer
export const TIPOS_DENUNCIAS = {
  robos: {
    nombre: 'Robos y Hurtos',
    icon: '🔓',
    descripcion: 'Robo con violencia, hurto, robo en lugar habitado/no habitado',
    ejemplos: ['Robo de vehiculo', 'Hurto en tienda', 'Robo con intimidacion', 'Robo en vivienda'],
    requisitos: ['RUT del denunciante', 'Descripcion detallada', 'Lugar y fecha aproximada'],
    plazoLegal: 'Hasta 6 meses para denunciar',
    online: true
  },
  danos: {
    nombre: 'Danos',
    icon: '💔',
    descripcion: 'Dano a propiedad publica o privada',
    ejemplos: ['Rayado de vehiculo', 'Rotura de vidrios', 'Grafitis', 'Dano a cercos'],
    requisitos: ['Evidencia fotografica recomendada', 'Ubicacion del dano'],
    plazoLegal: 'Hasta 6 meses',
    online: true
  },
  amenazas: {
    nombre: 'Amenazas',
    icon: '⚠️',
    descripcion: 'Amenazas verbales, escritas o por redes sociales',
    ejemplos: ['Amenazas presenciales', 'Amenazas por WhatsApp', 'Amenazas en redes sociales'],
    requisitos: ['Capturas de pantalla si aplica', 'Identificacion del agresor si se conoce'],
    plazoLegal: 'Hasta 6 meses',
    online: true
  },
  estafas: {
    nombre: 'Estafas y Fraudes',
    icon: '💳',
    descripcion: 'Estafas presenciales u online, fraudes bancarios',
    ejemplos: ['Estafa telefonica', 'Phishing bancario', 'Fraude en compra online', 'Cuento del tio'],
    requisitos: ['Comprobantes de transferencia', 'Comunicaciones con estafador', 'Monto defraudado'],
    plazoLegal: 'Hasta 5 anos (delito)',
    online: true
  },
  violenciaIntrafamiliar: {
    nombre: 'Violencia Intrafamiliar',
    icon: '🏠',
    descripcion: 'Violencia fisica, psicologica o economica en contexto familiar',
    ejemplos: ['Maltrato fisico', 'Violencia psicologica', 'Amenazas familiares'],
    requisitos: ['Atencion preferente', 'Derivacion a fiscalia automatica'],
    plazoLegal: 'Sin plazo - delito grave',
    online: true,
    urgente: true
  },
  acoso: {
    nombre: 'Acoso y Hostigamiento',
    icon: '😰',
    descripcion: 'Acoso sexual, laboral, callejero o ciberacoso',
    ejemplos: ['Acoso callejero', 'Ciberacoso', 'Acoso laboral', 'Acoso sexual'],
    requisitos: ['Descripcion de hechos', 'Evidencia si existe', 'Identificacion del acosador'],
    plazoLegal: 'Hasta 6 meses (dependiendo del tipo)',
    online: true
  },
  otros: {
    nombre: 'Otros Delitos',
    icon: '📋',
    descripcion: 'Apropiacion indebida, injurias, usurpacion de identidad',
    ejemplos: ['Apropiacion indebida', 'Injurias y calumnias', 'Usurpacion de identidad', 'Desordenes'],
    requisitos: ['Varia segun el delito'],
    plazoLegal: 'Consultar segun tipo',
    online: true
  }
};

// Certificados disponibles
export const CERTIFICADOS = {
  antecedentes: {
    nombre: 'Certificado de Antecedentes',
    icon: '📄',
    descripcion: 'Documento que acredita si tienes o no antecedentes penales',
    tipos: [
      { nombre: 'Para fines particulares', uso: 'Tramites personales, viajes', costo: 'Gratis' },
      { nombre: 'Para fines especiales', uso: 'Postulacion a empleos publicos', costo: 'Gratis' }
    ],
    vigencia: '60 dias',
    tiempoObtencion: 'Inmediato (online)',
    requisitos: ['ClaveUnica', 'RUT vigente'],
    url: 'https://www.srcei.cl/certificado-de-antecedentes/'
  },
  extravio: {
    nombre: 'Constancia de Extravio',
    icon: '🔍',
    descripcion: 'Documento que acredita la perdida de objetos o documentos',
    tipos: [
      { nombre: 'Documentos de identidad', uso: 'Cedula, pasaporte, licencia', costo: 'Gratis' },
      { nombre: 'Objetos personales', uso: 'Celular, billetera, llaves', costo: 'Gratis' },
      { nombre: 'Vehiculos', uso: 'Patente, documentos auto', costo: 'Gratis' }
    ],
    vigencia: 'Permanente',
    tiempoObtencion: 'Inmediato',
    requisitos: ['RUT', 'Descripcion del objeto/documento'],
    url: 'https://comisariavirtual.cl'
  },
  residencia: {
    nombre: 'Certificado de Residencia',
    icon: '🏡',
    descripcion: 'Documento que acredita tu domicilio actual',
    tipos: [
      { nombre: 'Simple', uso: 'Tramites generales', costo: 'Gratis' },
      { nombre: 'Para subsidio', uso: 'Postulacion a beneficios estatales', costo: 'Gratis' }
    ],
    vigencia: '30 dias',
    tiempoObtencion: 'Requiere verificacion (24-72 hrs)',
    requisitos: ['ClaveUnica', 'Direccion verificable'],
    url: 'https://comisariavirtual.cl'
  }
};

// Servicios disponibles
export const SERVICIOS_COMISARIA = [
  {
    id: 'denuncia',
    name: 'Realizar Denuncia',
    icon: '📝',
    description: 'Denuncia delitos como robos, hurtos, estafas, amenazas y mas',
    online: true,
    requirements: ['ClaveUnica o registro en el portal', 'RUT vigente', 'Descripcion de los hechos'],
    steps: [
      'Ingresa a comisariavirtual.cl',
      'Inicia sesion con ClaveUnica',
      'Selecciona "Hacer una denuncia"',
      'Elige el tipo de delito',
      'Completa el formulario con detalles',
      'Adjunta evidencia si tienes',
      'Confirma y guarda tu numero de caso'
    ],
    url: 'https://comisariavirtual.cl',
    tiempo: '10-15 minutos',
    resultado: 'Numero de parte policial'
  },
  {
    id: 'antecedentes',
    name: 'Certificado de Antecedentes',
    icon: '📄',
    description: 'Obtiene tu certificado de antecedentes penales al instante',
    online: true,
    requirements: ['ClaveUnica', 'RUT vigente'],
    steps: [
      'Ingresa al Registro Civil (srcei.cl)',
      'Inicia sesion con ClaveUnica',
      'Selecciona tipo de certificado',
      'Descarga tu certificado PDF'
    ],
    url: 'https://www.srcei.cl/certificado-de-antecedentes/',
    tiempo: '2 minutos',
    resultado: 'PDF descargable'
  },
  {
    id: 'extravio',
    name: 'Constancia de Extravio',
    icon: '🔍',
    description: 'Reporta la perdida de documentos u objetos personales',
    online: true,
    requirements: ['RUT', 'Descripcion del objeto perdido', 'Fecha aproximada de perdida'],
    steps: [
      'Ingresa a comisariavirtual.cl',
      'Selecciona "Constancia de extravio"',
      'Indica que perdiste (documento/objeto)',
      'Completa los datos requeridos',
      'Descarga tu constancia'
    ],
    url: 'https://comisariavirtual.cl',
    tiempo: '5 minutos',
    resultado: 'Constancia PDF'
  },
  {
    id: 'salvoconducto',
    name: 'Salvoconducto',
    icon: '🚗',
    description: 'Permiso temporal para circular sin documentos del vehiculo',
    online: true,
    requirements: ['Patente del vehiculo', 'RUT propietario', 'Motivo de solicitud'],
    steps: [
      'Ingresa a comisariavirtual.cl',
      'Selecciona "Salvoconducto"',
      'Ingresa datos del vehiculo',
      'Indica el motivo',
      'Obtiene permiso temporal'
    ],
    url: 'https://comisariavirtual.cl',
    tiempo: '5 minutos',
    resultado: 'Salvoconducto digital'
  },
  {
    id: 'encargo',
    name: 'Consulta Encargo por Robo',
    icon: '🚙',
    description: 'Verifica si un vehiculo tiene encargo por robo',
    online: true,
    requirements: ['Patente del vehiculo'],
    steps: [
      'Ingresa a comisariavirtual.cl',
      'Selecciona "Consultas"',
      'Ingresa la patente',
      'Revisa el resultado'
    ],
    url: 'https://comisariavirtual.cl',
    tiempo: '1 minuto',
    resultado: 'Estado del vehiculo'
  },
  {
    id: 'autorizacion-menor',
    name: 'Autorizacion Viaje Menor',
    icon: '✈️',
    description: 'Autoriza viaje de menores al extranjero',
    online: false,
    requirements: ['Presencia de ambos padres o tutor', 'Cedulas de identidad', 'Datos del menor'],
    steps: [
      'Agenda hora en notaria o PDI',
      'Ambos padres firman autorizacion',
      'Notario certifica el documento',
      'Presentar en aeropuerto/frontera'
    ],
    url: 'https://www.chileatiende.gob.cl/fichas/36644-permiso-de-viaje-para-menores-de-edad',
    tiempo: 'Variable',
    resultado: 'Documento notarial'
  }
];

// Canales de atencion
export const CANALES_COMISARIA = [
  {
    id: 'web',
    name: 'Portal Web',
    icon: '🌐',
    description: 'Plataforma principal de tramites online',
    contact: 'comisariavirtual.cl',
    hours: '24/7',
    tipo: 'online'
  },
  {
    id: 'fono',
    name: 'Fono Carabineros',
    icon: '📞',
    description: 'Linea de emergencias y consultas',
    contact: '133',
    hours: '24/7',
    tipo: 'telefono'
  },
  {
    id: 'app',
    name: 'App Movil',
    icon: '📱',
    description: 'Aplicacion para iOS y Android',
    contact: 'Sosafe / Carabineros',
    hours: '24/7',
    tipo: 'app'
  },
  {
    id: 'presencial',
    name: 'Comisaria Presencial',
    icon: '🏢',
    description: 'Atencion en persona para tramites complejos',
    contact: 'Comisaria mas cercana',
    hours: 'Lun-Vie 8:00-17:00',
    tipo: 'presencial'
  }
];

// Proceso de denuncia paso a paso
export const PROCESO_DENUNCIA = {
  pasos: [
    {
      numero: 1,
      titulo: 'Identifica el delito',
      descripcion: 'Determina que tipo de delito quieres denunciar',
      icono: '🎯',
      tips: ['Robo = con violencia o intimidacion', 'Hurto = sin violencia', 'Estafa = engano para obtener dinero']
    },
    {
      numero: 2,
      titulo: 'Reune evidencia',
      descripcion: 'Junta toda la informacion y pruebas disponibles',
      icono: '📸',
      tips: ['Fotos del lugar/objeto', 'Capturas de conversaciones', 'Testigos si los hay', 'Boletas o comprobantes']
    },
    {
      numero: 3,
      titulo: 'Ingresa al portal',
      descripcion: 'Accede a comisariavirtual.cl con ClaveUnica',
      icono: '💻',
      tips: ['Necesitas ClaveUnica activa', 'Tambien puedes registrarte solo con RUT']
    },
    {
      numero: 4,
      titulo: 'Completa el formulario',
      descripcion: 'Describe los hechos con el mayor detalle posible',
      icono: '📝',
      tips: ['Se especifico con fechas y lugares', 'Describe caracteristicas del delincuente', 'Indica valor de lo robado/danado']
    },
    {
      numero: 5,
      titulo: 'Adjunta pruebas',
      descripcion: 'Sube fotos, videos o documentos de respaldo',
      icono: '📎',
      tips: ['Formatos aceptados: JPG, PNG, PDF', 'Tamano maximo por archivo', 'Puedes agregar multiples archivos']
    },
    {
      numero: 6,
      titulo: 'Confirma y guarda',
      descripcion: 'Revisa, confirma y guarda tu numero de caso',
      icono: '✅',
      tips: ['Anota el numero de parte', 'Guarda el comprobante PDF', 'Podras hacer seguimiento online']
    }
  ],
  tiempoTotal: '10-20 minutos',
  importante: 'Tu denuncia queda registrada oficialmente y es derivada a la fiscalia correspondiente'
};

// Derechos del denunciante
export const DERECHOS_DENUNCIANTE = [
  {
    derecho: 'Confidencialidad',
    descripcion: 'Tu identidad puede ser reservada si lo solicitas',
    icono: '🔒'
  },
  {
    derecho: 'Seguimiento',
    descripcion: 'Puedes consultar el estado de tu denuncia online',
    icono: '📊'
  },
  {
    derecho: 'Proteccion',
    descripcion: 'Derecho a medidas de proteccion si hay riesgo',
    icono: '🛡️'
  },
  {
    derecho: 'Informacion',
    descripcion: 'Ser informado del avance de la investigacion',
    icono: '📋'
  },
  {
    derecho: 'Asistencia',
    descripcion: 'Acceso a asistencia juridica gratuita',
    icono: '⚖️'
  },
  {
    derecho: 'Reparacion',
    descripcion: 'Solicitar indemnizacion por danos sufridos',
    icono: '💰'
  }
];

// Tips de seguridad ciudadana
export const TIPS_SEGURIDAD = [
  {
    id: 'prevencion-robo',
    categoria: 'Prevencion',
    titulo: 'Evita robos en la calle',
    tips: [
      'No uses el celular caminando en zonas peligrosas',
      'Lleva solo el efectivo necesario',
      'Varia tus rutas habituales',
      'Camina en sentido contrario al trafico',
      'Mantente alerta en paraderos y transporte publico'
    ],
    icono: '🚶'
  },
  {
    id: 'seguridad-hogar',
    categoria: 'Hogar',
    titulo: 'Protege tu casa',
    tips: [
      'Instala cerraduras de seguridad',
      'No publiques tus vacaciones en redes',
      'Conoce a tus vecinos',
      'Usa luces con temporizador',
      'Marca objetos de valor con tu RUT'
    ],
    icono: '🏠'
  },
  {
    id: 'seguridad-digital',
    categoria: 'Digital',
    titulo: 'Evita estafas online',
    tips: [
      'Nunca compartas claves por telefono',
      'Verifica URLs antes de ingresar datos',
      'Desconfia de ofertas demasiado buenas',
      'Usa autenticacion de 2 factores',
      'No hagas click en links sospechosos'
    ],
    icono: '💻'
  },
  {
    id: 'seguridad-vehiculo',
    categoria: 'Vehiculo',
    titulo: 'Protege tu auto',
    tips: [
      'Estaciona en lugares iluminados',
      'No dejes objetos de valor a la vista',
      'Usa traba volante',
      'Revisa alrededor antes de subir/bajar',
      'Contrata GPS o LoJack'
    ],
    icono: '🚗'
  }
];

// Preguntas frecuentes
export const FAQ_COMISARIA = [
  {
    id: 'faq-1',
    question: 'Puedo hacer cualquier denuncia online?',
    answer: 'La mayoria de delitos se pueden denunciar online. Excepciones: delitos flagrantes (en el momento), delitos sexuales graves, y situaciones que requieran accion policial inmediata. En esos casos, llama al 133.',
    category: 'general'
  },
  {
    id: 'faq-2',
    question: 'La denuncia online tiene el mismo valor legal?',
    answer: 'Si, la denuncia online tiene exactamente el mismo valor legal que una presencial. Queda registrada oficialmente y es derivada automaticamente a la fiscalia.',
    category: 'general'
  },
  {
    id: 'faq-3',
    question: 'Cuanto demora procesar mi denuncia?',
    answer: 'La denuncia queda registrada inmediatamente. La investigacion puede tomar desde dias hasta meses dependiendo de la complejidad del caso.',
    category: 'servicios'
  },
  {
    id: 'faq-4',
    question: 'Puedo denunciar anonimamente?',
    answer: 'No puedes denunciar de forma completamente anonima, pero puedes solicitar reserva de identidad. Tu nombre no sera revelado al denunciado.',
    category: 'servicios'
  },
  {
    id: 'faq-5',
    question: 'Que pasa despues de denunciar?',
    answer: 'Tu denuncia es enviada a la fiscalia que decide si inicia investigacion. Puedes hacer seguimiento con tu numero de caso en el portal.',
    category: 'general'
  },
  {
    id: 'faq-6',
    question: 'El certificado de antecedentes es gratis?',
    answer: 'Si, el certificado de antecedentes es completamente gratuito y se obtiene de forma inmediata a traves del sitio del Registro Civil.',
    category: 'servicios'
  },
  {
    id: 'faq-7',
    question: 'Puedo retirar una denuncia?',
    answer: 'No puedes "retirar" una denuncia ya que el Estado tiene obligacion de investigar. Solo puedes manifestar desinteres en continuar como parte.',
    category: 'general'
  },
  {
    id: 'faq-8',
    question: 'Que hago si perdi mi cedula?',
    answer: 'Primero haz la constancia de extravio en Comisaria Virtual (gratis). Luego agenda hora en el Registro Civil para obtener una nueva cedula.',
    category: 'servicios'
  }
];

// Numeros de emergencia
export const EMERGENCIAS = [
  { numero: '133', nombre: 'Carabineros', descripcion: 'Emergencias policiales', icono: '👮' },
  { numero: '131', nombre: 'Ambulancia', descripcion: 'Emergencias medicas', icono: '🚑' },
  { numero: '132', nombre: 'Bomberos', descripcion: 'Incendios y rescate', icono: '🚒' },
  { numero: '134', nombre: 'PDI', descripcion: 'Policia de Investigaciones', icono: '🔍' },
  { numero: '149', nombre: 'Fono Familia', descripcion: 'Violencia intrafamiliar', icono: '👨‍👩‍👧' },
  { numero: '600 360 7777', nombre: 'Fono Drogas', descripcion: 'SENDA', icono: '💊' }
];

// Glosario de terminos legales
export const GLOSARIO_LEGAL = [
  { id: 'robo', term: 'Robo', definition: 'Apropiacion de cosa ajena usando violencia o intimidacion contra las personas', example: 'Te amenazan con un cuchillo para quitarte el celular' },
  { id: 'hurto', term: 'Hurto', definition: 'Apropiacion de cosa ajena sin violencia ni intimidacion', example: 'Te sacan la billetera del bolsillo sin que te des cuenta' },
  { id: 'estafa', term: 'Estafa', definition: 'Engano para obtener un beneficio economico ilicito', example: 'Te venden un producto que nunca entregan' },
  { id: 'denuncia', term: 'Denuncia', definition: 'Acto de poner en conocimiento de la autoridad un hecho delictivo', example: 'Reportar un robo en Comisaria Virtual' },
  { id: 'querella', term: 'Querella', definition: 'Accion judicial formal contra una persona especifica', example: 'Iniciar proceso penal contra quien te estafo' },
  { id: 'fiscalia', term: 'Fiscalia', definition: 'Institucion que investiga delitos y acusa ante tribunales', example: 'El fiscal decide si hay merito para investigar' },
  { id: 'imputado', term: 'Imputado', definition: 'Persona formalmente acusada de un delito', example: 'El sospechoso fue imputado por robo' },
  { id: 'flagrancia', term: 'Flagrancia', definition: 'Cuando se sorprende a alguien cometiendo un delito', example: 'Lo pillaron robando en el supermercado' },
  { id: 'cautelar', term: 'Medida Cautelar', definition: 'Restriccion impuesta al imputado durante investigacion', example: 'Arraigo nacional, prohibicion de acercarse' },
  { id: 'sobreseimiento', term: 'Sobreseimiento', definition: 'Cierre de la investigacion sin juicio', example: 'Se cerro el caso por falta de pruebas' }
];

// Lecciones educativas
export const LECCIONES_SEGURIDAD = [
  {
    id: 'leccion-1',
    title: 'Como funciona el sistema de denuncias',
    icon: '📚',
    description: 'Aprende el proceso completo desde la denuncia hasta el juicio',
    content: [
      'El sistema de justicia penal en Chile funciona en etapas. Primero, la denuncia activa el sistema - puede ser en Carabineros, PDI, Fiscalia o Tribunales.',
      'Luego viene la investigacion, dirigida por un fiscal del Ministerio Publico. El fiscal decide si hay meritos para continuar o cerrar el caso.',
      'Si hay suficiente evidencia, se formaliza la investigacion y el caso puede llegar a juicio oral, donde un tribunal decide la inocencia o culpabilidad.'
    ],
    keyPoints: [
      'La denuncia es solo el primer paso - no garantiza condena',
      'El fiscal dirige la investigacion, no Carabineros',
      'Tienes derecho a ser informado del avance',
      'La mayoria de casos se resuelven con salidas alternativas'
    ]
  },
  {
    id: 'leccion-2',
    title: 'Diferencia entre Carabineros y PDI',
    icon: '👮',
    description: 'Entiende las funciones de cada policia',
    content: [
      'Carabineros de Chile es la policia uniformada de caracter preventivo. Patrullan las calles, responden a emergencias, controlan el orden publico y realizan fiscalizaciones.',
      'La PDI (Policia de Investigaciones) es la policia civil investigativa. Se especializa en resolver crimenes complejos, investigar delitos y apoyar al Ministerio Publico.',
      'Ambas policias pueden recibir denuncias y tienen facultades de detencion, pero sus roles principales son diferentes.'
    ],
    keyPoints: [
      'Carabineros: prevencion y orden publico (llama al 133)',
      'PDI: investigacion criminal (llama al 134)',
      'Ambos trabajan bajo direccion de la Fiscalia',
      'Para emergencias inmediatas, siempre Carabineros'
    ]
  },
  {
    id: 'leccion-3',
    title: 'Tus derechos como victima',
    icon: '⚖️',
    description: 'Conoce tus derechos en el proceso penal',
    content: [
      'Como victima tienes derechos fundamentales protegidos por ley. Tienes derecho a ser tratado con dignidad, a la proteccion, y a ser informado del estado de tu caso.',
      'Puedes solicitar medidas de proteccion si corres peligro. El tribunal puede ordenar que el imputado no se acerque a ti.',
      'Tienes derecho a participar en el proceso, presentar pruebas, y solicitar reparacion por los danos sufridos.'
    ],
    keyPoints: [
      'Derecho a proteccion y seguridad personal',
      'Derecho a ser informado del proceso',
      'Derecho a asistencia juridica gratuita (CAJ)',
      'Derecho a solicitar indemnizacion'
    ]
  },
  {
    id: 'leccion-4',
    title: 'Prevencion del delito',
    icon: '🛡️',
    description: 'Estrategias para reducir el riesgo de ser victima',
    content: [
      'La prevencion es la mejor estrategia contra el delito. Mantener alerta situacional significa estar consciente de tu entorno sin ser paranoico.',
      'El hogar es un punto critico. La mayoria de robos ocurren en casas vacias y con poca seguridad visible.',
      'En el mundo digital, las estafas son cada vez mas sofisticadas. Nunca entregues datos sensibles por telefono o email.'
    ],
    keyPoints: [
      'Varia tus rutinas - la previsibilidad es vulnerabilidad',
      'Invierte en seguridad basica del hogar',
      'Desconfia de contactos no solicitados',
      'Reporta situaciones sospechosas'
    ]
  }
];

// Datos curiosos
export const DATOS_CURIOSOS = [
  {
    dato: 'La Comisaria Virtual fue pionera en Latinoamerica cuando se lanzo en 2007',
    icono: '🌎'
  },
  {
    dato: 'Mas de 15 millones de tramites se realizan anualmente en el portal',
    icono: '📊'
  },
  {
    dato: 'El 70% de las denuncias por estafa ahora se hacen online',
    icono: '💻'
  },
  {
    dato: 'Carabineros tiene mas de 60,000 funcionarios en todo Chile',
    icono: '👮'
  },
  {
    dato: 'El certificado de antecedentes es el tramite mas solicitado',
    icono: '📄'
  },
  {
    dato: 'Chile tiene una tasa de denuncia del 45%, superior al promedio regional',
    icono: '📈'
  }
];

// Funciones principales para WhatIsTGRView
export const COMISARIA_FUNCTIONS = [
  {
    id: 'denuncias',
    name: 'Recepcion de Denuncias',
    icon: '📝',
    description: 'Permite denunciar delitos de forma digital las 24 horas',
    details: [
      'Denuncias de robos, hurtos, estafas y danos',
      'Violencia intrafamiliar con derivacion automatica',
      'Generacion de numero de parte oficial',
      'Seguimiento online del estado'
    ]
  },
  {
    id: 'certificados',
    name: 'Emision de Certificados',
    icon: '📄',
    description: 'Certificados y constancias oficiales en linea',
    details: [
      'Certificado de antecedentes (via Registro Civil)',
      'Constancias de extravio de documentos',
      'Certificados de residencia',
      'Salvoconductos vehiculares'
    ]
  },
  {
    id: 'consultas',
    name: 'Consultas de Vehiculos',
    icon: '🚗',
    description: 'Verificacion del estado de vehiculos',
    details: [
      'Consulta de encargo por robo',
      'Verificacion de patentes',
      'Historial de infracciones',
      'Estado de documentacion'
    ]
  },
  {
    id: 'prevencion',
    name: 'Prevencion y Seguridad',
    icon: '🛡️',
    description: 'Informacion y recursos para seguridad ciudadana',
    details: [
      'Tips de prevencion del delito',
      'Alertas de seguridad',
      'Material educativo',
      'Programas comunitarios'
    ]
  },
  {
    id: 'emergencias',
    name: 'Canal de Emergencias',
    icon: '🚨',
    description: 'Conexion con servicios de emergencia',
    details: [
      'Derivacion a Fono 133',
      'Coordinacion con unidades policiales',
      'Respuesta a situaciones urgentes',
      'Apoyo en catastrofes'
    ]
  }
];

// Aliases para compatibilidad con componentes TGR
export const TGR_INFO = COMISARIA_INFO;
export const TGR_FUNCTIONS = COMISARIA_FUNCTIONS;
export const TGR_SERVICES = SERVICIOS_COMISARIA;
export const GLOSSARY = GLOSARIO_LEGAL;
export const LESSONS = LECCIONES_SEGURIDAD;
export const FAQ_LIST = FAQ_COMISARIA;
export const CHANNELS = CANALES_COMISARIA;
export const CURIOUS_FACTS = DATOS_CURIOSOS;
