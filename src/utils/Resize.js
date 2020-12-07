export let PicSize = window.innerWidth * 42 / 100
export let resz = (Psx=PicSize)=> {
    window.addEventListener('resize',()=>{
        Psx = window.innerWidth * 42 / 100
      
    })
}
export let PicSizec = (per) => window.innerWidth * per / 100
export let resc = (Psx=PicSize, p)=> {
    window.addEventListener('resize',()=>{
        Psx = window.innerWidth * p / 100
      
    })
}