import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import CTASection from "@/components/cta-section"

export default function SolutionsPage() {
  const industrySolutions = [
    {
      image: "/manufacturing-solution-new.png",
      alt: "Manufacturing Solutions",
      title: "Manufacturing",
      description:
        "Optimize production processes, improve quality control, and enhance operational efficiency with our manufacturing solutions.",
      href: "/solutions/manufacturing",
    },
    {
      image: "/finance-solution-new.png",
      alt: "Financial Services Solutions",
      title: "Financial Services",
      description:
        "Enhance customer experiences, improve risk management, and streamline operations with our financial services solutions.",
      href: "/solutions/financial-services",
    },
    {
      image: "/healthcare-solution-new.png",
      alt: "Healthcare Solutions",
      title: "Healthcare",
      description:
        "Improve patient outcomes, optimize clinical workflows, and enhance operational efficiency with our healthcare solutions.",
      href: "/solutions/healthcare",
    },
    {
      image: "/retail-solution-new.png",
      alt: "Retail Solutions",
      title: "Retail",
      description:
        "Create seamless omnichannel experiences, optimize inventory management, and personalize customer engagement with our retail solutions.",
      href: "/solutions/retail",
    },
    {
      image: "/logistics-solution-new.png",
      alt: "Logistics & Supply Chain Solutions",
      title: "Logistics & Supply Chain",
      description:
        "Enhance visibility, optimize routes, and improve inventory management with our logistics and supply chain solutions.",
      href: "/solutions/logistics",
    },
    {
      image: "/energy-solution-new.png",
      alt: "Energy & Utilities Solutions",
      title: "Energy & Utilities",
      description:
        "Optimize asset performance, improve grid management, and enhance customer engagement with our energy and utilities solutions.",
      href: "/solutions/energy",
    },
  ]

  const crossIndustrySolutions = [
    {
      title: "AI & Machine Learning",
      description:
        "Leverage the power of AI and machine learning to automate processes, gain insights from your data, and make better decisions.",
      href: "/solutions/ai-machine-learning",
    },
    {
      title: "Cloud Transformation",
      description:
        "Modernize your infrastructure, improve scalability, and reduce costs with our cloud transformation solutions.",
      href: "/solutions/cloud-transformation",
    },
    {
      title: "Data Analytics",
      description:
        "Turn your data into actionable insights with our advanced analytics solutions, from descriptive to predictive and prescriptive analytics.",
      href: "/solutions/data-analytics",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="bg-tesseract-500 dark:bg-tesseract-700 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Industry Solutions</h1>
          <p className="text-xl text-tesseract-100 dark:text-gray-300 max-w-3xl mx-auto">
            Tailored digital transformation and AI solutions to address the unique challenges of your industry
          </p>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow relative before:absolute before:inset-0 before:rounded-lg before:p-[1px] before:bg-gradient-to-r before:from-yellow-400 before:to-gray-300 before:-z-10"
              >
                <div className="relative h-48">
                  <Image src={solution.image || "/placeholder.svg"} alt={solution.alt} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <Link
                    href={solution.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Industry Solutions */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 gradient-text">Cross-Industry Solutions</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Powerful solutions that deliver value across industries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crossIndustrySolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow relative before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-yellow-400 before:to-gray-300 before:-z-10"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <Link
                    href={solution.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Explore Our Solutions?"
        description="Our experts are there to challenge your ideas, bring out new opportunities and activate the full potential of digital and AI."
        buttonText="🚀 Ready to challenge us?"
        buttonLink="/contact"
      />
    </div>
  )
}
