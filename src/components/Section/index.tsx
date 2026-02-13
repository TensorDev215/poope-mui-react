import { SectionPropsType } from "@/types"
import { Box, styled } from '@mui/material'

const SectionBox = styled(Box) ({
    height: '100vh',
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center'
})

export const Section = (props: SectionPropsType) => {
    const { sectionId, ...others } = props

    return (
        <section id="sectionId">
            <SectionBox {...others}></SectionBox>
        </section>
    )
}