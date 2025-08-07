import React, { useState } from 'react';
import { Calculator, Info } from 'lucide-react';
import { Layout } from './Layout';
import { calculatePotassiumCorrection, calculateBicarbonateCorrection, convertMeqToMg, convertMgToMeq } from '../utils/calculations';

interface CorreccionELPProps {
  onBack: () => void;
}

export const CorreccionELP: React.FC<CorreccionELPProps> = ({ onBack }) => {
  const [potassiumData, setPotassiumData] = useState({
    peso: 70,
    actual: 3.0,
    deseado: 4.0,
    deficit: 0,
    mg: 0
  });

  const [bicarbonateData, setBicarbonateData] = useState({
    peso: 70,
    actual: 18,
    deseado: 24,
    deficit: 0,
    mg: 0
  });

  const calculatePotassium = () => {
    const deficit = calculatePotassiumCorrection(potassiumData.peso, potassiumData.actual, potassiumData.deseado);
    const mg = convertMeqToMg(deficit, 39.1); // Peso molecular del K+
    
    setPotassiumData({
      ...potassiumData,
      deficit: parseFloat(deficit.toFixed(1)),
      mg: parseFloat(mg.toFixed(0))
    });
  };

  const calculateBicarbonate = () => {
    const deficit = calculateBicarbonateCorrection(bicarbonateData.peso, bicarbonateData.actual, bicarbonateData.deseado);
    const mg = convertMeqToMg(deficit, 84); // Peso molecular del HCO3-
    
    setBicarbonateData({
      ...bicarbonateData,
      deficit: parseFloat(deficit.toFixed(1)),
      mg: parseFloat(mg.toFixed(0))
    });
  };

  return (
    <Layout title="Corrección de ELP" onBack={onBack}>
      <div className="space-y-6">
        {/* Corrección de Potasio */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Calculator className="w-5 h-5 mr-2 text-blue-600" />
            Corrección de Potasio
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Peso (kg)</label>
              <input
                type="number"
                step="0.1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={potassiumData.peso}
                onChange={(e) => setPotassiumData({...potassiumData, peso: parseFloat(e.target.value) || 70})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">K+ Actual (mEq/L)</label>
              <input
                type="number"
                step="0.1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={potassiumData.actual}
                onChange={(e) => setPotassiumData({...potassiumData, actual: parseFloat(e.target.value) || 3.0})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">K+ Deseado (mEq/L)</label>
              <input
                type="number"
                step="0.1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={potassiumData.deseado}
                onChange={(e) => setPotassiumData({...potassiumData, deseado: parseFloat(e.target.value) || 4.0})}
              />
            </div>
          </div>

          <button
            onClick={calculatePotassium}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors mb-4"
          >
            Calcular Déficit de K+
          </button>

          {potassiumData.deficit > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Déficit de K+</p>
                <p className="text-2xl font-bold text-blue-600">{potassiumData.deficit} mEq</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Equivalente en mg</p>
                <p className="text-2xl font-bold text-green-600">{potassiumData.mg} mg</p>
              </div>
            </div>
          )}

          <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
            <div className="flex items-start">
              <Info className="w-5 h-5 text-yellow-600 mt-0.5 mr-2" />
              <div className="text-sm text-yellow-800">
                <p className="font-medium">Fórmula utilizada:</p>
                <p>Déficit K+ = (K+ deseado - K+ actual) × peso × 0.4</p>
                <p className="mt-1">Conversión: 1 mEq K+ = 39.1 mg</p>
              </div>
            </div>
          </div>
        </div>

        {/* Corrección de Bicarbonato */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Calculator className="w-5 h-5 mr-2 text-green-600" />
            Corrección de Bicarbonato
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Peso (kg)</label>
              <input
                type="number"
                step="0.1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                value={bicarbonateData.peso}
                onChange={(e) => setBicarbonateData({...bicarbonateData, peso: parseFloat(e.target.value) || 70})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">HCO3- Actual (mEq/L)</label>
              <input
                type="number"
                step="0.1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                value={bicarbonateData.actual}
                onChange={(e) => setBicarbonateData({...bicarbonateData, actual: parseFloat(e.target.value) || 18})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">HCO3- Deseado (mEq/L)</label>
              <input
                type="number"
                step="0.1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                value={bicarbonateData.deseado}
                onChange={(e) => setBicarbonateData({...bicarbonateData, deseado: parseFloat(e.target.value) || 24})}
              />
            </div>
          </div>

          <button
            onClick={calculateBicarbonate}
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors mb-4"
          >
            Calcular Déficit de HCO3-
          </button>

          {bicarbonateData.deficit > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Déficit de HCO3-</p>
                <p className="text-2xl font-bold text-green-600">{bicarbonateData.deficit} mEq</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Equivalente en mg</p>
                <p className="text-2xl font-bold text-blue-600">{bicarbonateData.mg} mg</p>
              </div>
            </div>
          )}

          <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
            <div className="flex items-start">
              <Info className="w-5 h-5 text-yellow-600 mt-0.5 mr-2" />
              <div className="text-sm text-yellow-800">
                <p className="font-medium">Fórmula utilizada:</p>
                <p>Déficit HCO3- = (HCO3- deseado - HCO3- actual) × peso × 0.3</p>
                <p className="mt-1">Conversión: 1 mEq HCO3- = 84 mg</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabla de Equivalencias */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Tabla de Equivalencias
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Potasio (K+)</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>1 mEq K+</span>
                  <span className="font-medium">39.1 mg</span>
                </div>
                <div className="flex justify-between">
                  <span>1 g KCl</span>
                  <span className="font-medium">13.4 mEq K+</span>
                </div>
                <div className="flex justify-between">
                  <span>1 ampolla KCl (10ml)</span>
                  <span className="font-medium">20 mEq K+</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Bicarbonato (HCO3-)</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>1 mEq HCO3-</span>
                  <span className="font-medium">84 mg</span>
                </div>
                <div className="flex justify-between">
                  <span>1 g NaHCO3</span>
                  <span className="font-medium">11.9 mEq HCO3-</span>
                </div>
                <div className="flex justify-between">
                  <span>1 ampolla NaHCO3 (20ml)</span>
                  <span className="font-medium">20 mEq HCO3-</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};