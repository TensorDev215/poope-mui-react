import { RouterProvider } from 'react-router-dom'
import { CssBaseline } from '@mui/material'

import router from './routes'
import AppTheme from './theme/AppTheme'
import { Web3Provider } from './context/Web3Provider'
import { ToastProvider } from './context/ToastContext'

const App = () => {
    return (
        <AppTheme>
            <Web3Provider>
                <ToastProvider>
                    <CssBaseline />
                    <RouterProvider router={router} />
                </ToastProvider>
            </Web3Provider>
        </AppTheme>
    )
}

export default App
