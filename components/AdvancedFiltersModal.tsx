"use client";

import { X, CheckCircle, Filter } from "lucide-react";

interface AdvancedFiltersModalProps {
  showAdvancedFilters: boolean;
  setShowAdvancedFilters: (show: boolean) => void;
  availabilityFilter: string;
  setAvailabilityFilter: (filter: string) => void;
}

export default function AdvancedFiltersModal({
  showAdvancedFilters,
  setShowAdvancedFilters,
  availabilityFilter,
  setAvailabilityFilter
}: AdvancedFiltersModalProps) {
  if (!showAdvancedFilters) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-[9999]"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setShowAdvancedFilters(false);
        }
      }}
    >
      <div className="bg-gray-900/95 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-8 w-full max-w-md shadow-2xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
              <Filter className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Filtres</h2>
              <p className="text-gray-400">Filtrer par disponibilité</p>
            </div>
          </div>
          <button
            onClick={() => setShowAdvancedFilters(false)}
            className="w-10 h-10 bg-gray-700/50 hover:bg-gray-600/50 rounded-xl flex items-center justify-center transition-colors group"
          >
            <X className="w-5 h-5 text-gray-300 group-hover:text-white" />
          </button>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white mb-4">Disponibilité</h3>
          <div className="space-y-3">
            <button
              className={`w-full p-3 rounded-lg text-left transition ${
                availabilityFilter === "all"
                  ? "bg-blue-600/20 border border-blue-500/50 text-blue-400"
                  : "bg-gray-800/50 hover:bg-gray-700/50 text-gray-300"
              }`}
              onClick={() => setAvailabilityFilter("all")}
            >
              Tous les profils
            </button>
            
            <button
              className={`w-full p-3 rounded-lg text-left transition ${
                availabilityFilter === "available"
                  ? "bg-blue-600/20 border border-blue-500/50 text-blue-400"
                  : "bg-gray-800/50 hover:bg-gray-700/50 text-gray-300"
              }`}
              onClick={() => setAvailabilityFilter("available")}
            >
              Disponibles uniquement
            </button>
            
            <button
              className={`w-full p-3 rounded-lg text-left transition ${
                availabilityFilter === "unavailable"
                  ? "bg-blue-600/20 border border-blue-500/50 text-blue-400"
                  : "bg-gray-800/50 hover:bg-gray-700/50 text-gray-300"
              }`}
              onClick={() => setAvailabilityFilter("unavailable")}
            >
              Non disponibles uniquement
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-700/50">
          <button
            onClick={() => setAvailabilityFilter("all")}
            className="px-6 py-3 bg-gray-700/50 hover:bg-gray-600/50 text-white font-medium rounded-xl transition-all duration-300 flex items-center gap-2"
          >
            <X className="w-4 h-4" />
            Réinitialiser
          </button>
          <button
            onClick={() => setShowAdvancedFilters(false)}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            <CheckCircle className="w-5 h-5" />
            Appliquer
          </button>
        </div>
      </div>
    </div>
  );
}