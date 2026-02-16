import { ReactNode } from "react"

export interface SectionPropsType {
    sectionId: string
}

export interface MenuListType {
    link: string,
    text: string,
}

export interface NavigationItemType {
    link: string
    text: string
    icon: ReactNode
    handleClick?: () => void
}