import Sidebar from "./Sidebar";
import Header from "./Header";
import { Loading } from "@/pages";

import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Box, Stack, styled } from "@mui/material";

const DashboardBox = styled(Box) (({theme}) => ({
    width: '100vw',
    marginLeft: '0',
    paddingBottom: '28px',
    paddingLeft: '48px',
    paddingRight: '48px',
    [theme.breakpoints.up('md')]: {
        width: 'calc(100vw - 220px)',
        marginLeft: '220px'
    },
}))


export const DashboardLayout = () => {
    return (
        <Box
            sx={theme=> ({
                display: 'flex',
                minHeight: '100vh',
                background: { md: 'url(/assets/images/bg-pattern.png) repeat', xs: 'none' }
            })} 
        >
            <Sidebar />
            <Stack direction='column' gap={{ md: '18px', xs: '8px' }}>
                <Header />
                <DashboardBox>
                    <Suspense fallback={<Loading />}>
                        <Outlet />
                    </Suspense>
                </DashboardBox>
            </Stack>

        </Box>
            
    )
}