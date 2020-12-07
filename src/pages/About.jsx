import React from 'react'
import styled from 'styled-components'
import bg from '../assets/images/about-bg.jpg'
import srcx from '../assets/images/abt.png';
import { AboutData } from '../data/AboutPage';
import { resc,PicSizec } from '../utils/Resize';
const per = 12
PicSizec(per)
resc(PicSizec(per),per)

const About = () => {
    
    return (
        <Container>
            <Wrapper>
            <AboutTitle> {AboutData[0].Title} </AboutTitle>
            <AboutContainer>
                <AboutEle>
                <Eles src={srcx} />
                </AboutEle>
                <AboutBody>
                    <Para>
                    {AboutData[0].Body}
                    </Para>
                </AboutBody>
            </AboutContainer>
            </Wrapper>
        </Container>
    )
}
const Container = styled.div`
    background-image:url(${bg});
    height:100vh;
    background-size:cover;
    background-repeat:no-repeat;
    @media(max-width:600px){
        width:100vw;
        background-position:center;
    }
`
const Wrapper = styled.div`
    height:100%;
    background-color:${({theme})=>theme.aboutbg};
    
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const AboutTitle = styled.h1`
    font-size:6rem;
    color:${({theme})=>theme.aboutitle};
    text-decoration: underline;
    @media(max-width:750px){
        font-size:${PicSizec(per)}px;
        margin-top:-2rem;
    }
`
const AboutContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`
const AboutEle = styled.div`
    width:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    @media(max-width:750px){
        display:none;
    }
`
const AboutBody = styled.div`
    width:50%;
    display:flex;
    
    align-items:center;
    @media(max-width:750px){
        width:100%;
        text-align:center;
        margin:0 1rem 0 1rem;
    }
`
const Para = styled.p`
    font-weight:400;
    width:inherit;
    @media(max-width:1000px){
        width:88%;
    }
    @media(max-width:750px){
        width:100%;
        
    }
`
const Eles = styled.img`
    height:50%;
    
`
export default About
