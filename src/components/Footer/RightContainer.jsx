import React from 'react'
import styled from 'styled-components'
import msg from '../../assets/images/msg.png'
import { PicSizec, resc } from '../../utils/Resize'

const RightContainer = () => {
    const per = 40
    const FSi = PicSizec(per)
    resc(FSi,per)
    return (
        <Container>
            <SubscribContainer>
                <Title>Subscribe to get our latest offers !</Title>
                <SubscribeForm>
                    <SuscribetextF placeholder="Email Address" />  
                    <SubscribeSub  value='Subscribe' />
                </SubscribeForm>
            </SubscribContainer>
            <SiteMapContainer>
                <Content>
                    <ContentList>
                        <ContentItem>Services</ContentItem>
                        <ContentItem>Services</ContentItem>
                        <ContentItem>Services</ContentItem>
                    </ContentList>
                </Content>
                <Content>
                    <ContentList>
                        <ContentItem>Services</ContentItem>
                        <ContentItem>Services</ContentItem>
                        <ContentItem>Services</ContentItem>
                    </ContentList>
                </Content>
                <Content>
                    <ContentList>
                        <ContentItem>Services</ContentItem>
                        <ContentItem>Services</ContentItem>
                        <ContentItem>Services</ContentItem>
                    </ContentList>
                </Content>
              
            </SiteMapContainer>
            <FooterPic src={msg} Pi={FSi} />
        </Container> 
    )
}
const Container = styled.div`
    width:100%;
    flex:0.7;
    padding:1rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    @media(max-width:600px){
        flex:1;
    }
    
`
const SubscribContainer = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100%;
`
const Title  = styled.h2`
    color:${({theme})=>theme.p300};
    font-weight:400;
    margin-bottom:1rem;
`
const SubscribeSub = styled.input.attrs(props =>({
    type:"submit"
}))`
    padding: 0.5rem 1rem; 
    background-color:${({theme})=>theme.p100};
    color:#fff;
    font-weight:bold;
    border:3px solid transparent;
    border-color:transparent;
    margin-left:1rem;
    cursor: pointer;
    transition:all 0.2s linear;
    &:hover {
        border-radius:7px;
        background-color:transparent;
        border:3px solid ${({theme})=>theme.p100};
        color:#000;
    }
    
    
`
const SuscribetextF = styled.input.attrs(props =>({
    type:"text"
}))`
    background-color:transparent;
    border:2px solid ${({theme})=>theme.p300};
    width:78%;
    padding: 0.5rem 1rem;
    transition:all 0.2s linear;
    &:focus {
        border-radius:7px;
    }
    ${SubscribeSub}:hover & {
        background-color:${({theme})=>theme.p100};
    } 
`
const SubscribeForm = styled.div`
    width:70%;
    @media(max-width:1000px){
        width:100%;
        display: flex;
        justify-content: center;
    }
`
const SiteMapContainer = styled.div`
    display:flex;
    margin:1rem 0;
    width:100%;
`
const FooterPic = styled.img`
    @media(max-width:1000px){
        height:${props=>props.Pi}px;
    }
`
const Content = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:0.333
`
const ContentList = styled.ul`
    list-style:none; 
`
const ContentItem = styled.li`
    &:first-child {
        color:${({theme})=>theme.p300};
        font-size:22px;
        font-weight:bolder;
    }
    cursor:pointer;
    color:#c4c4c4;
    font-family:${({theme})=>theme.gF};
`
export default RightContainer
