import AppIcon from "@/components/AppIcon"
import { NavigationItemType } from "@/types"


export const SideBarMenuListItems: NavigationItemType[] = [
  { link: 'dashboard', text: 'Dashboard', icon: <AppIcon name='dashboard' size={24} /> },
  { link: 'transactions', text: 'Transactions', icon: <AppIcon name='transactions' size={24} /> },
  { link: 'market', text: 'Market', icon: <AppIcon name='market' size={24} /> },
  { link: 'notification', text: 'Notification', icon: <AppIcon name='notification' size={24} /> },
  { link: 'settings', text: 'Settings', icon: <AppIcon name='settings' size={24} /> }
]

export const SideBarSubListItems: NavigationItemType[] = [
  { link: 'support', text: 'Support', icon: <AppIcon name='support' size={24} /> },
  { link: 'logout', text: 'Log Out', icon: <AppIcon name='logout' size={24} /> }
]
