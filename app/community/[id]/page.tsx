"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  Clock,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Star,
  Phone,
  X,
  Briefcase,
  User,
} from "lucide-react"

import type { ProfileData, EducationData, ExperienceData, PortfolioData } from "@/types/profile"

async function getProfileById(id: string): Promise<ProfileData | null> {
  try {
    console.log('Fetching profile with ID:', id) 
    const response = await fetch(`/api/profile/${id}`)
    
    if (!response.ok) {
      console.error('Response not OK:', response.status, response.statusText)
      return null
    }
    
    const data = await response.json()
    console.log('Profile data received:', data) 
    return data
  } catch (error) {
    console.error("Error fetching profile:", error)
    return null
  }
}

export default function ProfessionalProfile({ params }: { params: { id: string } }) {
  const { id } = params
  const [profile, setProfile] = useState<ProfileData | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("about")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true)
      const profileData = await getProfileById(id)
      setProfile(profileData)
      setLoading(false)
    }

    fetchProfile()
  }, [id])

  const toggleAvailability = async () => {
    if (!profile) return
    
    setIsUpdating(true)
    try {
      const response = await fetch(`/api/profile/${profile.id}/availability`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          available: !profile.available 
        }),
      })

      if (response.ok) {
        const updatedProfile = await response.json()
        setProfile(updatedProfile)
      } else {
        console.error('Erreur lors de la mise à jour')
      }
    } catch (error) {
      console.error('Erreur:', error)
    } finally {
      setIsUpdating(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Your request has been sent! The professional will contact you soon.")
    setIsModalOpen(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading profile...</p>
        </div>
      </div>
    )
  }

  if (!profile) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Professional Not Found</h1>
          <p className="text-gray-300 mb-6">The professional you're looking for doesn't exist or has been removed.</p>
          <Link
            href="/community"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition inline-flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            <span>Back to TaskForce</span>
          </Link>
        </div>
      </div>
    )
  }

  const formatPeriod = (startYear: number, endYear?: number) => {
    return endYear ? `${startYear} - ${endYear}` : `${startYear} - Present`
  }
  return(
    <main className="min-h-screen pt-24 pb-16 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          href="/community"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition"
        >
          <ArrowLeft size={16} />
          <span>Back to TaskForce</span>
        </Link>

        {/* Profile Header */}
        <div className="bg-gray-800 rounded-xl overflow-hidden mb-8">
          <div className="relative h-64 md:h-80">
            <Image src="/abstract-tech-background.png" alt="Cover background" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-800 to-transparent"></div>
          </div>

      <div className="px-6 py-6 md:px-10 md:py-8 relative">
  <div className="flex flex-col md:flex-row gap-6">
    <div className="md:w-48 md:-mt-24 z-10">
      <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-xl overflow-hidden border-4 border-gray-800 mx-auto md:mx-0 bg-gray-700 flex items-center justify-center">
        {profile.imageUrl ? (
          <img 
            src={profile.imageUrl} 
            alt={`Photo de ${profile.fullName}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback si l'image ne charge pas
              e.currentTarget.style.display = 'none';
              const fallbackDiv = e.currentTarget.nextElementSibling as HTMLElement;
              if (fallbackDiv) {
                fallbackDiv.style.display = 'flex';
              }
            }}
          />
        ) : null}
        <div 
          className={`w-full h-full flex items-center justify-center ${profile.imageUrl ? 'hidden' : 'flex'}`}
          style={{ display: profile.imageUrl ? 'none' : 'flex' }}
        >
          <User size={48} className="text-gray-500" />
        </div>
      </div>
    </div>
     
    <div className="flex-1">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">{profile.fullName}</h1>
          <p className="text-xl text-gray-300 mt-1">{profile.role || "Professional"}</p>
           
          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center gap-1">
              <MapPin size={16} className="text-gray-400" />
              <span className="text-gray-300">Location Available</span>
            </div>
            {profile.stars && (
              <div className="flex items-center gap-1">
                <Star className="text-yellow-400" size={16} fill="currentColor" />
                <span>{profile.stars.toFixed(1)}</span>
              </div>
            )}
          </div>
        </div>
         
        <div className="flex flex-col sm:flex-row gap-3">
          <div
            className={`flex items-center gap-1 px-3 py-1 rounded-full ${
              profile.available ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full ${profile.available ? "bg-green-500" : "bg-red-500"}`}
            ></div>
           <div className="availability-section">
        <span 
          onClick={!isUpdating ? toggleAvailability : undefined}
          className={`availability-badge ${
            profile.available ? 'available' : 'busy'
          } ${isUpdating ? 'updating' : 'clickable'}`}
        >
          {isUpdating ? (
            'Mise à jour...'
          ) : (
            profile.available ? "Available for Work" : "Currently Busy"
          )}
        </span>
      </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
        {/* Profile Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex border-b border-gray-700 mb-6 overflow-x-auto">
              <button
                onClick={() => setActiveTab("about")}
                className={`px-4 py-3 font-medium whitespace-nowrap ${
                  activeTab === "about" ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-400 hover:text-gray-300"
                }`}
              >
                About
              </button>
              {profile.experience && profile.experience.length > 0 && (
                <button
                  onClick={() => setActiveTab("experience")}
                  className={`px-4 py-3 font-medium whitespace-nowrap ${
                    activeTab === "experience" ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  Experience
                </button>
              )}
              {profile.portfolio && profile.portfolio.length > 0 && (
                <button
                  onClick={() => setActiveTab("portfolio")}
                  className={`px-4 py-3 font-medium whitespace-nowrap ${
                    activeTab === "portfolio" ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  Portfolio
                </button>
              )}
            </div>

            {/* Tab Content */}
            <div className="bg-gray-800 rounded-xl p-6">
              {/* About Tab */}
              {activeTab === "about" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">About Me</h2>
                  <p className="text-gray-300 mb-8 whitespace-pre-wrap">{profile.aboutMe}</p>

                  {profile.education && profile.education.length > 0 && (
                    <>
                      <h3 className="text-xl font-semibold mb-3">Education</h3>
                      <div className="space-y-4 mb-8">
                        {profile.education.map((edu) => (
                          <div key={edu.id} className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <div>
                              <h4 className="font-medium">{edu.school}</h4>
                              <p className="text-gray-400">{edu.degree}</p>
                            </div>
                            <div className="text-gray-500 mt-1 sm:mt-0">{edu.year}</div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Experience Tab */}
              {activeTab === "experience" && profile.experience && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
                  <div className="space-y-8">
                    {profile.experience.map((exp) => (
                      <div key={exp.id} className="relative pl-8 border-l border-gray-700">
                        <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-blue-600 -translate-x-1/2"></div>
                        <div className="mb-2">
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <p className="text-gray-400">{exp.company}</p>
                          <p className="text-gray-500 text-sm">{formatPeriod(exp.startYear, exp.endYear)}</p>
                        </div>
                        <p className="text-gray-300 whitespace-pre-wrap">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Portfolio Tab */}
              {activeTab === "portfolio" && profile.portfolio && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {profile.portfolio.map((item) => (
                      <div key={item.id} className="bg-gray-900 rounded-lg overflow-hidden">
                        <div className="relative h-48">
                          <Image
                            src={item.imageUrl || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                          {item.client && (
                            <p className="text-gray-400 text-sm mb-1">Client: {item.client}</p>
                          )}
                          {item.techStack && (
                            <p className="text-gray-500 text-xs">Tech: {item.techStack}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">Contact Information</h2>
              <p className="text-gray-300 mb-4">
                Contact this professional through our secure platform to protect privacy.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="text-blue-400 mt-1" size={18} />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p>Contact via platform</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="text-blue-400 mt-1" size={18} />
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p>Available after connection</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Linkedin className="text-blue-400 mt-1" size={18} />
                  <div>
                    <p className="text-sm text-gray-400">Professional Network</p>
                    <p>View after connection</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Github className="text-blue-400 mt-1" size={18} />
                  <div>
                    <p className="text-sm text-gray-400">Portfolio</p>
                    <p>Available after connection</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">Availability</h2>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="text-blue-400" size={18} />
                <span className="text-gray-300">Current Status:</span>
                <span className={`${profile.available ? "text-green-400" : "text-red-400"} font-medium`}>
                  {profile.available ? "Available" : "Busy"}
                </span>
              </div>

              {profile.available && (
                <div className="space-y-3">
                  <p className="text-gray-300">Available for:</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-400" size={16} />
                    <span>Full-time contracts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-400" size={16} />
                    <span>Part-time projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-400" size={16} />
                    <span>Consulting sessions</span>
                  </div>
                </div>
              )}

              <div className="mt-6">
                <Calendar className="text-blue-400 mb-2" size={18} />
                <p className="text-gray-300 mb-2">Typical response time:</p>
                <p className="font-medium">Within 24 hours</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => setIsModalOpen(true)}
                disabled={!profile.available}
                className={`w-full py-3 rounded-lg font-medium transition flex items-center justify-center gap-2 ${
                  profile.available ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-600 cursor-not-allowed opacity-60"
                }`}
              >
                <MessageSquare size={18} />
                <span>Request Talent</span>
              </button>
              {!profile.available && (
                <p className="text-sm text-gray-400 text-center mt-2">
                  This professional is currently busy. Please check back later or browse other available talent.
                </p>
              )}
            </div>

            {/* Request Talent Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                <div className="bg-gray-800 rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
                  <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <h3 className="text-xl font-bold">Request {profile.fullName}'s Services</h3>
                    <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white">
                      <X size={24} />
                    </button>
                  </div>

                  <div className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="project-title" className="block text-sm font-medium mb-1">
                          Project Title
                        </label>
                        <input
                          type="text"
                          id="project-title"
                          className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="E.g., Website Redesign, Mobile App Development"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="project-description" className="block text-sm font-medium mb-1">
                          Project Description
                        </label>
                        <textarea
                          id="project-description"
                          rows={4}
                          className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Describe your project requirements, goals, and timeline..."
                          required
                        ></textarea>
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium mb-1">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Select a budget range</option>
                          <option value="< $1,000">Less than $1,000</option>
                          <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                          <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                          <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                          <option value="$25,000+">$25,000+</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium mb-1">
                          Timeline
                        </label>
                        <select
                          id="timeline"
                          className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Select a timeline</option>
                          <option value="Less than 1 week">Less than 1 week</option>
                          <option value="1-2 weeks">1-2 weeks</option>
                          <option value="2-4 weeks">2-4 weeks</option>
                          <option value="1-3 months">1-3 months</option>
                          <option value="3+ months">3+ months</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="contact-info" className="block text-sm font-medium mb-1">
                          Your Contact Information
                        </label>
                        <input
                          type="email"
                          id="contact-info"
                          className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Your email address"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="additional-info" className="block text-sm font-medium mb-1">
                          Additional Information
                        </label>
                        <textarea
                          id="additional-info"
                          rows={3}
                          className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Any additional details you'd like to share..."
                        ></textarea>
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
                        >
                          Send Request
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}