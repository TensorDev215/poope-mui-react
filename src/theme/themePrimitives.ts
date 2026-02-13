import { createTheme, alpha, Shadows } from "@mui/material/styles";

export const colors = {
  dark: '#141414',
  boldDark: '#191919',
  light: '#f2ddc3',
  boldLight: '#eed6b7',
  black: '#000000',
  white: '#ffffff',
  primary: '#ffd258',
  gray: '#747474',
  success: '#2ebe7b',
  failed: '#ff7070',
  warning: '#f6851b',
  divider: '#333333'
}

const defaultTheme = createTheme()

export const brand = {
  50: 'hsl(210, 100%, 95%)',
  100: 'hsl(210, 100%, 92%)',
  200: 'hsl(210, 100%, 80%)',
  300: 'hsl(210, 100%, 65%)',
  400: 'hsl(210, 98%, 48%)',
  500: 'hsl(210, 98%, 42%)',
  600: 'hsl(210, 98%, 55%)',
  700: 'hsl(210, 100%, 35%)',
  800: 'hsl(210, 100%, 16%)',
  900: 'hsl(210, 100%, 21%)'
}

export const gray = {
  50: 'hsl(220, 35%, 97%)',
  100: 'hsl(220, 30%, 94%)',
  200: 'hsl(220, 20%, 88%)',
  300: 'hsl(220, 20%, 80%)',
  400: 'hsl(220, 20%, 65%)',
  500: 'hsl(220, 20%, 42%)',
  600: 'hsl(220, 20%, 35%)',
  700: 'hsl(220, 20%, 25%)',
  800: 'hsl(220, 30%, 6%)',
  900: 'hsl(220, 35%, 3%)'
}

export const green = {
  50: 'hsl(120, 80%, 98%)',
  100: 'hsl(120, 75%, 94%)',
  200: 'hsl(120, 75%, 87%)',
  300: 'hsl(120, 61%, 77%)',
  400: 'hsl(120, 44%, 53%)',
  500: 'hsl(120, 59%, 30%)',
  600: 'hsl(120, 70%, 25%)',
  700: 'hsl(120, 75%, 16%)',
  800: 'hsl(120, 84%, 10%)',
  900: 'hsl(120, 87%, 6%)'
}

export const orange = {
  50: 'hsl(45, 100%, 97%)',
  100: 'hsl(45, 92%, 90%)',
  200: 'hsl(45, 94%, 80%)',
  300: 'hsl(45, 90%, 65%)',
  400: 'hsl(45, 90%, 40%)',
  500: 'hsl(45, 90%, 35%)',
  600: 'hsl(45, 91%, 25%)',
  700: 'hsl(45, 94%, 20%)',
  800: 'hsl(45, 95%, 16%)',
  900: 'hsl(45, 93%, 12%)'
}

export const red = {
  50: 'hsl(0, 100%, 97%)',
  100: 'hsl(0, 92%, 90%)',
  200: 'hsl(0, 94%, 80%)',
  300: 'hsl(0, 90%, 65%)',
  400: 'hsl(0, 90%, 40%)',
  500: 'hsl(0, 90%, 30%)',
  600: 'hsl(0, 91%, 25%)',
  700: 'hsl(0, 94%, 18%)',
  800: 'hsl(0, 95%, 12%)',
  900: 'hsl(0, 93%, 6%)'
}

export const colorSchemes = {
    light: {
        palette: {
            primary: {
                light: brand[200],
                main: colors['light'],
                dark: brand[700],
                contrastText: colors['dark']
            }
        },
        action: {
            hover: alpha(gray[200], 0.2),
            selected:  `${alpha(gray[200], 0.3)}`,
            active: colors['dark']
        }
    },
     dark: {
        palette: {
            primary: {
                contrastText: colors['white'],
                light: brand[300],
                main: colors['dark'],
                dark: brand[700]
            },
            action: {
                hover: alpha(gray[600], 0.2),
                selected:  `${alpha(gray[600], 0.3)}`,
                active: colors['white']
            }
        }
    }
}

export const breakpoints = {
    values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536
    }
}

export const typography = {
    fontFamily: 'Mountains of Christmas, sans-serif',
    h3: {
        fontSize: defaultTheme.typography.pxToRem(30),
        fontWeight: 700,
        lineHeight: '40px'
    },
    body2: {
        fontFamily: 'Iner, sans-serif',
        fontSize: '18px',
        fontWeight: 500,
        lineHeight: '24px'
    }
}