import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="w-full h-[3px] bg-gradient-to-r from-yellow-400 to-gray-800"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8 sm:py-12 w-[98%] max-w-[98%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="TESSERACT Logo" width={40} height={40} />
              <span className="font-bold text-xl text-white">TESSERACT</span>
            </div>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Accélérer la transformation des entreprises grâce à des solutions innovantes alliant stratégie digitale et intelligence artificielle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-tesseract-400 transition" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-tesseract-400 transition" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-tesseract-400 transition" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-tesseract-400 transition" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-white mb-4 text-lg">Liens Rapides</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-tesseract-400 transition inline-block py-1">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-gray-300 hover:text-tesseract-400 transition inline-block py-1"
                >
                  Études de Cas
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-tesseract-400 transition inline-block py-1">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-tesseract-400 transition inline-block py-1">
                  Carrières
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-tesseract-400 transition inline-block py-1">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-300 hover:text-tesseract-400 transition inline-block py-1">
                  TaskForce
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="font-semibold text-white mb-4 text-lg">Nous Contacter</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li className="flex items-start">
                <MapPin size={20} className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Business Avenue, Tech District, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-tesseract-500 mr-2 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-tesseract-500 mr-2 flex-shrink-0" />
                <span className="text-gray-300">info@tesseract.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="font-semibold text-white mb-4 text-lg">Newsletter</h3>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Abonnez-vous à notre newsletter pour les dernières mises à jour et informations.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Votre email"
                className="bg-gray-800 border-gray-700 text-white flex-grow"
              />
              <Button className="bg-tesseract-600 hover:bg-tesseract-700 text-white whitespace-nowrap">
                S'abonner
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} TESSERACT. Tous droits réservés.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy" className="hover:text-tesseract-400 transition inline-block py-1">
              Politique de Confidentialité
            </Link>
            <Link href="/terms-of-service" className="hover:text-tesseract-400 transition inline-block py-1">
              Conditions d'Utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
