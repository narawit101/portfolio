export type Lang = 'th' | 'en'

export type LocalizedText = {
    th: string
    en: string
}

export interface Project {
    id: number
    head: LocalizedText
    description: LocalizedText
    pictures: string[]
    tags?: string[]
}

export type TechStackItem = {
    name: string
    img: string
}

export type TechStackCategory = {
    title: LocalizedText
    description: LocalizedText
    accent: string
    items: TechStackItem[]
}
