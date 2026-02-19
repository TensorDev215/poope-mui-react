import AppIcon from '@/components/AppIcon'
import { IconButton, Stack, styled, Tab, Tabs, Typography } from '@mui/material'
import { CoinChart } from './components/CoinChart'
import { colors } from '@/theme/themePrimitives'
import { useCallback, useState } from 'react'


const dateRanges = ['1H', '4H', '1D', '1M']

const TypeChangeTabs = styled(Tabs)(({ theme }) => ({
  
  '& .MuiTabs-indicator': {
    backgroundColor: 'transparent'
  }
}))

const StyledTab = styled(Tab)(({theme}) => ({
  padding: '8px 16px',
  borderRadius: '6px',
  backgroundColor: 'transparent',
  minWidth: 0,
  minHeight: 0,
  '&.Mui-selected': {
    backgroundColor: '#343434',
    ...theme.applyStyles('light', {
      backgroundColor: colors['white']
    })
  }
}))

const StyledTypo = styled(Typography)(({theme}) => ({
  fontSize: '12px',
  fontWeight: 500,
  lineHeight: '18px',
  textTransform: 'none'
}))

export const CoinChartPanel = () => {
  const [chartType, setChartType] = useState<number>(0)
  const [chartDateRangeValue, setChartDateRage] = useState<number>(0)

  const handleTypeChange = useCallback((event: React.SyntheticEvent, newValue: number) => {
    setChartType(newValue)
  }, [])

  const handleDateRangeChange = useCallback((event: React.SyntheticEvent, newValue: number) => {
    setChartDateRage(newValue)
  }, [])

  return (
    <Stack direction='column'>
      <Stack direction='row' justifyContent='space-between'>
        <TypeChangeTabs value={chartType} onChange={handleTypeChange}>
          <StyledTab label={<StyledTypo color='text.primary'>Price</StyledTypo>} />
          <StyledTab label={<StyledTypo color='text.primary'>Chart</StyledTypo>} />
        </TypeChangeTabs>

        <Stack direction='row'>
          <TypeChangeTabs value={chartDateRangeValue} onChange={handleDateRangeChange}>
            {dateRanges.map((item, index) => (
              <StyledTab label={<StyledTypo color='text.primary' >{item}</StyledTypo>} key={`${item}__${index}`} />
            ))}
          </TypeChangeTabs>
          <IconButton
            sx={theme => ({
              minHeight: 0,
              minWidth: 0,
              height: '34px',
              padding: '9px',
              border: 'none',

              ...theme.applyStyles('dark', {
                color: colors['primary']
              })
            })}
          >
            <AppIcon name='calendar' size={16} />
          </IconButton>
        </Stack>
      </Stack>
      <CoinChart chartType={chartType} dataRangeType={chartDateRangeValue} />
    </Stack>
  )
}
