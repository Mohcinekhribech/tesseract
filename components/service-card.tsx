import type React from "react"
import Link from "next/link"
import Image from "next/image"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  className?: string
  featured?: boolean
  bgImage?: string
}

export default function ServiceCard({ title, description, icon, href, featured = false, bgImage }: ServiceCardProps) {
  return (
    <Link href={href} className="block h-full group">
      <div
        className={`h-full relative overflow-hidden rounded-lg transition-all duration-300 ${
          featured ? "shadow-lg border-2 border-tesseract-500" : "border border-gray-700"
        } before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-yellow-400 before:to-gray-800 before:-z-10 hover:shadow-xl hover:shadow-tesseract-500/10 hover:translate-y-[-2px]`}
      >
        {/* Background Image */}
        {bgImage && (
          <div className="absolute inset-0 z-0">
            <Image
              src={bgImage || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div
              className={`absolute inset-0 ${featured ? "bg-tesseract-500/90" : "bg-gray-900/75"} transition-opacity duration-300 group-hover:opacity-80`}
            ></div>
          </div>
        )}

        <div className={`relative z-10 p-4 sm:p-6 md:p-8 h-full flex flex-col ${bgImage ? "text-white" : ""}`}>
          <div className={`mb-4 ${featured ? "text-white" : bgImage ? "text-white" : "text-tesseract-500"}`}>
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 mb-4 transition-transform duration-300 group-hover:scale-110">
              {/* Border circle */}
              <div className="absolute inset-0 rounded-full border-2 border-gray-600"></div>
              {/* Gradient background */}
              <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-gray-300 to-gray-700"></div>
              {/* Icon container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white">{icon}</div>
              </div>
            </div>
          </div>
          <h3
            className={`text-lg sm:text-xl font-semibold mb-2 sm:mb-3 ${
              featured ? "text-white" : bgImage ? "text-white" : "text-white"
            } group-hover:text-tesseract-400 transition-colors duration-300`}
          >
            {title}
          </h3>
          <p
            className={`text-sm sm:text-base ${featured ? "text-tesseract-100" : bgImage ? "text-gray-100" : "text-gray-300"}`}
          >
            {description}
          </p>
          <div
            className={`mt-auto pt-4 text-sm font-medium flex items-center ${
              featured ? "text-white" : bgImage ? "text-white" : "text-tesseract-300"
            } group-hover:text-tesseract-400 transition-colors duration-300 group-hover:translate-x-1`}
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}
