import React from 'react'
import styled from 'styled-components'
import auto from '../../assets/images/auto.png'

const Service2LeftContainer = () => {
    return (
        <Container>
            <Section data-aos="fade-up">
                <Title>
                Automate Your work flow with the latest Technology in the market !!
                </Title>
                <Para>
                Your standard N26 account comes with all you need to spend, s
                ave and keep track of your money. 
                Get a free Mastercard and enjoy free ATM withdrawals in euros 
                and free payments in any currency,
                 wherever you are in the 
                </Para>
                <GetMore>More Info</GetMore>
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
