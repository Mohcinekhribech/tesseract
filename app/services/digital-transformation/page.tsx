import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Zap, BarChart3, RefreshCw, Globe, Layers, Users } from "lucide-react"

export default function DigitalTransformationPage() {
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
                <Zap size={14} className="mr-2" /> Transforming Businesses Digitally
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Digital <span className="text-yellow-300 dark:text-yellow-200">Transformation</span> for the Modern
                Enterprise
              </h1>
              <p className="text-xl text-white/80 dark:text-white/90 mb-8 leading-relaxed">
                End-to-end solutions to modernize your business, enhance customer experiences, and drive innovation in
                the digital age.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-white text-tesseract-600 hover:bg-gray-100 dark:bg-yellow-300 dark:text-gray-900 dark:hover:bg-yellow-200 font-medium px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Start Your Transformation
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
              <Image
                src="/digital-transformation-hero.png"
                alt="Digital Transformation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300">
              <div className="text-3xl font-bold text-tesseract-500 dark:text-tesseract-300 mb-1">85%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Increase in Operational Efficiency</div>
            </div>
            <div className="text-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300">
              <div className="text-3xl font-bold text-tesseract-500 dark:text-tesseract-300 mb-1">200+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Successful Transformations</div>
            </div>
            <div className="text-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300">
              <div className="text-3xl font-bold text-tesseract-500 dark:text-tesseract-300 mb-1">40%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Average Cost Reduction</div>
            </div>
            <div className="text-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300">
              <div className="text-3xl font-bold text-tesseract-500 dark:text-tesseract-300 mb-1">3x</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Faster Time to Market</div>
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
                Reimagine Your Business for the Digital Era
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Digital transformation is more than just implementing new technologies—it's about reimagining your
                business processes, customer experiences, and operational models to thrive in the digital age.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Our comprehensive digital transformation services help you navigate this complex journey, from strategy
                development to implementation and beyond. We work closely with your team to understand your unique
                challenges and opportunities, and develop tailored solutions that deliver measurable results.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tesseract-100 dark:bg-tesseract-900/30 flex items-center justify-center mr-4">
                    <BarChart3 className="w-5 h-5 text-tesseract-600 dark:text-tesseract-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Data-Driven</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Insights that drive strategic decisions</p>
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
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Global Expertise</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Industry-leading knowledge</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tesseract-100 dark:bg-tesseract-900/30 flex items-center justify-center mr-4">
                    <Users className="w-5 h-5 text-tesseract-600 dark:text-tesseract-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">People-Focused</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Change management expertise</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Layers className="w-6 h-6 text-tesseract-500 dark:text-tesseract-400 mr-2" />
                Our Digital Transformation Services
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-3 mt-1 flex-shrink-0 group-hover:text-yellow-500 dark:group-hover:text-yellow-300 transition-colors duration-300"
                    size={20}
                  />
                  <div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-tesseract-500 dark:group-hover:text-tesseract-300 transition-colors duration-300">
                      Digital Strategy & Roadmap Development
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Comprehensive planning for your digital journey
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
                      Business Process Reengineering
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Optimize workflows for maximum efficiency
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
                      Legacy System Modernization
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Update outdated systems with modern technology
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
                      Cloud Migration & Adoption
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Seamless transition to cloud infrastructure
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
                      Digital Customer Experience Design
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Create engaging digital touchpoints</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-3 mt-1 flex-shrink-0 group-hover:text-yellow-500 dark:group-hover:text-yellow-300 transition-colors duration-300"
                    size={20}
                  />
                  <div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-tesseract-500 dark:group-hover:text-tesseract-300 transition-colors duration-300">
                      Data Strategy & Analytics
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Unlock insights from your data assets
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
                      Change Management & Adoption
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Ensure successful implementation and user adoption
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
              Our Transformation Approach
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A structured methodology to ensure successful digital transformation with measurable outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600 hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300">
              <div className="w-14 h-14 bg-tesseract-100 dark:bg-tesseract-900/30 rounded-full flex items-center justify-center mb-6 text-tesseract-600 dark:text-tesseract-300">
                <span className="text-xl font-bold">01</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Envision</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We work with you to define your digital vision, assess your current state, and identify opportunities
                for transformation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Digital maturity assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Opportunity identification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Vision & strategy development</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600 hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300">
              <div className="w-14 h-14 bg-tesseract-100 dark:bg-tesseract-900/30 rounded-full flex items-center justify-center mb-6 text-tesseract-600 dark:text-tesseract-300">
                <span className="text-xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Design</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We design your future state, including business processes, technology architecture, and organizational
                changes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Process redesign</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Technology architecture</span>
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Deliver</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We implement the transformation initiatives, manage change, and measure results to ensure success.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Implementation & integration</span>
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
              Transformation Success Stories
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See how our digital transformation services have helped organizations achieve their business goals
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
                Retail Chain
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Transformed customer experience with omnichannel capabilities, resulting in 35% increase in online sales
                and improved customer satisfaction.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">ROI: 280%</span>
                <span className="text-gray-500 dark:text-gray-400">Timeline: 8 months</span>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href="/case-studies/retail-digital-transformation"
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
                Healthcare Provider
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Modernized legacy systems and implemented digital patient engagement tools, reducing administrative
                costs by 25% and improving patient satisfaction.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">ROI: 320%</span>
                <span className="text-gray-500 dark:text-gray-400">Timeline: 12 months</span>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href="/case-studies/healthcare-modernization"
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
                Manufacturing Company
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Implemented IoT and data analytics solutions to enable predictive maintenance, reducing downtime by 30%
                and maintenance costs by 25%.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">ROI: 250%</span>
                <span className="text-gray-500 dark:text-gray-400">Timeline: 10 months</span>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href="/case-studies/manufacturing-iot-implementation"
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
            Ready to Start Your Digital Transformation Journey?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Contact us today to discuss how our digital transformation services can help you achieve your business
            goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-white text-tesseract-600 hover:bg-gray-100 dark:bg-yellow-300 dark:text-gray-900 dark:hover:bg-yellow-200 font-medium px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
                Get Started Today
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
