import React from 'react'
import styled from 'styled-components'
import auto from '../../assets/images/auto.png'
import {PicSize,resz} from '../../utils/Resize'
const Service2RightContainer = () => {
    resz()
    return (
        <Container>
           <HeroPic data-aos="flip-down" Ps={PicSize} src={auto} />
        </Container>
    )
}
const Container = styled.div`
    flex:0.5;
    display:flex;
    align-items:center;
    justify-content:center;
    @media(max-width:600px){
        display:none;
    }
    @media(max-width:1000px){
      width:50%;
    }
`
const HeroPic = styled.img`
    height:70%;
    animation: shodk 2s linear infinite;
    @media(max-width:1000px){
      height:${props=>props.Ps}px;
      
    }
`
export default Service2RightContainer
