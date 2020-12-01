import React from 'react'
import styled from 'styled-components'
import HomeLeftContainer from '../components/Home/HomeLeftContainer'
import HomeRightContainer from '../components/Home/HomeRightContainer'
import next from '../assets/images/next.png'
import { scroll_To } from '../components/NavBar'
import ServiceLeftContainer from '../components/Service#1/ServiceLeftContainer'
import ServiceRightContainer from '../components/Service#1/ServiceRightContainer'
import Service2LeftContainer from '../components/Service#2/Service2LeftContainer'
import Service2RightContainer from '../components/Service#2/Service2RightContainer'
const Home = () => {
    return (
        <>
        <Container id="Home">
            <HomeLeftContainer />
            <HomeRightContainer />
            <NextPic onClick={()=>scroll_To('Service#1')} src={next} />
        </Container>
        <Container id="Service#1">
            <ServiceLeftContainer />
            <ServiceRightContainer />
        </Container>
        <Container id="Service#2">
            <Service2LeftContainer />
            <Service2RightContainer />
        </Container>
        </>
    )
}
const Container = styled.div`
    height:100vh;
    display:flex;
    justify-content:space-between;
    position:relative;
`
const NextPic = styled.img`
    position:absolute;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    height:8%;
    cursor:pointer;
    animation:Hovefloat 2s linear infinite;
`
export default Home
