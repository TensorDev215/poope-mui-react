import { SectionPropsType } from "@/types";
import { styled, Box } from '@mui/material'

const SectionBox = styled(Box) ({
    height: 'auto',
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center'
})

export const Section = (props: SectionPropsType) => {
    const { sectionId, ...others } = props

    return (
        <section id={ sectionId }>
            <SectionBox {...others} />
        </section>
    )
}

