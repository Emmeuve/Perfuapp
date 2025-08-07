import React, { useState } from 'react';
import { Calculator, FileText, Stethoscope, Settings } from 'lucide-react';
import { Layout } from './Layout';
import { PatientData, CECCalculation, GDPData } from '../types';
import { 
  calculateSC, 
  calculateVolemiaTotal, 
  calculateFlujo, 
  calculateHctoSS,
  calculateFlujoCerebral,
  calculateFlujoCardiaco,
  calculateDO2,
  calculateVO2,
  calculateCEO2,
  calculateCvO2
} from '../utils/calculations';
import { getCanulasForFlow } from '../data/canulas';
import { getOxigenadoresByType } from '../data/oxigenadores';

interface CECAdultosProps {
  onBack: () => void;
}

export const CECAdultos: React.FC<CECAdultosProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'calculos' | 'canulas' | 'gdp' | 'oxigenadores'>('calculos');
  const [patientData, setPatientData] = useState<PatientData>({});
  const [cecData, setCecData] = useState<CECCalculation>({
    peso: 0,
    talla: 0,
    hematocritoDeseado: 25,
    primingUtilizado: 1500,
    volemia: 70,
    indiceCardiaco: 2.4
  });
  const [gdpData, setGdpData] = useState<GDPData>({
    hb: 10,
    gc: 5,
    satO2: 98
  });
  const [results, setResults] = useState<any>(null);

  const calculateCEC = () => {
    if (cecData.peso <= 0 || cecData.talla <= 0) {
      alert('Por favor ingrese peso y talla válidos');
      return;
    }

    const sc = calculateSC(cecData.peso, cecData.talla);
    const volemiaTotal = calculateVolemiaTotal(cecData.peso, cecData.volemia);
    const flujo = calculateFlujo(sc, cecData.indiceCardiaco);
    const hctoSS = calculateHctoSS(35, volemiaTotal, cecData.primingUtilizado, cecData.hematocritoDeseado);
    const flujoCerebral = calculateFlujoCerebral(flujo);
    const flujoCardiaco = calculateFlujoCardiaco(flujo);

    setResults({
      sc: sc.toFixed(2),
      volemiaTotal: volemiaTotal.toFixed(0),
      flujo: flujo.toFixed(1),
      hctoSS: hctoSS.toFixed(1),
      flujoCerebral: flujoCerebral.toFixed(1),
      flujoCardiaco: flujoCardiaco.toFixed(1)
    });
  };

  const calculateGDP = () => {
    const do2 = calculateDO2(gdpData.hb, gdpData.gc, gdpData.satO2);
    const vo2 = calculateVO2(cecData.peso || 70);
    const ceo2 = calculateCEO2(gdpData.hb, gdpData.satO2);
    const cvo2 = calculateCvO2(ceo2, vo2, gdpData.gc);

    setGdpData({
      ...gdpData,
      do2: parseFloat(do2.toFixed(1)),
      vo2: parseFloat(vo2.toFixed(1)),
      ceo2: parseFloat(ceo2.toFixed(1)),
      cvo2: parseFloat(cvo2.toFixed(1))
    });
  };

  const renderCalculos = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Calculator className="w-5 h-5 mr-2 text-blue-600" />
          Datos del Paciente (Opcionales)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Nombre"
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={patientData.nombre || ''}
            onChange={(e) => setPatientData({...patientData, nombre: e.target.value})}
          />
          <input
            type="text"
            placeholder="Apellido"
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={patientData.apellido || ''}
            onChange={(e) => setPatientData({...patientData, apellido: e.target.value})}
          />
          <select
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={patientData.sexo || ''}
            onChange={(e) => setPatientData({...patientData, sexo: e.target.value as 'M' | 'F' | ''})}
          >
            <option value="">Seleccionar sexo</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
          </select>
          <input
            type="number"
            placeholder="Edad"
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={patientData.edad || ''}
            onChange={(e) => setPatientData({...patientData, edad: parseInt(e.target.value)})}
          />
          <input
            type="text"
            placeholder="Diagnóstico"
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
            value={patientData.diagnostico || ''}
            onChange={(e) => setPatientData({...patientData, diagnostico: e.target.value})}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Calculator className="w-5 h-5 mr-2 text-blue-600" />
          Cálculos CEC (Obligatorios)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Peso (kg) *</label>
            <input
              type="number"
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={cecData.peso || ''}
              onChange={(e) => setCecData({...cecData, peso: parseFloat(e.target.value) || 0})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Talla (cm) *</label>
            <input
              type="number"
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={cecData.talla || ''}
              onChange={(e) => setCecData({...cecData, talla: parseFloat(e.target.value) || 0})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Hematocrito deseado (%) *</label>
            <input
              type="number"
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={cecData.hematocritoDeseado}
              onChange={(e) => setCecData({...cecData, hematocritoDeseado: parseFloat(e.target.value) || 25})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Priming utilizado (ml) *</label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={cecData.primingUtilizado}
              onChange={(e) => setCecData({...cecData, primingUtilizado: parseInt(e.target.value) || 1500})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Volemia (ml/kg) *</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={cecData.volemia}
              onChange={(e) => setCecData({...cecData, volemia: parseFloat(e.target.value)})}
            >
              <option value={65}>65 ml/kg</option>
              <option value={70}>70 ml/kg</option>
              <option value={75}>75 ml/kg</option>
              <option value={80}>80 ml/kg</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Índice cardíaco (L/min/m²) *</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={cecData.indiceCardiaco}
              onChange={(e) => setCecData({...cecData, indiceCardiaco: parseFloat(e.target.value)})}
            >
              <option value={2.2}>2.2 L/min/m²</option>
              <option value={2.4}>2.4 L/min/m²</option>
              <option value={2.6}>2.6 L/min/m²</option>
              <option value={2.8}>2.8 L/min/m²</option>
            </select>
          </div>
        </div>
        
        <div className="mt-6">
          <button
            onClick={calculateCEC}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Calcular
          </button>
        </div>
      </div>

      {results && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <FileText className="w-5 h-5 mr-2 text-green-600" />
            Resultados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Superficie Corporal</p>
              <p className="text-2xl font-bold text-blue-600">{results.sc} m²</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Volemia Total</p>
              <p className="text-2xl font-bold text-green-600">{results.volemiaTotal} ml</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Flujo</p>
              <p className="text-2xl font-bold text-purple-600">{results.flujo} L/min</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Hcto S/S</p>
              <p className="text-2xl font-bold text-orange-600">{results.hctoSS}%</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Flujo Cerebral</p>
              <p className="text-2xl font-bold text-red-600">{results.flujoCerebral} L/min</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Flujo Cardíaco</p>
              <p className="text-2xl font-bold text-indigo-600">{results.flujoCardiaco} L/min</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderCanulas = () => {
    const flujo = results?.flujo ? parseFloat(results.flujo) : 0;
    const canulasRecomendadas = flujo > 0 ? getCanulasForFlow(flujo) : [];

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Recomendaciones de Cánulas
          </h3>
          {flujo > 0 ? (
            <div>
              <p className="text-sm text-gray-600 mb-4">
                Para flujo de <span className="font-bold text-blue-600">{results.flujo} L/min</span>
              </p>
              
              {['arterial-central', 'arterial-femoral', 'venosa-central', 'venosa-femoral'].map(tipo => {
                const canulasDelTipo = canulasRecomendadas.filter(c => c.tipo === tipo);
                if (canulasDelTipo.length === 0) return null;
                
                return (
                  <div key={tipo} className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-2 capitalize">
                      {tipo.replace('-', ' ')}
                    </h4>
                    <div className="space-y-2">
                      {canulasDelTipo.map(canula => (
                        <div key={canula.id} className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium text-gray-900">{canula.descripcion}</p>
                              <p className="text-sm text-gray-600">
                                Flujo: {canula.flujoMinimo} - {canula.flujoMaximo} L/min
                              </p>
                            </div>
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                              {canula.marca}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-gray-500">Primero realice los cálculos para obtener recomendaciones de cánulas</p>
          )}
        </div>
      </div>
    );
  };

  const renderGDP = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Stethoscope className="w-5 h-5 mr-2 text-red-600" />
          Cálculos GDP
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Hemoglobina (g/dL)</label>
            <input
              type="number"
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              value={gdpData.hb}
              onChange={(e) => setGdpData({...gdpData, hb: parseFloat(e.target.value) || 10})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Gasto Cardíaco (L/min)</label>
            <input
              type="number"
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              value={gdpData.gc}
              onChange={(e) => setGdpData({...gdpData, gc: parseFloat(e.target.value) || 5})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Saturación O2 (%)</label>
            <input
              type="number"
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              value={gdpData.satO2}
              onChange={(e) => setGdpData({...gdpData, satO2: parseFloat(e.target.value) || 98})}
            />
          </div>
        </div>
        
        <button
          onClick={calculateGDP}
          className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors mb-6"
        >
          Calcular GDP
        </button>

        {gdpData.do2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">DO2</p>
              <p className="text-2xl font-bold text-red-600">{gdpData.do2} ml/min</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">VO2</p>
              <p className="text-2xl font-bold text-blue-600">{gdpData.vo2} ml/min</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">CEO2</p>
              <p className="text-2xl font-bold text-green-600">{gdpData.ceo2} ml/dL</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">CvO2</p>
              <p className="text-2xl font-bold text-purple-600">{gdpData.cvo2} ml/dL</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderOxigenadores = () => {
    const oxigenadores = getOxigenadoresByType('adulto');
    
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Settings className="w-5 h-5 mr-2 text-blue-600" />
            Oxigenadores para CEC Adultos
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Marca/Modelo
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Flujo Max (L/min)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Flujo Min (L/min)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priming (ml)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Superficie (m²)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {oxigenadores.map((ox, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{ox.marca}</div>
                        <div className="text-sm text-gray-500">{ox.modelo}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {ox.maxFlowRate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {ox.minFlowRate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {ox.priming}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {ox.superficie}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const tabs = [
    { id: 'calculos', label: 'Cálculos', icon: Calculator },
    { id: 'canulas', label: 'Cánulas', icon: Settings },
    { id: 'gdp', label: 'GDP', icon: Stethoscope },
    { id: 'oxigenadores', label: 'Oxigenadores', icon: Settings }
  ];

  return (
    <Layout title="CEC Adultos" onBack={onBack}>
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {activeTab === 'calculos' && renderCalculos()}
      {activeTab === 'canulas' && renderCanulas()}
      {activeTab === 'gdp' && renderGDP()}
      {activeTab === 'oxigenadores' && renderOxigenadores()}
    </Layout>
  );
};