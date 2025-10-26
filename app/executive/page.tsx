"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, TrendingUp, Shield, Zap, Users } from "lucide-react"
import Link from "next/link"

export default function ExecutivePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tesseract-600/20 to-purple-600/20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="text-tesseract-400 block">Strategic Technology</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Drive growth, reduce costs, and gain competitive advantage through proven digital transformation
              strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-tesseract-600 hover:bg-tesseract-700 text-white px-8 py-4 text-lg">
                  Schedule Executive Briefing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-tesseract-400 text-tesseract-400 hover:bg-tesseract-400 hover:text-gray-900 px-8 py-4 text-lg"
              >
                View ROI Calculator
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Why C-Suite Leaders Choose TESSERACT</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Measurable business outcomes through strategic technology implementation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 hover:border-tesseract-400 transition-colors">
              <CardContent className="p-8 text-center">
                <TrendingUp className="h-12 w-12 text-tesseract-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Average 40% ROI</h3>
                <p className="text-gray-300">
                  Our clients see measurable returns within 12 months through operational efficiency and revenue growth
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-tesseract-400 transition-colors">
              <CardContent className="p-8 text-center">
                <Shield className="h-12 w-12 text-tesseract-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Risk Mitigation</h3>
                <p className="text-gray-300">
                  Proven methodologies and enterprise-grade security ensure successful, low-risk transformations
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-tesseract-400 transition-colors">
              <CardContent className="p-8 text-center">
                <Zap className="h-12 w-12 text-tesseract-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Faster Time-to-Market</h3>
                <p className="text-gray-300">
                  Accelerate innovation and reduce development cycles by up to 60% with our proven frameworks
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Measurable Business Impact</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-tesseract-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Revenue Growth</h3>
                    <p className="text-gray-300">
                      Average 25% increase in revenue through digital channels and operational efficiency
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-tesseract-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Cost Reduction</h3>
                    <p className="text-gray-300">
                      Typical 30% reduction in operational costs through automation and process optimization
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-tesseract-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Market Advantage</h3>
                    <p className="text-gray-300">
                      Gain 6-12 month competitive advantage through strategic technology adoption
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/financial-dashboard.png"
                alt="Business Impact Dashboard"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-300">Join 500+ companies that have transformed with TESSERACT</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-70">
            <div className="flex justify-center">
              <Image
                src="/client-logo-microsoft.jpg"
                alt="Microsoft"
                width={120}
                height={60}
                className="filter grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/client-logo-google.png"
                alt="Google"
                width={120}
                height={60}
                className="filter grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/client-logo-amazon.png"
                alt="Amazon"
                width={120}
                height={60}
                className="filter grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/client-logo-ibm.png"
                alt="IBM"
                width={120}
                height={60}
                className="filter grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/client-logo-tesla.png"
                alt="Tesla"
                width={120}
                height={60}
                className="filter grayscale hover:grayscale-0 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Executive Testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl lg:text-3xl font-light text-white mb-8 leading-relaxed">
              "TESSERACT didn't just deliver technology solutions – they transformed our entire business model. The ROI
              was evident within 6 months, and we've maintained our competitive edge ever since."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <Image
                src="/testimonials/sarah-johnson.png"
                alt="Sarah Johnson"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div className="text-left">
                <p className="text-white font-semibold">Sarah Johnson</p>
                <p className="text-tesseract-400">CEO, TechCorp Industries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Services Overview */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Strategic Technology Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions designed for enterprise-scale transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-800 border-gray-700 hover:border-tesseract-400 transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 bg-tesseract-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-tesseract-600/30 transition-colors">
                  <Users className="h-8 w-8 text-tesseract-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Digital Strategy</h3>
                <p className="text-gray-300 text-sm">Executive-level strategic planning and roadmap development</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-tesseract-400 transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 bg-tesseract-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-tesseract-600/30 transition-colors">
                  <Zap className="h-8 w-8 text-tesseract-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">AI Integration</h3>
                <p className="text-gray-300 text-sm">Enterprise AI solutions for competitive advantage</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-tesseract-400 transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 bg-tesseract-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-tesseract-600/30 transition-colors">
                  <Shield className="h-8 w-8 text-tesseract-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Cloud Transformation</h3>
                <p className="text-gray-300 text-sm">Secure, scalable cloud migration and optimization</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-tesseract-400 transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 bg-tesseract-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-tesseract-600/30 transition-colors">
                  <TrendingUp className="h-8 w-8 text-tesseract-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Data Analytics</h3>
                <p className="text-gray-300 text-sm">Executive dashboards and predictive insights</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Executive CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a confidential executive briefing to discuss your strategic technology initiatives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-tesseract-600 hover:bg-tesseract-700 text-white px-8 py-4 text-lg">
                  Schedule Executive Meeting
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-tesseract-400 text-tesseract-400 hover:bg-tesseract-400 hover:text-gray-900 px-8 py-4 text-lg"
              >
                Download Executive Brief
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Confidential consultation • No sales pressure • Strategic insights only
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
