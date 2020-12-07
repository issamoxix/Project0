import React from 'react'
import styled from 'styled-components'
import bg from '../assets/images/about-bg.jpg'
import srcx from '../assets/images/abt.png';

const About = () => {
    return (
        <Container>
            <Wrapper>
            <AboutTitle>About Project0</AboutTitle>
            <AboutContainer>
                <AboutEle>
                <Eles src={srcx}>

                </Eles>
                </AboutEle>
                <AboutBody>
                    <Para>
                    Project0 is The Mobile Bank, helping you manage your bank account 
                    on-the-go, track your expenses and set aside money in real-time.
                     Open yours in minutes right from your smartphone, 
                    and start spending before your physical card arrives.
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
`
const AboutBody = styled.div`
    width:50%;
    display:flex;
    
    align-items:center;
`
const Para = styled.p`
    font-weight:400;
    width:inherit;
    @media(max-width:1000px){
        width:88%;
    }
`
const Eles = styled.img`
    height:50%;
`
export default About
