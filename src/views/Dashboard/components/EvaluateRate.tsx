import { Typography, Stack } from "@mui/material"
import { useMemo } from "react"
import { toNumberTag } from "@/utils"
import { LuMoveUpRight, LuMoveDownRight } from 'react-icons/lu'
import { colors } from "@/theme/themePrimitives"
import { alpha } from "@mui/material"

interface EvaluateRateProps {
    percent: number,
    type?: 'contained' | 'outlined' 
}

const EvaluateRate = ({ percent, type }: EvaluateRateProps) => {
    
    const formattedPercent = useMemo(() => toNumberTag(percent, 5, percent > 0 ? '+': '-', '%'), [percent])
    const buttonType = useMemo(() => (percent > 0 ? 'success': 'failed'), [percent])
    const iconButton = useMemo(
        () => (percent > 0 ? <LuMoveUpRight fontSize='16px' /> : <LuMoveDownRight fontSize='16px' />), [percent]
    )

    return (
        <Stack
            direction='row'
            gap={0.5}
            alignItems='center'
            sx={theme => ({
                ...(type === 'contained' && {
                    background: alpha(colors[buttonType], 0.08),
                    border: `1px solid ${colors[buttonType]}`,
                    borderRadius: '32px',
                    padding: '6px 12px',
                    color: colors[buttonType],

                    ...theme.applyStyles('light', {
                        borderColor: 'transparent',
                        background: colors[buttonType],
                        color: colors['white']
                })
                }),

                ...(type === 'outlined' && {
                background: 'transparent',
                border: 'none',
                color: colors['white'],

                ...theme.applyStyles('light', {
                    borderColor: 'transparent',
                    color: colors['dark']
                }),

                '& svg': {
                    color: colors[buttonType]
                }
                })
            })}
            >
            <Typography component={'p'} variant="subtitle2">
                { formattedPercent }
            </Typography>
            {iconButton}
        </Stack>
    )
}

export default EvaluateRate