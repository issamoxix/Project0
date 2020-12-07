import React from 'react'
import styled from 'styled-components'
import { Data } from '../../data/HomePage'

const HomeLeftContainer = () => {
    return (
        <Container>
            <Section data-aos="fade-right" >
            <Title>
            {Data.Home[0].Title}
            </Title>
            <Para>
                {Data.Home[0].Body}
            </Para>
            <AboutButton>
            {Data.Home[0].ButtonText}
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
   @media(max-width:600px){
       flex:1;
       align-items:start;
   }
`
const Section = styled.section`
    margin:0 2rem;
    overflow-x:hidden;
    @media (max-width: 600px) {
    text-align:center;
    margin-top:6rem;
  }
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
    @media (max-width: 600px) {
    width:100%;
  }
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
