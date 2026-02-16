import { useColorScheme } from "@mui/material";
import IconButton, { IconButtonOwnProps } from '@mui/material/IconButton'

import AppIcon from "@/components/AppIcon";

export default function ColorModeIcon(props: IconButtonOwnProps) {
    const { mode, setMode } = useColorScheme()

    const handleClick = () => {
        if (mode === 'dark') {
            setMode('light')
        } else {
            setMode('dark')
        }
    }

    const icon = mode === 'light' ? <AppIcon name='moon' /> : <AppIcon name='sun' />

    return (
        <IconButton onClick={handleClick} {...props}>
            {icon}
        </IconButton>
    )
}