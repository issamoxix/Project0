import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Dm from '../assets/images/Dmenu.png';
import Em from '../assets/images/Emenu.png';

export const scroll_To = (to)=>{
    const elem = document.getElementById(to)
    if(document.location.pathname === '/') elem.scrollIntoView()
    
    
}

const NavBar = () => {
    const [Bg,setBg] = useState(false)
    window.onscroll = () => window.scrollY !== 0?setBg(true):setBg(false)
    const [click,setClick] = useState(false);
    const [serviceClick ,setServiceClick] = useState(false)
    return (
        <>
        <Container id="NavBar" bg={Bg} >
            <Wrapper>
            <Sec>
            <Link to="/">
                <Logo onClick={() => scroll_To('Home')} >Project0</Logo>
               </Link>
           <MenuM onClick={() => {
               setClick(!click)
               setServiceClick(serviceClick && false)
           }} src={click?Dm:Em} />
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
        <MenuMobileContainer clk={click} >
            <MenuMobileList>
                <Link to='/'>
                <MenuMobileListItem onClick={() => {
                    scroll_To('Home')
                    setClick(!click)
                }} >Home</MenuMobileListItem>
                </Link>
                <MenuMobileListItem onClick={()=>setServiceClick(!serviceClick)} >Services </MenuMobileListItem>
                <Link to="/contact">
                    <MenuMobileListItem onClick={()=> setClick(!click)} >Contact Us</MenuMobileListItem>
                    </Link>
                <MenuMobileListItem onClick={()=> setClick(!click)} >About</MenuMobileListItem>
            </MenuMobileList>
        </MenuMobileContainer>
        <ServicesMenu Servicecc={serviceClick} >
            <MenuMobileList>
                <MenuMobileListItem onClick={() => {
                    scroll_To('Service#1')
                    setServiceClick(!serviceClick)
                    setClick(false)
                }} >Create Website</MenuMobileListItem>
                <MenuMobileListItem onClick={() => {
                    scroll_To('Service#2')
                    setServiceClick(!serviceClick)
                    setClick(false)
                }} >Automate</MenuMobileListItem>
            </MenuMobileList>
        </ServicesMenu>
        </>
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
    @media(max-width:900px){
        z-index:4;
    }
`
const Logo = styled.h2`
    color:${({theme})=>theme.p300};
`
const Sec = styled.section`
    flex:0.5;
    @media(max-width:900px){
        flex:1;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
`
const RightSec = styled.section`
    flex:0.5;
    display:flex;
    flex-direction:row-reverse;
    @media (max-width: 900px) {
    display:none;
  }
`
const Listitems = styled.ul`
    list-style:none;
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    @media (max-width: 900px) {
    display:none;
  }
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
const MenuM = styled.img`
    display:none;
    transition:all 0.2s linear;
    @media(max-width:900px){
        display:initial;
        height:70%;
        
    }
    
`
const MenuMobileList = styled.ul`
    list-style:none;
`
const MenuMobileListItem = styled.li`
    width: 100vw;
    text-align: center;
    font-family: 'IBM Plex Serif',serif;
    font-weight: 700;
    background-color: #2DEBAB;
    color: #fff;
    border-radius: 7px;
    padding: 15px;
    height: 20vh;
    display: flex;
    margin: .1rem 0 .1rem 0;
    box-shadow: rgb(45 235 171) 0px 0px 5px;
    justify-content: center;
    align-items: center;
`
// Mobile container hide in the left side of the screen 
const MenuMobileContainer = styled.div`
    height:100vh;
    width:100vw;
    z-index:3;
    background-color:${({theme})=>theme.p500};
    position:fixed;
    transition:all 0.2s linear;
    transform:translateX(-100%);
    align-items:center;
    ${props=>props.clk?"transform:translateX(0%);":"transform:translateX(-100%);"}
    display:none;
    @media(max-width:900px){
        display:flex;
    }
`
// Servcei Menu container hide in the right side of the screen 
const ServicesMenu = styled.div`
    align-items:center;
    z-index:3;
    background-color:black;
    transition:all 0.2s linear;
    position:fixed;
    height:100vh;
    width:100vw;
    background-color:${({theme})=>theme.p400};
    ${props=>props.Servicecc?"transform:translateX(0%);":"transform:translateX(100%);"}
    display:none;
    @media(max-width:900px){
        display:flex;
    }
    
`
export default NavBar
