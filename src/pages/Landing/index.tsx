import { Box, Container, styled, Typography } from '@mui/material'
import { Section } from '@/components/Section'

const HeroBox = styled(Section)({
    paddingTop: '15vh',
    background: 'url(/assets/images/bg-pattern.png) repeat'
})

const Landing = (props: any) => {
    return (
        <HeroBox {...props}>

        </HeroBox>
    )
}

export default Landing