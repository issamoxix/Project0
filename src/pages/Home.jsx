import React from 'react'
import styled from 'styled-components'
import HomeLeftContainer from '../components/HomeLeftContainer'
import HomeRightContainer from '../components/HomeRightContainer'
import next from '../assets/images/next.png'
const Home = () => {
    return (
        <Container>
            <HomeLeftContainer />
            <HomeRightContainer />
            <NextPic src={next} />
        </Container>
    )
}
const Container = styled.div`
    height:100vh;
    display:flex;
    justify-content:space-between;
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
