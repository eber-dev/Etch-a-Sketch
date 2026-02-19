const container = document.querySelector("#container")
const cambiar = document.querySelector("#btn1")
const reiniciar = document.querySelector("#btn2")
const array = []


function cuadricula16(container,cantidad){
    for(let i=0; i<Math.pow(cantidad,2);i++){
        const div = document.createElement("div");
        div.classList.add("cuadricula")
        div.style.height = `calc(100%/${cantidad})`
        div.style.width = `calc(100%/${cantidad})`
        div.style.border = "1px solid black"
        div.dataset.nivel = 0;
        div.onmouseover = function(){  
            let nivel = Number(++div.dataset.nivel); //incrementa y luego devuelve
            if(nivel === 1){
                div.style.backgroundColor = coloraleatorio()
            }else if(nivel>1 && nivel<11){
                div.style.filter=`brightness(${-10*nivel+110}%)`
            }else{
                div.style.filter="brightness(0%)"
            }            
        }
        array.push(div);
    }

    for(let i = 0; i<array.length; i++){
        container.appendChild(array[i])
    }
}

function borrado(container){
    array.length=0;
    container.replaceChildren();
    return true;
}

function coloraleatorio(){
    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)

    return `rgb(${r},${g},${b})`    
}

cuadricula16(container,16)

cambiar.addEventListener("click",()=>{
    let cuadro = parseInt(prompt("Ingrese un numero de cuadricula max 100:"))
    let condicion = cuadro>100||cuadro<=0
    if(typeof cuadro !== "number" || condicion==true){
        alert("El valor ingresado no es valido")
        return
    }else{
        let validar = borrado(container)
        if(validar){
            cuadricula16(container,cuadro);
        }

    }
})

reiniciar.addEventListener("click",()=>{
    let resetear = borrado(container)
    if(resetear){
        cuadricula16(container,16)
    }

})

