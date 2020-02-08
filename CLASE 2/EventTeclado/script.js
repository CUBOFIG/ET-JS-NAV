const input = document.getElementById("input")
input.addEventListener("keydown",e=>{

    if(e.key==="a","b","c"){
        console.log(`hola presionaste ${e.key}`)
    }
})
