export type Lang = 'th' | 'en'

export type LocalizedText = {
    th: string
    en: string
}

export interface CredentialRole {
    name: LocalizedText
    username?: string
    password?: string
}

export interface Project {
    id: number
    head: LocalizedText
    description: LocalizedText
    pictures: string[]
    tags?: string[]
    githubUrl?: string
    demoUrl?: string
    demoCredentials?: CredentialRole[]
    demoInstruction?: LocalizedText
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
