import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  className?: string
}

export default function CTASection({
  title,
  description,
  buttonText,
  buttonLink,
  className = "bg-tesseract-500",
}: CTASectionProps) {
  return (
    <section className={`${className} py-16`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4 gradient-text">{title}</h2>
        <p className="text-tesseract-100 max-w-2xl mx-auto mb-8 dark:text-gray-300">{description}</p>
        <Link href={buttonLink}>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-md">
            {buttonText}
          </Button>
        </Link>
      </div>
    </section>
  )
}
