const playB = document.getElementById('Play')
const pauseB = document.getElementById("Pause")
const video = document.getElementById("video")
const aD = document.getElementById("ad")
const pB1 = document.getElementById("add")
const muted = document.getElementById("muted")
const salto = document.getElementById('salto')
const saltoatras = document.getElementById('saltonegativo')

saltoatras.addEventListener("click",()=>{
  x=video.currentTime;
  video.currentTime=x-10;
})
salto.addEventListener("click",()=>{
  x = video.currentTime;
  video.currentTime=x+10;
})

playB.addEventListener("click",()=>{
  video.play()
})
pauseB.addEventListener("click",()=>{
  video.pause()
})

aD.addEventListener("change",e=>{
  if(e.target.checked){
    video.loop=true
  }else{
    video.loop=false
  }
})

pB1.addEventListener("change",e=>{
  video.playbackRate = e.target.value
})

muted.addEventListener("change",e=>{
  if(e.target.checked){
    video.muted = true
  }else{
    video.muted = false
  }
})
