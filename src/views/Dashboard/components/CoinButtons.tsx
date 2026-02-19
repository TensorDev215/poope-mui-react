import { Button, Divider, IconButton, List, ListItem, Stack, styled, Typography } from "@mui/material";
import { buttonList } from "@/constants";
import { Fragment } from "react/jsx-runtime";
import { colors } from "@/theme/themePrimitives";

const CoinButtons = () => {
    return (
        <List component={Stack} direction='row' alignItems='center' spacing={3} divider={<Divider orientation="vertical" flexItem />}>
            {buttonList.map((item, index) => (
                <Fragment key={`index${index}`}>
                    <ListItem
                        component={Stack}
                        direction='column'
                        gap={1}
                         alignItems='flex-start'
                    >
                        <IconButton
                            sx={theme => ({
                                border: 'none',
                                backgroundColor: '#343434',
                                ...(theme.palette.mode === 'light' && {
                                    border: '1px solid',
                                    borderColor: colors.white,
                                    color: colors.white
                                })
                            })
                            }
                        >
                            {item.iconElement}
                        </IconButton>
                        <Typography fontSize='14px'>
                            {item.text}
                        </Typography>
                    </ListItem>
                </Fragment>
            ))}
        </List>
    )
} 

export default CoinButtons