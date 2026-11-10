export interface ExperienceItem {
  id: string;
  role: string;
  institution: string;
  period: string;
  description: string;
}

export interface DegreeItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  period: string;
  gpa?: string;
  description: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  period: string;
  description: string;
  tags?: string[];
}

export interface SkillItem {
  name: string;
  category: 'hardware' | 'software' | 'networking';
  level?: string;
}

export interface Profile {
  name: string;
  honorific: string;
  title: string;
  department: string;
  institution: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  officeLocation: string;
  officeHours: string;
  bio: string;
  avatarUrl: string;
}

export interface PortfolioData {
  profile: Profile;
  experience: ExperienceItem[];
  degrees: DegreeItem[];
  certifications: CertificationItem[];
  projects: ProjectItem[];
  skills: SkillItem[];
}
