import { colors } from "@/theme/themePrimitives"
import { Box, Stack, Typography } from "@mui/material"

interface HeaderLogoPropsType {
    color?: string,
    disableText?: boolean,
    fontSize?: string
}

export const HeaderLogo = ({
    disableText,
    fontSize = 'clamp(28px, 4vw, 30px)'
}: HeaderLogoPropsType) => {
    return (
        <Stack direction='row' gap={1} component={'a'} href='/' alignItems='center'>
            <Box
                component='img'
                sx={{
                    height: { md: 36, xs: 32 },
                    width: { md: 36, xs: 32 }
                }}
                alt='Header Icon'
                src='/assets/images/header-logo.png'
            />
            {!disableText && (
                <Typography variant="h3" sx={{ textTransform: 'uppercase', color: colors['white'] }} fontSize={fontSize}>
                    Poope
                </Typography>
            )}
        </Stack>
    )
}