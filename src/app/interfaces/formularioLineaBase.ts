import { Agricultor } from "./agricultor";
import { Formulario } from "./formulario";
import { Tecnico } from "./tecnico";

export interface FormularioLineaBase extends Formulario {
    id: string,
    agricultor: Agricultor,
    tecnico: Tecnico,
    fechaVisita: string,
    secciones: {
        informacionFamilia: {
            preguntas: {
                miembros: {
                    arreglo: any[]
                },
                familiarDiscapacitado: {
                    respuesta: string
                },
                esposaInvolucradaEntrevista: {
                    respuesta: string
                },
                esposoIncluyeEsposaEntrevista: {
                    respuesta: string
                },
                deseoIngresoAdicionalConyuge: {
                    respuesta: string
                },
                deseoTrabajoMedioTiempoProyectosFuturos: {
                    respuesta: string
                    preguntas: {
                        comoCual: {
                            respuesta: string
                        }
                    }
                },
                hijoInteresadoEnProyectosRehabilitacionFinca: {
                    respuesta: string
                }
            }
        },
        practicasAgricolas: {
            preguntas: {
                interesElaborarFertilizanteNaturalOrganico: {
                    respuesta: string
                },
                plagasAfectanCultivo: {
                    respuesta: string[]
                },
                enfermedadesAfectanCultivo: {
                    respuesta: string[]
                },
                productoParaPlagas: {
                    respuesta: string
                },
                productoParaEnfermedades: {
                    respuesta: string
                },
                llevaRegistroPerdidasMazorcasXMonilla: {
                    respuesta: string,
                    preguntas: {
                        cantidadPerdidaMazorcas: {
                            respuesta: string
                        }
                    }
                },
                periodoFertilizacion: {
                    respuesta: string[]
                },
                periodoPoda: {
                    respuesta: string[]
                },
                periodoControlMaleza: {
                    respuesta: string[]
                },
                periodoMIPE: {
                    respuesta: string[]
                },
                periodoCosecha: {
                    respuesta: string[]
                }
            }
        },
        saludSeguridadOcupacional: {
            preguntas: {
                accidentesLaboralesUltimoAnio: {
                    respuesta: string,
                    preguntas: {
                        tipoAccidente: {
                            respuesta: string
                        }
                    }
                },
                periodoIntoxicacionPresente: {
                    respuesta: string,
                    preguntas: {
                        producto: {
                            respuesta: string
                        }
                    }
                },
                centroSaludCercano: {
                    respuesta: string
                }
            }
        },
        cosecha: {
            preguntas: {
                periodoCadaTumba: {
                    respuesta: string
                },
                latasCacaoXTumba: {
                    respuesta: string
                },
                realizaEscurridoSecadoCCN51: {
                    respuesta: string
                },
                diasFermentadoCacao: {
                    respuesta: string
                }
            }
        },
        venta: {
            preguntas: {
                almacenaCacaoDespSecado: {
                    respuesta: string,
                    preguntas: {
                        tiempoAlmacenadoCacao: {
                            respuesta: string
                        }
                    }
                },
                propiedadTransporte: {
                    respuesta: string
                },
                tipoTransporte: {
                    respuesta: string
                },
                registroFinancieroFinca: {
                    respuesta: string
                },
                tipoRegistrosFinancierosFinca: {
                    respuesta: string
                }
            }
        },
        nivelAsociatividad: {
            preguntas: {
                perteneceAsocProgrCertif: {
                    respuesta: string,
                    preguntas: {
                        nombreAsociacion: {
                            respuesta: string
                        },
                        cantidadMiembros: {
                            respuesta: string
                        },
                        recibeBeneficios: {
                            respuesta: string
                        },
                        tiposBeneficios: {
                            respuesta: string[],
                            preguntas: {
                                otroTiposBeneficios: {
                                    respuesta: string
                                }
                            }
                        }
                    }
                },
                ayudaOtraInstitucion: {
                    respuesta: string,
                    preguntas: {
                        nombreOtraInstitucion: {
                            respuesta: string
                        },
                        tipoAyuda: {
                            respuesta: string
                        }
                    }
                }
            }
        },
        condicionesLaborales: {
            preguntas: {
                contrataTrabajadores: {
                    respuesta: string,
                    preguntas: {
                        cantidadTrabajadores: {
                            respuesta: string
                        }
                    }
                },
                areaInicialContrato: {
                    respuesta: string
                },
                tipoContratoTrabajo: {
                    respuesta: string
                },
                contrataMenoresEdad: {
                    respuesta: string,
                    preguntas: {
                        poseePermiso: {
                            respuesta: string
                        }
                    }
                },
                baseContratoAgricola: {
                    respuesta: string
                }
            }
        },
        serviciosBasicos: {
            preguntas: {
                energiaElectrica: {
                    respuesta: string
                },
                tipoAguaConsumoFamiliar: {
                    respuesta: string
                }
            }
        },
        conservacionRecursosManejoDesechos: {
            preguntas: {
                conocimientoManejoDesechos: {
                    respuesta: string
                },
                productoContaminaEcosistema: {
                    respuesta: string,
                    preguntas: {
                        ubicacionDesechosAguasNegras: {
                            respuesta: string[]
                        }
                    }
                },
                tieneArbolesSombrio: {
                    respuesta: string
                },
                cultivaVegetalesHortalizasFrutas: {
                    respuesta: string
                },
                compraProductosMercadoLocales: {
                    respuesta: string,
                    preguntas: {
                        valorPromedioGastado: {
                            respuesta: string
                        }
                    }
                }
            }
        }
    }
}