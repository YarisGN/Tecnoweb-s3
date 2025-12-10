/* Determinar la cantidad de dinero que recibirá un trabajador */
let botonHoras = document.querySelector("#botonHoras");

botonHoras.addEventListener("click", function() {
    let pagoHora = parseFloat(document.querySelector("#pagoHora").value);
    let horasTrabajadas = parseFloat(document.querySelector("#horasTrabajadas").value);
    let salidaHoras = document.querySelector("#salidaHoras");
    
    let totalPagar = 0;

    if (horasTrabajadas <= 40) {
        // Si trabaja 40 horas o menos, se paga normal
        totalPagar = horasTrabajadas * pagoHora;
    } else {
        // Si trabaja más de 40 horas
        let horasNormales = 40;
        let horasExtras = horasTrabajadas - 40;

        if (horasExtras <= 8) {
            // Las horas extras se pagan al doble
            totalPagar = (horasNormales * pagoHora) + (horasExtras * pagoHora * 2);
        } else {
            // Las primeras 8 al doble, el resto al triple
            let horasTriple = horasExtras - 8;
            totalPagar = (horasNormales * pagoHora) + (8 * pagoHora * 2) + (horasTriple * pagoHora * 3);
        }
    }

    // .toLocaleString("es-CO") Convierte el número a formato colombiano, usando . para miles y , para decimales.
    salidaHoras.innerHTML = "El dinero que recibirá es: $" + totalPagar.toLocaleString("es-CO", { minimumFractionDigits: 3 });
});
