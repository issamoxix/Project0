import React from 'react'
import styled from 'styled-components'
import img from '../assets/images/City.jpg'
import { ContactData } from '../data/ContactPage'
const Contact = () => {
    return (
        <Container>
            <LeftContainer>
                <Section>

                <Title>
                {ContactData[0].Title}
                </Title>
                <Seperated />
                <BodyT>
                {ContactData[0].Body}
                </BodyT>
                <Seperated />
                
                <Det>Address : <Sp>{ContactData[0].Address}</Sp> </Det>
                <Det>Phone : <Sp>{ContactData[0].Phone}</Sp></Det>
                <Det>Email : <Sp>{ContactData[0].Email}</Sp></Det>
                </Section>
            </LeftContainer>
            <RightContainer>
            </RightContainer>
                <Form data-aos="flip-down">
                    <Text placeholder="Name" type="text" />
                    <Text placeholder="Email Addresse" type="text" />
                    <Text placeholder="Subject" type="text" />
                    <TxtA placeholder="Message" ></TxtA>
                    <SendButton>Send</SendButton>
                </Form>
        </Container>
    )
}

const Container = styled.div`
    background-image:url(${img});
    height:100vh;
    display:flex;
    justify-content:space-between;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`
const LeftContainer = styled.div`
    flex:0.5;
    background-color:${({theme})=>theme.p100};
    opacity: 0.94;
    display:flex;
    align-items:center;
`
const RightContainer = styled.div`
    flex:0.5;
    background-color:${({theme})=>theme.p300};
    opacity: 0.94;
    display:flex;
    align-items:center;
`
const Title = styled.h1`
    
    color: #fff;
    margin: 0 0 2rem;
    font-size: 3rem;
    font-weight: 600;

`
const Seperated = styled.div`
    background-color:#fff;
    background-color: #fff;
    height: 3px;
    border-radius: 7px;
    width: 17%;
    margin:0 0 1rem 0;
`
const BodyT = styled.p`
    width: 64%;
    margin: 1rem 0;
    font-size: 24px;
    color: #fff;
    font-weight: lighter;
`
const Section = styled.section`
    margin: 0 2rem;
    @media(max-width:1000px){
        display:none;
    }
`
const Det = styled.h4`
    color:#fff;
`
const Sp = styled.span`
    color:#e6e6e6;
`
const Form = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:#fff;
    height: 71%;
    position: absolute;
    width: 44%;
    left: 39%;
    bottom: 10%;
    transition:all 0.2s linear;
    box-shadow:0px 4px 4px rgba(0,0,0,0.25);
    @media(max-width:1000px){
        left:0;
        width:100%;
    }
    
`
const Text = styled.input`
    
    padding: 12px;
    border-color: transparent;
    border-bottom: 3px solid #37eaaf;
    margin-bottom: .7rem;
    width:80%;
`
const TxtA = styled.textarea`
    width: 80%;
    border-color: transparent;
    height: 35%;
    border-bottom: 3px solid ${({theme})=>theme.p100};
    padding: 7px;
    font-family:${({theme})=>theme.gF};
    margin-bottom: 2rem;
`
const SendButton = styled.button`
    background-color: transparent;
    border-color: ${({theme})=>theme.p100};
    color: ${({theme})=>theme.p100};
    border: 3px solid ${({theme})=>theme.p100};
    padding: 6px 37px;
    border-radius: 7px;
    font-size: 17px;
    align-self: start;
    margin-left: 3.6rem;
    cursor:pointer;
    transition:all 0.2s linear;
    &:hover {
        color:#fff;
        background-color: ${({theme})=>theme.p100};
        border-color:transparent;
    }
    @media(max-width:1000px){
        padding: 6px 31%;
        position:absolute; 
        left:50%;
        bottom:3%;
        margin-left: 0;
        transform:translateX(-50%);
    }
`
export default Contact
