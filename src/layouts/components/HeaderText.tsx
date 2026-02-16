import { Typography } from "@mui/material";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export const HeaderText = () => {
    const location = useLocation()
    const url = useMemo(() => location.pathname.replace('/', ''), [location.pathname])

    return (
        <Typography component={'h2'} variant="subtitle1" fontWeight={500} sx={{ flexGrow: 1, textTransform: 'capitalize' }}>
            {url}
        </Typography>
    )
}