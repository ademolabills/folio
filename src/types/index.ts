export type SkillGroup = { category: string; skills: { name: string; level: number }[] };
export type Project = { id: string; title: string; category: string; tech: string[]; description: string; features: string[]; challenge: string; learned: string; github: string; demo: string; accent: string };
export type Experience = { period: string; role: string; company: string; description: string };
export type Testimonial = { quote: string; name: string; role: string };
