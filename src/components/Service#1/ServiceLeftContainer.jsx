import React from 'react'
import styled from 'styled-components'
import SSx from '../../assets/images/S1.png'
import {PicSize,resz} from '../../utils/Resize'

const ServiceLeftContainer = () => {
    resz()
    return (
        <Container>
            <HeroPic src={SSx} Ps={PicSize}  data-aos="fade-right" />
        </Container>
    )
}
const Container = styled.div`
    flex:0.5;
    z-index:0;
    @media(max-width:1000px){
        display:flex;
      align-items:center;
      width:57%;
    }
    @media(max-width:600px){
        flex:1;
        display:none;
        
    }
`
const HeroPic = styled.img`
    position:absolute;
    height: 97%;
    bottom: 0;
    overflow-x:hidden;
    @media(max-width:1000px){
      height:${props=>props.Ps}px;
      position:initial;
    }
`
export default ServiceLeftContainer
