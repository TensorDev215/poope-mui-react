import { IoSearch } from "react-icons/io5";

import { colors } from '@/theme/themePrimitives'
import { FormControl, Input, InputAdornment, styled } from "@mui/material";

const StyledInput = styled(Input)(({ theme }) => ({
    padding: '8px',
    background: colors['boldDark'],
    border: '1px solid',
    borderColor: '#343434',
    borderRadius: '8px',
    width: '180px',

    fontSize: '16px',
    color: colors['gray'],
    '& .MuiInputAdornment-root': {
        color: colors['gray']
    },

    '&::before, &::after': {
        border: 'none !important'
    },

    '& input': {
        padding: 0
    },

    '&:hover, &.Mui-focused': {
        color: colors['white']
    },

    ...theme.applyStyles('light', {
        backgroundColor: colors['white'],
        borderColor: 'transparent',

        '&:hover, &.Mui-focused': {
            color: colors['dark']
        }
    })
}))

export const SearchInput = () => {
    return (
        <FormControl>
            <StyledInput
                id='search-input'
                startAdornment={
                    <InputAdornment position="start">
                        <IoSearch size={24} />
                    </InputAdornment>
                }
                placeholder="Search" 
            />
        </FormControl>
    )
}