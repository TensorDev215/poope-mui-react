import { List, Stack, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { NavigationItemType } from '@/types'

import { styled } from '@mui/material'
import { colors } from '@/theme/themePrimitives'

import { NavLink, useNavigate } from 'react-router-dom'
import { SideBarMenuListItems, SideBarSubListItems, secondSideBarMenuListItems } from '@/constants/sidebarlist'
import { useWallet } from '@solana/wallet-adapter-react'

const StyledListItem = styled(ListItem)({
    display: 'block',
    padding: '12px',
    color: colors['gray'],

    '& svg': {
        color: colors['gray']
    },

    '& .MuiTypography-root': {
        fontSize: '16px'
    },

    '&:hover': {
        color: colors['white'],
        '& svg': {
            color: colors['white']
        },

        '& .MuiButtonBase-root': {
            backgroundColor: 'transparent'
        }
    },

    '& .active': {
        color: colors['white'],
        '& svg': {
            color: colors['white']
        },

        '& .MuiButtonBase-root': {
            backgroundColor: 'transparent'
        }
    }
})

const NavigationItemList = ({ list }: { list: NavigationItemType[] }) => {
    return (
        <List dense sx={{ display: 'flex', flexDirection: 'column', gap: '8px', p: 0 }}>
            {list.map((item, index) => (
                <StyledListItem key={index}>
                    <ListItemButton
                        component={item.link === 'logout' ? 'button' : NavLink}
                        to={item.link === 'logout' ? '#' : item.link}
                        onClick={item.onClick}
                        sx={{ p: 0 }}
                    >
                        <ListItemIcon sx={{ minWidth: 0, mr: '12px' }}>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} sx={{ m: 0 }} />
                    </ListItemButton>
                </StyledListItem>
            ))}
        </List>
    )
}

export const MenuContent: React.FC<{ notificationState: boolean }> = ({ notificationState }) => {
    const { disconnect } = useWallet()
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token')
        sessionStorage.removeItem('address')
        disconnect()

        navigate('/')
    }

    const updatedSideBarSubListItems = SideBarSubListItems.map(item => {
        if (item.link == 'logout') {
            return {
                ...item,
                onClick: handleLogout
            }
        }
        
return item
    })

    return (
        <Stack sx={{ flewGrow: 1, height: '100%', justifyContent: 'space-between' }}>
            {notificationState ? (
                <NavigationItemList list={SideBarMenuListItems} />
            ) : (
                <NavigationItemList list={secondSideBarMenuListItems} />
            )}

            <NavigationItemList list={updatedSideBarSubListItems} />
        </Stack>
    )
}
