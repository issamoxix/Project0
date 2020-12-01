import React from 'react'
import styled from 'styled-components'
import auto from '../../assets/images/auto.png'
const Service2RightContainer = () => {
    return (
        <Container>
           <HeroPic data-aos="flip-down" src={auto} />
        </Container>
    )
}
const Container = styled.div`
    flex:0.5;
    display:flex;
    align-items:center;
    justify-content:center;
`
const HeroPic = styled.img`
    height:70%;
    animation: shodk 2s linear infinite;
`
export default Service2RightContainer
