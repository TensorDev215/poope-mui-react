import { ReactNode } from 'react'

export interface SectionPropsType {
    sectionId: string
}

export interface MenuListType {
    link: string
    text: string
}

export interface NavigationItemType {
    link: string
    text: string
    icon: ReactNode
    onClick?: () => void
}

export interface SendTransactionPropsType {
    amount: number
    type: boolean
}

export interface ReceiveMessageType {
    message: string
}

export interface TransactionPropsType {
    id: number
    address: string
    amount: number
    date: string
    type: string
}
