import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Users, TrendingUp } from "lucide-react"
import CTASection from "@/components/cta-section"

export default function RetailDigitalTransformationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="bg-tesseract-500 py-20">
        <div className="container mx-auto px-4">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-tesseract-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Case Studies
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-medium text-white bg-tesseract-600 px-3 py-1 rounded-full">Retail</span>
              <span className="text-tesseract-100">•</span>
              <span className="text-tesseract-100">Global Retail Chain</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Digital Transformation for Retail Chain</h1>
            <p className="text-xl text-tesseract-100 max-w-3xl">
              How we transformed a traditional retail chain into a digital-first organization, resulting in a 40%
              increase in online sales and improved customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
              <p className="text-gray-300 mb-6">
                A leading retail chain with over 200 stores nationwide was struggling to compete with digital-native
                competitors. Their legacy systems, outdated e-commerce platform, and disconnected customer experience
                were hindering growth and customer satisfaction.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-300">
                  <Calendar className="mr-2 h-5 w-5 text-blue-400" />
                  <span>12 months</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Users className="mr-2 h-5 w-5 text-blue-400" />
                  <span>15 team members</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="mr-2 h-5 w-5 text-blue-400" />
                  <span>2022-2023</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <TrendingUp className="mr-2 h-5 w-5 text-blue-400" />
                  <span>40% sales increase</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/ecommerce-website-design.png"
                alt="Retail Digital Transformation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">The Challenge</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Legacy Systems</h3>
                <p className="text-gray-300">
                  Outdated inventory management and POS systems that couldn't integrate with modern e-commerce
                  platforms.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Poor Online Experience</h3>
                <p className="text-gray-300">
                  Slow, unresponsive website with limited functionality and poor mobile experience.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Disconnected Channels</h3>
                <p className="text-gray-300">
                  No integration between online and offline channels, leading to inconsistent customer experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Solution</h2>
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Modern E-commerce Platform</h3>
                  <p className="text-gray-300 mb-4">
                    Implemented a headless commerce architecture using modern technologies to create a fast, responsive,
                    and scalable online shopping experience.
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Mobile-first responsive design</li>
                    <li>• Advanced search and filtering</li>
                    <li>• Personalized product recommendations</li>
                    <li>• Seamless checkout process</li>
                  </ul>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/ecommerce-platform-management.png"
                    alt="E-commerce Platform"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image src="/enterprise-crm-dashboard.png" alt="Unified Systems" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Unified Systems Integration</h3>
                  <p className="text-gray-300 mb-4">
                    Connected all systems through a centralized data platform, enabling real-time inventory management
                    and customer insights.
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Real-time inventory synchronization</li>
                    <li>• Unified customer profiles</li>
                    <li>• Integrated loyalty program</li>
                    <li>• Cross-channel analytics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Results & Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">40%</div>
                <div className="text-white font-semibold mb-1">Increase in Online Sales</div>
                <div className="text-gray-300 text-sm">Within 6 months of launch</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">65%</div>
                <div className="text-white font-semibold mb-1">Faster Page Load Times</div>
                <div className="text-gray-300 text-sm">Improved user experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">25%</div>
                <div className="text-white font-semibold mb-1">Reduction in Cart Abandonment</div>
                <div className="text-gray-300 text-sm">Streamlined checkout process</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">90%</div>
                <div className="text-white font-semibold mb-1">Customer Satisfaction</div>
                <div className="text-gray-300 text-sm">Post-implementation survey</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Technologies Used</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["React", "Node.js", "MongoDB", "AWS", "Shopify Plus", "GraphQL", "Redis", "Docker"].map((tech) => (
                <div key={tech} className="bg-gray-700 p-4 rounded-lg text-center">
                  <div className="text-white font-semibold">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Retail Business?"
        description="Let us help you create a digital-first retail experience that drives growth and customer satisfaction."
        buttonText="Start Your Transformation"
        buttonLink="/contact"
      />
    </div>
  )
}
