const productos = [
    { nombre: "swim dots", precio: 50 },
    { nombre: "swim picasso", precio: 52 },
    { nombre: "swim ocean", precio: 49 },
]

let seleccion = prompt("Bienvenid@!¿Deseas comprar (si o no)?")

let carrito = []

while (seleccion != "si" && seleccion != "no") {
    alert("Por favor ingresa si o no")
    seleccion = prompt("Bienvenid@!¿Deseas comprar (si o no)?")
}

if (seleccion == "si") {
    alert("Genial! Los productos disponibles son")
    let todosProductos = productos.map(
        (productos) => productos.nombre + " " + productos.precio + "USD$");
    alert(todosProductos.join(" - "))
} else if (seleccion == "no") {
    alert("Gracias por venir, vuelve pronto!")
}

while (seleccion != "no") {
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0

    if (producto == "swim dots" || producto == "swim picasso" || producto == "swim ocean") {
        switch (producto) {
            case "swim dots":
                precio = 50
                break;
            case "swim picasso":
                precio = 52
                break;
            case "swim ocean":
                precio = 49
                break;
            default:
                break;
        }

        let unidades = parseInt(prompt("¿Cuantas unidades quieres comprar?"))

        carrito.push({ producto, unidades, precio })
        console.log(carrito)
    } else {
        alert("No tenemos ese producto")
    }

    seleccion = prompt("¿Deseas seguir añadiendo productos al carrito?")

    while (seleccion === "no"); {
        alert("Genial, mira el carrito de compra:")
        carrito.forEach((carritoFinal) => {
            console.log(
              `producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`
            );
          });        
        break;

    }
}
