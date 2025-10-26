import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Zap, BarChart3, RefreshCw, Globe, Layers, Users } from "lucide-react"

export default function SoftwareDevelopmentPage() {
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
                <Zap size={14} className="mr-2" /> Custom Software Solutions
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Software <span className="text-yellow-300 dark:text-yellow-200">Development</span> for Modern Businesses
              </h1>
              <p className="text-xl text-white/80 dark:text-white/90 mb-8 leading-relaxed">
                Custom software solutions tailored to your unique business requirements, built with cutting-edge
                technologies and best practices.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-white text-tesseract-600 hover:bg-gray-100 dark:bg-yellow-300 dark:text-gray-900 dark:hover:bg-yellow-200 font-medium px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Discuss Your Project
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
              <Image src="/software-development-hero.png" alt="Software Development" fill className="object-cover" />
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
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300">
              <div className="text-3xl font-bold text-tesseract-500 dark:text-tesseract-300 mb-1">98%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300">
              <div className="text-3xl font-bold text-tesseract-500 dark:text-tesseract-300 mb-1">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Expert Developers</div>
            </div>
            <div className="text-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300">
              <div className="text-3xl font-bold text-tesseract-500 dark:text-tesseract-300 mb-1">12+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
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
                Custom Software Solutions for Your Business Needs
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                In today's rapidly evolving digital landscape, off-the-shelf software often falls short of addressing
                the unique challenges and requirements of your business. Our custom software development services
                provide tailored solutions that align perfectly with your specific needs, processes, and goals.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                With a team of experienced developers, architects, and UX/UI designers, we deliver high-quality,
                scalable, and secure software solutions that drive efficiency, innovation, and competitive advantage for
                your business.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tesseract-100 dark:bg-tesseract-900/30 flex items-center justify-center mr-4">
                    <BarChart3 className="w-5 h-5 text-tesseract-600 dark:text-tesseract-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Agile Development</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Iterative and flexible approach</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tesseract-100 dark:bg-tesseract-900/30 flex items-center justify-center mr-4">
                    <RefreshCw className="w-5 h-5 text-tesseract-600 dark:text-tesseract-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Continuous Delivery</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Regular updates and improvements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tesseract-100 dark:bg-tesseract-900/30 flex items-center justify-center mr-4">
                    <Globe className="w-5 h-5 text-tesseract-600 dark:text-tesseract-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Global Standards</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Best practices and methodologies</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tesseract-100 dark:bg-tesseract-900/30 flex items-center justify-center mr-4">
                    <Users className="w-5 h-5 text-tesseract-600 dark:text-tesseract-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">User-Centered</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Focus on user experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Layers className="w-6 h-6 text-tesseract-500 dark:text-tesseract-400 mr-2" />
                Our Software Development Services
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-3 mt-1 flex-shrink-0 group-hover:text-yellow-500 dark:group-hover:text-yellow-300 transition-colors duration-300"
                    size={20}
                  />
                  <div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-tesseract-500 dark:group-hover:text-tesseract-300 transition-colors duration-300">
                      Custom Application Development
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Tailored solutions for your specific business needs
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
                      Web Application Development
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Responsive and scalable web applications
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
                      Mobile Application Development
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Native and cross-platform mobile apps
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
                      Enterprise Software Solutions
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Comprehensive solutions for large organizations
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
                      API Development & Integration
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Connect systems and enable data exchange
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
                      DevOps & Continuous Integration
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Streamline development and deployment
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
              Our Development Process
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A structured approach to deliver high-quality software solutions with measurable outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600 hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300">
              <div className="w-14 h-14 bg-tesseract-100 dark:bg-tesseract-900/30 rounded-full flex items-center justify-center mb-6 text-tesseract-600 dark:text-tesseract-300">
                <span className="text-xl font-bold">01</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Discovery & Planning</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We work with you to understand your business needs, define requirements, and create a detailed project
                plan.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Requirements gathering</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Technical feasibility analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Project roadmap creation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600 hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300">
              <div className="w-14 h-14 bg-tesseract-100 dark:bg-tesseract-900/30 rounded-full flex items-center justify-center mb-6 text-tesseract-600 dark:text-tesseract-300">
                <span className="text-xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Design & Development</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We design intuitive interfaces and develop robust, scalable software using agile methodologies.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">UX/UI design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Agile development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Regular client reviews</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600 hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300">
              <div className="w-14 h-14 bg-tesseract-100 dark:bg-tesseract-900/30 rounded-full flex items-center justify-center mb-6 text-tesseract-600 dark:text-tesseract-300">
                <span className="text-xl font-bold">03</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Testing & Deployment</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We conduct thorough testing, deploy your solution, and provide ongoing support and maintenance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Comprehensive testing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Smooth deployment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-tesseract-500 dark:text-tesseract-400 mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Ongoing support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-tesseract-100 dark:bg-tesseract-900/40 text-tesseract-600 dark:text-tesseract-300 text-sm font-medium mb-4">
              Tech Stack
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Technologies We Use</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We leverage the latest technologies and frameworks to build robust, scalable, and secure software
              solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 group">
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
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-tesseract-500 dark:group-hover:text-tesseract-300 transition-colors duration-300">
                Frontend
              </h3>
              <ul className="space-y-2">
                {["React.js", "Angular", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS"].map((tech, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="text-tesseract-500 dark:text-tesseract-400 mr-2 flex-shrink-0" size={16} />
                    <span className="text-gray-600 dark:text-gray-300">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 group">
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
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-tesseract-500 dark:group-hover:text-tesseract-300 transition-colors duration-300">
                Backend
              </h3>
              <ul className="space-y-2">
                {["Node.js", "Python", "Java", ".NET", "PHP", "Ruby on Rails"].map((tech, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="text-tesseract-500 dark:text-tesseract-400 mr-2 flex-shrink-0" size={16} />
                    <span className="text-gray-600 dark:text-gray-300">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 group">
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
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-tesseract-500 dark:group-hover:text-tesseract-300 transition-colors duration-300">
                Mobile & Cloud
              </h3>
              <ul className="space-y-2">
                {["React Native", "Flutter", "AWS", "Azure", "Google Cloud", "Kubernetes"].map((tech, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="text-tesseract-500 dark:text-tesseract-400 mr-2 flex-shrink-0" size={16} />
                    <span className="text-gray-600 dark:text-gray-300">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-tesseract-100 dark:bg-tesseract-900/40 text-tesseract-600 dark:text-tesseract-300 text-sm font-medium mb-4">
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Client Success Stories
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See how our software development expertise has helped organizations achieve their business goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300 group">
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
                E-commerce Platform
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Developed a custom e-commerce platform that increased online sales by 45% and improved customer
                satisfaction.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">ROI: 250%</span>
                <span className="text-gray-500 dark:text-gray-400">Timeline: 6 months</span>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href="/case-studies/ecommerce-platform"
                  className="inline-flex items-center text-tesseract-600 hover:text-tesseract-700 dark:text-tesseract-400 dark:hover:text-tesseract-300 font-medium group-hover:translate-x-1 transition-transform duration-300"
                >
                  Read case study <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300 group">
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
                Healthcare Management System
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Built a comprehensive healthcare management system that streamlined operations and improved patient
                care.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">ROI: 320%</span>
                <span className="text-gray-500 dark:text-gray-400">Timeline: 9 months</span>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href="/case-studies/healthcare-management-system"
                  className="inline-flex items-center text-tesseract-600 hover:text-tesseract-700 dark:text-tesseract-400 dark:hover:text-tesseract-300 font-medium group-hover:translate-x-1 transition-transform duration-300"
                >
                  Read case study <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300 group">
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
                Supply Chain Management Solution
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Developed an integrated supply chain management solution that improved inventory accuracy by 30% and
                reduced operational costs.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">ROI: 280%</span>
                <span className="text-gray-500 dark:text-gray-400">Timeline: 8 months</span>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href="/case-studies/supply-chain-solution"
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
            Ready to Build Your Custom Software Solution?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Contact us today to discuss your project requirements and how our software development expertise can help
            your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-white text-tesseract-600 hover:bg-gray-100 dark:bg-yellow-300 dark:text-gray-900 dark:hover:bg-yellow-200 font-medium px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
                Start Your Project
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
