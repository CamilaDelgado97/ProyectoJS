const menu = [ 
    {nombre: 'Café Macchiato', importe: 350},
    {nombre: 'Café Latte', importe: 340},
    {nombre: 'Café Mocha', importe: 380},
    {nombre: 'Expreso simple', importe: 300},
    {nombre: 'Café con leche', importe: 320},
    {nombre: 'Lágrima', importe: 310}
]

function cargarTablaProductos() {
    const cuerpo = document.getElementById("cuerpo")

    menu.forEach(producto => {
        cuerpo.innerHTML += `<tr>
                                 <td>${producto.nombre}</td>
                                <td>${producto.importe}</td>
                            </tr>`
    })
}

const botonMenu = document.querySelectorAll("button")

function verMenu() {
    botonMenu.forEach(boton => {
        boton.addEventListener("click", cargarTablaProductos)
    })    
}

verMenu()