import React from 'react'
import styled from 'styled-components'
import fti from '../../assets/images/footer.png'
import twitter from '../../assets/images/twitter.png';
import fb from '../../assets/images/fb.png';
import insta from '../../assets/images/insta.png';

const LeftContainer = () => {
    return (
        <Container>
            <Heroimg src={fti} />
            <Media>
                <Logo src={twitter} />
                <Title color="#55ACEE">@Project0</Title>
            </Media>
            <Media>
                <Logo src={fb} />
                <Title color="#3B5998">@Project0</Title>
            </Media>
            <Media>
                <Logo src={insta} />
                <Title color="#EA5E7F">@Project0</Title>
            </Media>
            <Powered>Websites Created By H.Issam Project0</Powered>
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    flex:0.3;
`
const Heroimg = styled.img`
    height:70%;
`
const Media = styled.div`
    
    display:flex;
    align-items:center;
    height:8%;
    transition:all 0.2s linear;

    &:hover {
        transform:translateY(-3px);
    }
`
const Logo = styled.img`
    height:82%;
`
const Title = styled.h3`
    margin-left:.2rem;
    color:${props=> props.color};
    cursor:pointer;
    transition:all 0.2s linear;
    
`
const Powered = styled.h5`
    position:absolute;
    left:50%;
    transform:translateX(-50%);
    color:#c1c1c1;

`
export default LeftContainer
