import React from 'react'
import styled from 'styled-components'
import Rpic from '../../assets/images/Rpic.png';
const HomeRightContainer = () => {
    return (
        <Container>
            <HeroPic data-aos="flip-left" src={Rpic} />
        </Container>
    )
}
const Container = styled.div`
    
    flex:0.5;
    display:flex;
    align-items:center;
    
`
const HeroPic = styled.img`
    position: absolute;
    right: 0;
    height: 85%;
    overflow-x:hidden;
`
export default HomeRightContainer
