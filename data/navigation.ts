import { LocalizedText } from '@/types'

export type NavigationItem = {
    id: string
    href: string
    label: LocalizedText
}

export const siteBrand: LocalizedText = {
    th: 'พอร์ตโฟลิโอ',
    en: 'Portfolio',
}

export const navigationItems: NavigationItem[] = [
    {
        id: 'section-hero',
        href: '#section-hero',
        label: { th: 'หน้าแรก', en: 'Home' },
    },
    {
        id: 'section-stack',
        href: '#section-stack',
        label: { th: 'ทักษะ', en: 'Tech Stack' },
    },
    {
        id: 'section-project',
        href: '#section-project',
        label: { th: 'โปรเจกต์', en: 'Projects' },
    },
    {
        id: 'section-contact',
        href: '#section-contact',
        label: { th: 'ติดต่อ', en: 'Contact' },
    },
]
