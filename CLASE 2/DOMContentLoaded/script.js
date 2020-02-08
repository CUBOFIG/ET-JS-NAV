addEventListener("DOMContentLoaded", ()=>{

const form = document.getElementById('form')
const recuerdame = document.getElementById("recuerdame")
const contraseña = document.getElementById("password")

form.addEventListener("submit", () =>{
  console.log("se ha enviado el formulario")
})

recuerdame.addEventListener("change", e=>{
  if(e.target.checked){
    console.log("recordar contraseña")
  }else{
    console.log("no recordar contraseña")
  }
})

//EJEMPLO FOCUS
contraseña.addEventListener("focus", e=>{
    console.log("FOCUS")
})

//EJEMPLO BLUR
contraseña.addEventListener("blur", e=>{
    console.log("FOCUS2")
})

})

addEventListener("scroll", e=>{
  console.log(scrollY)
})
addEventListener("resize", e=>{
  console.log("A",outerHeight, outerWidth)
  console.log("B",innerWidth, innerHeight)
})
