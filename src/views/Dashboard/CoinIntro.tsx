import { Stack, Typography } from "@mui/material"
import EvaluateRate from "./components/EvaluateRate"
import CoinInfos from "./components/CoinInfos"
import CoinButtons from "./components/CoinButtons"
import { upperCase } from "lodash"
import { useState } from "react"
import { toNumberTag } from "@/utils"
import { colors } from "@/theme/themePrimitives"
import { useDeviceType } from "@/hooks"

const CoinIntro = () => {
    const { isMobile } = useDeviceType()

    const [percent, setPercent] = useState(1.2)
    return(
        <Stack spacing={3}>
            <Typography variant="body2" fontSize='clamp(14px, 2vw, 18px)'>
                Total Poope Balance
            </Typography>
            <Stack direction={{ md: 'row', xs: 'column' }} justifyContent='space-between' gap={3}>
                <Stack direction="row" sx={{ gap: '18px' }} alignItems='flex-end'>
                    <Typography variant="h2" fontSize='clamp(50px, 7vw, 60px)'>{toNumberTag(54680)}</Typography>
                    <Typography variant="h4" sx={{ textTransform: 'uppercase'}} fontSize='clamp(24px, 3.5vw, 32px)'>
                        {isMobile? '$Poi' : '$Poope'}
                    </Typography>
                </Stack>
                <Stack direction={{ md: 'row',  xs: 'column'}}  alignItems={{md: 'flex-end', xs: 'flex-start'}} sx={{ gap: '19px' }}>
                        <Typography
                            variant='caption'
                            fontSize='clamp(16px, 2.5vw, 24px)'
                            lineHeight='normal'
                            fontWeight='400'
                            textAlign='right'
                            color={colors['gray']}
                        >
                        {toNumberTag(62340.48, 2, '$')}
                        </Typography>
                    <EvaluateRate percent={1.2} type="contained"/>
                </Stack>
            </Stack>
            <Stack direction={{ lg: 'row', xs: 'column' }} justifyContent='space-between' sx={{ marginTop: '50px' }}>
                <CoinInfos />
                <CoinButtons />
            </Stack>
        </Stack>
    )
}

export default CoinIntro
