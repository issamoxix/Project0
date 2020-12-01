import React from 'react'
import styled from 'styled-components'

const NavBar = () => {
    return (
        <Container>
            <Wrapper>
            <Sec>
           <Logo>
               Project0
           </Logo>
            </Sec>

            <RightSec>
                <Subscribe>Subscribe</Subscribe>
                <EmailAdd type="text" placeholder="Email Address" />
            </RightSec>
            </Wrapper>
            <Listitems>
                <Itemlist>Home</Itemlist>
                <Itemlist>About</Itemlist>
                <Itemlist>Services</Itemlist>
            </Listitems>
        </Container>
    )
}
const Container = styled.div`
    
    position:relative;
    width: 100%;
    position:fixed;
    color:#000;
    
    display:flex;
    justify-content:space-between;
    padding:12px;
`
const Logo = styled.h2`
    color:${({theme})=>theme.p300};
`
const Sec = styled.section`
    flex:0.5;
`
const RightSec = styled.section`
    flex:0.5;
    display:flex;
    flex-direction:row-reverse;
`
const Listitems = styled.ul`
    list-style:none;
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
`   
const Itemlist = styled.li`
    display:inline-block;
    margin:0 1rem;
    font-family:${({theme})=>theme.gF};
    font-weight: 300;
    cursor:pointer;
`
const Subscribe = styled.button`
    background-color:${({theme})=>theme.p200};
    border-color:transparent;
    color:#fff;
    border-radius:3px;
    padding:7px;
    transition:all 0.2s linear;
    cursor:pointer;
    font-weight:700;
    &:hover {
        background-color:${({theme})=>theme.p100};
        box-shadow:0px 4px 4px rgba(0,0,0,0.25);
    }
    &:active {
        background-color:transparent;
        border-color:${({theme})=>theme.p100};
        color:#000;
    }
`
const EmailAdd = styled.input`
    background:transparent;
    margin:0 .5rem;
    border:3px solid ${({theme})=>theme.p200};
    border-radius:10px;
    padding:7px;
    font-weight:bold;
    transition:all 0.2s linear;
    &:focus{
        border-color:${({theme})=>theme.p300};
        
    }
    &::placeholder {
        color:#e1e1e1;
    }
`
const Wrapper = styled.div`
    margin:0 2rem;
    width:100%;
    display:flex;
`
export default NavBar
