import { Box, Stack } from '@mui/material'
import { styled } from '@mui/material'
import CoinIntro from '@/views/Dashboard/CoinIntro'
import { CoinChartPanel } from '@/views/Dashboard/CoinChartPanel'
import CoinBanner from '@/views/Dashboard/CoinBanner'

const Dashboard = () => {
  return (
    <Stack direction='column' spacing={7.5}>
      <CoinIntro></CoinIntro>
      <CoinChartPanel></CoinChartPanel>
      <CoinBanner></CoinBanner>
    </Stack>
  )
}

export default Dashboard
