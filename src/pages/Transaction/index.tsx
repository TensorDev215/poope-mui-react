import HistoryTable from '@/views/Transaction/HistoryTable'
import SwapBox from '@/views/Transaction/SwapBox'
import { Box, styled, Stack } from '@mui/material'

const Transaction = () => {
  return (
    <Stack direction='row' justifyContent='space-between' spacing={4}>
        <HistoryTable />
        <SwapBox />
    </Stack>
  )
}

export default Transaction
