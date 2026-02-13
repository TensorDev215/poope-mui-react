import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { Loading } from '@/pages/Loading'

export const LandingLayout = () => {
    return (
        <>
            <Header />

            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense>

            <Footer />
        </>
    )
}