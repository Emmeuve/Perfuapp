import React from 'react';
import { ArrowLeft, Heart, Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  onBack: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, title, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      <header className="bg-white/80 backdrop-blur-md shadow-soft border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <button
                onClick={onBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:bg-indigo-50 px-3 py-2 rounded-lg group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline font-medium">Volver</span>
              </button>
              <div className="h-8 w-px bg-gray-300" />
              <div className="flex items-center space-x-3">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 animate-pulse" />
                <div>
                  <h1 className="text-lg sm:text-2xl font-bold text-gray-900 gradient-text">
                    {title}
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">
                    PerfuApp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {children}
      </main>
    </div>
  );
};