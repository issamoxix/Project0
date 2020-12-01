import React from 'react'
import styled from 'styled-components'

const ServiceRightContainer = () => {
    return (
        <Container>
            <Section>
                <Title>
                Create Your Personel or Professional Website
                </Title>
                <Para>
                Your standard N26 account comes with all you need to spend, 
                save and keep track of your money. Get a free Mastercard and enjoy 
                free ATM withdrawals in euros and free payments in any currency, 
                wherever you are in the 
                </Para>
                <GetMoreButton data-aos="zoom-in" >Learn More</GetMoreButton>

            </Section>
        </Container>
    )
}
const Container = styled.div`
    flex:0.5;
    display:flex;
    align-items:center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: rgba(137, 217, 190, 0.2);
    z-index:1;
`
const Title = styled.h1`
    color: #000;
    font-weight: bold;
    font-style: italic;
    font-size: 40px;
`
const Para  = styled.p`
    color: #000;
    font-weight: 300;
    margin: 2rem 0;
    width: 90%;
    font-size: 27px;
`
const Section = styled.section`
    margin:0 2rem;
    position:relative;
`
const GetMoreButton = styled.button`
    background: #89D9BE;
    border-color: transparent;
    padding: 7px 45px;
    color: white;
    font-size: 20px;
    font-weight: 500;
    position: absolute;
    right: 77px;
    box-shadow:0px 4px 4px rgba(0,0,0,0.25);
    transition:all 0.2s linear;
    cursor:pointer; 
    &:hover {
        transform:translateY(-3px);
    }
`
export default ServiceRightContainer
