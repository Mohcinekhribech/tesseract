import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Zap, BarChart3, RefreshCw, Globe, Layers, Users } from "lucide-react"

export default function LogisticsSolutionsPage() {
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
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
            <Zap size={14} className="mr-2 text-yellow-400" />
            <span>Transforming Supply Chains with Technology</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced <span className="text-yellow-400">Logistics</span> Solutions for Industry Leaders
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Accelerate digital transformation in logistics with AI-powered solutions that enhance supply chain
                visibility, improve operational efficiency, and drive innovation
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button variant="gold" className="px-6 py-3 rounded-full">
                    Schedule a Consultation →
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
              <Image src="/logistics-solution.png" alt="Logistics Solutions" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300">
              <div className="text-3xl font-bold text-tesseract-500 dark:text-tesseract-300 mb-1">200+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Supply Chains Optimized</div>
            </div>
            <div className="text-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300">
              <div className="text-3xl font-bold text-tesseract-500 dark:text-tesseract-300 mb-1">30%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Average Cost Reduction</div>
            </div>
            <div className="text-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300">
              <div className="text-3xl font-bold text-tesseract-500 dark:text-tesseract-300 mb-1">95%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Supply Chain Visibility</div>
            </div>
            <div className="text-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300">
              <div className="text-3xl font-bold text-tesseract-500 dark:text-tesseract-300 mb-1">40%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Delivery Performance Improvement</div>
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
                Comprehensive Logistics Solutions for Business Excellence
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Logistics transformation is more than just technology—it's about partnering with you to develop
                actionable solutions that drive measurable business outcomes.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Our comprehensive logistics solutions help you navigate complex supply chain challenges, from digital
                transformation to implementation and beyond. We work closely with your team to understand your unique
                challenges and opportunities, and develop tailored solutions that deliver measurable results.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tesseract-100 dark:bg-tesseract-900/30 flex items-center justify-center mr-4">
                    <BarChart3 className="w-5 h-5 text-tesseract-600 dark:text-tesseract-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Data-Driven</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Insights that drive logistics decisions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tesseract-100 dark:bg-tesseract-900/30 flex items-center justify-center mr-4">
                    <RefreshCw className="w-5 h-5 text-tesseract-600 dark:text-tesseract-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Agile Process</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Adaptable to supply chain disruptions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tesseract-100 dark:bg-tesseract-900/30 flex items-center justify-center mr-4">
                    <Globe className="w-5 h-5 text-tesseract-600 dark:text-tesseract-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Global Expertise</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Logistics industry knowledge</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tesseract-100 dark:bg-tesseract-900/30 flex items-center justify-center mr-4">
                    <Users className="w-5 h-5 text-tesseract-600 dark:text-tesseract-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Customer-Focused</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">End-to-end visibility expertise</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Layers className="w-6 h-6 text-tesseract-500 dark:text-tesseract-400 mr-2" />
                Our Logistics Services
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-3 mt-1 flex-shrink-0 group-hover:text-yellow-500 dark:group-hover:text-yellow-300 transition-colors duration-300"
                    size={20}
                  />
                  <div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-tesseract-500 dark:group-hover:text-tesseract-300 transition-colors duration-300">
                      Supply Chain Visibility
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      End-to-end visibility solutions for real-time insights
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
                      Transportation Optimization
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      AI-powered route and fleet optimization
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
                      Inventory Management
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Optimize inventory levels and reduce costs
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
                      Warehouse Management
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Digital solutions for warehouse optimization
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
                      Supply Chain Risk Management
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Identify, assess, and mitigate supply chain risks
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
                      Logistics Data Analytics
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Unlock insights from your logistics data assets
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
                      Sustainable Supply Chain
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Build sustainable supply chains with reduced environmental impact
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
              Our Logistics Services Approach
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A structured methodology to ensure successful logistics transformation with measurable outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600 hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300">
              <div className="w-14 h-14 bg-tesseract-100 dark:bg-tesseract-900/30 rounded-full flex items-center justify-center mb-6 text-tesseract-600 dark:text-tesseract-300">
                <span className="text-xl font-bold">01</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Assessment</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We work with you to assess your current logistics systems, identify challenges, and uncover
                opportunities for improvement.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Process analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Technology assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Opportunity identification</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600 hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300">
              <div className="w-14 h-14 bg-tesseract-100 dark:bg-tesseract-900/30 rounded-full flex items-center justify-center mb-6 text-tesseract-600 dark:text-tesseract-300">
                <span className="text-xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Strategy Development</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We collaborate with your team to develop a tailored logistics strategy that aligns with your business
                objectives and addresses your unique challenges.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Strategic planning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Solution design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Change management planning</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600 hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300">
              <div className="w-14 h-14 bg-tesseract-100 dark:bg-tesseract-900/30 rounded-full flex items-center justify-center mb-6 text-tesseract-600 dark:text-tesseract-300">
                <span className="text-xl font-bold">03</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Implementation & Optimization
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We support you throughout the implementation process, providing guidance, monitoring progress, and
                making adjustments as needed.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Implementation support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Change enablement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Continuous improvement</span>
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
              Logistics Success Stories
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See how our logistics services have helped organizations achieve their business goals
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-tesseract-500 dark:group-hover:text-tesseract-300 transition-colors duration-300">
                Global Manufacturing Company
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Implemented a supply chain visibility platform that reduced lead times by 25% and improved on-time
                delivery performance for a global manufacturing company.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">ROI: 320%</span>
                <span className="text-gray-500 dark:text-gray-400">Timeline: 6 months</span>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href="/case-studies/logistics-supply-chain-visibility"
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-tesseract-500 dark:group-hover:text-tesseract-300 transition-colors duration-300">
                Logistics Service Provider
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Deployed AI-based route optimization solution that reduced transportation costs by 18% and improved
                delivery performance for a logistics service provider.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">ROI: 215%</span>
                <span className="text-gray-500 dark:text-gray-400">Timeline: 4 months</span>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href="/case-studies/logistics-transportation-optimization"
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
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-tesseract-500 dark:group-hover:text-tesseract-300 transition-colors duration-300">
                E-Commerce Retailer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Implemented warehouse automation solution that increased throughput by 40% and reduced order fulfillment
                time by 30% for an e-commerce retailer.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">ROI: 280%</span>
                <span className="text-gray-500 dark:text-gray-400">Timeline: 8 months</span>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href="/case-studies/logistics-warehouse-automation"
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Logistics & Supply Chain Operations?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Contact us today to discuss how our logistics solutions can help you improve efficiency, reduce costs, and
            drive innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-white text-tesseract-600 hover:bg-gray-100 dark:bg-yellow-300 dark:text-gray-900 dark:hover:bg-yellow-200 font-medium px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
                Schedule a Consultation
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
