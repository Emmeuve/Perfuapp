// Tipos para los datos de pacientes
export interface PatientData {
  nombre?: string;
  apellido?: string;
  sexo?: 'M' | 'F' | '';
  edad?: number;
  diagnostico?: string;
  antecedentesMorbidos?: string;
  alergias?: string;
  cirugia?: string;
  otrosDatos?: string;
}

// Tipos para cálculos CEC
export interface CECCalculation {
  peso: number;
  talla: number;
  hematocritoDeseado: number;
  primingUtilizado: number;
  volemia: number;
  indiceCardiaco: number;
  sc?: number;
  volemiaTotal?: number;
  flujo?: number;
  hctoSS?: number;
  flujoCerebral?: number;
  flujoCardiaco?: number;
}

// Tipos para cánulas
export interface Canula {
  id: string;
  marca: string;
  tipo: 'arterial-central' | 'arterial-femoral' | 'venosa-central' | 'venosa-femoral';
  calibre: string;
  flujoMinimo: number;
  flujoMaximo: number;
  descripcion: string;
}

// Tipos para GDP
export interface GDPData {
  hb: number;
  gc: number;
  satO2: number;
  do2?: number;
  vo2?: number;
  ceo2?: number;
  cvo2?: number;
}

// Tipos para ECMO Móvil
export interface ECMOMovilData {
  nombre: string;
  apellido: string;
  diagnostico: string;
  hospitalProcedencia: string;
  hospitalReceptor: string;
  tiempos: {
    salidaHospital?: Date;
    llegadaAeropuerto?: Date;
    llegadaHospitalProcedencia?: Date;
    entradaECMO?: Date;
    salidaHospitalProcedencia?: Date;
    llegadaAeropuertoDestino?: Date;
    llegadaHospitalDestino?: Date;
  };
  insumos: ChecklistItem[];
  canulacion?: string;
  canulasUtilizadas?: string;
  observaciones?: string;
}

export interface ChecklistItem {
  id: string;
  nombre: string;
  chequeado: boolean;
  categoria: string;
}

// Tipos para oxigenadores
export interface Oxigenador {
  marca: string;
  modelo: string;
  tipo: 'adulto' | 'pediatrico' | 'ecmo';
  maxFlowRate: number;
  minFlowRate: number;
  priming: number;
  volumenCebado: number;
  superficie: number;
}