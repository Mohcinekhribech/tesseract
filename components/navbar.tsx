"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900 shadow-lg shadow-gray-800/30 py-2" : "bg-gray-900/90 backdrop-blur-sm py-3 sm:py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 w-[98%] max-w-[98%]">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="TESSERACT Logo"
              width={220}
              height={60}
              className="h-10 sm:h-12 md:h-14 w-auto"
              priority
            />
            <span className="text-xl font-bold text-tesseract-400 hidden sm:block">TESSERACT</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-300 hover:text-tesseract-400 transition">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium text-gray-300 hover:text-tesseract-400 transition">
              Services
            </Link>
            <Link href="/community" className="text-sm font-medium text-gray-300 hover:text-tesseract-400 transition">
              TaskForce
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-tesseract-400 transition">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-tesseract-400 transition">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-tesseract-400 p-2 rounded-md transition-colors"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800 mt-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-medium text-gray-300 hover:text-tesseract-400 transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium text-gray-300 hover:text-tesseract-400 transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/community"
                className="text-sm font-medium text-gray-300 hover:text-tesseract-400 transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                TaskForce
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-gray-300 hover:text-tesseract-400 transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-gray-300 hover:text-tesseract-400 transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
