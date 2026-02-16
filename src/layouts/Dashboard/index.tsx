import Sidebar from "./Sidebar";
import Header from "./Header";
import { Loading } from "@/pages";

import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Box, Stack } from "@mui/material";

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
                <Suspense fallback={<Loading />}>
                    <Outlet />
                </Suspense>
            </Stack>

        </Box>
            
    )
}