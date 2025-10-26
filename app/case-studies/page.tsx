"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import CTASection from "@/components/cta-section"
import CaseStudyCard from "@/components/case-study-card"
import { useState, useEffect } from "react"

// Define the case studies data
const featuredCaseStudies = [
  {
    id: 1,
    title: "AI-Powered Predictive Maintenance Solution",
    client: "Global Manufacturing Corp",
    industry: "Manufacturing",
    image: "/featured-case-study.jpg",
    challenge: "Frequent unexpected equipment failures leading to costly downtime",
    solution: "AI-powered predictive maintenance system with IoT sensors",
    results: "35% reduction in downtime, 25% decrease in maintenance costs",
    slug: "manufacturing-predictive-maintenance",
  },
  {
    id: 2,
    title: "Blockchain-Based Supply Chain Tracking",
    client: "International Logistics Inc",
    industry: "Logistics",
    image: "/global-map.jpeg", // Updated image path
    challenge: "Lack of transparency and traceability in global supply chains",
    solution: "End-to-end blockchain solution with real-time tracking",
    results: "42% improvement in shipment visibility, 30% reduction in disputes",
    slug: "logistics-blockchain-tracking",
  },
  {
    id: 3,
    title: "AI-Driven Customer Insights Platform",
    client: "Retail Giant Co",
    industry: "Retail",
    image: "/case-study-retail.jpg",
    challenge: "Inability to personalize customer experiences at scale",
    solution: "Machine learning platform analyzing customer behavior patterns",
    results: "28% increase in customer engagement, 22% growth in repeat purchases",
    slug: "retail-customer-insights",
  },
  {
    id: 4,
    title: "Secure Healthcare Data Exchange",
    client: "National Healthcare Network",
    industry: "Healthcare",
    image: "/case-study-healthcare.jpg",
    challenge: "Siloed patient data across multiple healthcare providers",
    solution: "HIPAA-compliant data exchange platform with advanced encryption",
    results: "65% faster access to patient records, improved care coordination",
    slug: "healthcare-data-exchange",
  },
]

function FeaturedCaseStudySlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-rotate slides every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredCaseStudies.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredCaseStudies.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredCaseStudies.length) % featuredCaseStudies.length)
  }

  const currentCase = featuredCaseStudies[currentSlide]

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Case Studies</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover how we've helped leading organizations solve complex challenges
          </p>
        </div>

        <div className="relative">
          {/* Slider navigation */}
          <div className="absolute top-1/2 left-4 z-10 -translate-y-1/2">
            <button
              onClick={prevSlide}
              className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-tesseract-500" />
            </button>
          </div>

          <div className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
            <button
              onClick={nextSlide}
              className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-tesseract-500" />
            </button>
          </div>

          {/* Slide content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={currentCase.image || "/placeholder.svg"}
                alt={currentCase.title}
                fill
                className="object-cover transition-opacity duration-500"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-medium text-white bg-tesseract-500 px-3 py-1 rounded-full">
                  {currentCase.industry}
                </span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-600 dark:text-gray-300">{currentCase.client}</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{currentCase.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Learn how we helped {currentCase.client} implement a {currentCase.title.toLowerCase()}
                that addressed their key challenges and delivered measurable results.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-24 font-medium text-gray-900 dark:text-white">Challenge:</div>
                  <div className="text-gray-600 dark:text-gray-300">{currentCase.challenge}</div>
                </div>
                <div className="flex items-start">
                  <div className="w-24 font-medium text-gray-900 dark:text-white">Solution:</div>
                  <div className="text-gray-600 dark:text-gray-300">{currentCase.solution}</div>
                </div>
                <div className="flex items-start">
                  <div className="w-24 font-medium text-gray-900 dark:text-white">Results:</div>
                  <div className="text-gray-600 dark:text-gray-300">{currentCase.results}</div>
                </div>
              </div>
              <Link href={`/case-studies/${currentCase.slug}`}>
                <Button className="bg-tesseract-500 hover:bg-tesseract-600 text-white">Read Full Case Study</Button>
              </Link>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {featuredCaseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index ? "w-8 bg-tesseract-500" : "w-2 bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-tesseract-500 dark:bg-tesseract-700 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Case Studies</h1>
          <p className="text-xl text-tesseract-100 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our success stories and see how we've helped businesses achieve their goals
          </p>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Featured Case Studies</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our most compelling success stories across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudyCard
              title="Digital Transformation for Retail Chain"
              client="Global Retail Chain"
              industry="Retail"
              image="/ecommerce-website-design.png"
              summary="Transformed a traditional retail chain into a digital-first organization, resulting in a 40% increase in online sales and improved customer satisfaction."
              slug="retail-digital-transformation"
            />

            <CaseStudyCard
              title="AI-Powered Fraud Detection"
              client="Leading Financial Institution"
              industry="Financial Services"
              image="/financial-dashboard.png"
              summary="Implemented an AI-powered fraud detection system that reduced fraud losses by 35% and false positives by 40%."
              slug="ai-fraud-detection"
            />

            <CaseStudyCard
              title="Cloud Migration for Healthcare Provider"
              client="Regional Healthcare Network"
              industry="Healthcare"
              image="/healthcare-portal.png"
              summary="Migrated a regional healthcare network to the cloud, improving data security, scalability, and operational efficiency."
              slug="cloud-migration-healthcare"
            />
          </div>
        </div>
      </section>

      {/* Industry Case Studies */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Industry Case Studies</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our case studies by industry to see how we've helped businesses like yours succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudyCard
              title="Digital Transformation for Retail Chain"
              client="Global Retail Chain"
              industry="Retail"
              image="/ecommerce-website-design.png"
              summary="Transformed a traditional retail chain into a digital-first organization, resulting in a 40% increase in online sales and improved customer satisfaction."
              slug="retail-digital-transformation"
            />

            <CaseStudyCard
              title="AI-Powered Fraud Detection"
              client="Leading Financial Institution"
              industry="Financial Services"
              image="/financial-dashboard.png"
              summary="Implemented an AI-powered fraud detection system that reduced fraud losses by 35% and false positives by 40%."
              slug="ai-fraud-detection"
            />

            <CaseStudyCard
              title="Cloud Migration for Healthcare Provider"
              client="Regional Healthcare Network"
              industry="Healthcare"
              image="/healthcare-portal.png"
              summary="Migrated a regional healthcare network to the cloud, improving data security, scalability, and operational efficiency."
              slug="cloud-migration-healthcare"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Business?"
        description="Contact us today to discuss how our digital transformation solutions can help your organization thrive in the digital age."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </div>
  )
}
