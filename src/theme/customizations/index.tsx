import { colors } from '../themePrimitives'
import { Components, Theme } from '@mui/material/styles'

export const customizations: Components<Theme> = {
  MuiButtonBase: {
    styleOverrides: {
      root: {
        boxSizing: 'border-box',
        transition: 'all 100ms ease-in'
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
          {
            props: {
              variant: 'text'
            },
            style: {
              backgroundColor: 'transparent',
              color: colors['black'],
              border: '1px solid',
              borderColor: colors['dark'],
              ...theme.applyStyles('dark', {
                color: colors['white'],
                borderColor: colors['white']
              })
            }
          },
          {
            props: {
              color: 'primary',
              variant: 'outlined'
            },
            style: {
              fontSize: '18px',
              fontWeight: 500,
              border: '1px solid',
              borderColor: colors['white'],
              backgroundColor: '#eed6b7',
              color: colors['black'],
              padding: '16px 24px',
              textTransform: 'none',
              '&:hover': {
                borderColor: '#ffd7a4',
                backgroundColor: '#dec29e'
              },

              ...theme.applyStyles('dark', {
                borderColor: '#313131',
                color: colors['white'],
                backgroundColor: colors['dark'],

                '&:hover': {
                  borderColor: '#5f5f5f',
                  backgroundColor: '#2D2D2D'
                }
              })
            }
          },
          {
            props: {
              variant: 'text',
              color: 'secondary'
            },
            style: {
              backgroundColor: colors['boldDark'],
              color: colors['white'],
              borderRadius: '6px',
              padding: '10px 12px',
              textTransform: 'none',
              lineHeight: '20px',
              border: 'none',
              ...theme.applyStyles('light', {
                color: colors['dark'],
                backgroundColor: colors['white'],
                borderColor: colors['white']
              })
            }
          }
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
  },

  MuiIconButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 100,
        border: '1px solid',
        borderColor: colors['dark'],
        padding: '12px',
        ...theme.applyStyles('dark', {
          borderColor: colors['white']
        })
      })
    }
  }
}
