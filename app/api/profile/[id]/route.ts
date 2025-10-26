import { NextRequest, NextResponse } from 'next/server'
import { updateProfile, deleteProfile, getProfileById } from '../service'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const profileId = Number(id)
    
    if (isNaN(profileId)) {
      return NextResponse.json(
        { error: 'ID de profil invalide' },
        { status: 400 }
      )
    }

    const profile = await getProfileById(profileId)
    
    if (!profile) {
      return NextResponse.json(
        { error: 'Profil non trouvé' },
        { status: 404 }
      )
    }

    return NextResponse.json(profile)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération du profil' },
      { status: 500 }
    )
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const profileId = Number(params.id)
    
    if (isNaN(profileId)) {
      return NextResponse.json(
        { error: 'ID de profil invalide' },
        { status: 400 }
      )
    }

    const body = await req.json()
    const updated = await updateProfile(profileId, body)
    return NextResponse.json(updated)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour du profil' },
      { status: 500 }
    )
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const profileId = Number(params.id)
    
    if (isNaN(profileId)) {
      return NextResponse.json(
        { error: 'ID de profil invalide' },
        { status: 400 }
      )
    }

    const deleted = await deleteProfile(profileId)
    return NextResponse.json(deleted)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Erreur lors de la suppression du profil' },
      { status: 500 }
    )
  }
}