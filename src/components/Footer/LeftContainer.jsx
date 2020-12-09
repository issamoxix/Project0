import React from 'react'
import styled from 'styled-components'
import fti from '../../assets/images/footer.png'
import twitter from '../../assets/images/twitter.png';
import fb from '../../assets/images/fb.png';
import insta from '../../assets/images/insta.png';
import { PicSizec, resc } from '../../utils/Resize';

const LeftContainer = () => {
    const per = 45
    const FSi = PicSizec(per)
    resc(FSi,per)
    return (
        <Container>
            <Heroimg src={fti} Po={FSi} />
            <MediaWrapper>
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
            </MediaWrapper>
            <Powered>Websites Created By H.Issam Project0</Powered>
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    flex:0.3;
    @media(max-width:1000px){
        justify-content: center;
        display: flex;
        flex-direction: column;
    }
    @media(max-width:600px){
        flex:0;
    }
`
const Heroimg = styled.img`
    height:70%;
    @media(max-width:1000px){
        height:${props=>props.Po}px;
    }
    @media(max-width:600px){
        display:none;
    }
`
const Media = styled.div`
    
    display:flex;
    align-items:center;
    height:37%;
    transition:all 0.2s linear;

    &:hover {
        transform:translateY(-3px);
    }
    @media(max-width:600px){
        
    }
`
const Logo = styled.img`
    height:82%;
    @media(max-width:600px){
        height:7vh;
    }
`
const Title = styled.h3`
    margin-left:.2rem;
    color:${props=> props.color};
    cursor:pointer;
    transition:all 0.2s linear;
    @media(max-width:600px){
        display:none;
    }
`
const Powered = styled.h5`
    position:absolute;
    left:50%;
    transform:translateX(-50%);
    color:#c1c1c1;
    bottom:5%;
    @media(max-width:600px){
        left:4%;
        transform:translateX(0%);
        width:50%;
    }
`
const MediaWrapper = styled.div`
    height:20%;
    margin-top:2rem;
    @media(max-width:600px){
        position:absolute;        
        bottom: 4%;
        display: flex;
        height: auto;
        right: 4%;
    }
`
export default LeftContainer
