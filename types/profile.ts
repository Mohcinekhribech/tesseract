export type EducationData = {
  id: number
  school: string
  degree: string
  year: number
}

export type ExperienceData = {
  id: number
  title: string
  company: string
  startYear: number
  endYear?: number
  description: string
}

export type PortfolioData = {
  id: number
  title: string
  client?: string
  imageUrl: string
  techStack?: string
}

export type ProfileData = {
  id: number
  fullName: string
  aboutMe: string
   available?: boolean  
   imageUrl?: string 
  stars?: number 
  role?: string 
  education?: EducationData[]
  experience?: ExperienceData[]
  portfolio?: PortfolioData[]
}
