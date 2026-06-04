export type Lang = 'th' | 'en'

export type LocalizedText = {
    th: string
    en: string
}

export interface DemoStep {
    title: LocalizedText
    detail: LocalizedText
}

export interface DemoTab {
    name: LocalizedText
    username?: string
    password?: string
    steps?: DemoStep[]
}

export interface Project {
    id: number
    head: LocalizedText
    description: LocalizedText
    pictures: string[]
    tags?: string[]
    githubUrl?: string
    demoUrl?: string
    demoTabs?: DemoTab[]
    demoInstruction?: LocalizedText
}

export type TechStackItem = {
    name: string
    img: string | { light: string; dark: string }
}

export type TechStackCategory = {
    title: LocalizedText
    description: LocalizedText
    accent: string
    items: TechStackItem[]
}
