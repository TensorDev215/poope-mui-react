import { Card, CardActions, CardContent, styled, Typography, Stack, Button } from '@mui/material'
import { colors } from '@/theme/themePrimitives'

const CardImage = styled('img')({
  position: 'relative'
})

const StyledCard = styled(Card)(({ theme }) => ({
  overflow: 'visible',
  borderRadius: '8px',
  borderColor: '#343434',
  ...theme.applyStyles('light', {
    borderColor: 'transparent',
    backgroundColor: colors['white']
  })
}))

const CoinBanner = () => {
  return (
    <StyledCard>
      <CardContent
        component={Stack}
        gap={2}
        direction='row'
        sx={{ p: '24px 24px 24px 0', height: { lg: '88px', xs: 'auto' } }}
        alignItems={{ lg: 'flex-end', xs: 'center' }}
      >
        <CardImage src='assets/images/feature.png' alt='New Feature' loading='lazy' />
        <Stack
          direction={{ md: 'row', xs: 'column' }}
          gap={3}
          alignItems={{ md: 'center', xs: 'flex-start' }}
          width='100%'
        >
          <Stack direction='column' gap={1} flexGrow={1}>
            <Typography variant='subtitle1' fontSize='clamp(14px, 2vw, 18px)' lineHeight='clamp(18px, 2.5vw, 20px)'>
              NewFeatures That Will Make Your <span style={{ color: '#FFD258' }}>Crypto</span> Life Easior
            </Typography>
            <Typography variant='caption' component={'p'} fontSize='10px' lineHeight='12px'>
              We're finally ready to tell you everything about this new version
            </Typography>
          </Stack>
          <Button
            variant='outlined'
            color='secondary'
            sx={theme => ({
              padding: '8px 20px',
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '24px',
              flexShrink: 0,
              border: 'none',

              ...theme.applyStyles('light', {
                backgroundColor: colors['dark'],
                color: colors['white']
              })
            })}
          >
            Lets see
          </Button>
        </Stack>
      </CardContent>
    </StyledCard>
  )
}

export default CoinBanner
