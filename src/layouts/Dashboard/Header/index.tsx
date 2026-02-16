import { AppBar, Stack, Typography, Button, IconButton, Avatar } from "@mui/material"
import { useEffect, useState, useCallback } from "react"
import { FiChevronRight } from 'react-icons/fi'
import LanguagePicker from "@/components/LanguagePicker"
import AppIcon from "@/components/AppIcon"

import { useDeviceType } from "@/hooks"
import { IoMenuSharp, IoSearchOutline } from 'react-icons/io5'
import ColorModeIcon from "@/theme/ColorModeIcon"
import { SearchInput } from "@/components/Inputs"
import { HeaderLogo } from "@/layouts/components"
import SidebarMobile from "../Sidebar/SideBarMobile"
import { HeaderText } from "@/layouts/components/HeaderText"


const Header = () => {
    const [isSticky, setIsSticky] = useState<boolean>(false)
    const { isMobile } = useDeviceType()
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

    const toggleDrawer = useCallback(() => {
        setSidebarOpen(pre => !pre)
    }, [])


    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => {
                setIsSticky(window.pageYOffset > 18) 
            })
        }
    }, [])

    return(
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                boxShadow: 0,
                backgroundImage: 'none',
                borderBottom: 'none',
                
                width: { md: 'calc(100vw - 220px)', xs: '100vw' },
                backgroundColor: 'transparent !important',
                padding: { md: '24px 32px', xs: '16px 20px' },
                backdropFilter: 'none',

                ...(isSticky && {
                backgroundColor: 'none'
            })
        }}
        >
            <Stack direction="row" gap={4} alignItems='center' flexDirection={{ md: 'row', xs: 'column-reverse' }}>
                <Stack direction='row' alignItems='center' width='100%' gap={2}>
                    <Typography component={'h2'} variant="subtitle1" fontWeight={500} sx={{ flexGrow: 1, textTransform: 'capitalize' }}>
                        <HeaderText />
                    </Typography>
                    <LanguagePicker signFontSize="14px" showLabel={!isMobile} />

                    <Button
                        variant="text"
                        color="secondary"
                        endIcon={<FiChevronRight size={16} />}
                        sx={{ minWidth: '0',
                            '& .MuiButton-icon': {
                                ...(isMobile && {
                                    margin: 0
                                })
                            }
                         }}
                    >
                        {!isMobile && 'Manage'}
                    </Button>
                </Stack>

                <Stack direction='row' justifyContent='space-between' width={{ md: 'auto', xs: '100%' }}>
                    {
                        isMobile && (
                            <Stack direction='row' gap={1} alignItems='center'>
                                <IconButton color="inherit" sx={{p: 0, border: 0}} onClick={toggleDrawer}>
                                    <IoMenuSharp />
                                </IconButton>
                                <HeaderLogo disableText />
                            </Stack>
                        )
                    }
                    <Stack direction='row' gap={{ md: 2, xs: 0.5 }} alignItems='center'>
                        {isMobile && <ColorModeIcon sx={{ border: 'none' }} />}
                        
                        {isMobile ? (
                            <IconButton sx={{ padding: '8px', border: 0 }}>
                                <IoSearchOutline size={24} />
                            </IconButton>
                        ) : (
                            <SearchInput />
                        )}

                        {!isMobile && <ColorModeIcon sx={{ border: 'none' }} />}
                        <IconButton sx={{ padding: '8px', border: 0 }}>
                            <AppIcon name="notification" size={24} />
                        </IconButton>

                        <Avatar alt='Avatar' src='assets/images/avatar.png' sx={{ border: '2px solid' }} />
                    </Stack>
                </Stack>
            </Stack>

            <SidebarMobile open={sidebarOpen} toggleDrawer={toggleDrawer} />
        </AppBar>
    )

}

export default Header