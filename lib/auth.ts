import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Credentials reçues :", credentials) 
        
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        try {
          // Find admin by email in database
          const admin = await prisma.admin.findUnique({
            where: { email: credentials.email }
          })

          if (!admin) {
            console.log("Admin not found")
            return null
          }

          // Verify password with bcrypt
          const isValidPassword = await bcrypt.compare(credentials.password, admin.password)
          
          if (isValidPassword) {
            return {
              id: admin.id.toString(),
              name: admin.name,
              email: admin.email,
              role: 'admin'
            } as any
          }

          console.log("Invalid password")
          return null
        } catch (error) {
          console.error("Authentication error:", error)
          return null
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      return token
    },
    async session({ session, token }) {
      return session
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`
      if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}
