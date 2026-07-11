import { Lang } from '@/types'

export type HeroContent = {
    greeting: string
    name: string
    description: string
    contactCta: string
    projectCta: string
    status: string
    profileAlt: string
}

export const heroContent: Record<Lang, HeroContent> = {
    th: {
        greeting: 'สวัสดี, ผม',
        name: 'Narawit Soiaudom',
        description:
            'ผมให้บริการพัฒนาเว็บไซต์และ Web Application ตามความต้องการของลูกค้า ตั้งแต่เว็บไซต์แนะนำบริษัท (Company Profile), Landing Page, Portfolio ไปจนถึงระบบที่มีฐานข้อมูลและระบบจัดการหลังบ้าน โดยใช้ React.js, Next.js, Node.js และ PostgreSQL พร้อมดูแลตั้งแต่การวางแผน พัฒนา ทดสอบ และนำเว็บไซต์ขึ้นใช้งานจริง เพื่อให้ได้เว็บไซต์ที่สวยงาม ใช้งานง่าย รองรับทุกอุปกรณ์ และพร้อมต่อยอดในอนาคต',
        contactCta: 'ติดต่อ',
        projectCta: 'ผลงาน',
        status: 'Full-Stack Developer',
        profileAlt: 'รูปโปรไฟล์ Narawit',
    },
    en: {
        greeting: 'Hi, I am',
        name: 'Narawit Soiaudom',
        description:
            'I provide custom website and web application development services tailored to client requirements, ranging from Company Profiles, Landing Pages, and Portfolios to database-driven systems with administrative backends. Using React.js, Next.js, Node.js, and PostgreSQL, I manage the entire lifecycle—from planning, development, and testing to deployment—ensuring beautiful, user-friendly, fully responsive, and future-proof websites.',
        contactCta: 'Contact Me',
        projectCta: 'View Projects',
        status: 'Full-Stack Developer',
        profileAlt: 'Narawit profile photo',
    },
}
