import React from 'react'
import styled from 'styled-components'
import SSx from '../../assets/images/S1.png'

const ServiceLeftContainer = () => {
    return (
        <Container>
            <HeroPic src={SSx} data-aos="fade-right" />
        </Container>
    )
}
const Container = styled.div`
    flex:0.5;
    z-index:0;
`
const HeroPic = styled.img`
    position:absolute;
    height: 97%;
    bottom: 0;
    overflow-x:hidden;
`
export default ServiceLeftContainer
