import React, { useState } from 'react';
import { Heart, Baby, Activity, Syringe, ClipboardList, Pill, ArrowRight, Calculator, Beaker, TrendingUp, Menu, X } from 'lucide-react';
import { CECAdultos } from './components/CECAdultos';
import { CorreccionELP } from './components/CorreccionELP';
import './App.css';

type Section = 'home' | 'cec-adultos' | 'cec-pediatrica' | 'ecmo' | 'correccion-elp' | 'valores-normales' | 'dosis-medicamentos' | 'conversiones' | 'valores-hemodinamicos' | 'soluciones';

export default function App() {
  const [currentSection, setCurrentSection] = useState<Section>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'cec-adultos':
        return <CECAdultos onBack={() => setCurrentSection('home')} />;
      case 'correccion-elp':
        return <CorreccionELP onBack={() => setCurrentSection('home')} />;
      case 'home':
      default:
        return renderHome();
    }
  };

  const renderHome = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Header */}
        <header className="text-center py-8 sm:py-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <div className="relative">
              <Heart className="text-red-500 w-16 h-16 sm:w-20 sm:h-20 animate-bounce-gentle" />
              <div className="absolute inset-0 bg-red-500 w-16 h-16 sm:w-20 sm:h-20 rounded-full opacity-20 animate-ping"></div>
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 gradient-text mb-2">
                PerfuApp
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
                Aplicación profesional para cálculos de perfusión, CEC y ECMO
              </p>
            </div>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </header>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <SectionCard
            icon={<Activity className="w-8 h-8 text-blue-600" />}
            title="CEC Adultos"
            description="Cálculos, cánulas, GDP y oxigenadores para CEC adultos"
            color="blue"
            onClick={() => setCurrentSection('cec-adultos')}
          />

          <SectionCard
            icon={<Baby className="w-8 h-8 text-pink-600" />}
            title="CEC Pediátrica"
            description="Cálculos pediátricos, Z válvulas y tablas especializadas"
            color="pink"
            onClick={() => setCurrentSection('cec-pediatrica')}
            disabled
          />

          <SectionCard
            icon={<Syringe className="w-8 h-8 text-green-600" />}
            title="ECMO"
            description="Cálculos, priming, oxigenadores y ECMO móvil"
            color="green"
            onClick={() => setCurrentSection('ecmo')}
            disabled
          />

          <SectionCard
            icon={<Calculator className="w-8 h-8 text-purple-600" />}
            title="Corrección de ELP"
            description="Fórmulas para corrección de potasio y bicarbonato"
            color="purple"
            onClick={() => setCurrentSection('correccion-elp')}
          />

          <SectionCard
            icon={<ClipboardList className="w-8 h-8 text-orange-600" />}
            title="Valores Normales"
            description="Tablas de referencia de valores normales de laboratorio"
            color="orange"
            onClick={() => setCurrentSection('valores-normales')}
            disabled
          />

          <SectionCard
            icon={<Pill className="w-8 h-8 text-red-600" />}
            title="Dosis de Medicamentos"
            description="Guía de dosificación de medicamentos en perfusión"
            color="red"
            onClick={() => setCurrentSection('dosis-medicamentos')}
            disabled
          />

          <SectionCard
            icon={<Calculator className="w-8 h-8 text-indigo-600" />}
            title="Conversiones"
            description="Equivalencias de mg a μg, pulgadas a Fr, mEq a mg"
            color="indigo"
            onClick={() => setCurrentSection('conversiones')}
            disabled
          />

          <SectionCard
            icon={<TrendingUp className="w-8 h-8 text-cyan-600" />}
            title="Valores Hemodinámicos"
            description="Valores de referencia hemodinámicos y presiones"
            color="cyan"
            onClick={() => setCurrentSection('valores-hemodinamicos')}
            disabled
          />

          <SectionCard
            icon={<Beaker className="w-8 h-8 text-teal-600" />}
            title="Soluciones"
            description="Composición de cristaloides y recetas de cardioplejías"
            color="teal"
            onClick={() => setCurrentSection('soluciones')}
            disabled
          />
        </div>

        {/* Footer */}
        <footer className="text-center py-8 sm:py-12 text-gray-500 border-t border-gray-200 mt-16">
          <p>© 2025 PerfuApp - Herramienta profesional para perfusionistas</p>
        </footer>
      </div>
    </div>
  );

  return (
    <div className="App">
      {renderCurrentSection()}
    </div>
  );
}

interface SectionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  onClick: () => void;
  disabled?: boolean;
}

function SectionCard({ icon, title, description, color, onClick, disabled = false }: SectionCardProps) {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-blue-200',
    pink: 'from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 shadow-pink-200',
    green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-green-200',
    purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 shadow-purple-200',
    orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-orange-200',
    red: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-red-200',
    indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 shadow-indigo-200',
    cyan: 'from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 shadow-cyan-200',
    teal: 'from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 shadow-teal-200'
  };

  return (
    <div 
      className={`
        bg-white rounded-2xl shadow-soft p-6 sm:p-8 cursor-pointer transition-all duration-500 
        card-hover border border-gray-100 group relative overflow-hidden
        ${disabled ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-strong hover:-translate-y-2'}
      `}
      onClick={disabled ? undefined : onClick}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-50 to-transparent rounded-full transform translate-x-16 -translate-y-16 opacity-50"></div>
      
      <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 relative z-10">
        <div className={`
          p-4 rounded-xl bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} 
          text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3
        `}>
          {icon}
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
            {title}
            {disabled && (
              <span className="block sm:inline text-sm text-gray-400 sm:ml-2 mt-1 sm:mt-0">
                (Próximamente)
              </span>
            )}
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
            {description}
          </p>
          {!disabled && (
            <div className="flex items-center justify-center sm:justify-start text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
              <span>Acceder</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}