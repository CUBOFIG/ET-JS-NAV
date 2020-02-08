let x=0,y=0

addEventListener(`keyup`, e=>{
  const ball = document.getElementById("ball")

  const move = direction => {

    switch (direction) {
      case "up":
          y--
         break;
      case "down":
          y++
         break;
      case "left":
          x--
         break;
      case "right":
          x++
         break;
    }
    ball.style.transform =`translate(${x*20}px,${y*20}px)`}

  switch (e.key) {
    case "ArrowUp":
          move("up")
      break;
    case "ArrowDown":
          move("down")
      break;
    case "ArrowRight":
          move("right")
        break;
    case "ArrowLeft":
          move("left")
        break;

    default: alert("Usa las teclas correctas")
  }
})
