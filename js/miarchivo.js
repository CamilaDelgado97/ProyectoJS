console.log("Bienvenido a Cafeland, escriba 'mostrarMenu()' para ver el menu");

const menu = []

class Cafe {
    constructor(nombre, importe) {
        this.nombre = nombre
        this.importe = importe
    }
}

function mostrarMenu() {
    menu.push(new Cafe('Café Macchiato', 350));
    menu.push(new Cafe('Café Latte', 340));
    menu.push(new Cafe('Café Mocha', 380));
    menu.push(new Cafe('Expreso simple', 300));
    menu.push(new Cafe('Café con leche', 320));
    menu.push(new Cafe('Lágrima', 310));
    console.table(menu);
    console.log("Escriba 'hacerPedido()' cuando haya decidido el café a elegir.")
}

mostrarMenu()

const carrito = []

function hacerPedido() {
    let eleccion = prompt("Cuál café desea llevar? (por favor escribir tal cual)");
    const resultado = menu.find(producto => producto.nombre === eleccion);

    while (!resultado) {
        return ("No tenemos ese café :( intenta de nuevo.")
    }

    carrito.push(new Cafe(resultado.nombre, resultado.importe));
    console.log("Su pedido es el siguiente: ")
    console.log(resultado)

    console.log("El producto ha sido agregado. Si desea otro café, escriba 'agregarCafe()', si desea abonar, escriba 'abonar()'")
}

function agregarCafe() {
    let eleccion = prompt("Cuál café desea llevar? (por favor escribir tal cual)");
    const resultado = menu.find(producto => producto.nombre === eleccion);

    while (!resultado) {
        return ("No tenemos ese café :( intenta de nuevo.")
    }

    carrito.push(new Cafe(resultado.nombre, resultado.importe));
    console.log("Su pedido es el siguiente: ")
    console.log(resultado)
    console.log("El producto ha sido agregado. Si desea otro café, escriba 'agregarCafe()', si desea abonar, escriba 'abonar()'")
}

function abonar() {
    let total = carrito.reduce((acumulador, producto) => acumulador + producto.importe, 0)
    console.log("Total a pagar: $ ", total);

    let pagar = prompt("¿Con cuanto desea abonar?")

    if (pagar > total) {
        console.log("Su vuelto es: $ " + (pagar - total) + " ¡Qué lo disfrute!");
    } else {
        console.log("Saldo insuficiente.");
    }
}

function cargarTablaProductos() {
    const cuerpo = document.getElementById("cuerpo")

    menu.forEach(producto => {
        cuerpo.innerHTML += `<tr>
                                 <td>${producto.nombre}</td>
                                <td>${producto.importe}</td>
                            </tr>`
    })
}

