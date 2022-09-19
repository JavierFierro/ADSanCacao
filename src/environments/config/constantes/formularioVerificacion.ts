const yesNoAnswer = ['SI', 'NO'];
const empytYesNoAnswer = ['', 'SI', 'NO'];
const datosFincaMotivoAreaNueva = ['EXPANSION', 'RENOVACION'];
const datosFincaUsoAreaNueva = ['BOSQUE', 'PLANTACION', 'HUERTA VIEJA', 'RASTROJO', 'OTROS'];
const Meses = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];
const manejoSueloTipoSuelo = ['FRANCO', 'ARENOSO', 'ARCILLOSO', 'LIMOSO'];
const manejoSueloManeraCorregirPH = ['QUIMICO', 'NATURAL'];
const manejoSueloTipoProductoQuimico = ['CAL AGRICOLA', 'YESO', 'CAL VIVA', 'OTROS'];
const manejoSueloTipoProductoNatural = ['ACIDOS HUMICOS', 'ENMIENDAS ORGANICAS', 'OTROS'];
const fertilizacionTipoProductoFertilizaCacaotales = ['QUIMICO', 'NATURAL', 'AMBOS'];
const vecesAlAnio = ['1 A 2 VECES', '3 A 4 VECES', '5 A 6 VECES', 'NUNCA'];
const fertilizacionTipoFertilizanteRecibido = ['EDAFICO', 'BIOESTIMULANTE', 'INSECTICIDAS', 'FOLIAR', 'CORRECTORES DE PH', 'BIOLES', 'FUNGICIDAS'];
const fertilizacionPercepcionFertilizanteRecibido = ['AUMENTA LA PRODUCCION', 'SE MANTIENE IGUAL', 'DISMINUYE LA PRODUCCION'];
const controlMalezaTipoMaleza = ['HOJA ANCHA', 'HOJA ANGOSTA', 'AMBAS'];
const controlMalezaComoControlaMaleza = ['QUIMICO', 'MECANICO/MANUAL', 'NATURAL/ORGANICO'];
const controlMalezaTipoRecomendacion = ['NO', 'TECNICO', 'EMPIRICO'];
const podaTipoPodaAplica = ['FORMACION', 'MANTENIMIENTO', 'FITOSANITARIA', 'REHABILITACION'];
const podaPlagas = ['XILEBORUS', 'CHINCHORRO', 'HORMIGA', 'OTROS'];
const podaEnfermedades = ['PHYTOPHTORA', 'MAL DE MACHETE', 'ROSELLINIA', 'OTROS'];
const mipeTipoControl = ['QUIMICO', 'MECANICO/MANUAL', 'BIOLOGICO'];
const registrosProductorEspecifiqueTipoCuenta = ['BANCO FORMAL', 'COOPERATIVA AHORRO Y CRÉDITO', 'BANCOS COMUNALES', 'OTROS'];
const fermentacionFermentaCacao = ['SIEMPRE', 'A VECES', 'NUNCA'];
const fermentacionRazonNoFermenta = ['LIMITANTE DE CLIMA', 'CARECE DE  INFRAESTRUCTURA', 'DESCONOCIMIENTO DEL TEMA', 'NECESIDAD DE LIQUIDEZ'];
const fermentacionComoHace1 = ['SACOS PLASTICO', 'TIPO LAGARTO', 'SACOS DE YUTE', 'CAJON DE MADERA', 'CAÑA PICADA', 'OTRO'];
const fermentacionComoHace2 = ['CON MEDIDAS', 'SIN MEDIDAS'];
const secadoNivelHumedad = ['BABA', '1 SOL', '2 SOLES', '3 SOLES', '4 SOLES', 'OTROS'];
const secadoComoRealizaSecado = ['ASFALTO', 'TENDAL CAÑA', 'TENDAL DE CEMENTO', 'MARQUESINA', 'SECADORA', 'PLASTICO NEGRO', 'PLASTICO BLANCO', 'OTRO'];
const ventaFrecuencia = ['UNA VEZ', 'DOS VECES', 'TRES O MAS VECES'];
const conservacionAguaManejoDesechosTipoExtraccion = ['GRAVEDAD', 'MECANIZADO'];
const conservacionAguaManejoDesechosInfraestructuraRiego = ['SUB-FOLIAR', 'GOTEO', 'CAÑON'];
const conservacionAguaManejoDesechosImpactoRiego = ['ALTO', 'MEDIO', 'BAJO'];
const conservacionAguaManejoDesechosDisenioRiego = ['FIJO', 'MOVIBLE'];
const conservacionAguaManejoDesechosFiltroEcologicoParaQueUso = ['LIXIVIADO DE CACAO', 'AGUAS RESIDUALES', 'RESIDUOS DE PRODUCTOS'];
const conservacionAguaManejoDesechosCriterioClasificarBasuraDomestica = ['PELIGROSO Y NO PELIGROSO', 'ORGÁNICO E INORGÁNICO', 'BIOLOGICO, PLASTICO Y VIDRIO'];
const conservacionAguaManejoDesechosTratamientoBasura = ['VENDE', 'RECOLECTOR', 'RECOLECTOR Y QUEMA', 'REUTILIZA', 'ENTIERRA', 'QUEMA'];
const conservacionAguaManejoDesechosLugarAlmacenamiento = ['BODEGA', 'AMBIENTE', 'CASA', 'OTRO'];
const conservacionSuelosBiodiversidadPractivasConservacionSuelo = ['NO', 'COBERTURA VEGETAL', 'BARRERAS VIVAS', 'OTRAS'];
const conservacionSuelosBiodiversidadEspeciesArboles = ['LAUREL', 'FERNANSANCHEZ', 'TECA', 'GUAYACAN', 'OTRAS'];
const proteccionAreasRibereniasNombreFuenteHidrica = ['VERTIENTE', 'ESTERO', 'RIO', 'POZO', 'OTRO'];
const proteccionAreasRibereniasTipoFuenteHidrica = ['SUPERFICIAL', 'TEMPORAL', 'ARTIFICIAL', 'SUBTERRANEA', 'PERMANENTE', 'NATURAL'];
const proteccionAreasRibereniasConsideradaFuenteHidrica = ['PRIMARIA', 'SECUNDARIA', 'TERCIARIA'];
const proteccionAreasRibereniasComoBrindaProtFuentHidr = ['ZONA DE AMORTIGUAMIENTO', 'MALEZA', 'ARBOLES', 'ARBUSTOS', 'OTROS'];
const proteccionAreasRibereniasDistanciaRequerida = ['15 MTRS', '8 MTRS', '5 MTRS', 'OTRO'];
const proteccionAreasAltoValorTipoProblemaErosion = ['DESLIZAMIENTO LADERAS', 'HÍDRICA', 'PENDIENTES VULNERABLES', 'EÓLICA'];
const proteccionAreasAltoValorComoQuePracticas = ['OXIGENACIÓN', 'INCREMENTO DE SOMBRAS', 'OTRAS'];
const proteccionAreasAltoValorGradoPresentanPendientes = ['0 A 25', '26 A 50', '51 A 75', '76 A 100'];
const proteccionAreasAltoValorTipoAreaForestal = ['B. PRIMARIOS', 'B. SECUNDARIOS', 'PLANTACIONES', 'REMANENTE'];
const proteccionAreasAltoValorCualesEspeciesPeligroExtincion = ['VEGETAL', 'ANIMAL', 'AMBAS'];
const proteccionAreasAltoValorTipoAltoValor = ['AVC1 - Diversidad de Especie', 'AVC2 - Ecosistemas a Escala paisaje', 'AVC3 - Ecosistemas y Habitats', 'AVC4 - Servicios Ecosistemicos', 'AVC5 - Necesidades de las Comunidades', 'AVC6 - Valores Culturales'];
const diversificacionUsoCultivoDiferenteCacao = ['VENTA', 'CONSUMO', 'AMBOS'];
const diversificacionOtraActividadDentroFincaConIngreso = ['PORCICULTURA', 'PISCICULTURA', 'APICULTURA', 'ELAB. PROD. ORGANICOS', 'VIVERO', 'OTROS', 'NO'];
const diversificacionActividadFueraFincaConIngreso = ['UNI. NEGOCIOS BIOFABRICAS', 'UNID. NEGOCIOS VIVEROS', 'BRIGADAS REHABILITACION'];
const utilidad = ['', 'MUCHA UTILIDAD', 'UTIL', 'POCA UTILIDAD'];
const estado = ['', 'BUENO', 'REGULAR', 'MALO'];
const recetarioTipoSuelo = ['FRANCO','ARENO','ARCILLOSO','FLIMOSO'];
const plazo = ['CP (1-12 meses)','MP (1-3 años)','LP (4-5 años)'];
const topografia = ['PLANO','PENDIENTE'];
const causasPrincipalesMortalidad = ['ESTROFEO','LLENADO DE FUNDAS','PRESENCIA HONGOS','INMADUREZ PLANTAS','OTROS']

export const formularioVerificacion = {
    yesNoAnswer,
    empytYesNoAnswer,
    datosFincaMotivoAreaNueva,
    datosFincaUsoAreaNueva,
    Meses,
    manejoSueloTipoSuelo,
    manejoSueloManeraCorregirPH,
    manejoSueloTipoProductoNatural,
    manejoSueloTipoProductoQuimico,
    fertilizacionTipoProductoFertilizaCacaotales,
    vecesAlAnio,
    fertilizacionTipoFertilizanteRecibido,
    fertilizacionPercepcionFertilizanteRecibido,
    controlMalezaTipoMaleza,
    controlMalezaComoControlaMaleza,
    controlMalezaTipoRecomendacion,
    podaTipoPodaAplica,
    podaEnfermedades,
    podaPlagas,
    mipeTipoControl,
    registrosProductorEspecifiqueTipoCuenta,
    fermentacionFermentaCacao,
    fermentacionRazonNoFermenta,
    fermentacionComoHace1,
    fermentacionComoHace2,
    secadoNivelHumedad,
    secadoComoRealizaSecado,
    ventaFrecuencia,
    conservacionAguaManejoDesechosTipoExtraccion,
    conservacionAguaManejoDesechosInfraestructuraRiego,
    conservacionAguaManejoDesechosImpactoRiego,
    conservacionAguaManejoDesechosDisenioRiego,
    conservacionAguaManejoDesechosFiltroEcologicoParaQueUso,
    conservacionAguaManejoDesechosCriterioClasificarBasuraDomestica,
    conservacionAguaManejoDesechosTratamientoBasura,
    conservacionAguaManejoDesechosLugarAlmacenamiento,
    conservacionSuelosBiodiversidadPractivasConservacionSuelo,
    conservacionSuelosBiodiversidadEspeciesArboles,
    proteccionAreasRibereniasNombreFuenteHidrica,
    proteccionAreasRibereniasTipoFuenteHidrica,
    proteccionAreasRibereniasConsideradaFuenteHidrica,
    proteccionAreasRibereniasComoBrindaProtFuentHidr,
    proteccionAreasRibereniasDistanciaRequerida,
    proteccionAreasAltoValorTipoProblemaErosion,
    proteccionAreasAltoValorComoQuePracticas,
    proteccionAreasAltoValorGradoPresentanPendientes,
    proteccionAreasAltoValorTipoAreaForestal,
    proteccionAreasAltoValorCualesEspeciesPeligroExtincion,
    proteccionAreasAltoValorTipoAltoValor,
    diversificacionUsoCultivoDiferenteCacao,
    diversificacionOtraActividadDentroFincaConIngreso,
    diversificacionActividadFueraFincaConIngreso,
    utilidad,
    estado,
    recetarioTipoSuelo,
    plazo,
    topografia,
    causasPrincipalesMortalidad
}