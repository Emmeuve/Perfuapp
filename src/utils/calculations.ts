// Cálculos para CEC Adultos y Pediátricos
export const calculateSC = (peso: number, talla: number): number => {
  // Fórmula de Dubois: SC = 0.007184 × peso^0.425 × talla^0.725
  return 0.007184 * Math.pow(peso, 0.425) * Math.pow(talla, 0.725);
};

export const calculateVolemiaTotal = (peso: number, volemia: number): number => {
  return peso * volemia;
};

export const calculateFlujo = (sc: number, indiceCardiaco: number): number => {
  return sc * indiceCardiaco;
};

export const calculateHctoSS = (
  hematocritoInicial: number,
  volemiaTotal: number,
  primingUtilizado: number,
  hematocritoDeseado: number
): number => {
  return (hematocritoInicial * volemiaTotal) / (volemiaTotal + primingUtilizado);
};

export const calculateFlujoCerebral = (flujo: number): number => {
  // Aproximadamente 15-20% del flujo total
  return flujo * 0.175;
};

export const calculateFlujoCardiaco = (flujo: number): number => {
  // Aproximadamente 4-5% del flujo total
  return flujo * 0.045;
};

// Cálculos GDP
export const calculateDO2 = (hb: number, gc: number, satO2: number): number => {
  // DO2 = GC × Hb × 1.34 × SatO2 × 10
  return gc * hb * 1.34 * (satO2 / 100) * 10;
};

export const calculateVO2 = (peso: number): number => {
  // VO2 aproximado = 3-4 ml/kg/min
  return peso * 3.5;
};

export const calculateCEO2 = (hb: number, satO2: number): number => {
  // CEO2 = Hb × 1.34 × SatO2
  return hb * 1.34 * (satO2 / 100);
};

export const calculateCvO2 = (ceo2: number, vo2: number, gc: number): number => {
  // CvO2 = CEO2 - (VO2/GC)
  return ceo2 - (vo2 / gc);
};

// Cálculos para corrección de ELP
export const calculatePotassiumCorrection = (
  pesoKg: number,
  potasioActual: number,
  potasioDeseado: number
): number => {
  // Déficit de K+ = (K+ deseado - K+ actual) × peso × 0.4
  return (potasioDeseado - potasioActual) * pesoKg * 0.4;
};

export const calculateBicarbonateCorrection = (
  pesoKg: number,
  bicarbActual: number,
  bicarbDeseado: number
): number => {
  // Déficit de HCO3- = (HCO3- deseado - HCO3- actual) × peso × 0.3
  return (bicarbDeseado - bicarbActual) * pesoKg * 0.3;
};

// Conversiones
export const convertMgToUg = (mg: number): number => mg * 1000;
export const convertUgToMg = (ug: number): number => ug / 1000;
export const convertInchesToFr = (inches: number): number => inches * 3;
export const convertFrToInches = (fr: number): number => fr / 3;
export const convertCmToInches = (cm: number): number => cm / 2.54;
export const convertInchesToCm = (inches: number): number => inches * 2.54;
export const convertMeqToMg = (meq: number, pesoMolecular: number): number => meq * pesoMolecular;
export const convertMgToMeq = (mg: number, pesoMolecular: number): number => mg / pesoMolecular;