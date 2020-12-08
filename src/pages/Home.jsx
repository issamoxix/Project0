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
import LeftContainer from '../components/Footer/LeftContainer'
import RightContainer from '../components/Footer/RightContainer'
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
        <FooterContainer id="Footer">
            <LeftContainer />
            <RightContainer />
        </FooterContainer>
        </>
    )
}
const Container = styled.div`
    height:100vh;
    display:flex;
    justify-content:space-between;
    position:relative;
    @media (max-width: 600px) {
    width:100vw;
    flex-direction:column;
  }
`
const FooterContainer = styled(Container)`
    background:${({theme})=>theme.p500};
    padding:.6rem .6rem 0 .6rem;
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
