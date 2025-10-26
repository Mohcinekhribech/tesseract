import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function createAdminIfNotExists() {
  try {
    const existingAdmin = await prisma.admin.findUnique({
      where: { email: "admin@tesseract.com" },
    })

    if (existingAdmin) {
      console.log("Admin already exists:", existingAdmin.email)
    } else {
      const admin = await prisma.admin.create({
        data: {
          name: "Admin tesseract",
          email: "admin@tesseract.com",
          password: "admintesseract123", // Plain text for now
        },
      })
      console.log("Admin created successfully:", admin.email)
    }
  } catch (error) {
    console.error("Error creating admin:", error)
  }
}

export { createAdminIfNotExists }
