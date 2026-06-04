import { TechStackCategory } from '@/types'

export const techStackCategories: TechStackCategory[] = [
    {
        title: {
            th: 'Front-End',
            en: 'Front-End',
        },
        description: {
            th: 'พัฒนาอินเทอร์เฟซที่ตอบสนองรวดเร็ว รองรับการแสดงผลทุกหน้าจอ (Responsive) และสร้างประสบการณ์ผู้ใช้ที่ลื่นไหล',
            en: 'Interactive user interfaces, responsive layouts, and rich client-side experiences.',
        },
        accent: 'from-primary/50 via-primary/25 to-primary-400/20',
        items: [
            { name: 'HTML', img: 'https://thesvg.org/icons/html5/default.svg' },
            { name: 'CSS', img: 'https://thesvg.org/icons/css3/default.svg' },
            { name: 'JavaScript', img: 'https://thesvg.org/icons/javascript/default.svg' },
            { name: 'TypeScript', img: 'https://thesvg.org/icons/typescript/default.svg' },
            { name: 'React', img: 'https://thesvg.org/icons/react/default.svg' },
            { name: 'Next.js', img: 'https://thesvg.org/icons/nextdotjs/default.svg' },
            { name: 'Tailwind CSS', img: 'https://thesvg.org/icons/tailwind-css/default.svg' },
            { name: 'Figma', img: 'https://thesvg.org/icons/figma/default.svg' },
        ],
    },
    {
        title: {
            th: 'Back-End',
            en: 'Back-End',
        },
        description: {
            th: 'ออกแบบ API, พัฒนาตรรกะการประมวลผล (Business Logic) และจัดการระบบฝั่งเซิร์ฟเวอร์อย่างมีประสิทธิภาพ',
            en: 'API design, business logic, and server-side orchestration.',
        },
        accent: 'from-primary/50 via-primary/25 to-primary-400/20',
        items: [
            { name: 'Node.js', img: 'https://thesvg.org/icons/nodedotjs/default.svg' },
            {
                name: 'Express.js',
                img: {
                    light: 'https://thesvg.org/icons/expressdotjs/light.svg',
                    dark: 'https://thesvg.org/icons/expressdotjs/dark.svg',
                },
            },
        ],
    },
    {
        title: {
            th: 'การจัดการฐานข้อมูล',
            en: 'Database Management',
        },
        description: {
            th: 'จัดการระบบฐานข้อมูลทั้งแบบเชิงสัมพันธ์ (Relational) และแบบ In-Memory เพื่อประสิทธิภาพสูงสุดของระบบ',
            en: 'Relational and in-memory data storage systems.',
        },
        accent: 'from-primary/50 via-primary/25 to-primary-400/20',
        items: [
            { name: 'PostgreSQL', img: 'https://thesvg.org/icons/postgresql/default.svg' },
            {
                name: 'MySQL', img: {
                    light: 'https://thesvg.org/icons/mysql/light.svg',
                    dark: 'https://thesvg.org/icons/mysql/dark.svg'
                }
            },
            { name: 'Redis', img: 'https://thesvg.org/icons/redis/default.svg' },
            {
                name: 'Prisma', img: {
                    light: 'https://thesvg.org/icons/prisma/light.svg',
                    dark: 'https://thesvg.org/icons/prisma/dark.svg'
                }
            },
        ],
    },
    {
        title: {
            th: 'ไอโอทีและระบบสมองกลฝังตัว',
            en: 'IoT & Embedded Systems',
        },
        description: {
            th: 'ออกแบบเฟิร์มแวร์ไมโครคอนโทรลเลอร์ (C++), พัฒนาระบบประมวลผลเซ็นเซอร์ และควบคุมฮาร์ดแวร์แบบเรียลไทม์',
            en: 'Microcontroller firmware design (C++), sensor ingestion, and real-time hardware control.',
        },
        accent: 'from-primary/50 via-primary/25 to-primary-400/20',
        items: [
            { name: 'ESP32', img: 'https://thesvg.org/icons/espressif/default.svg' },
            { name: 'Arduino', img: 'https://thesvg.org/icons/arduino/default.svg' },
        ],
    },
    {
        title: {
            th: 'เครื่องมือพัฒนา',
            en: 'Tools',
        },
        description: {
            th: 'ควบคุมเวอร์ชันของโค้ด (Version Control) และจัดการ Workflow แบบ Container เพื่อการทำงานร่วมกันที่ราบรื่น',
            en: 'Version control and containerized workflows.',
        },
        accent: 'from-primary/50 via-primary/25 to-primary-400/20',
        items: [
            { name: 'Git', img: 'https://thesvg.org/icons/git/default.svg' },
            { name: 'Docker', img: 'https://thesvg.org/icons/docker/default.svg' },
        ],
    },
    {
        title: {
            th: 'คลาวด์และการดีพลอย',
            en: 'Cloud & Deployment',
        },
        description: {
            th: 'โฮสต์แอปพลิเคชันบนคลาวด์, จัดการระบบแบบ Serverless และกระจายข้อมูลผ่าน Edge Network เพื่อการเข้าถึงที่รวดเร็ว',
            en: 'Cloud hosting, serverless workloads, and edge delivery.',
        },
        accent: 'from-primary/50 via-primary/25 to-primary-400/20',
        items: [
            {
                name: 'Vercel', img: {
                    light: 'https://thesvg.org/icons/vercel/light.svg',
                    dark: 'https://thesvg.org/icons/vercel/dark.svg'
                }
            },
            {
                name: 'Railway', img: {
                    light: 'https://thesvg.org/icons/railway/light.svg',
                    dark: 'https://thesvg.org/icons/railway/dark.svg'
                }
            },
            { name: 'Supabase', img: 'https://thesvg.org/icons/supabase/default.svg' },
            { name: 'Upstash', img: 'https://thesvg.org/icons/upstash/default.svg' },
            { name: 'Cloudinary', img: 'https://thesvg.org/icons/cloudinary/default.svg' },
            {
                name: 'Render', img: 'https://thesvg.org/icons/render/default.svg'
            },
        ],
    },
]
