import { RouterProvider } from 'react-router-dom'
import { CssBaseline } from '@mui/material'

import router from './routes'
import AppTheme from './theme/AppTheme'
import { Web3Provider } from './context/Web3Provider'

const App = () => {
    return (
        <AppTheme>
            <Web3Provider>
                <CssBaseline />
                <RouterProvider router={router} />
            </Web3Provider>
        </AppTheme>
    )
}

export default App
