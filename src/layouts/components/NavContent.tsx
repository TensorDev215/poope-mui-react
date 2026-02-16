import { List, ListItem, ListItemButton, ListItemText, Stack } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { MenuListType } from '@/types'
import LanguagePicker from '@/components/LanguagePicker'

interface NavbarProps {
    list: MenuListType[]
    handleClick: (id: string) => void
    pop?: boolean
}

export function NavContent({ list, handleClick, pop }: NavbarProps) {
    return (
        <Stack
            gap={4}
            direction={!pop ? 'row': 'column'}
            sx={theme => ({
                [theme.breakpoints.down('lg')]: !pop
                ? {
                    width: '100%',
                    justifyContent: 'flex-end',
                    paddingRight: '8px'
                }
                : '',
                alignItems: 'center'
            })}
        >
            <List
                dense
                component={'ul'}
                sx={theme => ({
                    display: 'flex',
                    gap: '32px',
                    flexDirection: 'row',
                    padding: 0,
                    alignItems: 'center',
                    [theme.breakpoints.down('lg')]: !pop
                        ? {
                            display: 'none'
                        }
                        : '',
                    ...(pop && {
                        flexDirection: 'column'
                    })
                })}
            >
                {list.map((item: MenuListType, index: number) => (
                    <ListItem
                        key={`index${index}`}
                        disablePadding
                        sx={{
                            display: 'block',
                            '& a': {
                                padding: 0
                            },
                            width: 'auto'
                        }}
                    >
                        <ListItemButton component={NavLink} to={'#'} onClick={() => handleClick(item.link)}>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
             <LanguagePicker signFontSize='18px' showDrop showLabel/>
        </Stack>
    )
}