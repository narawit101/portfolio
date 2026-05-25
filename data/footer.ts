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
            'มุ่งมั่นพัฒนาเว็บแอปพลิเคชันประสิทธิภาพสูงที่ตอบโจทย์ผู้ใช้งานจริง โดยให้ความสำคัญกับโครงสร้างโค้ดที่สะอาด ปลอดภัย การทำงานที่รวดเร็ว และง่ายต่อการขยายระบบในระยะยาว',
        servicesTitle: 'บริการ',
        serviceLinks: [
            'พัฒนาเว็บแอปพลิเคชันด้วย Next.js',
            'ออกแบบแดชบอร์ดและระบบจัดการหลังบ้าน',
            'พัฒนา RESTful API และสถาปัตยกรรมฐานข้อมูล',
            'ปรับปรุง UX/UI และเพิ่มประสิทธิภาพการประมวลผล',
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
            'Building high-performance, user-centric web applications with a commitment to clean architecture, robust security, optimal speed, and maintainable codebases.',
        servicesTitle: 'Services',
        serviceLinks: [
            'Next.js Web Development',
            'Custom Dashboards & Internal Tools',
            'RESTful APIs & Database Design',
            'UX/UI Refinement & Performance Optimization',
        ],
        navigationTitle: 'Navigation',
        contactTitle: 'Contact',
        telLabel: 'Tel',
        emailLabel: 'E-Mail',
        lineLabel: 'Line',
    },
}
