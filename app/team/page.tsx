import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Mail } from "lucide-react"
import CTASection from "@/components/cta-section"

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="bg-tesseract-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Team</h1>
          <p className="text-xl text-tesseract-100 max-w-3xl mx-auto">
            Meet the experienced professionals driving innovation and excellence at TESSERACT
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our leadership team brings decades of combined experience across technology, consulting, and industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden relative border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-tesseract-500/10">
              <div className="relative h-80">
                <Image src="/placeholder-o42ic.png" alt="Michael Anderson" fill className="object-cover" priority />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">Michael Anderson</h3>
                <p className="text-tesseract-300 font-medium mb-3">Chief Executive Officer</p>
                <p className="text-gray-300 mb-4">
                  With over 20 years of experience in technology and consulting, Michael leads our global strategy and
                  operations.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-tesseract-300" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-tesseract-300" aria-label="Twitter">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-tesseract-300" aria-label="Email">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden relative border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-tesseract-500/10">
              <div className="relative h-80">
                <Image src="/female-cto-portrait.png" alt="Sarah Chen" fill className="object-cover" priority />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">Sarah Chen</h3>
                <p className="text-tesseract-300 font-medium mb-3">Chief Technology Officer</p>
                <p className="text-gray-300 mb-4">
                  Sarah drives our technology vision and strategy, ensuring we stay at the forefront of innovation.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-tesseract-300" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-tesseract-300" aria-label="Twitter">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-tesseract-300" aria-label="Email">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden relative border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-tesseract-500/10">
              <div className="relative h-80">
                <Image src="/latino-coo-portrait.png" alt="David Rodriguez" fill className="object-cover" priority />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">David Rodriguez</h3>
                <p className="text-tesseract-300 font-medium mb-3">Chief Operating Officer</p>
                <p className="text-gray-300 mb-4">
                  David oversees our global operations, ensuring excellence in service delivery and client satisfaction.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-tesseract-300" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-tesseract-300" aria-label="Twitter">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-tesseract-300" aria-label="Email">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden relative border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-tesseract-500/10">
              <div className="relative h-80">
                <Image
                  src="/female-cdo-digital-portrait.png"
                  alt="Emily Johnson"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">Emily Johnson</h3>
                <p className="text-tesseract-300 font-medium mb-3">Chief Digital Officer</p>
                <p className="text-gray-300 mb-4">
                  Emily leads our digital transformation initiatives, helping clients navigate their digital journeys.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-tesseract-300" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-tesseract-300" aria-label="Twitter">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-tesseract-300" aria-label="Email">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Leads */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Department Leads</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Meet the experts leading our specialized practice areas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden relative border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-tesseract-500/10">
              <div className="relative h-64">
                <Image
                  src="/asian-female-consulting-lead.png"
                  alt="Jennifer Lee"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">Jennifer Lee</h3>
                <p className="text-tesseract-300 font-medium mb-3">Head of Consulting</p>
                <p className="text-gray-300 mb-4">
                  Jennifer leads our consulting practice, bringing strategic insights and industry expertise to our
                  clients.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-tesseract-300" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-tesseract-300" aria-label="Email">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden relative border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-tesseract-500/10">
              <div className="relative h-64">
                <Image src="/indian-male-software-lead.png" alt="Alex Patel" fill className="object-cover" priority />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">Alex Patel</h3>
                <p className="text-tesseract-300 font-medium mb-3">Head of Software Development</p>
                <p className="text-gray-300 mb-4">
                  Alex oversees our software development practice, ensuring high-quality, scalable solutions for our
                  clients.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-tesseract-300" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-tesseract-300" aria-label="Email">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden relative border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-tesseract-500/10">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=256&width=384"
                  alt="Marcus Wong"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">Marcus Wong</h3>
                <p className="text-tesseract-300 font-medium mb-3">Head of AI & Data Science</p>
                <p className="text-gray-300 mb-4">
                  Marcus leads our AI and data science practice, developing innovative solutions that drive business
                  value.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-tesseract-300" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-tesseract-300" aria-label="Email">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden relative border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-tesseract-500/10">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=256&width=384"
                  alt="Sophia Martinez"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">Sophia Martinez</h3>
                <p className="text-tesseract-300 font-medium mb-3">Head of Recruitment</p>
                <p className="text-gray-300 mb-4">
                  Sophia leads our recruitment practice, helping clients build high-performing teams for the digital
                  age.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-tesseract-300" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-tesseract-300" aria-label="Email">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden relative border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-tesseract-500/10">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=256&width=384"
                  alt="Robert Kim"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">Robert Kim</h3>
                <p className="text-tesseract-300 font-medium mb-3">Head of Marketing</p>
                <p className="text-gray-300 mb-4">
                  Robert leads our marketing team, sharing our expertise and success stories with the world.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-tesseract-300" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-tesseract-300" aria-label="Email">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Culture</h2>
              <p className="text-gray-300 mb-4">
                At TESSERACT, we believe that our people are our greatest asset. We foster a culture of innovation,
                collaboration, and continuous learning, where diverse perspectives are valued and everyone has the
                opportunity to grow and make an impact.
              </p>
              <p className="text-gray-300 mb-4">
                Our team members are passionate about solving complex challenges and driving meaningful change for our
                clients. We work in a fast-paced, dynamic environment where creativity and critical thinking are
                encouraged.
              </p>
              <p className="text-gray-300">
                We're committed to creating an inclusive workplace where everyone feels welcome, respected, and
                empowered to bring their authentic selves to work every day.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden border border-gray-700">
                <Image
                  src="/images/team-collaboration-modern.png"
                  alt="Team Collaboration"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden border border-gray-700">
                <Image
                  src="/images/modern-tech-office.png"
                  alt="Office Environment"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden border border-gray-700">
                <Image src="/images/diverse-team-meeting.png" alt="Team Event" fill className="object-cover" priority />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden border border-gray-700">
                <Image
                  src="/images/professionals-collaborating.png"
                  alt="Working Together"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Team</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals who are passionate about technology and innovation to join our
            growing team.
          </p>
          <Link href="/careers">
            <Button className="bg-tesseract-500 hover:bg-tesseract-600 text-white">View Open Positions</Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Work With Our Team?"
        description="Our experts are there to challenge your ideas, bring out new opportunities and activate the full potential of digital and AI."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </div>
  )
}
