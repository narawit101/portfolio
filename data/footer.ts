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
            'ผมพัฒนาเว็บแอปที่ใช้งานได้จริง โดยเน้นประสบการณ์ผู้ใช้ ประสิทธิภาพ และคุณภาพโค้ดที่ดูแลต่อได้ง่าย',
        servicesTitle: 'บริการ',
        serviceLinks: [
            'พัฒนาเว็บไซต์ด้วย Next.js',
            'พัฒนาแดชบอร์ดและระบบหลังบ้าน',
            'ออกแบบ REST API และโครงสร้างฐานข้อมูล',
            'ปรับปรุง UX/UI และประสิทธิภาพการใช้งาน',
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
            'I build practical web products with a strong focus on user experience, performance, and maintainable code.',
        servicesTitle: 'Services',
        serviceLinks: [
            'Next.js website development',
            'Admin dashboard and internal tools',
            'REST API and database architecture',
            'UX/UI refinement and optimization',
        ],
        navigationTitle: 'Navigation',
        contactTitle: 'Contact',
        telLabel: 'Tel',
        emailLabel: 'E-Mail',
        lineLabel: 'Line',
    },
}
