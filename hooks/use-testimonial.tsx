import { useState, useEffect, useCallback } from 'react'
import { Testimonial } from '@/types/testimonial'

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchTestimonials = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null)
      
      const response = await fetch('/api/testimonials', {
        headers: {
          'Cache-Control': 'no-cache',
        },
      })
      
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des témoignages')
      }
      
      const data = await response.json()
      
      const testimonialsList = Array.isArray(data) ? data : []
      setTestimonials(testimonialsList)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue')
      console.error('Erreur lors du chargement des témoignages:', err)
      setTestimonials([]) 
    } finally {
      setIsLoading(false)
    }
  }, [])

  const deleteTestimonial = useCallback(async (id: number) => {
    try {
      const response = await fetch(`/api/testimonials/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || 'Erreur lors de la suppression')
      }

      setTestimonials(prev => prev.filter(t => t.id !== id))
      return true
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erreur lors de la suppression'
      setError(errorMessage)
      fetchTestimonials()
      throw err
    }
  }, [fetchTestimonials])

  const refreshTestimonials = useCallback(() => {
    fetchTestimonials()
  }, [fetchTestimonials])

  
  useEffect(() => {
    fetchTestimonials()
  }, [fetchTestimonials])

  return {
    testimonials,
    isLoading,
    error,
    deleteTestimonial,
    refreshTestimonials
  }
}