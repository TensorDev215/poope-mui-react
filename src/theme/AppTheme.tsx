import { useMemo } from 'react'
import { colorSchemes, breakpoints, typography } from './themePrimitives'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import { customizations } from './customizations'


interface AppThemeProps {
    children: React.ReactNode
}

export default function AppTheme(props: AppThemeProps) {
    const { children } = props
    const theme = useMemo(
        () => 
            createTheme({
                cssVariables: {
                    colorSchemeSelector: 'data-mui-color-scheme',
                    cssVarPrefix: 'template'
                },
                colorSchemes,
                breakpoints,
                typography,
                components: customizations
            }), []
    )
    
    return (
        <ThemeProvider theme={theme} disableTransitionOnChange>
            {children}
        </ThemeProvider>
    )
}