function ingresarNombre() {

    console.log("Bienvenido a Cafeland, escriba 'mostrarMenu()' para ver el menu");
    let nombre = prompt("¿Cuál es su nombre?");

    while (nombre === "" || nombre === null) {
        nombre = prompt("¿Cuál es su nombre?");
    }
}

function mostrarProductos(){

    let producto;

        do{
            producto = prompt(
                "¿Qué café desea hoy? \n1-Café Macchiato \n2-Café Latte \n3-Café Mocha \n4-Expreso simple \n5-Café con leche \n6-Lágrima");
        } while(producto != 1 && producto != 2 && producto != 3 && producto != 4 && producto != 5 && producto != 6);
        switch(producto){
            case "1":
                return "Café Macchiato"
            case "2":
                return "Café Latte"
            case "3":
                return "Café Mocha"
            case "4":
                return "Expreso simple"
            case "5":
                return "Café con leche"
            case "6":
                return "Lágrima";
        }
    }

function validarPrecio(producto) {
    if(producto === "Café Macchiato"){
        return 350
    }else if(producto === "Café Latte"){
        return 340
    }else if(producto === "Café Mocha"){
        return 380
    }else if(producto === "Expreso simple"){
        return 300
    }else if(producto === "Café con leche"){
        return 320
    }else{
        return 310
    }
}

function cobrar (producto, precio) {
    alert("Usted lleva el siguiente café: "+
    producto.toUpperCase() +
    "\nPrecio $ " +
    precio);

    let pagar = prompt("¿Con cuanto abonará?")
    if (pagar > precio){
        alert("Su vuelto es: $ " + (pagar - precio));
    } else {
        alert("Saldo insuficiente.");
    }
}


ingresarNombre();
let cafeSeleccionado = mostrarProductos();
let precioCafe = validarPrecio(cafeSeleccionado);
cobrar(cafeSeleccionado, precioCafe);