import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BlueCTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function BlueCTASection({
  title,
  description,
  buttonText,
  buttonLink,
}: BlueCTASectionProps) {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('/abstract-swirls.png')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          {title}
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          {description}
        </p>
        <Link href={buttonLink}>
          <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            {buttonText}
          </Button>
        </Link>
      </div>
    </section>
  );
}
