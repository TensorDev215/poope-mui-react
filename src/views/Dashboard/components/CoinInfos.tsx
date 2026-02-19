import { Typography, Stack, Divider } from "@mui/material"
import EvaluateRate from "./EvaluateRate"
import { percents } from "@/constants"
import { colors } from "@/theme/themePrimitives"


const CoinInfos = () => {
    return (
        <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={4}   divider={<Divider orientation="vertical" flexItem />}>
            {percents.map((item, index) => (
                <Stack direction='column' spacing={1} alignItems='flex-start'>
                    <Typography fontSize={14} color={colors.gray}>{item.text}</Typography>
                    <EvaluateRate percent={item.percent} type="outlined" />
                </Stack>
            ))}
        </Stack>
    )
}

export default CoinInfos