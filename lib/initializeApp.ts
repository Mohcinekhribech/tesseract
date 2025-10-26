import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function initializeApp() {
  try {
    // Create admin user if it doesn't exist
    const existingAdmin = await prisma.admin.findUnique({
      where: { email: "admin@tesseract.com" },
    })

    if (!existingAdmin) {
      const admin = await prisma.admin.create({
        data: {
          name: "Admin tesseract",
          email: "admin@tesseract.com",
          password: "admintesseract123", // Plain text for now
        },
      })
      console.log("✅ Admin created successfully:", admin.email)
    } else {
      console.log("ℹ️ Admin already exists:", existingAdmin.email)
    }
  } catch (error) {
    console.error("❌ Error initializing app:", error)
  }
}

// Run initialization
initializeApp()

export { initializeApp }
