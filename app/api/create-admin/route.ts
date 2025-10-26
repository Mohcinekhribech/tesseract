import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const existingAdmin = await prisma.admin.findUnique({
      where: { email: 'admin@tesseract.com' },
    })

    if (existingAdmin) {
      return NextResponse.json({ message: 'Admin already exists', admin: existingAdmin })
    }

    const admin = await prisma.admin.create({
      data: {
        name: 'Admin tesseract',
        email: 'admin@tesseract.com',
        password: 'admintesseract123',
      },
    })

    return NextResponse.json({ message: 'Admin created successfully', admin })
  } catch (error) {
    console.error('Error creating admin:', error)
    return NextResponse.json({ error: 'Failed to create admin' }, { status: 500 })
  }
}
