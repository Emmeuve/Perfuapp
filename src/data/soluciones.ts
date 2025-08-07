export const soluciones = {
  cristaloides: {
    'SF 0.9%': {
      composicion: {
        sodio: '154 mEq/L',
        cloro: '154 mEq/L',
        osmolaridad: '308 mOsm/L',
        pH: '5.0-7.0'
      },
      indicaciones: 'Reposición de volumen, dilución de medicamentos'
    },
    'Ringer Lactato': {
      composicion: {
        sodio: '130 mEq/L',
        cloro: '109 mEq/L',
        potasio: '4 mEq/L',
        calcio: '3 mEq/L',
        lactato: '28 mEq/L',
        osmolaridad: '273 mOsm/L',
        pH: '6.0-7.5'
      },
      indicaciones: 'Reposición balanceada de electrolitos'
    },
    'Ringer USP': {
      composicion: {
        sodio: '147 mEq/L',
        cloro: '156 mEq/L',
        potasio: '4 mEq/L',
        calcio: '4.5 mEq/L',
        osmolaridad: '310 mOsm/L',
        pH: '5.0-7.5'
      },
      indicaciones: 'Reposición de electrolitos sin lactato'
    },
    'Plasmalyte': {
      composicion: {
        sodio: '140 mEq/L',
        cloro: '98 mEq/L',
        potasio: '5 mEq/L',
        magnesio: '1.5 mEq/L',
        acetato: '27 mEq/L',
        gluconato: '23 mEq/L',
        osmolaridad: '294 mOsm/L',
        pH: '7.4'
      },
      indicaciones: 'Solución balanceada fisiológica'
    }
  },
  
  cardioplegias: {
    'St. Thomas': {
      composicion: {
        base: 'Ringer Lactato 1000ml',
        kcl: '16 mEq',
        mgso4: '16 mEq',
        nahco3: '10 mEq',
        temperatura: '4°C',
        osmolaridad: '324 mOsm/L'
      },
      dosis: '15-20 ml/kg cada 20-30 min',
      indicaciones: 'Cardioplejía cristaloide estándar'
    },
    'Custodiol (HTK)': {
      composicion: {
        na: '15 mEq/L',
        k: '9 mEq/L',
        mg: '4 mEq/L',
        histidina: '198 mEq/L',
        triptofano: '2 mEq/L',
        alfacetoglutarato: '1 mEq/L',
        manitol: '30 mEq/L'
      },
      dosis: '15-20 ml/kg dosis única',
      indicaciones: 'Cardioplejía de larga duración (hasta 3 horas)'
    },
    'Del Nido': {
      composicion: {
        plasmalyte: '1000ml',
        sangre: '4:1 ratio',
        kcl: '25 mEq/L',
        mgso4: '4 mEq/L',
        nahco3: '13 mEq/L',
        lidocaina: '13 mg/L',
        manitol: '16.3 g/L'
      },
      dosis: '20 ml/kg cada 90 min',
      indicaciones: 'Cardioplejía sanguínea de larga duración'
    }
  }
};

export const comparacionSoluciones = [
  {
    solucion: 'SF 0.9%',
    na: 154,
    cl: 154,
    k: 0,
    ca: 0,
    mg: 0,
    osmolaridad: 308,
    pH: '5.0-7.0'
  },
  {
    solucion: 'Ringer Lactato',
    na: 130,
    cl: 109,
    k: 4,
    ca: 3,
    mg: 0,
    osmolaridad: 273,
    pH: '6.0-7.5'
  },
  {
    solucion: 'Ringer USP',
    na: 147,
    cl: 156,
    k: 4,
    ca: 4.5,
    mg: 0,
    osmolaridad: 310,
    pH: '5.0-7.5'
  },
  {
    solucion: 'Plasmalyte',
    na: 140,
    cl: 98,
    k: 5,
    ca: 0,
    mg: 1.5,
    osmolaridad: 294,
    pH: '7.4'
  }
];