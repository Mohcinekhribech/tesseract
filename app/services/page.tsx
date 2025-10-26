"use client";

import Image from "next/image"
import Link from "next/link"
import { Brain, Code, BarChart2, Users, Lightbulb, ArrowRight, CheckCircle, Star, Zap, Target } from "lucide-react"
import ServiceCard from "@/components/service-card"
import CTASection from "@/components/cta-section"
import { useState, useEffect } from "react"

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);

  const industrySolutions = [
    {
      image: "/manufacturing-solution-new.png",
      alt: "Manufacturing Solutions",
      title: "Manufacturing",
      description: "Optimize production processes with smart manufacturing solutions",
      href: "/solutions/manufacturing",
      icon: <Target className="w-8 h-8" />,
    },
    {
      image: "/finance-solution-new.png",
      alt: "Financial Services Solutions",
      title: "Financial Services",
      description: "Secure, scalable financial technology solutions",
      href: "/solutions/financial-services",
      icon: <BarChart2 className="w-8 h-8" />,
    },
    {
      image: "/healthcare-solution-new.png",
      alt: "Healthcare Solutions",
      title: "Healthcare",
      description: "Digital health solutions for better patient care",
      href: "/solutions/healthcare",
      icon: <Users className="w-8 h-8" />,
    },
    {
      image: "/retail-solution-new.png",
      alt: "Retail Solutions",
      title: "Retail",
      description: "Transform retail experiences with digital innovation",
      href: "/solutions/retail",
      icon: <Lightbulb className="w-8 h-8" />,
    },
    {
      image: "/logistics-solution-new.png",
      alt: "Logistics & Supply Chain Solutions",
      title: "Logistics & Supply Chain",
      description: "Streamline operations with intelligent logistics",
      href: "/solutions/logistics",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      image: "/energy-solution-new.png",
      alt: "Energy & Utilities Solutions",
      title: "Energy & Utilities",
      description: "Smart energy management and sustainability solutions",
      href: "/solutions/energy",
      icon: <Star className="w-8 h-8" />,
    },
  ]

  const crossIndustrySolutions = [
    {
      title: "AI & Machine Learning",
      description:
        "Leverage the power of AI and machine learning to automate processes, gain insights from your data, and make better decisions.",
      href: "/solutions/ai-machine-learning",
      icon: <Brain className="w-8 h-8" />,
      features: ["Predictive Analytics", "Process Automation", "Intelligent Insights"],
    },
    {
      title: "Cloud Transformation",
      description:
        "Modernize your infrastructure, improve scalability, and reduce costs with our cloud transformation solutions.",
      href: "/solutions/cloud-transformation",
      icon: <Code className="w-8 h-8" />,
      features: ["Infrastructure Migration", "Scalability", "Cost Optimization"],
    },
    {
      title: "Data Analytics",
      description:
        "Turn your data into actionable insights with our advanced analytics solutions, from descriptive to predictive and prescriptive analytics.",
      href: "/solutions/data-analytics",
      icon: <BarChart2 className="w-8 h-8" />,
      features: ["Real-time Analytics", "Data Visualization", "Business Intelligence"],
    },
  ]

  const services = [
    {
      title: "Strategic Consulting",
      description: "Expert guidance to navigate digital transformation and optimize business processes.",
      icon: <BarChart2 size={32} />,
      href: "/services/consulting",
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      title: "Digital Transformation",
      description: "End-to-end solutions to modernize your business and enhance customer experiences.",
      icon: <Lightbulb size={32} />,
      href: "/services/digital-transformation",
      color: "from-purple-500 to-purple-700",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      title: "Software Development",
      description: "Custom software solutions tailored to your unique business requirements.",
      icon: <Code size={32} />,
      href: "/services/software-development",
      color: "from-green-500 to-green-700",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
    {
      title: "Artificial Intelligence",
      description: "AI-powered solutions to automate processes and gain valuable insights from your data.",
      icon: <Brain size={32} />,
      href: "/services/artificial-intelligence",
      color: "from-orange-500 to-orange-700",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
    },
    {
      title: "Recruitment Solutions",
      description: "Talent acquisition services to help you build high-performing teams.",
      icon: <Users size={32} />,
      href: "/services/recruitment",
      color: "from-pink-500 to-pink-700",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      {/* Enhanced Hero Section */}
      <section className="relative h-[70vh] overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/abstract-swirls.png')] bg-cover bg-center opacity-5"></div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-400 text-sm font-medium">Expert Services</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Services &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Comprehensive services and tailored solutions to drive innovation, efficiency, and growth across industries
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-2">
                  15+
                </div>
                <div className="text-gray-300 text-sm font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-2">
                  500+
                </div>
                <div className="text-gray-300 text-sm font-medium">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-2">
                  99%
                </div>
                <div className="text-gray-300 text-sm font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Overview */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/abstract-swirls.png')] bg-cover bg-center opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-purple-400 text-sm font-medium">Core Services</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Expert Services
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Expert services to transform your business and drive digital innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group block"
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:bg-white/10 hover:border-gray-600/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className={`relative w-16 h-16 ${service.bgColor} ${service.borderColor} border rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white group-hover:text-blue-400 transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Learn more link */}
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 font-medium transition-colors duration-300">
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Industry Solutions */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/abstract-swirls.png')] bg-cover bg-center opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Industry Focus</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Industry{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Solutions
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Tailored solutions to address the unique challenges of your industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <Link
                key={index}
                href={solution.href}
                className="group block h-full"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-gray-700/50 hover:bg-white/10 hover:border-gray-600/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-green-500/10 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={solution.image || "/placeholder.svg"} 
                      alt={solution.alt} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Icon overlay */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                      <div className="text-white group-hover:text-green-400 transition-colors duration-300">
                        {solution.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed flex-grow">
                      {solution.description}
                    </p>
                    
                    <div className="flex items-center text-green-400 group-hover:text-green-300 font-medium transition-colors duration-300 mt-auto">
                      Learn more
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Cross-Industry Solutions */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/abstract-swirls.png')] bg-cover bg-center opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-orange-400 text-sm font-medium">Cross-Industry</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Cross-Industry{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Solutions
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Powerful solutions that deliver value across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crossIndustrySolutions.map((solution, index) => (
              <Link
                key={index}
                href={solution.href}
                className="group block"
              >
                <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:bg-white/10 hover:border-gray-600/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-orange-500/10 h-full">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-red-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon */}
                  <div className="relative w-16 h-16 bg-orange-500/10 border border-orange-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white group-hover:text-orange-400 transition-colors duration-300">
                      {solution.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* Learn more link */}
                  <div className="flex items-center text-orange-400 group-hover:text-orange-300 font-medium transition-colors duration-300">
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Our Approach */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/abstract-swirls.png')] bg-cover bg-center opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-400 text-sm font-medium">Our Methodology</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                Approach
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              We follow a proven methodology to deliver successful outcomes for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discover",
                description: "We analyze your business needs, challenges, and objectives to understand your unique requirements.",
                color: "from-blue-500 to-blue-700",
                bgColor: "bg-blue-500/10",
                borderColor: "border-blue-500/20",
              },
              {
                step: "02",
                title: "Design",
                description: "We create a tailored strategy and solution design that aligns with your business goals.",
                color: "from-purple-500 to-purple-700",
                bgColor: "bg-purple-500/10",
                borderColor: "border-purple-500/20",
              },
              {
                step: "03",
                title: "Implement",
                description: "We execute the strategy with precision, leveraging our expertise and best practices.",
                color: "from-green-500 to-green-700",
                bgColor: "bg-green-500/10",
                borderColor: "border-green-500/20",
              },
              {
                step: "04",
                title: "Optimize",
                description: "We continuously monitor, measure, and refine to ensure optimal performance and results.",
                color: "from-orange-500 to-orange-700",
                bgColor: "bg-orange-500/10",
                borderColor: "border-orange-500/20",
              },
            ].map((approach, index) => (
              <div
                key={index}
                className="relative p-8 bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:bg-white/10 hover:border-gray-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 text-center group"
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${approach.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Step number */}
                <div className={`relative w-20 h-20 ${approach.bgColor} ${approach.borderColor} border rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {approach.step}
                  </span>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {approach.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {approach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Get Started?
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Contact us today to discuss how our services and solutions can help your business thrive in the digital age
          </p>
          
          <Link href="/contact">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Schedule a Consultation
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
