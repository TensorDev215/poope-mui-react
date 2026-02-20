import {
    Stack,
    Typography,
    Button,
    Input,
    TextField,
    FormControl,
    OutlinedInput,
    InputAdornment,
    Box
} from '@mui/material'
import AddIcon from '@/assets/icons/add.svg'
import TransactionIcon from '@/assets/icons/transactions.svg'
import DownIcon from '@/assets/icons/down.svg'
import { useState } from 'react'

export const SwapBox = () => {
    const [swapState, setSwapState] = useState<boolean>(true)

    const handleChange = () => {
        setSwapState(prev => !prev)
    }

    return (
        <Stack
            direction='column'
            spacing={3}
            sx={theme => ({
                borderRadius: '16px',
                padding: '16px',
                backgroundColor: '#191919',
                flexWrap: 'nowrap',
                ...theme.applyStyles('light', {
                    backgroundColor: '#FFFFFF'
                })
            })}
            width={{ lg: '30%', xs: '100%' }}
        >
            <Stack direction='row' justifyContent='space-between'>
                <Typography fontSize='20px' fontWeight={600} lineHeight='32px'>
                    {swapState ? 'Swap' : 'Buy'} Poope
                </Typography>
                <Stack
                    component='button'
                    className='app-icon'
                    direction='row'
                    gap={1}
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFD258',
                        '& svg': {
                            height: '20px',
                            width: '20px'
                        }
                    }}
                    onClick={handleChange}
                >
                    <AddIcon />
                    <Typography variant='caption'>{swapState ? 'Swap' : 'Buy'}</Typography>
                </Stack>
            </Stack>
            <Stack direction='column'>
                <FormControl
                    sx={theme => ({
                        m: 1,
                        width: '100%',
                        borderRadius: '12px',
                        order: swapState ? 1 : 2,
                        ...theme.applyStyles('light', {
                            backgroundColor: '#FFFFFF'
                        })
                    })}
                    variant='outlined'
                >
                    <OutlinedInput
                        id='outlined-adornment-weight'
                        sx={{
                            '& .MuiInputBase-input': {
                                padding: '12px 16px'
                            }
                        }}
                        endAdornment={
                            <InputAdornment position='end'>
                                <Stack direction='row' gap={1} alignItems='center' sx={{ marginRight: '16px' }}>
                                    <Box
                                        component='img'
                                        sx={{
                                            height: '20px',
                                            width: '20px'
                                        }}
                                        alt='Poope Icon'
                                        src='/assets/images/header-logo.png'
                                    />
                                    <Typography fontSize='14px' fontWeight={500} color='#747474'>
                                        $POI
                                    </Typography>
                                </Stack>
                            </InputAdornment>
                        }
                        aria-describedby='outlined-weight-helper-text'
                        inputProps={{
                            'aria-label': 'weight'
                        }}
                    />
                </FormControl>
                <FormControl
                    sx={theme => ({
                        m: 1,
                        width: '100%',
                        borderRadius: '12px',
                        backgroundColor: '##101010',
                        order: swapState ? 2 : 1,
                        ...theme.applyStyles('light', {
                            backgroundColor: '#FFFFFF'
                        })
                    })}
                    variant='outlined'
                >
                    <OutlinedInput
                        id='outlined-adornment-weight'
                        sx={{
                            '& .MuiInputBase-input': {
                                padding: '12px 16px'
                            }
                        }}
                        endAdornment={
                            <InputAdornment position='end'>
                                <Stack direction='row' gap={1} alignItems='center' sx={{ marginRight: '16px' }}>
                                    <Box
                                        component='img'
                                        sx={{
                                            height: '20px',
                                            width: '20px'
                                        }}
                                        alt='Poope Icon'
                                        src='/assets/images/token/token-USDT.png'
                                    />
                                    <Typography fontSize='14px' fontWeight={500} color='#747474'>
                                        USDT
                                    </Typography>
                                    <Stack
                                        className='app-icon'
                                        sx={{
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#747474',
                                            '& svg': {
                                                height: '20px'
                                            }
                                        }}
                                    >
                                        <DownIcon />
                                    </Stack>
                                </Stack>
                            </InputAdornment>
                        }
                        aria-describedby='outlined-weight-helper-text'
                        inputProps={{
                            'aria-label': 'weight'
                        }}
                    />
                </FormControl>
            </Stack>
            <Stack direction='column' spacing={0.5}>
                <Typography
                    textAlign={'center'}
                    fontSize='12px'
                    lineHeight='18px'
                    fontWeight='500'
                    color='#FFFFFFB'
                    sx={theme => ({
                        ...theme.applyStyles('light', {
                            color: '#141414'
                        })
                    })}
                >
                    {swapState ? '1 $POI = 0.25USDT' : '1 USDT = 100 $POI'}
                </Typography>
                <Typography
                    textAlign={'center'}
                    fontSize='12px'
                    lineHeight='18px'
                    fontWeight='500'
                    color='#FFFFFFB2'
                    sx={theme => ({
                        ...theme.applyStyles('light', {
                            color: '#141414'
                        })
                    })}
                >
                    Transaction fee: 0.20$
                </Typography>
            </Stack>
            <Button
                sx={theme => ({
                    backgroundColor: '#FFD258',
                    borderRadius: '12px',
                    border: '1px solid',
                    borderColor: '#FFFFFF',
                    paddingTop: '8px',
                    paddingBottom: '8px',
                    ...theme.applyStyles('light', {
                        borderColor: '#1F1F1F'
                    })
                })
            }
            >
                <Typography
                    fontSize='14px'
                    lineHeight='24px'
                    fontWeight={500}
                    textTransform={'uppercase'}
                    letterSpacing={0}
                    color='#000000'
                >
                    {swapState ? 'Swap' : 'Buy'} now
                </Typography>
            </Button>
        </Stack>
    )
}
