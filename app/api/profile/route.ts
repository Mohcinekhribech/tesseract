import { NextRequest, NextResponse } from 'next/server'
import { getProfiles, createProfile } from './service'

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
    const body = await req.json()

    const profile = await createProfile(body)

    return NextResponse.json(profile)
  } catch (error) {
    return NextResponse.json({ error: 'Impossible de créer le profil' }, { status: 500 })
  }
}
