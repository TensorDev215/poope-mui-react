import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { NavContent, HeaderLogo } from '@/layouts/components';
import { Button } from '@mui/material';
import { MenuListType } from '@/types';
import AppIcon from '@/components/AppIcon';

const mainListItems: MenuListType[] = [
    { link: 'about', text: 'About' },
    { link: 'tokenomics', text: 'Tokenomics' },
    { link: 'roadmap', text: 'Roadmap' },
    { link: 'community', text: 'Community' },
    { link: 'faq', text: 'FAQ' }
]

export const Header = () => {
    const [isSticky, setIsSticky] = useState<boolean>(false)

    const handleConnectClick = () => {
        alert("Connect button is clicked!")
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => {
                setIsSticky(window.pageYOffset > 10)
            })
        }
    }, [])

    const handleLinkClick = () => {

    }

    return (
        <AppBar
            position='fixed'
            sx={{
                boxShadow: 0,
                backgroundImage: 0,
                borderBottom: 'none',
                width: '100vw',
                backgroundColor: 'transparent !important',

                ...(isSticky && {
                    backgroundColor: 'none'
                })
            }}
        >
            <Container maxWidth='lg' sx={{ py:'24px' }}>
                <Stack
                    direction='row'
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <HeaderLogo />
                    <NavContent list={mainListItems} handleClick={handleLinkClick} pop />

                    <Stack direction='row' gap={{ md: 2, xs: 1 }} sx={{ alignItems: 'center' }}>

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
                    </Stack>
                </Stack>
            </Container>
        </AppBar>
    )
}