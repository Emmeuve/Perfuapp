import React, { useState } from 'react';
import { Heart, Baby, Activity, Syringe, ClipboardList, Pill, ArrowRight, Calculator, Beaker, TrendingUp } from 'lucide-react';
import { CECAdultos } from './components/CECAdultos';
import { CorreccionELP } from './components/CorreccionELP';
import './App.css';

type Section = 'home' | 'cec-adultos' | 'cec-pediatrica' | 'ecmo' | 'correccion-elp' | 'valores-normales' | 'dosis-medicamentos' | 'conversiones' | 'valores-hemodinamicos' | 'soluciones';

export default function App() {
  const [currentSection, setCurrentSection] = useState<Section>('home');

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <header className="text-center py-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="text-red-500 w-12 h-12" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900 gradient-text">PerfuApp</h1>
              <p className="text-lg text-gray-600 mt-2">
                Aplicación profesional para cálculos de perfusión, CEC y ECMO
              </p>
            </div>
          </div>
        </header>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <footer className="text-center py-8 text-gray-500">
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
    blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
    pink: 'from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700',
    green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
    purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
    orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
    red: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
    indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
    cyan: 'from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700',
    teal: 'from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700'
  };

  return (
    <div 
      className={`
        bg-white rounded-xl shadow-soft p-6 cursor-pointer transition-all duration-300 
        card-hover border border-gray-100
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-medium'}
      `}
      onClick={disabled ? undefined : onClick}
    >
      <div className="flex items-start space-x-4">
        <div className={`
          p-3 rounded-lg bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} 
          text-white shadow-sm
        `}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {title}
            {disabled && <span className="text-sm text-gray-400 ml-2">(Próximamente)</span>}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {description}
          </p>
          {!disabled && (
            <div className="flex items-center text-blue-600 font-medium text-sm">
              <span>Acceder</span>
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}