import React from 'react'
import styled from 'styled-components'

const HomeLeftContainer = () => {
    return (
        <Container>
            <Section>
            <Title>
            The Service you Need !!
            </Title>
            <Para>
            Project0 is The Mobile Bank, helping you manage your 
            bank account on-the-go, track your expenses and 
            set aside money in real-time. Open yours in minutes 
            right from your smartphone, 
            and start spending before your physical card arrives.
            </Para>
            <AboutButton>
                About us
            </AboutButton>
            </Section>
        </Container>
    )
}
const Container = styled.div`
    background-color:${({theme})=>theme.p100};
    flex:0.5;
    display:flex;
    align-items:center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const Section = styled.section`
    margin:0 2rem;
`
const Title = styled.h1`
    color:#fff;
    font-weight:700;
    font-style:normal;
`
const Para  = styled.p`
    color:${({theme})=>theme.p300};
    font-weight:400;
    margin:2rem 0;
    width:90%;
`
const AboutButton = styled.button`
    background-color:${({theme})=>theme.p300};
    color:#fff;
    font-style:normal;
    font-weight:700;
    border-radius:5px;
    padding:7px 41px;
    cursor:pointer;
    border-color:transparent;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition:all 0.2s linear;
    &:hover {
        transform:translateY(-3px);
    }
`
export default HomeLeftContainer
