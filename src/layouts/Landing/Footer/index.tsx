import LanguagePicker from "@/components/LanguagePicker";
import { Container, Divider, Box, Stack, Typography } from "@mui/material"
import { FaRegCopyright } from 'react-icons/fa';



export const Footer = () => {
    return (
        <Container maxWidth='lg'>
            <Divider />
            <Box
                component={'footer'}
                sx={{
                    display: 'flex',
                    flexDirection: {
                        sm: 'row',
                        xs: 'column-reverse'
                    },
                    gap: '16px',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    py: '32px',
                    height: 'auto'
                }}
            >
                <Stack direction="row" alignItems='center' spacing={0.5}>
                    <FaRegCopyright size={20}/>
                    <Typography variant="caption">Poope 2026</Typography>
                </Stack>
                <Stack 
                    direction={{ sm: "row", xs: "column" }}
                    spacing={2}
                    sx={{
                        alignItems: 'center'
                    }}
                >
                    <Stack direction="row" spacing={2}>
                        <Typography variant="caption">Privacy Policy</Typography>
                        <Typography variant="caption">Terms & Condition</Typography>
                    </Stack>
                    <LanguagePicker signFontSize="16px" showDrop showLabel/>
                </Stack>
            </Box>
        </Container>
    )
}