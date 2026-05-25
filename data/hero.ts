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
            'บัณฑิตคณะวิศวกรรมคอมพิวเตอร์ที่มีพื้นฐานแข็งแรงด้านการพัฒนาเว็บ Full-stack และการออกแบบระบบ มีประสบการณ์ทำเว็บแอปสมัยใหม่ด้วย React.js, Next.js, HTML, CSS และ JavaScript ทั้งฝั่ง Frontend และ Backend สามารถพัฒนา UI ที่ใช้งานง่าย เชื่อมต่อ API จัดการฐานข้อมูล และสร้างระบบที่รองรับการขยายตัวได้ พร้อมทำงานร่วมกับทีมเพื่อพัฒนาฟีเจอร์ใหม่ ปรับปรุงประสิทธิภาพ และรักษาคุณภาพโค้ดให้ดูแลง่ายในระยะยาว',
        contactCta: 'ติดต่อ',
        projectCta: 'ผลงาน',
        status: 'Full-Stack Developer',
        profileAlt: 'รูปโปรไฟล์ Narawit',
    },
    en: {
        greeting: 'Hi, I am',
        name: 'Narawit Soiaudom',
        description:
            'I am a Computer Engineering graduate with a strong foundation in full-stack web development and system design. I have hands-on experience building modern web applications with React.js, Next.js, HTML, CSS, and JavaScript across both frontend and backend. I can craft user-friendly interfaces, integrate APIs, manage databases, and build scalable products, while collaborating with teams to ship features, improve performance, and maintain clean, maintainable code.',
        contactCta: 'Contact Me',
        projectCta: 'View Projects',
        status: 'Full-Stack Developer',
        profileAlt: 'Narawit profile photo',
    },
}
