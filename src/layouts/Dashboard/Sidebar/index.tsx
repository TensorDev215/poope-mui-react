import { Box, Drawer, drawerClasses } from "@mui/material"
import { colors } from "@/theme/themePrimitives"

import { HeaderLogo, MenuContent } from "@/layouts/components"

const Sidebar = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                display: { xs: 'none', md: 'block' },
                [`& .${drawerClasses.paper}`]: {
                    backgroundColor: colors['boldDark'],
                    padding: '24px'
                }
            }}
        >
            <HeaderLogo color="#fffffff" />

            <Box
                sx={{
                    overflow: 'auot',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    mt: '50px'
                }}
            >
                <MenuContent />
            </Box>
        </Drawer>
    )
}

export default Sidebar