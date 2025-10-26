"use client";

import { useState } from "react";
import { X, ArrowLeft, ArrowRight, Save, Plus, Trash2, Upload, User } from "lucide-react";

interface CreateProfileModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  onSubmit: (formData: any) => void;
}

export default function CreateProfileModal({
  isModalOpen,
  setIsModalOpen,
  onSubmit
}: CreateProfileModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    aboutMe: "",
    role: "",
    imageUrl: "",
    education: [{ school: "", degree: "", year: new Date().getFullYear() }],
    experience: [{ title: "", company: "", startYear: new Date().getFullYear(), endYear: null, description: "" }],
    portfolio: [{ title: "", client: "", imageUrl: "", techStack: "" }]
  });

  const totalSteps = 5;

  const handleInputChange = (field: string, value: any, index?: number) => {
    if (index !== undefined) {
      setFormData(prev => ({
        ...prev,
        [field]: prev[field].map((item: any, i: number) => 
          i === index ? { ...item, ...value } : item
        )
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
    
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Vérifier le type de fichier
      if (!file.type.startsWith('image/')) {
        setErrors(prev => ({ ...prev, imageUrl: "Veuillez sélectionner une image valide" }));
        return;
      }

      // Vérifier la taille (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, imageUrl: "L'image ne doit pas dépasser 5MB" }));
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setImagePreview(result);
        handleInputChange('imageUrl', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUrlChange = (url: string) => {
    handleInputChange('imageUrl', url);
    if (url) {
      setImagePreview(url);
    } else {
      setImagePreview(null);
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: {[key: string]: string} = {};
    
    switch (step) {
      case 1:
        if (!formData.fullName.trim()) {
          newErrors.fullName = "Le nom complet est requis";
        }
        if (!formData.role.trim()) {
          newErrors.role = "Le rôle est requis";
        }
        if (!formData.aboutMe.trim()) {
          newErrors.aboutMe = "La description est requise";
        }
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps) {
        setCurrentStep(prev => prev + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    await onSubmit(formData);
    setIsSubmitting(false);
    
    // Reset form on successful submission
    setCurrentStep(1);
    setImagePreview(null);
    setFormData({
      fullName: "",
      aboutMe: "",
      role: "",
      imageUrl: "",
      education: [{ school: "", degree: "", year: new Date().getFullYear() }],
      experience: [{ title: "", company: "", startYear: new Date().getFullYear(), endYear: null, description: "" }],
      portfolio: [{ title: "", client: "", imageUrl: "", techStack: "" }]
    });
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 border border-gray-700 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-gray-700">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Créer un Profil</h2>
            <button
              onClick={() => setIsModalOpen(false)}
              className="p-2 hover:bg-gray-800 rounded-lg transition"
            >
              <X size={20} />
            </button>
          </div>
          <div className="mt-4 flex items-center">
            <div className="flex-1 bg-gray-700 h-1 rounded-full">
              <div
                className="bg-blue-600 h-1 rounded-full transition-all"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
            <span className="ml-4 text-sm text-gray-400">
              Étape {currentStep} sur {totalSteps}
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* Étape 1: Informations de base */}
          {currentStep === 1 && (
            <div className="space-y-6">
              {/* Photo de profil */}
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full border-2 border-dashed border-gray-600 flex items-center justify-center overflow-hidden bg-gray-800">
                    {imagePreview ? (
                      <img 
                        src={imagePreview} 
                        alt="Preview" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User size={32} className="text-gray-500" />
                    )}
                  </div>
                  <label 
                    htmlFor="image-upload" 
                    className="absolute -bottom-2 -right-2 bg-blue-600 hover:bg-blue-700 rounded-full p-2 cursor-pointer transition"
                  >
                    <Upload size={16} />
                  </label>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </div>
                
                <div className="w-full max-w-md">
                  <label className="block text-sm font-medium mb-2">
                    Ou entrez une URL d'image
                  </label>
                  <input
                    type="url"
                    value={formData.imageUrl}
                    onChange={(e) => handleImageUrlChange(e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.imageUrl && <p className="text-red-400 text-sm mt-1">{errors.imageUrl}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Nom complet *</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Rôle *</label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => handleInputChange('role', e.target.value)}
                  placeholder="Ex: Développeur Full-Stack, Designer UI/UX..."
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.role && <p className="text-red-400 text-sm mt-1">{errors.role}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">À propos de moi *</label>
                <textarea
                  value={formData.aboutMe}
                  onChange={(e) => handleInputChange('aboutMe', e.target.value)}
                  rows={4}
                  placeholder="Décrivez votre parcours, vos compétences et vos objectifs..."
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.aboutMe && <p className="text-red-400 text-sm mt-1">{errors.aboutMe}</p>}
              </div>
            </div>
          )}

        {/* Étape 2: Éducation */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Formation</h3>
            {formData.education.map((edu, index) => (
              <div key={index} className="border border-gray-700 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium">Formation #{index + 1}</h4>
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => handleInputChange('education', formData.education.filter((_, i) => i !== index))}
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
              onClick={() => handleInputChange('education', [...formData.education, { school: "", degree: "", year: new Date().getFullYear() }])}
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
            {formData.experience.map((exp, index) => (
              <div key={index} className="border border-gray-700 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium">Expérience #{index + 1}</h4>
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => handleInputChange('experience', formData.experience.filter((_, i) => i !== index))}
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
              onClick={() => handleInputChange('experience', [...formData.experience, { title: "", company: "", startYear: new Date().getFullYear(), endYear: null, description: "" }])}
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
            {formData.portfolio.map((project, index) => (
              <div key={index} className="border border-gray-700 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium">Projet #{index + 1}</h4>
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => handleInputChange('portfolio', formData.portfolio.filter((_, i) => i !== index))}
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
              onClick={() => handleInputChange('portfolio', [...formData.portfolio, { title: "", client: "", imageUrl: "", techStack: "" }])}
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

            {formData.education.length > 0 && (
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

            {formData.experience.length > 0 && (
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

            {formData.portfolio.length > 0 && (
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
                Vérifiez que toutes les informations sont correctes avant de créer votre profil.
              </p>
            </div>
          </div>
        )}
          {/* Navigation entre les étapes */}
          <div className="flex justify-between pt-6 border-t border-gray-700">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg text-sm flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              Précédent
            </button>

            {currentStep < totalSteps ? (
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
                    Création...
                  </>
                ) : (
                  <>
                    <Save size={16} />
                    Créer le profil
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