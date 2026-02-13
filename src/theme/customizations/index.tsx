import { colors } from '../themePrimitives'
import { Components, Theme } from '@mui/material/styles'

export const customizations: Components<Theme> = {
    MuiButtonBase: {
        styleOverrides: {
            root: {
                boxSizing: 'border-box',
                transition: 'all 100ms easi-in',
            }
        }
    },
    MuiButton: {
        styleOverrides: {
            root: ({ theme }) => ({
                paddingBlock: '12px',
                paddingInline: '20px',
                borderRadius: '100px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                lineHeight: '24px',
                variants: [
                    {
                        props: {
                            color: 'primary',
                            variant: 'contained'
                        },
                        style: {
                            border: '1px solid',
                            borderColor: colors['dark'],
                            backgroundColor: colors['primary'],
                            color: colors['black'],
                            ...theme.applyStyles('dark', {
                                borderColor: colors['white']
                            })

                        }
                    },
                ]
            })
        }
    },

    MuiContainer: {
        styleOverrides: {
            root: ({ theme }) => ({
                paddingInline: '20px'
            })
        }
    }
}