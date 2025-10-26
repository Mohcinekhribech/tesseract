import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { ProfileData } from '@/types/profile'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const search = searchParams.get('search') || undefined

    const profiles = await getProfiles(search)
    return NextResponse.json(profiles)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Impossible de récupérer les profils' },
      { status: 500 }
    )
  }
}

export const getProfiles = async (search?: string) => {
  return prisma.profile.findMany({
    where: search
      ? {
          OR: [
            { fullName: { contains: search, mode: 'insensitive' } },
            { role: { contains: search, mode: 'insensitive' } }, 
            { education: { some: { degree: { contains: search, mode: 'insensitive' } } } },
            { experience: { some: { title: { contains: search, mode: 'insensitive' } } } },
          ],
        }
      : {},
    include: {
      education: true,
      experience: true,
      portfolio: true,
    },
    orderBy: { createdAt: 'desc' },
  })
}

export const createProfile = async (data: ProfileData) => {
  return prisma.profile.create({
    data: {
      fullName: data.fullName,
      role: data.role,
      aboutMe: data.aboutMe,
       imageUrl: data.imageUrl, 
      available: data.available ?? true,
      stars: data.stars ?? 0,           
      education: { create: data.education || [] },
      experience: { create: data.experience || [] },
      portfolio: { create: data.portfolio || [] },
    },
    include: {
      education: true,
      experience: true,
      portfolio: true,
    },
  })
}

export const updateProfileAvailability = async (id: number, available: boolean) => {
  return prisma.profile.update({
    where: { id },
    data: { available },
    include: {
      education: true,
      experience: true,
      portfolio: true,
    },
  });
}
export const updateProfile = async (
  id: number,
  data: Partial<ProfileData>
) => {
  const updatedProfile = await prisma.profile.update({
    where: { id },
    data: {
      fullName: data.fullName,
      aboutMe: data.aboutMe,
       imageUrl: data.imageUrl, 
      role: data.role,
      available: data.available,
      stars: data.stars,
    },
  });

  
  if (data.education) {
    await prisma.education.deleteMany({
      where: { profileId: id },
    });
    await prisma.education.createMany({
      data: data.education.map(edu => ({ ...edu, profileId: id })),
    });
  }

  if (data.experience) {
    await prisma.experience.deleteMany({
      where: { profileId: id },
    });
    await prisma.experience.createMany({
      data: data.experience.map(exp => ({ ...exp, profileId: id })),
    });
  }

  if (data.portfolio) {
    await prisma.portfolio.deleteMany({
      where: { profileId: id },
    });
    await prisma.portfolio.createMany({
      data: data.portfolio.map(proj => ({ ...proj, profileId: id })),
    });
  }

  return getProfileById(id);
}
export const getProfileById = async (id: number) => {
  return prisma.profile.findUnique({
    where: { id },
    include: {
      education: true,
      experience: true,
      portfolio: true,
    },
  })
}


export const deleteProfile = async (id: number) => {
  return await prisma.$transaction(async (tx) => {
    await tx.education.deleteMany({
      where: { profileId: id },
    })
    
    await tx.experience.deleteMany({
      where: { profileId: id },
    })
    
    await tx.portfolio.deleteMany({
      where: { profileId: id },
    })

    return tx.profile.delete({
      where: { id },
    })
  })
}
