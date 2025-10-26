"use client";

import { useState, useEffect } from "react";
import { X, ArrowLeft, ArrowRight, Save, Plus, Trash2 } from "lucide-react";
import { ProfileData } from "@/types/profile";

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData | null;
  onSave: (profileData: Partial<ProfileData>) => void;
}

export default function EditProfileModal({
  isOpen,
  onClose,
  profile,
  onSave
}: EditProfileModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<ProfileData>>({
    fullName: "",
    aboutMe: "",
    role: "",
    education: [],
    experience: [],
    portfolio: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (profile) {
      setFormData(profile);
      setCurrentStep(1);
    }
  }, [profile]);

  const handleInputChange = (field: string, value: any, index?: number) => {
    if (index !== undefined) {
      setFormData(prev => ({
        ...prev,
        [field]: prev[field]?.map((item: any, i: number) => 
          i === index ? { ...item, ...value } : item
        )
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const addArrayItem = (field: 'education' | 'experience' | 'portfolio') => {
    setFormData(prev => {
      const currentItems = prev[field] || [];
      let newItem: any;
      
      switch (field) {
        case 'education':
          newItem = { school: "", degree: "", year: new Date().getFullYear() };
          break;
        case 'experience':
          newItem = { title: "", company: "", startYear: new Date().getFullYear(), endYear: null, description: "" };
          break;
        case 'portfolio':
          newItem = { title: "", client: "", imageUrl: "", techStack: "" };
          break;
      }
      
      return {
        ...prev,
        [field]: [...currentItems, newItem]
      };
    });
  };

  const removeArrayItem = (field: 'education' | 'experience' | 'portfolio', index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field]?.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await onSave(formData);
    setIsSubmitting(false);
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  if (!isOpen || !profile) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 border border-gray-700 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Modifier le Profil</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-lg transition"
            >
              <X size={20} />
            </button>
          </div>
          <div className="mt-4 flex items-center">
            <div className="flex-1 bg-gray-700 h-1 rounded-full">
              <div
                className="bg-blue-600 h-1 rounded-full transition-all"
                style={{ width: `${(currentStep / 5) * 100}%` }}
              ></div>
            </div>
            <span className="ml-4 text-sm text-gray-400">
              Étape {currentStep} sur 5
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* Étape 1: Informations de base */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nom complet *</label>
                <input
                  type="text"
                  value={formData.fullName || ""}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Rôle *</label>
                <input
                  type="text"
                  value={formData.role || ""}
                  onChange={(e) => handleInputChange('role', e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">À propos de moi *</label>
                <textarea
                  value={formData.aboutMe || ""}
                  onChange={(e) => handleInputChange('aboutMe', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          )}

          {/* Étape 2: Éducation */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Formation</h3>
              {formData.education?.map((edu, index) => (
                <div key={index} className="border border-gray-700 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-medium">Formation #{index + 1}</h4>
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem('education', index)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Établissement</label>
                      <input
                        type="text"
                        value={edu.school}
                        onChange={(e) => handleInputChange('education', { school: e.target.value }, index)}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Diplôme</label>
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) => handleInputChange('education', { degree: e.target.value }, index)}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Année</label>
                      <input
                        type="number"
                        value={edu.year}
                        onChange={(e) => handleInputChange('education', { year: parseInt(e.target.value) }, index)}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayItem('education')}
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
              >
                <Plus size={16} />
                Ajouter une formation
              </button>
            </div>
          )}

          {/* Étape 3: Expérience professionnelle */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Expérience professionnelle</h3>
              {formData.experience?.map((exp, index) => (
                <div key={index} className="border border-gray-700 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-medium">Expérience #{index + 1}</h4>
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem('experience', index)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Poste</label>
                      <input
                        type="text"
                        value={exp.title}
                        onChange={(e) => handleInputChange('experience', { title: e.target.value }, index)}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Entreprise</label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => handleInputChange('experience', { company: e.target.value }, index)}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Année de début</label>
                      <input
                        type="number"
                        value={exp.startYear}
                        onChange={(e) => handleInputChange('experience', { startYear: parseInt(e.target.value) }, index)}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Année de fin (optionnel)</label>
                      <input
                        type="number"
                        value={exp.endYear || ''}
                        onChange={(e) => handleInputChange('experience', { endYear: e.target.value ? parseInt(e.target.value) : null }, index)}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">Description</label>
                      <textarea
                        value={exp.description}
                        onChange={(e) => handleInputChange('experience', { description: e.target.value }, index)}
                        rows={3}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayItem('experience')}
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
              >
                <Plus size={16} />
                Ajouter une expérience
              </button>
            </div>
          )}

          {/* Étape 4: Portfolio */}
          {currentStep === 4 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Portfolio</h3>
              {formData.portfolio?.map((project, index) => (
                <div key={index} className="border border-gray-700 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-medium">Projet #{index + 1}</h4>
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem('portfolio', index)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Titre du projet</label>
                      <input
                        type="text"
                        value={project.title}
                        onChange={(e) => handleInputChange('portfolio', { title: e.target.value }, index)}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Client (optionnel)</label>
                      <input
                        type="text"
                        value={project.client || ''}
                        onChange={(e) => handleInputChange('portfolio', { client: e.target.value }, index)}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">URL de l'image</label>
                      <input
                        type="text"
                        value={project.imageUrl}
                        onChange={(e) => handleInputChange('portfolio', { imageUrl: e.target.value }, index)}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">Technologies utilisées (optionnel)</label>
                      <input
                        type="text"
                        value={project.techStack || ''}
                        onChange={(e) => handleInputChange('portfolio', { techStack: e.target.value }, index)}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayItem('portfolio')}
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
              >
                <Plus size={16} />
                Ajouter un projet
              </button>
            </div>
          )}

          {/* Étape 5: Récapitulatif */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold mb-4">Récapitulatif</h3>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Informations personnelles</h4>
                <p><strong>Nom complet:</strong> {formData.fullName}</p>
                <p><strong>Rôle:</strong> {formData.role}</p>
                <p><strong>À propos:</strong> {formData.aboutMe}</p>
              </div>

              {formData.education && formData.education.length > 0 && (
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Formation</h4>
                  {formData.education.map((edu, index) => (
                    <div key={index} className="mb-3 last:mb-0">
                      <p><strong>Établissement:</strong> {edu.school}</p>
                      <p><strong>Diplôme:</strong> {edu.degree}</p>
                      <p><strong>Année:</strong> {edu.year}</p>
                    </div>
                  ))}
                </div>
              )}

              {formData.experience && formData.experience.length > 0 && (
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Expérience professionnelle</h4>
                  {formData.experience.map((exp, index) => (
                    <div key={index} className="mb-3 last:mb-0">
                      <p><strong>Poste:</strong> {exp.title}</p>
                      <p><strong>Entreprise:</strong> {exp.company}</p>
                      <p><strong>Période:</strong> {exp.startYear} - {exp.endYear || 'Présent'}</p>
                      <p><strong>Description:</strong> {exp.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {formData.portfolio && formData.portfolio.length > 0 && (
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Portfolio</h4>
                  {formData.portfolio.map((project, index) => (
                    <div key={index} className="mb-3 last:mb-0">
                      <p><strong>Projet:</strong> {project.title}</p>
                      {project.client && <p><strong>Client:</strong> {project.client}</p>}
                      <p><strong>Image:</strong> {project.imageUrl}</p>
                      {project.techStack && <p><strong>Technologies:</strong> {project.techStack}</p>}
                    </div>
                  ))}
                </div>
              )}

              <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-700/30">
                <p className="text-blue-300 text-sm">
                  Vérifiez que toutes les informations sont correctes avant de sauvegarder.
                </p>
              </div>
            </div>
          )}

          {/* Navigation entre les étapes */}
          <div className="flex justify-between pt-6 mt-6 border-t border-gray-700">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg text-sm flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              Précédent
            </button>

            {currentStep < 5 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm flex items-center gap-2"
              >
                Suivant
                <ArrowRight size={16} />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 disabled:opacity-50 rounded-lg text-sm flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Enregistrement...
                  </>
                ) : (
                  <>
                    <Save size={16} />
                    Sauvegarder
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}