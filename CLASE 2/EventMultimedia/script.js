
const Videos = [
"video/IngresaVideo.mp4",
"video/IngresarVideo1.mp4",
"video/IngresarVideo2.mp4",
"video/IngresarVideo3.mp4",
]

const playB = document.getElementById('Play')
const pauseB = document.getElementById("Pause")
const video = document.getElementById("video")
const aD = document.getElementById("ad")
const pB1 = document.getElementById("add")
const pib = document.getElementById("videoSelect")

const muted = document.getElementById("muted")
const salto = document.getElementById('salto')
const saltoatras = document.getElementById('saltonegativo')

let VC = 0
pib.addEventListener("change", e=>{
  VC = e.target.value
})
const visualizar =()=>{
  video.src = Videos[VC]
  video.load()
}
visualizar()
pib.addEventListener("change",visualizar)

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
