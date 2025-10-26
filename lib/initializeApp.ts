import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function initializeApp() {
  try {
    console.log("🚀 Starting app initialization...")
    
    // Wait a bit for database to be ready
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Test database connection first
    await prisma.$connect()
    console.log("✅ Database connected successfully")
    
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
  } finally {
    await prisma.$disconnect()
  }
}

// Run initialization
initializeApp()

export { initializeApp }
