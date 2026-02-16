import AppIcon from "@/components/AppIcon"
import { ReactNode } from "react"

interface WalletButtonType {
  text: string
  startIcon: ReactNode
  endIcon?: ReactNode
}


export const WalletButtonList: WalletButtonType[] = [
  {
    text: 'Metamask',
    startIcon: <AppIcon name='metamask' size={24} />
  },
  {
    text: 'Phantom',
    startIcon: <AppIcon name='phantom' size={24} />
  },
  {
    text: 'Solflare',
    startIcon: <AppIcon name='solflare' size={24} />
  },
  {
    text: 'More',
    startIcon: <AppIcon name='more' size={24} />,
    endIcon: <AppIcon name='down' size={20} />
  }
]