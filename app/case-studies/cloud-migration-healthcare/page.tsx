import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Users, TrendingUp, Cloud, Shield, Zap } from "lucide-react"
import CTASection from "@/components/cta-section"

export default function CloudMigrationHealthcarePage() {
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
              <span className="text-sm font-medium text-white bg-tesseract-600 px-3 py-1 rounded-full">Healthcare</span>
              <span className="text-tesseract-100">•</span>
              <span className="text-tesseract-100">Regional Healthcare Network</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Cloud Migration for Healthcare Provider</h1>
            <p className="text-xl text-tesseract-100 max-w-3xl">
              How we migrated a regional healthcare network to the cloud, improving data security, scalability, and
              operational efficiency while ensuring HIPAA compliance.
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
                A regional healthcare network with 15 hospitals and 50+ clinics needed to modernize their IT
                infrastructure. Their on-premises systems were limiting scalability, increasing costs, and creating
                security vulnerabilities.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-300">
                  <Calendar className="mr-2 h-5 w-5 text-blue-400" />
                  <span>18 months</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Users className="mr-2 h-5 w-5 text-blue-400" />
                  <span>20 specialists</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="mr-2 h-5 w-5 text-blue-400" />
                  <span>2022-2023</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <TrendingUp className="mr-2 h-5 w-5 text-blue-400" />
                  <span>30% cost reduction</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/healthcare-portal.png" alt="Healthcare Cloud Migration" fill className="object-cover" />
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
                <Cloud className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Legacy Infrastructure</h3>
                <p className="text-gray-300">
                  Aging on-premises servers causing frequent downtime and limiting system performance.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <Shield className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">HIPAA Compliance</h3>
                <p className="text-gray-300">
                  Strict regulatory requirements for patient data protection and privacy compliance.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <Zap className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Scalability Issues</h3>
                <p className="text-gray-300">
                  Inability to scale resources during peak demand periods and emergency situations.
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
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Cloud Solution</h2>
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">HIPAA-Compliant Cloud Architecture</h3>
                  <p className="text-gray-300 mb-4">
                    Designed and implemented a secure, scalable cloud infrastructure that meets all HIPAA requirements
                    while providing enhanced performance and reliability.
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• End-to-end encryption</li>
                    <li>• Multi-factor authentication</li>
                    <li>• Automated backup and disaster recovery</li>
                    <li>• Audit logging and monitoring</li>
                  </ul>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image src="/cloud-transformation-hero.png" alt="Cloud Architecture" fill className="object-cover" />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image src="/healthcare-solutions.png" alt="Healthcare Systems" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Seamless Migration Strategy</h3>
                  <p className="text-gray-300 mb-4">
                    Executed a phased migration approach to minimize downtime and ensure continuous patient care
                    throughout the transition process.
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Zero-downtime migration</li>
                    <li>• Data integrity validation</li>
                    <li>• Staff training and support</li>
                    <li>• Performance optimization</li>
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
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Transformative Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-white font-semibold mb-1">System Uptime</div>
                <div className="text-gray-300 text-sm">Improved reliability</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">30%</div>
                <div className="text-white font-semibold mb-1">Cost Reduction</div>
                <div className="text-gray-300 text-sm">Lower operational costs</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">50%</div>
                <div className="text-white font-semibold mb-1">Faster Data Access</div>
                <div className="text-gray-300 text-sm">Improved performance</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-white font-semibold mb-1">HIPAA Compliance</div>
                <div className="text-gray-300 text-sm">Full regulatory compliance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Technologies & Platforms</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["AWS", "Microsoft Azure", "Kubernetes", "Terraform", "Docker", "PostgreSQL", "Redis", "Nginx"].map(
                (tech) => (
                  <div key={tech} className="bg-gray-700 p-4 rounded-lg text-center">
                    <div className="text-white font-semibold">{tech}</div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Modernize Your Healthcare Infrastructure?"
        description="Let us help you migrate to the cloud while maintaining the highest standards of security and compliance."
        buttonText="Start Your Migration"
        buttonLink="/contact"
      />
    </div>
  )
}
