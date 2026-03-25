export interface Project {
    id: number
    head: string
    description: string
    pictures: string[]
    tags?: string[]
}

export type TechStackItem = {
    name: string
    img: string
}

export type TechStackCategory = {
    title: string
    description: string
    accent: string
    items: TechStackItem[]
}
