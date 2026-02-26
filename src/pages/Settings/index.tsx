import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Profile from './section/Profile'
import Security from './section/Security'
import Help from './section/Help'
import Contact from './section/Contact'
import AppIcon from '@/components/AppIcon'
import { Icons } from '@/components/AppIcon/icons'

const menuItems = [
    {
        icon: <Icons.CgProfile className='text-2xl' />,
        title: 'Profile',
        idx: 0
    },
    {
        icon: <Icons.TfiLock className='text-2xl' />,
        title: 'Security',
        idx: 1
    },
    {
        icon: <Icons.MdOutlineHelpCenter className='text-2xl' />,
        title: 'Help Center',
        idx: 2
    },
    {
        icon: <Icons.LiaPhoneSolid className='text-2xl' />,
        title: 'Contact',
        idx: 3
    }
]

interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`
    }
}

export default function Settings() {
    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    return (
        <Box
            sx={{
                flexGrow: 1,
                bgcolor: 'transparent',
                display: 'flex',
                flexDirection: { md: 'row', xs: 'column', padding: '10px' }
            }}
        >
            <Tabs
                orientation='vertical'
                variant='scrollable'
                value={value}
                onChange={handleChange}
                sx={{ padding: '10px', gap: '3px' }}
            >
                {menuItems.map(item => (
                    <Tab
                        label={item.title}
                        icon={item.icon}
                        {...a11yProps(item.idx)}
                        iconPosition='start'
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            textTransform: 'none',
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '18px',
                            fontWeight: 400,
                            lineHeight: 'normal',
                            padding: '2px 6px',
                            '&.Mui-selected': {
                                color: 'white',
                                borderLeft: '1px solid white'
                            }
                        }}
                    />
                ))}
            </Tabs>
            {/* Tab Panels */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <TabPanel value={value} index={0}>
                    <Profile />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Security />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Help />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Contact />
                </TabPanel>
            </Box>
        </Box>
    )
}
