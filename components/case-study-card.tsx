import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface CaseStudyCardProps {
  title: string
  client: string
  industry: string
  image: string
  summary: string
  slug: string
  className?: string
}

export default function CaseStudyCard({
  title,
  client,
  industry,
  image,
  summary,
  slug,
  className = "",
}: CaseStudyCardProps) {
  return (
    <div
      className={`bg-gray-800 rounded-lg shadow-md overflow-hidden ${className} transition-all duration-300 hover:shadow-xl hover:shadow-tesseract-500/10 hover:translate-y-[-2px] group`}
    >
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-xs sm:text-sm font-medium text-white bg-tesseract-600 px-2 py-1 rounded-full">
            {industry}
          </span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-300 text-sm">{client}</span>
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-tesseract-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 mb-4 text-sm sm:text-base line-clamp-3">{summary}</p>
        <Link
          href={`/case-studies/${slug}`}
          className="inline-flex items-center text-tesseract-400 hover:text-tesseract-300 font-medium transition-all duration-300 group-hover:translate-x-1"
        >
          Read case study{" "}
          <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
