"use client";

import { useState, useEffect } from "react";
import { useSession } from 'next-auth/react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Edit, Trash2, Plus, Star, Loader2, User } from "lucide-react";
import TestimonialModal from "@/components/TestimonialModal";
import { Testimonial } from "@/types/testimonial";
import CTASection from "@/components/cta-section";

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"create" | "update">("create");
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [isDeleting, setIsDeleting] = useState<number | null>(null);

  const { data: session } = useSession();
  const isAdmin = session?.user;

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/testimonials');
      if (!response.ok) throw new Error('Erreur lors du chargement des témoignages');
      const data = await response.json();
      setTestimonials(data);
    } catch (err) {
      setError('Impossible de charger les témoignages');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleCreateTestimonial = () => {
    setModalMode("create");
    setSelectedTestimonial(null);
    setIsModalOpen(true);
  };

  const handleEditTestimonial = (testimonial: Testimonial) => {
    setModalMode("update");
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const handleSaveTestimonial = () => {
    fetchTestimonials();
    setIsModalOpen(false);
  };

  const handleDeleteTestimonial = async (id: number) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce témoignage ?')) {
      return;
    }

    try {
      setIsDeleting(id);
      const response = await fetch(`/api/testimonials/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Erreur lors de la suppression');

      await fetchTestimonials();
    } catch (err) {
      console.error('Erreur:', err);
      setError('Erreur lors de la suppression du témoignage');
    } finally {
      setIsDeleting(null);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const colors = [
    { from: 'blue-600', to: 'blue-800', border: 'blue-500', hover: 'blue-400', text: 'blue-300', gradient: 'from-blue-400 to-blue-600', shadow: 'blue-500' },
    { from: 'purple-600', to: 'purple-800', border: 'purple-500', hover: 'purple-400', text: 'purple-300', gradient: 'from-purple-400 to-purple-600', shadow: 'purple-500' },
    { from: 'green-600', to: 'green-800', border: 'green-500', hover: 'green-400', text: 'green-300', gradient: 'from-green-400 to-green-600', shadow: 'green-500' },
    { from: 'yellow-600', to: 'yellow-800', border: 'yellow-500', hover: 'yellow-400', text: 'yellow-300', gradient: 'from-yellow-400 to-yellow-600', shadow: 'yellow-500' },
    { from: 'red-600', to: 'red-800', border: 'red-500', hover: 'red-400', text: 'red-300', gradient: 'from-red-400 to-red-600', shadow: 'red-500' },
    { from: 'indigo-600', to: 'indigo-800', border: 'indigo-500', hover: 'indigo-400', text: 'indigo-300', gradient: 'from-indigo-400 to-indigo-600', shadow: 'indigo-500' }
  ];

  const renderTestimonial = (testimonial: Testimonial, index: number) => {
    const colorScheme = colors[index % colors.length];

    return (
      <div key={testimonial.id} className="group relative max-w-4xl mx-auto">
        <div className={`bg-gray-900 bg-gradient-to-br from-${colorScheme.from} to-${colorScheme.to} backdrop-blur-sm border border-${colorScheme.border} rounded-2xl p-8 h-full transition-all duration-300 hover:scale-105 hover:border-${colorScheme.hover} hover:shadow-2xl hover:shadow-${colorScheme.shadow}`}>
          {/* Admin Controls */}
          {isAdmin && (
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className={`bg-${colorScheme.from} border-${colorScheme.hover} text-${colorScheme.text} hover:bg-${colorScheme.border} hover:text-white`}
                onClick={() => handleEditTestimonial(testimonial)}
                disabled={isDeleting !== null}
              >
                <Edit className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="bg-red-600/20 border-red-400/40 text-red-300 hover:bg-red-600/40 hover:text-white"
                onClick={() => handleDeleteTestimonial(testimonial.id)}
                disabled={isDeleting !== null}
              >
                {isDeleting === testimonial.id ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Trash2 className="h-4 w-4" />
                )}
              </Button>
            </div>
          )}

          <div className="flex items-center mb-6">
            <div className={`w-12 h-12 bg-gradient-to-br ${colorScheme.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
              <User className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-white">{testimonial.fullname}</h3>
              <p className={`text-${colorScheme.text} font-medium`}>{testimonial.function}</p>
            </div>
          </div>

          <div className="flex items-center mb-6">
            <div className="flex">
              {renderStars(testimonial.rate)}
            </div>
            <span className="ml-2 text-sm text-gray-300">({testimonial.rate}/5)</span>
          </div>

          <blockquote className="text-gray-200 text-lg leading-relaxed italic mb-6">
            "{testimonial.comments}"
          </blockquote>

          <div className="text-xs text-gray-400">
            {new Date(testimonial.createdAt).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Ce que disent nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400">clients</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Des témoignages authentiques de dirigeants qui ont transformé leur entreprise avec TESSERACT
            </p>
          </div>
        </div>
      </section>

      {/* Management Section for Admins */}
      {isAdmin && (
        <section className="py-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Gestion des témoignages</h2>
                <p className="text-gray-300">Administrez les témoignages clients</p>
              </div>
              <Button
                onClick={handleCreateTestimonial}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0"
              >
                <Plus className="mr-2 h-5 w-5" />
                Ajouter un témoignage
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
              <span className="ml-2 text-gray-300">Chargement des témoignages...</span>
                </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-500 mb-4">{error}</p>
              <Button onClick={fetchTestimonials} className="bg-blue-600 hover:bg-blue-700 text-white">
                Réessayer
              </Button>
              </div>
          ) : testimonials.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 mb-4">Aucun témoignage disponible</p>
            </div>
          ) : (
            <div className="space-y-8">
              {testimonials.map((testimonial, index) => renderTestimonial(testimonial, index))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400 mb-2">{testimonials.length}+</div>
              <p className="text-gray-300 text-lg">Témoignages</p>
                </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">4.8/5</div>
              <p className="text-gray-300 text-lg">Note moyenne</p>
              </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-2">98%</div>
              <p className="text-gray-300 text-lg">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Approuvé par des <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">organisations de premier plan</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Plus de 500+ entreprises font confiance à Tesseract pour transformer leur vision digitale en réalité
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { src: "/images/client-logo-amcor.jpeg", alt: "Amcor" },
              { src: "/images/client-logo-avs.png", alt: "AVS Research" },
              { src: "/images/client-logo-guardian-sentinel.png", alt: "Guardian Sentinel" },
              { src: "/images/client-logo-del-monte.png", alt: "Del Monte" },
              { src: "/images/client-logo-amcor.jpeg", alt: "Amcor" }
            ].map((logo, index) => (
              <div key={index} className="flex items-center justify-center group">
                <div className="relative p-3 md:p-6 bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-xl md:rounded-2xl hover:bg-white/10 hover:border-blue-500/30 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex justify-center items-center h-12 md:h-16">
                    <img 
                      src={logo.src} 
                      alt={logo.alt} 
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:brightness-110 md:w-40 md:h-15" 
                    />
            </div>
            </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Prêt à transformer votre entreprise ?"
        description="Nos experts sont là pour challenger vos idées, faire émerger de nouvelles opportunités et activer le plein potentiel du digital et de l'IA."
        buttonText="🚀 Prêt à nous challenger ?"
        buttonLink="/contact"
      />

      {/* Testimonial Modal */}
      <TestimonialModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode={modalMode}
        testimonial={selectedTestimonial}
        onSave={handleSaveTestimonial}
      />
    </div>
  );
}