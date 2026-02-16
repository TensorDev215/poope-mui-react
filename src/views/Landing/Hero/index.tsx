import { Section } from "@/components/Section"
import { styled, Typography } from "@mui/material"
import { SectionPropsType } from "@/types"
import { Container , Box} from "@mui/material"
import { colors } from "@/theme/themePrimitives"
import { relative } from "path"
import { transform } from "lodash"

const HeroBox = styled(Section)({
    paddingTop: '15vh',
    background: 'url(/assets/images/bg-pattern.png) repeat',
    paddingBottom: '20vh'
})

const HeroImageBox = styled('img')(( {theme} ) => ({
    position: 'absolute',
    top: '95px',
    left: '50%',
    transform: 'translate(-50%, 0%)',
    width: 'clamp(90px, 25vw, 270px)',
    height: 'auto',
    filter: `drop-shadow(0px 0px 50px ${colors["white"]})`,
    ...theme.applyStyles('light', {
            filter: `drop-shadow(0px 0px 50px ${colors["primary"]})`,
    }),
}))

interface CloudImageBoxProps {
    styles: {
        top: string,
        left: string,
        right: string,
        width: string,
        transform: string,
    }
}

const clouds = [
    { id: 1, top: '300px', left: '-104px', right: 'auto', topXs: '32px', leftXs: '-25px', rightXs: 'auto', width: 'clamp(81px, 15vw, 158px)', transform: 'rotateY(0deg)'},
    { id: 2, top: '50px', left: 'auto', right: '23px', topXs: '110px', leftXs: 'auto', rightXs: '-40px',  width: 'clamp(86px, 15vw, 172px)', transform: 'rotateY(0deg)'},
    { id: 3, top: '650px', left: '187px', right: 'auto', topXs: '197px', leftXs: '82px', rightXs: 'auto', width: 'clamp(50px, 15vw, 98px)', transform: 'rotateY(180deg)'},
]


const CloudImageBox = styled('img')<CloudImageBoxProps>(( {styles, theme}: any ) => ({
    position: 'absolute',
    top: styles.top,
    left: styles.left,
    right: styles.right,
    width: styles.width,
    height: 'auto',
    zIndex: -1,
    transform: styles.transform,
    transition: 'top 0.5s ease, left 0.5s ease, transform 0.5s ease',
    [theme.breakpoints.down('lg')]: {
        top: styles.topLg || styles.top, 
        left: styles.leftLg || styles.left,
        right: styles.rightLg || styles.right,
        width: styles.widthLg || styles.width,
    },
    [theme.breakpoints.down('md')]: {
        top: styles.topXs || styles.top, 
        left: styles.leftXs || styles.left,
        right: styles.rightXs || styles.right,
        width: styles.widthXs || styles.width,
    },
}))

const CloudImage = ({ styles }: CloudImageBoxProps) => {
    return (
        <CloudImageBox
            src="assets/images/cloud.png"
            alt="Cloud"
            styles={styles}
        />
    )
}


const BannerTypography = styled(Typography)(( {theme} ) => ({
    paddingBottom: '0px',
    fontSize: 'clamp(100px, 25vw, 200px)'
}))


const Hero = (props: SectionPropsType) => {
    return (
        <HeroBox {...props}>
            <Container maxWidth='lg' sx={{ position: 'relative' }}>
                <Box
                    sx={{
                        alignItems: "center",
                        textAlign: 'center',
                        zIndex: 2
                    }} 
                >
                    <BannerTypography variant="h1" sx={{ marginBottom: '0px'}}>
                        POOPE
                    </BannerTypography>
                    <BannerTypography 
                        variant="h1"
                        sx={{
                            letterSpacing: '6px',
                            fontSize: 'clamp(100px, 25vw, 300px)',
                            marginTop: '0px',
                            lineHeight: '0.7',
                        }}
                    >
                        SOLANA
                    </BannerTypography>
                    <HeroImageBox src="assets/images/poope-coin.webp" alt="Poope coin"/>
                    
                    {clouds.map((cloud) => (
                        <CloudImage
                            key={cloud.id}
                            styles={{
                                ...cloud,
                            }}
                        />
                    ))}

                    <Typography variant="body1" sx={{ marginTop: '60px' }}>
                        Every bathromm break becomes a bullseye moment to embrace your inner marksman. Nail that tight deadline, blast through the cryto world.
                    </Typography>
                </Box>
            </Container>
        </HeroBox>
    )
}

export default Hero