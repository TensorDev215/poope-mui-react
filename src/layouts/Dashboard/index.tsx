import Sidebar from "./Sidebar";
import Header from "./Header";
import { Loading } from "@/pages";

import { Suspense, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Box, Stack, styled } from "@mui/material";
import { useState } from "react";
import io from 'socket.io-client';
import { useLocation } from "react-router-dom";

const socket = io('http://localhost:5000');


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
    const [notificationState, setNotificationState] = useState(false)

    const triggerAction = () => {
        setNotificationState(!notificationState)
    }

    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/notification') {
            setNotificationState(false)
        }

        socket.on('new_notification', (notification) => {
            console.log('New transaction is inserted.', notification)
            setNotificationState(true)
        })

        return () => {
            socket.off('new_notification')
        }
    }, [location.pathname])

    return (
        <Box
            sx={theme=> ({
                display: 'flex',
                minHeight: '100vh',
                background: { md: 'url(/assets/images/bg-pattern.png) repeat', xs: 'none' }
            })} 
        >
            <Sidebar notificationState={notificationState} />
            <Stack direction='column' gap={{ md: '18px', xs: '8px' }}>
                <Header notificationState={notificationState} />
                <DashboardBox>
                    <Suspense fallback={<Loading />}>
                        <Outlet />
                    </Suspense>
                </DashboardBox>
            </Stack>

        </Box>
            
    )
}