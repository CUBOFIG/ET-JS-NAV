const title = document.getElementById("title")
const Ejemplos = [...document.querySelectorAll("li")]

let Alertas = e => alert(e.target.textContent)

title.addEventListener("click", e =>{
    Alertas(e)
})

document.querySelector("button").addEventListener("dblclick",e=>{
    Alertas(e)
} )

Ejemplos[0].addEventListener("mouseenter", e=>{
    Alertas(e)
})

Ejemplos[1].addEventListener("mouseleave", e=>{
    Alertas(e)
})

Ejemplos[2].addEventListener("contextmenu", e=>{
    Alertas(e)
    e.preventDefault()
})

Ejemplos[3].addEventListener("mousedown", e=>{
    Alertas(e)
    e.preventDefault()
})

Ejemplos[4].addEventListener("mouseup", e=>{
    Alertas(e)
    e.preventDefault()
})

Ejemplos[5].addEventListener("mousemove", e=>{
    Alertas(e)
    e.preventDefault()
})

//---------------------------------------------------------------



const MenuCont = e =>{
    const menu = document.createElement("div") 
    const prevmenu = document.getElementById("contexmenu") 

    menu.textContent= "soy un menu"  //crear
    menu.id = "contexmenu" //crear

    if(prevmenu) document.body.removeChild(prevmenu) //saber si existe este id, para eliminar
    
    document.body.appendChild(menu) //meter

    menu.style.padding="1em"
    menu.style.background="#eee"
    menu.style.position="fixed"
    menu.style.top=`${e.pageY}px`
    menu.style.left=`${e.pageX}px`

}

document.addEventListener("contextmenu", e=>{
    console.log(e.pageX, e.pageY)
    MenuCont(e)
    e.preventDefault()
})