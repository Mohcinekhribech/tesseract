import { Star, StarHalf } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
  name: string
  position: string
  company: string
  image: string
  rating: number
  testimonial: string
}

export default function TestimonialCard({ name, position, company, image, rating, testimonial }: TestimonialCardProps) {
  // Generate star rating
  const renderStars = () => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-yellow-400 text-yellow-400" size={16} />)
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-yellow-400 text-yellow-400" size={16} />)
    }

    // Add empty stars to make 5 total
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="text-gray-600" size={16} />)
    }

    return stars
  }

  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 border border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-tesseract-500/10 hover:border-gray-600 h-full flex flex-col">
      <div className="flex items-start gap-3 sm:gap-4 mb-4">
        <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-gray-600 flex-shrink-0 bg-gray-700">
          <Image
            src={image || "/testimonials/default-avatar.png"}
            alt={`${name} - ${position} at ${company}`}
            fill
            className="object-cover"
            sizes="64px"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = "/placeholder.svg?height=64&width=64&text=" + name.charAt(0)
            }}
          />
        </div>
        <div>
          <h4 className="font-semibold text-white text-base sm:text-lg">{name}</h4>
          <p className="text-xs sm:text-sm text-gray-300">
            {position}, {company}
          </p>
          <div className="flex mt-1 gap-0.5">{renderStars()}</div>
        </div>
      </div>
      <p className="text-gray-200 italic text-sm sm:text-base flex-grow">&ldquo;{testimonial}&rdquo;</p>
    </div>
  )
}
