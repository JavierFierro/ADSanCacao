export const formularioLineaBaseMapper = {
    fechaVisita: {
        codigo: 'F_VISITALB',
        pregunta: 'FECHA VISITA'
    },
    clasificacionMiembroFamiliar: {
        codigo: 'FA01_MF',
        pregunta: 'CLASIFICACIÓN DEL MIEMBRO FAMILIAR'
    },
    edad: {
        codigo: 'FA02_ED',
        pregunta: 'EDAD DEL MIEMBRO FAMILIAR'
    },
    genero: {
        codigo: 'FA03_GEN',
        pregunta: 'GÉNERO DEL MIEMBRO FAMILIAR'
    },
    seguridadSocial: {
        codigo: 'FA04_SS',
        pregunta: 'SEGURIDAD SOCIAL DEL MIEMBRO FAMILIAR'
    },
    nivelEduacion: {
        codigo: 'FA05_EDU',
        pregunta: 'NIVEL DE EDUCACIÓN'
    },
    laboraEnFinca: {
        codigo: 'FA06_LAB',
        pregunta: 'LABORA EN LA FINCA'
    },
    laborRealizado: {
        codigo: 'FA07_LABR',
        pregunta: 'LABOR QUE REALIZA'
    },
    horasAlDiaTrabaja: {
        codigo: 'FA08_HOR',
        pregunta: '¿CUÁNTAS HORAS AL DÍA LABORA?'
    },
    tieneOtraFuenteIngreso: {
        codigo: 'FA09_RD',
        pregunta: 'TIENE OTRA FUENTE DE INGRESOS'
    },
    sueldoIngresoMensual: {
        codigo: 'FA10_ING',
        pregunta: 'SUELDO O INGRESO MENSUAL'
    },
    familiarDiscapacitado: {
        codigo: 'FA42_DISCF',
        pregunta: 'ALGUN FAMILIAR QUE PRESENTE DISCAPACIDAD'
    },
    esposaInvolucradaEntrevista: {
        codigo: 'FA43_ESPA',
        pregunta: 'LA ESPOSA SE INVOLUCRA EN LA ENTREVISTA'
    },
    esposoIncluyeEsposaEntrevista: {
        codigo: 'FA44_ESPO',
        pregunta: 'ESPOSO INCLUYE A ESPOSA EN LA ENTREVISTA'
    },
    deseoIngresoAdicionalConyuge: {
        codigo: 'FA45_CONYIN',
        pregunta: 'GUSTARIA QUE SU CONYUGE TUVIESE ALGUN INGRESO ADICIONAL'
    },
    deseoTrabajoMedioTiempoProyectosFuturos: {
        codigo: 'FA46_MTVIV',
        pregunta: 'GUSTARÍA UN TRABAJO DE1/2 TIEMPO EN PROYECTOS FUTUROS DEL PROG.'
    },
    comoCual: {
        codigo: 'FA48_CUAL',
        pregunta: '¿COMO CUÁL?'
    },
    hijoInteresadoEnProyectosRehabilitacionFinca: {
        codigo: 'FA47_HIJP',
        pregunta: 'SU HIJO ESTARÍA INTERESADO EN PARTICIPAR EN PROYECTOS DE REHABILITACIÓN DE FINCA Y BRIGADAS'
    },
    interesElaborarFertilizanteNaturalOrganico: {
        codigo: 'FER18_CAPF',
        pregunta: '¿LE INTERERESARÍA ELABORAR FERTILIZANTES NATURALES / ORGÁNICOS?'
    },
    plagasAfectanCultivo: {
        codigo: 'MIPE09_PLAG',
        pregunta: 'PLAGAS QUE AFECTAN GENERALMENTE EN EL CULTIVO'
    },
    enfermedadesAfectanCultivo: {
        codigo: 'MIPE15_ENFERM',
        pregunta: 'ENFERMEDADES QUE AFECTAN GENERALMENTE EN EL CULTIVO'
    },
    productoParaPlagas: {
        codigo: 'MIPE07_PLA',
        pregunta: 'PRODUCTO QUIMICO O NATURAL QUE APLICÓ PARA LAS PLAGAS'
    },
    productoParaEnfermedades: {
        codigo: 'MIPE08_ENF',
        pregunta: 'PRODUCTO QUIMICO O NATURAL QUE APLICÓ PARA LAS ENFERMEDADES'
    },
    llevaRegistroPerdidasMazorcasXMonilla: {
        codigo: 'MIPE20_MZM',
        pregunta: '¿LLEVA REGISTRO DEL NÚMERO/PORCENTAJE DE MAZORCAS QUE PIERDE ANUALMENTE POR MONILLA?',
    },
    cantidadPerdidaMazorcas: {
        codigo: 'MIPE21_NMAZ',
        pregunta: '¿CUANTAS?'
    },
    periodoFertilizacion: {
        codigo: 'LAB01_F',
        pregunta: 'FERTILIZA'
    },
    periodoPoda: {
        codigo: 'LAB02_P',
        pregunta: 'PODA'
    },
    periodoControlMaleza: {
        codigo: 'LAB03_C',
        pregunta: 'CONTROLA MALEZA'
    },
    periodoMIPE: {
        codigo: 'LAB04_M',
        pregunta: 'MIPE'
    },
    periodoCosecha: {
        codigo: 'LAB05_C',
        pregunta: 'COSECHA'
    },
    accidentesLaboralesUltimoAnio: {
        codigo: 'SSO07_ACC',
        pregunta: '¿HA HABIDO ACCIDENTES LABORALES EN LA FINCA DURANTE EL ULTIMO AÑO?'
    },
    tipoAccidente: {
        codigo: 'SSO08_TACC',
        pregunta: 'QUÉ TIPO DE ACCIDENTE'
    },
    periodoIntoxicacionPresente: {
        codigo: 'SSO09_INT',
        pregunta: '¿HA SUFRIDO UD. O ALGUN MIEMBRO DE LA FAMILIA O ALGUN TRABAJADOR DE ALGUN EPISODIO DE INTOXICACION?'
    },
    producto: {
        codigo: 'SSO10_PROI',
        pregunta: '¿CON QUE PRODUCTO?'
    },
    centroSaludCercano: {
        codigo: 'SSO11_CS',
        pregunta: 'HAY UN CENTRO DE SALUD CERCANO'
    },
    periodoCadaTumba: {
        codigo: 'COS01_TUM',
        pregunta: 'SUS TUMBAS LAS REALIZA:'
    },
    latasCacaoXTumba: {
        codigo: 'COS02_LTC',
        pregunta: '¿CUÁNTAS LATAS DE CACAO FRESCO COSECHA POR TUMBA?'
    },
    realizaEscurridoSecadoCCN51: {
        codigo: 'FEM01_CCN',
        pregunta: '¿REALIZA ESCURRIDO Y/O PRE-SECADO PARA EL CCN51?'
    },
    diasFermentadoCacao: {
        codigo: 'FEM03_DIASF',
        pregunta: '¿CUÁNTOS DIAS FERMENTA EL CACAO?'
    },
    almacenaCacaoDespSecado: {
        codigo: 'CM01_ALM',
        pregunta: '¿ALMACENA EL CACAO DESPUES DEL SECADO?'
    },
    tiempoAlmacenadoCacao: {
        codigo: 'CM02_TALM',
        pregunta: 'POR CUANTO TIEMPO'
    },
    propiedadTransporte: {
        codigo: 'CM03_TRANS',
        pregunta: 'PROPIEDAD DEL TRANSPORTE'
    },
    tipoTransporte: {
        codigo: 'CM04_TTRAN',
        pregunta: 'TIPO DEL TRANSPORTE'
    },
    registroFinancieroFinca: {
        codigo: 'RGP01_RG',
        pregunta: '¿CUENTA CON UN REGISTRO DE COSTOS, GASTOS Y ACTIVIDADES DE LA FINCA?'
    },
    tipoRegistrosFinancierosFinca: {
        codigo: 'RGP07_PRM',
        pregunta: '¿QUÉ PARÁMETRO UTILIZA PARA CONTROLAR LOS RESULTADOS DE LAS ACTIVIDADES DE SU FINCA?'
    },
    perteneceAsocProgrCertif: {
        codigo: 'ASO01_PRO',
        pregunta: 'PERTENECE A UNA ORGANIZACIÓN / PROGRAMA / CERTIFICACION DE CACAO'
    },
    nombreAsociacion: {
        codigo: 'ASO02_NPRO',
        pregunta: 'NOMBRE DEL PROGRAMA, ASOCIACION, ETC'
    },
    cantidadMiembros: {
        codigo: 'ASO03_NMIEM',
        pregunta: 'CUANTOS MIEMBROS TIENE DICHA ASOCIACION'
    },
    recibeBeneficios: {
        codigo: 'ASO04_BENEF',
        pregunta: 'RECIBE BENEFICIOS O PROYECTOS DE DESARROLLO DE LA MISMA'
    },
    tiposBeneficios: {
        codigo: 'ASO05_TIPBENEF',
        pregunta: 'QUÉ TIPO DE BENEFICIOS'
    },
    otroTiposBeneficios: {
        codigo: 'ASO05_TIPBENEFOTRO',
        pregunta: 'QUÉ OTRO TIPO DE BENEFICIOS'
    },
    ayudaOtraInstitucion: {
        codigo: 'ASO14_OTRI',
        pregunta: 'RECIBE AYUDA DE ALGUNA OTRA INSTITUCIÓN?'
    },
    nombreOtraInstitucion: {
        codigo: 'ASO15_NINST',
        pregunta: 'NOMBRE DE INSTITUCIÓN'
    },
    tipoAyuda: {
        codigo: 'ASO16_AYUI',
        pregunta: 'TIPO DE AYUDA'
    },
    contrataTrabajadores: {
        codigo: 'LBS01_TRAB',
        pregunta: '¿CONTRATA TRABAJADORES?'
    },
    cantidadTrabajadores: {
        codigo: 'LBS02_NTRAB',
        pregunta: '¿CUÁNTOS TRABAJADORES?'
    },
    areaInicialContrato: {
        codigo: 'LBS03_ARTR',
        pregunta: '¿A PARTIR DE QUÉ CANTIDAD DE ÁREA CONTRATA?'
    },
    tipoContratoTrabajo: {
        codigo: 'LBS04_TTRAB',
        pregunta: 'LOS TRABAJADORES QUE CONTRATA SON'
    },
    contrataMenoresEdad: {
        codigo: 'LBS05_MED',
        pregunta: '¿CONTRATA TRABAJADORES MENORES DE 18 AÑOS?'
    },
    poseePermiso: {
        codigo: 'LBS12_MEDAD',
        pregunta: 'EN CASO DE SI, ¿CUENTA CON UN PERMISO DE TRABAJO PARA MENOR DE EDAD?'
    },
    baseContratoAgricola: {
        codigo: 'LBS06_CONT',
        pregunta: '¿CUMPLE UD. CON LA BASE DEL CONTRATO AGRICOLA POR UN DIA PARA EL CONTRATO DE SU PERSONAL DE TEMPORADA?'
    },
    energiaElectrica: {
        codigo: 'SBA01_EE',
        pregunta: 'CUENTA CON ENERGIA ELECTRICA'
    },
    tipoAguaConsumoFamiliar: {
        codigo: 'SBA02_CAG',
        pregunta: 'EL AGUA PARA CONSUMO FAMILIAR Y PREPARACION DE ALIMENTO ES'
    },
    conocimientoManejoDesechos: {
        codigo: 'HDE06_MDE',
        pregunta: '¿TIENE UD. CONOCIMIENTO SOBRE EL MANEJO DE DESECHOS?'
    },
    productoContaminaEcosistema: {
        codigo: 'HDE07_CONT',
        pregunta: 'EL PRODUCTOR CONTAMINA ECOSISTEMAS ACUATICOS O TERRESTRES'
    },
    ubicacionDesechosAguasNegras: {
        codigo: 'HDE08_UBIDES',
        pregunta: '¿DÓNDE SE VIERTEN LAS AGUAS NEGRAS Y LOS DESECHOS LIQUIDOS?'
    },
    tieneArbolesSombrio: {
        codigo: 'BIO03_SOMB',
        pregunta: '¿EL PRODUCTOR TIENE ARBOLES DE SOMBRIO?'
    },
    cultivaVegetalesHortalizasFrutas: {
        codigo: 'BIO13_OCUL',
        pregunta: 'ADICIONAL AL CACAO, ¿DESTINA UD. ESPACIO PARA CULTIVO DE VEGETALES, HORTALIZAS Y FRUTAS DE AUTOCONSUMO?'
    },
    compraProductosMercadoLocales: {
        codigo: 'BIO14_MERC',
        pregunta: 'COMPRA UD. ESTOS PRODUCTOS EN MERCADO LOCALES'
    },
    valorPromedioGastado: {
        codigo: 'BIO15_GAST',
        pregunta: '¿CUÁL ES EL VALOR QUE GASTA SEMANALMENTE EN COMPRA DE ESTOS PRODUCTOS?'
    }
}