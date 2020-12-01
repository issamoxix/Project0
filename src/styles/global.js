import { createGlobalStyle } from "styled-components"
export const Global = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
        outline:none;
    }
    h1 {
        font-family: 'IBM Plex Serif', serif;
        font-weight:bold;
    }
    h2,h3,h4,h5,input,button,p {
        font-family: 'IBM Plex Serif', serif;
    }
    @keyframes Hovefloat {
        from {
            bottom:6px;
        }
        50% {
            bottom:3px;
        }
        to {
            bottom:6px;
        }
    }
`
export const globalTheme = {
    p100:'#2DEBAB',
    p200:'#19CF92',
    p300:'#31705B',
    p400:'#89D9BE',
    p500:'#BAFFE8',
    gF:"'IBM Plex Serif', serif" //GlobalFont
}
