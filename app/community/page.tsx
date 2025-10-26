"use client";

import Link from "next/link";
import Image from "next/image";
import { Briefcase, Code, Database, Filter, Search, Server, Star, Zap, Plus, User, GraduationCap, FolderOpen, ArrowRight, ArrowLeft, X, Trash2, Save, CheckCircle, Sparkles, Edit } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { ProfileData } from '@/types/profile';
import AdvancedFiltersModal from '@/components/AdvancedFiltersModal';
import CreateProfileModal from '@/components/CreateProfileModal';
import EditProfileModal from '@/components/EditProfileModal';
import DeleteConfirmationModal from '@/components/DeleteConfirmationModal';

export default function CommunityPage() {
  const [profiles, setProfiles] = useState<ProfileData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(8);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [availabilityFilter, setAvailabilityFilter] = useState<string>("all");
  const [minRating, setMinRating] = useState(0);
  const filtersRef = useRef<HTMLDivElement>(null);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingProfile, setEditingProfile] = useState<ProfileData | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingProfile, setDeletingProfile] = useState<ProfileData | null>(null);

  const fetchProfiles = async (search?: string) => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (search) params.append('search', search);

      const response = await fetch(`/api/profile?${params.toString()}`);
      if (!response.ok) throw new Error('Erreur lors du chargement des profils');

      const data = await response.json();
      setProfiles(data);
    } catch (err) {
      setError('Impossible de charger les profils');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  useEffect(() => {
    const delayedSearch = setTimeout(() => {
      fetchProfiles(searchQuery || undefined);
    }, 300);

    return () => clearTimeout(delayedSearch);
  }, [searchQuery]);

  const filteredProfiles = profiles.filter(profile => {
    const roleMatch = activeFilter === "all" || profile.role === activeFilter;
    const availabilityMatch =
      availabilityFilter === "all" ||
      (availabilityFilter === "available" && profile.available === true) ||
      (availabilityFilter === "unavailable" && profile.available === false);
    const ratingMatch = !profile.stars || profile.stars >= minRating;

    return roleMatch && availabilityMatch && ratingMatch;
  });

  const uniqueRoles = Array.from(new Set(profiles.map(profile => profile.role).filter(Boolean)));

  const extractSkillsFromProfile = (profile: ProfileData): string[] => {
    const skills: string[] = [];

    if (profile.experience) {
      profile.experience.forEach(exp => {
        if (exp.title) skills.push(exp.title);
      });
    }

    if (profile.portfolio) {
      profile.portfolio.forEach(port => {
        if (port.techStack) {
          port.techStack.split(',').forEach(tech => {
            skills.push(tech.trim());
          });
        }
      });
    }

    return [...new Set(skills)].slice(0, 3);
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .custom-scrollbar::-webkit-scrollbar {
        width: 8px;
      }
      
      .custom-scrollbar::-webkit-scrollbar-track {
        background: rgba(55, 65, 81, 0.3);
        border-radius: 10px;
      }
      
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #3b82f6, #8b5cf6);
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(180deg, #2563eb, #7c3aed);
      }
      
      .custom-scrollbar::-webkit-scrollbar-thumb:active {
        background: linear-gradient(180deg, #1d4ed8, #6d28d9);
      }
      
      .custom-scrollbar {
        scrollbar-width: thin;
        scrollbar-color: #3b82f6 rgba(55, 65, 81, 0.3);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filtersRef.current && !filtersRef.current.contains(event.target as Node)) {
        setShowAdvancedFilters(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCreateProfile = async (formData: any) => {
    try {
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Erreur lors de la création du profil');

      await fetchProfiles();
      setIsCreateModalOpen(false);
    } catch (err) {
      console.error('Erreur:', err);
      setError('Erreur lors de la création du profil');
    }
  };

  const handleEditProfile = async (profileData: Partial<ProfileData>) => {
    if (!editingProfile?.id) return;

    try {
      const response = await fetch(`/api/profile/${editingProfile.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      });

      if (!response.ok) throw new Error('Erreur lors de la modification du profil');

      await fetchProfiles();
      setIsEditModalOpen(false);
      setEditingProfile(null);
    } catch (err) {
      console.error('Erreur:', err);
      setError('Erreur lors de la modification du profil');
    }
  };

  const handleDeleteProfile = async () => {
    if (!deletingProfile?.id) return;

    try {
      const response = await fetch(`/api/profile/${deletingProfile.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Erreur lors de la suppression du profil');

      await fetchProfiles();
      setIsDeleteModalOpen(false);
      setDeletingProfile(null);
    } catch (err) {
      console.error('Erreur:', err);
      setError('Erreur lors de la suppression du profil');
    }
  };

  const openEditModal = (profile: ProfileData) => {
    setEditingProfile(profile);
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (profile: ProfileData) => {
    setDeletingProfile(profile);
    setIsDeleteModalOpen(true);
  };

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="relative bg-gray-900 py-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/abstract-swirls.png" alt="Background pattern" fill className="object-cover" priority />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tesseract TaskForce</h1>
            <p className="text-xl text-gray-300 mb-8">
              Connect with our network of elite developers, consultants, and digital specialists ready to bring your
              vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="relative w-full sm:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by name, skill, tech stack or education..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="relative">
                <button
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition w-full sm:w-auto ${showAdvancedFilters
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-gray-800 hover:bg-gray-700 text-white"
                    }`}
                  onClick={() => {
                    console.log("Filters button clicked, current state:", showAdvancedFilters)
                    setShowAdvancedFilters(!showAdvancedFilters)
                  }}
                >
                  <Filter size={18} />
                  <span>Filters</span>
                  {showAdvancedFilters && (
                    <div className="w-2 h-2 bg-white rounded-full ml-1"></div>
                  )}
                </button>
              </div>

              <button
                onClick={() => setIsCreateModalOpen(true)}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Plus size={18} />
                <span>Create Profile</span>
                <Sparkles size={16} className="text-yellow-300" />
                      </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-blue-400 mb-2">{profiles.filter(p => p.role === 'Developer').length}+</p>
              <p className="text-gray-300">Developers</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-blue-400 mb-2">{profiles.filter(p => p.role === 'Consultant').length}+</p>
              <p className="text-gray-300">Consultants</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-blue-400 mb-2">{uniqueRoles.length}+</p>
              <p className="text-gray-300">Specializations</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-blue-400 mb-2">{Math.round((profiles.filter(p => p.available).length / profiles.length) * 100) || 0}%</p>
              <p className="text-gray-300">Availability Rate</p>
            </div>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-600/20 border border-red-600/30 rounded-lg text-red-400">
              {error}
              <button
                onClick={() => setError(null)}
                className="ml-2 text-red-300 hover:text-white"
              >
                ×
              </button>
            </div>
          )}

          {(minRating > 0 || availabilityFilter !== "all") && (
            <div className="mb-4 flex flex-wrap gap-2 items-center">
              <span className="text-gray-400">Active filters:</span>
              {availabilityFilter !== "all" && (
                <span
                  className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 cursor-pointer ${availabilityFilter === "available"
                    ? "bg-green-600/20 text-green-400"
                    : "bg-red-600/20 text-red-400"
                    }`}
                  onClick={() => setAvailabilityFilter("all")}
                >
                  {availabilityFilter === "available" ? "Available Now" : "Currently Busy"}
                  <button className="hover:text-white">×</button>
                </span>
              )}
              {minRating > 0 && (
                <span
                  className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full text-xs flex items-center gap-1 cursor-pointer"
                  onClick={() => setMinRating(0)}
                >
                  {minRating.toFixed(1)}+ Rating
                  <button className="hover:text-white">×</button>
                </span>
              )}
              <button
                className="text-sm text-gray-400 hover:text-white underline"
                onClick={() => {
                  setMinRating(0)
                  setAvailabilityFilter("all")
                }}
              >
                Clear all
              </button>
            </div>
          )}

          <div className="flex flex-wrap gap-3 mb-8">
            <button
              className={`px-4 py-2 ${activeFilter === "all" ? "bg-blue-600" : "bg-gray-800 hover:bg-gray-700"} text-white rounded-full text-sm font-medium transition`}
              onClick={() => setActiveFilter("all")}
            >
              All Professionals
            </button>
            {uniqueRoles.map((role) => (
              <button
                key={role}
                className={`px-4 py-2 ${activeFilter === role ? "bg-blue-600" : "bg-gray-800 hover:bg-gray-700"} text-white rounded-full text-sm font-medium transition`}
                onClick={() => setActiveFilter(role)}
              >
                {role}
              </button>
            ))}
          </div>

          <div className="mb-6 text-gray-400">
            {loading ? (
              "Loading..."
            ) : (
              `Showing ${Math.min(filteredProfiles.length, visibleCount)} of ${filteredProfiles.length} professionals`
            )}
          </div>
{loading ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {[...Array(8)].map((_, i) => (
      <div key={i} className="bg-gray-800 rounded-xl overflow-hidden animate-pulse">
        <div className="h-48 bg-gray-700"></div>
        <div className="p-6">
          <div className="h-4 bg-gray-700 rounded mb-2"></div>
          <div className="h-3 bg-gray-700 rounded mb-4 w-2/3"></div>
          <div className="flex gap-2 mb-4">
            <div className="h-6 bg-gray-700 rounded w-16"></div>
            <div className="h-6 bg-gray-700 rounded w-20"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
) : filteredProfiles.length > 0 ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {filteredProfiles.slice(0, visibleCount).map((profile, index) => (
      <div
        key={index}
        className="bg-gray-800 rounded-xl overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl"
      >
        <div className="relative h-48">
          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
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
              <User className="w-16 h-16 text-gray-400" />
            </div>
          </div>
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full">
            <div
              className={`w-3 h-3 rounded-full ${profile.available ? "bg-green-500" : "bg-red-500"}`}
            ></div>
            <span className="text-xs font-medium">{profile.available ? "Available" : "Busy"}</span>
          </div>
          <div className="absolute top-4 left-4 flex gap-2">
            <button
              onClick={() => openEditModal(profile)}
              className="p-2 bg-gray-700/80 hover:bg-blue-600 rounded-full transition"
            >
              <Edit size={16} />
            </button>
            <button
              onClick={() => openDeleteModal(profile)}
              className="p-2 bg-gray-700/80 hover:bg-red-600 rounded-full transition"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{profile.fullName}</h3>
          <p className="text-gray-400 mb-3">{profile.role || 'Professional'}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {extractSkillsFromProfile(profile).map((skill, skillIndex) => (
              <span key={skillIndex} className="text-xs bg-gray-700 px-2 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-1 mb-4">
            {[...Array(Math.floor(profile.stars || 0))].map((_, i) => (
              <Star key={i} className="text-yellow-400" size={16} fill="currentColor" />
            ))}
            {(profile.stars || 0) % 1 !== 0 && (
              <Star className="text-gray-600" size={16} fill="currentColor" />
            )}
            <span className="text-sm ml-1">{(profile.stars || 0).toFixed(1)}</span>
            <span className="text-xs text-gray-400 ml-1">({profile.experience?.length || 0} projects)</span>
          </div>
          <div className="flex gap-2">
            <Link
              href={`/community/${profile.id}`}
              className="flex-1 text-center py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm font-medium transition"
              onClick={() => console.log('Navigating to profile:', profile.id)} 
            >
              View Profile
            </Link>
            <button className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm transition">
              <Briefcase size={18} />
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
)  : (
            <div className="bg-gray-800 rounded-xl p-8 text-center">
              <p className="text-xl mb-2">No professionals match your search criteria</p>
              <p className="text-gray-400 mb-4">Try adjusting your filters or search query</p>
              <button
                onClick={() => {
                  setSearchQuery("")
                  setActiveFilter("all")
                  setMinRating(0)
                  setAvailabilityFilter("all")
                }}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition"
              >
                Reset All Filters
              </button>
            </div>
          )}

          <div className="mt-12 text-center">
            {filteredProfiles.length > visibleCount ? (
              <button
                onClick={() => setVisibleCount((prev) => prev + 4)}
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium transition inline-flex items-center gap-2"
              >
                <span>Load More Professionals</span>
                <Zap size={16} />
              </button>
            ) : filteredProfiles.length > 0 ? (
              <p className="text-gray-400">All professionals are displayed</p>
            ) : null}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-800">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connecting with our talent is simple and efficient. Here's how the process works:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Browse & Select</h3>
              <p className="text-gray-300">
                Explore our TaskForce of professionals and find the perfect match for your project needs.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Connect & Discuss</h3>
              <p className="text-gray-300">
                Reach out to discuss your project requirements, timeline, and expectations.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Server size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Collaborate & Deliver</h3>
              <p className="text-gray-300">
                Work together seamlessly with our talent to bring your project to successful completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Tesseract TaskForce</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our TaskForce of professionals offers unique advantages for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <Database className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Vetted Experts</h3>
              <p className="text-gray-300">
                All professionals undergo rigorous screening and skill verification before joining our TaskForce.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Matching</h3>
              <p className="text-gray-300">
                Find the right talent for your project in days, not weeks, with our efficient matching system.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Diverse Skill Sets</h3>
              <p className="text-gray-300">
                Access professionals across various technologies, industries, and specializations.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <Star className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-300">
                Our professionals maintain high standards with regular performance reviews and client feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-900 to-gray-900">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Connect with Top Talent?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you need a single developer or an entire team, our TaskForce has the expertise to bring your
              vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition"
              >
                Request Talent
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AdvancedFiltersModal
        showAdvancedFilters={showAdvancedFilters}
        setShowAdvancedFilters={setShowAdvancedFilters}
        availabilityFilter={availabilityFilter}
        setAvailabilityFilter={setAvailabilityFilter}
        minRating={minRating}
        setMinRating={setMinRating}
      />

      <CreateProfileModal
        isModalOpen={isCreateModalOpen}
        setIsModalOpen={setIsCreateModalOpen}
        onSubmit={handleCreateProfile}
      />

      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setEditingProfile(null);
        }}
        profile={editingProfile}
        onSave={handleEditProfile}
      />

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setDeletingProfile(null);
        }}
        onConfirm={handleDeleteProfile}
        profileName={deletingProfile?.fullName || ""}
      />
    </main>
  );
}