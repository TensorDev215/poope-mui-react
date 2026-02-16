import { ButtonBase, Stack, Typography } from "@mui/material"
import ReactCountryFlag from 'react-country-flag'
import { useState } from "react"
import AppIcon from "../AppIcon"


interface LanguagePickerPropsType {
    signFontSize?: string
    showDrop?: boolean
    showLabel?: boolean
}

const LanguagePicker = ({ signFontSize, showDrop, showLabel }: LanguagePickerPropsType) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    return (
        <Stack direction='row' alignItems='center'>
            <ButtonBase
                id='language-picker-button'
            >
                <ReactCountryFlag
                    countryCode="US"
                    style={{
                        width: '1rem',
                        height: '1rem',
                        borderRadius: '100px',
                        objectFit: 'cover'
                    }}
                    title="US"
                    svg
                />
                {showLabel && (
                    <Typography ml={1} fontSize={signFontSize}>
                        EN
                    </Typography>
                )}
 
                <AppIcon name='down' />
            </ButtonBase>

        </Stack>
    )
}

export default LanguagePicker