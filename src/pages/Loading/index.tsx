import { Section } from '@/components/Section'
import { styled, Typography } from '@mui/material'

const LoadingBox = styled(Section) ({
    justifyContent: 'center',
    alignItems: 'center'
})

export const Loading = (props: any) => {
    return (
        <LoadingBox sectionId='loading' {...props}>
            <img src="/assets/images/loading.gif" alt="Loading..." loading='lazy' />
        </LoadingBox>
    )
}