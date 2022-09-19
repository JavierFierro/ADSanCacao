import { isExportable } from "./formulario";

export interface Agricultor extends isExportable {
  id: string,
  secciones: {
    datosPersonales: {
      preguntas: {
        cedula: {
          respuesta: string
        },
        nombre: {
          respuesta: string
        },
        estado: {
          respuesta: string
        },
        fechaNacimiento: {
          respuesta: Date
        },
        genero: {
          respuesta: string
        },
        estadoCivil: {
          respuesta: string
        },
        nivelEducacion: {
          respuesta: string
        },
        celulares: {
          respuesta: string[]
        },
        telefono: {
          respuesta: string
        },
        isDiscapacitado: {
          respuesta: string
        },
        tecnico: {
          respuesta: string
        },
        fechaVisita: {
          respuesta: Date
        },
        viaPrincipalComunicacion: {
          respuesta: string
        },
        comentariosComunicacion: {
          respuesta: string
        }
      }
    },
    informacionFinca: {
      preguntas: {
          provincia: {
              respuesta: string
          },
          canton: {
              respuesta: string
          },
          parroquia: {
              respuesta: string
          },
          recinto: {
              respuesta: string
          },
          nombreFinca: {
              respuesta: string
          },
          descripcionLlegarFinca: {
              respuesta: string
          },
          casaProductorDentroFinca: {
            respuesta: string,
            preguntas: {
              descripcionLlegarCasa: {
                respuesta: string
              }
            }
          }
      }
    },
    hectareaje: {
      preguntas: {
        dimensionTotalFinca: {
          respuesta: string
        },
        terreno: {
          respuesta: string
        },
        cultivoCacao: {
          respuesta: string,
          preguntas: {
            asociadoConTiene: {
              respuesta: string[],
              preguntas: {
                otrosEspecifique: {
                  respuesta: string
                }
              }
            }
          }
        },
        areaNetaCacao: {
          respuesta: string
        },
        distanciaPlantas: {
          respuesta: string
        },
        plantasXHectareas: {
          respuesta: string
        },
        tipoUbicacionZona: {
          respuesta: string
        },
        zonaProtegida: {
          respuesta: string,
          preguntas: {
            otraZona: {
              respuesta: string
            }
          }
        }
      }
    },
    cacaoCNN: {
      preguntas: {
        areaTotalCNN: {
          respuesta: string
        },
        areaProduccion: {
          respuesta: string
        },
        edadCacaoProductivo: {
          respuesta: string
        },
        areaRecienSembrada: {
          respuesta: string
        },
        edadCacaoReciente: {
          respuesta: string
        },
        produccionAnioAnteriorCacaoCNN: {
          respuesta: string
        },
        precioPromedio: {
          respuesta: string
        },
        tieneCacaoImproductivo: {
          respuesta: string,
          preguntas: {
            cuantasHectareasImproductivo: {
              respuesta: string
            }
          }
        }
      }
    },
    cacaoNacional: {
      preguntas: {
        areaTotalNacional: {
          respuesta: string
        },
        areaTotalNacionalViejo: {
          respuesta: string
        },
        edadCacaoViejo: {
          respuesta: string
        },
        brotesBasales: {
          respuesta: string
        },
        arbolesElite: {
          respuesta: string
        },
        areaTotalViejoInjertado: {
          respuesta: string
        },
        viejosInjertados: {
          arreglo: any[]
        },
        areaTotalNuevosClones: {
          respuesta: string
        },
        nuevosClones: {
          arreglo: any[]
        },
        produccionAnioAnteriorCacaoNacional: {
          respuesta: string
        },
        precioPromedioXCacao: {
          respuesta: string
        }
      }
    },
    cacaoNacionalNuevosClones: {
      preguntas: {
        usoAnteriorAreaNueva: {
          respuesta: string,
          preguntas: {
            otroUsoAnteriorAreaNueva: {
              respuesta: string
            }
          }
        },
        tipoVariedad: {
          respuesta: string[],
          preguntas: {
            especifiqueOtros: {
              respuesta: string
            }
          }
        },
        variedadesSembradasCalificacion: {
          respuesta: string
        },
        plantulasCondicionesEdafoclimaticas: {
          respuesta: string
        },
        plantulasRendimiento: {
          respuesta: string
        },
        plantulasVigorPlanta: {
          respuesta: string
        },
        plantulasResistenciaEnfermedades: {
          respuesta: string
        }
      }
    },
    origenPlantas: {
      preguntas: {
        nombreVivero: {
          respuesta: string
        },
        ubicacionVivero: {
          respuesta: string
        },
        encargadoPropagacion: {
          respuesta: string,
          preguntas: {
              otroEncargadoPropagacion: {
                  respuesta: string
              }
          }
        },
        tipoConocimiento: {
          respuesta: string
        },
        entidadDonacion: {
          respuesta: string
        },
        cantidadPlantasRecibidas: {
          respuesta: string
        },
        queCultivoPoda: {
          respuesta: string
        }
      }
    },
    priorizacionParticipacionProyectos:{
      preguntas: {
        incrementarProductividad: {
          respuesta: string,
          preguntas: {
            recibirPlantasCacaoNacional: {
              respuesta: string,
              preguntas: {
                tieneAreaLibreParaSembrar: {
                  respuesta: string,
                  preguntas: {
                    areaLibre: {
                      respuesta: string
                    }
                  }
                },
                necesitaRehaReinjerto: {
                  respuesta: string,
                  preguntas: {
                    cantidad: {
                      respuesta: string
                    }
                  }
                }
              }
            },
            aprenderElabProductosNaturales: {
              respuesta: string
            }
          }
        },
        mejorarCalidadCacao: {
          respuesta: string,
          preguntas: {
            bandejasCajonesFermentacion: {
              respuesta: string,
              preguntas: {
                dispuestoHacerloPropiaCuenta: {
                  respuesta: string
                }
              }
            },
            tendalesElevadosCania: {
              respuesta: string
            },
            secadorasComunitarias: {
              respuesta: string,
              preguntas: {
                contarAgrupacionParaProyecto: {
                  respuesta: string
                }
              }
            }
          }
        },
        diversificacionIngresos: {
          respuesta: string,
          preguntas: {
            huertosOrganicos: {
              respuesta: string
            },
            desarrolloViveros: {
              respuesta: string
            },
            desarrolloVentaFertilizantes: {
              respuesta: string
            },
            rehabilitacionFinca: {
              respuesta: string
            },
            brigadaPodadores: {
              respuesta: string,
              preguntas: {
                contarExperienciaPoda: {
                  respuesta: string,
                  preguntas: {
                    aniosExperiencia: {
                      respuesta: string
                    }
                  }
                }
              }
            }
          }
        },
      }
    },
    croquis: {
      preguntas: {
        coordenadasX: {
          respuesta: string
        },
        coordenadasY: {
          respuesta: string
        },
        altura: {
          respuesta: string
        },
        productor: {
          respuesta: string
        },
        predio: {
          respuesta: string
        },
        croquisPath: {
          respuesta: string
        }
      }
    }
  }
}