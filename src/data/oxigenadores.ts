import { Oxigenador } from '../types';

export const oxigenadores: Oxigenador[] = [
  // Oxigenadores para CEC Adultos
  {
    marca: 'MEDTRONIC',
    modelo: 'Affinity Fusion',
    tipo: 'adulto',
    maxFlowRate: 7.0,
    minFlowRate: 1.0,
    priming: 265,
    volumenCebado: 265,
    superficie: 2.5
  },
  {
    marca: 'LIVANOVA',
    modelo: 'Inspire 8F',
    tipo: 'adulto',
    maxFlowRate: 8.0,
    minFlowRate: 1.5,
    priming: 280,
    volumenCebado: 280,
    superficie: 2.8
  },
  {
    marca: 'TERUMO',
    modelo: 'CAPIOX FX25',
    tipo: 'adulto',
    maxFlowRate: 7.5,
    minFlowRate: 1.2,
    priming: 250,
    volumenCebado: 250,
    superficie: 2.5
  },
  
  // Oxigenadores Pediátricos
  {
    marca: 'MEDTRONIC',
    modelo: 'Affinity Pixie',
    tipo: 'pediatrico',
    maxFlowRate: 1.5,
    minFlowRate: 0.2,
    priming: 65,
    volumenCebado: 65,
    superficie: 0.8
  },
  {
    marca: 'LIVANOVA',
    modelo: 'Inspire 6F Pediatric',
    tipo: 'pediatrico',
    maxFlowRate: 2.0,
    minFlowRate: 0.3,
    priming: 75,
    volumenCebado: 75,
    superficie: 0.9
  },
  
  // Oxigenadores ECMO
  {
    marca: 'MEDTRONIC',
    modelo: 'Affinity Fusion ECMO',
    tipo: 'ecmo',
    maxFlowRate: 6.0,
    minFlowRate: 0.5,
    priming: 240,
    volumenCebado: 240,
    superficie: 2.2
  },
  {
    marca: 'MAQUET',
    modelo: 'Quadrox-i Adult ECMO',
    tipo: 'ecmo',
    maxFlowRate: 7.0,
    minFlowRate: 0.8,
    priming: 260,
    volumenCebado: 260,
    superficie: 2.4
  },
  {
    marca: 'XENIOS',
    modelo: 'Novalung iLA Membrane',
    tipo: 'ecmo',
    maxFlowRate: 4.5,
    minFlowRate: 0.3,
    priming: 165,
    volumenCebado: 165,
    superficie: 1.8
  }
];

export const getOxigenadoresByType = (tipo: 'adulto' | 'pediatrico' | 'ecmo'): Oxigenador[] => {
  return oxigenadores.filter(ox => ox.tipo === tipo);
};