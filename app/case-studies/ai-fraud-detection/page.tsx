import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Users, TrendingUp, Shield, Brain, Zap } from "lucide-react"
import CTASection from "@/components/cta-section"

export default function AIFraudDetectionPage() {
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
              <span className="text-sm font-medium text-white bg-tesseract-600 px-3 py-1 rounded-full">
                Financial Services
              </span>
              <span className="text-tesseract-100">•</span>
              <span className="text-tesseract-100">Leading Financial Institution</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">AI-Powered Fraud Detection System</h1>
            <p className="text-xl text-tesseract-100 max-w-3xl">
              How we implemented an advanced AI-powered fraud detection system that reduced fraud losses by 35% and
              false positives by 40%.
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
                A major financial institution was experiencing significant losses due to fraudulent transactions and
                customer complaints about legitimate transactions being blocked. They needed an intelligent system that
                could accurately detect fraud while minimizing false positives.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-300">
                  <Calendar className="mr-2 h-5 w-5 text-blue-400" />
                  <span>8 months</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Users className="mr-2 h-5 w-5 text-blue-400" />
                  <span>12 specialists</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="mr-2 h-5 w-5 text-blue-400" />
                  <span>2023</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <TrendingUp className="mr-2 h-5 w-5 text-blue-400" />
                  <span>35% fraud reduction</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/financial-dashboard.png" alt="AI Fraud Detection Dashboard" fill className="object-cover" />
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
                <Shield className="h-12 w-12 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Rising Fraud Losses</h3>
                <p className="text-gray-300">
                  Increasing sophisticated fraud attacks resulting in millions in losses annually.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <Brain className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">High False Positives</h3>
                <p className="text-gray-300">
                  Legacy rule-based system blocking 60% of legitimate transactions, frustrating customers.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <Zap className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Real-time Processing</h3>
                <p className="text-gray-300">
                  Need for instant fraud detection without impacting transaction processing speed.
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
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our AI Solution</h2>
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Machine Learning Models</h3>
                  <p className="text-gray-300 mb-4">
                    Developed ensemble machine learning models using advanced algorithms to analyze transaction patterns
                    and detect anomalies in real-time.
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Gradient boosting algorithms</li>
                    <li>• Neural network architectures</li>
                    <li>• Behavioral pattern analysis</li>
                    <li>• Real-time risk scoring</li>
                  </ul>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image src="/medical-imaging-ai.png" alt="AI Models" fill className="object-cover" />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image src="/data-analytics-hero.png" alt="Real-time Analytics" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Real-time Analytics Platform</h3>
                  <p className="text-gray-300 mb-4">
                    Built a high-performance analytics platform capable of processing millions of transactions per
                    second with sub-millisecond response times.
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Stream processing architecture</li>
                    <li>• Feature engineering pipeline</li>
                    <li>• Model deployment automation</li>
                    <li>• Continuous learning system</li>
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
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Impressive Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">35%</div>
                <div className="text-white font-semibold mb-1">Reduction in Fraud Losses</div>
                <div className="text-gray-300 text-sm">Saved millions annually</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">40%</div>
                <div className="text-white font-semibold mb-1">Fewer False Positives</div>
                <div className="text-gray-300 text-sm">Improved customer experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-white font-semibold mb-1">System Uptime</div>
                <div className="text-gray-300 text-sm">Reliable 24/7 operation</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">50ms</div>
                <div className="text-white font-semibold mb-1">Average Response Time</div>
                <div className="text-gray-300 text-sm">Real-time processing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Technologies & Tools</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["Python", "TensorFlow", "Apache Kafka", "Redis", "PostgreSQL", "Docker", "Kubernetes", "AWS"].map(
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
        title="Protect Your Business with AI-Powered Security"
        description="Let us help you implement advanced AI solutions to detect and prevent fraud while maintaining excellent customer experience."
        buttonText="Secure Your Business"
        buttonLink="/contact"
      />
    </div>
  )
}
