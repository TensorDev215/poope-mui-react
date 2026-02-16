import { useCallback, useEffect, useMemo, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { NavContent, HeaderLogo } from '@/layouts/components';
import { Box, Button, Drawer, IconButton, StepConnector } from '@mui/material';
import { MenuListType } from '@/types';
import AppIcon from '@/components/AppIcon';
import ColorModeIcon from '@/theme/ColorModeIcon';
import Hamburger from '@/components/Hamburger';

import ConnectDialog from '@/layouts/components/ConnectDialog';

const mainListItems: MenuListType[] = [
    { link: 'about', text: 'About' },
    { link: 'tokenomics', text: 'Tokenomics' },
    { link: 'roadmap', text: 'Roadmap' },
    { link: 'community', text: 'Community' },
    { link: 'faq', text: 'FAQ' }
]

const emails = ['username@gmail.com', 'user02@gmail.com']

export const Header = () => {
    const [isSticky, setIsSticky] = useState<boolean>(false)
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    const [open, setOpen] = useState(false)
    const [ selectedValue, setSelectedValue ] = useState(emails[1])

    const handleClose = (value: string) => {
        setOpen(false)
        setSelectedValue(value)
    }

    const toggleMenu = useCallback(() => {
        setMenuOpen(pre => !pre)
    }, [])


    const handleConnectClick = () => {
        setOpen(true)
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => {
                setIsSticky(window.pageYOffset > 10)
            })
        }
    }, [])

    const handleLinkClick = useCallback ((id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({
            behavior: 'smooth'
        })
        setMenuOpen(false)
    }, [])

    const DrawerContent = useMemo(
        () => (
            <Stack
                direction='column'
                sx={{
                    paddingInline: '20px',
                    height: '100vh'
                }}
            >
                <Stack
                    direction='row'
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingBlock: '24px'
                    }}
                >
                    <Stack direction='row' gap={1}>
                        <Box
                            component='img'
                            sx={{
                                height: 36,
                                width: 36
                            }}
                            alt='Header Icon'
                            src='/assets/images/header-logo.png'
                        />
                        <Typography component={'h2'} variant='h3' sx={{ textTransform: 'uppercase' }} >
                            Poope
                        </Typography>
                    </Stack>
                    <Hamburger toggleMenu={toggleMenu} menuopen={menuOpen} />
                </Stack>
                <NavContent list={mainListItems} handleClick={handleLinkClick} pop />
                <Stack
                    direction='row'
                    gap={2}
                    sx={{ alignItems: 'center', paddingBlock: '24px', width: '100%', justifyContent: 'center' }}
                >
                    <ColorModeIcon />
                    <Button
                        variant='contained'
                        color='primary'
                        startIcon={<AppIcon name='wallet' />}
                        onClick={handleConnectClick}
                        sx={{ width: '100%' }}
                    >
                        Connect Wallet
                    </Button>
                    
                    <ConnectDialog 
                        selectedValue={selectedValue}
                        open={open}
                        onClose={handleClose}
                    />
                </Stack>
            </Stack>
        ), [menuOpen]
    )

    return (
        <AppBar
            position='fixed'
            elevation={0}
            sx={{
                boxShadow: 'none',
                backgroundImage: 0,
                
                borderBottom: 'none',
                width: '100vw',
                backdropFilter: 'none',
                backgroundColor: 'transparent !important',

                ...(isSticky && {
                    backgroundColor: 'none'
                })
            }}
        >
            <Container maxWidth='lg' sx={{ py:'24px' }}>
                <Stack
                    direction="row"
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <HeaderLogo />
                    <NavContent list={mainListItems} handleClick={handleLinkClick} />
                    
                    <Stack direction='row' gap={{ md: 2, xs: 1 }} sx={{ alignItems: 'center' }}>
                        <ColorModeIcon />
                        <Button
                            variant='contained'
                            color='primary'
                            startIcon={<AppIcon name='wallet' />}
                            sx={{
                                display: { lg: 'inline-flex', xs: 'none'}
                            }}
                            onClick={handleConnectClick}
                        >
                            Connect
                        </Button>
                            <ConnectDialog 
                                selectedValue={selectedValue}
                                open={open}
                                onClose={handleClose}
                            />
                        

                        <Hamburger toggleMenu={toggleMenu} menuopen={menuOpen} />
                    </Stack>
                </Stack>
            </Container>

            <Drawer open={menuOpen} onClose={toggleMenu} anchor='top'>
                {DrawerContent}
            </Drawer>
        </AppBar>
    )
}