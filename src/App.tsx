import React from "react";
import {
  Heart,
  Baby,
  Activity,
  Syringe,
  ClipboardList,
  Pill,
  ArrowRight,
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      {/* Título */}
      <header className="flex items-center gap-2">
        <Heart className="text-red-500" size={32} />
        <div>
          <h1 className="text-3xl font-bold">PerfuApp</h1>
          <p className="text-gray-700">
            Aplicación especializada para cálculos de perfusión, CEC y ECMO
          </p>
        </div>
      </header>

      {/* CEC Adulto */}
      <Section
        icon={<Activity size={24} className="text-blue-500" />}
        title="CEC Adulto"
        description="Cálculos, cánulas, GDP y oxigenadores para CEC adultos"
      />

      {/* CEC Pediátrica */}
      <Section
        icon={<Baby size={24} className="text-pink-500" />}
        title="CEC Pediátrica"
        description="Cálculos pediátricos, Z válvulas y tablas especializadas"
      />

      {/* ECMO */}
      <Section
        icon={<Syringe size={24} className="text-green-500" />}
        title="ECMO"
        description="Cálculos, priming, oxigenadores y ECMO móvil"
      />

      {/* Corrección de ELP */}
      <Section
        icon={<ClipboardList size={24} className="text-purple-500" />}
        title="Corrección de ELP"
        description="Fórmulas para corrección de potasio y bicarbonato"
      />

      {/* Valores Normales */}
      <Section
        icon={<ClipboardList size={24} className="text-orange-500" />}
        title="Valores Normales"
        description="Tablas de referencia de valores normales de laboratorio"
      />

      {/* Dosis de Medicamentos */}
      <Section
        icon={<Pill size={24} className="text-red-500" />}
        title="Dosis de Medicamentos"
        description="Guía de dosificación de medicamentos en perfusión"
      />
    </div>
  );
}

type SectionProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function Section({ icon, title, description }: SectionProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="flex items-center gap-2 text-xl font-semibold">
        {icon}
        {title}
      </h2>
      <p className="text-gray-600">{description}</p>
      <button className="mt-2 flex items-center gap-1 text-blue-600 hover:underline">
        Acceder <ArrowRight size={16} />
      </button>
    </div>
  );
}
import './index.css'; // Asegúrate de que este archivo exista y tenga el contenido necesario