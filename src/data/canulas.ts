import { Canula } from '../types';

export const canulas: Canula[] = [
  // Canulación arterial central
  {
    id: 'eopa-22fr',
    marca: 'MEDTRONIC',
    tipo: 'arterial-central',
    calibre: '22Fr',
    flujoMinimo: 3.0,
    flujoMaximo: 6.5,
    descripcion: 'EOPA 22Fr - Canulación arterial central'
  },
  {
    id: 'ezglide-24fr',
    marca: 'EDWARDS',
    tipo: 'arterial-central',
    calibre: '24Fr',
    flujoMinimo: 3.5,
    flujoMaximo: 7.0,
    descripcion: 'Ezglide 24Fr - Canulación arterial central'
  },
  {
    id: 'punta-recta-22fr',
    marca: 'MEDTRONIC',
    tipo: 'arterial-central',
    calibre: '22Fr',
    flujoMinimo: 3.0,
    flujoMaximo: 6.5,
    descripcion: 'Punta recta 22Fr - Canulación arterial central'
  },
  
  // Canulación arterial femoral
  {
    id: 'arterial-femoral-19fr-medtronic',
    marca: 'MEDTRONIC',
    tipo: 'arterial-femoral',
    calibre: '19Fr',
    flujoMinimo: 2.5,
    flujoMaximo: 5.5,
    descripcion: 'Canula arterial femoral 19Fr'
  },
  {
    id: 'arterial-femoral-18fr-maquet',
    marca: 'MAQUET',
    tipo: 'arterial-femoral',
    calibre: '18Fr',
    flujoMinimo: 2.0,
    flujoMaximo: 5.0,
    descripcion: 'Canula arterial femoral 18Fr'
  },
  
  // Canulación venosa central
  {
    id: 'vacio-simple-28fr',
    marca: 'MEDTRONIC',
    tipo: 'venosa-central',
    calibre: '28Fr',
    flujoMinimo: 3.0,
    flujoMaximo: 6.0,
    descripcion: 'Canula de vacío simple 28Fr'
  },
  {
    id: 'vacio-doble-29fr',
    marca: 'MEDTRONIC',
    tipo: 'venosa-central',
    calibre: '29Fr',
    flujoMinimo: 3.5,
    flujoMaximo: 6.5,
    descripcion: 'Cánula de vacio doble o triple estadio 29Fr'
  },
  {
    id: 'maleable-24-26fr-medtronic',
    marca: 'MEDTRONIC',
    tipo: 'venosa-central',
    calibre: '24/26Fr',
    flujoMinimo: 2.5,
    flujoMaximo: 5.5,
    descripcion: 'Canula maleable y/o preformada 24/26Fr (Bicava)'
  },
  {
    id: 'maleable-24-28fr-livanova',
    marca: 'LIVANOVA',
    tipo: 'venosa-central',
    calibre: '24/28Fr',
    flujoMinimo: 2.5,
    flujoMaximo: 6.0,
    descripcion: 'Canula maleable y/o preformada 24/28Fr (Bicava)'
  },
  
  // Canulación venosa femoral
  {
    id: 'venosa-femoral-27fr-medtronic',
    marca: 'MEDTRONIC',
    tipo: 'venosa-femoral',
    calibre: '27Fr',
    flujoMinimo: 3.0,
    flujoMaximo: 6.0,
    descripcion: 'Canula venosa femoral 27Fr'
  },
  {
    id: 'venosa-femoral-26fr-maquet',
    marca: 'MAQUET',
    tipo: 'venosa-femoral',
    calibre: '26Fr',
    flujoMinimo: 2.8,
    flujoMaximo: 5.8,
    descripcion: 'Canula venosa femoral 26Fr'
  }
];

export const getCanulasForFlow = (flujo: number, tipo?: string): Canula[] => {
  return canulas.filter(canula => {
    const flowMatch = flujo >= canula.flujoMinimo && flujo <= canula.flujoMaximo;
    const typeMatch = tipo ? canula.tipo === tipo : true;
    return flowMatch && typeMatch;
  });
};