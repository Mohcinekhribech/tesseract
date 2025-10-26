"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Star, User, Briefcase, MessageSquare, Loader2 } from "lucide-react"
import type { Testimonial, CreateTestimonialData, UpdateTestimonialData } from "@/types/testimonial"

interface TestimonialModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: () => void
  testimonial?: Testimonial | null
  mode: "create" | "update"
}

export default function TestimonialModal({ isOpen, onClose, onSave, testimonial, mode }: TestimonialModalProps) {
  const [formData, setFormData] = useState({
    fullname: "",
    function: "",
    rate: 5,
    comments: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (testimonial && mode === "update") {
      setFormData({
        fullname: testimonial.fullname,
        function: testimonial.function,
        rate: testimonial.rate,
        comments: testimonial.comments,
      })
    } else {
      setFormData({
        fullname: "",
        function: "",
        rate: 5,
        comments: "",
      })
    }
    setErrors({})
  }, [testimonial, mode, isOpen])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullname.trim()) {
      newErrors.fullname = "Le nom complet est requis"
    }

    if (!formData.function.trim()) {
      newErrors.function = "La fonction est requise"
    }

    if (!formData.comments.trim()) {
      newErrors.comments = "Le commentaire est requis"
    }

    if (formData.rate < 1 || formData.rate > 5) {
      newErrors.rate = "La note doit être entre 1 et 5"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const createTestimonial = async (data: CreateTestimonialData) => {
    const response = await fetch('/api/testimonials', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || 'Erreur lors de la création')
    }

    return response.json()
  }

  const updateTestimonial = async (id: number, data: CreateTestimonialData) => {
    const response = await fetch(`/api/testimonials/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || 'Erreur lors de la modification')
    }

    return response.json()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      const testimonialData: CreateTestimonialData = {
        fullname: formData.fullname.trim(),
        function: formData.function.trim(),
        rate: formData.rate,
        comments: formData.comments.trim(),
      }

      if (mode === "create") {
        await createTestimonial(testimonialData)
      } else if (mode === "update" && testimonial?.id) {
        await updateTestimonial(testimonial.id, testimonialData)
      }

      onSave()
      onClose()
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error)
      setErrors({
        submit: error instanceof Error ? error.message : 'Une erreur est survenue'
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleRatingClick = (rating: number) => {
    setFormData((prev) => ({ ...prev, rate: rating }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-black border border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-white flex items-center">
            <MessageSquare className="w-5 h-5 mr-2 text-blue-400" />
            {mode === "create" ? "Ajouter un témoignage" : "Modifier le témoignage"}
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            {mode === "create"
              ? "Partagez votre expérience avec notre équipe"
              : "Modifiez les informations du témoignage"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {errors.submit && (
            <div className="bg-red-900/50 border border-red-500 rounded-lg p-3">
              <p className="text-sm text-red-200">{errors.submit}</p>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="fullname" className="text-sm font-medium text-gray-300 flex items-center">
              <User className="w-4 h-4 mr-2 text-blue-400" />
              Nom complet *
            </Label>
            <Input
              id="fullname"
              value={formData.fullname}
              onChange={(e) => setFormData((prev) => ({ ...prev, fullname: e.target.value }))}
              placeholder="Votre nom complet"
              className={`${errors.fullname ? "border-red-500" : "border-gray-700"} focus:border-blue-500 bg-gray-900 text-white placeholder-gray-500`}
              disabled={isLoading}
            />
            {errors.fullname && <p className="text-sm text-red-400">{errors.fullname}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="function" className="text-sm font-medium text-gray-300 flex items-center">
              <Briefcase className="w-4 h-4 mr-2 text-blue-400" />
              Fonction / Poste *
            </Label>
            <Input
              id="function"
              value={formData.function}
              onChange={(e) => setFormData((prev) => ({ ...prev, function: e.target.value }))}
              placeholder="Ex: Directeur Marketing, CEO..."
              className={`${errors.function ? "border-red-500" : "border-gray-700"} focus:border-blue-500 bg-gray-900 text-white placeholder-gray-500`}
              disabled={isLoading}
            />
            {errors.function && <p className="text-sm text-red-400">{errors.function}</p>}
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-300 flex items-center">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              Évaluation *
            </Label>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingClick(star)}
                  className="p-1 hover:scale-110 transition-transform disabled:opacity-50"
                  disabled={isLoading}
                >
                  <Star
                    className={`w-6 h-6 ${star <= formData.rate ? "fill-yellow-400 text-yellow-400" : "text-gray-600"}`}
                  />
                </button>
              ))}
              <span className="ml-2 text-sm text-gray-400">({formData.rate}/5)</span>
            </div>
            {errors.rate && <p className="text-sm text-red-400">{errors.rate}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="comments" className="text-sm font-medium text-gray-300 flex items-center">
              <MessageSquare className="w-4 w-4 mr-2 text-blue-400" />
              Commentaire *
            </Label>
            <Textarea
              id="comments"
              value={formData.comments}
              onChange={(e) => setFormData((prev) => ({ ...prev, comments: e.target.value }))}
              placeholder="Partagez votre expérience avec nos services..."
              rows={4}
              className={`${errors.comments ? "border-red-500" : "border-gray-700"} focus:border-blue-500 resize-none bg-gray-900 text-white placeholder-gray-500`}
              disabled={isLoading}
            />
            {errors.comments && <p className="text-sm text-red-400">{errors.comments}</p>}
          </div>

          <DialogFooter className="flex space-x-3">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="px-6 py-2 border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
              disabled={isLoading}
            >
              Annuler
            </Button>
            <Button 
              type="submit" 
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white"
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              {mode === "create" ? "Ajouter" : "Modifier"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}