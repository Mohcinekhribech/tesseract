import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import CTASection from "@/components/cta-section"

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-tesseract-500 dark:bg-tesseract-700 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Careers</h1>
          <p className="text-xl text-tesseract-100 dark:text-gray-300 max-w-3xl mx-auto">
            Build your career at TESSERACT and be part of a team that's shaping the future of digital transformation
          </p>
        </div>
      </section>

      <div className="w-full h-[3px] bg-gradient-to-r from-yellow-400 to-gray-800 dark:to-black"></div>

      {/* Why Choose Us */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 gradient-text">Why Choose TESSERACT?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                At TESSERACT, we're more than just a company - we're a community of passionate, driven individuals who
                are committed to making a difference. We offer a dynamic and rewarding work environment where you can
                grow your skills, collaborate with talented colleagues, and contribute to meaningful projects.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                When you join our team, you'll have the opportunity to work on cutting-edge technologies, solve complex
                challenges, and help our clients achieve their digital transformation goals. We're committed to
                investing in our employees' growth and development, providing ample opportunities for training,
                mentorship, and career advancement.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                If you're looking for a challenging and rewarding career where you can make a real impact, TESSERACT is
                the place for you.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/why-choose-us.jpg" alt="Why Choose Us" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="w-full h-[3px] bg-gradient-to-r from-yellow-400 to-gray-900 dark:from-yellow-400 dark:to-gray-800"></div>

      {/* Open Positions */}
      <section id="open-positions" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Open Positions</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our current job openings and find the perfect fit for your skills and experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md relative before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-yellow-400 before:to-gray-300 before:-z-10">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Software Engineer</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Develop high-quality software solutions for our clients using the latest technologies.
              </p>
              <Link
                href="/careers/software-engineer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md relative before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-yellow-400 before:to-gray-300 before:-z-10">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Data Scientist</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Analyze complex data sets and develop machine learning models to solve business problems.
              </p>
              <Link
                href="/careers/data-scientist"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md relative before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-yellow-400 before:to-gray-300 before:-z-10">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Digital Marketing Specialist</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Develop and execute digital marketing campaigns to promote our brand and services.
              </p>
              <Link
                href="/careers/digital-marketing-specialist"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Join Our Team?"
        description="Explore our open positions and take the first step towards a rewarding career at TESSERACT."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </div>
  )
}
