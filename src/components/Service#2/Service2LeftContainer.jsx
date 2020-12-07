import React from 'react'
import styled from 'styled-components'
import { Data } from '../../data/HomePage'

const Service2LeftContainer = () => {
    return (
        <Container>
            <Section data-aos="fade-up">
                <Title>
                    {Data.Service_2[0].Title}
                </Title>
                <Para>
                    {Data.Service_2[0].Body}
                </Para>
                <GetMore>{Data.Service_2[0].ButtonText}</GetMore>
            </Section>
        </Container>
    )
}
const Container = styled.div`
    flex:0.5;
    display:flex;
    align-items:center;
    @media(max-width:600px){
        flex:1;
        justify-content:center;
        height:100vh;
 
    }
`
const Title = styled.h1`
    color: #000;
    font-weight: bold;
    font-style: italic;
    font-size: 37px;
    @media(max-width:600px){
    font-size: 27px;
        
    }
    @media(max-width:1000px){
        width: 100%;
        font-size: 24px;
    }
`
const Para  = styled.p`
    color: #000;
    font-weight: 300;
    margin: 2rem 0;
    width: 90%;
    font-size: 27px;
    @media(max-width:600px){
        
        font-size: 20px;
        width: 100%;
    }
    @media(max-width:1000px){
        width: 100%;
        font-size: 18px;
    }
`
const GetMore = styled.h2`
    font-weight: 500;
    position: absolute;
    right: 76px;
    text-decoration: underline;
    cursor: pointer;
    text-underline-position: under;
    transition:all 0.2s linear;
    &:hover {
        color:${({theme})=>theme.p100};
    }
`
const Section = styled.section`
    margin:0 2rem;
    position:relative;
    @media(max-width:600px){
        height:50%;
    }
`
export default Service2LeftContainer
