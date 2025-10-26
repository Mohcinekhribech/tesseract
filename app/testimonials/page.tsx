import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import CTASection from "@/components/cta-section" // Import CTASection component

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-tesseract-500 dark:bg-tesseract-700 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Testimonials</h1>
          <p className="text-xl text-tesseract-100 dark:text-gray-300 max-w-3xl mx-auto">
            See what our clients are saying about us
          </p>
        </div>
      </section>

      <div className="w-full h-[3px] bg-gradient-to-r from-yellow-400 to-gray-800 dark:to-black"></div>

      {/* Testimonials Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 relative before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-yellow-400 before:to-gray-300 before:-z-10">
              <div className="flex items-center mb-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src="/professional-headshot.png" alt="John Doe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">John Doe</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">CEO, Company A</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "TESSERACT has been an invaluable partner in our digital transformation journey. Their expertise and
                guidance have helped us streamline our operations, improve customer engagement, and drive significant
                business growth."
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 relative before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-yellow-400 before:to-gray-300 before:-z-10">
              <div className="flex items-center mb-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src="/professional-woman-headshot.png" alt="Jane Smith" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Jane Smith</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">Marketing Director, Company B</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "We were struggling to keep up with the rapid pace of digital change, but TESSERACT provided us with the
                insights and solutions we needed to stay ahead of the curve. Their team is knowledgeable, responsive,
                and truly dedicated to our success."
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 relative before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-yellow-400 before:to-gray-300 before:-z-10">
              <div className="flex items-center mb-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src="/professional-black-man-headshot.png" alt="David Brown" />
                  <AvatarFallback>DB</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">David Brown</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">IT Manager, Company C</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "TESSERACT's expertise in cloud computing and cybersecurity has been instrumental in helping us secure
                our data and infrastructure. Their team is proactive, responsive, and always willing to go the extra
                mile to ensure our systems are protected."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="w-full h-[3px] bg-gradient-to-r from-yellow-400 to-gray-900 dark:from-yellow-400 dark:to-gray-800"></div>

      {/* Client Logos */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Trusted By Industry Leaders</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We've partnered with some of the world's leading organizations to deliver innovative solutions and drive
              digital excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="flex items-center justify-center">
              <Image src="/client-logo-microsoft.png" alt="Microsoft" width={150} height={50} />
            </div>
            <div className="flex items-center justify-center">
              <Image src="/client-logo-google.png" alt="Google" width={150} height={50} />
            </div>
            <div className="flex items-center justify-center">
              <Image src="/client-logo-amazon.png" alt="Amazon" width={150} height={50} />
            </div>
            <div className="flex items-center justify-center">
              <Image src="/client-logo-ibm.png" alt="IBM" width={150} height={50} />
            </div>
            <div className="flex items-center justify-center">
              <Image src="/client-logo-tesla.png" alt="Tesla" width={150} height={50} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Business?"
        description="Our experts are there to challenge your ideas, bring out new opportunities and activate the full potential of digital and AI."
        buttonText="🚀 Ready to challenge us?"
        buttonLink="/contact"
      />
    </div>
  )
}