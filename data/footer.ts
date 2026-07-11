import { Lang } from '@/types'

export type FooterSectionCopy = {
    profileTitle: string
    profileDescription: string
    servicesTitle: string
    serviceLinks: string[]
    navigationTitle: string
    contactTitle: string
    telLabel: string
    emailLabel: string
    lineLabel: string
}

export const footerCopy: Record<Lang, FooterSectionCopy> = {
    th: {
        profileTitle: 'Narawit',
        profileDescription:
            'ผมให้บริการพัฒนาเว็บไซต์และ Web Application ที่ตอบโจทย์การใช้งานจริง โดยให้ความสำคัญกับการออกแบบที่ใช้งานง่าย ความรวดเร็ว ความปลอดภัย และโครงสร้างระบบที่สามารถต่อยอดได้ในอนาคต พร้อมดูแลตั้งแต่เริ่มต้นจนเว็บไซต์พร้อมใช้งาน',
        servicesTitle: 'บริการ',
        serviceLinks: [
            'เว็บไซต์แนะนำบริษัท & Landing Page',
            'เว็บแอปพลิเคชัน & ระบบจัดการหลังบ้าน',
            'พัฒนา API & ออกแบบฐานข้อมูล',
            'ดูแลแบบ Full-Cycle (วางแผน-ดีพลอย)',
        ],
        navigationTitle: 'เมนูนำทาง',
        contactTitle: 'ติดต่อ',
        telLabel: 'โทร',
        emailLabel: 'อีเมล',
        lineLabel: 'ไลน์',
    },
    en: {
        profileTitle: 'Narawit',
        profileDescription:
            'I deliver website and web application development services designed for real-world usability, prioritizing user-friendly design, high performance, robust security, and future-proof system architecture, with end-to-end support from concept to launch.',
        servicesTitle: 'Services',
        serviceLinks: [
            'Company Profiles & Landing Pages',
            'Web Applications & Admin Systems',
            'API Development & Database Design',
            'Full-Cycle Support (Planning to Launch)',
        ],
        navigationTitle: 'Navigation',
        contactTitle: 'Contact',
        telLabel: 'Tel',
        emailLabel: 'E-Mail',
        lineLabel: 'Line',
    },
}
