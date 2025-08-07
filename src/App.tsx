import React, { useState } from 'react';
import { Heart, Calculator, Baby, Zap, FlaskConical, BookOpen, Pill, ArrowRightLeft, Activity, Beaker } from 'lucide-react';
import { CECAdultos } from './components/CECAdultos';
import { CorreccionELP } from './components/CorreccionELP';

type Section = 'home' | 'cec-adultos' | 'cec-pediatrica' | 'ecmo' | 'correccion-elp' | 'valores-normales' | 'dosis-medicamentos' | 'conversiones' | 'valores-hemodinamicos' | 'soluciones';

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('home');

  const sections = [
    {
      id: 'cec-adultos' as Section,
      title: 'CEC Adulto',
      description: 'Cálculos, cánulas, GDP y oxigenadores para CEC adultos',
      icon: Heart,
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600'
    },
    {
      id: 'cec-pediatrica' as Section,
      title: 'CEC Pediátrica',
      description: 'Cálculos pediátricos, Z válvulas y tablas especializadas',
      icon: Baby,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      id: 'ecmo' as Section,
      title: 'ECMO',
      description: 'Cálculos, priming, oxigenadores y ECMO móvil',
      icon: Zap,
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      id: 'correccion-elp' as Section,
      title: 'Corrección de ELP',
      description: 'Fórmulas para corrección de potasio y bicarbonato',
      icon: FlaskConical,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      id: 'valores-normales' as Section,
      title: 'Valores Normales',
      description: 'Tablas de referencia de valores normales de laboratorio',
      icon: BookOpen,
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    },
    {
      id: 'dosis-medicamentos' as Section,
      title: 'Dosis de Medicamentos',
      description: 'Guía de dosificación de medicamentos en perfusión',
      icon: Pill,
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600'
    },
    {
      id: 'conversiones' as Section,
      title: 'Conversiones',
      description: 'Equivalencias y conversiones de unidades médicas',
      icon: ArrowRightLeft,
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600'
    },
    {
      id: 'valores-hemodinamicos' as Section,
      title: 'Valores Hemodinámicos',
      description: 'Parámetros hemodinámicos de referencia',
      icon: Activity,
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600'
    },
    {
      id: 'soluciones' as Section,
      title: 'Soluciones',
      description: 'Composición de soluciones y cardioplejías',
      icon: Beaker,
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-600'
    }
  ];

  const renderHome = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Heart className="w-12 h-12 text-red-500" />
              <h1 className="text-4xl font-bold text-gray-900">PerfuApp</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Aplicación especializada para cálculos de perfusión, CEC y ECMO
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                onClick={() => setCurrentSection(section.id)}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${section.color}`} />
                  <div className="p-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 ${section.bgColor} rounded-lg mb-4`}>
                      <Icon className={`w-6 h-6 ${section.textColor}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                  <div className="px-6 pb-6">
                    <div className={`inline-flex items-center text-sm font-medium ${section.textColor} group-hover:translate-x-1 transition-transform`}>
                      Acceder
                      <ArrowRightLeft className="w-4 h-4 ml-1 rotate-180" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
            <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Desarrollado para Perfusionistas
            </h2>
            <p className="text-gray-600 leading-relaxed">
              PerfuApp es una herramienta integral diseñada específicamente para profesionales 
              de la perfusión, proporcionando cálculos precisos, referencias rápidas y 
              funcionalidades especializadas para CEC y ECMO.
            </p>
          </div>
        </div>
      </main>
    </div>
  );

  const renderSection = () => {
    switch (currentSection) {
      case 'cec-adultos':
        return <CECAdultos onBack={() => setCurrentSection('home')} />;
      case 'correccion-elp':
        return <CorreccionELP onBack={() => setCurrentSection('home')} />;
      default:
        return (
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto text-center">
              <Calculator className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Sección en Desarrollo
              </h2>
              <p className="text-gray-600 mb-6">
                Esta sección está siendo desarrollada y estará disponible próximamente.
              </p>
              <button
                onClick={() => setCurrentSection('home')}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Volver al Inicio
              </button>
            </div>
          </div>
        );
    }
  };

  return currentSection === 'home' ? renderHome() : renderSection();
}

export default App;