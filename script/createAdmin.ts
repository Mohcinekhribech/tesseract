import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

async function main() {
  const password = "admintesseract123" 
  const hash = await bcrypt.hash(password, 10)

  const existingAdmin = await prisma.admin.findUnique({
    where: { email: "admin@tesseract.com" },
  })

  if (existingAdmin) {
    console.log("Admin déjà existant :", existingAdmin.email)
  } else {
    const admin = await prisma.admin.create({
      data: {
        name: "Admin tesseract",
        email: "admin@tesseract.com",
        password: hash,
      },
    })
    console.log("Admin créé avec succès :", admin.email)
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
