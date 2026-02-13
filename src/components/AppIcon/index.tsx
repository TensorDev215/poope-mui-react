import { FC, memo } from 'react'

import Stack from '@mui/material/Stack'
import { colors } from '@/theme/themePrimitives'
import SunIcon from '@/assets/icons/sun.svg'
import MoonIcon from '@/assets/icons/moon.svg'
import WalletIcon from '@/assets/icons/wallet.svg'
import DownIcon from '@/assets/icons/down.svg'
import MouseIcon from '@/assets/icons/mouse.svg'
import ArrowDownIcon from '@/assets/icons/arrowDown.svg'
import MetamaskIcon from '@/assets/icons/metamask.svg'
import PhantomIcon from '@/assets/icons/phantom.svg'
import SolflareIcon from '@/assets/icons/solflare.svg'
import MoreIcon from '@/assets/icons/more.svg'
import DashboardIcon from '@/assets/icons/dashboard.svg'
import TransactionsIcon from '@/assets/icons/transactions.svg'
import MarketIcon from '@/assets/icons/Market.svg'
import NotificationIcon from '@/assets/icons/notification.svg'
import SettingsIcon from '@/assets/icons/settings.svg'
import SupportIcon from '@/assets/icons/support.svg'
import LogoutIcon from '@/assets/icons/logout.svg'
import RightIcon from '@/assets/icons/right.svg'
import AddIcon from '@/assets/icons/add.svg'
import CalendarIcon from '@/assets/icons/calendar.svg'

export const ICON_MAP = {
  sun: SunIcon,
  moon: MoonIcon,
  wallet: WalletIcon,
  down: DownIcon,
  mouse: MouseIcon,
  arrowDown: ArrowDownIcon,
  metamask: MetamaskIcon,
  phantom: PhantomIcon,
  solflare: SolflareIcon,
  more: MoreIcon,
  dashboard: DashboardIcon,
  transactions: TransactionsIcon,
  market: MarketIcon,
  notification: NotificationIcon,
  settings: SettingsIcon,
  support: SupportIcon,
  logout: LogoutIcon,
  right: RightIcon,
  add: AddIcon,
  calendar: CalendarIcon
}

export type IconName = keyof typeof ICON_MAP

interface AppIconProps {
    name: IconName
    size?: number
    color?: keyof typeof colors
}

const AppIcon: FC<AppIconProps> = ({ name, size = 20, color, ...props }) => {
    const IconComponent = ICON_MAP[name];

    return (
        <Stack
            className='app-icon'
            sx={{
                alignItems: 'center',
                justifyContent: 'center',
                color: color && colors[color],
                '& svg': {
                    height: size
                }
            }}
            {...props}
        >
            <IconComponent />
        </Stack>
    )
}

export default memo(AppIcon)