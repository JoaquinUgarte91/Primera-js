/// Pre venta de entradas para un recital.
/// El precio es fijo pero solo podremos comprar un maximo de 5.
/// 1- Bienvenida + costo del ticket.
/// 2- El usuario debe ingresar la cantidad de entradas a adquirir (maximo de 5).
/// 3- Si ingresa un numero fuera del rango nos debe mostrar un mensaje de error y devolvernos a la pantalla de cantidad
/// 4- Segun la cantidad de entradas debemos mostrar en pantalla el resultado final.




function carrito(precio, cantidad) {
    let resultado = precio * cantidad;
    return resultado;
}

let cantidad;
let precio = 200;
let total = 0;
let continuar;

alert("Bienvenido a la preventa de entradas para Metallica. El costo de la entrada es de $200");

do {
    cantidad = +prompt("Ingrese la cantidad de entradas (mínimo 1, máximo 5)");

    while (cantidad < 1 || cantidad > 5) {
        alert("La cantidad de entradas debe estar entre 1 y 5.");
        cantidad = +prompt("Ingrese la cantidad de entradas (mínimo 1, máximo 5)");
    }

    total = carrito(precio, cantidad);

    continuar = prompt("¿Estás seguro de comprar " + cantidad + " entradas? (si/no)").toLowerCase();

    while (continuar !== "no" && continuar !== "si") {
        continuar = prompt("Debe ingresar 'si' o 'no'. ¿Estás seguro de comprar " + cantidad + " entradas? (si/no)").toLowerCase();
    }

} while (continuar === "no");

alert("El precio final es de $" + total);