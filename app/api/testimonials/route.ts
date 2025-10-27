import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(testimonials)
  } catch (error) {
    console.error('GET /api/testimonials - Erreur:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des témoignages' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { fullname, function: func, comments, rate } = body

    if (!fullname?.trim() || !func?.trim() || !comments?.trim()) {
      return NextResponse.json(
        { error: 'Les champs nom, fonction et commentaire sont requis' },
        { status: 400 }
      )
    }

    if (!rate || rate < 1 || rate > 5) {
      return NextResponse.json(
        { error: 'La note doit être comprise entre 1 et 5' },
        { status: 400 }
      )
    }

    const newTestimonial = await prisma.testimonial.create({
      data: {
        fullname: fullname.trim(),
        function: func.trim(),
        comments: comments.trim(),
        rate: parseInt(rate.toString())
      }
    })

    return NextResponse.json(newTestimonial, { status: 201 })
  } catch (error) {
    console.error('POST /api/testimonials - Erreur:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la création du témoignage' },
      { status: 500 }
    )
  }
}