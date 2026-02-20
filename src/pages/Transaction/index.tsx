import HistoryTable from '@/views/Transaction/HistoryTable'
import { SwapBox } from '@/views/Transaction/SwapBox'

import { Box, styled, Stack } from '@mui/material'

const Transaction = () => {
  return (
    <Stack direction={{ lg: 'row', xs: 'column'}} justifyContent='space-between' spacing={4} alignItems='flex-start'>
        <HistoryTable />
        <SwapBox />
    </Stack>
  )
}

export default Transaction
