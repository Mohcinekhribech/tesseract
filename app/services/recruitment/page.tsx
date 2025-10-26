import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Zap, BarChart3, RefreshCw, Globe, Layers, Users } from "lucide-react"

export default function RecruitmentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-tesseract-600 to-tesseract-400 dark:from-tesseract-800 dark:to-tesseract-600">
          <div className="absolute inset-0 opacity-20 dark:opacity-30 mix-blend-overlay">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
        </div>
        <div className="container relative mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6 border border-white/30">
                <Zap size={14} className="mr-2" /> Talent Acquisition Experts
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Recruitment <span className="text-yellow-300 dark:text-yellow-200">Solutions</span> for Modern
                Enterprises
              </h1>
              <p className="text-xl text-white/80 dark:text-white/90 mb-8 leading-relaxed">
                End-to-end talent acquisition services to help you build high-performing teams that drive your business
                forward.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-white text-tesseract-600 hover:bg-gray-100 dark:bg-yellow-300 dark:text-gray-900 dark:hover:bg-yellow-200 font-medium px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Find Top Talent
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white/10 dark:border-white/70 dark:text-white/90 dark:hover:bg-white/20 font-medium px-6 py-3 rounded-lg transition-all duration-300"
                  >
                    View Success Stories
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-tesseract-900/70 to-transparent z-10"></div>
              <Image src="/recruitment-solutions-hero.png" alt="Recruitment Solutions" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300">
              <div className="text-3xl font-bold text-tesseract-500 dark:text-tesseract-300 mb-1">95%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Candidate Retention Rate</div>
            </div>
            <div className="text-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300">
              <div className="text-3xl font-bold text-tesseract-500 dark:text-tesseract-300 mb-1">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Successful Placements</div>
            </div>
            <div className="text-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300">
              <div className="text-3xl font-bold text-tesseract-500 dark:text-tesseract-300 mb-1">40%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Faster Time-to-Hire</div>
            </div>
            <div className="text-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300">
              <div className="text-3xl font-bold text-tesseract-500 dark:text-tesseract-300 mb-1">98%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-tesseract-100 dark:bg-tesseract-900/40 text-tesseract-600 dark:text-tesseract-300 text-sm font-medium mb-6">
                Our Approach
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-tesseract-300 mb-6 leading-tight">
                Build High-Performing Teams for the Digital Era
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                In today's competitive talent landscape, finding and attracting the right professionals is more
                challenging than ever. Our recruitment solutions help you identify, attract, and retain top talent
                across various industries and specializations.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                With a deep understanding of the technology and digital transformation sectors, our experienced
                recruiters leverage industry insights, extensive networks, and advanced sourcing techniques to connect
                you with exceptional candidates who not only have the right skills but also align with your company
                culture and values.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tesseract-100 dark:bg-tesseract-900/30 flex items-center justify-center mr-4">
                    <BarChart3 className="w-5 h-5 text-tesseract-600 dark:text-tesseract-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Data-Driven</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Insights that drive strategic hiring</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tesseract-100 dark:bg-tesseract-900/30 flex items-center justify-center mr-4">
                    <RefreshCw className="w-5 h-5 text-tesseract-600 dark:text-tesseract-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Agile Process</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Adaptable to changing needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tesseract-100 dark:bg-tesseract-900/30 flex items-center justify-center mr-4">
                    <Globe className="w-5 h-5 text-tesseract-600 dark:text-tesseract-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Global Network</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Access to worldwide talent</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tesseract-100 dark:bg-tesseract-900/30 flex items-center justify-center mr-4">
                    <Users className="w-5 h-5 text-tesseract-600 dark:text-tesseract-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Culture-Focused</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Perfect cultural alignment</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Layers className="w-6 h-6 text-tesseract-500 dark:text-tesseract-400 mr-2" />
                Our Recruitment Services
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-3 mt-1 flex-shrink-0 group-hover:text-yellow-500 dark:group-hover:text-yellow-300 transition-colors duration-300"
                    size={20}
                  />
                  <div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-tesseract-500 dark:group-hover:text-tesseract-300 transition-colors duration-300">
                      Executive Search
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Identifying and attracting top-tier leadership talent
                    </p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-3 mt-1 flex-shrink-0 group-hover:text-yellow-500 dark:group-hover:text-yellow-300 transition-colors duration-300"
                    size={20}
                  />
                  <div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-tesseract-500 dark:group-hover:text-tesseract-300 transition-colors duration-300">
                      IT & Technical Recruitment
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Specialized recruitment for technical roles and IT professionals
                    </p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-3 mt-1 flex-shrink-0 group-hover:text-yellow-500 dark:group-hover:text-yellow-300 transition-colors duration-300"
                    size={20}
                  />
                  <div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-tesseract-500 dark:group-hover:text-tesseract-300 transition-colors duration-300">
                      Digital & Technology Specialists
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Recruitment for digital transformation and emerging tech roles
                    </p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-3 mt-1 flex-shrink-0 group-hover:text-yellow-500 dark:group-hover:text-yellow-300 transition-colors duration-300"
                    size={20}
                  />
                  <div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-tesseract-500 dark:group-hover:text-tesseract-300 transition-colors duration-300">
                      Contract & Interim Staffing
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Flexible staffing solutions for project-based needs
                    </p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-3 mt-1 flex-shrink-0 group-hover:text-yellow-500 dark:group-hover:text-yellow-300 transition-colors duration-300"
                    size={20}
                  />
                  <div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-tesseract-500 dark:group-hover:text-tesseract-300 transition-colors duration-300">
                      Talent Assessment & Selection
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Comprehensive evaluation of candidates' skills and cultural fit
                    </p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-3 mt-1 flex-shrink-0 group-hover:text-yellow-500 dark:group-hover:text-yellow-300 transition-colors duration-300"
                    size={20}
                  />
                  <div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-tesseract-500 dark:group-hover:text-tesseract-300 transition-colors duration-300">
                      Employer Branding & Attraction
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Strategies to enhance your employer brand and attract top talent
                    </p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-3 mt-1 flex-shrink-0 group-hover:text-yellow-500 dark:group-hover:text-yellow-300 transition-colors duration-300"
                    size={20}
                  />
                  <div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-tesseract-500 dark:group-hover:text-tesseract-300 transition-colors duration-300">
                      Onboarding & Retention Support
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Ensure successful integration and long-term retention of new hires
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="currentColor" className="text-tesseract-500" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-tesseract-100 dark:bg-tesseract-900/40 text-tesseract-600 dark:text-tesseract-300 text-sm font-medium mb-4">
              Our Methodology
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Recruitment Approach
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A structured methodology to ensure successful talent acquisition with measurable outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600 hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300">
              <div className="w-14 h-14 bg-tesseract-100 dark:bg-tesseract-900/30 rounded-full flex items-center justify-center mb-6 text-tesseract-600 dark:text-tesseract-300">
                <span className="text-xl font-bold">01</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Understand & Define</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We work with you to understand your requirements, culture, and goals to define the ideal candidate
                profile.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Requirements analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Cultural assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Candidate profile creation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600 hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300">
              <div className="w-14 h-14 bg-tesseract-100 dark:bg-tesseract-900/30 rounded-full flex items-center justify-center mb-6 text-tesseract-600 dark:text-tesseract-300">
                <span className="text-xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Source & Screen</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We leverage our network and advanced sourcing techniques to identify and thoroughly assess candidates.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Targeted sourcing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Comprehensive screening</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Skills assessment</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600 hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300">
              <div className="w-14 h-14 bg-tesseract-100 dark:bg-tesseract-900/30 rounded-full flex items-center justify-center mb-6 text-tesseract-600 dark:text-tesseract-300">
                <span className="text-xl font-bold">03</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Present & Support</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We present only the most qualified candidates and support throughout the interview, offer, and
                onboarding process.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Candidate presentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Interview coordination</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Offer management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-tesseract-100 dark:bg-tesseract-900/40 text-tesseract-600 dark:text-tesseract-300 text-sm font-medium mb-4">
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Recruitment Success Stories
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See how our recruitment solutions have helped organizations build high-performing teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300 group">
              <div className="bg-tesseract-100 dark:bg-tesseract-900/30 text-tesseract-600 dark:text-tesseract-400 w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:bg-tesseract-500 group-hover:text-white dark:group-hover:bg-tesseract-500 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-tesseract-500 dark:group-hover:text-tesseract-300 transition-colors duration-300">
                Tech Startup
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Helped a fast-growing tech startup build their engineering team, recruiting 15 specialized developers in
                just 3 months, enabling rapid product development.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">ROI: 280%</span>
                <span className="text-gray-500 dark:text-gray-400">Timeline: 3 months</span>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href="/case-studies/tech-startup-recruitment"
                  className="inline-flex items-center text-tesseract-600 hover:text-tesseract-700 dark:text-tesseract-400 dark:hover:text-tesseract-300 font-medium group-hover:translate-x-1 transition-transform duration-300"
                >
                  Read case study <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300 group">
              <div className="bg-tesseract-100 dark:bg-tesseract-900/30 text-tesseract-600 dark:text-tesseract-400 w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:bg-tesseract-500 group-hover:text-white dark:group-hover:bg-tesseract-500 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-tesseract-500 dark:group-hover:text-tesseract-300 transition-colors duration-300">
                Enterprise Organization
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Recruited a complete data science team for a large enterprise, enabling them to accelerate their AI
                initiatives and achieve significant business outcomes.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">ROI: 320%</span>
                <span className="text-gray-500 dark:text-gray-400">Timeline: 6 months</span>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href="/case-studies/enterprise-data-science-team"
                  className="inline-flex items-center text-tesseract-600 hover:text-tesseract-700 dark:text-tesseract-400 dark:hover:text-tesseract-300 font-medium group-hover:translate-x-1 transition-transform duration-300"
                >
                  Read case study <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300 group">
              <div className="bg-tesseract-100 dark:bg-tesseract-900/30 text-tesseract-600 dark:text-tesseract-400 w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:bg-tesseract-500 group-hover:text-white dark:group-hover:bg-tesseract-500 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-tesseract-500 dark:group-hover:text-tesseract-300 transition-colors duration-300">
                Digital Agency
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Helped a digital agency scale their UX/UI design team to support their expanding client base and project
                portfolio, resulting in 40% business growth.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">ROI: 250%</span>
                <span className="text-gray-500 dark:text-gray-400">Timeline: 4 months</span>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href="/case-studies/digital-agency-design-team"
                  className="inline-flex items-center text-tesseract-600 hover:text-tesseract-700 dark:text-tesseract-400 dark:hover:text-tesseract-300 font-medium group-hover:translate-x-1 transition-transform duration-300"
                >
                  Read case study <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Gradient Background */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-tesseract-600 to-tesseract-400 dark:from-tesseract-800 dark:to-tesseract-600"></div>
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid-cta" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid-cta)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Your Dream Team?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Contact us today to discuss how our recruitment solutions can help you find and attract top talent.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-white text-tesseract-600 hover:bg-gray-100 dark:bg-yellow-300 dark:text-gray-900 dark:hover:bg-yellow-200 font-medium px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
                Start Recruiting Today
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 font-medium px-8 py-3 rounded-lg transition-all duration-300 text-lg"
              >
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
