import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)

    if (isNaN(id)) {
      return NextResponse.json({ error: 'ID invalide' }, { status: 400 })
    }

    const testimonial = await prisma.testimonial.findUnique({
      where: { id }
    })

    if (!testimonial) {
      return NextResponse.json({ error: 'Témoignage non trouvé' }, { status: 404 })
    }

    return NextResponse.json(testimonial)
  } catch (error) {
    console.error('GET /api/testimonials/[id] - Erreur:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération du témoignage' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)

    if (isNaN(id)) {
      return NextResponse.json({ error: 'ID invalide' }, { status: 400 })
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

    const existingTestimonial = await prisma.testimonial.findUnique({
      where: { id }
    })

    if (!existingTestimonial) {
      return NextResponse.json({ error: 'Témoignage non trouvé' }, { status: 404 })
    }

    const updatedTestimonial = await prisma.testimonial.update({
      where: { id },
      data: {
        fullname: fullname.trim(),
        function: func.trim(),
        comments: comments.trim(),
        rate: parseInt(rate.toString())
      }
    })

    return NextResponse.json(updatedTestimonial)
  } catch (error) {
    console.error('PUT /api/testimonials/[id] - Erreur:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la modification du témoignage' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)

    if (isNaN(id)) {
      return NextResponse.json({ error: 'ID invalide' }, { status: 400 })
    }

    const existingTestimonial = await prisma.testimonial.findUnique({
      where: { id }
    })

    if (!existingTestimonial) {
      return NextResponse.json({ error: 'Témoignage non trouvé' }, { status: 404 })
    }

    await prisma.testimonial.delete({
      where: { id }
    })

    return NextResponse.json({ message: 'Témoignage supprimé avec succès' })
  } catch (error) {
    console.error('DELETE /api/testimonials/[id] - Erreur:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la suppression du témoignage' },
      { status: 500 }
    )
  }
}