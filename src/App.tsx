import React, { useState } from 'react';
import { Heart, Baby, Activity, Calculator, FileText, Pill, ArrowLeftRight, TrendingUp, Beaker, Home } from 'lucide-react';
import './App.css';

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

const sections: Section[] = [
  {
    id: 'cec-adulto',
    title: 'CEC Adulto',
    icon: <Heart className="w-8 h-8" />,
    description: 'Circulación extracorpórea para pacientes adultos',
    color: 'bg-red-500'
  },
  {
    id: 'cec-pediatrica',
    title: 'CEC Pediátrica',
    icon: <Baby className="w-8 h-8" />,
    description: 'Circulación extracorpórea para pacientes pediátricos',
    color: 'bg-pink-500'
  },
  {
    id: 'ecmo',
    title: 'ECMO',
    icon: <Activity className="w-8 h-8" />,
    description: 'Oxigenación por membrana extracorpórea',
    color: 'bg-blue-500'
  },
  {
    id: 'correccion-elp',
    title: 'Corrección de ELP',
    icon: <Calculator className="w-8 h-8" />,
    description: 'Corrección del equilibrio ácido-base',
    color: 'bg-green-500'
  },
  {
    id: 'valores-normales',
    title: 'Valores Normales',
    icon: <FileText className="w-8 h-8" />,
    description: 'Valores de referencia normales',
    color: 'bg-purple-500'
  },
  {
    id: 'dosis-medicamentos',
    title: 'Dosis de Medicamentos',
    icon: <Pill className="w-8 h-8" />,
    description: 'Cálculo de dosis farmacológicas',
    color: 'bg-orange-500'
  },
  {
    id: 'conversiones',
    title: 'Conversiones',
    icon: <ArrowLeftRight className="w-8 h-8" />,
    description: 'Conversiones de unidades médicas',
    color: 'bg-teal-500'
  },
  {
    id: 'valores-hemodinamicos',
    title: 'Valores Hemodinámicos',
    icon: <TrendingUp className="w-8 h-8" />,
    description: 'Parámetros hemodinámicos y cardiovasculares',
    color: 'bg-indigo-500'
  },
  {
    id: 'soluciones',
    title: 'Soluciones',
    icon: <Beaker className="w-8 h-8" />,
    description: 'Preparación de soluciones y mezclas',
    color: 'bg-cyan-500'
  }
];

function App() {
  const [currentSection, setCurrentSection] = useState<string>('home');

  const handleSectionClick = (sectionId: string) => {
    setCurrentSection(sectionId);
  };

  const goHome = () => {
    setCurrentSection('home');
  };

  const renderHome = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center">
            <Heart className="w-10 h-10 text-red-500 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">PerfuApp</h1>
          </div>
          <p className="text-center text-gray-600 mt-2 text-lg">
            Aplicación para cálculos de perfusión, CEC y ECMO
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => (
            <div
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 group"
            >
              <div className="p-8">
                <div className={`${section.color} rounded-full w-16 h-16 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {section.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {section.description}
                </p>
              </div>
              <div className={`h-2 ${section.color} rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2025 PerfuApp. Herramienta profesional para perfusionistas.</p>
            <p className="mt-2 text-sm">Desarrollado para profesionales de la salud especializados en perfusión.</p>
          </div>
        </div>
      </footer>
    </div>
  );

  const renderSection = () => {
    const section = sections.find(s => s.id === currentSection);
    if (!section) return null;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <header className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={goHome}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <Home className="w-6 h-6 mr-2" />
                Inicio
              </button>
              <div className="flex items-center">
                <div className={`${section.color} rounded-full w-10 h-10 flex items-center justify-center text-white mr-4`}>
                  {section.icon}
                </div>
                <h1 className="text-2xl font-bold text-gray-900">{section.title}</h1>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center">
              <div className={`${section.color} rounded-full w-20 h-20 flex items-center justify-center text-white mx-auto mb-6`}>
                {section.icon}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{section.title}</h2>
              <p className="text-gray-600 text-lg mb-8">{section.description}</p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-blue-800 font-medium">
                  Esta sección está en desarrollo. Aquí se implementarán los cálculos específicos para {section.title.toLowerCase()}.
                </p>
                <p className="text-blue-600 mt-2">
                  Los formularios y calculadoras estarán disponibles próximamente.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  };

  return currentSection === 'home' ? renderHome() : renderSection();
}

export default App;