"use client";

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Globe, Award, Target, Lightbulb, Heart, Handshake } from "lucide-react"
import CTASection from "@/components/cta-section"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      {/* Enhanced Hero Section */}
      <section className="relative h-[70vh] overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/abstract-swirls.png')] bg-cover bg-center opacity-5"></div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-400 text-sm font-medium">About Us</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                TESSERACT
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Driving innovation and digital excellence for businesses worldwide
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-2">
                  2015
                </div>
                <div className="text-gray-300 text-sm font-medium">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-2">
                  50+
                </div>
                <div className="text-gray-300 text-sm font-medium">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-2">
                  500+
                </div>
                <div className="text-gray-300 text-sm font-medium">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Our Story */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/abstract-swirls.png')] bg-cover bg-center opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/modern-office-collaboration.png" alt="Our Story" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-2xl backdrop-blur-sm border border-blue-500/20 flex items-center justify-center">
                <Users className="w-12 h-12 text-blue-400" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-500/10 rounded-2xl backdrop-blur-sm border border-purple-500/20 flex items-center justify-center">
                <Award className="w-10 h-10 text-purple-400" />
              </div>
            </div>
            
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">Our Journey</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  Story
                </span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Founded in 2015, TESSERACT began with a simple mission: to help businesses navigate the complex world of
                  digital transformation. What started as a small team of passionate consultants has grown into a global
                  organization with expertise across multiple domains.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our journey has been defined by a relentless commitment to innovation, excellence, and client success.
                  We've helped hundreds of organizations across industries modernize their operations, enhance customer
                  experiences, and drive growth through digital technologies.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Today, TESSERACT stands at the forefront of digital transformation, combining deep industry knowledge,
                  technical expertise, and a human-centered approach to deliver solutions that create lasting value for
                  our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Mission & Values */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/abstract-swirls.png')] bg-cover bg-center opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-purple-400 text-sm font-medium">Our Foundation</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Our Mission &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Values
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Guided by a clear mission and strong values that define who we are
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission Card */}
            <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:bg-white/10 hover:border-gray-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-pink-500/0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-purple-400" />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-6">Our Mission</h3>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  To empower organizations to thrive in the digital age by providing innovative solutions, expert
                  guidance, and exceptional service that drive sustainable growth and competitive advantage.
                </p>
                
                <div className="relative h-[250px] rounded-xl overflow-hidden">
                  <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                    <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8184919-preview-2vSHDYf9ZWZ7lWThYRF9Ee0o36ri8l.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Values Card */}
            <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:bg-white/10 hover:border-gray-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/5 to-purple-500/0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="w-16 h-16 bg-pink-500/10 border border-pink-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-pink-400" />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-6">Our Values</h3>
                
                <div className="space-y-6">
                  {[
                    { icon: <Award className="w-5 h-5" />, title: "Excellence", description: "We strive for excellence in everything we do, delivering high-quality solutions that exceed expectations.", color: "text-blue-400" },
                    { icon: <Lightbulb className="w-5 h-5" />, title: "Innovation", description: "We embrace innovation and creative thinking to solve complex challenges and drive continuous improvement.", color: "text-yellow-400" },
                    { icon: <CheckCircle className="w-5 h-5" />, title: "Integrity", description: "We act with honesty, transparency, and ethical conduct in all our interactions and decisions.", color: "text-green-400" },
                    { icon: <Handshake className="w-5 h-5" />, title: "Collaboration", description: "We believe in the power of collaboration, working closely with our clients and partners to achieve shared goals.", color: "text-purple-400" }
                  ].map((value, index) => (
                    <div key={index} className="flex items-start group">
                      <div className={`w-8 h-8 ${value.color} mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">{value.title}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Leadership Team */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/abstract-swirls.png')] bg-cover bg-center opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-orange-400 text-sm font-medium">Leadership</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Our Leadership{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Team
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Meet the experienced professionals guiding our organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Michael Anderson",
                title: "Chief Executive Officer",
                image: "/images/michael-anderson-ceo.png",
                description: "With over 20 years of experience in technology and consulting, Michael leads our global strategy and operations.",
                color: "from-blue-500 to-blue-700",
                bgColor: "bg-blue-500/10",
                borderColor: "border-blue-500/20"
              },
              {
                name: "Sarah Chen",
                title: "Chief Technology Officer",
                image: "/images/sarah-chen-cto.png",
                description: "Sarah drives our technology vision and strategy, ensuring we stay at the forefront of innovation.",
                color: "from-purple-500 to-purple-700",
                bgColor: "bg-purple-500/10",
                borderColor: "border-purple-500/20"
              },
              {
                name: "David Rodriguez",
                title: "Chief Operating Officer",
                image: "/images/david-rodriguez-coo.png",
                description: "David oversees our global operations, ensuring excellence in service delivery and client satisfaction.",
                color: "from-green-500 to-green-700",
                bgColor: "bg-green-500/10",
                borderColor: "border-green-500/20"
              },
              {
                name: "Emily Johnson",
                title: "Chief Digital Officer",
                image: "/images/emily-johnson-cdo.png",
                description: "Emily leads our digital transformation initiatives, helping clients navigate their digital journeys.",
                color: "from-pink-500 to-pink-700",
                bgColor: "bg-pink-500/10",
                borderColor: "border-pink-500/20"
              }
            ].map((leader, index) => (
              <div key={index} className="group">
                <div className="relative p-6 bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:bg-white/10 hover:border-gray-600/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-orange-500/10 text-center">
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${leader.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                  
                  <div className="relative">
                    {/* Profile Image */}
                    <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-700/50 group-hover:border-orange-500/50 transition-colors duration-300">
                      <Image src={leader.image} alt={leader.title} fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                      {leader.name}
                    </h3>
                    <p className="text-orange-400 font-medium mb-4">
                      {leader.title}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {leader.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/team">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Meet Our Full Team
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Global Presence */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/abstract-swirls.png')] bg-cover bg-center opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 text-sm font-medium">Global Reach</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Our Global{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Presence
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Serving clients worldwide with offices in key locations
            </p>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-16">
            <Image src="/global-business-presence.png" alt="Global Presence" fill className="object-contain" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { region: "North America", cities: "New York, San Francisco, Toronto", color: "from-blue-500 to-blue-700", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/20" },
              { region: "Europe", cities: "London, Berlin, Paris", color: "from-purple-500 to-purple-700", bgColor: "bg-purple-500/10", borderColor: "border-purple-500/20" },
              { region: "Asia Pacific", cities: "Singapore, Sydney, Tokyo", color: "from-green-500 to-green-700", bgColor: "bg-green-500/10", borderColor: "border-green-500/20" },
              { region: "Middle East", cities: "Dubai, Tel Aviv", color: "from-orange-500 to-orange-700", bgColor: "bg-orange-500/10", borderColor: "border-orange-500/20" }
            ].map((location, index) => (
              <div key={index} className="group">
                <div className="relative p-6 bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:bg-white/10 hover:border-gray-600/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/10 text-center">
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${location.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                  
                  <div className="relative">
                    <div className={`w-16 h-16 ${location.bgColor} ${location.borderColor} border rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Globe className="w-8 h-8 text-cyan-400" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {location.region}
                    </h3>
                    <p className="text-gray-300">
                      {location.cities}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Work With Us?
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Our experts are there to challenge your ideas, bring out new opportunities and activate the full potential of digital and AI
          </p>
          
          <Link href="/contact">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              🚀 Ready to challenge us?
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
