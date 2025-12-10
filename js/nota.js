
/* Calcular nota definitiva */
let boton = document.querySelector("#boton")

boton.addEventListener("click", function(){
    let c1 = parseFloat(document.querySelector("#c1").value)
    let c2 = parseFloat(document.querySelector("#c2").value)
    let c3 = parseFloat(document.querySelector("#c3").value)
    let def = c1 * 0.3 + c2 * 0.3 + c3 * 0.4
    let salida = document.querySelector("#salida")
    salida.innerHTML = "La nota definitiva es :"+def
})


