"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight, Plus, Edit, Trash2, Loader2, User, Briefcase, Quote } from "lucide-react";
import TestimonialCard from "@/components/testimonial-card";
import CaseStudyCard from "@/components/case-study-card";
import BlueCTASection from "@/components/blue-cta-section";

import { useState, useEffect } from "react";
import TestimonialModal from "@/components/TestimonialModal";
import { useTestimonials } from "@/hooks/use-testimonial";
import { Testimonial } from "@/types/testimonial";
import { useSession } from 'next-auth/react';


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [logoOffset, setLogoOffset] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"create" | "update">("create");
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [isDeleting, setIsDeleting] = useState<number | null>(null);

  const { testimonials, isLoading, error, deleteTestimonial, refreshTestimonials } = useTestimonials();
  const { data: session } = useSession();
  const isAdmin = session?.user;

  useEffect(() => {
    if (testimonials.length > 0 && currentSlide >= testimonials.length) {
      setCurrentSlide(0);
    }
  }, [testimonials.length, currentSlide]);

  const nextSlide = () => {
    if (testimonials.length === 0) return;
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (testimonials.length === 0) return;
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (testimonials.length <= 1 || isLoading) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextIndex = prev === testimonials.length - 1 ? 0 : prev + 1;
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isLoading]);

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
    refreshTestimonials();
  };

  const handleDeleteTestimonial = async (id: number) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce témoignage ?')) {
      return;
    }

    try {
      setIsDeleting(id);
      await deleteTestimonial(id);
      if (currentSlide >= testimonials.length - 1 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
      alert('Erreur lors de la suppression du témoignage');
    } finally {
      setIsDeleting(null);
    }
  };

  const renderTestimonial = (testimonial: Testimonial, index: number) => {
    const colors = [
      { from: 'blue-600/10', to: 'blue-800/10', border: 'blue-500/20', hover: 'blue-400/40', shadow: 'blue-500/10', gradient: 'from-blue-400 to-blue-600', text: 'blue-300', accent: 'blue-400' },
      { from: 'purple-600/10', to: 'purple-800/10', border: 'purple-500/20', hover: 'purple-400/40', shadow: 'purple-500/10', gradient: 'from-purple-400 to-purple-600', text: 'purple-300', accent: 'purple-400' },
      { from: 'green-600/10', to: 'green-800/10', border: 'green-500/20', hover: 'green-400/40', shadow: 'green-500/10', gradient: 'from-green-400 to-green-600', text: 'green-300', accent: 'green-400' },
      { from: 'orange-600/10', to: 'orange-800/10', border: 'orange-500/20', hover: 'orange-400/40', shadow: 'orange-500/10', gradient: 'from-orange-400 to-orange-600', text: 'orange-300', accent: 'orange-400' },
      { from: 'cyan-600/10', to: 'cyan-800/10', border: 'cyan-500/20', hover: 'cyan-400/40', shadow: 'cyan-500/10', gradient: 'from-cyan-400 to-cyan-600', text: 'cyan-300', accent: 'cyan-400' },
      { from: 'pink-600/10', to: 'pink-800/10', border: 'pink-500/20', hover: 'pink-400/40', shadow: 'pink-500/10', gradient: 'from-pink-400 to-pink-600', text: 'pink-300', accent: 'pink-400' },
    ];

    const colorScheme = colors[index % colors.length];

    return (
      <div key={testimonial.id} className="group relative max-w-4xl mx-auto">
        <div className={`bg-gray-900 bg-gradient-to-br from-${colorScheme.from} to-${colorScheme.to} backdrop-blur-sm border border-${colorScheme.border} rounded-2xl p-8 h-full transition-all duration-300 hover:scale-105 hover:border-${colorScheme.hover} hover:shadow-2xl hover:shadow-${colorScheme.shadow}`}>
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
            {isAdmin && (
              <>
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
              </>
            )}
          </div>

          <div className="flex items-center mb-6">
            <div className={`w-12 h-12 bg-gradient-to-br ${colorScheme.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
              <User className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h4 className="text-white font-semibold text-lg">{testimonial.fullname}</h4>
              <p className={`text-${colorScheme.text} text-sm flex items-center`}>
                <Briefcase className="h-4 w-4 mr-1" />
                {testimonial.function}
              </p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(testimonial.rate)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
            {[...Array(5 - testimonial.rate)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-gray-600 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <div className="flex items-start">
            <Quote className={`h-5 w-5 text-${colorScheme.accent} mr-2 mt-1 flex-shrink-0`} />
            <p className="text-gray-200 italic text-base leading-relaxed">
              "{testimonial.comments}"
            </p>
          </div>
        </div>
      </div>
    );
  };

  const defaultImage = "/abstract-swirls.png";

  const tabs = [
    {
      id: "enterprise-solutions",
      label: "Enterprise Solutions",
      headline:
        "De la vision à la solution digitale : concrétisez votre projet, sans être expert",
      subheading:
        "Vous avez des projets digitaux mais pas l'expertise nécessaire. De la stratégie à la mise en œuvre, Tesseract vous accompagne jusqu'à l'aboutissement de votre vision, en toute maitrise et sécurité.",
      image: "/service-software-bg.jpg",
    },
    {
      id: "ai-solutions",
      label: "AI-Powered Solutions",
      headline: "Construisez votre IAvenir.",
      subheading:
        "Tesseract conçoit et déploie des solutions IA sur-mesure, directement utiles à vos équipes. Moins de tâches répétitives, plus d'agilité, une vraie valeur ajoutée : l'intelligence devient actionnable",
      image: "/ai-visualization.jpg",
    },
    {
      id: "digital-transformation",
      label: "Digital Transformation",
      headline: "Augmenter la performance terrain par la donnée et l'IA",
      subheading:
        "Moderniser vos opérations, activer vos données, booster la performance. Avec un interlocuteur unique, des experts dédiés et les bons outils (IA, automatisation, UX), Tesseract aligne exécution terrain et stratégie d'entreprise.",
      image: "/service-digital-bg.jpg",
    },
    {
      id: "strategic-consulting",
      label: "Strategic Consulting",
      headline: "Activez l'expertise tech, modulez la puissance",
      subheading:
        "De la conception à la mise en production, appuyez-vous sur une expertise ciblée. Tesseract aligne les bonnes ressources sur chaque phase de votre roadmap tech, pour livrer plus vite, mieux, sans diluer vos standards.",
      image: "/service-consulting-bg.jpg",
    },
  ];

 
  useEffect(() => {
    const tabInterval = setInterval(() => {
      setActiveTab((prev) => (prev === tabs.length - 1 ? 0 : prev + 1));
    }, 5000); 

    return () => clearInterval(tabInterval);
  }, []);

  const clientLogos = [
    { src: "/images/client-logo-amcor.jpeg", alt: "Amcor" },
    { src: "/images/client-logo-avs.png", alt: "AVS Research" },
    {
      src: "/images/client-logo-guardian-sentinel.png",
      alt: "Guardian Sentinel",
    },
    { src: "/images/client-logo-del-monte.png", alt: "Del Monte" },
    {
      src: "/images/client-logo-guardian-security.png",
      alt: "Guardian Security",
    },
    { src: "/images/client-logo-de-vrij.png", alt: "De Vrij Group" },
    { src: "/images/client-logo-coca-cola.png", alt: "Coca Cola" },
    { src: "/images/client-logo-braun.jpeg", alt: "B. Braun" },
    { src: "/images/client-logo-chablass.png", alt: "Chablass" },
    { src: "/images/japy-tech.png", alt: "Japy Tech" },
    { src: "/images/savoye.png", alt: "Savoye" },
    { src: "/images/schneider.png", alt: "Schneider Electric" },
    { src: "/images/uimm.png", alt: "UIMM" },
    { src: "/images/novolyze.png", alt: "Novolyze" },
    { src: "/images/hz.jpeg", alt: "HZ" },
    { src: "/images/kalygma.jpeg", alt: "Kalygma" },
    { src: "/images/savencia.png", alt: "Groupe Savencia" },
    { src: "/images/sigma.png", alt: "Sigma Alimentos" },
  ];

  useEffect(() => {
    const logoInterval = setInterval(() => {
      setLogoOffset((prev) => {
        const logoWidth = 180; 
        const nextOffset = prev + logoWidth;
        if (nextOffset >= logoWidth * clientLogos.length) {
          return 0;
        }
        return nextOffset;
      });
    }, 3000); 

    return () => clearInterval(logoInterval);
  }, [clientLogos.length]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-5rem)] overflow-hidden bg-gray-900 flex flex-col">
        <div className="flex flex-col md:flex-row w-full flex-1 relative z-10">
          {/* Left Column - Content */}
          <div className="relative flex flex-col w-full   h-full">
            {/* Content Area */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex items-center relative z-30">
              <div className="max-w-4xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-white min-h-[120px] md:min-h-[140px] lg:min-h-[160px] flex items-center">
                  {tabs[activeTab].headline}
                </h1>
                <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 mb-10 leading-relaxed min-h-[100px] md:min-h-[120px] flex items-start">
                  {tabs[activeTab].subheading}
                </p>
                <Link href="/services">
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-6 text-xl lg:text-2xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-blue-500/20 hover:border-blue-400/40">
                    Learn more <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="hidden md:flex relative w-1/2 h-full overflow-hidden z-5">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${activeTab === index ? "opacity-100" : "opacity-0"
                  }`}
              >
                <Image
                  src={defaultImage || "/placeholder.svg"}
                  alt={tab.label}
                  fill
                  className={`object-cover object-center transition-transform duration-1000 ${activeTab === index ? "scale-100" : "scale-110"
                    }`}
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tabs - Full width at bottom of hero section */}
        <div className="w-full border-t border-gray-800 z-30">
          <div className="flex w-full">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                className={`py-4 px-2 h-16 text-xs font-medium transition-colors font-poppins flex items-center justify-center flex-1 ${activeTab === index
                  ? "text-white border-t-2 -mt-[1px] border-yellow-400"
                  : "text-gray-400 hover:text-white"
                  }`}
                onClick={() => setActiveTab(index)}
              >
                <span className="block text-center leading-tight">
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>

      </section>

      {/* Welcome Statement Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-swirls.png')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Vous avez une{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500">
                vision
              </span>{" "}
              mais ne savez pas comment la{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-yellow-400">
                concrétiser
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Vous n'avez pas besoin d'être un expert technique pour transformer
              votre entreprise. Que vous cherchiez à optimiser vos opérations,
              atteindre plus de clients, ou résoudre des défis complexes, nous
              parlons votre langue et transformons vos idées en solutions
              digitales puissantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/enterprise-solutions">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Découvrez les possibilités{" "}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <p className="text-gray-400 text-sm">
                Pas de jargon technique, que des solutions qui fonctionnent
              </p>
            </div>
          </div>o
        </div>
      </section>

      {/* Modern Testimonials Section - Avec logique dynamique */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        <div className="absolute inset-0 bg-[url('/abstract-swirls.png')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight relative z-20">
              Ce que disent nos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400">
                clients
              </span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed relative z-20">
              Des témoignages authentiques de dirigeants qui ont transformé leur entreprise avec TESSERACT
            </p>
          </div>

          {/* Add Testimonial Button */}
          <div className="text-center mb-8 relative z-20">
            {isAdmin && (
              <Button
                onClick={handleCreateTestimonial}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0"
                disabled={isLoading}
              >
                <Plus className="mr-2 h-5 w-5" />
                Ajouter un témoignage
              </Button>
            )}
          </div>

          {/* Modern Testimonial Display */}
          <div className="relative mb-12 z-20">
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
                <span className="ml-2 text-gray-300">Chargement des témoignages...</span>
              </div>
            ) : error ? (
              <div className="text-center py-20">
                <p className="text-red-400 mb-4">{error}</p>
                <Button
                  onClick={refreshTestimonials}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Réessayer
                </Button>
              </div>
            ) : testimonials.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-400 mb-4">Aucun témoignage disponible</p>
              </div>
            ) : (
              <div className="py-8">
                <div
                  key={`testimonial-${testimonials[currentSlide]?.id}-${currentSlide}`}
                  className="testimonial-container"
                  style={{ minHeight: '300px' }}
                >
                  {testimonials[currentSlide] && renderTestimonial(testimonials[currentSlide], currentSlide)}
                </div>
              </div>
            )}

            {/* Pagination Dots */}
            {testimonials.length > 1 && (
              <div className="flex justify-center mt-8 gap-3">
                {testimonials.map((_, i) => (
                  <button
                    key={`dot-${i}`}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === i
                      ? "bg-blue-500 scale-125 shadow-lg shadow-blue-500/50"
                      : "bg-gray-600 hover:bg-gray-500"
                      }`}
                    aria-label={`Aller au témoignage ${i + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Navigation Arrows */}
            {testimonials.length > 1 && (
              <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
                <button
                  onClick={prevSlide}
                  className="bg-gray-800/80 hover:bg-gray-700/80 text-white p-2 rounded-full transition-all duration-300 pointer-events-auto opacity-0 hover:opacity-100 focus:opacity-100"
                  aria-label="Témoignage précédent"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-gray-800/80 hover:bg-gray-700/80 text-white p-2 rounded-full transition-all duration-300 pointer-events-auto opacity-0 hover:opacity-100 focus:opacity-100"
                  aria-label="Témoignage suivant"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400 mb-2">
                98%
              </div>
              <p className="text-gray-300 text-lg">Satisfaction Client</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                150+
              </div>
              <p className="text-gray-300 text-lg">Projets Réalisés</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-2">
                5 ans
              </div>
              <p className="text-gray-300 text-lg">d'Expertise</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/testimonials">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Voir Tous les Témoignages <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
        <TestimonialModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          mode={modalMode}
          testimonial={selectedTestimonial}
          onSave={handleSaveTestimonial}
        />
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-swirls.png')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Pourquoi choisir{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400">
                TESSERACT
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-300 mb-16 leading-relaxed max-w-3xl mx-auto">
              Nous combinons expertise technique et approche humaine pour
              transformer vos défis en opportunités de croissance
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

              <div className="group relative">
                <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 h-full transition-all duration-300 hover:scale-105 hover:border-blue-400/50">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">01</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Nos valeurs
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Des valeurs humaines et de l'innovation au cœur de notre
                    approche. L'humain au centre de chaque projet.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-8 h-full transition-all duration-300 hover:scale-105 hover:border-yellow-400/50">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">02</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Notre Vision
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Accélérer et consolider les compétences d'entreprises pour
                    prospérer dans l'économie numérique.
                  </p>
                </div>
              </div>

             
              <div className="group relative">
                <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 h-full transition-all duration-300 hover:scale-105 hover:border-purple-400/50">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">03</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Esprit novateur
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    L'innovation au cœur de notre métier. Nous explorons
                    constamment de nouvelles approches.
                  </p>
                </div>
              </div>

             
              <div className="group relative">
                <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 h-full transition-all duration-300 hover:scale-105 hover:border-green-400/50">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">04</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Expertise et efficience
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Des experts qualifiés, au bon moment pour maximiser votre
                    retour sur investissement.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/about">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  En savoir plus sur nous{" "}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <p className="text-gray-400 text-sm">
                Une approche qui fait la différence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Trusted By Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/abstract-swirls.png')] bg-cover bg-center opacity-5"></div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 z-10"></div>
        
        <div className="container mx-auto px-4 relative z-20">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-400 text-sm font-medium">Trusted Worldwide</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Approuvé par des{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                organisations de premier plan
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Plus de 500+ entreprises font confiance à Tesseract pour transformer leur vision digitale en réalité
            </p>
          </div>

          {/* Logos Container */}
          <div className="relative">
            {/* Fade Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-gray-900 to-transparent z-20"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-gray-900 to-transparent z-20"></div>
            
            {/* Logos Scroll */}
            <div className="relative overflow-hidden">
              <div
                className="flex items-center gap-6 md:gap-12"
                style={{
                  transform: `translateX(-${logoOffset}px)`,
                  width: `${clientLogos.length * 200}px`,
                }}
              >
                {/* Duplicate logos for seamless infinite scroll */}
                {[...clientLogos, ...clientLogos].map((logo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 group"
                    style={{ width: "200px" }}
                  >
                    <div className="relative p-3 md:p-6 bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-xl md:rounded-2xl hover:bg-white/10 hover:border-blue-500/30 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative flex justify-center items-center h-12 md:h-16">
                        <Image
                          src={logo.src || "/placeholder.svg"}
                          alt={logo.alt}
                          width={120}
                          height={45}
                          className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:brightness-110 md:w-40 md:h-15"
                        />
                      </div>
                      
                      {/* Company name tooltip - hidden on mobile */}
                      <div className="hidden md:block absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full border border-gray-600 whitespace-nowrap">
                          {logo.alt}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-2">
                500+
              </div>
              <div className="text-gray-300 text-sm font-medium">Entreprises</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-2">
                50+
              </div>
              <div className="text-gray-300 text-sm font-medium">Pays</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-2">
                99%
              </div>
              <div className="text-gray-300 text-sm font-medium">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800/30 to-gray-900"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Histoires de Succès
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Découvrez comment nous avons aidé les organisations à atteindre
              leurs objectifs commerciaux grâce à la transformation digitale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudyCard
              title="Solution de Maintenance Prédictive Alimentée par l'IA"
              client="Global Manufacturing Corp"
              industry="Manufacturing"
              image="/images/case-study-manufacturing.png"
              summary="Mise en place d'une solution IA qui a réduit les temps d'arrêt des équipements de 35% et les coûts de maintenance de 25%."
              slug="manufacturing-predictive-maintenance"
            />

            <CaseStudyCard
              title="Transformation Digitale pour les Services Financiers"
              client="Premier Financial Group"
              industry="Finance"
              image="/images/case-study-finance.png"
              summary="Modernisation des systèmes et processus existants, résultant en une intégration client 40% plus rapide et une satisfaction améliorée."
              slug="finance-digital-transformation"
            />

            <CaseStudyCard
              title="Implémentation ERP Personnalisée"
              client="Global Retail Chain"
              industry="Retail"
              image="/images/case-study-retail.png"
              summary="Développement et déploiement d'une solution ERP personnalisée qui a rationalisé les opérations dans plus de 200 sites."
              slug="retail-erp-implementation"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-blue-500/20 hover:border-blue-400/40">
                Voir Toutes les Études de Cas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <BlueCTASection
        title="Ready to Transform Your Business?"
        description="Schedule a consultation with our experts to discuss how we can help you achieve your business goals through digital transformation and AI-powered solutions."
        buttonText="Get Started Today"
        buttonLink="/contact"
      />

    </div>
  );
}