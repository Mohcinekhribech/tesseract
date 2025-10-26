import { NextRequest, NextResponse } from 'next/server';
import { updateProfileAvailability } from '../../service';

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'ID invalide' }, { status: 400 });
    }

    const { available } = await req.json();
    
    const updatedProfile = await updateProfileAvailability(id, available);
    
    return NextResponse.json(updatedProfile);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour de la disponibilité' },
      { status: 500 }
    );
  }
}