import { createBrowserRouter } from "react-router-dom";

import { LandingLayout } from "@/layouts";

import { lazy } from "react";

import { ROUTES } from "@/constants";

const Landing = lazy(() => import('@/pages/Landing'))

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
    }
])

export default router