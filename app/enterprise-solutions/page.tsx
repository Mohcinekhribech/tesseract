"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Shield, Zap, BarChart3 } from "lucide-react"
import Image from "next/image"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function EnterpriseSolutionsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('/services-bg-pattern.png')] bg-repeat"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Enterprise Solutions for <span className="text-yellow-400">Tomorrow's Challenges</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Scalable, secure, and reliable solutions designed to transform your enterprise operations and drive
              sustainable growth
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 text-lg rounded-full",
                )}
                onClick={() => window.scrollTo(0, 0)}
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Benefits Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Enterprise-Grade Solutions</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Our enterprise solutions are built to address the complex challenges faced by large organizations,
              providing the foundation for digital transformation and sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Enterprise Security</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Comprehensive security measures that protect your data, applications, and infrastructure from evolving
                threats while ensuring compliance with industry regulations.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Scalable Architecture</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Flexible and scalable solutions that grow with your business, handling increased workloads and user
                demands without compromising performance.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Business Intelligence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Advanced analytics and reporting capabilities that transform your data into actionable insights,
                enabling informed decision-making across your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Framework Section */}
      <section id="enterprise-framework" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Our Enterprise Framework</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              A comprehensive approach to enterprise transformation that ensures successful outcomes at every stage
            </p>
          </div>

          <div className="relative">
            {/* Vertical line connecting steps */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-gray-400 transform -translate-x-1/2 hidden md:block"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">1. Assessment & Discovery</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We begin by thoroughly understanding your business objectives, current infrastructure, and challenges.
                  Our experts conduct a comprehensive assessment to identify opportunities for improvement and
                  transformation.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center justify-end">
                    <span className="text-gray-700 dark:text-gray-300">Business process analysis</span>
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end">
                    <span className="text-gray-700 dark:text-gray-300">Technology stack evaluation</span>
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end">
                    <span className="text-gray-700 dark:text-gray-300">
                      Gap analysis and opportunity identification
                    </span>
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 ml-2" />
                  </li>
                </ul>
              </div>
              <div className="md:w-12 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-xl z-20">
                  1
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 md:text-left">
                <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden relative h-64">
                  <Image
                    src="/images/assessment-discovery.jpg"
                    alt="Assessment & Discovery"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right order-1 md:order-2">
                <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden relative h-64">
                  <Image
                    src="/images/strategy-architecture.jpg"
                    alt="Strategy & Architecture"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-12 flex justify-center order-2 md:order-1">
                <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-xl z-20">
                  2
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 md:text-left order-3">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">2. Strategy & Architecture</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Based on our assessment, we develop a comprehensive strategy and architecture that aligns with your
                  business goals. This includes a detailed roadmap for implementation and a scalable architecture
                  design.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">Enterprise architecture design</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Technology selection and integration planning
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">Implementation roadmap development</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  3. Implementation & Integration
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our expert team executes the implementation plan, deploying solutions that integrate seamlessly with
                  your existing systems. We follow industry best practices to ensure minimal disruption to your
                  operations.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center justify-end">
                    <span className="text-gray-700 dark:text-gray-300">Phased implementation approach</span>
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end">
                    <span className="text-gray-700 dark:text-gray-300">System integration and data migration</span>
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end">
                    <span className="text-gray-700 dark:text-gray-300">Quality assurance and testing</span>
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 ml-2" />
                  </li>
                </ul>
              </div>
              <div className="md:w-12 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-xl z-20">
                  3
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 md:text-left">
                <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden relative h-64">
                  <Image
                    src="/images/implementation-integration.jpg"
                    alt="Implementation & Integration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative z-10 flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right order-1 md:order-2">
                <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden relative h-64">
                  <Image
                    src="/images/optimization-maintenance.jpg"
                    alt="Optimization & Maintenance"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-12 flex justify-center order-2 md:order-1">
                <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-xl z-20">
                  4
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 md:text-left order-3">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">4. Optimization & Maintenance</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We provide ongoing support and continuous optimization to ensure your enterprise solutions deliver
                  maximum value. Our team monitors performance, addresses issues, and implements enhancements as needed.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">Performance monitoring and optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">Ongoing maintenance and support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">Continuous improvement and innovation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Solutions Showcase */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Enterprise Solutions Portfolio</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Explore our comprehensive suite of enterprise solutions designed to address your most complex business
              challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <Image
                  src="/images/erp-planning.jpg"
                  alt="Enterprise Resource Planning - Process workflow planning board"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">Enterprise Resource Planning</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Integrated ERP solutions that streamline operations, enhance visibility, and improve decision-making
                  across your organization.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Financial management and reporting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Supply chain and inventory optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Human resources and workforce management</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/diggity-marketing-s8HyIEe7lF0-unsplash.jpg-r7FskHF0UQ0lGn5paILMe87GGj6W7r.jpeg"
                  alt="Customer Relationship Management - Team collaborating on strategy"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">Customer Relationship Management</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Enterprise CRM solutions that enhance customer experiences, drive sales, and build lasting
                  relationships.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">360-degree customer view and insights</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Sales automation and pipeline management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Marketing automation and campaign management
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <Image
                  src="/images/data-analytics.jpg"
                  alt="Data Analytics & Business Intelligence - Charts, graphs and analytics visualizations"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">Data Analytics & Business Intelligence</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Advanced analytics solutions that transform your data into actionable insights, enabling informed
                  decision-making.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Data warehousing and integration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Predictive analytics and forecasting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Interactive dashboards and reporting</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/data%20analytics.jpg-KcFWyVlnSTTouPHFHJjkHowVMm0MD9.jpeg"
                  alt="Cloud Infrastructure & Services - Data analytics dashboard with blue charts and graphs"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">Cloud Infrastructure & Services</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Secure, scalable cloud solutions that provide the flexibility and reliability your enterprise needs.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Cloud migration and modernization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Hybrid and multi-cloud architectures</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Cloud security and compliance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-us" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="p-8 md:p-12">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold mb-4">Schedule a Consultation</h2>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    Ready to transform your enterprise? Our experts are here to help you navigate the complexities of
                    digital transformation and build a solution tailored to your needs.
                  </p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <div className="rounded-lg overflow-hidden relative h-80">
                      <Image
                        src="/images/enterprise-consultation.jpg"
                        alt="Enterprise Consultation - Team of consultants discussing enterprise solutions"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="h-5 w-5 text-gray-900" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Personalized Assessment</h3>
                          <p className="text-gray-300">
                            Get a comprehensive evaluation of your current systems and processes, with tailored
                            recommendations for improvement.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="h-5 w-5 text-gray-900" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Strategic Roadmap</h3>
                          <p className="text-gray-300">
                            Develop a clear implementation plan with defined milestones, timelines, and expected
                            outcomes.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="h-5 w-5 text-gray-900" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">ROI Analysis</h3>
                          <p className="text-gray-300">
                            Understand the potential return on investment and business impact of implementing our
                            enterprise solutions.
                          </p>
                        </div>
                      </div>

                      <div className="mt-8">
                        <Link href="/contact">
                          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-full w-full">
                            Schedule a Consultation with Us Today!
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
