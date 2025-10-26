"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { JSX } from "react/jsx-runtime"

export default function ContactPage(): JSX.Element {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setSuccess(null)
    setError(null)

    const form = e.currentTarget

    try {
      const formData = new FormData(form)
      const data = Object.fromEntries(formData.entries())

      console.log("Envoi des données:", data) // Debug

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data),
      })

      console.log("Statut de la réponse:", res.status) // Debug

      const responseText = await res.text()
      console.log("Texte brut de la réponse:", responseText) // Debug

      let body
      try {
        body = JSON.parse(responseText)
        console.log("Réponse parsée:", body) // Debug
      } catch (parseError) {
        console.error("Erreur de parsing JSON:", parseError)
        console.error("Texte reçu:", responseText)
        throw new Error("Réponse du serveur invalide")
      }

      if (res.ok && body.success) {
        setSuccess("✅ Message envoyé avec succès !")
        setError(null)
        form.reset() 
      } else {
        setError(body.message || "❌ Échec de l'envoi. Réessaie plus tard.")
        setSuccess(null)
      }
    } catch (err) {
      console.error("Erreur complète:", err)
      setError("❌ Une erreur est survenue. Vérifie ta connexion.")
      setSuccess(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-tesseract-500 dark:bg-tesseract-700 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Contact Us</h1>
          <p className="text-xl text-tesseract-100 dark:text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team to discuss how we can help your business thrive in the digital age
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 gradient-text">Get In Touch</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Fill out the form below and one of our experts will get back to you shortly to discuss your needs.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      First Name*
                    </label>
                    <Input id="firstName" name="firstName" type="text" required className="w-full" />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Last Name*
                    </label>
                    <Input id="lastName" name="lastName" type="text" required className="w-full" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address*
                  </label>
                  <Input id="email" name="email" type="email" required className="w-full" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <Input id="phone" name="phone" type="tel" className="w-full" />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Company Name*
                  </label>
                  <Input id="company" name="company" type="text" required className="w-full" />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    I'm interested in*
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    className="w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  >
                    <option value="">Select an option</option>
                    <option value="consulting">Strategic Consulting</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="software-development">Software Development</option>
                    <option value="artificial-intelligence">Artificial Intelligence</option>
                    <option value="recruitment">Recruitment Solutions</option>
                    <option value="training">Training & Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message*
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full"
                    placeholder="Tell us about your project or inquiry"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={loading}>
                    {loading ? "Sending..." : "Submit Inquiry"}
                  </Button>

                  {success && (
                    <p
                      role="status"
                      aria-live="polite"
                      className="text-green-600 dark:text-green-400 text-sm"
                    >
                      {success}
                    </p>
                  )}

                  {error && (
                    <p
                      role="alert"
                      aria-live="assertive"
                      className="text-red-600 dark:text-red-400 text-sm"
                    >
                      {error}
                    </p>
                  )}
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 gradient-text">
                Contact Information
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                You can also reach out to us directly using the contact information below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Headquarters</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      123 Business Avenue
                      <br />
                      Tech District
                      <br />
                      New York, NY 10001
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">info@tesseract.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Global Offices</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg relative before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-yellow-400 before:to-gray-300 before:-z-10">
                    <h4 className="font-semibold text-gray-900 dark:text-white">London</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      45 Tech Square
                      <br />
                      London, EC1V 9BX
                      <br />
                      United Kingdom
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg relative before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-yellow-400 before:to-gray-300 before:-z-10">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Singapore</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      78 Innovation Drive
                      <br />
                      Singapore 138665
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg relative before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-yellow-400 before:to-gray-300 before:-z-10">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Berlin</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Technikstraße 25
                      <br />
                      10115 Berlin
                      <br />
                      Germany
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg relative before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-yellow-400 before:to-gray-300 before:-z-10">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Sydney</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      200 Innovation Way
                      <br />
                      Sydney, NSW 2000
                      <br />
                      Australia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 gradient-text">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg relative before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-yellow-400 before:to-gray-300 before:-z-10">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                How quickly can you start on my project?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We typically can begin initial consultations within 1-2 business days. Project kickoff timelines depend
                on scope and resource availability, but we strive to accommodate urgent needs whenever possible.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg relative before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-yellow-400 before:to-gray-300 before:-z-10">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Do you work with small businesses?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, we work with organizations of all sizes, from startups to enterprise companies. We tailor our
                solutions to meet your specific needs and budget.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg relative before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-yellow-400 before:to-gray-300 before:-z-10">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                What industries do you specialize in?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We have experience across multiple industries, including manufacturing, financial services, healthcare,
                retail, and technology. Our team brings industry-specific knowledge to each project.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg relative before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-yellow-400 before:to-gray-300 before:-z-10">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                How do you handle project pricing?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our pricing models vary based on project type and client needs. We offer fixed-price projects, time and
                materials, and retainer arrangements. We'll discuss options during our initial consultation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}