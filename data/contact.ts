import { Lang, LocalizedText } from '@/types'

export type ContactSectionText = {
    title: string
    subtitle: string
    terminalLabel: string
}

export type ContactItem = {
    icon: string
    label: LocalizedText
    value: string
    href?: string
    iconClass?: string
}

export const contactSectionText: Record<Lang, ContactSectionText> = {
    th: {
        title: 'ติดต่อ',
        subtitle: 'ช่องทางติดต่อ',
        terminalLabel: '$ cat contact.json',
    },
    en: {
        title: 'Contact',
        subtitle: 'Get In Touch',
        terminalLabel: '$ cat contact.json',
    },
}

export const contacts: ContactItem[] = [
    {
        icon: 'https://img.icons8.com/ios-filled/100/ffffff/phone.png',
        label: { th: 'โทรศัพท์', en: 'Phone' },
        value: '098-184-8532',
        href: 'tel:0981848532',
    },
    {
        icon: 'https://res.cloudinary.com/do6xlqizt/image/upload/v1773920728/mdi--gmail_rsnsn0.png',
        label: { th: 'อีเมล', en: 'Email' },
        value: 'narawit532@gmail.com',
        href: 'mailto:narawit532@gmail.com',
    },
    {
        icon: 'https://res.cloudinary.com/do6xlqizt/image/upload/v1773920729/line-app-logo-block_ek3x9i.png',
        label: { th: 'ไลน์', en: 'Line' },
        value: '@narawit101',
    },
    {
        icon: 'https://res.cloudinary.com/do6xlqizt/image/upload/v1773920729/fe--instagram_bzhyko.png',
        label: { th: 'อินสตาแกรม', en: 'Instagram' },
        value: 'iiceee.n',
        href: 'https://www.instagram.com/iiceee.n/',
    },
    {
        icon: 'https://res.cloudinary.com/do6xlqizt/image/upload/v1773920729/--facebook_h0f6hr.png',
        label: { th: 'เฟซบุ๊ก', en: 'Facebook' },
        value: 'Narawit Soiaudom',
        href: 'https://www.facebook.com/iceXD',
    },
    {
        icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        label: { th: 'กิทฮับ', en: 'GitHub' },
        value: 'narawit101',
        href: 'https://github.com/narawit101',
    },
]
