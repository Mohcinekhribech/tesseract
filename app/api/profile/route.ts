import { NextRequest, NextResponse } from 'next/server'
import { getProfiles, createProfile } from './service'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function GET() {
  try {
    const profiles = await getProfiles()
    return NextResponse.json(profiles)
  } catch (error) {
    return NextResponse.json({ error: 'Impossible de récupérer les profils' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()

    const profile = await createProfile(body)

    return NextResponse.json(profile)
  } catch (error) {
    return NextResponse.json({ error: 'Impossible de créer le profil' }, { status: 500 })
  }
}
