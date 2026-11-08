import { Lang, LocalizedText } from '@/types'

export type ContactSectionText = {
    title: string
    subtitle: string
    description: string
}

export type ContactItem = {
    key: 'phone' | 'email' | 'line' | 'instagram' | 'facebook' | 'github'
    icon: string
    label: LocalizedText
    value: string
    href?: string
    iconClass?: string
}

export const contactSectionText: Record<Lang, ContactSectionText> = {
    th: {
        title: 'ติดต่อ',
        subtitle: 'Get In Touch',
        description: 'สนใจร่วมงานหรือมีโปรเจกต์ที่ต้องการพัฒนา สามารถติดต่อพูดคุยกับผมได้โดยตรงผ่านช่องทางด้านล่างครับ',
    },
    en: {
        title: 'Contact',
        subtitle: 'Get In Touch',
        description: 'Interested in collaborating or have a project in mind? Feel free to reach out via any of the channels below.',
    },
}

export const contacts: ContactItem[] = [
    {
        key: 'phone',
        icon: 'phone',
        label: { th: 'โทรศัพท์', en: 'Phone' },
        value: '098-184-8532',
        href: 'tel:0981848532',
    },
    {
        key: 'email',
        icon: 'email',
        label: { th: 'อีเมล', en: 'Email' },
        value: 'narawit532@gmail.com',
        href: 'mailto:narawit532@gmail.com',
    },
    {
        key: 'line',
        icon: 'line',
        label: { th: 'ไลน์', en: 'Line' },
        value: '@narawit101',
    },
    {
        key: 'instagram',
        icon: 'instagram',
        label: { th: 'อินสตาแกรม', en: 'Instagram' },
        value: 'iiceee.n',
        href: 'https://www.instagram.com/iiceee.n/',
    },
    {
        key: 'facebook',
        icon: 'facebook',
        label: { th: 'เฟซบุ๊ก', en: 'Facebook' },
        value: 'Narawit Sroiudom',
        href: 'https://www.facebook.com/iceXD',
    },
    {
        key: 'github',
        icon: 'github',
        label: { th: 'GitHub', en: 'GitHub' },
        value: 'narawit101',
        href: 'https://github.com/narawit101',
    },
]
