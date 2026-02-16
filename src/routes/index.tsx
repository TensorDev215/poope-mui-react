import { createBrowserRouter } from "react-router-dom";

import { LandingLayout } from "@/layouts";

import { DashboardLayout } from "@/layouts/Dashboard";

import { lazy } from "react";

import { ROUTES } from "@/constants";

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
                element: <Dashboard />
            },
            {
                path: ROUTES.TRANSACTIONS,
                element: <Transaction />
            },
            {
                path: ROUTES.NOTIFICATION,
                element: <Notification />
            },
            {
                path: ROUTES.SETTINGS,
                element: <Settings />
            },
        ]
    }
])

export default router