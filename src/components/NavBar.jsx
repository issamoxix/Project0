import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const scroll_To = (to)=>{
    const elem = document.getElementById(to)
    if(document.location.pathname === '/') elem.scrollIntoView()
    
}

const NavBar = () => {
    const [Bg,setBg] = useState(false)
    window.onscroll = () => window.scrollY !== 0?setBg(true):setBg(false)
    
    return (
        <Container id="NavBar" bg={Bg} >
            <Wrapper>
            <Sec>
           <Logo>
               Project0
           </Logo>
            </Sec>

            <RightSec>
                <Subscribe bg={Bg} >Subscribe</Subscribe>
                <EmailAdd type="text" placeholder="Email Address" />
            </RightSec>
            </Wrapper>
            <Listitems>
                <Link to="/">
                <Itemlist onClick={() => scroll_To('Home')} >Home</Itemlist>
                </Link>
                <Itemlist>About</Itemlist>
                <Link to="/contact">
                <Itemlist>Contact Us</Itemlist>
                </Link>
                <Itemlist onClick={() => scroll_To('Service#1')} >Services</Itemlist>
            </Listitems>
        </Container>
    )
}
const Container = styled.div`
    
    position:relative;
    width: 100%;
    position:fixed;
    color:#000;
    background:${props => {
        if(props.bg === true) return ({theme}) => theme.p100
        return 'transparent'
    }};
    ${props=>{
        if(props.bg === true)
        {
            return `
                color:#fff;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                ${Itemlist} {
                    color:#fff;
                }
            `
        }
    }}
    display:flex;
    justify-content:space-between;
    padding:12px;
    z-index:2;
    transition:all 0.2s linear;
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
    font-weight: bold;
    transition:all 0.2s linear;
    color:#868686;
    cursor:pointer;
    &:hover {
        color:${({theme})=>theme.p300};
    }
`
const Subscribe = styled.button`
    background-color:${({theme})=>theme.p200};
    border-color:transparent;
    color:#fff;
    border-radius:3px;
    padding: 7px 36px;
    transition:all 0.2s linear;
    cursor:pointer;
    font-weight:700;
    ${props=> {
        if(props.bg === true) return `
            background:transparent;
            border: 2px solid #31705B;
        `
    }}
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
    color:#fff;
    &:focus{
        border-color:${({theme})=>theme.p300};
        border-color:transparent;
        background-color:${({theme})=>theme.p200};
        
    }
    &::placeholder {
        color:#e8e8e8;
    }
`
const Wrapper = styled.div`
    margin:0 2rem;
    width:100%;
    display:flex;
`
export default NavBar
