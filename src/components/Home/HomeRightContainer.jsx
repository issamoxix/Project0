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
    @media (max-width: 600px) {
    justify-content:center;
    position:absolute;
    bottom:5%;
    left:50%;
    transform:translateX(-50%);
    height:42%;
    width:90%;
  }
    
`
const HeroPic = styled.img`
    position: absolute;
    right: 0;
    height: 85%;
    overflow-x:hidden;
    @media (max-width: 600px) {
    position:initial;
    height: 100%;

  }
`
export default HomeRightContainer
