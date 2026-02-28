import { createBrowserRouter } from 'react-router-dom'

import { LandingLayout } from '@/layouts'

import { DashboardLayout } from '@/layouts/Dashboard'

import { lazy } from 'react'

import { ROUTES } from '@/constants'

import PrivateRoute from './PrivateRoute'

const Landing = lazy(() => import('@/pages/Landing'))

const Dashboard = lazy(() => import('@/pages/Dashboard'))

const Transaction = lazy(() => import('@/pages/Transaction'))

const Notification = lazy(() => import('@/pages/Notification'))

const Settings = lazy(() => import('@/pages/Settings'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingLayout />,
        children: [
            {
                path: ROUTES.LANDING,
                element: <Landing />
            }
        ]
    },
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            {
                path: ROUTES.DASHBOARD,
                element: (
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                )
            },
            {
                path: ROUTES.TRANSACTIONS,
                element: (
                    <PrivateRoute>
                        <Transaction />
                    </PrivateRoute>
                )
            },
            {
                path: ROUTES.NOTIFICATION,
                element: (
                    <PrivateRoute>
                        <Notification />
                    </PrivateRoute>
                )
            },
            {
                path: ROUTES.SETTINGS,
                element: (
                    <PrivateRoute>
                        <Settings />
                    </PrivateRoute>
                )
            }
        ]
    }
])

export default router
