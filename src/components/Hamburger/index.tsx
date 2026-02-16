import { memo } from "react";
import { TfiClose } from "react-icons/tfi"
import { SlMenu } from 'react-icons/sl'
import { Button } from '@mui/material'

interface HamburgerPropsType {
    menuopen: boolean
    toggleMenu: () => void
}

function Hamburger({ menuopen, toggleMenu }: HamburgerPropsType) {
    return (
        <Button
            variant={menuopen ? 'text' : 'contained'}
            onClick={toggleMenu}
            sx={{
                padding: '14px',
                minWidth: 0,
                display: { lg: 'none', xs: 'inline-flex' }
            }}
        >
            {menuopen ? <TfiClose size='18px' /> : <SlMenu size='18px' />}
        </Button>
    )
}

export default memo(Hamburger)