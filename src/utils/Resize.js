export let PicSize = window.innerWidth * 42 / 100
export let resz = (Psx=PicSize)=> {
    window.addEventListener('resize',()=>{
        Psx = window.innerWidth * 42 / 100
      
    })
}