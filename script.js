const container = document.querySelector("#container")
const array = []

for(let i=0; i<256;i++){
    const div = document.createElement("div");
    div.classList.add("cuadricula")
    array.push(div);
}

for(let i = 0; i<array.length; i++){
    container.appendChild(array[i])
}


